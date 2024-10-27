import { Text } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Button3D = ({ function_login }) => {
  const buttonRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [hoverOffset] = useState(Math.random() * 0.2 * Math.PI);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Movimiento de levitación (arriba y abajo)
    const yMovement = Math.sin(time + hoverOffset) * 0.1;

    // Movimiento suave de izquierda a derecha
    const xMovement = Math.sin((time + hoverOffset) / 2) * 0.05;

    // Aplica el movimiento a la posición del botón
    buttonRef.current.position.y = 2.5 + yMovement;
    buttonRef.current.position.x = xMovement;
  });

  return (
    <mesh
      ref={buttonRef}
      position={[0, 2.5, 0]}
      onPointerOver={() => setHovered(true)} // Detecta hover
      onPointerOut={() => setHovered(false)} // Detecta salida del hover
      onClick={function_login} // Acción en click
      scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]} // Aumenta la escala en hover
    >
      <boxGeometry args={[4, 0.5, 1]} />
      <meshStandardMaterial color={hovered ? "#ff6347" : "#007bff"} />
      <Text
        position={[0, 0, 0.51]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        LOG IN WITH GOOGLE
      </Text>
    </mesh>
  );
};

export default Button3D;
