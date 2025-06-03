import "./partsCss/ArtModal.css";
import { useRef, useEffect } from "react";

function ArtModal({ hope }) {
  const artRef = useRef();
  useEffect(() => {
    const handle = (event) => {
      if (artRef.current && !artRef.current.contains(event.target)) {
        hope(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  }, [hope]);
  return (
    <div className="ourpro" ref={artRef}>
      <div className="specialisez">
        <div className="inside">
          <h3>Clothes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            consectetur, tenetur ut repellat quia quas. Aut necessitatibus
            adipisci corrupti quae sint
          </p>
        </div>
        <div className="inside2">
          <h3>Kitchen equipments</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vero
            dolores. Consequatur debitis maxime explicabo, ipsum consectetur,
          </p>
        </div>
      </div>
      <div className="ixtisos">
        <h3>Cosmetics</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
          mollitia distinctio! Cupiditate iusto similique at? Non corporis ipsum
          nisi, illo pariatur dolores! Recusandae velit, nemo voluptatum
          expedita sapiente quisquam suscipit?
        </p>
      </div>
    </div>
  );
}

export default ArtModal;
