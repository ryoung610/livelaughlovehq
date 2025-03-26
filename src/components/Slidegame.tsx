import React, { useState } from "react";
import AboutImage from "../assets/thankyouLLL.jpg"; // Replace with your image

const Slidegame: React.FC = () => {
  // Function to shuffle the array, with type annotations
  const shuffleArray = (array: number[]): number[] => {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const gridSize = 3; // 3x3 puzzle
  const totalTiles = gridSize * gridSize;
  const initialTiles = Array.from({ length: totalTiles }, (_, i) => i);
  const [tiles, setTiles] = useState<number[]>(shuffleArray(initialTiles));

  // Handle tile click with typed index parameter
  const handleTileClick = (index: number) => {
    let emptyIndex = tiles.indexOf(totalTiles - 1); // Empty tile position
    let validMoves = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - gridSize,
      emptyIndex + gridSize,
    ];
    if (validMoves.includes(index)) {
      let newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
    }
  };

  return (
    <div className=" p-3 w-auto text-center  rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Solve the Puzzle!</h2>
      <div className="grid grid-cols-3 gap-1 border-4 border-gray-500 rounded-md">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`w-full h-40 border bg-gray-300 flex items-center justify-center text-lg font-bold cursor-pointer ${
              tile === totalTiles - 1 ? "bg-gray-700" : ""
            }`}
            onClick={() => handleTileClick(index)}
            style={{
              backgroundImage: tile !== totalTiles - 1 ? `url(${AboutImage})` : "none",
              backgroundSize: "300% 300%",
              backgroundPosition: `${(tile % gridSize) * 50}% ${
                Math.floor(tile / gridSize) * 50
              }%`,
            }}
          >
            {tile !== totalTiles - 1 ? "" : "🧩"} {/* Show empty space */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidegame;