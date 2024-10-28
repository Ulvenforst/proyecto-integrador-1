import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Scene from "./Scene";

const HomePage = () => {
  const navigate = useNavigate();
  const [viewIndex, setViewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const views = [
    {
      title: "TERRAWATCH",
      content: "Bienvenido a TERRAWATCH, tu plataforma para explorar y entender los principales problemas ambientales que afectan a nuestro planeta. Navega a través de diferentes secciones para aprender más sobre cada tema.",
      type: "home"
    },
    {
      title: "Biodiversidad",
      content: "La pérdida de biodiversidad es uno de los mayores desafíos ambientales. La extinción de especies y la destrucción de ecosistemas están ocurriendo a un ritmo sin precedentes.",
      route: "/biodiversity",
      type: "section"
    },
    {
      title: "Deforestación",
      content: "Los bosques son fundamentales para la vida en la Tierra. Sin embargo, cada año perdemos millones de hectáreas debido a la tala indiscriminada y la expansión agrícola.",
      route: "/deforestation",
      type: "section"
    },
    {
      title: "Erosión del Suelo",
      content: "La degradación del suelo amenaza nuestra capacidad para producir alimentos y mantener ecosistemas saludables. La erosión afecta a la agricultura y la estabilidad de los ecosistemas.",
      route: "/soil-erosion",
      type: "section"
    }
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

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isAnimating, views.length]);

  const ContentBox = ({ view, index }) => {
    if (view.type === "home") {
      return (
        <div className="absolute bottom-10 left-10 z-10 max-w-2xl bg-black/50 backdrop-blur-sm text-white p-8 rounded-lg">
          <div className="flex items-center gap-8 mb-6">
            <img 
              src="/logos/TERRAWATCH.png" 
              alt="TERRAWATCH Logo" 
              className="w-32 h-32 object-contain"
            />
            <h1 className="text-4xl font-bold">{view.title}</h1>
          </div>
          <p className="text-xl leading-relaxed">{view.content}</p>
        </div>
      );
    }

    return (
      <div className={`
        absolute z-10 transition-all duration-500 ease-in-out
        ${index === 1 ? 'top-24 left-10' :
          index === 2 ? 'top-24 right-10' : 'bottom-10 right-10'}
        max-w-md bg-black/50 backdrop-blur-sm text-white p-6 rounded-lg
      `}>
        <h2 className="text-2xl font-bold mb-4">{view.title}</h2>
        <p className="text-lg leading-relaxed mb-6">{view.content}</p>
        <button 
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors
            transform hover:scale-105 transition-transform duration-200"
          onClick={() => navigate(view.route)}
        >
          Explorar problemática
        </button>
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-white font-bold text-2xl cursor-pointer hover:text-green-400 transition-colors"
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setViewIndex(0);
                setTimeout(() => setIsAnimating(false), 1000);
              }
            }}
          >
            TERRAWATCH
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            {views.slice(1).map((view, index) => (
              <li 
                key={index + 1}
                className={`
                  cursor-pointer text-lg transition-colors
                  ${viewIndex === index + 1 ? 'text-green-400' : 'text-white hover:text-green-400'}
                `}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setViewIndex(index + 1);
                    setTimeout(() => setIsAnimating(false), 1000);
                  }
                }}
              >
                {view.title}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content Box */}
      <ContentBox view={views[viewIndex]} index={viewIndex} />

      {/* 3D Scene */}
      <Scene viewIndex={viewIndex} />
    </div>
  );
};

export default HomePage;
