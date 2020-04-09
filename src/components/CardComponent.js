import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="https://www.linkedin.com/shareArticle?mini=true&url=linkedin.com/company/leaderclasses&title=&summary=&source="
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="https://www.linkedin.com/shareArticle?mini=true&url=linkedin.com/company/leaderclasses&title=&summary=&source="
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Cards;
