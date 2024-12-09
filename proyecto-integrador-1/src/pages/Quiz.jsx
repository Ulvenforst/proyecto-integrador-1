import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import PixelArt from "../components/postprocessing/PixelArt";

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

    const currentTarget = { x: camera.position.x, y: 0, z: camera.position.z };
    gsap.to(currentTarget, {
      x: target[0],
      y: 0,
      z: target[0],
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(currentTarget.x, currentTarget.y, currentTarget.z),
    });
  }, [camera, position, target]);

  return null;
}

export default function QuizDeforestation() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const [terrainMap, setTerrainMap] = useState([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 2, 1, 1],
    [2, 2, 1, 1],
  ]);

  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const centerX = 0;
  const centerZ = 0;

  const cameraDistance = Math.max(totalWidth, totalHeight) * 0.4;
  const cameraHeight = cameraDistance * 0.1;

  const positions = [
    [-cameraDistance * 0.6, cameraHeight * 0.5, cameraDistance * 0.6],
    [-cameraDistance * 0.71, cameraHeight * 0.4, -cameraDistance * 0.71],
    [cameraDistance * 0.6, cameraHeight * 0.5, -cameraDistance * 0.6],
    [cameraDistance * 0.6, cameraHeight * 0.5, cameraDistance * 0.6],
  ];

  const questions = [
    {
      question: "Ayuda a reforestar el área deforestada. Haz click 5 veces en las zonas deforestadas para plantar árboles.",
      position: positions[0],
      target: [centerX, 0, centerZ]
    },
    {
      question: "¿Qué porcentaje de los bosques tropicales se han perdido?",
      position: positions[1],
      target: [centerX, 0, centerZ]
    },
    {
      question: "Identifica las áreas deforestadas en el mapa",
      position: positions[2],
      target: [centerX, 0, centerZ]
    }
  ];

  useEffect(() => {
    const handleClick = () => {
      if (clickCount < 5) {
        setClickCount(prevCount => prevCount + 1);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [clickCount]);

  useEffect(() => {
    if (clickCount === 5) {
      const newMap = terrainMap.map(row =>
        row.map(chunk => chunk === 2 ? 1 : chunk)
      );
      setTerrainMap(newMap);
      setScore(prevScore => prevScore + 10);
    }
  }, [clickCount]);

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setCameraPosition(questions[currentQuestion + 1].position);
      setCameraTarget(questions[currentQuestion + 1].target);
    }
  };

  const returnToDeforestation = () => {
    navigate("/deforestation");
  };

  const [cameraPosition, setCameraPosition] = useState(questions[0].position);
  const [cameraTarget, setCameraTarget] = useState(questions[0].target);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-6 left-6 z-10 max-w-md bg-black/50 backdrop-blur-sm text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Pregunta {currentQuestion + 1}</h1>
        <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
        <p className="text-md mb-4">Clicks realizados: {clickCount}/5</p>
        {clickCount === 5 && currentQuestion < questions.length - 1 && (
          <button
            onClick={handleNextQuestion}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all
              transform hover:scale-105 duration-200"
          >
            Siguiente pregunta
          </button>
        )}
      </div>

      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white px-6 py-2 rounded-lg">
        <p className="text-lg">
          Puntuación: {score} | Pregunta: {currentQuestion + 1}/{questions.length}
        </p>
      </div>

      <button
        onClick={returnToDeforestation}
        className="absolute top-6 right-6 z-10 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all
          transform hover:scale-105 duration-200"
      >
        Volver
      </button>

      <Canvas
        className="bg-cyan-200"
        shadows="soft"
        camera={{
          position: questions[0].position,
          fov: 45,
          near: 1,
          far: 1000
        }}
      >
        <PixelArt />
        <Suspense fallback={null}>
          <CameraAnimation
            position={cameraPosition}
            target={cameraTarget}
          />
          <OrbitControls
            target={[centerX, 0, centerZ]}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
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
            position={[centerX, 60, centerZ]}
            scale={0.8}
            minRadius={12}
          />

          <Terrain
            map={terrainMap}
            baseSeed={12345}
            position={[terrainOffsetX, 0, terrainOffsetZ]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
