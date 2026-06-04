import { useEffect, useRef, useState } from "react";
import { Source, Layer, useMap } from "react-map-gl/mapbox";
import { useMapStore } from "@/domains/map/store/map.store";
import type { DrawnPolygon } from "@/domains/map/store/map.store";

export function DrawingLayer() {
  const { current: mapRef } = useMap();
  const isDrawingMode = useMapStore((s) => s.isDrawingMode);
  const activePolygon = useMapStore((s) => s.activePolygon);
  const setActivePolygon = useMapStore((s) => s.setActivePolygon);
  const setDrawingMode = useMapStore((s) => s.setDrawingMode);

  const pathRef = useRef<[number, number][]>([]);
  const isDownRef = useRef(false);
  const [liveCoords, setLiveCoords] = useState<[number, number][]>([]);

  useEffect(() => {
    if (!mapRef) return;
    const map = mapRef.getMap();

    if (!isDrawingMode) {
      map.getCanvas().style.cursor = "";
      try { map.dragPan.enable(); map.scrollZoom.enable(); } catch {}
      return;
    }

    map.getCanvas().style.cursor = "crosshair";
    map.dragPan.disable();
    map.scrollZoom.disable();

    const onMouseDown = (e: { lngLat: { lng: number; lat: number } }) => {
      isDownRef.current = true;
      pathRef.current = [[e.lngLat.lng, e.lngLat.lat]];
      setLiveCoords([[e.lngLat.lng, e.lngLat.lat]]);
    };

    const onMouseMove = (e: { lngLat: { lng: number; lat: number } }) => {
      if (!isDownRef.current) return;
      const next = [...pathRef.current, [e.lngLat.lng, e.lngLat.lat]] as [number, number][];
      pathRef.current = next;
      setLiveCoords(next);
    };

    const onMouseUp = () => {
      if (!isDownRef.current) return;
      isDownRef.current = false;
      const coords = pathRef.current;
      if (coords.length < 3) {
        setLiveCoords([]); pathRef.current = []; setDrawingMode(false); return;
      }
      const closed: [number, number][] = [...coords, coords[0]];
      const polygon: DrawnPolygon = {
        type: "Feature",
        geometry: { type: "Polygon", coordinates: [closed] },
        properties: null,
      };
      setActivePolygon(polygon);
      setDrawingMode(false);
      setLiveCoords([]);
      pathRef.current = [];
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map.on("mousedown", onMouseDown as any);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map.on("mousemove", onMouseMove as any);
    map.on("mouseup", onMouseUp);

    return () => {
      map.getCanvas().style.cursor = "";
      try { map.dragPan.enable(); map.scrollZoom.enable(); } catch {}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map.off("mousedown", onMouseDown as any);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map.off("mousemove", onMouseMove as any);
      map.off("mouseup", onMouseUp);
      isDownRef.current = false;
    };
  }, [mapRef, isDrawingMode]);

  useEffect(() => {
    if (!activePolygon) { setLiveCoords([]); pathRef.current = []; }
  }, [activePolygon]);

  const liveGeoJSON = liveCoords.length > 1
    ? { type: "Feature" as const, geometry: { type: "LineString" as const, coordinates: liveCoords }, properties: null }
    : null;

  return (
    <>
      {liveGeoJSON && (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Source id="drawing-live" type="geojson" data={liveGeoJSON as any}>
          <Layer id="drawing-live-line" type="line" paint={{ "line-color": "#6366f1", "line-width": 2, "line-opacity": 0.8 }} />
        </Source>
      )}
      {activePolygon && (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Source id="drawn-polygon" type="geojson" data={activePolygon as any}>
          <Layer id="drawn-polygon-fill" type="fill" paint={{ "fill-color": "#6366f1", "fill-opacity": 0.15 }} />
          <Layer id="drawn-polygon-line" type="line" paint={{ "line-color": "#6366f1", "line-width": 2 }} />
        </Source>
      )}
    </>
  );
}
