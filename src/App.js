import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Menu from "./component/Menu";
import { DISHES } from "./shared/dishes";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      // <div className="App">
      //   <Navbar dark color="primary">
      //     <div className="container">
      //       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      //     </div>
      //   </Navbar>
      // </div>
      <Menu dishes={this.state.dishes} />
    );
  }
}

export default App;
