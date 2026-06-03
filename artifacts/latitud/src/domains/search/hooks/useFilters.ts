import { useEffect } from "react";
import { useMapStore } from "@/domains/map/store/map.store";
import type { ActiveFilters } from "@/domains/map/store/map.store";
import type { Listing } from "@/domains/listings/mocks/listings.mock";

function applyFilters(listings: Listing[], filters: ActiveFilters): Listing[] {
  return listings.filter((l) => {
    if (l.transactionType !== filters.transactionType) return false;
    if (filters.propertyType !== "all" && l.type !== filters.propertyType) return false;
    if (l.price < filters.minPrice || l.price > filters.maxPrice) return false;
    if (l.bedrooms < filters.minBedrooms) return false;
    if (filters.hasParking && l.parkingSpots === 0) return false;
    return true;
  });
}

function countActiveFilters(filters: ActiveFilters): number {
  let count = 0;
  if (filters.propertyType !== "all") count++;
  if (filters.maxPrice < 99999999) count++;
  if (filters.minBedrooms > 0) count++;
  if (filters.hasParking) count++;
  return count;
}

/**
 * Runs inside MapInner (inside APIProvider context).
 * Recomputes filteredListings whenever activeFilters or activePolygon change,
 * combining both simultaneously.
 */
export function useFilters() {
  const allListings = useMapStore((s) => s.allListings);
  const activeFilters = useMapStore((s) => s.activeFilters);
  const activePolygon = useMapStore((s) => s.activePolygon);
  const setFilteredListings = useMapStore((s) => s.setFilteredListings);

  useEffect(() => {
    let result = applyFilters(allListings, activeFilters);

    if (activePolygon && typeof google !== "undefined") {
      result = result.filter((l) => {
        const latLng = new google.maps.LatLng(l.coordinates.lat, l.coordinates.lng);
        return google.maps.geometry.poly.containsLocation(latLng, activePolygon);
      });
    }

    setFilteredListings(result);
  }, [allListings, activeFilters, activePolygon]);

  return { activeFilterCount: countActiveFilters(activeFilters) };
}
