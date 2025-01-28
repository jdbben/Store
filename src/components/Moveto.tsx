"use client";

import { cn } from "@/lib/utils";
import { RefObject } from "react";
interface Prop {
  className?: string;
  containerRef: RefObject<HTMLDivElement | null>;
}
const Moveto = ({ className, containerRef }: Prop) => {
  const scroll = (direction: "up" | "down") => {
    if (containerRef.current) {
      const scrollAmount = 100;
      if (direction === "up") {
        containerRef.current.scrollBy({
          top: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "down") {
        containerRef.current.scrollBy({
          top: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      className={cn(
        `  w-12 h-36 flex flex-col justify-center items-center rounded-full overflow-hidden` +
          className
      )}
    >
      <button
        className="flex items-center justify-center w-12 h-12 bg-gray-200 hover:bg-gray-300  shadow-md transition-all cursor-pointer"
        onClick={() => scroll("up")}
      >
        <svg
          fill="#000000"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
        >
          <path d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path>
        </svg>
      </button>

      <button className="flex items-center justify-center w-12 h-12 bg-gray-200 hover:bg-gray-300  shadow-md transition-all">
        <svg
          fill="#000000"
          fillRule="evenodd"
          height="24px"
          width="24px"
          version="1.1"
          strokeWidth="0"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path d="M5 6.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm0 14a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM6.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zM12 6.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM13.75 19a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zM12 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM20.75 5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zM19 20.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM20.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"></path>
        </svg>
      </button>
      <button
        onClick={() => scroll("down")}
        className="flex items-center justify-center w-12 h-12 bg-gray-200 hover:bg-gray-300  shadow-md transition-all"
      >
        <svg
          fill="#000000"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
          transform="rotate(180)"
        >
          <path
            d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
            fill="#0F0F0F"
          />{" "}
        </svg>
      </button>
    </div>
  );
};

export default Moveto;
