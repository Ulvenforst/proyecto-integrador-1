import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Loader } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { AxesHelper } from "three";

//componentes
import ControlCamare from "../controls/ControlCamare";
import Staging from "../staging/Staging";
import Lights from "../lights/Lights";
import Forest from "../world/Forest";

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

export default function TestPage() {
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

  // Check if the user is already logged in when the component loads
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, userWasLogin);
  }, []);

  const cameraSettings = {
    position: [150, 35, -80],
  };

  return (
    <>
      <Canvas shadows camera={cameraSettings}>
        <Suspense fallback={null}>
          <Perf position={"top-left"} />
          <ControlCamare />
          <Lights />
          <Staging />
          <primitive object={new AxesHelper(500)} />
          <Physics debug={false}>
            <Forest fun={handleGoogleSignIn} />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
