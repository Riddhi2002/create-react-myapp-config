import React, { Component } from "react";
import Menu from "./Menu";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishdetailComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leader";
import { PROMOTIONS } from "../shared/promotions";
import { Route, Switch, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: DISHES,
      comment: COMMENTS,
      promotion: PROMOTIONS,
      leader: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dish.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotion.filter((promo) => promo.featured)[0]}
          leader={this.state.leader.filter((leader) => leader.featured)[0]}
        />
      );
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
