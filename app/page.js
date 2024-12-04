"use client"

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [userName, setUserName] = useState(""); // Name in the
  const [newName, setNewName] = useState(""); // Name entered in the form

  // Extract the name from the query parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "Someone Special";
    setUserName(name);

    // Track the visit
    if (name) {
      axios.post("/api/track", { name });
    }
  }, []);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleGenerateLink = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      const link = `${window.location.origin}?name=${encodeURIComponent(newName)}`;
      navigator.clipboard.writeText(link);
      alert("Your link has been copied to the clipboard!");
      setNewName("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Loading Screen */}
      {!isClicked ? (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            🎅 Click to See Your Wishes! 🎄
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            Click Me
          </button>
        </div>
      ) : (
        // Main Wishes Section
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            🎁 {userName} Wishes You a Merry Christmas! 🎄
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            May your holiday season be filled with love, joy, and lots of
            wonderful memories!
          </p>
          <p className="text-lg text-gray-700 mb-12">
            Thank you for being part of the magic this Christmas. 🌟
          </p>

          {/* Form to Generate New Links */}
          <form onSubmit={handleGenerateLink} className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter your name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border p-2 w-80 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Generate Your Link
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
