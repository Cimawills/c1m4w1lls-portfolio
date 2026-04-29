import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
const location = useLocation()
  return (
    <>

      {/* Root */}
      <div className="relative min-h-screen bg-[#0A0A0A] text-[#E8E8E8] font-['Share_Tech_Mono',monospace] flex flex-col overflow-hidden">

        {/* Grid bg */}
        <div className="cw-grid absolute inset-0 pointer-events-none opacity-25" />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255,214,0,0.06) 0%, transparent 70%)" }}
        />

        {/* Scan line */}
        <div className="cw-scanline" />

        {/* Corner brackets */}
        <div className="absolute top-[76px] left-6 w-5 h-5 border-t-2 border-l-2 border-border-bright opacity-50" />
        <div className="absolute top-[76px] right-6 w-5 h-5 border-t-2 border-r-2 border-border-bright opacity-50" />
        <div className="absolute bottom-6   left-6 w-5 h-5 border-b-2 border-l-2 border-border-bright opacity-50" />
        <div className="absolute bottom-6   right-6 w-5 h-5 border-b-2 border-r-2 border-border-bright opacity-50" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-12 py-4 bg-[rgba(10,10,10,0.92)] backdrop-blur-md border-b border-[rgba(255,214,0,0.2)]">
          <a
            href="/"
            className="font-['Oxanium',sans-serif] text-lg font-extrabold text-[#FFD600] tracking-[3px] no-underline"
          >
            C1M4W1LLS
          </a>
          <span className="flex items-center gap-2 text-[0.6rem] tracking-[2px] text-[#B89C00] uppercase">
            <span className="cw-dot" />
            Erreur système détectée
          </span>
        </nav>

        {/* Main */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-0">

          {/* 404 */}
          <div className="cw-404">404</div>

          {/* Divider */}
          <div
            className="cw-fadeup-1 w-[min(360px,85%)] h-px my-5"
            style={{ background: "linear-gradient(90deg,transparent,#FFD600,transparent)" }}
          />

          {/* Terminal */}
          <div className="cw-fadeup-2 text-[0.65rem] text-yellow-dim tracking-[1.5px] text-center leading-loose">
            <div>
              <span className="text-[#FFD600]">▶ </span>
              {`GET ${location.pathname} HTTP/1.1`}
            </div>
            <div>
              <span className="text-[#ff5555]">✖ </span>
              STATUS — 404 NOT FOUND
            </div>
            <div>
              <span className="text-[#50fa7b]">✔ </span>
              SYSTÈME EN LIGNE — PAGE INTROUVABLE
            </div>
            <div>
              <span className="text-[#FFD600]">▶ </span>
              REDIRECTION DISPONIBLE
              <span className="cw-cursor">_</span>
            </div>
          </div>

          {/* Message */}
          <p className="cw-fadeup-3 font-['Oxanium',sans-serif] font-light text-[0.85rem] text-[#555] tracking-[4px] uppercase text-center mt-5">
            Cette{" "}
            <span className="text-[#E8E8E8]">page n'existe pas</span>
            {" "}dans la matrice.
          </p>

          {/* CTA */}
          <div className="cw-fadeup-4 flex flex-wrap gap-3 justify-center mt-8">
            <a
              href="/"
              className="cw-btn-primary px-8 py-3 font-['Share_Tech_Mono',monospace] text-[0.7rem] tracking-[3px] uppercase bg-[#FFD600] text-[#0A0A0A] font-bold no-underline transition-transform hover:-translate-y-0.5"
            >
              ↩ Retour accueil
            </a>
            <a
              href="/#contact"
              className="cw-btn-ghost px-8 py-3 font-['Share_Tech_Mono',monospace] text-[0.7rem] tracking-[3px] uppercase bg-transparent text-[#FFD600] font-semibold no-underline border border-[rgba(255,214,0,0.6)] transition-colors hover:bg-[rgba(255,214,0,0.1)]"
            >
              Me contacter
            </a>
          </div>

        </main>
      </div>
    </>
  );
}