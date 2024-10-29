import React from "react";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuth } from "../context/AuthContext";

const Navbar = ({
  views,
  viewIndex,
  setViewIndex,
  isAnimating,
  setIsAnimating,
}) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogoClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setViewIndex(0);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const handleViewClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setViewIndex(index + 1);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

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
    <nav className="absolute left-0 right-0 top-0 z-10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div
          className="cursor-pointer text-2xl font-bold text-white transition-colors hover:text-green-400"
          onClick={handleLogoClick}
        >
          TERRAWATCH
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {views.slice(1).map((view, index) => (
            <li
              key={index + 1}
              className={`cursor-pointer text-lg transition-colors ${viewIndex === index + 1 ? "text-green-400" : "text-white hover:text-green-400"} `}
              onClick={() => handleViewClick(index)}
            >
              {view.title}
            </li>
          ))}
        </ul>

        {/* User Info and Sign Out */}
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
              <span className="text-base font-medium text-white">
                {user.displayName || user.email}
              </span>
            </div>
          )}
          <button
            onClick={handleSignOut}
            className="rounded-md bg-red-500 px-4 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-red-700 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
