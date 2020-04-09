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
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              CEO Testimonials
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Cards />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Testimonials;
