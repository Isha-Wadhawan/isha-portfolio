import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        left: pos.x,
        top: pos.y,
      }}
      className="fixed z-50 w-6 h-6 rounded-full bg-cyan-400 pointer-events-none mix-blend-screen blur-sm -translate-x-1/2 -translate-y-1/2"
    />
  );
}