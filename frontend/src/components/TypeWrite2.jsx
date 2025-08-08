import React from "react";
import { FlipWords } from "../components/ui/flip-words.jsx";

export function Typewriter2() {
  const words = ["Full-Stack Developer", "AI/ML Enthusiast", "Tech Explorer"];

  return (
    <div>
      <div>
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
