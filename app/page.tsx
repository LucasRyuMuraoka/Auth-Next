import BarraNavegacao from "@/components/BarraNavegacao";
import LoginArea from "@/components/LoginArea";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <BarraNavegacao />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        <div style={{
          width: "100%", maxWidth: 420,
          background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden",
        }}>
          <div style={{
            padding: "32px 32px 24px", borderBottom: "1px solid var(--border)",
            background: "linear-gradient(160deg, var(--surface2), var(--surface))",
          }}>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              color: "var(--accent)", marginBottom: 16, letterSpacing: "0.04em",
            }}>
              ◉ Context API
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, lineHeight: 1.2, marginBottom: 6 }}>
              Bem-vindo de<br />volta.
            </h1>
            <p style={{ fontSize: 14, color: "var(--text2)", fontWeight: 300 }}>
              Autentique-se para continuar.
            </p>
          </div>
          <LoginArea />
        </div>
      </main>
    </div>
  );
}