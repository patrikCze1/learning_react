import React, { Component } from "react";
import VideoList from "./VideoList";
import Loading from "../Loading";
import { connect } from "react-redux";
import { getVideos } from "../../actions/musicActions";

class MusicPlayer extends Component {
  componentDidMount() {
    this.props.getVideos();
    this.setState({isLoading: false});
  }

  render() {
    return (
      <div className="row" style={{marginTop: 10}}>
        {this.props.id ? (
          <div className="col s8" style={{marginTop: 7}}>
              <iframe
                id="player"
                type="text/html"
                src={`http://www.youtube.com/embed/${this.props.id}`}
                frameborder="0"
              ></iframe>
          </div>
        ) : (
          ""
        )}
        <div className={this.props.id ? "col s4" : "col"}>
          <VideoList
            results={this.props.videos}
            selectVideo={this.selectVideo}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { videos, id } = state.musicReducer;
  return { videos, id };
};

const mapDispatchToProps = dispatch => {
  return {
    getVideos: () => dispatch(getVideos()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
