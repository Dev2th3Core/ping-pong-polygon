import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const polygonTypes = ["Normal", "Quad", "Hexa", "Octa", "Deca"];

const Menu = () => {
  const [selected, setSelected] = useState(0);

  const handlePrev = () => {
    setSelected((prev) => (prev === 0 ? polygonTypes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev === polygonTypes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 rounded-xl shadow-custom flex flex-col md:flex-row items-center justify-center gap-8 p-8 mx-auto w-full max-w-2xl">
      {/* SVG Section */}
      <div className="flex items-center justify-center w-full md:w-1/2 min-h-[180px]">
        {/* Placeholder for SVG */}
        <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-400 dark:text-gray-500">SVG Here</span>
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex flex-col items-center justify-center gap-6 w-full md:w-1/2">
        {/* Polygon Selector */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            onClick={handlePrev}
            aria-label="Previous Polygon"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <span className="text-lg font-semibold px-4 py-2 bg-white/60 dark:bg-gray-900/60 rounded-xl shadow">
            {polygonTypes[selected]}
          </span>
          <button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            onClick={handleNext}
            aria-label="Next Polygon"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Game Mode Buttons */}
        <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
          <button className="btn btn-primary rounded-xl text-lg py-4 px-8">
            Play vs Bot
          </button>
          <button className="btn btn-secondary rounded-xl text-lg py-4 px-8">
            Multiplayer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;