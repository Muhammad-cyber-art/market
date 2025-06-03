import "./modal-css/SignIn.css";
import { useRef } from "react";
import {motion, AnimatePresence} from "framer-motion";

function SignInModal({open}) {

     return(
          <form className="simo">
               {true && 
               <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.5 }}>
               <div className="modal">
                    <h2>Log In</h2>
                    <label>
                         <p>Enter your Email</p>
                         <input type="gmail"  />
                    </label>
                    <label style={{marginTop: '40px'}}>
                         <p>Enter your Password</p>
                         <input type="password" />
                    </label>
                    <span className="cekbox" >
                    <input type="checkbox" />
                    <p>Remember this info</p>
                    </span>
                    <span className="btns">
                         <button className="close" onClick={() => open(false)}>Close</button>
                         <button className="sgbtn" onClick={() => open(false)}> Sign in</button>
                    </span>
               </div>
                    </motion.div>
               }
          </form>
     )
}
export default SignInModal;