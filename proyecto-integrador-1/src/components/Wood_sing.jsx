import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Wood_sing(props) {
  const { nodes, materials } = useGLTF('/wood-sing.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign10_1.geometry}
        material={materials['Dark Wood']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign10_2.geometry}
        material={materials['Light Wood']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sign10_3.geometry}
        material={materials.Rocks}
      />
    </group>
  )
}

useGLTF.preload('/wood-sing.glb')