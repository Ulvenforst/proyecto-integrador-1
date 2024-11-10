import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";
import { BakeShadows } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import WoodenSigns from "../components/generalModels/wooden_signs/WoodenSigns";
import { gsap } from "gsap";

function CameraAnimation({ position, target }) {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => camera.updateProjectionMatrix(),
    });

    const currentTarget = { x: target[0], y: target[1], z: target[2] };
    gsap.to(currentTarget, {
      x: target[0],
      y: target[1],
      z: target[2],
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(currentTarget.x, currentTarget.y, currentTarget.z),
    });
  }, [camera, position, target]);

  return null;
}

export default function Deforestation() {
  const navigate = useNavigate();
  
  const [terrainMap, setTerrainMap] = useState([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]);

  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  const cameraDistance = Math.max(totalWidth, totalHeight) * 0.1;
  const cameraHeight = cameraDistance * 0.1;

  const initialCameraPosition = [
    -cameraDistance * 0.7,
    cameraHeight,
    -cameraDistance * 0.7
  ];
  const initialCameraTarget = [0, 0, 0];

  const [cameraPosition, setCameraPosition] = useState(initialCameraPosition);
  const [cameraTarget, setCameraTarget] = useState(initialCameraTarget);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        setCameraPosition(initialCameraPosition);
        setCameraTarget(initialCameraTarget);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const returnHome = async () => {
    navigate("/scene");
  };

  const handleChunkClick = (rowIndex, colIndex) => {
    if (terrainMap[rowIndex][colIndex] === 1) {
      const newMap = terrainMap.map((row, i) =>
        row.map((chunk, j) =>
          i === rowIndex && j === colIndex ? 2 : chunk
        )
      );
      setTerrainMap(newMap);
    }
  };

  const handleSignClick = [
    // Causas
    () => {
      setCameraPosition([
        -cameraDistance * 1.2,
        cameraHeight * 1.5,
        -cameraDistance * 0.3
      ]);
      setCameraTarget([terrainOffsetX + chunkSize, 0, terrainOffsetZ]);
    },
    // Soluciones
    () => {
      setCameraPosition([
        -cameraDistance * 0.3,
        cameraHeight * 1.5,
        -cameraDistance * 1.2
      ]);
      setCameraTarget([terrainOffsetX, 0, terrainOffsetZ + chunkSize]);
    },
    // Quiz
    () => {
      console.log("Quiz clicked");
    }
  ];

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-6 left-6 z-10 max-w-md bg-black/50 backdrop-blur-sm text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Deforestación</h1>
        <p className="text-lg mb-4">
          La deforestación es la pérdida de bosques y selvas debido a la acción humana.
          Haz clic en cualquier área del bosque para ver el impacto de la deforestación.
        </p>
      </div>

      <button 
        onClick={returnHome}
        className="absolute top-6 right-6 z-10 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all
          transform hover:scale-105 duration-200"
      >
        Volver al inicio
      </button>

      <Canvas
        className="bg-cyan-200"
        shadows="soft"
        camera={{
          position: initialCameraPosition,
          fov: 45,
          near: 1,
          far: 1000
        }}
      >
        <Suspense fallback={null}>
          <CameraAnimation 
            position={cameraPosition}
            target={cameraTarget}
          />
          <OrbitControls
            maxPolarAngle={Math.PI * 0.47}
            minPolarAngle={Math.PI * 0.2}
            target={cameraTarget}
            enablePan={false}
            minDistance={cameraDistance * 0.2}
            maxDistance={cameraDistance * 1.0}
          />

          <WoodenSigns 
            signNumber={11} 
            position={[-12, 0, -10]}
            rotation={[0, -20*Math.PI/25, 0]}
            scale={0.45}
            htmlContent={
              <div style={{
                textAlign: 'center', 
                whiteSpace: 'nowrap',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  boxShadow: 'inset 0 0 20px 20px rgba(101, 67, 33, 0.6)',
                  pointerEvents: 'none',
                  zIndex: 1
                }} />
                <iframe 
                  width="350" 
                  height="200" 
                  src="https://www.youtube.com/embed/Ic-J6hcSKa8?si=b9W9zrbedat_0u8D" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    borderRadius: '12px',
                    display: 'block',
                  }}
                  allowFullScreen
                />
              </div>
            }
          />

          <WoodenSigns 
            signNumber={3} 
            position={[-9, 0, -12]}
            rotation={[0, -1.17*Math.PI, 0]}
            scale={1}
            text={["Causas", "Soluciones", "Quiz"]}
            textConfig={{
              scale: 1,
              color: "#462921",
              fontSize: 0.5,
              maxWidth: 2,
              textAlign: 'left'
            }}
            onTextClick={handleSignClick}
          />

          <GenericLight
            mapSize={Math.max(mapWidth, mapHeight)}
            chunkSize={chunkSize}
          />

          <CloudsBlock
            n={30}
            factor={Math.max(totalWidth, totalHeight)}
            seed={133456}
            textureOffsetX={0.8}
            textureOffsetY={1}
            position={[0, 60, 0]}
            scale={0.8}
            minRadius={12}
          />

          <Terrain
            map={terrainMap}
            baseSeed={12345}
            position={[terrainOffsetX, 0, terrainOffsetZ]}
            onChunkClick={handleChunkClick}
          />
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
}
