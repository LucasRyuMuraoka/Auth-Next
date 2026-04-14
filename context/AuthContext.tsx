"use client";

import { createContext, useContext, useState } from "react";

interface AuthContextType {
  usuario: string | null;
  estaLogado: boolean;
  login: (nome: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(null);
  const estaLogado = usuario !== null;

  function login(nome: string) {
    if (nome.trim()) setUsuario(nome.trim());
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, estaLogado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro do AuthProvider");
  return context;
}