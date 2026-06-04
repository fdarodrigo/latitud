import { Map } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStore } from "@/domains/map/store/map.store";
import { PriceMarker } from "./PriceMarker";
import { useListings } from "@/domains/listings/hooks/useListings";
import { DrawingLayer } from "@/domains/map/hooks/useDrawing";
import { MapLayersRenderer } from "@/domains/map/hooks/useMapLayers";
import { NearbyMarkers } from "@/domains/map/hooks/useNearbySearch";
import { useFilters } from "@/domains/search/hooks/useFilters";
import { ListingModal } from "@/domains/listings/components/ListingModal";
import { MAPBOX_TOKEN, MAP_STYLE, FORTALEZA_CENTER } from "@/lib/mapbox";
import type { Listing } from "@/domains/listings/mocks/listings.mock";

function MapInner() {
  const { filteredListings, selectedListing, setSelectedListing } = useMapStore();
  const { isLoading } = useListings();

  useFilters();

  const handleMarkerClick = (listing: Listing) => {
    setSelectedListing(listing);
  };

  return (
    <div className="relative w-full h-full" data-testid="map-container">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-full border-3 border-sky-200 border-t-sky-500 animate-spin" />
            <span className="text-sm text-slate-500 font-medium">
              Carregando imóveis...
            </span>
          </div>
        </div>
      )}

      <Map
        initialViewState={FORTALEZA_CENTER}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }}
        reuseMaps
      >
        {filteredListings.map((listing) => (
          <PriceMarker
            key={listing.id}
            listing={listing}
            isSelected={selectedListing?.id === listing.id}
            onClick={handleMarkerClick}
          />
        ))}

        <DrawingLayer />
        <MapLayersRenderer />
        <NearbyMarkers />
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
  if (!MAPBOX_TOKEN) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100">
        <div className="text-center p-8 max-w-sm">
          <p className="text-slate-600 text-sm font-semibold mb-1">
            Token do Mapbox não configurado
          </p>
          <p className="text-slate-400 text-xs">
            Adicione a variável{" "}
            <code className="bg-slate-200 px-1 rounded">VITE_MAPBOX_TOKEN</code>{" "}
            nas configurações de ambiente.
          </p>
        </div>
      </div>
    );
  }

  return <MapInner />;
}
