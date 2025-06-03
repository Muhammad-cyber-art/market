import "./partsCss/cutHair.css";
import { useState, useRef, useEffect } from "react";

function CutHair({ hair }) {
  const modalHRef = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (modalHRef.current && !modalHRef.current.contains(event.target)) {
        hair(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [hair]);

  return (
    <div className="hair" ref={modalHRef}>
      <h3>For Womens</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        dolorum facilis numquam quasi consequuntur earum! Ipsa accusamus
        expedita iure quae cum facere. Perspiciatis corrupti placeat dolorum
        veniam quae minima dolorem.
      </p>
    </div>
  );
}

export default CutHair;
