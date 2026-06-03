import { BedDouble, Bath, Car, Maximize2, X, MapPin, ExternalLink, ArrowUpDown, Flame, Waves, Dumbbell } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ListingCarousel } from "./ListingCarousel";
import { FavoriteButton } from "./FavoriteButton";
import { formatBRL } from "@/shared/utils/price.utils";
import type { Listing } from "@/domains/listings/mocks/listings.mock";

const TYPE_LABELS: Record<string, string> = {
  apartment: "Apartamento",
  house: "Casa",
  commercial: "Comercial",
  office: "Escritório",
};

const AMENITIES = [
  { key: "hasElevator" as const, label: "Elevador", Icon: ArrowUpDown },
  { key: "hasGrill" as const, label: "Churrasqueira", Icon: Flame },
  { key: "hasPool" as const, label: "Piscina", Icon: Waves },
  { key: "hasGym" as const, label: "Academia", Icon: Dumbbell },
];

interface ListingModalProps {
  listing: Listing;
  onClose: () => void;
}

export function ListingModal({ listing, onClose }: ListingModalProps) {
  const isRent = listing.transactionType === "rent";

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent
        className="p-0 overflow-hidden gap-0 max-w-lg w-full"
        data-testid={`modal-listing-${listing.id}`}
      >
        {/* Photo carousel */}
        <div className="relative">
          <ListingCarousel photos={listing.photos} title={listing.title} />

          {/* Type badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-white tracking-wide">
              {TYPE_LABELS[listing.type]}
            </span>
          </div>

          {/* Transaction badge */}
          <div className="absolute top-3 right-12 z-10">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{
                background: isRent ? "#0ea5e9" : "#10b981",
                color: "#fff",
              }}
            >
              {isRent ? "Aluguel" : "Venda"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Header: title + favorite + close */}
          <div className="flex items-start gap-2">
            <div className="flex-1 min-w-0">
              <h2
                className="text-base font-bold text-slate-900 leading-snug"
                data-testid="text-modal-title"
              >
                {listing.title}
              </h2>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1">
                <MapPin className="w-3 h-3 shrink-0" />
                <span className="truncate" data-testid="text-modal-address">
                  {listing.address}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <FavoriteButton listingId={listing.id} />
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
                data-testid="button-modal-close"
              >
                <X className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span
              className="text-2xl font-bold text-slate-900"
              data-testid="text-modal-price"
            >
              {formatBRL(listing.price)}
            </span>
            {isRent && (
              <span className="text-sm text-slate-400 font-normal">/mês</span>
            )}
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-4 gap-2 p-3 bg-slate-50 rounded-xl">
            <div className="flex flex-col items-center gap-1">
              <Maximize2 className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold text-slate-700">{listing.area}m²</span>
              <span className="text-[10px] text-slate-400">Área</span>
            </div>
            {listing.bedrooms > 0 && (
              <div className="flex flex-col items-center gap-1">
                <BedDouble className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold text-slate-700">{listing.bedrooms}</span>
                <span className="text-[10px] text-slate-400">Quartos</span>
              </div>
            )}
            <div className="flex flex-col items-center gap-1">
              <Bath className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold text-slate-700">{listing.bathrooms}</span>
              <span className="text-[10px] text-slate-400">Banheiros</span>
            </div>
            {listing.parkingSpots > 0 && (
              <div className="flex flex-col items-center gap-1">
                <Car className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold text-slate-700">{listing.parkingSpots}</span>
                <span className="text-[10px] text-slate-400">Vagas</span>
              </div>
            )}
          </div>

          {/* Amenities */}
          {AMENITIES.some(({ key }) => listing[key]) && (
            <div className="flex flex-wrap gap-2">
              {AMENITIES.map(({ key, label, Icon }) =>
                listing[key] ? (
                  <div
                    key={key}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium"
                    data-testid={`tag-amenity-${key}`}
                  >
                    <Icon className="w-3 h-3" />
                    {label}
                  </div>
                ) : null
              )}
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => console.log("listing id:", listing.id)}
            data-testid="button-listing-details"
            className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
            style={{ background: "#0ea5e9" }}
          >
            <ExternalLink className="w-4 h-4" />
            Ver detalhes do imóvel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
