import { useEffect, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useMapStore } from "@/domains/map/store/map.store";

export function useDrawing() {
  const map = useMap();
  const isDrawingMode = useMapStore((s) => s.isDrawingMode);
  const activePolygon = useMapStore((s) => s.activePolygon);
  const setDrawingMode = useMapStore((s) => s.setDrawingMode);
  const setActivePolygon = useMapStore((s) => s.setActivePolygon);

  const polygonRef = useRef<google.maps.Polygon | null>(null);
  const polylineRef = useRef<google.maps.Polyline | null>(null);

  // When activePolygon is cleared externally (e.g. DrawingTool clear button),
  // remove the visual polygon from the map
  useEffect(() => {
    if (!activePolygon && polygonRef.current) {
      polygonRef.current.setMap(null);
      polygonRef.current = null;
    }
  }, [activePolygon]);

  useEffect(() => {
    if (!map || !isDrawingMode) return;

    map.setOptions({ draggable: false, scrollwheel: false, gestureHandling: "none" });

    const path: google.maps.LatLng[] = [];
    let moveListener: google.maps.MapsEventListener | null = null;

    const polyline = new google.maps.Polyline({
      map,
      strokeColor: "#6366f1",
      strokeWeight: 2,
      strokeOpacity: 0.8,
    });
    polylineRef.current = polyline;

    const downListener = google.maps.event.addListenerOnce(map, "mousedown", () => {
      moveListener = google.maps.event.addListener(
        map,
        "mousemove",
        (e: google.maps.MapMouseEvent) => {
          if (!e.latLng) return;
          path.push(e.latLng);
          polyline.setPath(path);
        }
      );
    });

    const upListener = google.maps.event.addListenerOnce(map, "mouseup", () => {
      if (moveListener) google.maps.event.removeListener(moveListener);
      polyline.setMap(null);
      polylineRef.current = null;

      map.setOptions({ draggable: true, scrollwheel: true, gestureHandling: "greedy" });
      setDrawingMode(false);

      if (path.length < 3) return;

      // Remove previous polygon
      polygonRef.current?.setMap(null);

      const polygon = new google.maps.Polygon({
        map,
        paths: path,
        strokeColor: "#6366f1",
        strokeWeight: 2,
        fillColor: "#6366f1",
        fillOpacity: 0.15,
        zIndex: 1,
      });

      polygonRef.current = polygon;
      setActivePolygon(polygon);
    });

    return () => {
      google.maps.event.removeListener(downListener);
      google.maps.event.removeListener(upListener);
      if (moveListener) google.maps.event.removeListener(moveListener);
      polyline.setMap(null);
      polylineRef.current = null;
      map.setOptions({ draggable: true, scrollwheel: true, gestureHandling: "greedy" });
    };
  }, [map, isDrawingMode]);
}
