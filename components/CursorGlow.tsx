"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    function handleMove(e: PointerEvent) {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    }
    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden sm:block transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute w-[420px] h-[420px] rounded-full"
        style={{
          left: pos.x - 210,
          top: pos.y - 210,
          background:
            "radial-gradient(circle, rgba(76,125,255,0.07) 0%, rgba(155,107,255,0.04) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
