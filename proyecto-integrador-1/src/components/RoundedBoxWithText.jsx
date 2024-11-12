import React, { useMemo, useRef, useState } from "react";
import { RoundedBox, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function RoundedBoxWithText({ text, position, rotation }) {
  const maxLineLength = 35;
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

  const boxWidth = Math.max(...lines.map((line) => line.length)) * 0.4;
  const boxHeight = lines.length * 0.8 + 0.5;

  return (
    <RoundedBox
      args={[boxWidth, boxHeight, 0.3]}
      radius={0.18}
      smoothness={4}
      position={position}
      rotation={rotation} // Rotación en el eje Y
    >
      <meshStandardMaterial transparent opacity={0.7} color="#ffffff" />
      {lines.map((line, index) => (
        <Text3D
          key={index}
          font="/fonts/blue-ocean.json"
          size={0.6}
          height={0.1}
          position={[
            -(boxWidth / 2) + 0.2,
            (lines.length / 2 - index - 0.5) * 0.8,
            0.06,
          ]}
        >
          {line}
          <meshStandardMaterial color="#000000" />
        </Text3D>
      ))}
    </RoundedBox>
  );
}

export default RoundedBoxWithText;
