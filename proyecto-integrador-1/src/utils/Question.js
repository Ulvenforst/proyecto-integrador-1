const multipleChoiceQuestion = {
  question:
    "¿Cuál es la mejor manera de combatir la deforestación de manera activa?",
  options: [
    "Crear leyes más estrictas",
    "Plantar nuevos árboles",
    "Reducir el consumo de papel",
    "Crear áreas protegidas",
  ],
  correctAnswer: 1,
  explanation:
    "La plantación de nuevos árboles es una acción directa y efectiva para combatir la deforestación. Aunque todas las opciones son importantes, la reforestación activa es crucial para restaurar áreas degradadas.",
};

const questions = [
  {
    question: hasAnsweredMultipleChoice
      ? answeredCorrectly
        ? "¡Correcto! Ahora ayuda a reforestar el área deforestada. Haz click 5 veces en las zonas deforestadas para plantar árboles."
        : `Respuesta incorrecta. La respuesta correcta era: "${multipleChoiceQuestion.options[multipleChoiceQuestion.correctAnswer]}". ${multipleChoiceQuestion.explanation} No podrás participar en la actividad de reforestación.`
      : multipleChoiceQuestion.question,
    position: positions[0],
    target: [centerX, 0, centerZ],
  },
  {
    question:
      "¿Cuántos años tarda en promedio un árbol en alcanzar su madurez?",
    position: positions[1],
    target: [centerX, 0, centerZ],
  },
  {
    question:
      "¿Cuántos árboles se necesitan plantar para compensar la huella de carbono de una persona por año?",
    position: positions[2],
    target: [centerX, 0, centerZ],
  },
];

export { multipleChoiceQuestion, questions };
