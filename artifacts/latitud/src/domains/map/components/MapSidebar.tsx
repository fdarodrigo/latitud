import { SlidersHorizontal, Car, BedDouble } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMapStore } from "@/domains/map/store/map.store";
import type { PropertyType } from "@/domains/listings/mocks/listings.mock";
import { DrawingTool } from "./DrawingTool";
import { RegionStats } from "./RegionStats";
import { LayersControl } from "./LayersControl";
import { NearbyPlaces } from "./NearbyPlaces";
import { useFilters } from "@/domains/search/hooks/useFilters";

import { B } from "./sidebarTheme";
export { B };

const BEDROOM_OPTIONS = [
  { value: 0, labelKey: "filters.any" },
  { value: 1, label: "1+" },
  { value: 2, label: "2+" },
  { value: 3, label: "3+" },
  { value: 4, label: "4+" },
];

function PriceRangeSlider() {
  const { t } = useTranslation();
  const { activeFilters, updateFilters } = useMapStore();
  const { transactionType } = activeFilters;

  const rentMax = 15000;
  const saleMax = 4000000;
  const max = transactionType === "rent" ? rentMax : saleMax;

  const currentMax =
    activeFilters.maxPrice >= 99999999 ? max : Math.min(activeFilters.maxPrice, max);

  const formatLabel = (v: number) => {
    if (transactionType === "rent") {
      if (v >= 1000) return `R$${(v / 1000).toFixed(0)}k`;
      return `R$${v}`;
    }
    if (v >= 1000000) return `R$${(v / 1000000).toFixed(1)}M`;
    if (v >= 1000) return `R$${Math.round(v / 1000)}k`;
    return `R$${v}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    updateFilters({ maxPrice: val >= max ? 99999999 : val });
  };

  const pct = ((currentMax / max) * 100).toFixed(1);

  return (
    <div>
      <div className="flex justify-between text-xs mb-2">
        <span style={{ color: B.faint }}>R$0</span>
        <span style={{ color: B.navy }} className="font-medium">
          {currentMax >= max ? t("filters.any") : formatLabel(currentMax)}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={transactionType === "rent" ? 500 : 50000}
        value={currentMax}
        onChange={handleChange}
        data-testid="slider-price"
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, ${B.steel} 0%, ${B.steel} ${pct}%, ${B.border} ${pct}%, ${B.border} 100%)`,
        }}
      />
    </div>
  );
}

function Divider() {
  return <div className="h-px" style={{ background: B.border }} />;
}

