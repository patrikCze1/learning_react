import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVideo } from '../../actions/musicActions'

function ListItem (props) {
    const { url, width, height } = props.result.snippet.thumbnails.default;
    const { channelTitle, publishedAt, title } = props.result.snippet
    const date = new Date(publishedAt);
    const publishedAtText = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const dispatch = useDispatch();

    return (
      <li
        className="collection-item avatar"
        onClick={() => dispatch(selectVideo(props.result.id.videoId))}
        style={{margin: 10}}
      >
        <img src={url} width={width} height={height} className="circle" />

        <span className="title"><b>{title}</b></span>
        <p style={{marginTop: 5}}>
          {channelTitle} <br />
          <span className='grey-text'>{publishedAtText}</span>
        </p>
      </li>
    );
}

export default ListItem;
