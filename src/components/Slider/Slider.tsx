import CoreConcept from "../CoreConcept/CoreConcept";
import "./Slider.css";
import { useState } from "react";
import { CORE_CONCEPTS } from "./../../../data";
import { Concept } from "./../../../data";

interface SLiderProps {
  concepts: Concept[];
}

export default function Slider({ concepts }: SLiderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  function handlePrevious() {
    if (currentIndex > 0) {
      setDirection("prev");
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNext() {
    if (currentIndex < CORE_CONCEPTS.length - 1) {
      setDirection("next");
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="slider-wrapper">
      <button className="button" onClick={handlePrevious}>
        &lt;
      </button>
      <div className="slider-window">
        <div
          className={`slider-content ${direction}`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {concepts.map((concept, index) => (
            <div key={index} className="slide">
              <CoreConcept {...concept} />
              {concept.description}
            </div>
          ))}
        </div>
      </div>
      <button className="button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}
