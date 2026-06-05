import { useEffect } from "react";
import * as turf from "@turf/turf";
import { useMapStore } from "@/domains/map/store/map.store";
import type { ActiveFilters, DrawnPolygon } from "@/domains/map/store/map.store";
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

function applyPolygonFilter(listings: Listing[], polygon: DrawnPolygon): Listing[] {
  return listings.filter((l) =>
    turf.booleanPointInPolygon(
      turf.point([l.coordinates.lng, l.coordinates.lat]),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      polygon as any
    )
  );
}

export function countActiveFilters(filters: ActiveFilters): number {
  let count = 0;
  if (filters.propertyType !== "all") count++;
  if (filters.maxPrice < 99999999) count++;
  if (filters.minBedrooms > 0) count++;
  if (filters.hasParking) count++;
  return count;
}

/**
 * Recomputes filteredListings whenever activeFilters or activePolygon change.
 * Safe to call both inside and outside the Map context.
 */
export function useFilters() {
  const allListings = useMapStore((s) => s.allListings);
  const activeFilters = useMapStore((s) => s.activeFilters);
  const activePolygon = useMapStore((s) => s.activePolygon);
  const setFilteredListings = useMapStore((s) => s.setFilteredListings);

  useEffect(() => {
    if (!activePolygon) {
      setFilteredListings([]);
      return;
    }

    let result = applyFilters(allListings, activeFilters);
    result = applyPolygonFilter(result, activePolygon);
    setFilteredListings(result);
  }, [allListings, activeFilters, activePolygon]);

  return { activeFilterCount: countActiveFilters(activeFilters) };
}
