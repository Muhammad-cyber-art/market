import "./partsCss/acsess.css";
import { useRef, useEffect } from "react";

function Acsess({acsess}) {
     const acsRef = useRef();
     useEffect(() => {
          const handlated = (event) => {
               if(acsRef.current && !acsRef.current.contains(event.target)){
                    acsess(false)
               }
          }
          document.addEventListener('mousedown',handlated)
          return () => {
               document.removeEventListener('mousedown',handlated)
          }
     },[])

  return (
    <div className="acs" ref={acsRef}>
      <h3>Acsessuars</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        deleniti sunt nihil, cumque nam voluptas asperiores facilis consectetur
        laborum eveniet explicabo quos beatae neque
      </p>
    </div>
  );
}
export default Acsess;