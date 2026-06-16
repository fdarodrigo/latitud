import {
  UtensilsCrossed,
  GraduationCap,
  Hospital,
  ShoppingCart,
  Dumbbell,
  Landmark,
  MapPin,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMapStore } from "@/domains/map/store/map.store";
import { B } from "./sidebarTheme";

const PLACE_TYPES = [
  { type: "restaurant",  tKey: "nearby.restaurants", Icon: UtensilsCrossed, color: "#f97316" },
  { type: "school",      tKey: "nearby.schools",     Icon: GraduationCap,   color: "#8b5cf6" },
  { type: "hospital",    tKey: "nearby.hospitals",   Icon: Hospital,        color: "#ef4444" },
  { type: "supermarket", tKey: "nearby.supermarkets",Icon: ShoppingCart,    color: "#10b981" },
  { type: "gym",         tKey: "nearby.gyms",        Icon: Dumbbell,        color: B.steel   },
  { type: "bank",        tKey: "nearby.banks",       Icon: Landmark,        color: B.gold    },
] as const;

export function NearbyPlaces() {
  const { t } = useTranslation();
  const activePlaceType  = useMapStore((s) => s.activePlaceType);
  const hasActivePolygon = useMapStore((s) => s.hasActivePolygon);
  const setActivePlaceType = useMapStore((s) => s.setActivePlaceType);

  const toggle = (type: string) => {
    if (!hasActivePolygon) return;
    setActivePlaceType(activePlaceType === type ? null : type);
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: B.faint }}>
        <MapPin className="w-3.5 h-3.5" />
        <span>{t("sidebar.nearby_places")}</span>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {PLACE_TYPES.map(({ type, tKey, Icon, color }) => {
          const active = activePlaceType === type;
          const disabled = !hasActivePolygon;
          return (
            <button
              key={type}
              onClick={() => toggle(type)}
              data-testid={`place-type-${type}`}
              disabled={disabled}
              className="flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl text-center transition-all duration-150"
              style={{
                background:  active   ? `${color}18` : B.surface,
                border:      active   ? `1px solid ${color}55` : `1px solid ${B.border}`,
                opacity:     disabled ? 0.45 : 1,
                cursor:      disabled ? "not-allowed" : "pointer",
              }}
            >
              <Icon className="w-4 h-4" style={{ color: active ? color : B.muted }} />
              <span
                className="text-[10px] font-medium leading-tight"
                style={{ color: active ? color : B.muted }}
              >
                {t(tKey)}
              </span>
            </button>
          );
        })}
      </div>

      {!hasActivePolygon && (
        <p className="text-[10px] text-center mt-2 leading-relaxed" style={{ color: B.faint }}>
          Desenhe uma área no mapa para buscar locais próximos.
        </p>
      )}
    </div>
  );
}
