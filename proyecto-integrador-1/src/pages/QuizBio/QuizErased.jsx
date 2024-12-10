import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

import ProblemModel from "./ProblemModel";

//modelos
//Q1
import { ContaminationModel } from "./modelsQuizBio/question1/ContaminationModel";
import { CleanWaterModel } from "./modelsQuizBio/question1/CleanWaterModel";

//Q2
import DeforestationModel from "./modelsQuizBio/question2/DeforestationModel";
import ForestModel from "./modelsQuizBio/question2/ForestModel";

//Q3
import EmptyHabitatModel from "./modelsQuizBio/question3/EmptyHabitatModel";
import PopulatedHabitatModel from "./modelsQuizBio/question3/PopulatedHabitatModel";

function QuizEcosystem({ positions = [0, 0, 0] }) {
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
    <>
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
        position={[10 + positions[0], 0 + positions[1], 10 + positions[2]]}
      />

      <ProblemModel
        modelProblem={<DeforestationModel />}
        modelSolution={<ForestModel />}
        isResolved={ecosystemState.deforestation}
        onResolve={() => resolveProblem("deforestation")}
        position={[-20 + positions[0], 0 + positions[1], 10 + positions[2]]}
      />

      <ProblemModel
        modelProblem={<EmptyHabitatModel />}
        modelSolution={<PopulatedHabitatModel />}
        isResolved={ecosystemState.endangeredSpecies}
        onResolve={() => resolveProblem("endangeredSpecies")}
        position={[10 + positions[0], 0 + positions[1], -20 + positions[2]]}
      />
    </>
  );
}

export default QuizEcosystem;
