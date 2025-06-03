import "./css-files/Main.css";

import MainParts from "./components-parts/MainParts.jsx";
import data from "./data.js";

function Main() {
  return (
    <div className="main">
      {data.map((items) => {
        return <MainParts key={items.id} {...items} />;
      })}
      <div className="last">
        <h2 className="h2">Explore More</h2>
          <div className="lastHover">
                <h3>See more</h3>
                <span className="span">+</span>
          </div>
      </div>
    </div>
  );
}
export default Main;
