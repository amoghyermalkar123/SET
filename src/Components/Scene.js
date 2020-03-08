import React, { Component } from "react";
import Matter from "matter-js";
import CommunityContainer from "./Community/CommunityContainer";
import "../Components/Notifications.css";

export class Scene extends Component {
  render() {
    return (
      <div>
        <div className="ui segment">
          <div className="sub toast-header">Your Communities</div>{" "}
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
                    <CommunityContainer />

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
export default Scene;
