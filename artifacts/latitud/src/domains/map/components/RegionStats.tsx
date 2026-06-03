import { useMapStore } from "@/domains/map/store/map.store";
import { formatBRL, calculateAverage, calculateMin, calculateMax } from "@/shared/utils/price.utils";
import { BarChart3, TrendingDown, TrendingUp, Minus } from "lucide-react";

const TYPE_LABELS: Record<string, string> = {
  apartment: "Apartamentos",
  house: "Casas",
  commercial: "Comerciais",
  office: "Escritórios",
};

export function RegionStats() {
  const hasActivePolygon = useMapStore((s) => s.hasActivePolygon);
  const filteredListings = useMapStore((s) => s.filteredListings);

  if (!hasActivePolygon) return null;

  const prices = filteredListings.map((l) => l.price);

  // Count by type
  const byType = filteredListings.reduce<Record<string, number>>((acc, l) => {
    acc[l.type] = (acc[l.type] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "#1e293b", border: "1px solid #334155" }}
      data-testid="region-stats"
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ background: "rgba(99,102,241,0.12)", borderBottom: "1px solid #334155" }}
      >
        <BarChart3 className="w-4 h-4 text-indigo-400" />
        <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
          Área selecionada
        </span>
      </div>

      <div className="px-4 py-3 space-y-3">
        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">Total de imóveis</span>
          <span
            className="text-sm font-bold text-white"
            data-testid="stat-total"
          >
            {filteredListings.length}
          </span>
        </div>

        {filteredListings.length > 0 && (
          <>
            {/* Type breakdown */}
            {Object.entries(byType).length > 0 && (
              <div className="space-y-1.5">
                {Object.entries(byType).map(([type, count]) => (
                  <div key={type} className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {TYPE_LABELS[type] ?? type}
                    </span>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-1 rounded-full bg-indigo-500 opacity-60"
                        style={{
                          width: `${Math.max(20, (count / filteredListings.length) * 60)}px`,
                        }}
                      />
                      <span className="text-xs font-semibold text-slate-300 w-4 text-right">
                        {count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div
              className="h-px"
              style={{ background: "#334155" }}
            />

            {/* Price stats */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Minus className="w-3 h-3" />
                  Preço médio
                </span>
                <span className="text-xs font-semibold text-slate-200" data-testid="stat-avg">
                  {formatBRL(Math.round(calculateAverage(prices)))}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <TrendingDown className="w-3 h-3 text-emerald-400" />
                  Menor preço
                </span>
                <span className="text-xs font-semibold text-emerald-400" data-testid="stat-min">
                  {formatBRL(calculateMin(prices))}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <TrendingUp className="w-3 h-3 text-amber-400" />
                  Maior preço
                </span>
                <span className="text-xs font-semibold text-amber-400" data-testid="stat-max">
                  {formatBRL(calculateMax(prices))}
                </span>
              </div>
            </div>
          </>
        )}

        {filteredListings.length === 0 && (
          <p className="text-xs text-slate-500 text-center py-2">
            Nenhum imóvel nessa área
          </p>
        )}
      </div>
    </div>
  );
}
