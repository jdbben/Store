"use client";

import ImageWrapper from "@/components/ImageWrapper";
import Moveto from "@/components/Moveto";
import { objct } from "@/lib/const";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-1 ">
      <div className="flex flex-row w-screen relative">
        <div className=" absolute left-[23vh] top-[47vh] z-50">
          <Moveto className="" containerRef={containerRef} />
        </div>
        <div
          ref={containerRef}
          id="example"
          className="snap-y snap-mandatory h-[100vh] overflow-y-scroll left-0 w-full pl-[25vh] relative
          
      "
        >
          {objct.map((category, index) => (
            <ImageWrapper
              index={index}
              key={index}
              img={category.img}
              title={category.title}
              description={category.description}
              bg={category.bg}
            />
          ))}

          <motion.div
            className="fixed left-0 right-0 h-[8px] bg-[#4FF0B7] bottom-0 scale-x-0"
            style={{ scaleX }}
          />
        </div>
      </div>
    </div>
  );
}
