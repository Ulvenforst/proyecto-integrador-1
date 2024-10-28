import React, { useMemo, useState, useCallback } from "react";
import { RoundedBox, Text3D } from "@react-three/drei";

function TextGeneral3D({
  text = "",
  position = [0, -1, 0],
  onClick = null, // Valor por defecto
}) {
  // Dividir el texto en líneas si es necesario
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

  // Ajustar el tamaño del recuadro según el número de líneas y longitud del texto
  const boxWidth = Math.max(...lines.map((line) => line.length)) * 0.4 + 1;
  const boxHeight = lines.length * 0.8 + 0.5;

  // Estados de hover y click
  const [hovered, setHovered] = useState(false);

  // Manejadores de eventos de hover y click
  const handlePointerOver = useCallback(() => {
    if (
      typeof onClick === "function" &&
      onClick.toString() !== "function() { console.log('Texto clicado!'); }"
    ) {
      setHovered(true);
    }
  }, [onClick]);

  const handlePointerOut = useCallback(() => setHovered(false), []);

  const handleClick = useCallback(() => {
    if (typeof onClick === "function") onClick();
  }, [onClick]);

  return (
    <group position={position}>
      <RoundedBox
        args={[boxWidth, boxHeight, 0.2]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        rotation={[-(Math.PI / 6), 0, 0]}
      >
        <meshStandardMaterial color={hovered ? "#cccccc" : "#ffffff"} />
      </RoundedBox>
      {lines.map((line, index) => (
        <Text3D
          key={index}
          font="/fonts/blue-ocean.json"
          size={0.5}
          height={0.05}
          position={[
            -(boxWidth / 2) + 0.2,
            (lines.length / 2 - index - 0.5) * 0.8,
            0.1,
          ]}
          rotation={[-(Math.PI / 6), 0, 0]}
          scale={hovered && typeof onClick === "function" ? 1.5 : 1} // Escalar el texto en hover solo si onClick es una función
        >
          {line}
          <meshStandardMaterial
            color="#000000"
            emissive="#ffff99" // Color de "brillo"
            emissiveIntensity={hovered && typeof onClick === "function" ? 1 : 0} // Intensidad de brillo en hover
          />
        </Text3D>
      ))}
    </group>
  );
}

export default TextGeneral3D;
