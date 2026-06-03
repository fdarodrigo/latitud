import {
  UtensilsCrossed,
  GraduationCap,
  Hospital,
  ShoppingCart,
  Dumbbell,
  Landmark,
  MapPin,
} from "lucide-react";
import { useMapStore } from "@/domains/map/store/map.store";

const PLACE_TYPES = [
  { type: "restaurant", label: "Restaurantes", Icon: UtensilsCrossed, color: "#f97316" },
  { type: "school", label: "Escolas", Icon: GraduationCap, color: "#8b5cf6" },
  { type: "hospital", label: "Hospitais", Icon: Hospital, color: "#ef4444" },
  { type: "supermarket", label: "Mercados", Icon: ShoppingCart, color: "#10b981" },
  { type: "gym", label: "Academias", Icon: Dumbbell, color: "#3b82f6" },
  { type: "bank", label: "Bancos", Icon: Landmark, color: "#eab308" },
] as const;

export function NearbyPlaces() {
  const activePlaceType = useMapStore((s) => s.activePlaceType);
  const setActivePlaceType = useMapStore((s) => s.setActivePlaceType);

  const toggle = (type: string) => {
    setActivePlaceType(activePlaceType === type ? null : type);
  };

  return (
    <div>
      <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
        <MapPin className="w-3.5 h-3.5" />
        <span>Locais Próximos</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {PLACE_TYPES.map(({ type, label, Icon, color }) => {
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
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
