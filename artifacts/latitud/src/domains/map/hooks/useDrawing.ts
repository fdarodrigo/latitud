import { useEffect, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useMapStore } from "@/domains/map/store/map.store";

interface UseDrawingOptions {
  onPolygonComplete: (polygon: google.maps.Polygon) => void;
}

export function useDrawing({ onPolygonComplete }: UseDrawingOptions) {
  const map = useMap();
  const isDrawingMode = useMapStore((s) => s.isDrawingMode);
  const setDrawingMode = useMapStore((s) => s.setDrawingMode);
  const polygonRef = useRef<google.maps.Polygon | null>(null);
  const polylineRef = useRef<google.maps.Polyline | null>(null);

  // Expose clearPolygon so the store/toolbar can call it
  const clearPolygon = () => {
    polygonRef.current?.setMap(null);
    polygonRef.current = null;
  };

  // Store clearPolygon on the store so DrawingTool can access it
  useEffect(() => {
    useMapStore.getState().setClearPolygon(clearPolygon);
  }, []);

  useEffect(() => {
    if (!map || !isDrawingMode) return;

    // Disable map interaction while drawing
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

    const downListener = google.maps.event.addListenerOnce(
      map,
      "mousedown",
      () => {
        moveListener = google.maps.event.addListener(
          map,
          "mousemove",
          (e: google.maps.MapMouseEvent) => {
            if (!e.latLng) return;
            path.push(e.latLng);
            polyline.setPath(path);
          }
        );
      }
    );

    const upListener = google.maps.event.addListenerOnce(
      map,
      "mouseup",
      () => {
        // Clean up listeners and polyline
        if (moveListener) google.maps.event.removeListener(moveListener);
        polyline.setMap(null);
        polylineRef.current = null;

        // Re-enable map interaction
        map.setOptions({ draggable: true, scrollwheel: true, gestureHandling: "greedy" });

        // Exit drawing mode
        setDrawingMode(false);

        if (path.length < 3) return;

        // Remove previous polygon
        polygonRef.current?.setMap(null);

        // Create new polygon
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
        onPolygonComplete(polygon);
      }
    );

    return () => {
      google.maps.event.removeListener(downListener);
      google.maps.event.removeListener(upListener);
      if (moveListener) google.maps.event.removeListener(moveListener);
      polyline.setMap(null);
      polylineRef.current = null;
      map.setOptions({ draggable: true, scrollwheel: true, gestureHandling: "greedy" });
    };
  }, [map, isDrawingMode]);

  return { clearPolygon };
}
