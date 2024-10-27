import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


//import of components
import Scene from "./pages/Scene";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

//import pages
import Biodiversity from "./pages/Biodiversity";

//import utils
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    //<AuthProvider>
      <BrowserRouter>
        <Routes>
          { 
          <Route
            path="/biodiversity"
            element={<PrivateRoute element={Biodiversity} />}
          />
          <Route path="/scene" element={<Scene />} />

        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
