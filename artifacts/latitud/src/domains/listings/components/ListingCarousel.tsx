import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ListingCarouselProps {
  photos: string[];
  title: string;
}

export function ListingCarousel({ photos, title }: ListingCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [emblaApi, photos.length]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    setCurrentIndex((i) => (i + 1) % photos.length);
  }, [emblaApi, photos.length]);

  return (
    <div className="relative h-64 bg-slate-100 overflow-hidden" data-testid="listing-carousel">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {photos.map((photo, i) => (
            <div key={i} className="relative flex-none w-full h-full">
              <img
                src={photo}
                alt={`${title} - foto ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
        data-testid="button-carousel-prev"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-4 h-4 text-slate-800" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
        data-testid="button-carousel-next"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-4 h-4 text-slate-800" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === currentIndex ? "16px" : "6px",
              height: "6px",
              background: i === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
