import React, { Component } from "react";
import "../css/props.css";
import { Link } from "react-router-dom";

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      nav: [
        {
          label: "Ecosystem Feed",  // req res
          slug: "/EcoFeed"
        },
        {
          label: "Explore",         // req res
          slug: "/Explore"
        },
        {
          label: "Your Communities",  // req res but realtime updates
          slug: "/Scene"
        },
        {
          label: "Notifications",   // realtime updates
          slug: "/Notifs"
        },
        {
          label: "Home",  // static 
          slug: "/Home"
        },
        {
          label: "Idea & Research", // NA ...not to be implemented now
          slug: "/IR"
        },
        {
          label: "Trend Analysis",  // ML engine ...pure push model
          slug: "/Statistics"
        }
      ]
    };
  }
  render() {
    var self = this,
      list = [];
    for (var i = 0; i < self.state.nav.length; i++) {
      list.push(
        <li key={"nav-" + self.state.nav[i].slug}>
          <Link to={self.state.nav[i].slug} className="noul bl fontb anim s15">
            <div className="ico ibl ">
              <i className="angle right icon"></i>
              {self.state.nav[i].label}
              </div>
          </Link>
        </li>
      );
    }
    return (
      <div class="sidebar rel">
        <ul className="nav">{list}</ul>
      </div>
    );
  }
}

export default SideBar;
