// Import libraries
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

// Firebase setup
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Contexts and hooks
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CloudsBlock from "../components/generalModels/clouds/CloudsBlock";
import GenericLight from "../components/lights/GenericLight";
import Terrain from "../components/terrain/Terrain";
import LoginLight from "../components/lights/LoginLight";
import Button3D from "../components/Button3D";

//3D
import { BakeShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUser, setUserDocData } = useAuth();

  // Toast notification configuration using SweetAlert2
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-right",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  // Function to handle successful login
  async function successLogin(loggedInUser) {
    setUser(loggedInUser);

    const userRef = doc(getFirestore(), "users", loggedInUser.uid);
    const docSnapshot = await getDoc(userRef);

    if (docSnapshot.exists()) {
      setUserDocData({ id: userRef.id, ...docSnapshot.data() });
    }
    navigate("/home");
  }

  // Function to handle google login
  const handleGoogleSignIn = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, googleProvider);
      const user = credentials.user;
      await successLogin(user);

      const userRef = doc(getFirestore(), "users", user.uid);
      const docSnapshot = await getDoc(userRef);

      if (!docSnapshot.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
    }
  };

  // Check if the user is already logged in when the component loads
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, userWasLogin);
  }, []);

  // Function called when the auth state changes
  function userWasLogin(user) {
    if (user) {
      Toast.fire({
        icon: "success",
        title: "Login successful " + user.displayName,
      });
      successLogin(user);
    } else {
      Toast.fire({
        icon: "error",
        title: "No authenticated user found",
      });
      setLoading(false);
    }
  }

  const terrainMap = [
    [5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5],
  ];

  const mapWidth = terrainMap[0].length;
  const mapHeight = terrainMap.length;
  const chunkSize = 40;
  const totalWidth = mapWidth * chunkSize;
  const totalHeight = mapHeight * chunkSize;

  const terrainOffsetX = -((mapWidth - 1) * chunkSize) / 2;
  const terrainOffsetZ = -((mapHeight - 1) * chunkSize) / 2;

  // Render the login page
  return (
    <div className="container h-screen max-w-full">
      <Canvas
        className="bg-cyan-200"
        shadows="soft"
        camera={{
          position: [0, 0, 0],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            maxPolarAngle={Math.PI * 0.55}
            target={[0, 5, 0]}
            enablePan={false}
            minDistance={3.5}
            maxDistance={15}
          />

          <GenericLight
            mapSize={Math.max(mapWidth, mapHeight)}
            chunkSize={chunkSize}
          />

          <LoginLight />

          <Button3D
            text={"login with google"}
            position={[0, 5, 0]}
            function_click={handleGoogleSignIn}
          ></Button3D>

          <CloudsBlock
            n={30}
            factor={Math.max(totalWidth, totalHeight)}
            seed={133456}
            textureOffsetX={0.8}
            textureOffsetY={1}
            position={[0, 30, 0]}
            scale={0.8}
            minRadius={12}
          />

          <Terrain
            map={terrainMap}
            baseSeed={12345}
            position={[terrainOffsetX, 0, terrainOffsetZ]}
          />
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
}
