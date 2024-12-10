"use client"

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import Head from 'next/head';
import AnimatedSidebar from "./components/AnimatedSidebar";
import CountdownTimer from "./components/CountdownTimer";
import AudioToggle from "./components/AudioToggle";
import GenerateLinkForm from "./components/GenerateLinkForm";


export default function Home() {
  const [isClicked, setIsClicked] = useState(false); // Manage loader visibility
  const [userName, setUserName] = useState(""); // Name in the query parameters
  const [newName, setNewName] = useState(""); // Name entered in the form
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false); // State for music play/pause





  // Extract the name from the query parameters
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const name = params.get("name") || "Someone Special";
//     setUserName(name);

//     // Track the visit
//     if (name) {
//       axios.post("/api/track", { name });
//     }
//   }, []);
useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("name") || "Someone Special";
      setUserName(name);

      if (name) {
        axios.post("/api/track", { name });
      }
    }
  }, []);


  const handleGenerateLink = async (e) => {
    e.preventDefault();
    if (newName.trim()) {
      const customMessage = `🎁 Have you seen this??? ${newName} sends you a surprise message 🎉 Open this 👉 ${window.location.origin}?name=${encodeURIComponent(newName)} 🎄`;

      try {
        await navigator.clipboard.writeText(customMessage);
        alert("Your message has been copied!!! Share to Friends NOW!!!");
      } catch (error) {
        console.error("Failed to copy text:", error);
        alert("Could not copy the message. Please try again.");
      }


      // 2. Share to WhatsApp
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(customMessage)}`;
      window.open(whatsappUrl, "_blank");

      setNewName("");
    }
  };

  const toggleMusic = () => {
    setMusicPlaying((prevState) => !prevState);
  };


  const handleClick = () => {
    setIsDoorOpen(true);
    setTimeout(() => setIsClicked(true), 1000);
  };

  return (
    <>
    <Head>
    <title>{userName} has a surprise for youuu!</title>
    <meta name="description" content={`${userName} has a surprise for youuu!!`} />
    <meta property="og:title" content={`${userName} has a surprise for youuu!`} />
    <meta property="og:description" content={`${userName} is spreading Christmas cheer with heartfelt wishes!`} />
      </Head>
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff]">
      {/* Loading Screen */}
      {!isClicked ? (
        <div className="relative w-full h-[100vh] border-blue-500 border bg-transparent">
        {/* <div className="absolute inset-0 bg-black opacity-50" /> */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-fit mx-auto">


        {/* CLCIKKKKKK  */}
          <Image onClick={handleClick}
          src="/click.png" alt="click" className="mt-28 z-20 animate-scale-rotate cursor-pointer w-auto h-auto" width={150} height={150} />
        </div>
        <div
          className={`doors-container  ${
            isDoorOpen ? "open" : ""
          }`}
        >
          <div className="door door-left">
          <Image src="/arrow.png" alt="arrow" className="absolute right-16 z-40 top-[42%] translate-y-1/2  arrow-icon  w-auto h-auto"  width={50} height={50} />
            <Image src="/hide.png" alt="hide" className="absolute -right-5 z-40 bottom-1/2 w-auto h-auto" width={150} height={150} />
          </div>
          <div className="door door-right"></div>
        </div>
      </div>
      ) : (
        // Main Wishes Section
        <main className="text-center w-full h-dvh overflow-y-auto relative pb-[100px]">
            {/* <a href="https://luglawhaulsano.net/4/7441732" className="h-[80px] w-[300px] mx-auto mb-2">
                
            </a> */}
           {/* Hidden audio element */}
       <AudioToggle audioSrc="/4.mp3" isPlaying={musicPlaying}
              onToggle={toggleMusic} />

        {/* fireworks  */}
        <Image src="/stars.gif" alt="wishing you" unoptimized="true" className="w-[100px] md:w-[300px] fixed left-10 z-0" width={500} height={500} />
        <Image src="/stars.gif" alt="wishing you" unoptimized="true" className="w-[100px] md:w-[300px] fixed right-5 top-10 md:bottom-10 z-0" width={500} height={500} />

        <div className="w-[30px] md:w-[50px] h-[100dvh] fixed left-0 top-0">
        {/* <LeftSlider /> */}
        <AnimatedSidebar side="left" direction="up" />
        </div>
        <div className="w-[30px] md:w-[40px] h-[100dvh] fixed right-0 top-0">
        {/* <RightSlider /> */}
        <AnimatedSidebar side="right" direction="down" />
        </div>

<div className=" relative z-30">


          <div className="text-[28px] md:text-[35px] font-bold text-red-600 my-6 animate-author">
           <span>🎁</span> <span className="gradient-text">{userName} is</span>
          </div>
          <div className="mx-auto my-6 w-fit">
             <Image src="/wishing.gif" alt="wishing you" unoptimized className="w-[150px] md:w-[180px] animate-scale-rotate" width={100} height={100} />
            </div>



          <div className="mx-auto mb-8 md:mb-4 w-fit">
             <Image src="/merry2.png" alt="wishing you"  className="w-[280px] md:w-[380px] animate-scale-rotate" width={500} height={500} />
            </div>

            <CountdownTimer />

            <div className="mx-auto mb-8 w-full md:w-fit flex justify-center ">
             <Image src="/guiter.gif" alt="wishing you" className="w-[42%] md:w-[200px] " unoptimized width={400} height={400} />
             <Image src="/sax.gif" alt="wishing you" className="w-[42%] md:w-[200px] " unoptimized width={400} height={400} />
            </div>

            <div className="text-center mx-auto w-[94%] md:w-full font-semibold text-[15px] md:text-[18px] px-6 space-y-2 md:space-y-1">
                <p className="text-red-500">😍Have a cheerful Christmas😍</p>
                <p className="text-orange-500">🎅🏻May the warmth of love and joy🎅🏻</p>
                <p className="text-teal-500">❤️Fill your heart and home, today and always❤️</p>
                <p className="text-slate-600">✨This season is a reminder that you are loved✨</p>
                <p className="text-green-500">🎄In the smiles shared, in the kindness given🎄</p>
                <p className="text-blue-500">🎅May your New Year shine brighter than stars🎅</p>
                <p className="text-yellow-500">🎉Merry Christmas and a Blessed New Year🎉</p>
            </div>

            <div className="text-[28px] md:text-[35px] font-bold text-red-600 my-8 animate-author">
          <span className="gradient-text">{userName}</span>
          </div>
          </div>


          {/* Form to Generate New Links */}
          {/* <form onSubmit={handleGenerateLink} className="w-full z-40 flex items-center fixed bottom-0 md:space-x-3  left-1/2 -translate-x-1/2">
            <input
              type="text"
              placeholder="Enter your name here..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border-2 p-3 w-[65%] md:w-[75%] rounded-[10px] bg-purple-500 placeholder:text-gray-200 text-center text-white border-pink-500 animate-scaleSequence"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-3 md:px-8 py-3 rounded-[10px] border-[3px] w-[35%] md:w-[25%] border-purple-500 animate-scaleSequence"
            >
            ‮O‮G👉
            </button>
          </form> */}
          <GenerateLinkForm onSubmit={handleGenerateLink} newName={newName} setNewName={setNewName} />
        </main>
      )}
    </div>
    </>
  );
}
