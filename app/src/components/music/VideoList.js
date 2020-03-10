import React, { Component } from "react";
import ListItem from "./ListItem";

class VideoList extends Component {
  render() {
    console.log(this.props.results);
    return this.props.results.map((result, index) => {
      return (
        <div>
          <ListItem
            key={index}
            result={result}
            selectVideo={this.props.selectVideo}
          />
        </div>
      );
    });
  }
}

export default VideoList;
