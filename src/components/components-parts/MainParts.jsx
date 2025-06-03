import "./partsCss/mainparts.css";
import { FaHeart, FaFileDownload, FaShare } from "react-icons/fa";
import { useEffect, useState } from "react";
import { style } from "framer-motion/client";
import { motion } from "framer-motion";
import Details from "../Routes/navRoutes/Details";

function MainPart({ id, image, title, des }) {
  const [heart, setHeart] = useState(null);
  const [giveorder, setOrder] = useState(false);
  const handleate = (di) => {
    const massiv = [];
    
    localStorage.setItem("key",di );
    massiv.push(di);
    setOrder(!giveorder);

    setTimeout(() => {
      setOrder(false);
    }, 1500);
  };

  return (
    <div className="mainpart" key={id}>
      <div style={{ display: "flex" }}>
        <h3 className="title">{title}</h3>
        <span></span>
      </div>
      <img src={image} alt="" className="img" />
      <p className="desc">{des}</p>
      <span className="icons">
        <FaHeart
          color={!heart ? "black" : "red"}
          style={{ transition: "all 0.3s ease " }}
          // onClick={() => setHeart(!heart)}
        />
        <FaShare />
        <FaFileDownload />
      </span>
      <div className="hoverr">
        <h2>{title}</h2>
        <h4>{des}</h4>
        {giveorder && (
          <motion.div
            className="ordered"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <h4>Your order saved to My Order section :)</h4>
          </motion.div>
        )}
        <span className="iconss">
          <FaHeart
            color={!heart ? "aliceblue" : "red"}
            style={{ transition: "all 0.3s ease " }}
            onClick={() => setHeart(!heart)}
          />
          <div className="share">
            <p onClick={() => handleate(id)} className="ord">
              Give Order
            </p>
          </div>
          <FaShare className="share2" onClick={() => handleate(id)} />
          <FaFileDownload />
        </span>
      </div>
    </div>
  );
}
export default MainPart;
