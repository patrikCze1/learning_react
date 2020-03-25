import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { url, width, height } = this.props.result.snippet.thumbnails.default;

    return (
      <div class="uk-card uk-card-default uk-card-body uk-card-hover uk-text-center"
      uk-tooltip={this.props.result.snippet.title}>
        <div
          onClick={this.props.selectVideo.bind(
            this,
            this.props.result.id.videoId
          )}
        >

          <img src={url} width={width} height={height} />
        </div>
      </div>
    );
  }
}

export default ListItem;
