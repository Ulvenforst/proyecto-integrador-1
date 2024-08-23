import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  function HandleLogin() {
    navigate("/home");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="w-full max-w-sm rounded-lg bg-slate-800 bg-opacity-75 p-8 text-center shadow-lg">
        <h1 className="mb-8 text-3xl font-bold">Iniciar Sesión</h1>
        <button
          onClick={HandleLogin}
          className="flex w-full items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-bold text-slate-900 transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google logo"
            className="mr-3 h-6 w-6"
          />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}
