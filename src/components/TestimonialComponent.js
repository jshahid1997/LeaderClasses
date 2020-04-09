import React, { Component } from "react";
import classnames from "classnames";
import { Button } from "reactstrap";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Accordion from "react-bootstrap/Accordion";
import Cards from "./CardComponent";
class Testimonials extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid pr-5 pl-5 acc">
        <Card bg="dark" text="light" body>
          <h2>Not yet sure of joining?</h2>
          <h3>
            Hear what Top Tier CEOs & Emerging CEO are saying about
            LeaderClasses Via their Video Testimonials below
          </h3>
        </Card>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h2> CEO Testimonials</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Cards
                  ceo={this.props.ceo}
                  // isLoading={this.props.ceo.isLoading}
                  // errMess={this.props.ceo.errmess}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h2> Emerging CEO Testimonials</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Cards
                  ceo={this.props.eceo}
                  // isLoading={this.props.eceo.isLoading}
                  // errMess={this.props.eceo.errmess}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br />
        <div className="container">
          <Card>
            <Card.Body>
              <h3>
                Know more & Apply for Our "
                <a
                  href="/summits/career-advancement-leadership-development-summit"
                  target="_blank"
                  class="link-21"
                >
                  <strong class="membership">
                    Career Advancement & Leadership development Summit".
                  </strong>
                </a>
                <br />
              </h3>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div className="container last">
          <Card>
            <Card.Header>
              <h2>Campus Partners</h2>
            </Card.Header>
            <Card.Body>
              <div className="text-center last">
                <h4>REPRESENTING AN INSTITUTION ?</h4>
                <h5 className="last">
                  <br />‍<br />
                  LeaderClasses is at a very interesting phase of its growth &
                  is actively looking to expand our Campus Partnerships
                  Pan-India.
                  <br />‍<br />
                  If you are an Institutional Representative of a University /
                  College interested in building a relationship with us , we
                  invite you to review our "
                  <a href="/campus-partners">
                    <strong>Campus Partners</strong>
                  </a>
                  " page & submit your details via our Campus Partners form.
                  <br />
                  <br />
                  We look forward to hearing from you soon & will advise
                  interest/next steps within 5 Business Days of receipt of your
                  “
                  <a href="https://www.leaderclasses.com/campus-partners-form">
                    <strong>Campus Partners Form</strong>
                  </a>
                  ”.
                  <br />
                  <br />
                  Thanks for your Time & Attention !<br />‍<br />
                  Team - LeaderClasses.
                  <br />
                </h5>
                <br />‍
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Testimonials;
