import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import { Player } from "video-react";
class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid pl-5 pr-5">
        {this.props.ceo.map((c) => {
          return (
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 text-center">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={c.image} />
                  <Card.Body>
                    <Card.Title>{c.name}</Card.Title>
                    <Card.Subtitle>{c.designation}</Card.Subtitle>
                    <Card.Text>{c.company}</Card.Text>

                    <a
                      className="btn btn-social-icon btn-linkedin"
                      href={c.linkedin}
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </Card.Body>
                </Card>
                <br />
                <br />
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <h2>Executive Biography</h2>
                <br />
                <h5 className="bio">{c.bio}</h5>
                <br />
                <br />
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <Player playsInline poster={c.video_poster} src={c.video} />
                <br />
                <br />
              </div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
