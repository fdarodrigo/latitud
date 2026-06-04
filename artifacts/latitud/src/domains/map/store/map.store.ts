import { create } from "zustand";
import {
  type Listing,
  type PropertyType,
  type TransactionType,
} from "@/domains/listings/mocks/listings.mock";

export type LayerType = "traffic" | "transit" | "bicycling";

export type DrawnPolygon = {
  type: "Feature";
  geometry: { type: "Polygon"; coordinates: [number, number][][] };
  properties: null;
};

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
  activePolygon: DrawnPolygon | null;

  activeLayer: LayerType | null;
  activePlaceType: string | null;

  setAllListings: (listings: Listing[]) => void;
  setSelectedListing: (listing: Listing | null) => void;
  setFilteredListings: (listings: Listing[]) => void;
  updateFilters: (filters: Partial<ActiveFilters>) => void;
  setDrawingMode: (active: boolean) => void;
  setActivePolygon: (polygon: DrawnPolygon | null) => void;
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

export const useMapStore = create<MapState>((set) => ({
  allListings: [],
  filteredListings: [],
  activeFilters: DEFAULT_FILTERS,
  selectedListing: null,
  isDrawingMode: false,
  hasActivePolygon: false,
  activePolygon: null,
  activeLayer: null,
  activePlaceType: null,

  setAllListings: (listings) => set({ allListings: listings }),
  setSelectedListing: (listing) => set({ selectedListing: listing }),
  setFilteredListings: (listings) => set({ filteredListings: listings }),
  updateFilters: (partial) =>
    set((s) => ({ activeFilters: { ...s.activeFilters, ...partial } })),
  setDrawingMode: (active) => set({ isDrawingMode: active }),
  setActivePolygon: (polygon) =>
    set({ activePolygon: polygon, hasActivePolygon: polygon !== null }),
  setActiveLayer: (layer) => set({ activeLayer: layer }),
  setActivePlaceType: (type) => set({ activePlaceType: type }),
}));
