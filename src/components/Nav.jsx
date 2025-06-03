import "./css-files/nav.css";
import { FaGlobe } from "react-icons/fa";
import Globem from "./GlobeM";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignInModal from "./Modals/SignIn";
import { NavLink } from "react-router";




function Nav() {
  const [show, setShow] = useState(false);
  function showm(cond) {
    setShow(cond);
  }
  const [signMl, setSignMl] = useState(false);

  return (
    <nav>
      <h1>WIX</h1>
      <ul className="navbar-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Produc">Products</NavLink></li>
        <li><NavLink to="/Solutions">Solutions</NavLink></li>
        <li><NavLink to="/Details">My Orders</NavLink></li>
      </ul>



      


      <FaGlobe className="globe" onClick={() => showm(true)} />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="menu-dropDown"
          >
            <Globem hide={showm} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="logs">
        <a href="#" className="logIn">
          Log in
        </a>
        <a href="#" className="signIn" onClick={() => setSignMl(!signMl)}>
          Sign in
        </a>
      </div>

      {signMl && <SignInModal open={setSignMl} />}
    </nav>
  );
}
export default Nav;
