import { useState, useEffect, useRef } from "react";
import { useMap } from "@vis.gl/react-google-maps";
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
  const map = useMap();
  const overlayRef = useRef<google.maps.OverlayView | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const active = hovered || isSelected;
  const label = formatPrice(listing.price, listing.transactionType);

  useEffect(() => {
    if (!map) return;

    class PriceOverlay extends google.maps.OverlayView {
      private position: google.maps.LatLng;
      private div: HTMLDivElement | null = null;

      constructor(pos: google.maps.LatLng) {
        super();
        this.position = pos;
      }

      onAdd() {
        const panes = this.getPanes();
        if (!panes) return;

        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.cursor = "pointer";
        div.style.userSelect = "none";
        div.style.transform = "translate(-50%, -100%)";
        div.style.zIndex = "1";
        containerRef.current = div;
        this.div = div;
        panes.overlayMouseTarget.appendChild(div);
      }

      draw() {
        if (!this.div) return;
        const proj = this.getProjection();
        const point = proj.fromLatLngToDivPixel(this.position);
        if (!point) return;
        this.div.style.left = `${point.x}px`;
        this.div.style.top = `${point.y}px`;
      }

      onRemove() {
        if (this.div?.parentNode) {
          this.div.parentNode.removeChild(this.div);
          this.div = null;
          containerRef.current = null;
        }
      }
    }

    const overlay = new PriceOverlay(
      new google.maps.LatLng(listing.coordinates.lat, listing.coordinates.lng)
    );
    overlay.setMap(map);
    overlayRef.current = overlay;

    return () => {
      overlay.setMap(null);
      overlayRef.current = null;
    };
  }, [map]);

  useEffect(() => {
    const div = containerRef.current;
    if (!div) return;

    const handleClick = () => onClick(listing);
    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    div.addEventListener("click", handleClick);
    div.addEventListener("mouseenter", handleEnter);
    div.addEventListener("mouseleave", handleLeave);

    return () => {
      div.removeEventListener("click", handleClick);
      div.removeEventListener("mouseenter", handleEnter);
      div.removeEventListener("mouseleave", handleLeave);
    };
  }, [listing, onClick]);

  useEffect(() => {
    const div = containerRef.current;
    if (!div) return;

    div.style.zIndex = isSelected ? "999" : hovered ? "998" : "1";
    div.innerHTML = `
      <div style="
        transform: scale(${active ? 1.1 : 1});
        transition: transform 150ms ease;
        display: flex;
        flex-direction: column;
        align-items: center;
      ">
        <div style="
          background: ${active ? "#0ea5e9" : "#ffffff"};
          color: ${active ? "#ffffff" : "#0f172a"};
          border: 2px solid ${active ? "#0284c7" : "#e2e8f0"};
          border-radius: 9999px;
          padding: 5px 12px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: ${active ? "0 4px 16px rgba(14,165,233,0.40)" : "0 2px 8px rgba(0,0,0,0.14)"};
          letter-spacing: -0.01em;
          line-height: 1;
        ">${label}</div>
        <div style="
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 7px solid ${active ? "#0284c7" : "#e2e8f0"};
          margin-top: -1px;
        "></div>
        <div style="
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid ${active ? "#0ea5e9" : "#ffffff"};
          margin-top: -13px;
        "></div>
      </div>
    `;
  }, [active, hovered, isSelected, label]);

  return null;
}
