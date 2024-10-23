// Import libraries
import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";

// Firebase setup
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Contexts and hooks
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

//3D
import { Canvas, useFrame } from "@react-three/fiber";
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

  //function to animate loading object
  function LoadingRing() {
    const ringRef = useRef();
    const segmentRef = useRef();

    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();

      // Rotar el anillo completo
      ringRef.current.rotation.z += 0.01;

      // Mover el segmento iluminado alrededor del anillo
      segmentRef.current.position.x = Math.cos(elapsedTime * 2) * 1.2;
      segmentRef.current.position.y = Math.sin(elapsedTime * 2) * 1.2;
    });

    return (
      <group ref={ringRef}>
        {/* Anillo principal */}
        <mesh>
          <torusGeometry args={[1, 0.2, 16, 100]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>

        {/* Segmento iluminado que se mueve */}
        <mesh ref={segmentRef} scale={[0.3, 0.3, 0.18]}>
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshStandardMaterial
            color="white"
            emissive="yellow"
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    );
  }

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

  // Render loading state if still checking authentication
  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="w-full max-w-sm rounded-lg bg-slate-600 bg-opacity-75 p-8 text-center shadow-lg">
          <header className="mb-6 text-center">
            <h1 className="mb-8 text-3xl font-bold">Log In</h1>
          </header>
          <div className="flex items-center justify-center">
            {/* Canvas para el anillo 3D */}
            <Canvas style={{ height: 150, width: 150 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} />
              <LoadingRing />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </div>
    );

  // Render the login page
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="w-full max-w-sm rounded-lg bg-slate-600 bg-opacity-75 p-8 text-center shadow-lg">
        <h1 className="mb-8 text-3xl font-bold">Log In</h1>

        <button
          onClick={handleGoogleSignIn}
          className="flex w-full items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-bold text-slate-900 transition-all duration-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google logo"
            className="mr-3 h-6 w-6"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
}

