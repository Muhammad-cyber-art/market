import { div, title } from "framer-motion/client";
import "./partsCss/main2part.css";

function Main2Part({image, title ,des,id}) {
  return (
    <div className="reel" key={id}>
      <img src={image} alt="" />
      <div className="reelHover">
        <h3 style={{ margin: 0 }} className="reldes">
          {title}
        </h3>
        <p style={{ margin: 0 }}>{des}</p>
      </div>
    </div>
  );
}

export default Main2Part;
