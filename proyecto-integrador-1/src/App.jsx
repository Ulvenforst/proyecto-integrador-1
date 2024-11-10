import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import of components
import Scene from "./pages/Scene";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

//import pages
import Biodiversity from "./pages/Biodiversity";
import Deforestation from "./pages/Deforestation";
import SoilErosion from "./pages/SoilErosion";

//import utils
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
          <Route
            path="/biodiversity"
            element={<PrivateRoute element={Biodiversity} />}
          />
          <Route
            path="/deforestation"
            element={<PrivateRoute element={Deforestation} />}
          />
          <Route
            path="/soil-erosion"
            element={<PrivateRoute element={SoilErosion} />}
          />
          <Route path="/scene" element={<Scene />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
