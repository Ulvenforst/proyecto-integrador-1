import { useState } from 'react';
import { useThree } from '@react-three/fiber';
import { SpotLight } from 'three';

const ChunkHoverEffect = ({ size = 40 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <mesh
        position={[0, 0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
      >
        <planeGeometry args={[size - 1, size - 1]} />
        <meshBasicMaterial 
          transparent
          opacity={0}
        />
      </mesh>
      
      {hovered && (
        <>
          <pointLight 
            position={[0, 20, 0]} 
            intensity={2} 
            distance={40}
            color="#ffffff"
          />
          <mesh
            position={[0, 0.2, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[size - 1, size - 1]} />
            <meshBasicMaterial 
              transparent
              opacity={0.1}
              color="#ffffff"
            />
          </mesh>
        </>
      )}
    </>
  );
};

export default ChunkHoverEffect;
