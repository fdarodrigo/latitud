import { useEffect, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { useMapStore } from "@/domains/map/store/map.store";

const PLACE_COLORS: Record<string, string> = {
  restaurant: "#f97316",
  school: "#8b5cf6",
  hospital: "#ef4444",
  supermarket: "#10b981",
  gym: "#3b82f6",
  bank: "#eab308",
};

export function useNearbySearch() {
  const map = useMap();
  const activePlaceType = useMapStore((s) => s.activePlaceType);
  const markersRef = useRef<google.maps.Marker[]>([]);

  const clearMarkers = () => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  };

  useEffect(() => {
    if (!map) return;

    clearMarkers();
    if (!activePlaceType) return;

    const service = new google.maps.places.PlacesService(map);
    const center = map.getCenter();
    if (!center) return;

    const color = PLACE_COLORS[activePlaceType] ?? "#6366f1";

    service.nearbySearch(
      {
        location: center,
        radius: 1500,
        type: activePlaceType,
      },
      (results, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !results) return;

        const valid = results.filter(
          (r) => r.business_status !== "CLOSED_TEMPORARILY"
        );

        const newMarkers = valid
          .filter((r) => r.geometry?.location)
          .map((r) => {
            const marker = new google.maps.Marker({
              position: r.geometry!.location,
              map,
              title: r.name,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 7,
                fillColor: color,
                fillOpacity: 0.9,
                strokeColor: "#ffffff",
                strokeWeight: 2,
              },
              zIndex: 500,
            });
            return marker;
          });

        markersRef.current = newMarkers;
      }
    );

    return () => {
      clearMarkers();
    };
  }, [map, activePlaceType]);
}
