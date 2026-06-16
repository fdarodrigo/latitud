import { Pencil, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMapStore } from "@/domains/map/store/map.store";
import { B } from "./sidebarTheme";

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
          background:  isDrawingMode ? B.gold : B.surface,
          color:       isDrawingMode ? "#fff" : B.navy,
          border:      isDrawingMode ? `1px solid ${B.gold}` : `1px solid ${B.border}`,
          boxShadow:   isDrawingMode ? `0 0 0 3px rgba(196,151,58,0.20)` : "none",
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
            background: B.surface,
            color:      B.navy,
            border:     `1px solid ${B.border}`,
          }}
        >
          <X className="w-3 h-3" />
          {t("sidebar.clear_drawing")}
        </button>
      )}

      {isDrawingMode && (
        <p className="text-xs text-center animate-pulse" style={{ color: B.gold }}>
          Click and drag to draw an area
        </p>
      )}
    </div>
  );
}
