import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import of components
import Scene from "./pages/Scene";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import { AuthProvider } from "./context/AuthContext";
// import PrivateRoute from "./components/PrivateRoute";

//import pages
import Biodiversity from "./pages/Biodiversity";
import Deforestation from "./pages/Deforestation";
import SoilErosion from "./pages/SoilErosion";

//import utils
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
          {/*

          <Route
            path="/biodiversity"
            element={<PrivateRoute element={Biodiversity} />}
          />
          <Route
            path="/soil-erosion"
            element={<PrivateRoute element={SoilErosion} />}
          />

          */}
          <Route
            path="/deforestation"
            element={<Deforestation />}
          />
          <Route path="/scene" element={<Scene />} />
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
