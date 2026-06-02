import { MapSidebar } from "@/domains/map/components/MapSidebar";
import { MapContainer } from "@/domains/map/components/MapContainer";

export default function MapPage() {
  return (
    <div
      className="flex h-screen w-screen overflow-hidden"
      data-testid="map-page"
    >
      {/* Sidebar — fixed 380px */}
      <div
        className="flex-none h-full overflow-hidden"
        style={{ width: "380px" }}
      >
        <MapSidebar />
      </div>

      {/* Map — fills remaining space */}
      <div className="flex-1 h-full relative">
        <MapContainer />
      </div>
    </div>
  );
}
