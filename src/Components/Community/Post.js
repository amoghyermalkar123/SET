// IMPORTS
import "./Post.css";
import "./Actions.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

//THIRD PARTY IMPORTS

// CUSTOM COMPONENT IMPORTS

// COMPONENT START
export class Post extends Component {
  render() {
    return (
      <div>
        <div>
          {" "}
          {/*Main container starts here for a post */}
          <div>
            {" "}
            {/**starter div*/}
            <div className="wrapper">
              <div className="pointsContainer">
                {" "}
                {/*this division contains upvotes, downvotes and total points */}
                <div className="pointContent">
                  <button className="voteButton">
                    <span className="btnSpan">
                      <i className="arrow up icon"></i>
                    </span>
                  </button>
                  <div className="pointCount">
                    <a>8</a>
                  </div>
                  <button className="voteButton">
                    <span className="btnSpan">
                      <i className="arrow down icon"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                {" "}
                {/**Contains the entire post */}
                <div className="contentInContainer">
                  <div> {/**REDDIT LIKE LEFT SIDE MINI IMAGE  */}</div>
                  <div className="contentRightSpan">
                    {" "}
                    {/**THE ACTUAL POSTS CONTENT CARD */}
                    <div>
                      <div className="titleContainer">
                        <a className="title">
                          <div className="titleDiv">
                            <h3 className="heading">Shit Happened !</h3>
                          </div>
                        </a>
                      </div>
                    </div>{" "}
                    {/**TITLE OF POST */}
                    <div className="subHeaderContainer">
                      <div className="subHeader">
                        <div className="whoPosted">
                          <span className="amamamoasjia">
                            Posted By
                            <div className="LaksnasJDIWH">
                              <a>user name</a>{" "}
                              {/**make this into link that redirects to the account */}
                            </div>
                            <a>time</a>
                          </span>

                          <div>
                            <span className="amamamoasjia">tag</span>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/** SOME SUB HEDER INFORMATION*/}
                    <div className="ShitSpace"></div> {/**RANDOM SPACE   */}
                    <div className="actionsConatiner">

                    </div>{" "}
                    {/**ACTION SPACE : comment,share, save, etc */}
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

export default Post;

/**
 * INSIDE ACTION CONTAINER
                       <div className="actions">
                        <a className="commentsTag">
                          <i class="envelope icon iconofcomment">
                            <span className="MiadhodhHHU">Comment</span>
                          </i>
                        </a>
                        <div className="sharingTag">
                          <button className="MADHDjndnwididjwoJ">
                            <i class="iconofcomment">
                            <span className="skdnoHWI">Share</span>
                            </i>
                            
                          </button>
                        </div>
                        <div>
                        </div>
                      </div>
 */