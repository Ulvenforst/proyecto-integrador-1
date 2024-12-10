import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function PopulatedHabitatModel(props) {
  const { nodes, materials } = useGLTF('models/quizBiodiversity/PopulatedHabitatModel.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.378, 0, -6.109]} rotation={[Math.PI / 2, 0, 0]} scale={0.479}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_1.geometry}
          material={materials['Material.008']}
        />
      </group>
      <group position={[2.902, 0, 0.801]} rotation={[Math.PI / 2, 0, 0]} scale={0.473}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials['Material.035']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_1.geometry}
          material={materials['Material.036']}
        />
      </group>
      <group position={[-8.829, 0, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={0.479}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037_1.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group position={[6.821, 0, -9.143]} rotation={[Math.PI / 2, 0, 0]} scale={0.479}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials['Material.016']}
        />
      </group>
      <group position={[-6.136, 0, -12.282]} rotation={[Math.PI / 2, 0, 0]} scale={0.479}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_1.geometry}
          material={materials['Material.020']}
        />
      </group>
      <group position={[-9.417, 0, -7.93]} rotation={[Math.PI / 2, 0, 0]} scale={0.479}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials['Material.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043_1.geometry}
          material={materials['Material.024']}
        />
      </group>
      <group position={[-7.941, 0, 4.579]} rotation={[Math.PI / 2, 0, 0]} scale={0.479}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials['Material.025']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_1.geometry}
          material={materials['Material.026']}
        />
      </group>
      <group position={[-0.489, 0, 8.313]} rotation={[Math.PI / 2, 0, 0]} scale={0.479}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_1.geometry}
          material={materials['Material.030']}
        />
      </group>
      <group position={[9.894, 0, 1.604]} rotation={[Math.PI / 2, 0, 0]} scale={0.479}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials['Material.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047_1.geometry}
          material={materials['Material.032']}
        />
      </group>
      <group position={[0.618, 0, -1.448]} rotation={[Math.PI / 2, 0, 0]} scale={0.473}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials['Material.037']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_1.geometry}
          material={materials['Material.038']}
        />
      </group>
      <group position={[-6.836, 0.005, 1.479]} rotation={[Math.PI / 2, 0, 0]} scale={0.473}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials['Material.039']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050_1.geometry}
          material={materials['Material.040']}
        />
      </group>
      <group position={[-4.169, 0, -0.012]} rotation={[Math.PI / 2, 0, 0]} scale={0.473}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials['Material.041']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051_1.geometry}
          material={materials['Material.042']}
        />
      </group>
      <group position={[8.609, 0, -5.594]} rotation={[Math.PI / 2, 0, 0]} scale={0.473}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials['Material.043']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_1.geometry}
          material={materials['Material.044']}
        />
      </group>
      <group position={[0.795, 0, 4.827]} rotation={[Math.PI / 2, 0, 0]} scale={0.473}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials['Material.045']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053_1.geometry}
          material={materials['Material.046']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01foxFinal'].geometry}
        material={materials['Material.092']}
        position={[3.72, -0.039, -1.449]}
        rotation={[0, -1.087, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02catFinal'].geometry}
        material={materials['Material.093']}
        position={[-2.243, -0.058, 4.476]}
        rotation={[0, 1.167, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['03duckFinal'].geometry}
        material={materials['Material.118']}
        position={[7.746, -0.07, -1.003]}
        rotation={[0, -0.381, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04bizonFinal'].geometry}
        material={materials['Material.119']}
        position={[-3.299, -0.07, -7.69]}
        rotation={[0, 1.088, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['05deerFinal'].geometry}
        material={materials['Material.120']}
        position={[-0.18, -0.076, -2.923]}
        rotation={[0, 0.314, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['06penguinFinal'].geometry}
        material={materials['Material.121']}
        position={[-4.736, -0.061, 1.544]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['07sharkFinal'].geometry}
        material={materials['Material.090']}
        position={[-3.708, 0.542, 1.611]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['08bearFinal'].geometry}
        material={materials['Material.123']}
        position={[7.566, -0.05, -3.965]}
        rotation={[0, -0.987, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['11frogFinal'].geometry}
        material={materials['Material.127']}
        position={[0.662, -0.058, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['12dogFinal'].geometry}
        material={materials['Material.129']}
        position={[4.004, -0.051, -4.698]}
        rotation={[0, -0.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['13cowFinal'].geometry}
        material={materials['Material.130']}
        position={[-8.536, -0.06, -4.018]}
        rotation={[-Math.PI, 1.528, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['14dogFinal'].geometry}
        material={materials['Material.131']}
        position={[1.75, -0.053, 4.127]}
        rotation={[Math.PI, -1.122, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['15lizardFinal'].geometry}
        material={materials['Material.132']}
        position={[0.825, -0.056, 1.562]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['10sheepFinal'].geometry}
        material={materials['Material.088']}
        position={[5.739, -0.063, -6.363]}
        rotation={[0, -1.161, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['17horseFinal'].geometry}
        material={materials['Material.089']}
        position={[4.437, -0.052, 4.311]}
        rotation={[0, -0.949, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['24birdFinal'].geometry}
        material={materials['Material.091']}
        position={[-1.473, 2.351, -0.981]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['22smolchikenFinal'].geometry}
        material={materials['Material.126']}
        position={[-0.612, -0.062, -0.817]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['21chikenFinal'].geometry}
        material={materials['Material.128']}
        position={[1.461, -0.064, 0.597]}
        rotation={[0, -0.361, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['19dogFinal'].geometry}
        material={materials['Material.133']}
        position={[5.14, -0.055, 0.768]}
        rotation={[0, 1.064, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['20dogFinal'].geometry}
        material={materials['Material.134']}
        position={[-5.078, -0.04, -5.601]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['25dogFinal'].geometry}
        material={materials['Material.135']}
        position={[7.018, -0.024, 5.48]}
        rotation={[0, -1.408, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['18girafFinal'].geometry}
        material={materials['Material.136']}
        position={[-6.497, -0.035, 3.226]}
        rotation={[0, 1.55, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['23smolbirdFinal'].geometry}
        material={materials['Material.124']}
        position={[1.313, 2.529, -2.93]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['09deerFinal'].geometry}
        material={materials['Material.138']}
        position={[-3.465, -0.089, -4.262]}
        rotation={[0, 0.82, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16rabbitFinal'].geometry}
        material={materials['Material.137']}
        position={[-0.463, -0.053, 0.464]}
      />
    </group>
  )
}

useGLTF.preload('/PopulatedHabitatModel.glb')