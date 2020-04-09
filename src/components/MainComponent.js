import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Testimonials from "./TestimonialComponent";

import { connect } from "react-redux";

import { fetchCeo, fetchECeo } from "../redux/ActionCreators";
import MainBody from "./BodyComponent";

const mapStateToProps = (state) => {
  return {
    ceo: state.ceo,
    eceo: state.eceo,
  };
};

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainBody />
        <Testimonials ceo={this.props.ceo} eceo={this.props.eceo} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
