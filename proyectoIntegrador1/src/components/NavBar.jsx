import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-slate-900 p-4 text-white">
      <h1 className="text-2xl font-bold">PI</h1>
      <button
        onClick={handleSignOut}
        className="rounded-md bg-red-500 px-4 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}
