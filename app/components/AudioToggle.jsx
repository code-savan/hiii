import { useRef, useState } from "react";

const AudioToggle = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" autoPlay />
      <button
        onClick={handleToggleAudio}
        className="fixed bottom-16 right-2 bg-gray-300 text-white rounded-full px-4 py-3 shadow-lg hover:bg-red-600 transition z-50"
        aria-label="Toggle audio"
      >
        {isPlaying ? "🔇" : "🔊"}
      </button>
    </>
  );
};

export default AudioToggle;
