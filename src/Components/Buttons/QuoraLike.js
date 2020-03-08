import React, { Component } from "react";

import "./QuoraLike.css";

class QuoraLike extends Component {
  render() {
    return this.props.trends.map(trend => (
      <div>
        <a class="submit_button">
          <a href="#" className="edit_link">
            {trend.text}
          </a>
        </a>
      </div>
    ));
  }
}

export default QuoraLike;
