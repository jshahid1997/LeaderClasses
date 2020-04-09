import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row  align-items-center justify-content-center">
          <div className="col-6 col-md-4">
            <h5>Share via :-</h5>
            <div>
              <a
                className="btn btn-social-icon btn-facebook"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FLeaderClasses-105817960762777%2F%3Fmodal%3Dadmin_todo_tour&amp;src=sdkpreparse"
              >
                <i className="fa fa-facebook"></i>
              </a>{" "}
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/shareArticle?mini=true&url=linkedin.com/company/leaderclasses&title=&summary=&source="
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href="https://twitter.com/home?status=https%3A//twitter.com/leaderclasses"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <h5>Follow us :-</h5>
            <div>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/company/leaderclasses"
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
              <a
                className="btn btn-social-icon btn-twitter"
                href="https://twitter.com/leaderclasses"
              >
                <i className="fa fa-twitter"></i>
              </a>{" "}
              <a
                className="btn btn-social-icon btn-instagram"
                href="https://www.instagram.com/leaderclassesofficial"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 mx-auto align-self-center px-5 py-5">
            <div class="list-group list-group-horizontal">
              <a
                href="https://www.leaderclasses.com/contact"
                class="list-group-item list-group-item-action"
              >
                Contact
              </a>

              <a
                href="https://www.leaderclasses.com/terms-and-conditions"
                class="list-group-item list-group-item-action"
              >
                Terms
              </a>

              <a
                href="https://www.leaderclasses.com/privacy"
                class="list-group-item list-group-item-action"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>
              © 2020 LeaderClasses (Awesome Firms) & its owners. All rights
              reserved.
              <br />
            </p>
          </div>
          <div className="col-auto">
            <p>
              All trademarks, logos & intellectual property featured belong to
              their respective owners. They do not endorse us in any way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
