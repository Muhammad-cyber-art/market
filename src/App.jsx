import "./App.css";
import Nav from "./components/Nav.jsx";
import Section from "./components/Section.jsx";
import Art from "./components/Art.jsx";
import Main from "./components/Main.jsx";
import Main2 from "./components/Main2.jsx";
import Footer from "./components/Footer.jsx";
import Fool from "./components/FooL.jsx";
// Routes
import { BrowserRouter, Routes, Route } from "react-router";
import Produc from "./components/Routes/navRoutes/Produc.jsx";
import Details from "./components/Routes/navRoutes/Details";
import Resource from "./components/Routes/navRoutes/Resources";
import Solutions from "./components/Routes/navRoutes/Solutions";
import Faq from "./components/Routes/navRoutes/RoutesItems/nestRoute/Faq.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produc />} />
        <Route
          path="/Produc"
          element={
            <>
              <Nav />
              {/* <hr style={{border:'1px solid #6309ad '}}/> */}
              <br />
              <Section />
              <br />
              <br />
              <Art />
              <Main />
              <h1>You May See other Reflections</h1>
              <Main2 />
              <br />
              <Footer></Footer>
              <Fool />
            </>
          }
        >
          
        </Route>
        <Route path="/Solutions" element={<Solutions />}>
          <Route path="Faq" element={<Faq />} />
        </Route>
        <Route path="/Details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
