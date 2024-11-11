import { BakeShadows, OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState } from "react";
import RoundedBoxWithText from "../components/RoundedBoxWithText";
import NavBar from "../components/NavBar";
import { gsap } from "gsap";
//componentes
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";

function CameraAnimation({ viewIndex, positions }) {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: positions[viewIndex][0],
      y: positions[viewIndex][1],
      z: positions[viewIndex][2],
      duration: 1,
      ease: "power0.linear",
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
      ease: "power1.inOut", // Mantener el mismo easing para la sincronización
      onUpdate: () => {
        camera.lookAt(target.x, target.y, target.z);
      },
    });
  }, [viewIndex]);

  return (
    <OrbitControls
      // ref={orbitControlsRef}
      // maxPolarAngle={Math.PI * 0.55}
      // minPolarAngle={Math.PI * 0.1}
      // maxAzimuthAngle={Math.PI * 0.25}
      // minAzimuthAngle={-Math.PI * 0.25}
      target={[
        0,
        10,
        -80,
      ]}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      // minDistance={3.5} // Establece la distancia mínima
      // maxDistance={15} // Establece la distancia máxima
    />
  );
}

const Biodiversity = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const views = [
    {
      title: "TERRAWATCH",
      content: "",
      type: "home",
    },
    {
      title: "Biodiversidad",
      content: "",
      route: "/biodiversity",
      type: "section",
    },
    {
      title: "Deforestación",
      content: "",
      route: "/deforestation",
      type: "section",
    },
    {
      title: "Erosión del Suelo",
      content: "",
      type: "section",
    },
  ];

  useEffect(() => {
    const handleWheel = (event) => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (event.deltaY > 0) {
        setViewIndex((prev) => (prev + 1) % views.length);
      } else {
        setViewIndex((prev) => (prev - 1 + views.length) % views.length);
      }

      setTimeout(() => setIsAnimating(false), 1000);
      console.log(viewIndex);
    };
    console.log(viewIndex)

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAnimating, views.length]);

  const terrainMap = [
    [1, 1, 0, 6, 1, 1],
    [1, 1, 6, 0, 1, 1],
    [1, 1, 0, 6, 1, 1],
    [1, 1, 6, 0, 1, 1],
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
    [0, 5, 95], // Inferior izquierda
    [0, 5, 50], // Superior izquierda
    [0, 5, -10], // Superior derecha
    [0, 5, -60], // Inferior derecha
  ];

 
  ;

  return (
    <div className="container h-screen max-w-full">
      <Canvas
        className="bg-cyan-200"
        shadows="soft"
        camera={{
          position: positions[0],
        }}
      >
        <Suspense fallback={null}>
          <CameraAnimation
            viewIndex={viewIndex}
            positions={positions}
            
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

          <primitive object={new AxesHelper(500)} />

          <RoundedBoxWithText
            text={
              "La biodiversidad, la variedad de vida en la Tierra, se encuentra en un declive acelerado. Este fenómeno, conocido como pérdida de biodiversidad, representa una de las mayores crisis ambientales de nuestro tiempo. Desde los bosques tropicales hasta los océanos, los ecosistemas están sufriendo transformaciones drásticas que ponen en peligro la supervivencia de millones de especies."
            }
            position={[0, 6, 85]}
          />
          <RoundedBoxWithText
            text={
              "Destrucción de hábitats: La deforestación, la urbanización y la expansión agrícola destruyen los hogares de muchas especies."
            }
            position={[-10, 6, 35]}
          />
          <RoundedBoxWithText
            text={
              "Sobreexplotación de recursos: La pesca excesiva, la caza furtiva y la tala ilegal agotan las poblaciones de numerosas especies."
            }
            position={[10, 6, -30]}
          />
          <RoundedBoxWithText
            text={
              "Contaminación: La contaminación del aire, el agua y el suelo afecta negativamente a los ecosistemas y a la vida silvestre."
            }
            position={[-10, 6, -80]}
          />
          <Terrain
            map={terrainMap}
            baseSeed={123}
            position={[terrainOffsetX, 0, terrainOffsetZ]}
          />
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Biodiversity;
