import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <NavBar />
      <main className="container mx-auto p-4 text-center">
        <div className="rounded-lg bg-slate-800 bg-opacity-75 p-8 shadow-lg">
          <h1 className="text-4xl font-bold">Bienvenido a HomePage</h1>
          <p className="mt-4 text-lg">
            Aquí podrás encontrar información sobre diversos problemas
            acuáticos.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Secciones:</h2>
            <ul className="mt-4 space-y-2">
              <li>- Tipos de problemas acuáticos</li>
              <li>- Soluciones posibles</li>
              <li>- Recursos adicionales</li>
            </ul>
          </div>
          <div className="mt-12">
            <button className="rounded-md bg-red-500 px-6 py-3 text-lg font-bold transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
              Explorar Más
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
