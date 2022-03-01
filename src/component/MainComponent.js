import React, { Component } from "react";
import Menu from "./Menu";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./ContactComponent";
import { Route, Switch, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            path="/menu"
            component={() => <Menu dishes={this.state.dish} />}
          />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
