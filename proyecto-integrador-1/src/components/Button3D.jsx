import { Text } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Button3D = ({ function_login }) => {
  const buttonRef = useRef();
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      ref={buttonRef}
      position={[0, 2.5, 26]}
      onPointerOver={() => setHovered(true)} // Detecta hover
      onPointerOut={() => setHovered(false)} // Detecta salida del hover
      onClick={function_login} // Acción en click
      scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]} // Aumenta la escala en hover
    >
      <boxGeometry args={[2, 0.5, 1]} /> {/* Tamaño del botón */}
      <meshStandardMaterial color={hovered ? "#ff6347" : "#007bff"} />{" "}
      {/* Cambia el color en hover */}
      {/* Texto 3D encima del botón */}
      <Text
        position={[0, 0, 0.51]} // Posición del texto ligeramente por encima del botón
        fontSize={0.3} // Tamaño de la fuente
        color="#ffffff" // Color del texto
        anchorX="center" // Alinea el texto horizontalmente
        anchorY="middle" // Alinea el texto verticalmente
      >
        Click Me
      </Text>
    </mesh>
  );
};

export default Button3D;
