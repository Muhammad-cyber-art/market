import "./css-files/navsetting.css";
import { FaUser } from "react-icons/fa";
import { useRef, useEffect } from "react";
function NavSetting({ setdash }) {
  const scrRef = useRef();
  useEffect(() => {
    const handleE = (event) => {
      if (scrRef.current && !scrRef.current.contains(event.target)) {
        setdash(false);
      }
    };
    document.addEventListener("mousedown", handleE);
    return () => {
      document.removeEventListener("mousedown", handleE);
    };
  }, [setdash]);

  return (
    <div className="screen" >
      <div className="setbar" ref={scrRef}>
        <div className="dalni">
          <span className="rasm">
            <FaUser />
          </span>
          <h3>Create your Username</h3>
        </div>
        <hr />
        <div className="settings">
          <ul style={{ marginLeft: "-20px" }}>
            <p>Notification</p>
            <p>Subcribers</p>
            <p>Followers</p>
            <p>Group</p>
            <p>Calls</p>
            <p>Devices</p>
            <p>Premiume</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavSetting;
