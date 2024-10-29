import React, { useMemo, useState, useCallback } from "react";
import { RoundedBox, Text3D } from "@react-three/drei";

function TextGeneral3D({
  text = "",
  position = [0, -1, 0],
  onClick = () => console.log(click),
}) {
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

  const boxWidth = Math.max(...lines.map((line) => line.length)) * 0.4 + 1;
  const boxHeight = lines.length * 0.8 + 0.5;

  const [hovered, setHovered] = useState(false);

  const handlePointerOver = useCallback(() => setHovered(true), []);

  const handlePointerOut = useCallback(() => setHovered(false), []);

  const handleClick = useCallback(() => {
    if (typeof onClick === "function") onClick();
  }, [onClick]);

  return (
    <group position={position}>
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
          scale={hovered && typeof onClick === "function" ? 1.5 : 1}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          {line}
          <meshStandardMaterial
            color="#000000"
            emissive="#ffff99"
            emissiveIntensity={hovered && typeof onClick === "function" ? 1 : 0}
          />
        </Text3D>
      ))}
    </group>
  );
}

export default TextGeneral3D;
