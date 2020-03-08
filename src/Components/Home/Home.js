import React, { Component } from "react";
import QuoraLike from "../Buttons/QuoraLike";
import "./Home.css";
import "../Notifications.css"
import ade from "../.././assets/ade.jpg";
export class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeheader">
          <div>
            <div className="leftpane">
              <div>
                <div className="logo">
                  <div>
                        <img class="imgcls" src={ade} />                      
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header_content">
            <div className="prof_and_sig notificationcontainer">
              <div className="profile_f13">
                <div className="prof_init">
                  <h1>
                    <span>
                      <span>
                        <span className="org">Organization</span>
                     
                      </span>
                    </span>
                  </h1>
                </div>
                <div className="class_hidden"></div>
              </div>
              <div className="CredDiv">
                <span>
                  <span className="OrgCredential">
                    Organization Credentials{" "}
                  </span>
                  
                </span>
              </div>
            </div>
            <div className="aboutcontainer">
              <div>
                <div className="aboutdesc">
                  <div className="descriptor">
                    <div className="desriptor">
                      <span className="paragraphs descriptor">
                        <p>
                          about wfuh wifhwifu
                          whrfiuwfhiwufhwiufhweiufhweiufhweiufhweifuwhfiuwehf
                          fiuweh fiuwehfiuwehfiuwehf
                          wefiuwehfuwiefhweiufhweiufhkufhweiufwhefuwhefiuwhfiuwh
                          fweuihfweufhwiufhwiuefh weifuhwei fwh f
                        </p>
                      </span>
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

export default Home;
