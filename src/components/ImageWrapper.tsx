"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  type MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Moveto from "./Moveto";

interface Prop {
  img: string;
  title: string;
  description: string;
  index: number;
  bg: string;
}
const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const ImageWrapper = ({ img, title, description, index, bg }: Prop) => {
  const t = useTranslations("button");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div
        ref={ref}
        key={index}
        className={cn(
          " h-[100vh] snap-start flex justify-center items-center  relative"
        )}
      >
        <div className="shadow-xl h-[93vh]  flex justify-center items-center overflow-hidden relative ">
          <img
            src={img}
            alt={title}
            className="w-full h-[100vh] object-cover scale-125 hover:scale-100 transition duration-1000"
          />
          <p className="absolute text-white font-bold text-[60px]">{title}</p>
          <button className="absolute bottom-52 text-white font-bold border-4 rounded-full p-4 hover:bg-white hover:text-sky-500 transition duration-300">
            {t("title")}
          </button>
        </div>

        <p className="absolute left-[-4vh] bottom-3 text-[120px] text-white font-bold italic drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]  ">
          {(index + 1).toString().padStart(2, "0")}
        </p>
      </div>
    </section>
  );
};

export default ImageWrapper;
