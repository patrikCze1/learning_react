import React from "react";
import ListItem from "./ListItem";

function VideoList(props) {
  return (
    <ul className="collection">
      {props.results.map((result, index) => (
        <ListItem key={index} result={result} selectVideo={props.selectVideo} />
      ))}
    </ul>
  );
}

export default VideoList;
