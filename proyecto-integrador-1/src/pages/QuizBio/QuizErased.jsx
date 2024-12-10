import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import ProblemModel from "./ProblemModel";

// Modelos
import { ContaminationModel } from "./modelsQuizBio/question1/ContaminationModel";
import { CleanWaterModel } from "./modelsQuizBio/question1/CleanWaterModel";
import DeforestationModel from "./modelsQuizBio/question2/DeforestationModel";
import ForestModel from "./modelsQuizBio/question2/ForestModel";
import EmptyHabitatModel from "./modelsQuizBio/question3/EmptyHabitatModel";
import PopulatedHabitatModel from "./modelsQuizBio/question3/PopulatedHabitatModel";

function QuizEcosystem({
  positions = [0, 0, 0],
  setScore,
  ecosystemState,
  setEcosystemState,
  currentBioQuestion,
  setCurrentBioQuestion,
  bioCorrectAnswer,
  setBioCorrectAnswer,
  currentQuestion,
}) {
  const questionsBio = [
    // Pregunta 1...
    {
      title: "contamination",
    },
    {
      title: "endangeredSpecies",
    },
    {
      title: "deforestation",
    },
  ];

  // Función para resolver problemas
  const resolveProblem = (problem) => {
    setEcosystemState((prev) => {
      if (!prev[problem]) {
        // Solo sumar 10 si el problema es "contaminatio"
        if (problem === questionsBio[currentBioQuestion].title) {
          setScore((prevScore) => prevScore + 10);
          // Actualizar bioCorrectAnswer
          setBioCorrectAnswer((prevBioCorrectAnswer) => ({
            ...prevBioCorrectAnswer,
            [problem]: true, // Hacer verdadero el correspondiente
          }));
        }
        setCurrentBioQuestion((prevScore) => prevScore + 1);
      }
      return {
        ...prev,
        [problem]: true,
      };
    });
  };

  return (
    <>
      {/* Luces */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />
      {/* Controles de cámara */}
      {currentQuestion === 1 ? (
        <OrbitControls
          maxPolarAngle={Math.PI * 0.49}
          minPolarAngle={Math.PI * 0.1}
          maxAzimuthAngle={-Math.PI * 0.6}
          minAzimuthAngle={-Math.PI * 1}
          target={[0, 0, -0]}
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          minDistance={3.5}
          maxDistance={80}
          rotateSpeed={0.05}
        />
      ) : null}
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
