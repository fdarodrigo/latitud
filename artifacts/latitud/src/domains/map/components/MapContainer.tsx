import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useMapStore } from "@/domains/map/store/map.store";
import { PriceMarker } from "./PriceMarker";
import { useListings } from "@/domains/listings/hooks/useListings";
import { useDrawing } from "@/domains/map/hooks/useDrawing";
import { useMapLayers } from "@/domains/map/hooks/useMapLayers";
import { useNearbySearch } from "@/domains/map/hooks/useNearbySearch";
import { useFilters } from "@/domains/search/hooks/useFilters";
import { ListingModal } from "@/domains/listings/components/ListingModal";
import type { Listing } from "@/domains/listings/mocks/listings.mock";

const FORTALEZA = { lat: -3.7318, lng: -38.504 };
const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY as string;

const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5f5e5" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
  { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
  { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#bde0f5" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
];

function MapInner() {
  const { filteredListings, selectedListing, setSelectedListing } = useMapStore();
  const { isLoading } = useListings();

  // All map-context hooks
  useFilters();
  useDrawing();
  useMapLayers();
  useNearbySearch();

  const handleMarkerClick = (listing: Listing) => {
    setSelectedListing(listing);
  };

  return (
    <div className="relative w-full h-full" data-testid="map-container">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-full border-3 border-sky-200 border-t-sky-500 animate-spin" />
            <span className="text-sm text-slate-500 font-medium">Carregando imóveis...</span>
          </div>
        </div>
      )}

      <Map
        defaultCenter={FORTALEZA}
        defaultZoom={13}
        styles={MAP_STYLES}
        gestureHandling="greedy"
        disableDefaultUI={false}
        clickableIcons={false}
        style={{ width: "100%", height: "100%" }}
      >
        {filteredListings.map((listing) => (
          <PriceMarker
            key={listing.id}
            listing={listing}
            isSelected={selectedListing?.id === listing.id}
            onClick={handleMarkerClick}
          />
        ))}
      </Map>

      {selectedListing && (
        <ListingModal
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
        />
      )}
    </div>
  );
}

export function MapContainer() {
  if (!GOOGLE_MAPS_KEY) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100">
        <div className="text-center p-8">
          <p className="text-slate-500 text-sm">
            Chave da API do Google Maps não configurada.
          </p>
          <p className="text-slate-400 text-xs mt-1">
            Adicione VITE_GOOGLE_MAPS_KEY nas variáveis de ambiente.
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={GOOGLE_MAPS_KEY} libraries={["places", "geometry"]}>
      <MapInner />
    </APIProvider>
  );
}
