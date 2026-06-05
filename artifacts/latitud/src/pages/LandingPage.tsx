import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Map, useMap } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin, PencilLine, BarChart3, Compass, ArrowRight } from "lucide-react";
import { MAPBOX_TOKEN, HERO_MAP_STYLE } from "@/lib/mapbox";

const PAN_TARGETS: [number, number][] = [
  [-38.496, -3.720],
  [-38.515, -3.740],
  [-38.490, -3.728],
  [-38.510, -3.715],
];

function AutoPanMap() {
  const maps = useMap();
  const mapRef = maps["hero"];
  const idxRef = useRef(0);

  useEffect(() => {
    if (!mapRef) return;
    const interval = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % PAN_TARGETS.length;
      const [lng, lat] = PAN_TARGETS[idxRef.current];
      mapRef.flyTo({ center: [lng, lat], duration: 4000, essential: false });
    }, 5000);
    return () => clearInterval(interval);
  }, [mapRef]);

  return null;
}

const FEATURE_ICONS = [PencilLine, BarChart3, Compass];
const FEATURE_COLORS = ["#6366f1", "#0ea5e9", "#10b981"];

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  const features = [
    { Icon: FEATURE_ICONS[0], title: t("landing.feature1_title"), desc: t("landing.feature1_desc"), color: FEATURE_COLORS[0] },
    { Icon: FEATURE_ICONS[1], title: t("landing.feature2_title"), desc: t("landing.feature2_desc"), color: FEATURE_COLORS[1] },
    { Icon: FEATURE_ICONS[2], title: t("landing.feature3_title"), desc: t("landing.feature3_desc"), color: FEATURE_COLORS[2] },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Map background — desktop only */}
        <div className="absolute inset-0 hidden md:block opacity-30">
          {MAPBOX_TOKEN ? (
            <Map
              id="hero"
              initialViewState={{ longitude: -38.504, latitude: -3.7318, zoom: 13 }}
              mapStyle={HERO_MAP_STYLE}
              mapboxAccessToken={MAPBOX_TOKEN}
              interactive={false}
              style={{ width: "100%", height: "100%" }}
              attributionControl={false}
            >
              <AutoPanMap />
            </Map>
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, #0ea5e920 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, #6366f120 0%, transparent 50%)",
              }}
            />
          )}
        </div>

        {/* Mobile gradient */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "radial-gradient(ellipse at 60% 30%, #0ea5e918 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, #6366f118 0%, transparent 50%)",
          }}
        />

        {/* Overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.7) 60%, rgba(15,23,42,0.9) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
          style={{ animation: "fadeInUp 0.8s ease both" }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: "#0ea5e9" }}
            >
              <MapPin className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-3xl font-black text-white tracking-tight">
              Latitud
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
            style={{ animation: "fadeInUp 0.8s ease 0.1s both" }}
          >
            {t("landing.tagline")}
          </h1>

          <div style={{ animation: "fadeInUp 0.8s ease 0.3s both" }}>
            <button
              onClick={() => setLocation("/map")}
              data-testid="button-cta-explore"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{
                background: "#0ea5e9",
                boxShadow: "0 8px 32px rgba(14,165,233,0.40)",
              }}
            >
              {t("landing.cta")}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          style={{ animation: "fadeInUp 0.8s ease 0.6s both" }}
        >
          <div
            className="w-px h-10 bg-white/50"
            style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ Icon, title, desc, color }) => (
              <div
                key={title}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${color}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => setLocation("/map")}
              data-testid="button-cta-features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-sky-400 hover:text-sky-600 transition-all duration-200"
            >
              {t("nav.explore")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">
          © 2026 Latitud · Fortaleza, Ceará, Brasil
        </p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50%       { opacity: 0.7; transform: scaleY(1.2); }
        }
      `}</style>
    </div>
  );
}
