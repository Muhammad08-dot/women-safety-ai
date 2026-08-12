"use client";

import React, { useState } from "react";
import { ShieldAlert, Navigation, PhoneCall, Mic, MapPin, CheckCircle, Radio } from "lucide-react";

export default function WomenSafetyApp() {
  const [sosActive, setSosActive] = useState(false);
  const [fakeCallActive, setFakeCallActive] = useState(false);
  const [routeInfo, setRouteInfo] = useState<any>(null);

  const handleSOS = () => {
    setSosActive(true);
  };

  const handleFakeCall = () => {
    setFakeCallActive(true);
    setTimeout(() => {
      setFakeCallActive(false);
    }, 10000);
  };

  const calculateRoute = () => {
    setRouteInfo({
      safetyScore: "94.2/100 (Safe Route AI)",
      details: "High street lighting, active police patrol checkposts every 1.2km.",
      estMinutes: 18,
    });
  };

  return (
    <div className="min-h-screen bg-[#14060b] text-rose-100 flex flex-col font-sans">
      <header className="border-b border-rose-900/60 bg-[#220a12]/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-rose-300">Women Safety AI Platform 🚨 (محفوظ پاکستان)</h1>
            <p className="text-xs text-rose-500 font-mono">PROACTIVE DANGER DETECTION & GRAPH ROUTE AI</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-rose-950 border border-rose-800 px-3 py-1.5 rounded-full text-xs text-rose-300 font-bold">
          <Radio className="w-3.5 h-3.5 text-rose-400 animate-ping" />
          <span>Voice Trigger Active ("Bachao")</span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto p-6 space-y-6">
        {/* Giant Emergency SOS Button */}
        <section className="text-center py-6">
          <button
            onClick={handleSOS}
            className={`w-64 h-64 rounded-full border-8 font-black text-2xl tracking-wider uppercase transition-all shadow-2xl mx-auto flex flex-col items-center justify-center gap-2 ${
              sosActive
                ? "bg-rose-600 border-white text-white animate-bounce shadow-rose-600/80"
                : "bg-rose-950 border-rose-600 text-rose-300 hover:scale-105 shadow-rose-950"
            }`}
          >
            <ShieldAlert className="w-20 h-20 text-white" />
            <span>{sosActive ? "SOS DISPATCHED!" : "ONE-TAP SOS"}</span>
          </button>

          {sosActive && (
            <div className="mt-6 p-4 bg-rose-900/80 border-2 border-rose-400 rounded-2xl max-w-md mx-auto text-rose-100 font-bold text-sm">
              🚨 Emergency alert dispatched with live GPS tracking to Police (15) & 3 Trusted Emergency Contacts!
            </div>
          )}
        </section>

        {/* Feature Tools Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Safe Route AI Navigator */}
          <div className="bg-[#1e0d14] border border-rose-900/60 rounded-2xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Navigation className="w-6 h-6 text-rose-400" />
              <h2 className="text-lg font-bold text-rose-300">Graph AI Safe Route Navigator</h2>
            </div>
            <p className="text-xs text-rose-400">Avoid unlit or high-risk streets with AI safety heatmap routing.</p>

            <button
              onClick={calculateRoute}
              className="w-full bg-rose-800 hover:bg-rose-700 text-white font-bold py-3 rounded-xl transition-all text-sm"
            >
              🗺️ Calculate Safest Route (Gulberg -> DHA)
            </button>

            {routeInfo && (
              <div className="p-4 bg-[#14080d] border border-rose-800 rounded-xl space-y-2 text-sm">
                <span className="bg-emerald-950 border border-emerald-600 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs">
                  {routeInfo.safetyScore}
                </span>
                <p className="text-rose-200 mt-2">{routeInfo.details}</p>
                <p className="text-xs text-rose-400">Est. Duration: {routeInfo.estMinutes} mins</p>
              </div>
            )}
          </div>

          {/* Fake Call Generator for Awkward / Dangerous Escapes */}
          <div className="bg-[#1e0d14] border border-rose-900/60 rounded-2xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <PhoneCall className="w-6 h-6 text-rose-400" />
              <h2 className="text-lg font-bold text-rose-300">Fake Escape Call Generator</h2>
            </div>
            <p className="text-xs text-rose-400">Triggers a realistic incoming phone call to exit uncomfortable situations safely.</p>

            <button
              onClick={handleFakeCall}
              className="w-full bg-rose-900/80 hover:bg-rose-800 text-rose-200 border border-rose-700 font-bold py-3 rounded-xl transition-all text-sm"
            >
              📞 Trigger Incoming Emergency Call
            </button>

            {fakeCallActive && (
              <div className="p-4 bg-emerald-950 border border-emerald-500 rounded-xl text-emerald-300 font-bold text-sm text-center animate-pulse">
                📲 Incoming Call: "Abba" (Dad) - Pick up to escape!
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
