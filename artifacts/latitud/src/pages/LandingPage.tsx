import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useMap } from "@vis.gl/react-google-maps";
import { MapPin, PencilLine, BarChart3, Compass, ArrowRight } from "lucide-react";

const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY as string;
const FORTALEZA = { lat: -3.7318, lng: -38.504 };

const PAN_TARGETS = [
  { lat: -3.720, lng: -38.496 },
  { lat: -3.740, lng: -38.515 },
  { lat: -3.728, lng: -38.490 },
  { lat: -3.715, lng: -38.510 },
];

const HERO_MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#1e293b" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#475569" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0f172a" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#334155" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#475569" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0ea5e9" }, { lightness: -60 }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#1a3a2a" }] },
];

function AutoPanMap() {
  const map = useMap();
  const idxRef = useRef(0);

  useEffect(() => {
    if (!map) return;
    const interval = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % PAN_TARGETS.length;
      map.panTo(PAN_TARGETS[idxRef.current]);
    }, 5000);
    return () => clearInterval(interval);
  }, [map]);

  return null;
}

const FEATURES = [
  {
    Icon: PencilLine,
    title: "Desenhe sua área",
    desc: "Trace livremente qualquer região no mapa e veja apenas os imóveis dentro da área selecionada.",
    color: "#6366f1",
  },
  {
    Icon: BarChart3,
    title: "Analise a região",
    desc: "Obtenha estatísticas em tempo real: média de preço, distribuição por tipo e muito mais.",
    color: "#0ea5e9",
  },
  {
    Icon: Compass,
    title: "Explore o entorno",
    desc: "Descubra restaurantes, escolas, hospitais e outros pontos de interesse próximos ao imóvel.",
    color: "#10b981",
  },
];

export default function LandingPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Map background — desktop only */}
        <div className="absolute inset-0 hidden md:block opacity-30">
          {GOOGLE_MAPS_KEY ? (
            <APIProvider apiKey={GOOGLE_MAPS_KEY} libraries={["places", "geometry"]}>
              <Map
                defaultCenter={FORTALEZA}
                defaultZoom={13}
                styles={HERO_MAP_STYLES}
                disableDefaultUI
                gestureHandling="none"
                style={{ width: "100%", height: "100%" }}
              >
                <AutoPanMap />
              </Map>
            </APIProvider>
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

        {/* Mobile gradient background */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "radial-gradient(ellipse at 60% 30%, #0ea5e918 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, #6366f118 0%, transparent 50%)",
          }}
        />

        {/* Gradient overlay for readability */}
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
          {/* Logo */}
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
            Encontre seu imóvel{" "}
            <span style={{ color: "#0ea5e9" }}>no mapa.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"
            style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}
          >
            Explore imóveis em Fortaleza de forma visual e interativa. Desenhe
            regiões, analise bairros e descubra o lugar perfeito.
          </p>

          <div style={{ animation: "fadeInUp 0.8s ease 0.3s both" }}>
            <button
              onClick={() => setLocation("/map")}
              data-testid="button-cta-explore"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ background: "#0ea5e9", boxShadow: "0 8px 32px rgba(14,165,233,0.40)" }}
            >
              Explorar o mapa
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          style={{ animation: "fadeInUp 0.8s ease 0.6s both" }}
        >
          <div className="w-px h-10 bg-white/50" style={{ animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Uma nova forma de buscar
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Chega de listas infinitas. Com o Latitud, você vê e sente a cidade antes de escolher.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map(({ Icon, title, desc, color }) => (
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
              Ver todos os imóveis
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
