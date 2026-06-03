import { create } from "zustand";
import {
  type Listing,
  type PropertyType,
  type TransactionType,
} from "@/domains/listings/mocks/listings.mock";

export interface ActiveFilters {
  transactionType: TransactionType;
  propertyType: PropertyType | "all";
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  hasParking: boolean;
}

interface MapState {
  allListings: Listing[];
  filteredListings: Listing[];
  activeFilters: ActiveFilters;
  selectedListing: Listing | null;
  isDrawingMode: boolean;
  hasActivePolygon: boolean;
  clearPolygonFn: (() => void) | null;

  setAllListings: (listings: Listing[]) => void;
  setSelectedListing: (listing: Listing | null) => void;
  updateFilters: (filters: Partial<ActiveFilters>) => void;
  setDrawingMode: (active: boolean) => void;
  setPolygonFilter: (listings: Listing[]) => void;
  clearPolygonFilter: () => void;
  setClearPolygon: (fn: () => void) => void;
}

const DEFAULT_FILTERS: ActiveFilters = {
  transactionType: "rent",
  propertyType: "all",
  minPrice: 0,
  maxPrice: 99999999,
  minBedrooms: 0,
  hasParking: false,
};

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

export const useMapStore = create<MapState>((set, get) => ({
  allListings: [],
  filteredListings: [],
  activeFilters: DEFAULT_FILTERS,
  selectedListing: null,
  isDrawingMode: false,
  hasActivePolygon: false,
  clearPolygonFn: null,

  setAllListings: (listings) => {
    const filtered = applyFilters(listings, get().activeFilters);
    set({ allListings: listings, filteredListings: filtered });
  },

  setSelectedListing: (listing) => set({ selectedListing: listing }),

  updateFilters: (partial) => {
    const filters = { ...get().activeFilters, ...partial };
    // If a polygon is active, don't override filteredListings with filter logic
    if (get().hasActivePolygon) {
      set({ activeFilters: filters });
    } else {
      const filtered = applyFilters(get().allListings, filters);
      set({ activeFilters: filters, filteredListings: filtered });
    }
  },

  setDrawingMode: (active) => set({ isDrawingMode: active }),

  setPolygonFilter: (listings) =>
    set({ filteredListings: listings, hasActivePolygon: true }),

  clearPolygonFilter: () => {
    const filtered = applyFilters(get().allListings, get().activeFilters);
    set({ filteredListings: filtered, hasActivePolygon: false });
  },

  setClearPolygon: (fn) => set({ clearPolygonFn: fn }),
}));
