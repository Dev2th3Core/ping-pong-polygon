import React from 'react';

export type GameMode = 'bot' | 'single' | 'multiplayer';


const Menu = () => {
  return (
    <div className="bg-slate-250 flex flex-col items-center justify-center gap-6 p-8 mx-auto text-foreground rounded-xl shadow-custom backdrop-blur-lg">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
        Let's Play
      </h1>
      
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        <button
          className="btn btn-primary rounded-xl text-lg py-4 px-8"
        >
          Play vs Bot
        </button>
        
        <button
          className="btn btn-secondary rounded-xl text-lg py-4 px-8"
        >
          Single Player
        </button>
        
        <button
          className="btn btn-secondary rounded-xl text-lg py-4 px-8"
        >
          Multiplayer
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Select a game mode to start playing!</p>
        <ul className="list-disc list-inside mt-2">
          <li>Play vs Bot: Challenge our Bot</li>
          <li>Single Player: Play against yourself</li>
          <li>Multiplayer: Play with friends online</li>
        </ul>
      </div>
    </div>
  );
}; 

export default Menu;