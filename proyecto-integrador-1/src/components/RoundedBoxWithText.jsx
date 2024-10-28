import React, { useMemo } from "react";
import { RoundedBox, Text3D } from "@react-three/drei";

function RoundedBoxWithText({ text, position }) {
  // Dividir el texto en líneas si es necesario
  const maxLineLength = 35; // Longitud máxima de cada línea
  const lines = useMemo(() => {
    const words = text.split(" ");
    const result = [];
    let currentLine = "";

    words.forEach((word) => {
      if ((currentLine + word).length <= maxLineLength) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        result.push(currentLine);
        currentLine = word;
      }
    });

    if (currentLine) result.push(currentLine);
    return result;
  }, [text]);

  // Ajustar el tamaño del recuadro según el número de líneas y longitud del texto
  const boxWidth = Math.max(...lines.map(line => line.length)) * 0.4 + 1;
  const boxHeight = lines.length * 0.8 + 0.5;
  
  return (
    <group position={position}>
      {/* RECUADRO REDONDEADO DINÁMICO */}
      <RoundedBox args={[boxWidth, boxHeight, 0.3]} radius={0.18} smoothness={4}>
        <meshStandardMaterial transparent opacity={0.5} color="#ffffff" />
      </RoundedBox>

      {/* TEXTO EN VARIAS LÍNEAS DENTRO DEL RECUADRO */}
      {lines.map((line, index) => (
        <Text3D
          key={index}
          font="/fonts/blue-ocean.json"
          size={0.5}
          height={0.05}
          position={[-(boxWidth / 2) + 0.2, (lines.length / 2 - index - 0.5) * 0.8, 0]} // Centra el texto en el recuadro
        >
          {line}
          <meshStandardMaterial color="#000000" />
        </Text3D>
      ))}
    </group>
  );
}

export default RoundedBoxWithText;
