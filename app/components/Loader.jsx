import React from 'react';

const Loader = ({ handleClick }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        🎅 Click to See Your Wishes! 🎄
      </h1>
      <button
        onClick={handleClick} // Trigger the state update in Home
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
      >
        Click Me
      </button>
    </div>
  );
}

export default Loader;
