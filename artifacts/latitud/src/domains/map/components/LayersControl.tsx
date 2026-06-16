import { Car, Train, Bike, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMapStore } from "@/domains/map/store/map.store";
import type { LayerType } from "@/domains/map/hooks/useMapLayers";
import { B } from "./sidebarTheme";

const LAYERS: { value: LayerType; tKey: string; Icon: React.ElementType }[] = [
  { value: "traffic",   tKey: "layers.traffic",  Icon: Car   },
  { value: "transit",   tKey: "layers.transit",  Icon: Train },
  { value: "bicycling", tKey: "layers.cycling",  Icon: Bike  },
];

export function LayersControl() {
  const { t } = useTranslation();
  const activeLayer = useMapStore((s) => s.activeLayer);
  const setActiveLayer = useMapStore((s) => s.setActiveLayer);

  const toggle = (value: LayerType) => {
    setActiveLayer(activeLayer === value ? null : value);
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: B.faint }}>
        <Layers className="w-3.5 h-3.5" />
        <span>{t("sidebar.traffic_info")}</span>
      </div>
      <div className="space-y-1.5">
        {LAYERS.map(({ value, tKey, Icon }) => {
          const active = activeLayer === value;
          return (
            <button
              key={value}
              onClick={() => toggle(value)}
              data-testid={`layer-${value}`}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150"
              style={{
                background: active ? `rgba(78,128,164,0.10)` : B.surface,
                color:      active ? B.steel : B.navy,
                border:     active ? `1px solid rgba(78,128,164,0.35)` : `1px solid ${B.border}`,
              }}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="font-medium">{t(tKey)}</span>
              {active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: B.steel }} />
              )}
            </button>
          );
        })}
      </div>

      {activeLayer === "transit" && (
        <p className="text-xs mt-2 leading-relaxed text-amber-600">
          Subway data may be limited for this region.
        </p>
      )}
    </div>
  );
}
