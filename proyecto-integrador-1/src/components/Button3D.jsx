import React, { useMemo, useRef, useState } from "react";
import { RoundedBox, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Button3D({ text, position, function_click }) {
  const buttonRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [hoverOffset] = useState(Math.random() * 0.2 * Math.PI);

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

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Movimiento de levitación (arriba y abajo)
    const yMovement = Math.sin(time + hoverOffset) * 0.1;

    // Movimiento suave de izquierda a derecha
    const xMovement = Math.sin((time + hoverOffset) / 2) * 0.05;

    // Aplica el movimiento a la posición del botón
    buttonRef.current.position.y = position[1] + yMovement;
    buttonRef.current.position.x = position[0] + xMovement;
  });

  return (
    <RoundedBox
      ref={buttonRef}
      args={[boxWidth, boxHeight, 0.3]}
      radius={0.18}
      smoothness={4}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={function_click}
      scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
    >
      <meshStandardMaterial transparent opacity={0.5} color="#ffffff" />
      {lines.map((line, index) => (
        <Text3D
          key={index}
          font="/fonts/blue-ocean.json"
          size={0.6}
          height={0.1}
          position={[
            -(boxWidth / 2) + 0.2,
            (lines.length / 2 - index - 0.5) * 0.8,
            0,
          ]}
        >
          {line}
          <meshStandardMaterial color="#000000" />
        </Text3D>
      ))}
    </RoundedBox>
  );
}

export default Button3D;
