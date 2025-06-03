import "./css-files/min2.css";
import Main2Part from "./components-parts/main2Parts";
import data2 from "./data2.js";


function Main2(){

     return (
          <div className="main2">
               {true && data2.map((item) => {
                    return <Main2Part key={item.id} {...item}/>
               })}
          </div>
     )
}

export default Main2;