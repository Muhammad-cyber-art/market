import "./partsCss/coockies.css"
import { useRef, useEffect } from "react";
function Coockies({coock}) {
     const chefRef = useRef();
     useEffect(() => {
          const handlate = (event) => {
               if(chefRef.current && !chefRef.current.contains(event.target)){
                    coock(false)
               }
          }
          document.addEventListener('mousedown',handlate)
          return () => {
               document.removeEventListener('mousedown',handlate)
          }
     },[])

  return (
    <div className="cook" ref={chefRef}>
      <h3>For Chiefs</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab in eveniet
        nisi odit earum quia minima quos eius, accusamus enim sed corporis qui,
        voluptate!
      </p>
    </div>
  );
}
export default Coockies;