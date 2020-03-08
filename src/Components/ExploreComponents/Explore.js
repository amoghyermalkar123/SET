import React, { Component } from "react";
import "../.././css/core.css";
class Explore extends React.Component {
  render() {
    return (
      <div>
        <div className="ui feed">
          <div className="event">
            <div className="content">
              <div className="ui card ">
                <div className="sub toast-header">
                  <div className="meta">
                    Recommended Entity Name from an Ecosystem
                  </div>
                </div>
                <div className="content">
                  <div className="right floated meta">time</div>
                  <a className="header">Head Name </a>
                  <div className="meta">
                    <span className="ui teal sub header">Organization</span>
                    <span className="category">Industry Domain</span>
                  </div>
                  <div className="segment">
                    <div className="sub toast-header"></div>
                    <div className="ui sub meta header">Organization name here</div>
                    <p>About details here...</p>
                  </div>
                </div>
              </div>
              <div className="ui card ">
                <div className="sub toast-header">
                  <div className="meta">Recommended for you</div>
                </div>
                <div className="content">
                  <div className="right floated meta">Active 2h ago</div>
                  <a className="header">Ramu </a>
                  <div className="meta">
                    <span className="ui pink sub header">Incubator</span>
                    <span className="category">Tech</span>
                  </div>
                  <div className="segment">
                    <div className="sub toast-header"></div>
                    <div className="ui sub meta header">JMAA</div>
                    <p>About details here...</p>
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
export default Explore;

// important semantic classes
/**
 * ui compact message
 * sub toast-header
 *
 */
