import { SlidersHorizontal, Car, BedDouble } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMapStore } from "@/domains/map/store/map.store";
import type { PropertyType } from "@/domains/listings/mocks/listings.mock";
import { DrawingTool } from "./DrawingTool";
import { RegionStats } from "./RegionStats";
import { LayersControl } from "./LayersControl";
import { NearbyPlaces } from "./NearbyPlaces";
import { useFilters } from "@/domains/search/hooks/useFilters";

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
        <span className="text-slate-500">R$0</span>
        <span className="text-slate-200 font-medium">
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
          background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${pct}%, #334155 ${pct}%, #334155 100%)`,
        }}
      />
    </div>
  );
}

function Divider() {
  return <div className="h-px" style={{ background: "#1e293b" }} />;
}

export function MapSidebar() {
  const { t } = useTranslation();
  const { activeFilters, filteredListings, updateFilters } = useMapStore();
  const { activeFilterCount } = useFilters();

  const PROPERTY_TYPES: { value: PropertyType | "all"; tKey: string }[] = [
    { value: "all", tKey: "filters.all_types" },
    { value: "apartment", tKey: "filters.apartment" },
    { value: "house", tKey: "filters.house" },
    { value: "commercial", tKey: "filters.commercial" },
    { value: "office", tKey: "filters.office" },
  ];

  return (
    <aside
      className="flex flex-col h-full overflow-y-auto"
      style={{ background: "#0f172a", color: "#e2e8f0" }}
      data-testid="sidebar"
    >
      {/* Logo */}
      <div className="px-6 pt-6 pb-5 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "#0ea5e9" }}
          >
            <span className="text-white font-black text-sm leading-none">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Latitud</span>
        </div>
        <p className="text-slate-400 text-xs mt-1.5">
          {filteredListings.length} {t("stats.properties_found")}
        </p>
      </div>

      {/* Transaction toggle */}
      <div className="px-6 py-5 border-b border-slate-700/60">
        <div className="flex rounded-xl p-1" style={{ background: "#1e293b" }}>
          {(["rent", "sale"] as const).map((type) => (
            <button
              key={type}
              onClick={() => updateFilters({ transactionType: type, minPrice: 0, maxPrice: 99999999 })}
              data-testid={`toggle-${type}`}
              className="flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-150"
              style={{
                background: activeFilters.transactionType === type ? "#0ea5e9" : "transparent",
                color: activeFilters.transactionType === type ? "#fff" : "#94a3b8",
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
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            {t("sidebar.filters")}
          </span>
          {activeFilterCount > 0 && (
            <span
              className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold text-white"
              style={{ background: "#0ea5e9" }}
              data-testid="badge-filter-count"
            >
              {activeFilterCount}
            </span>
          )}
        </div>

        {/* Property type */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2">
            {t("filters.property_type")}
          </label>
          <select
            value={activeFilters.propertyType}
            onChange={(e) => updateFilters({ propertyType: e.target.value as PropertyType | "all" })}
            data-testid="select-property-type"
            className="w-full rounded-lg px-3 py-2.5 text-sm text-slate-200 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 cursor-pointer"
            style={{ background: "#1e293b" }}
          >
            {PROPERTY_TYPES.map((pt) => (
              <option key={pt.value} value={pt.value} style={{ background: "#1e293b" }}>
                {t(pt.tKey)}
              </option>
            ))}
          </select>
        </div>

        {/* Price range */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-3">
            {t("filters.price_range")}
          </label>
          <PriceRangeSlider />
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2">
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
                  background: activeFilters.minBedrooms === opt.value ? "#0ea5e9" : "#1e293b",
                  color: activeFilters.minBedrooms === opt.value ? "#fff" : "#94a3b8",
                  border: activeFilters.minBedrooms === opt.value ? "1px solid #0ea5e9" : "1px solid #334155",
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
                style={{ background: activeFilters.hasParking ? "#0ea5e9" : "#334155" }}
              />
              <div
                className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
                style={{ transform: activeFilters.hasParking ? "translateX(21px)" : "translateX(2px)" }}
              />
            </div>
            <span className="flex items-center gap-1.5 text-sm text-slate-300">
              <Car className="w-3.5 h-3.5 text-slate-400" />
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
      <div className="px-6 py-4 border-t border-slate-700/60">
        <p className="text-slate-500 text-xs text-center">Fortaleza · Ceará · Brasil</p>
      </div>
    </aside>
  );
}
