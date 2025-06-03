import { NavLink, Outlet } from "react-router";
import "../css-files/layout.css";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

function Layout() {
  const inputRef = useRef();
  const [sent, setSent] = useState(false);

  return (
    <div
      style={{
        width: "700px",
        height: "300px",
        border: "3px solid slateblue",
        textAlign: "center",
      }}
    >
      <h3>You may write down your problems to here</h3>
      <label>
        <input
          required
          type="text"
          placeholder="don't click button until write something"
          className="proin"
          ref={inputRef}
        />
      </label>
      <br />
      <br />

      <button
        className="btnsent"
        onClick={() => {
          inputRef.current.value == 0 ? setSent(sent) : setSent(!sent);
          setTimeout(() => {
            setSent(sent);
          }, 1500);
        }}
      >
        Sent
      </button>
      <br />

      {sent && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="infosent"
        >
          <h2>Sent your Request</h2>
        </motion.div>
      )}
      <br />
      <NavLink to="Faq" style={{color: "slateblue"}}>More Informtions</NavLink>
      <Outlet />
    </div>
  );
}
export default Layout;
