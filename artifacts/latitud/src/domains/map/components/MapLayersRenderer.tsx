import { useEffect } from "react";
import { Source, Layer, useMap } from "react-map-gl/mapbox";
import { useMapStore } from "@/domains/map/store/map.store";

export function MapLayersRenderer() {
  const { current: mapRef } = useMap();
  const activeLayer = useMapStore((s) => s.activeLayer);

  // Cycling overlay — adds a green highlight on bike-path road classes.
  // We add a new layer instead of toggling existing ones because streets-v12
  // already renders road-path/road-pedestrian as visible by default.
  useEffect(() => {
    if (!mapRef) return;
    const map = mapRef.getMap();
    const ID = "latitud-cycling";

    const apply = () => {
      try {
        if (!map.getLayer(ID)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          map.addLayer({
            id: ID,
            type: "line",
            source: "composite",
            "source-layer": "road",
            filter: ["match", ["get", "class"], ["path", "pedestrian"], true, false],
            layout: { "line-join": "round", "line-cap": "round" },
            paint: {
              "line-color": "#22c55e",
              "line-width": 2.5,
              "line-opacity": 0.9,
              "line-dasharray": [2, 1.5],
            },
          } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
        }
        map.setLayoutProperty(ID, "visibility", activeLayer === "bicycling" ? "visible" : "none");
      } catch { /* map not ready or source-layer unavailable */ }
    };

    if (map.isStyleLoaded()) apply(); else map.once("style.load", apply);
  }, [mapRef, activeLayer]);

  // Transit overlay — adds purple circles on transit stop points.
  // transit_stop_label is a point source-layer from mapbox-streets-v8 (bundled in streets-v12).
  useEffect(() => {
    if (!mapRef) return;
    const map = mapRef.getMap();
    const ID = "latitud-transit";

    const apply = () => {
      try {
        if (!map.getLayer(ID)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          map.addLayer({
            id: ID,
            type: "circle",
            source: "composite",
            "source-layer": "transit_stop_label",
            paint: {
              "circle-radius": 6,
              "circle-color": "#818cf8",
              "circle-stroke-width": 2,
              "circle-stroke-color": "#ffffff",
              "circle-opacity": 0.9,
            },
          } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
        }
        map.setLayoutProperty(ID, "visibility", activeLayer === "transit" ? "visible" : "none");
      } catch { /* source-layer may not exist in this tile region */ }
    };

    if (map.isStyleLoaded()) apply(); else map.once("style.load", apply);
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
            ["==", ["get", "congestion"], "low"],      "#4ade80",
            ["==", ["get", "congestion"], "moderate"], "#facc15",
            ["==", ["get", "congestion"], "heavy"],    "#f97316",
            ["==", ["get", "congestion"], "severe"],   "#ef4444",
            "#94a3b8",
          ],
          "line-width": 2.5,
        }}
      />
    </Source>
  );
}
