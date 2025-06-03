import Nav from "../../Nav.jsx";
import "../cssRoute/navRoute/prodcts.css";
import { image } from "framer-motion/client";
import { useState, useEffect } from "react";
import AutoSlider from "./RoutesItems/Autoslider.jsx";
import { motion, AnimatePresence } from "framer-motion";
import SliderBottom from "./RoutesItems/producHome.jsx";
import { FaBars } from "react-icons/fa6";
import NavSetting from "./RoutesItems/NavSetting.jsx";
import Fool from "../../FooL.jsx";

function Produc() {
  const [dash, setDash] = useState(false);

  return (
    <div>
      <Nav />
      <div className="bar" onClick={() => setDash(!dash)}>
        <FaBars className="bsss" />
      </div>
      <AnimatePresence>
        {dash && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.1 }}
          >
            <NavSetting setdash={setDash} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="image">
        <div className="slider">
          <AnimatePresence>
            {true && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="autoslider2"
              >
                <AutoSlider />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <SliderBottom />
      <br /><br /><br /><br />
            <Fool/>
    </div>
  );
}
export default Produc;
