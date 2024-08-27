import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      sessionStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-slate-900 p-4 text-white">
      <h1 className="text-2xl font-bold">PI</h1>
      <div className="flex items-center space-x-4">
        {user && (
          <div className="flex items-center space-x-2">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            )}
            <span className="text-base font-medium">
              {user.displayName || user.email}
            </span>
          </div>
        )}
        <button
          onClick={handleSignOut}
          className="rounded-md bg-red-500 px-4 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
