import NavBar from "../components/NavBar";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <NavBar />
      <main className="container mx-auto p-4 text-center">
        <div className="rounded-lg bg-slate-800 bg-opacity-75 p-8 shadow-lg">
          <h1 className="text-4xl font-bold">Bienvenido a TerraWatch</h1>
          <p className="mt-4 text-lg">
            Aquí podrás encontrar información sobre diversos problemas en la
            tierra.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Secciones:</h2>
            <ul className="mt-4 space-y-2">
              <li>- Tipos de problemas en la tierra</li>
              <li>- Soluciones posibles</li>
              <li>- Recursos adicionales</li>
            </ul>
          </div>
          <div className="mt-12">
            <button
              onClick={() => navigate("/")}
              className="mr-8 rounded-md bg-cyan-500 px-6 py-3 text-lg font-bold transition-all duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Deforestacino de arboles
            </button>
            <button
              onClick={() => navigate("/biodiversity")}
              className="mr-8 rounded-md bg-cyan-500 px-6 py-3 text-lg font-bold transition-all duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Perdida de biodiversidad
            </button>
            <button
              onClick={() => navigate("/")}
              className="mr-8 rounded-md bg-cyan-500 px-6 py-3 text-lg font-bold transition-all duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Erosion en los suelos
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
