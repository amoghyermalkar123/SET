import React, { Component } from "react";
import "./Notifications.css";
import { Link } from "react-router-dom";


import ade from ".././assets/ade.jpg";
const home = "/Home"
export class Notifications extends Component {
  render() {
    return (
      <div>
        <div className="ui segment">
          <div className="sub toast-header">Notifications</div>{" "}
        </div>
        <div display="block" className="notificationcontainer">
          <div>
            <div className="notifbox">
              <div className="contentpolish">
                <div className="noticontent">
                  <div
                    role="link"
                    href="#"
                    cursor="pointer"
                    className="contentinner f15"
                  >
                    <div className="notifcard">
                      <div className="contentinner">
                        <img class="ui avatar image" src={ade} />
                      </div>
                      <div className="mainnotifbox">
                        <h6 className="uppermeta">
                          <Link to={home}>
                            <a>User Test</a>
                          </Link>
                        </h6>
                        <div className="notiftext statement">
                          User Test upvoted your answer!
                        </div>
                      </div>
                      <div className="contentinner">
                        <span className="contentinner">
                          <div className="insidespan">
                            <div>
                              <div className="metaaction">
                                <div className="actionclick" cursor="pointer">
                                  <div className="metaicon">
                                    <div className="inmetaicon">
                                      <span className="inmetastyle">
                                        <svg
                                          width="24px"
                                          height="24px"
                                          viewBox="0 0 24 24"
                                        >
                                          <g
                                            id="overflow"
                                            className="svgstroke"
                                            strokeWidth="1.5"
                                            stroke="#666"
                                            fill="none"
                                            fillRule="evenodd"
                                          >
                                            <path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path>
                                          </g>
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
