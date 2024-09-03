import NavBar from "../components/NavBar";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";
export default function HomePage() {
  function RotatingCube() {
    const cubeRef = useRef(null);
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      const x = Math.sin(t) * 4;
      const y = Math.cos(x);

      if (cubeRef.current) {
        cubeRef.current.position.x = x;
        cubeRef.current.position.y = y;
      }
    });

    return (
      <mesh ref={cubeRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial color="blue" roughness={0.5} metalness={0.9} />
      </mesh>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <NavBar />
      <main className="container mx-auto p-4 text-center">
        <div className="rounded-lg bg-slate-800 bg-opacity-75 p-8 shadow-lg">
          <h1 className="text-4xl font-bold">
            <Canvas camera={{ position: [2, 0, 5] }}>
              <TrackballControls />
              <ambientLight intensity={1.5} />
              <directionalLight position={[0, 10, 10]} />
              <RotatingCube />
            </Canvas>
            Bienvenido a TerraWatch
          </h1>
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
            <button className="rounded-md bg-red-500 px-6 py-3 text-lg font-bold transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
              Explorar Más
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
