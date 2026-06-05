import { Pencil, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMapStore } from "@/domains/map/store/map.store";

export function DrawingTool() {
  const { t } = useTranslation();
  const isDrawingMode = useMapStore((s) => s.isDrawingMode);
  const hasActivePolygon = useMapStore((s) => s.hasActivePolygon);
  const setDrawingMode = useMapStore((s) => s.setDrawingMode);
  const setActivePolygon = useMapStore((s) => s.setActivePolygon);

  const handleDraw = () => {
    if (isDrawingMode) {
      setDrawingMode(false);
    } else {
      if (hasActivePolygon) {
        setActivePolygon(null);
      }
      setDrawingMode(true);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePolygon(null);
  };

  return (
    <div className="space-y-2">
      <button
        onClick={handleDraw}
        data-testid="button-drawing-tool"
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
        style={{
          background: isDrawingMode ? "#6366f1" : "#1e293b",
          color: isDrawingMode ? "#fff" : "#94a3b8",
          border: isDrawingMode ? "1px solid #6366f1" : "1px solid #334155",
          boxShadow: isDrawingMode ? "0 0 0 3px rgba(99,102,241,0.25)" : "none",
        }}
      >
        <Pencil className="w-3.5 h-3.5" />
        {isDrawingMode ? "Drawing…" : t("sidebar.draw_button")}
      </button>

      {hasActivePolygon && !isDrawingMode && (
        <button
          onClick={handleClear}
          data-testid="button-clear-polygon"
          className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition-all duration-150"
          style={{
            background: "transparent",
            color: "#64748b",
            border: "1px solid #334155",
          }}
        >
          <X className="w-3 h-3" />
          {t("sidebar.clear_drawing")}
        </button>
      )}

      {isDrawingMode && (
        <p className="text-xs text-center text-indigo-400 animate-pulse">
          Click and drag to draw an area
        </p>
      )}
    </div>
  );
}
