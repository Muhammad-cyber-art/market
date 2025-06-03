import "./css-files/Globe.css";
import { useState, useRef , useEffect } from "react";

function Globe({ hide }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if(modalRef.current && !modalRef.current.contains(event.target)){
          hide(false)
      }
      
    }
    document.addEventListener('mousedown',handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [hide])


  return (
    <div className="globem"  ref={modalRef}>
      <ul>
        <li>Produc</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Details</li>
      </ul>
    </div>
  );
}
export default Globe;
