import React, { Component } from "react";
import Navigation from "../layout/Navbar";
import "../../css/home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />

        <div className="content-wrapper">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="sidebar-header">Feed</div>
                <div className="white-wrapper">
                  <ul className="feed">
                    <li className="mb-2">
                      <a href="#">Quantum Computing</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Algorithm </a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Computer Vision</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Web development</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Data Science</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Algorithm</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Data Structure</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Web development</a>
                    </li>{" "}
                    <li className="mb-2">
                      <a href="#">Machine learning </a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Computer Vision</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Deep learning</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Artificial Intelligence</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Data Base managment</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Computer Vision</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Web development</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-column w-col w-col-9">
                <div className="card mb-4 homeCard">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div
                        className="card-title mt-3"
                        style={{ fontSize: "20px", marginLeft: "-25px" }}
                      >
                        Saurabh Pandit
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="question"
                        placeholder="What is your question?"
                      />
                    </div>
                    <div className="col-md-2">
                      <div>
                        <img
                          src={require("../../images/submit.svg")}
                          className="questionSubmit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 homeCard">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-title">
                        How should I start coding?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          15h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                        Saurabh Pandit | Coding
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 homeCard">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-title">
                        How are the hostel facilities at IIITV?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          11h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                      Saurabh Pandit | Hostel
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 homeCard">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-title">
                        Which book should I follow for Data Structure and Algorithms?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          5h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                      Saurabh Pandit | Study
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 homeCard">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-title">
                        How can I get scholarship at IIITV?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          10h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                      Saurabh Pandit | scholarship
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 homeCard">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-title">
                        How are the hostel facilities at IIITV?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          11h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                      Saurabh Pandit | Hostel
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
