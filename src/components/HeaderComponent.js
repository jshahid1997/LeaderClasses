import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import CarouselComp from "./CarouselComponent";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <>
        <Navbar className="sticky-top" dark expand="md">
          <div className="container">
            {/* <div className="row mr-auto">
              
            </div> */}
            <div className="row m-auto">
              <div className="col-12 m-auto">
                <NavbarBrand className="mx-auto d-block" href="/">
                  <img
                    className="mx-auto d-block"
                    src="logo512.png"
                    height="30"
                    width="41"
                    alt="Ristorante con Fusion"
                  />
                </NavbarBrand>
              </div>
              <div className="col-12">
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    {/* <NavItem>
                      <a className="nav-link" href="#">
                        <span className="fa fa-home fa-lg"></span> HOME
                      </a>
                    </NavItem> */}
                    <NavItem>
                      <a
                        className="nav-link"
                        href="https://www.leaderclasses.com/about-us"
                      >
                        <span className="fa fa-info fa-lg"></span> ABOUT
                      </a>
                    </NavItem>
                    <NavItem>
                      <a
                        className="nav-link"
                        href="https://www.leaderclasses.com/faq"
                      >
                        <span className="fa fa-question-circle fa-lg"></span>{" "}
                        FAQ
                      </a>
                    </NavItem>
                    <NavItem>
                      <a
                        className="nav-link"
                        href="https://www.leaderclasses.com/scholarships/career-advancement-leadership-development-scholarships"
                      >
                        <span className="fa fa-graduation-cap fa-lg"></span>{" "}
                        STUDENT SCHOLARSHIPS
                      </a>
                    </NavItem>
                    <NavItem>
                      <a
                        className="nav-link"
                        href="https://www.leaderclasses.com/careers"
                      >
                        <span className="fa fa-globe fa-lg"></span> CAREERS
                      </a>
                    </NavItem>
                    <NavItem>
                      <a
                        className="nav-link"
                        href="https://www.leaderclasses.com/leaderclasses-contact-form"
                      >
                        <span className="fa fa-envelope fa-lg"></span> CONTACT
                        US
                      </a>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </div>
            <div className="row">
              <NavbarToggler
                className="ml-auto float-xs-right"
                onClick={this.toggleNav}
              />
            </div>
          </div>
        </Navbar>

        <div className="jumbo">
          <div>
            <div className="row">
              <div className="col-md-6 info">
                <h1 className="text-center">Leader Classes</h1>
                <br />

                <h5>
                  &emsp; Leader Classes harnesses the world's best Career
                  Advancement & Leadership Development resources helping you
                  gain Expert Knowledge, Practical Guidance & Actionable
                  Insights from Extraordinary Leaders & World Class Institutions
                  through Specialized, Affordable, Online & Offline Programs
                  custom crafted to Accelerate your Career & Business Success
                  while transforming you into a better more effective Leader.‍
                </h5>
              </div>
              <div className="col-md-6 info">
                <CarouselComp />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
