import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Testimonials from "./TestimonialComponent";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
