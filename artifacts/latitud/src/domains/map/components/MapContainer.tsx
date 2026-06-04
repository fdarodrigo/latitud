import { Component, type ReactNode } from "react";
import { Map } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
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
import { ExternalLink } from "lucide-react";

// ── Error boundary to catch WebGL runtime failures ──────────────────────────
class MapErrorBoundary extends Component<
  { children: ReactNode },
  { error: string | null }
> {
  state = { error: null };
  static getDerivedStateFromError(err: Error) {
    return { error: err.message };
  }
  render() {
    if (this.state.error) return <WebGLFallback />;
    return this.props.children;
  }
}

function WebGLFallback() {
  const appUrl = window.location.origin + "/map";
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50">
      <div className="text-center p-8 max-w-sm">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(14,165,233,0.12)" }}
        >
          <ExternalLink className="w-7 h-7 text-sky-500" />
        </div>
        <p className="text-slate-800 text-sm font-bold mb-1">
          Abra o mapa no navegador
        </p>
        <p className="text-slate-500 text-xs mb-5 leading-relaxed">
          O mapa Mapbox requer WebGL, que não está disponível no painel de
          preview. Abra em uma aba separada para ver o mapa completo.
        </p>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105"
          style={{ background: "#0ea5e9", boxShadow: "0 4px 16px rgba(14,165,233,0.35)" }}
        >
          Abrir em nova aba
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// ── Main map component ───────────────────────────────────────────────────────
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

// ── Public export ────────────────────────────────────────────────────────────
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

  if (!mapboxgl.supported()) {
    return <WebGLFallback />;
  }

  return (
    <MapErrorBoundary>
      <MapInner />
    </MapErrorBoundary>
  );
}
