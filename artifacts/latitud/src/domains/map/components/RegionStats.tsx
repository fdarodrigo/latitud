import { useTranslation } from "react-i18next";
import { useMapStore } from "@/domains/map/store/map.store";
import { formatBRL, calculateAverage, calculateMin, calculateMax } from "@/shared/utils/price.utils";
import { BarChart3, TrendingDown, TrendingUp, Minus } from "lucide-react";
import { B } from "./sidebarTheme";

const TYPE_KEYS: Record<string, string> = {
  apartment: "filters.apartment",
  house:     "filters.house",
  commercial:"filters.commercial",
  office:    "filters.office",
};

export function RegionStats() {
  const { t } = useTranslation();
  const hasActivePolygon = useMapStore((s) => s.hasActivePolygon);
  const filteredListings = useMapStore((s) => s.filteredListings);

  if (!hasActivePolygon) return null;

  const prices = filteredListings.map((l) => l.price);

  const byType = filteredListings.reduce<Record<string, number>>((acc, l) => {
    acc[l.type] = (acc[l.type] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: B.surface, border: `1px solid ${B.border}` }}
      data-testid="region-stats"
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{
          background:   `rgba(78,128,164,0.08)`,
          borderBottom: `1px solid ${B.border}`,
        }}
      >
        <BarChart3 className="w-4 h-4" style={{ color: B.steel }} />
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: B.steel }}>
          Selected area
        </span>
      </div>

      <div className="px-4 py-3 space-y-3">
        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: B.muted }}>{t("stats.properties_found")}</span>
          <span className="text-sm font-bold" style={{ color: B.navy }} data-testid="stat-total">
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
                    <span className="text-xs" style={{ color: B.faint }}>
                      {TYPE_KEYS[type] ? t(TYPE_KEYS[type]) : type}
                    </span>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-1 rounded-full opacity-60"
                        style={{
                          background: B.steel,
                          width: `${Math.max(20, (count / filteredListings.length) * 60)}px`,
                        }}
                      />
                      <span className="text-xs font-semibold w-4 text-right" style={{ color: B.muted }}>
                        {count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="h-px" style={{ background: B.border }} />

            {/* Price stats */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs" style={{ color: B.muted }}>
                  <Minus className="w-3 h-3" />
                  {t("stats.average_price")}
                </span>
                <span className="text-xs font-semibold" style={{ color: B.navy }} data-testid="stat-avg">
                  {formatBRL(Math.round(calculateAverage(prices)))}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs" style={{ color: B.muted }}>
                  <TrendingDown className="w-3 h-3 text-emerald-500" />
                  {t("stats.lowest_price")}
                </span>
                <span className="text-xs font-semibold text-emerald-600" data-testid="stat-min">
                  {formatBRL(calculateMin(prices))}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs" style={{ color: B.muted }}>
                  <TrendingUp className="w-3 h-3 text-amber-500" />
                  {t("stats.highest_price")}
                </span>
                <span className="text-xs font-semibold text-amber-600" data-testid="stat-max">
                  {formatBRL(calculateMax(prices))}
                </span>
              </div>
            </div>
          </>
        )}

        {filteredListings.length === 0 && (
          <p className="text-xs text-center py-2" style={{ color: B.faint }}>
            No properties in this area
          </p>
        )}
      </div>
    </div>
  );
}
