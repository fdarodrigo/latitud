import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  BedDouble,
  Bath,
  Car,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flame,
  Waves,
  ArrowUpDown,
  MapPin,
} from "lucide-react";
import type { Listing } from "@/domains/listings/mocks/listings.mock";

const TYPE_LABELS: Record<string, string> = {
  apartment: "Apartamento",
  house: "Casa",
  commercial: "Comercial",
  office: "Escritório",
};

function formatFullPrice(price: number, transactionType: string): string {
  const formatted = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
  return transactionType === "rent" ? `${formatted}/mês` : formatted;
}

interface ListingModalProps {
  listing: Listing;
  onClose: () => void;
}

export function ListingModal({ listing, onClose }: ListingModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
    setCurrentIndex((i) => (i - 1 + listing.photos.length) % listing.photos.length);
  };
  const scrollNext = () => {
    emblaApi?.scrollNext();
    setCurrentIndex((i) => (i + 1) % listing.photos.length);
  };

  const amenities = [
    { key: "hasElevator", label: "Elevador", Icon: ArrowUpDown },
    { key: "hasGrill", label: "Churrasqueira", Icon: Flame },
    { key: "hasPool", label: "Piscina", Icon: Waves },
    { key: "hasGym", label: "Academia", Icon: Dumbbell },
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
      data-testid="modal-overlay"
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        data-testid={`modal-listing-${listing.id}`}
      >
        {/* Photo carousel */}
        <div className="relative h-64 bg-slate-100 overflow-hidden">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {listing.photos.map((photo, i) => (
                <div key={i} className="relative flex-none w-full h-full">
                  <img
                    src={photo}
                    alt={`${listing.title} - foto ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next */}
          <button
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
            data-testid="button-photo-prev"
          >
            <ChevronLeft className="w-4 h-4 text-slate-800" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
            data-testid="button-photo-next"
          >
            <ChevronRight className="w-4 h-4 text-slate-800" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {listing.photos.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{
                  background: i === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
            data-testid="button-modal-close"
          >
            <X className="w-4 h-4 text-slate-800" />
          </button>

          {/* Type badge */}
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-white tracking-wide">
              {TYPE_LABELS[listing.type]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h2 className="text-base font-bold text-slate-900 leading-snug" data-testid="text-modal-title">
              {listing.title}
            </h2>
            <div className="text-right shrink-0">
              <p className="text-lg font-bold text-sky-500" data-testid="text-modal-price">
                {formatFullPrice(listing.price, listing.transactionType)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate" data-testid="text-modal-address">{listing.address}</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 mb-4 p-3 bg-slate-50 rounded-xl">
            <div className="flex flex-col items-center gap-1 text-slate-700">
              <Maximize2 className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold">{listing.area}m²</span>
              <span className="text-[10px] text-slate-400">Área</span>
            </div>
            {listing.bedrooms > 0 && (
              <div className="flex flex-col items-center gap-1 text-slate-700">
                <BedDouble className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold">{listing.bedrooms}</span>
                <span className="text-[10px] text-slate-400">Quartos</span>
              </div>
            )}
            <div className="flex flex-col items-center gap-1 text-slate-700">
              <Bath className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold">{listing.bathrooms}</span>
              <span className="text-[10px] text-slate-400">Banheiros</span>
            </div>
            {listing.parkingSpots > 0 && (
              <div className="flex flex-col items-center gap-1 text-slate-700">
                <Car className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold">{listing.parkingSpots}</span>
                <span className="text-[10px] text-slate-400">Vagas</span>
              </div>
            )}
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2">
            {amenities.map(({ key, label, Icon }) =>
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
        </div>
      </div>
    </div>
  );
}
