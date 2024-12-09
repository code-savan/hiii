import React from "react";
import clsx from "clsx";
import Image from "next/image";

const AnimatedSidebar = ({ side = "left", direction = "up" }) => {
  const isUp = direction === "up";
  const isLeft = side === "left";

  return (
    <div
      className={clsx(
        "fixed top-0 h-[100dvh] w-[25px] overflow-hidden",
        isLeft ? "left-0" : "right-0"
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-center h-[200%] space-y-6",
          isUp ? "animate-scroll" : "animate-scroll-down"
        )}
      >
        {/* Render 23 images (duplicated for seamless scrolling) */}
        {Array.from({ length: 46 }, (_, i) => (
          <Image
            key={i}
            src={`/${(i % 23) + 1}.png`} // Circular image source loop
            alt={`Icon ${(i % 23) + 1}`}
            className="w-full rounded"
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedSidebar;
