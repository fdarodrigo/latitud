import { SlidersHorizontal, Car, BedDouble } from "lucide-react";
import { useMapStore } from "@/domains/map/store/map.store";
import type { PropertyType } from "@/domains/listings/mocks/listings.mock";
import { DrawingTool } from "./DrawingTool";
import { RegionStats } from "./RegionStats";

const PROPERTY_TYPES: { value: PropertyType | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "apartment", label: "Apartamento" },
  { value: "house", label: "Casa" },
  { value: "commercial", label: "Comercial" },
  { value: "office", label: "Escritório" },
];

const BEDROOM_OPTIONS = [
  { value: 0, label: "Qualquer" },
  { value: 1, label: "1+" },
  { value: 2, label: "2+" },
  { value: 3, label: "3+" },
  { value: 4, label: "4+" },
];

function PriceRangeSlider() {
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
          até {currentMax >= max ? "Qualquer" : formatLabel(currentMax)}
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

export function MapSidebar() {
  const { activeFilters, filteredListings, updateFilters } = useMapStore();

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
          {filteredListings.length} imóvel{filteredListings.length !== 1 ? "s" : ""} encontrado{filteredListings.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Transaction toggle */}
      <div className="px-6 py-5 border-b border-slate-700/60">
        <div
          className="flex rounded-xl p-1"
          style={{ background: "#1e293b" }}
        >
          {(["rent", "sale"] as const).map((t) => (
            <button
              key={t}
              onClick={() =>
                updateFilters({ transactionType: t, minPrice: 0, maxPrice: 99999999 })
              }
              data-testid={`toggle-${t}`}
              className="flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-150"
              style={{
                background:
                  activeFilters.transactionType === t ? "#0ea5e9" : "transparent",
                color:
                  activeFilters.transactionType === t ? "#fff" : "#94a3b8",
              }}
            >
              {t === "rent" ? "Aluguel" : "Venda"}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-5 flex-1 space-y-6">
        <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filtros</span>
        </div>

        {/* Property type */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2">
            Tipo de imóvel
          </label>
          <select
            value={activeFilters.propertyType}
            onChange={(e) =>
              updateFilters({ propertyType: e.target.value as PropertyType | "all" })
            }
            data-testid="select-property-type"
            className="w-full rounded-lg px-3 py-2.5 text-sm text-slate-200 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-500 cursor-pointer"
            style={{ background: "#1e293b" }}
          >
            {PROPERTY_TYPES.map((t) => (
              <option key={t.value} value={t.value} style={{ background: "#1e293b" }}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price range */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-3">
            Preço máximo
          </label>
          <PriceRangeSlider />
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-2">
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5" />
              Quartos mínimos
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
                  background:
                    activeFilters.minBedrooms === opt.value ? "#0ea5e9" : "#1e293b",
                  color:
                    activeFilters.minBedrooms === opt.value ? "#fff" : "#94a3b8",
                  border:
                    activeFilters.minBedrooms === opt.value
                      ? "1px solid #0ea5e9"
                      : "1px solid #334155",
                }}
              >
                {opt.label}
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
                style={{
                  background: activeFilters.hasParking ? "#0ea5e9" : "#334155",
                }}
              />
              <div
                className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
                style={{
                  transform: activeFilters.hasParking
                    ? "translateX(21px)"
                    : "translateX(2px)",
                }}
              />
            </div>
            <span className="flex items-center gap-1.5 text-sm text-slate-300">
              <Car className="w-3.5 h-3.5 text-slate-400" />
              Com garagem
            </span>
          </button>
        </div>

        {/* Drawing tool divider */}
        <div className="h-px" style={{ background: "#1e293b" }} />

        {/* Drawing tool */}
        <DrawingTool />

        {/* Region stats (visible only when polygon is active) */}
        <RegionStats />
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-700/60">
        <p className="text-slate-500 text-xs text-center">
          Fortaleza · Ceará · Brasil
        </p>
      </div>
    </aside>
  );
}
