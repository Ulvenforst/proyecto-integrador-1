import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
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

export default function Quiz() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [hasAnsweredMultipleChoice, setHasAnsweredMultipleChoice] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const [cameraPosition, setCameraPosition] = useState(positions[0]);
  const [cameraTarget, setCameraTarget] = useState([centerX, 0, centerZ]);

  // Cargar estado guardado al iniciar
  useEffect(() => {
    const loadQuizState = async () => {
      if (!user) return;
      
      try {
        const quizRef = doc(db, "quizzes", user.uid);
        const quizDoc = await getDoc(quizRef);
        
        if (quizDoc.exists()) {
          const data = quizDoc.data();
          if (data) {
            setCurrentQuestion(data.currentQuestion || 0);
            setScore(data.score || 0);
            setClickCount(data.clickCount || 0);
            setHasAnsweredMultipleChoice(data.hasAnsweredMultipleChoice || false);
            setAnsweredCorrectly(data.answeredCorrectly || false);
            if (data.terrainMap) {
              setTerrainMap(JSON.parse(data.terrainMap));
            }
            setCameraPosition(positions[data.currentQuestion || 0]);
            setCameraTarget([centerX, 0, centerZ]);
          }
        }
      } catch (error) {
        console.error("Error loading quiz state:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuizState();
  }, [user]);

  // Guardar estado cuando cambia algo importante
  useEffect(() => {
    const saveQuizState = async () => {
      if (!user || isLoading) return;

      try {
        const quizRef = doc(db, "quizzes", user.uid);
        await setDoc(quizRef, {
          currentQuestion,
          score,
          clickCount,
          hasAnsweredMultipleChoice,
          answeredCorrectly,
          terrainMap: JSON.stringify(terrainMap),
          lastUpdated: new Date().toISOString()
        }, { merge: true });
      } catch (error) {
        console.error("Error saving quiz state:", error);
      }
    };

    saveQuizState();
  }, [currentQuestion, score, clickCount, hasAnsweredMultipleChoice, answeredCorrectly, terrainMap, user, isLoading]);

  const multipleChoiceQuestion = {
    question: "¿Cuál es la mejor manera de combatir la deforestación de manera activa?",
    options: [
      "Crear leyes más estrictas",
      "Plantar nuevos árboles",
      "Reducir el consumo de papel",
      "Crear áreas protegidas"
    ],
    correctAnswer: 1,
    explanation: "La plantación de nuevos árboles es una acción directa y efectiva para combatir la deforestación. Aunque todas las opciones son importantes, la reforestación activa es crucial para restaurar áreas degradadas."
  };

  const questions = [
    {
      question: hasAnsweredMultipleChoice 
        ? answeredCorrectly 
          ? "¡Correcto! Ahora ayuda a reforestar el área deforestada. Haz click 5 veces en las zonas deforestadas para plantar árboles."
          : `Respuesta incorrecta. La respuesta correcta era: "${multipleChoiceQuestion.options[multipleChoiceQuestion.correctAnswer]}". ${multipleChoiceQuestion.explanation} No podrás participar en la actividad de reforestación.`
        : multipleChoiceQuestion.question,
      position: positions[0],
      target: [centerX, 0, centerZ]
    },
    {
      question: "¿Cuántos años tarda en promedio un árbol en alcanzar su madurez?",
      position: positions[1],
      target: [centerX, 0, centerZ]
    },
    {
      question: "¿Cuántos árboles se necesitan plantar para compensar la huella de carbono de una persona por año?",
      position: positions[2],
      target: [centerX, 0, centerZ]
    }
  ];

  const handleMultipleChoiceAnswer = (selectedIndex) => {
    setHasAnsweredMultipleChoice(true);
    if (selectedIndex === multipleChoiceQuestion.correctAnswer) {
      setAnsweredCorrectly(true);
      setScore(prevScore => prevScore + 5);
    } else {
      setAnsweredCorrectly(false);
    }
  };

  useEffect(() => {
    const handleClick = () => {
      if (currentQuestion === 0 && answeredCorrectly && clickCount < 5) {
        setClickCount(prevCount => prevCount + 1);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [clickCount, currentQuestion, answeredCorrectly]);

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

  const handleResetQuiz = async () => {
    try {
      const initialState = {
        currentQuestion: 0,
        score: 0,
        clickCount: 0,
        hasAnsweredMultipleChoice: false,
        answeredCorrectly: false,
        terrainMap: [
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [2, 2, 1, 1],
          [2, 2, 1, 1],
        ]
      };

      // Actualizar estado local
      setCurrentQuestion(initialState.currentQuestion);
      setScore(initialState.score);
      setClickCount(initialState.clickCount);
      setHasAnsweredMultipleChoice(initialState.hasAnsweredMultipleChoice);
      setAnsweredCorrectly(initialState.answeredCorrectly);
      setTerrainMap(initialState.terrainMap);
      setCameraPosition(positions[0]);
      setCameraTarget([centerX, 0, centerZ]);

      // Actualizar en Firebase
      if (user) {
        const quizRef = doc(db, "quizzes", user.uid);
        await updateDoc(quizRef, {
          ...initialState,
          terrainMap: JSON.stringify(initialState.terrainMap),
          lastUpdated: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error("Error resetting quiz:", error);
    }
  };

  const returnToDeforestation = () => {
    navigate("/deforestation");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-cyan-200">
        <div className="text-2xl text-white">Cargando...</div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-6 left-6 z-10 max-w-md bg-black/50 backdrop-blur-sm text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Pregunta {currentQuestion + 1}</h1>
        <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
        
        {currentQuestion === 0 && !hasAnsweredMultipleChoice && (
          <div className="space-y-2">
            {multipleChoiceQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleMultipleChoiceAnswer(index)}
                className="w-full text-left p-2 hover:bg-green-600 bg-green-500 rounded transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {currentQuestion === 0 && hasAnsweredMultipleChoice && (
          <div className={`p-4 rounded-lg mb-4 ${answeredCorrectly ? 'bg-green-500/50' : 'bg-red-500/50'}`}>
            {answeredCorrectly ? (
              <>
                <p className="text-md mb-4">Clicks realizados: {clickCount}/5</p>
                {clickCount === 5 && (
                  <p className="text-lg font-bold text-green-300">¡Excelente trabajo! Has completado la reforestación.</p>
                )}
              </>
            ) : (
              <div className="space-y-2">
                <p className="font-bold text-red-300">Respuesta Incorrecta</p>
                <p className="text-sm opacity-80">No podrás participar en la actividad de reforestación.</p>
                <button
                  onClick={handleNextQuestion}
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all
                    transform hover:scale-105 duration-200 w-full"
                >
                  Siguiente pregunta
                </button>
              </div>
            )}
          </div>
        )}

        {currentQuestion === 0 && hasAnsweredMultipleChoice && answeredCorrectly && clickCount === 5 && (
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

      <button
        onClick={handleResetQuiz}
        className="absolute top-20 right-6 z-10 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition-all
          transform hover:scale-105 duration-200"
      >
        Reiniciar Quiz
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
