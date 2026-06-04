import { useState } from "react";
import { Marker } from "react-map-gl/mapbox";
import type { Listing } from "@/domains/listings/mocks/listings.mock";

function formatPrice(price: number, transactionType: string): string {
  if (transactionType === "rent") {
    if (price >= 1000) return `R$${(price / 1000).toFixed(1)}k`;
    return `R$${price}`;
  }
  if (price >= 1000000) return `R$${(price / 1000000).toFixed(1)}M`;
  if (price >= 1000) return `R$${Math.round(price / 1000)}k`;
  return `R$${price}`;
}

interface PriceMarkerProps {
  listing: Listing;
  isSelected: boolean;
  onClick: (listing: Listing) => void;
}

export function PriceMarker({ listing, isSelected, onClick }: PriceMarkerProps) {
  const [hovered, setHovered] = useState(false);
  const active = hovered || isSelected;
  const label = formatPrice(listing.price, listing.transactionType);

  return (
    <Marker
      longitude={listing.coordinates.lng}
      latitude={listing.coordinates.lat}
      anchor="bottom"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        onClick(listing);
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transform: `scale(${active ? 1.1 : 1})`,
          transition: "transform 150ms ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none",
          zIndex: isSelected ? 999 : hovered ? 998 : 1,
        }}
      >
        <div
          style={{
            background: active ? "#0ea5e9" : "#ffffff",
            color: active ? "#ffffff" : "#0f172a",
            border: `2px solid ${active ? "#0284c7" : "#e2e8f0"}`,
            borderRadius: "9999px",
            padding: "5px 12px",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            whiteSpace: "nowrap",
            boxShadow: active
              ? "0 4px 16px rgba(14,165,233,0.40)"
              : "0 2px 8px rgba(0,0,0,0.14)",
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          {label}
        </div>
        {/* Caret outer */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: `7px solid ${active ? "#0284c7" : "#e2e8f0"}`,
            marginTop: -1,
          }}
        />
        {/* Caret inner */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: `6px solid ${active ? "#0ea5e9" : "#ffffff"}`,
            marginTop: -13,
          }}
        />
      </div>
    </Marker>
  );
}
