import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import of components
import Scene from "./pages/Scene";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import { AuthProvider } from "./context/AuthContext";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    //<AuthProvider>
      <BrowserRouter>
        <Routes>
          { /*
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<PrivateRoute element={HomePage} />} />
          */ }
          <Route path="/" element={<Navigate to="/scene" />} />
          <Route path="/scene" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
