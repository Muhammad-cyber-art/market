import { data } from "react-router";
import dataTwo from "../../../data2";
import { useState, useEffect } from "react";
import "../../cssRoute/navRoute/autoslider.css";
import { AnimatePresence, motion } from "framer-motion";



const AutoSlider = () => {
  const images = dataTwo.filter((item) => item.image);
  const descs = dataTwo.filter((item) => item.title);

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 >= images.length && descs.length <= prev + 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "left", marginLeft: "-500px",marginTop: "60px" }}>
        <AnimatePresence>
          <motion.h1
            style={{
              marginTop: "-70px",
              fontSize: "40px",
              position: "absolute",
            }}
            key={descs[index].title}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
          >
            {descs[index].title}
          </motion.h1>
        </AnimatePresence>
        <h3>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br />
          Veritatis harum dolore,<br /> similique delectus
        </h3>
        <br />
        <br />
        <button className="btn">Learn More</button>
        <br />


        <ul style={{ display: "flex" }} className="lisss">
          <li>
            <a href="#">Learn More</a>
          </li>
          <li>
            <a href="#">Know about</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Open Profile</a>
          </li>
        </ul>
      </div>

  
      <AnimatePresence>
        <motion.img
          src={images[index].image}
          alt=""
          style={{
            transition: "opacity 0.5s ease-in-out",
            position: "absolute",
            marginLeft: "700px",
            borderRadius: "10px",
            marginTop: "70px"
          }}
          key={images[index].image}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};
export default AutoSlider;
