import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Component } from "react/cjs/react.development";
import Menu from "./component/Menu";
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Navbar dark color="primary">
      //     <div className="container">
      //       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      //     </div>
      //   </Navbar>
      // </div>
      <Menu />
    );
  }
}

export default App;
