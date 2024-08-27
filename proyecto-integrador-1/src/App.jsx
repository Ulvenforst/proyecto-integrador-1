import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import of components
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;