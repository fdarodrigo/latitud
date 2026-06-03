import { useEffect, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useMapStore } from "@/domains/map/store/map.store";

export type LayerType = "traffic" | "transit" | "bicycling";

export function useMapLayers() {
  const map = useMap();
  const activeLayer = useMapStore((s) => s.activeLayer);

  const trafficRef = useRef<google.maps.TrafficLayer | null>(null);
  const transitRef = useRef<google.maps.TransitLayer | null>(null);
  const bicyclingRef = useRef<google.maps.BicyclingLayer | null>(null);

  // Initialise layer objects once
  useEffect(() => {
    if (!map) return;
    trafficRef.current = new google.maps.TrafficLayer();
    transitRef.current = new google.maps.TransitLayer();
    bicyclingRef.current = new google.maps.BicyclingLayer();

    return () => {
      trafficRef.current?.setMap(null);
      transitRef.current?.setMap(null);
      bicyclingRef.current?.setMap(null);
    };
  }, [map]);

  // Toggle layers whenever activeLayer changes
  useEffect(() => {
    if (!map) return;
    trafficRef.current?.setMap(activeLayer === "traffic" ? map : null);
    transitRef.current?.setMap(activeLayer === "transit" ? map : null);
    bicyclingRef.current?.setMap(activeLayer === "bicycling" ? map : null);
  }, [map, activeLayer]);
}