export function MapSidebar() {
  const { t } = useTranslation();
  const { activeFilters, filteredListings, updateFilters } = useMapStore();
  const { activeFilterCount } = useFilters();

  const PROPERTY_TYPES: { value: PropertyType | "all"; tKey: string }[] = [
    { value: "all",        tKey: "filters.all_types"  },
    { value: "apartment",  tKey: "filters.apartment"  },
    { value: "house",      tKey: "filters.house"      },
    { value: "commercial", tKey: "filters.commercial" },
    { value: "office",     tKey: "filters.office"     },
  ];

  return (
    <aside
      className="flex flex-col h-full overflow-y-auto"
      style={{ background: B.bg, color: B.navy }}
      data-testid="sidebar"
    >
      {/* Logo */}
      <div className="px-6 pt-6 pb-5" style={{ borderBottom: `1px solid ${B.border}` }}>
        <div className="flex items-center gap-2.5">
          <img src="/assets/logo.svg" alt="Latitud" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight" style={{ color: B.navy }}>Latitud</span>
        </div>
        <p className="text-xs mt-1.5" style={{ color: B.faint }}>
          {filteredListings.length} {t("stats.properties_found")}
        </p>
      </div>

      {/* Transaction toggle */}
      <div className="px-6 py-5" style={{ borderBottom: `1px solid ${B.border}` }}>
        <div className="flex rounded-xl p-1" style={{ background: B.element }}>
          {(["rent", "sale"] as const).map((type) => (
            <button
              key={type}
              onClick={() => updateFilters({ transactionType: type, minPrice: 0, maxPrice: 99999999 })}
              data-testid={`toggle-${type}`}
              className="flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-150"
              style={{
                background: activeFilters.transactionType === type ? B.steel : "transparent",
                color:      activeFilters.transactionType === type ? "#fff" : B.navy,
              }}
            >
              {type === "rent" ? t("sidebar.rent") : t("sidebar.sale")}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable content */}
      <div className="px-6 py-5 flex-1 space-y-6">

        {/* Filters header with badge */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: B.faint }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: B.faint }}>
            {t("sidebar.filters")}
          </span>
          {activeFilterCount > 0 && (
            <span
              className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold text-white"
              style={{ background: B.gold }}
              data-testid="badge-filter-count"
            >
              {activeFilterCount}
            </span>
          )}
        </div>

        {/* Property type */}
        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: B.muted }}>
            {t("filters.property_type")}
          </label>
          <select
            value={activeFilters.propertyType}
            onChange={(e) => updateFilters({ propertyType: e.target.value as PropertyType | "all" })}
            data-testid="select-property-type"
            className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 cursor-pointer"
            style={{
              background: B.surface,
              color:      B.navy,
              border:     `1px solid ${B.border}`,
            }}
          >
            {PROPERTY_TYPES.map((pt) => (
              <option key={pt.value} value={pt.value}>
                {t(pt.tKey)}
              </option>
            ))}
          </select>
        </div>

        {/* Price range */}
        <div>
          <label className="block text-xs font-medium mb-3" style={{ color: B.muted }}>
            {t("filters.price_range")}
          </label>
          <PriceRangeSlider />
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: B.muted }}>
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5" />
              {t("filters.min_bedrooms")}
            </span>
          </label>
          <div className="flex gap-1.5">
            {BEDROOM_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => updateFilters({ minBedrooms: opt.value })}
                data-testid={`button-bedrooms-${opt.value}`}
                className="flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
                style={{
                  background: activeFilters.minBedrooms === opt.value ? B.steel : B.surface,
                  color:      activeFilters.minBedrooms === opt.value ? "#fff" : B.navy,
                  border:     activeFilters.minBedrooms === opt.value
                    ? `1px solid ${B.steel}`
                    : `1px solid ${B.border}`,
                }}
              >
                {"labelKey" in opt ? t(opt.labelKey!) : opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Parking toggle */}
        <div>
          <button
            onClick={() => updateFilters({ hasParking: !activeFilters.hasParking })}
            className="flex items-center gap-3 cursor-pointer"
            data-testid="checkbox-parking"
          >
            <div className="relative w-10 h-5">
              <div
                className="w-10 h-5 rounded-full transition-colors duration-200"
                style={{ background: activeFilters.hasParking ? B.steel : B.element }}
              />
              <div
                className="absolute top-0.5 w-4 h-4 rounded-full shadow transition-transform duration-200"
                style={{
                  background: "#fff",
                  transform: activeFilters.hasParking ? "translateX(21px)" : "translateX(2px)",
                  border: `1px solid ${B.border}`,
                }}
              />
            </div>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: B.navy }}>
              <Car className="w-3.5 h-3.5" style={{ color: B.faint }} />
              {t("filters.parking")}
            </span>
          </button>
        </div>

        <Divider />

        {/* Drawing tool */}
        <DrawingTool />

        {/* Region stats */}
        <RegionStats />

        <Divider />

        {/* Layers control */}
        <LayersControl />

        <Divider />

        {/* Nearby places */}
        <NearbyPlaces />
      </div>

      {/* Footer */}
      <div className="px-6 py-4" style={{ borderTop: `1px solid ${B.border}` }}>
        <p className="text-xs text-center" style={{ color: B.faint }}>Fortaleza · Ceará · Brasil</p>
      </div>
    </aside>
  );
}
