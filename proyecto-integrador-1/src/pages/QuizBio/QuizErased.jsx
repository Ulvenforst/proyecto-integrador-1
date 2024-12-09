import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

import ProblemModel from "./ProblemModel";

import { ContaminationModel } from "./ContaminationModel";
import { CleanWaterModel } from "./CleanWaterModel";

function QuizEcosystem() {
  const [ecosystemState, setEcosystemState] = useState({
    contamination: false,
    deforestation: false,
    endangeredSpecies: false,
    drought: false,
  });

  // Función para resolver problemas
  const resolveProblem = (problem) => {
    setEcosystemState((prev) => ({
      ...prev,
      [problem]: true,
    }));
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 5, 10], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Luces */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />

      {/* Controles de cámara */}
      <OrbitControls enableZoom={true} />

      {/* Modelos interactivos */}
      <ProblemModel
        modelProblem={<ContaminationModel />}
        modelSolution={<CleanWaterModel />}
        isResolved={ecosystemState.contamination}
        onResolve={() => resolveProblem("contamination")}
      />
      {/* Puedes agregar más modelos aquí 
      <ProblemModel
        modelProblem={<DeforestationModel />}
        modelSolution={<ForestModel />}
        isResolved={ecosystemState.deforestation}
        onResolve={() => resolveProblem("deforestation")}
      />*/}
    </Canvas>
  );
}

export default QuizEcosystem;
