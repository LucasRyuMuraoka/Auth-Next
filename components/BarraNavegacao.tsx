"use client";
import { useAuth } from "@/context/AuthContext";

export default function BarraNavegacao() {
  const { usuario, estaLogado } = useAuth();
  const initials = usuario?.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 32px", borderBottom: "1px solid var(--border)",
      background: "rgba(12,12,14,0.85)", backdropFilter: "blur(12px)",
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20 }}>
        Auth<span style={{ color: "var(--accent)" }}>.</span>App
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "6px 12px 6px 8px", borderRadius: 100,
          border: `1px solid ${estaLogado ? "rgba(212,168,83,0.4)" : "var(--border2)"}`,
          background: estaLogado ? "var(--accent-dim)" : "transparent",
          color: estaLogado ? "var(--accent)" : "var(--text2)",
          fontSize: 13, transition: "all 0.2s",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: estaLogado ? "var(--accent)" : "var(--border2)",
            boxShadow: estaLogado ? "0 0 6px var(--accent)" : "none",
            display: "inline-block",
          }} />
          {estaLogado ? usuario : "Visitante"}
        </div>

        {estaLogado && (
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent2), var(--accent))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 500, color: "#0c0c0e",
          }}>
            {initials}
          </div>
        )}
      </div>
    </nav>
  );
}