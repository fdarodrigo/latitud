import { create } from "zustand";
import {
  type Listing,
  type PropertyType,
  type TransactionType,
} from "@/domains/listings/mocks/listings.mock";
import type { LayerType } from "@/domains/map/hooks/useMapLayers";

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

  // Drawing
  isDrawingMode: boolean;
  hasActivePolygon: boolean;
  activePolygon: google.maps.Polygon | null;

  // Layers
  activeLayer: LayerType | null;

  // Nearby places
  activePlaceType: string | null;

  setAllListings: (listings: Listing[]) => void;
  setSelectedListing: (listing: Listing | null) => void;
  setFilteredListings: (listings: Listing[]) => void;
  updateFilters: (filters: Partial<ActiveFilters>) => void;
  setDrawingMode: (active: boolean) => void;
  setActivePolygon: (polygon: google.maps.Polygon | null) => void;
  setActiveLayer: (layer: LayerType | null) => void;
  setActivePlaceType: (type: string | null) => void;
}

const DEFAULT_FILTERS: ActiveFilters = {
  transactionType: "rent",
  propertyType: "all",
  minPrice: 0,
  maxPrice: 99999999,
  minBedrooms: 0,
  hasParking: false,
};

export const useMapStore = create<MapState>((set, get) => ({
  allListings: [],
  filteredListings: [],
  activeFilters: DEFAULT_FILTERS,
  selectedListing: null,
  isDrawingMode: false,
  hasActivePolygon: false,
  activePolygon: null,
  activeLayer: null,
  activePlaceType: null,

  setAllListings: (listings) => {
    set({ allListings: listings });
    // filteredListings will be recomputed by useFilters hook
  },

  setSelectedListing: (listing) => set({ selectedListing: listing }),

  setFilteredListings: (listings) => set({ filteredListings: listings }),

  updateFilters: (partial) => {
    const filters = { ...get().activeFilters, ...partial };
    set({ activeFilters: filters });
    // useFilters hook reacts to activeFilters change and recomputes filteredListings
  },

  setDrawingMode: (active) => set({ isDrawingMode: active }),

  setActivePolygon: (polygon) => {
    set({ activePolygon: polygon, hasActivePolygon: polygon !== null });
    // useFilters hook reacts to activePolygon change and recomputes filteredListings
  },

  setActiveLayer: (layer) => set({ activeLayer: layer }),

  setActivePlaceType: (type) => set({ activePlaceType: type }),
}));
