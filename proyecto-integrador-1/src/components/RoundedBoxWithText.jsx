import React from "react";
import { Box, Text3D } from "@react-three/drei";

function RoundedBoxWithText({ text }) {
  return (
    <group position={[0, 5, 0]}>
      <Box args={[4, 1.5, 0.3]} radius={0.2} smoothness={4}>
        <meshStandardMaterial transparent opacity={0.7} color="#ffffff" />
      </Box>
      <Text3D
        font="/fonts/blue-ocean.json"
        size={0.6}
        height={0.05}
        position={[-1.8, -0.3, 0.06]}
      >
        {text}
        <meshStandardMaterial color="#000000" />
      </Text3D>
    </group>
  );
}

export default RoundedBoxWithText;
