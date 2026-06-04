import { useEffect } from "react";
import { Source, Layer, useMap } from "react-map-gl/mapbox";
import { useMapStore } from "@/domains/map/store/map.store";

const CYCLING_LAYERS = ["road-path", "road-pedestrian"];

export function MapLayersRenderer() {
  const { current: mapRef } = useMap();
  const activeLayer = useMapStore((s) => s.activeLayer);

  useEffect(() => {
    if (!mapRef) return;
    const map = mapRef.getMap();
    const apply = () => {
      const v = activeLayer === "bicycling" ? "visible" : "none";
      CYCLING_LAYERS.forEach((id) => { try { map.setLayoutProperty(id, "visibility", v); } catch {} });
    };
    if (map.isStyleLoaded()) apply(); else map.once("load", apply);
  }, [mapRef, activeLayer]);

  useEffect(() => {
    if (!mapRef) return;
    const map = mapRef.getMap();
    const apply = () => {
      try { map.setLayoutProperty("transit-label", "visibility", activeLayer === "transit" ? "visible" : "none"); } catch {}
    };
    if (map.isStyleLoaded()) apply(); else map.once("load", apply);
  }, [mapRef, activeLayer]);

  return (
    <Source id="mapbox-traffic" type="vector" url="mapbox://mapbox.mapbox-traffic-v1">
      <Layer
        id="traffic-layer"
        type="line"
        source-layer="traffic"
        layout={{ visibility: activeLayer === "traffic" ? "visible" : "none" }}
        paint={{
          "line-color": [
            "case",
            ["==", ["get", "congestion"], "low"], "#4ade80",
            ["==", ["get", "congestion"], "moderate"], "#facc15",
            ["==", ["get", "congestion"], "heavy"], "#f97316",
            ["==", ["get", "congestion"], "severe"], "#ef4444",
            "#94a3b8",
          ],
          "line-width": 2.5,
        }}
      />
    </Source>
  );
}
