import Nav from "../../Nav";
import { NavLink } from "react-router";
import Main from "../../Main";
import Layout from "./RoutesItems/nestRoute/solutionLayout";
import Fool from "../../FooL";
function Solutions() {
  return (
    <div style={{display: 'flex',flexDirection: "column", justifyContent: "center",alignItems: "center"}}>
      <Nav />
      <h1>Solutions page</h1>
      <Layout />
      <br /><br /><br />  
      <Fool/>

    </div>
  );
}
export default Solutions;
