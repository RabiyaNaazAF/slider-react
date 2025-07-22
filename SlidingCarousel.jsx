// src/components/SlidingCarousel.jsx
import { useState } from "react";

export default function SlidingCarousel() {
  /* 1️⃣  LIST YOUR FILE NAMES HERE  --------------------------------------- */
  const IMAGES = [
    "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg",
    "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg",
    "https://freerangestock.com/sample/155350/a-lake-with-a-tree-and-mountains-in-the-background.jpg",
    "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
  ];
  /*  ➜  Put these three files inside your /public folder                     */

  const WIDTH = 800;                   // each slide is 800 px wide
  const [index, setIndex] = useState(0); // which picture is showing?

  /* 2️⃣  HANDLERS ---------------------------------------------------------- */
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, IMAGES.length - 1));

  /* 3️⃣  SLIDER OFFSET (–300, –600, …)  ----------------------------------- */
  const offset = -index * WIDTH;

  /* 4️⃣  MARK‑UP ----------------------------------------------------------- */
  return (
    <div
      style={{
        width: WIDTH,
        height: 500,
        overflow: "hidden",
        position: "relative",
        margin: "40px auto",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      {/* 4a ─── The strip of images, all in one flex row ─── */}
      <div
        style={{
          display: "flex",
          width: WIDTH * IMAGES.length,
          height: "100%",
          transition: "transform 0.8s ease",
          transform: `translateX(${offset}px)`,
        }}

   
      >
        {IMAGES.map((src) => (
          <img
            key={src}
            src={src}
            alt="slide"
            style={{ width: WIDTH, height: "100%", objectFit: "cover" }}
          />
        ))}
      </div>

      {/* 4b ─── Arrows ─── */}
      <Arrow side="left"  onClick={prev} disabled={index === 0} />
      <Arrow side="right" onClick={next} disabled={index === IMAGES.length - 1} />
    </div>
  );
}

/* 5️⃣  Tiny helper for the two identical arrow buttons */
function Arrow({ side, onClick, disabled }) {
  const isLeft = side === "left";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        position: "absolute",
        top: "50%",
        [isLeft ? "left" : "right"]: -20,
        transform: "translateY(-50%)",
        padding: "0.35rem 0.6rem",
        fontSize: "1.25rem",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.35 : 0.9,
        userSelect: "none",
      }}
    >
      {isLeft ? "←" : "→"}
    </button>
  );
}
