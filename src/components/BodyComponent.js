import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
class MainBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mainBody">
        <Jumbotron>
          <Card>
            <Card.Header>
              <h2>Leader Classes Relentlessly tracks & learns from</h2>
              <h3 className="text-center">
                100+ ​Fulltime / executive development programs at pre-eminent
                Universities like
              </h3>
            </Card.Header>

            <Card.Img variant="bottom" src="assets/images/universities.png" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Economy & Globalization Enablers like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/globalizations.png" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>
                50+ renowned High Potential (Hi-Po) & Executive Leadership
                Development programs of Top Tier Organisations like
              </h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/mncs.png" />
          </Card>
          <br />
          <h2> & Thoughts, Actions, Advice, Life & Inspiration Of</h2>
          <br />
          <div className="row justify-content-center">
            <div className="col-12 align-items-center align-self-center">
              <Image src="assets/images/500.png" fluid />
            </div>
          </div>
          <br />
          <h3> Of the Foremost</h3>
          <br />
          <Card>
            <Card.Header>
              <h2>World Leaders like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/World Leaders1.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Visionaries & Pioneers like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/Visionaries.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Business Legends like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/Business1.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Business Global Leaders like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/BusinessWorld.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Investors like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/Investors1.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Innovators like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/Innovators.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Futurists like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/futurists1.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Thought Leaders like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/ThoughtLeaders.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>World Class Professors like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/professors1.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h2>Dishtinguished Enterpreneurs like</h2>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/enterpreneurs.JPG" />
          </Card>
          <br />
          <Card>
            <Card.Header>
              <h3>
                & <br /> Other Leaders par excellence. <br /> Ingesting an
                extra-ordinary amount of this exceptionally valuable content on
                100+ Topics of Strategic Importance from
              </h3>
            </Card.Header>
            <Card.Img variant="bottom" src="assets/images/Funnel.jpg" />
          </Card>
          <br />
          <h2>Delivered via</h2>
          <h3>
            Specialized, Offline, extremely affordable, &nbsp;High Impact, One
            Day “
            <a
              href="/summits/career-advancement-leadership-development-summit"
              target="_blank"
            >
              <strong>
                LeaderClasses Career Advancement & Leadership Development
                Summits
              </strong>
            </a>
            ” held at multiple cities in India, designed to advance the career
            &amp; Build / Strengthen the Leadership Foundations, of our program
            participants.
          </h3>
        </Jumbotron>
      </div>
    );
  }
}

export default MainBody;
