import Nav from "../../Nav";
import { useState, useEffect } from "react";
import data3 from "../../data";
import MainPart from "../../components-parts/MainParts";
import { p } from "framer-motion/client";
import { FaTrash } from "react-icons/fa6";
import "./RoutesItems/css-files/Details.css";
import { motion, AnimatePresence } from "framer-motion";
import Fool from "../../FooL";
function Details() {
  const [trash, setTrash] = useState(true);
  const keys = localStorage.getItem("key");
  const key = Number(keys);
  console.log(key);
  const info = data3.filter((items) => items.id == key);
  const toliq = info[0];
  return (
    <div>
      <Nav />
      <h1>My Orders</h1>
             {!keys && <>
               <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.5 }}
               >
               <h2 >No Orders Yet</h2>
             <p>You can order any products from Products section</p>
            </motion.div>
             </> 
             }
      <div className="obedient">
        <AnimatePresence>
          {keys && (
               <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.5 }}
               >
              <MainPart {...toliq} />
            </motion.div>
          )}
          {keys && trash && (
               <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.5 }}
             >
            <FaTrash
              className="trash"
              onClick={() => {
                localStorage.clear(key);
                setTrash(!trash);
              }}
            />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Fool/>
    </div>
  );
}
export default Details;
