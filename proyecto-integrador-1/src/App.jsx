import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import of components
import Scene from "./pages/Scene";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TestPage  from "./pages/TestPage";

import Biodiversity  from "./pages/Biodiversity";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<PrivateRoute element={HomePage} />} />
          <Route path="/test" element={<PrivateRoute element={TestPage} />} />
          <Route path="/biodiversity" element={<PrivateRoute element={Biodiversity} />} />
          <Route path="/scene" element={<Scene/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;