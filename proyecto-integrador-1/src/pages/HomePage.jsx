import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Scene from "./Scene";
import Navbar from "../components/NavBar";



const HomePage = () => {
  const navigate = useNavigate();
  const [viewIndex, setViewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


  const views = [
    {
      title: "TERRAWATCH",
      content:
        "Bienvenido a TERRAWATCH, tu plataforma para explorar y entender los principales problemas ambientales que afectan a nuestro planeta. Navega a través de diferentes secciones para aprender más sobre cada tema.",
      type: "home",
    },
    {
      title: "Biodiversidad",
      content:
        "La pérdida de biodiversidad es uno de los mayores desafíos ambientales. La extinción de especies y la destrucción de ecosistemas están ocurriendo a un ritmo sin precedentes.",
      route: "/biodiversity",
      type: "section",
    },
    {
      title: "Deforestación",
      content:
        "Los bosques son fundamentales para la vida en la Tierra. Sin embargo, cada año perdemos millones de hectáreas debido a la tala indiscriminada y la expansión agrícola.",
      route: "/deforestation",
      type: "section",
    },
    {
      title: "Erosión del Suelo",
      content:
        "La degradación del suelo amenaza nuestra capacidad para producir alimentos y mantener ecosistemas saludables. La erosión afecta a la agricultura y la estabilidad de los ecosistemas.",
      route: "/soil-erosion",
      type: "section",
    },
  ];

  useEffect(() => {
    const handleWheel = (event) => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (event.deltaY > 0) {
        setViewIndex((prev) => (prev + 1) % views.length);
      } else {
        setViewIndex((prev) => (prev - 1 + views.length) % views.length);
      }

      setTimeout(() => setIsAnimating(false), 1000);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAnimating, views.length]);

  const ContentBox = ({ view, index }) => {
    if (view.type === "home") {
      return (
        <div className="absolute bottom-10 left-10 z-10 max-w-2xl rounded-lg bg-black/50 p-8 text-white backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-8">
            <img
              src="/logos/TERRAWATCH.png"
              alt="TERRAWATCH Logo"
              className="h-32 w-32 object-contain"
            />
            <h1 className="text-4xl font-bold">{view.title}</h1>
          </div>
          <p className="text-xl leading-relaxed">{view.content}</p>
        </div>
      );
    }

    return (
      <div
        className={`absolute z-10 transition-all duration-500 ease-in-out ${
          index === 1
            ? "left-10 top-24"
            : index === 2
              ? "right-10 top-24"
              : "bottom-10 right-10"
        } max-w-md rounded-lg bg-black/50 p-6 text-white backdrop-blur-sm`}
      >
        <h2 className="mb-4 text-2xl font-bold">{view.title}</h2>
        <p className="mb-6 text-lg leading-relaxed">{view.content}</p>
        <button
          className="transform rounded-lg bg-green-500 px-6 py-2 text-white transition-transform duration-200 hover:scale-105 hover:bg-green-600"
          onClick={() => navigate(view.route)}
        >
          Explorar problemática
        </button>
      </div>
    );
  };

  return (
    <div className="relative h-screen w-full">
      {/* Navbar */}
      <Navbar
        views={views}
        viewIndex={viewIndex}
        setViewIndex={setViewIndex}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
      />

      {/* Content Box */}
      <ContentBox view={views[viewIndex]} index={viewIndex} />

      {/* 3D Scene */}
      <Scene viewIndex={viewIndex} />
    </div>
  );
};

export default HomePage;
