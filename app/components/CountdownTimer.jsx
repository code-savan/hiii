import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateCountdown = () => {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25th
    if (now > christmas) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const diff = christmas - now;
    setCountdown({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    });
  };

  useEffect(() => {
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="font-bold text-[20px] my-6">
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
  );
};

export default CountdownTimer;
