import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [userDocData, setUserDocData] = useState(() => {
    const savedUserDocData = sessionStorage.getItem("userDocData");
    return savedUserDocData ? JSON.parse(savedUserDocData) : null;
  });

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (userDocData) {
      sessionStorage.setItem("userDocData", JSON.stringify(userDocData));
    } else {
      sessionStorage.removeItem("userDocData");
    }
  }, [userDocData]);

  return (
    <AuthContext.Provider value={{ user, setUser, userDocData, setUserDocData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
