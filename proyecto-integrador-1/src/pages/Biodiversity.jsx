import { BakeShadows, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState } from "react";
import RoundedBoxWithText from "../components/RoundedBoxWithText";
import NavBar from "../components/NavBar";
import { gsap } from "gsap";
import { Html } from "@react-three/drei";
//componentes
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";
import Wood_sing from "../components/Wood_sing";
import { RoundedBox, Text3D } from "@react-three/drei";
import { FirstPersonControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

function CameraAnimation({ viewIndex, positions }) {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: positions[viewIndex][0],
      y: positions[viewIndex][1],
      z: positions[viewIndex][2],
      duration: 1,
      ease: "power0",
      onUpdate: () => camera.updateProjectionMatrix(),
    });

    const target = {
      // Definir un objeto de target para la animación
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    };

    gsap.to(target, {
      x: positions[viewIndex][0] - 10,
      y: positions[viewIndex][1],
      z: positions[viewIndex][2] - 10,
      duration: 1,
      ease: "power0", // Mantener el mismo easing para la sincronización
      onUpdate: () => {
        camera.lookAt(target.x, target.y, target.z);
      },
    });
  }, [viewIndex]);

  return (
    <OrbitControls
      // ref={orbitControlsRef}
      maxPolarAngle={Math.PI * 0.51}
      minPolarAngle={Math.PI * 0.5}
      maxAzimuthAngle={Math.PI * 0.015}
      minAzimuthAngle={-Math.PI * 0.015}
      target={[0, 10, -200]}
      enableZoom={false}
      enablePan={true}
      enableRotate={true}
      rotateSpeed={0.005} // Ajusta la velocidad de rotación (valor más bajo para hacerlo más lento)
      panSpeed={0.005} // Ajusta la velocidad de desplazamiento (valor más bajo para hacerlo más lento)
      // minDistance={3.5} // Establece la distancia mínima
      // maxDistance={15} // Establece la distancia máxima
    />
  );
}

const Biodiversity = () => {
  const navigate = useNavigate();
  const [viewIndex, setViewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Efecto para ocultar el texto después de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 10000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);

  const views = [
    {
      text: "La biodiversidad, la variedad de vida en la Tierra, se encuentra en un declive acelerado. Este fenómeno, conocido como pérdida de biodiversidad, representa una de las mayores crisis ambientales de nuestro tiempo. Desde los bosques tropicales hasta los océanos, los ecosistemas están sufriendo transformaciones drásticas que ponen en peligro la supervivencia de millones de especies.",
      position: [0, 6, 145],
      rotation: [0, 0, 0],
    },
    {
      text: "Destrucción de hábitats: La deforestación, la urbanización y la expansión agrícola destruyen los hogares de muchas especies.",
      position: [-12, 6, 55],
      rotation: [0, Math.PI / 6, 0],
    },
    {
      text: "Sobreexplotación de recursos: La pesca excesiva, la caza furtiva y la tala ilegal agotan las poblaciones de numerosas especies.",
      position: [10, 6, -16],
      rotation: [0, -Math.PI / 6, 0],
    },
    {
      text: "Contaminación: La contaminación del aire, el agua y el suelo afecta negativamente a los ecosistemas y a la vida silvestre.",
      position: [-10, 6, -90],
      rotation: [0, Math.PI / 6, 0],
    },
  ];

  useEffect(() => {
    const handleWheel = (event) => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (event.deltaY < 0) {
        setViewIndex((prev) => (prev + 1) % views.length);
      } else {
        setViewIndex((prev) => (prev - 1 + views.length) % views.length);
      }

      setTimeout(() => setIsAnimating(false), 1000);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAnimating, views.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setFocusMode((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const terrainMap = [
    [1, 1, 1, 5, 1, 1],
    [1, 6, 6, 5, 1, 1],
    [1, 6, 6, 5, 1, 1],
    [1, 1, 5, 6, 6, 1],
    [1, 1, 5, 6, 6, 1],
    [1, 6, 6, 5, 1, 1],
    [1, 6, 6, 5, 1, 1],
    [1, 1, 5, 5, 1, 1],
    [1, 1, 5, 5, 1, 1],
  ];

  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  const positions = [
    //roja, verde, azul
    [0, 5, 155],
    [0, 5, 72],
    [0, 5, -1],
    [0, 5, -75],
  ];

  const goHome = async () => {
    navigate("/home");
  };

  const scrollHintStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "7rem",
    animation: "blink 1s infinite", // Aplica la animación de parpadeo
    opacity: showScrollHint ? 1 : 0, // Oculta el texto después de 10 segundos
    transition: "opacity 0.5s ease",
  };

  return (
    <div className="container h-screen max-w-full">
      <button
        onClick={goHome}
        className="absolute left-6 top-6 z-10 transform rounded-lg bg-green-500 px-6 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-green-600"
      >
        inicio
      </button>

      {focusMode && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80 p-8 text-2xl text-white">
          <p>{views[viewIndex].text}</p>
        </div>
      )}

      {showScrollHint && (
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 transform rounded-lg px-6 py-2 text-center text-white transition-all duration-200 hover:scale-105">
          <p className="animate-pulse text-3xl">
            Desplázate por el entorno con el <strong>SCROLL</strong> del mouse 🖱️
          </p>
          <p className="animate-pulse text-3xl">
            presiona <strong>ENTER</strong> para ver mejor el texto ⌨️
          </p>
        </div>
      )}

      <Canvas
        className="bg-cyan-200"
        shadows="soft"
        camera={{
          position: positions[0],
        }}
      >
        <Suspense fallback={null}>
          <CameraAnimation viewIndex={viewIndex} positions={positions} />

          <GenericLight
            mapSize={Math.max(mapWidth, mapHeight)}
            chunkSize={chunkSize}
          />
          <CloudsBlock
            n={300}
            factor={Math.max(totalWidth, totalHeight)}
            seed={133456}
            textureOffsetX={0.8}
            textureOffsetY={1}
            position={[0, 60, 0]}
            scale={0.8}
            minRadius={12}
          />

          <primitive object={new AxesHelper(500)} />

          {views.map((box, index) => {
            return (
              <RoundedBoxWithText
                key={index}
                text={box.text}
                position={box.position}
                rotation={box.rotation}
              />
            );
          })}

          <RoundedBoxWithText
            text={
              "Contaminación: La contaminación del aire, el agua y el suelo afecta negativamente a los ecosistemas y a la vida silvestre."
            }
            position={[-10, 6, -90]}
            rotation={[0, Math.PI / 6, 0]}
          />
          <Terrain
            map={terrainMap}
            baseSeed={12345}
            position={[terrainOffsetX, 0, terrainOffsetZ]}
          />

          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Biodiversity;
