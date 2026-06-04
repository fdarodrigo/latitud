import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-map-gl/mapbox";
import { useMapStore } from "@/domains/map/store/map.store";

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

const PLACE_CONFIG: Record<string, { amenity: string; color: string }> = {
  restaurant: { amenity: "restaurant", color: "#f97316" },
  school:     { amenity: "school",     color: "#8b5cf6" },
  hospital:   { amenity: "hospital",   color: "#ef4444" },
  supermarket:{ amenity: "supermarket",color: "#10b981" },
  gym:        { amenity: "gym",        color: "#3b82f6" },
  bank:       { amenity: "bank",       color: "#eab308" },
};

interface OverpassElement {
  id: number;
  lat: number;
  lon: number;
  tags?: { name?: string };
}

async function queryOverpass(amenity: string, lat: number, lng: number): Promise<OverpassElement[]> {
  const q = `[out:json];node["amenity"="${amenity}"](around:1500,${lat},${lng});out 20;`;
  const res = await fetch(`${OVERPASS_URL}?data=${encodeURIComponent(q)}`);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.elements ?? []) as OverpassElement[];
}

export function NearbyMarkers() {
  const { current: mapRef } = useMap();
  const activePlaceType = useMapStore((s) => s.activePlaceType);
  const [places, setPlaces] = useState<OverpassElement[]>([]);
  const [hoveredPlace, setHoveredPlace] = useState<OverpassElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!activePlaceType || !mapRef) { setPlaces([]); return; }
    const config = PLACE_CONFIG[activePlaceType];
    if (!config) return;

    const center = mapRef.getCenter();
    let cancelled = false;
    setIsLoading(true);

    queryOverpass(config.amenity, center.lat, center.lng)
      .then((r) => { if (!cancelled) setPlaces(r); })
      .catch(() => { if (!cancelled) setPlaces([]); })
      .finally(() => { if (!cancelled) setIsLoading(false); });

    return () => { cancelled = true; setPlaces([]); };
  }, [activePlaceType, mapRef]);

  if (!activePlaceType) return null;
  const color = PLACE_CONFIG[activePlaceType]?.color ?? "#6366f1";

  return (
    <>
      {isLoading && (
        <div style={{ position:"absolute", top:12, left:"50%", transform:"translateX(-50%)", background:"rgba(15,23,42,0.85)", color:"#94a3b8", fontSize:11, fontWeight:600, padding:"4px 12px", borderRadius:999, zIndex:20, pointerEvents:"none" }}>
          Buscando locais...
        </div>
      )}

      {places.map((place) => (
        <Marker key={place.id} longitude={place.lon} latitude={place.lat} anchor="center">
          <div
            onMouseEnter={() => setHoveredPlace(place)}
            onMouseLeave={() => setHoveredPlace(null)}
            style={{ width:14, height:14, borderRadius:"50%", background:color, border:"2px solid white", boxShadow:`0 2px 6px ${color}66`, cursor:"default" }}
          />
        </Marker>
      ))}

      {hoveredPlace?.tags?.name && (
        <Popup longitude={hoveredPlace.lon} latitude={hoveredPlace.lat} closeButton={false} anchor="bottom" offset={12}>
          <p style={{ margin:0, fontSize:12, fontWeight:600, color:"#0f172a", whiteSpace:"nowrap", maxWidth:160, overflow:"hidden", textOverflow:"ellipsis" }}>
            {hoveredPlace.tags.name}
          </p>
        </Popup>
      )}
    </>
  );
}
