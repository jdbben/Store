"use client";

import { useEffect, useRef } from "react";

const Bg = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      const canvas = ref.current;
      const ctx = ref.current.getContext("2d");
      if (!ctx) return;
      const scale = window.devicePixelRatio;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(scale, scale);

      ctx.imageSmoothingEnabled = true;
      ctx.beginPath();
      ctx.lineTo(600, 0);
      ctx.lineTo(0, 300);
      ctx.lineTo(0, 0);
      ctx.fillStyle = "#F0F0F0";
      ctx.fill();
    }
  }, []);

  return (
    <canvas
      ref={ref}
      className="h-screen w-screen fixed left-0 top-0 z-[-9999] "
    ></canvas>
  );
};

export default Bg;
