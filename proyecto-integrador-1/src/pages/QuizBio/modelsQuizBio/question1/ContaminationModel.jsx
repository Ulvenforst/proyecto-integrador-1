import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ContaminationModel(props) {
  const { nodes, materials } = useGLTF(
    "models/quizBiodiversity/ContaminationModel.glb",
  );
  return (
    <group {...props} dispose={null}>
      <group
        position={[-2.541, 1.399, -7.679]}
        rotation={[0, -1.415, 0]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={materials.Blue_New}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_1.geometry}
          material={materials.Oil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_2.geometry}
          material={materials.Stopper_New}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость.geometry}
        material={materials["Material.008"]}
        position={[-5.482, 0.285, 3.838]}
        scale={0.174}
      />
      <group
        position={[-1.845, 1.399, -11.077]}
        rotation={[0, -1.415, 0]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Blue_New.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Oil.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Stopper_New.001"]}
        />
      </group>
      <group
        position={[-6.716, 1.399, -8.948]}
        rotation={[0, -1.415, 0]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["Blue_New.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["Oil.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials["Stopper_New.002"]}
        />
      </group>
      <group
        position={[-5.362, 0.988, -6.054]}
        rotation={[1.562, -1.415, 0]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["Blue_New.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["Oil.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["Stopper_New.003"]}
        />
      </group>
      <group
        position={[6.762, 1.399, -6.793]}
        rotation={[Math.PI, -1.409, Math.PI]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["Blue_New.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials["Oil.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials["Stopper_New.004"]}
        />
      </group>
      <group
        position={[3.574, 0.988, -6.131]}
        rotation={[2.674, -1.219, 1.137]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials["Blue_New.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials["Oil.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_2.geometry}
          material={materials["Stopper_New.005"]}
        />
      </group>
      <group
        position={[8.485, 1.399, -9.803]}
        rotation={[Math.PI, -1.409, Math.PI]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials["Blue_New.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials["Oil.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_2.geometry}
          material={materials["Stopper_New.007"]}
        />
      </group>
      <group
        position={[4.771, 0.988, -10.183]}
        rotation={[0.189, -0.597, -1.455]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials["Blue_New.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials["Oil.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_2.geometry}
          material={materials["Stopper_New.008"]}
        />
      </group>
      <group
        position={[-2.156, 1.399, 1.304]}
        rotation={[Math.PI, -1.409, Math.PI]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials["Blue_New.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials["Oil.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_2.geometry}
          material={materials["Stopper_New.009"]}
        />
      </group>
      <group
        position={[-3.03, 0.988, 4.655]}
        rotation={[0.189, -0.597, -1.455]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials["Blue_New.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials["Oil.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_2.geometry}
          material={materials["Stopper_New.010"]}
        />
      </group>
      <group
        position={[-7.067, 0.988, 4.976]}
        rotation={[2.674, -1.219, 1.137]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials["Blue_New.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials["Oil.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_2.geometry}
          material={materials["Stopper_New.011"]}
        />
      </group>
      <group
        position={[-6.744, 1.399, 0.593]}
        rotation={[Math.PI, -1.409, Math.PI]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials["Blue_New.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials["Oil.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_2.geometry}
          material={materials["Stopper_New.012"]}
        />
      </group>
      <group
        position={[8.104, 0.988, 1.217]}
        rotation={[0.189, -0.597, -1.455]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials["Blue_New.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials["Oil.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_2.geometry}
          material={materials["Stopper_New.013"]}
        />
      </group>
      <group
        position={[8.979, 1.399, -2.133]}
        rotation={[Math.PI, -1.409, Math.PI]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials["Blue_New.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials["Oil.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_2.geometry}
          material={materials["Stopper_New.014"]}
        />
      </group>
      <group
        position={[4.463, 0.988, 2.238]}
        rotation={[0.189, -0.597, -1.455]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials["Blue_New.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials["Oil.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_2.geometry}
          material={materials["Stopper_New.015"]}
        />
      </group>
      <group
        position={[3.266, 0.988, 6.29]}
        rotation={[2.674, -1.219, 1.137]}
        scale={[0.909, 1.365, 0.909]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials["Blue_New.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials["Oil.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_2.geometry}
          material={materials["Stopper_New.016"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость001.geometry}
        material={materials["Material.010"]}
        position={[2.712, 0.557, 7.865]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость002.geometry}
        material={materials["Material.011"]}
        position={[5.473, 0.557, 3.158]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость003.geometry}
        material={materials["Material.012"]}
        position={[9.068, 0.557, 2.405]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость004.geometry}
        material={materials["Material.013"]}
        position={[-1.84, 0.557, 5.781]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость005.geometry}
        material={materials["Material.014"]}
        position={[-7.032, 0.557, 0.86]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость006.geometry}
        material={materials["Material.015"]}
        position={[-2.435, 0.211, 1.51]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость007.geometry}
        material={materials["Material.016"]}
        position={[-7.915, 0.458, 6.018]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость008.geometry}
        material={materials["Material.017"]}
        position={[2.838, 0.607, -4.589]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.012}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость009.geometry}
        material={materials["Material.018"]}
        position={[6.138, 0.38, -8.967]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость010.geometry}
        material={materials["Material.019"]}
        position={[-5.834, 0.248, -5.016]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость011.geometry}
        material={materials["Material.020"]}
        position={[-2.768, 0.352, -7.76]}
        rotation={[-0.133, 0.184, 0.171]}
        scale={0.017}
      />
      <group position={[0.26, 0.292, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.main}
          rotation={[0, -0.387, -0.145]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Material.022"]}
        />
      </group>
      <group position={[-0.191, -0.584, 6.535]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.26, 0.292, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4001.geometry}
              material={materials["main.001"]}
              position={[8.023, 0, 0.123]}
              rotation={[0, 0.964, -0.145]}
            />
          </group>
        </group>
      </group>
      <group position={[-0.682, 0.245, -8.171]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.26, 0.292, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4002.geometry}
              material={materials["main.002"]}
              position={[8.924, 0, -3.152]}
              rotation={[Math.PI, 0.548, 2.997]}
            />
          </group>
        </group>
      </group>
      <group position={[-1.15, -0.374, -3.13]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.26, 0.292, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4003.geometry}
              material={materials["main.003"]}
              position={[-7, 0, 1.637]}
              rotation={[0, -1.143, -0.145]}
            />
          </group>
        </group>
      </group>
      <group position={[3.302, 1.846, -1.444]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.26, 0.292, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4004.geometry}
              material={materials["main.004"]}
              position={[3.848, 0, -1.842]}
              rotation={[0, 0, -0.145]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-3.903, -1.203, -11.512]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.26, 0.292, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4005.geometry}
              material={materials["main.005"]}
              position={[-4.421, 0, 0.123]}
              rotation={[0, -1.56, -0.145]}
            />
          </group>
        </group>
      </group>
      <group position={[-6.673, 0, 6.918]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.26, 0.292, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4006.geometry}
              material={materials["main.006"]}
              rotation={[0, 0.188, -0.145]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ContaminationModel.glb");
