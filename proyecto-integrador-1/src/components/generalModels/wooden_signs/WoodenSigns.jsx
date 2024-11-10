import { useGLTF, Text, Billboard, Html } from '@react-three/drei';
import { useState, useMemo } from 'react';

const WoodenSigns = ({ 
  signNumber, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1, 
  text = "",
  textConfig = {
    position: [0, 1.2, 0],
    scale: 1,
    color: "#462921",
    fontSize: 0.5,
    maxWidth: 2,
    textAlign: 'center'
  },
  onTextClick = [],
  htmlContent,
  htmlConfig = {
    distanceFactor: 0,
    transform: true,
    center: true
  },
  ...props 
}) => {
  const { nodes, materials } = useGLTF('models/general/wooden_signs/lowpoly_wooden_signs.glb');
  const [hovered, setHovered] = useState(false);

  // Configuración de los letreros incluyendo sus dimensiones y puntos de anclaje
  const SIGN_CONFIG = {
    10: { // Letrero rectangular grande
      width: 5,
      height: 10,
      contentPosition: [0, 1.36, -0.24], // Posición relativa para el contenido
      contentScale: 1,
      contentRotation: [0, -Math.PI/2, 0]
    },
    3: { 
      width: 1.5,
      height: 1,
      textPositions: [
        [0.05, 1.68, 0.2],    // Texto superior
        [0.05, 1.23, 0.3],   // Texto medio
        [0.05, 0.75, 0.15]   // Texto inferior
      ],
      textRotations: [       // Rotación individual para cada texto
        [0, -7*Math.PI/2, 0.12],  // Rotación texto superior
        [0, -7*Math.PI/2, 0],    // Rotación texto medio
        [0, -7*Math.PI/2, -0.2], // Rotación texto inferior
      ],
      textScale: 0.25
    },
  };

  // Configuración automática del contenido HTML basada en el tipo de letrero
  const adjustedHtmlConfig = useMemo(() => {
    const signConfig = SIGN_CONFIG[signNumber] || {
      width: 2,
      height: 1.5,
      contentPosition: [0.16, 5.55, 0],
      contentScale: 0.5,
      contentRotation: [0, 0, 0]
    };
  
    return {
      ...htmlConfig,
      position: signConfig.contentPosition,
      scale: signConfig.contentScale,
      rotation: signConfig.contentRotation,
    };
  }, [signNumber, htmlConfig]);

  const SIGN_MATERIALS = {
    1: {
      Sign1_1: 'Light Wood',
      Sign1_2: 'Dark Wood',
      Sign1_3: 'Herbs'
    },
    2: {
      Sign2_1: 'Rocks',
      Sign2_2: 'Dark Wood',
      Sign2_3: 'Light Wood',
      Sign2_4: 'Herbs'
    },
    3: {
      Sign3_1: 'Dark Wood',
      Sign3_2: 'Light Wood',
      Sign3_3: 'Herbs'
    },
    4: {
      Sign4_1: 'Rocks',
      Sign4_2: 'Dark Wood',
      Sign4_3: 'Light Wood',
      Sign4_4: 'Herbs'
    },
    5: {
      Sign5_1: 'Light Wood',
      Sign5_2: 'Dark Wood',
      Sign5_3: 'Herbs'
    },
    6: {
      Sign6_1: 'Light Wood',
      Sign6_2: 'Dark Wood',
      Sign6_3: 'Herbs'
    },
    7: {
      Sign7_1: 'Light Wood',
      Sign7_2: 'Dark Wood',
      Sign7_3: 'Herbs'
    },
    8: {
      Sign8_1: 'Dark Wood',
      Sign8_2: 'Light Wood',
      Sign8_3: 'Herbs'
    },
    9: {
      Sign9_1: 'Dark Wood',
      Sign9_2: 'Light Wood',
      Sign9_3: 'Rocks',
      Sign9_4: 'Herbs'
    },
    10: {
      Sign10_1: 'Dark Wood',
      Sign10_2: 'Light Wood',
      Sign10_3: 'Rocks',
      Sign10_4: 'Herbs'
    },
    11: {
      Sign11_1: 'Herbs',
      Sign11_2: 'Light Wood',
      Sign11_3: 'Dark Wood',
      Sign11_4: 'Rocks'
    },
    12: {
      Sign12_1: 'Dark Wood',
      Sign12_2: 'Light Wood',
      Sign12_3: 'Herbs',
      Sign12_4: 'Rocks'
    },
    13: {
      Sign13_1: 'Rocks',
      Sign13_2: 'Dark Wood',
      Sign13_3: 'Light Wood',
      Sign13_4: 'Herbs'
    }
  };


  if (!signNumber || !SIGN_MATERIALS[signNumber]) {
    console.warn(`No se encontró el letrero número ${signNumber}`);
    return null;
  }

  const materialMapping = SIGN_MATERIALS[signNumber];

  return (
    <group 
      {...props} 
      dispose={null} 
      position={position} 
      rotation={rotation} 
      scale={scale}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Letrero base */}
      {Object.entries(materialMapping).map(([nodeName, materialName]) => {
        const geometry = nodes[nodeName]?.geometry;
        if (!geometry) return null;

        return (
          <mesh
            key={nodeName}
            castShadow
            receiveShadow
            geometry={geometry}
            material={materials[materialName]}
          />
        );
      })}

      {Array.isArray(text) && SIGN_CONFIG[signNumber]?.textPositions && text.map((textItem, index) => (
        <Text
          key={index}
          position={SIGN_CONFIG[signNumber].textPositions[index]}
          rotation={SIGN_CONFIG[signNumber].textRotations[index]}
          scale={SIGN_CONFIG[signNumber].textScale}
          color={hovered ? "#654321" : textConfig.color}
          fontSize={textConfig.fontSize}
          maxWidth={textConfig.maxWidth}
          textAlign="left"
          anchorX="left"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#ffffff"
          onClick={(e) => {
            e.stopPropagation();
            if (onTextClick[index]) onTextClick[index]();
          }}
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
          {textItem}
        </Text>
      ))}
      
      
      {/* HTML Content */}
      {htmlContent && (
        <group
          position={adjustedHtmlConfig.position}
          rotation={adjustedHtmlConfig.rotation}
        >
          <Html
            center
            distanceFactor={adjustedHtmlConfig.distanceFactor}
            transform
            occlude
            wrapperClass="sign-content"
            scale={adjustedHtmlConfig.scale}
            style={{
              transition: 'all 0.2s',
              opacity: hovered ? 1 : 0.8,
              transform: `translate3d(0,0,${SIGN_CONFIG[signNumber]?.contentOffset || 0}px)`,
            }}
          >
            <div 
              style={{ 
                padding: '10px',
                // background: 'rgba(0,0,0,0.8)',
                borderRadius: '8px',
                color: 'white',
                transformOrigin: 'center',
                width: 'max-content',
                transition: 'opacity 0.3s',
                maxWidth: `${SIGN_CONFIG[signNumber]?.width * 100 || 200}px`,
                // Centrado adicional
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {htmlContent}
            </div>
          </Html>
        </group>
      )}
    </group>
  );
}

export default WoodenSigns;

useGLTF.preload('models/general/wooden_signs/lowpoly_wooden_signs.glb');
