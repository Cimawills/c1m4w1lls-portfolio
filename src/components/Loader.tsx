import React from "react";


export default function Loader() {
  return (
    <>
      

      {/* Overlay plein écran */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#0A0A0A",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>

        {/* Grille de fond */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,214,0,.18) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,214,0,.18) 1px,transparent 1px)",
          backgroundSize: "40px 40px", opacity: .35,
        }} />

        {/* Lueur centrale */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,214,0,.06) 0%, transparent 70%)",
        }} />

        {/* Contenu */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: "1.1rem", animation: "cw-fadeup .5s ease both", position: "relative",
        }}>

          {/* Logo */}
          <span style={{
            fontFamily: "'Oxanium', sans-serif", fontWeight: 800,
            fontSize: "1.5rem", letterSpacing: "6px",
            color: "#FFD600", textTransform: "uppercase",
          }}>
            C1M4W1LLS
          </span>

          {/* Anneau */}
          <div style={{ position: "relative", width: 96, height: 96 }}>

            {/* Outer ring */}
            <div style={{
              position: "absolute", inset: 0,
              border: "2px solid transparent",
              borderTopColor: "#FFD600", borderLeftColor: "#FFD600",
              borderRadius: "50%",
              animation: "cw-spin 1s linear infinite",
              boxShadow: "0 0 10px rgba(255,214,0,.35)",
            }} />

            {/* Inner ring */}
            <div style={{
              position: "absolute", inset: 14,
              border: "2px solid transparent",
              borderTopColor: "#B89C00", borderRightColor: "#B89C00",
              borderRadius: "50%",
              animation: "cw-rspin .72s linear infinite",
            }} />

            {/* Scan line */}
            <div style={{
              position: "absolute", left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg, transparent, #FFD600, transparent)",
              animation: "cw-scan 1.1s linear infinite", opacity: .65,
            }} />

            {/* Core diamond */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              width: 20, height: 20,
              background: "#FFD600",
              clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
              transform: "translate(-50%,-50%) rotate(45deg)",
              animation: "cw-core 1s ease-in-out infinite",
            }} />

            {/* Brackets */}
            {[
              { top:0,    left:0,    borderWidth: "2px 0 0 2px",   delay: "0s"    },
              { top:0,    right:0,   borderWidth: "2px 2px 0 0",   delay: ".35s"  },
              { bottom:0, left:0,    borderWidth: "0 0 2px 2px",   delay: ".7s"   },
              { bottom:0, right:0,   borderWidth: "0 2px 2px 0",   delay: "1.05s" },
            ].map((b, i) => (
              <div key={i} style={{
                position: "absolute", width: 11, height: 11,
                borderStyle: "solid", borderColor: "#FFD600",
                borderWidth: b.borderWidth,
                top: b.top, bottom: b.bottom, left: b.left, right: b.right,
                animation: `cw-blink 1.4s ease-in-out ${b.delay} infinite`,
              }} />
            ))}
          </div>

          {/* Label */}
          <span style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: ".8rem", letterSpacing: "3px",
            color: "#FFD600", textTransform: "uppercase",
            animation: "cw-flicker 2.2s linear infinite",
          }}>
            ▶ Initialisation
          </span>

          {/* Barre de progression */}
          <div style={{
            width: 180, height: 2,
            background: "rgba(255,214,0,.18)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, width: "55%", height: "100%",
              background: "#FFD600",
              animation: "cw-prog 1.4s ease-in-out infinite",
              boxShadow: "0 0 8px #FFD600",
            }} />
          </div>

        </div>
      </div>
    </>
  );
}