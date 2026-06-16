import { useEffect, useState } from "react";
import { Marker, Popup } from "react-map-gl/mapbox";
import { useMapStore } from "@/domains/map/store/map.store";
import type { DrawnPolygon } from "@/domains/map/store/map.store";

// Try mirrors in order; skip on 429 / 504 / network error
const OVERPASS_MIRRORS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.openstreetmap.ru/api/interpreter",
];

const PLACE_CONFIG: Record<string, { amenity: string; color: string }> = {
  restaurant:  { amenity: "restaurant",  color: "#f97316" },
  school:      { amenity: "school",      color: "#8b5cf6" },
  hospital:    { amenity: "hospital",    color: "#ef4444" },
  supermarket: { amenity: "supermarket", color: "#10b981" },
  gym:         { amenity: "gym",         color: "#3b82f6" },
  bank:        { amenity: "bank",        color: "#eab308" },
};

interface OverpassElement {
  id: number;
  type: "node" | "way" | "relation";
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: { name?: string };
}

function polygonBbox(polygon: DrawnPolygon) {
  const ring = polygon.geometry.coordinates[0];
  let west = Infinity, east = -Infinity, south = Infinity, north = -Infinity;
  for (const [lng, lat] of ring) {
    if (lng < west) west = lng;
    if (lng > east) east = lng;
    if (lat < south) south = lat;
    if (lat > north) north = lat;
  }
  return { west, east, south, north };
}

function pointInPolygon(lng: number, lat: number, ring: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if ((yi > lat) !== (yj > lat) && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

async function queryOverpass(
  amenity: string,
  bbox: { south: number; west: number; north: number; east: number },
): Promise<OverpassElement[]> {
  const { south, west, north, east } = bbox;
  // Query both nodes and ways; "out center" returns a lat/lon centroid for ways
  const q = [
    "[out:json][timeout:25];",
    "(",
    `node["amenity"="${amenity}"](${south},${west},${north},${east});`,
    `way["amenity"="${amenity}"](${south},${west},${north},${east});`,
    ");",
    "out center 100;",
  ].join("");

  for (const mirror of OVERPASS_MIRRORS) {
    try {
      const res = await fetch(`${mirror}?data=${encodeURIComponent(q)}`);
      if (res.ok) {
        const data = await res.json();
        return (data.elements ?? []) as OverpassElement[];
      }
      // On rate-limit or timeout, try next mirror
      if (res.status === 429 || res.status === 504) continue;
    } catch {
      continue; // network error — try next mirror
    }
  }
  return [];
}

export function NearbyMarkers() {
  const activePlaceType  = useMapStore((s) => s.activePlaceType);
  const hasActivePolygon = useMapStore((s) => s.hasActivePolygon);
  const activePolygon    = useMapStore((s) => s.activePolygon);

  const [places, setPlaces]             = useState<OverpassElement[]>([]);
  const [hoveredPlace, setHoveredPlace] = useState<OverpassElement | null>(null);
  const [isLoading, setIsLoading]       = useState(false);

  useEffect(() => {
    if (!activePlaceType || !hasActivePolygon || !activePolygon) {
      setPlaces([]);
      return;
    }

    const config = PLACE_CONFIG[activePlaceType];
    if (!config) return;

    const bbox = polygonBbox(activePolygon);
    const ring = activePolygon.geometry.coordinates[0] as [number, number][];
    let cancelled = false;

    // Debounce: wait 600 ms before firing to avoid burst requests on rapid
    // category switching
    const timer = setTimeout(async () => {
      if (cancelled) return;
      setIsLoading(true);
      try {
        const results = await queryOverpass(config.amenity, bbox);
        if (cancelled) return;
        setPlaces(
          results.filter((p) => {
            const lat = p.lat ?? p.center?.lat;
            const lon = p.lon ?? p.center?.lon;
            return lat !== undefined && lon !== undefined && pointInPolygon(lon, lat, ring);
          }),
        );
      } catch {
        if (!cancelled) setPlaces([]);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }, 600);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      setPlaces([]);
      setIsLoading(false);
    };
  }, [activePlaceType, hasActivePolygon, activePolygon]);

  if (!activePlaceType || !hasActivePolygon) return null;

  const color = PLACE_CONFIG[activePlaceType]?.color ?? "#6366f1";

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
            background: "rgba(28,52,86,0.85)", color: "#D4E2EB",
            fontSize: 11, fontWeight: 600, padding: "4px 12px",
            borderRadius: 999, zIndex: 20, pointerEvents: "none",
          }}
        >
          Buscando locais…
        </div>
      )}

      {places.map((place) => {
        const lat = place.lat ?? place.center?.lat;
        const lon = place.lon ?? place.center?.lon;
        if (lat === undefined || lon === undefined) return null;
        return (
          <Marker key={`${place.type}-${place.id}`} longitude={lon} latitude={lat} anchor="center">
            <div
              onMouseEnter={() => setHoveredPlace(place)}
              onMouseLeave={() => setHoveredPlace(null)}
              style={{
                width: 14, height: 14, borderRadius: "50%",
                background: color, border: "2px solid white",
                boxShadow: `0 2px 6px ${color}66`, cursor: "default",
              }}
            />
          </Marker>
        );
      })}

      {hoveredPlace?.tags?.name && (() => {
        const lat = hoveredPlace.lat ?? hoveredPlace.center?.lat;
        const lon = hoveredPlace.lon ?? hoveredPlace.center?.lon;
        if (!lat || !lon) return null;
        return (
          <Popup longitude={lon} latitude={lat} closeButton={false} anchor="bottom" offset={12}>
            <p style={{
              margin: 0, fontSize: 12, fontWeight: 600, color: "#1C3456",
              whiteSpace: "nowrap", maxWidth: 160,
              overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {hoveredPlace.tags.name}
            </p>
          </Popup>
        );
      })()}
    </>
  );
}
