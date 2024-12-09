import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Sphere } from '@react-three/drei';

const GasSphere = ({ position, color }) => {
  const rigidBody = useRef();

  useFrame(() => {
    if (rigidBody.current) {
      rigidBody.current.applyImpulse({ x: 0, y: 0.01 * Math.random(), z: 0 });
      rigidBody.current.applyImpulse({
        x: (Math.random() - 0.5) * 0.005,
        y: 0,
        z: (Math.random() - 0.5) * 0.005
      });
    }
  });

  return (
    <RigidBody
      ref={rigidBody}
      colliders="ball"
      mass={0.1}
      linearDamping={2}
      angularDamping={0.5}
      position={position}
    >
      <Sphere args={[0.3]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </RigidBody>
  );
};

const GreenhouseGases = ({ count = 15 }) => {
  const colors = [
    '#FF8C42', // CO2 - naranja
    '#4D4DFF', // Metano - azul
    '#9D4EDD', // Óxido nitroso - púrpura
  ];

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <GasSphere
          key={i}
          position={[
            (Math.random() - 0.5) * 40, // Distribuir alrededor de la granja
            2 + Math.random() * 5,     // Altura inicial
            (Math.random() - 0.5) * 40  // Distribuir alrededor de la granja
          ]}
          color={colors[i % colors.length]}
        />
      ))}
    </group>
  );
};

export default GreenhouseGases;
