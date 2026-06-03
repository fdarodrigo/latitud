import { Heart } from "lucide-react";
import { useFavorites } from "@/domains/listings/hooks/useFavorites";
import { useState } from "react";

interface FavoriteButtonProps {
  listingId: string;
}

export function FavoriteButton({ listingId }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(listingId);
  const [animating, setAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(listingId);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      data-testid={`button-favorite-${listingId}`}
      className="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-150 hover:bg-red-50"
      style={{ transform: animating ? "scale(1.35)" : "scale(1)", transition: "transform 200ms ease, background 150ms" }}
      aria-label={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <Heart
        className="w-5 h-5 transition-all duration-200"
        style={{
          fill: favorited ? "#ef4444" : "none",
          color: favorited ? "#ef4444" : "#94a3b8",
          strokeWidth: 2,
        }}
      />
    </button>
  );
}
