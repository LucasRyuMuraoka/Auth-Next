"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginArea() {
  const { estaLogado, login, logout, usuario } = useAuth();
  const [nome, setNome] = useState("");
  const initials = usuario
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (estaLogado) {
    return (
      <div style={{ textAlign: "center", padding: "28px 32px 32px" }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg, var(--accent2), var(--accent))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 500,
            color: "#0c0c0e",
            boxShadow: "0 0 0 4px var(--accent-dim2), 0 0 0 8px var(--accent-dim)",
          }}
        >
          {initials}
        </div>

        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 4 }}>
          {usuario}
        </p>
        <p style={{ fontSize: 13, color: "var(--text2)", fontWeight: 300, marginBottom: 24 }}>
          Sessão autenticada com sucesso
        </p>

        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: 13,
            borderRadius: 10,
            cursor: "pointer",
            background: "transparent",
            color: "var(--text2)",
            border: "1px solid var(--border)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            transition: "all 0.2s",
          }}
        >
          Encerrar sessão
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "28px 32px 32px" }}>
      <label
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--text3)",
          marginBottom: 8,
        }}
      >
        Identificação
      </label>

      <div style={{ position: "relative", marginBottom: 20 }}>
        <input
          type="text"
          value={nome}
          placeholder="Digite seu nome..."
          maxLength={30}
          onChange={(e) => setNome(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && nome.trim() && (login(nome), setNome(""))
          }
          style={{
            width: "100%",
            padding: "12px 48px 12px 14px",
            background: "var(--surface2)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            color: "var(--text)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            outline: "none",
          }}
        />
        <span
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 11,
            color: nome.length > 24 ? "var(--accent)" : "var(--text3)",
            fontFamily: "'DM Mono', monospace",
            transition: "color 0.2s",
          }}
        >
          {nome.length}/30
        </span>
      </div>

      <button
        disabled={!nome.trim()}
        onClick={() => { login(nome); setNome(""); }}
        style={{
          width: "100%",
          padding: 13,
          borderRadius: 10,
          border: "none",
          background: nome.trim()
            ? "linear-gradient(135deg, var(--accent2), var(--accent))"
            : "var(--surface2)",
          color: nome.trim() ? "#0c0c0e" : "var(--text3)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          cursor: nome.trim() ? "pointer" : "not-allowed",
          transition: "all 0.2s",
        }}
      >
        Entrar
      </button>
    </div>
  );
}