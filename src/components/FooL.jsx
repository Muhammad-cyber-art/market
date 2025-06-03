import { FaTelegram, FaInstagram, FaYoutube,FaTwitter,FaWhatsapp } from "react-icons/fa";
import "./css-files/fool.css";

function Fool() {
  return (
    <div className="fool">
      <div className="foo">
        <div>
          <h4>Get to Konow Us</h4>
          <p>Font Awesome</p>
          <p>React libraryies</p>
          <p>Essentials</p>
          <p>Qualifications</p>
          <p>Products</p>
        </div>
        <div>
          <h4>Make Money with Us</h4>
          <p>Selling skills</p>
          <p>Buisness</p>
          <p>Advartisement</p>
          <p>Payment for You</p>
          <p>Monthly Fee</p>
        </div>
        <div>
          <h4>Payment Products</h4>
          <p>Clothes</p>
          <p>Mainly products</p>
          <p>Home essentials</p>
          <p>Mens Acsessuars</p>
          <p>Valueble things</p>
        </div>
      </div>
      <div className="pas">

      <div className="icons">
          <FaTelegram color="#0b75ff"/>
          <FaInstagram color="purple"/>
          <FaYoutube color="red"/>
          <FaTwitter color="#0b75ff"/>
          <FaWhatsapp color="green"/>
      </div>
      <h2>Follow me on social networks</h2>
      <p>+998 (93) 697-09-26</p>
      </div>
    </div>
  );
}
export default Fool;
