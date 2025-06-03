import { div } from "framer-motion/client";
import "./css-files/Art.css";
import { FaChevronRight } from "react-icons/fa";
import ArtModal from "./components-parts/ArtModal.jsx";
import CutHair from "./components-parts/cutHair.jsx";
import Coockies from "./components-parts/Coockies.jsx";
import Acsess from "./components-parts/acsessuar.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Art() {
  const [open, setOpen] = useState(false);
  const [hair, setHair] = useState(false);
  const [coock, setCoock] = useState(false);
  const [acsess, setAcsess] = useState(false);
  return (
    <div className="article">
      <ul>
        <li onClick={() => setOpen(true)}>
          Our Products <FaChevronRight className="cheveron" />
        </li>
        <li onClick={() => setHair(true)}>
          Hair Cut <FaChevronRight className="cheveron" />
        </li>
        <li onClick={() => setCoock(true)}>
          Coockies <FaChevronRight className="cheveron" />
        </li>
        <li onClick={() => setAcsess(true)}>
          Acsessuars <FaChevronRight className="cheveron" />
        </li>
      </ul>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="menu-dropDown"
          >
            <ArtModal hope={setOpen} />
          </motion.div>
        )}
        {hair && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="menu-dropDown"
          >
            <CutHair hair={setHair} />
          </motion.div>
        )}
        {coock && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="menu-dropDown"
          >
            <Coockies coock={setCoock} />
          </motion.div>
        )}
        {acsess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="menu-dropDown"
          >
            <Acsess acsess={setAcsess} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Art;
