import React, { Component } from "react";
import "../css/core.css";
import "../css/props.css";

// UI LIB imports
import { Card, CardBody } from "shards-react";
import { Container, Row, Col } from "shards-react";
import cogoToast from 'cogo-toast';

// Notes :
// define main layour here and
// map to components
// put these components specific to ecofeed in
// ecosystem components


export class EcoFeed extends Component {
  constructor(props){
    super(props);
    this.state = {isActivityBookmarked : false};
    this.bookmarkActivity = this.bookmarkActivity.bind(this);
  }
  bookmarkActivity(){
    this.setState(state =>({
      isActivityBookmarked: !state.isActivityBookmarked
    }));
    return cogoToast.success("Activity Bookmarked!");
  }
  
  render() {
    return (
      <Container fluid>
            <div className="ui feed">
              <div className="event">
                <div className="content">
                  <div className="ui card">
                    <div className="content">
                      <div className="right floated meta">14h</div>
                      <a className="header">Elliot </a>
                      <div className="meta">
                        <span className="ui teal sub header">Organization</span>
                        <span className="category">Tech</span>
                      </div>
                    </div>
                    <div className="content">

                    </div>
                    <div class="justified description">
                      Elliot Fu is a film-maker from New. wkfjwfkwhf wf wiuf
                      hwif hwif wefiuwhf wiufh wiuf hewiuf
                      hwefiuwheifuwhfiuwhfiuwehfiuwhfiwufhiuwehfiuwe
                    </div>
                    <div class="statistic">
                      <div class="value">
                        <i class="ui circular inline image users icon" />
                        42 Team Members
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="ui bottom attached button" onClick={this.bookmarkActivity}>
                        <i class="add icon"></i>
                        {this.state.isActivityBookmarked ? 'Activity Bookmarked' : 'Bookmark Activity'}
                      </div>
                      
                      <div class="ui segment large transparent left icon input image">
                        <i className="comments outline icon"></i>
                        <input type="text" placeholder="Add Comment..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </Container>
    );
  }
}

export default EcoFeed;

/**
 * default EcoFeed :
 * <div className="feed rel">
    </div>
 */
