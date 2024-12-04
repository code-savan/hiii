"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Head from 'next/head';

// import Loader from "./components/Loader";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false); // Manage loader visibility
  const [userName, setUserName] = useState(""); // Name in the query parameters
  const [newName, setNewName] = useState(""); // Name entered in the form
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time until Christmas
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const christmas = new Date(now.getFullYear(), 11, 25); // December 25th
      if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1); // Adjust for next year if past Christmas
      }
      const diff = christmas - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

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

  const handleGenerateLink = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      const link = `${window.location.origin}?name=${encodeURIComponent(newName)}`;
      navigator.clipboard.writeText(link);
      alert("Your link has been copied to the clipboard!");
      setNewName("");
    }
  };

//   const handleLoaderClick = () => {
//     setIsClicked(true); // Update the state when the loader button is clicked
//   };

  const handleClick = () => {
      setIsDoorOpen(true); // Trigger door opening

      setTimeout(() => {
          // Delay for transition to start
          setIsClicked(true); // Start the animation
        }, 1000);
  };

  return (
    <>
    <Head>
        <title>❤️ {userName} wishing you a Merry Christmas</title>
        <meta name="description" content="Celebrate the joy of Christmas with heartfelt wishes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff]">
      {/* Loading Screen */}
      {!isClicked ? (
        <div className="relative w-full h-[100vh] border-blue-500 border bg-transparent">
        {/* <div className="absolute inset-0 bg-black opacity-50" /> */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <button
            onClick={handleClick}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 z-20"
          >
            Click Me
          </button>
        </div>
        <div
          className={`doors-container  ${
            isDoorOpen ? "open" : ""
          }`}
        >
          <div className="door door-left"></div>
          <div className="door door-right"></div>
        </div>
      </div>
      ) : (
        // Main Wishes Section
        <main className="text-center w-full h-dvh overflow-y-auto relative pb-[100px]">
            <div className="h-[80px] w-[300px] mx-auto mb-2">

            </div>


          <h1 className="text-3xl font-bold text-red-600 mb-5">
            🎁 {userName} is
          </h1>
          <div className="mx-auto mb-4 w-fit">
             <Image src="/wishing.gif" alt="wishing you" className="w-[200px]" width={100} height={100} />
            </div>
            <p className="font-bold text-[20px] mb-6">
            <span className="text-blue-500">{countdown.days} </span>{" "}
            <span className="text-green-500">Day,</span>{" "}
            <span className="text-blue-500">{countdown.hours}</span>{" "}
            <span className="text-pink-500">Hrs,</span>{" "}
            <span className="text-blue-500">{countdown.minutes}</span>{" "}
            <span className="text-green-500">min,</span> <br />
            <span className="text-blue-500">{countdown.seconds}</span>{" "}
            <span className="text-purple-500">Sec</span>{" "}
            <span className="text-orange-500">Before</span>
          </p>

          <div className="mx-auto mb-4 w-fit">
             <Image src="/merry2.png" alt="wishing you" className="w-[400px]" width={500} height={500} />
            </div>

            <div className="mx-auto mb-8 w-fit flex">
             <Image src="/guiter.gif" alt="wishing you" className="w-[200px]" width={400} height={400} />
             <Image src="/sax.gif" alt="wishing you" className="w-[200px]" width={400} height={400} />
            </div>

            <div className="text-center mx-auto w-full font-semibold text-[14px] md:text-[18px] px-3 space-y-2 md:space-y-1">
                <p className="text-red-500">😍Have a cheerful Christmas😍</p>
                <p className="text-orange-500">🎅🏻May the warmth of love and joy🎅🏻</p>
                <p className="text-purple-500">❤️Fill your heart and home, today and always❤️</p>
                <p className="text-slate-700">✨This season is a reminder that you are loved✨</p>
                <p className="text-green-500">🎄In the smiles shared, in the kindness given🎄</p>
                <p className="text-blue-500">🎅May your New Year shine brighter than stars🎅</p>
                <p className="text-yellow-500">🎉Merry Christmas and a Blessed New Year🎉</p>
            </div>

            <p className="text-3xl font-bold text-red-600 my-8">{userName}
          </p>


          {/* Form to Generate New Links */}
          <form onSubmit={handleGenerateLink} className="md:flex items-center fixed bottom-2 md:space-x-3 z-20 space-y-3 md:space-y-0 left-1/2 -translate-x-1/2">
            <input
              type="text"
              placeholder="Enter your name here..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border-2 p-3 w-80 rounded bg-purple-500 placeholder:text-gray-200 text-center text-white border-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg border-[3px] w-full md:w-auto border-purple-500"
            >
            ‮ OOO‮G👉
            </button>
          </form>
        </main>
      )}
    </div>
    </>
  );
}
