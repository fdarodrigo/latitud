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

const PLACE_TYPES = [
  { type: "restaurant", tKey: "nearby.restaurants", Icon: UtensilsCrossed, color: "#f97316" },
  { type: "school",     tKey: "nearby.schools",     Icon: GraduationCap,   color: "#8b5cf6" },
  { type: "hospital",   tKey: "nearby.hospitals",   Icon: Hospital,        color: "#ef4444" },
  { type: "supermarket",tKey: "nearby.supermarkets",Icon: ShoppingCart,    color: "#10b981" },
  { type: "gym",        tKey: "nearby.gyms",        Icon: Dumbbell,        color: "#3b82f6" },
  { type: "bank",       tKey: "nearby.banks",       Icon: Landmark,        color: "#eab308" },
] as const;

export function NearbyPlaces() {
  const { t } = useTranslation();
  const activePlaceType = useMapStore((s) => s.activePlaceType);
  const setActivePlaceType = useMapStore((s) => s.setActivePlaceType);

  const toggle = (type: string) => {
    setActivePlaceType(activePlaceType === type ? null : type);
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
        <MapPin className="w-3.5 h-3.5" />
        <span>{t("sidebar.nearby_places")}</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {PLACE_TYPES.map(({ type, tKey, Icon, color }) => {
          const active = activePlaceType === type;
          return (
            <button
              key={type}
              onClick={() => toggle(type)}
              data-testid={`place-type-${type}`}
              className="flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl text-center transition-all duration-150"
              style={{
                background: active ? `${color}22` : "#1e293b",
                border: active ? `1px solid ${color}66` : "1px solid #334155",
              }}
            >
              <Icon
                className="w-4 h-4"
                style={{ color: active ? color : "#64748b" }}
              />
              <span
                className="text-[10px] font-medium leading-tight"
                style={{ color: active ? color : "#64748b" }}
              >
                {t(tKey)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
