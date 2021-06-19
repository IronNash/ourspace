import React, { useState } from "react";
import { render } from "react-dom";
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";
import ThumbupIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";

function Post({ profilePic, image, username, timestamp, message }) {
  const [color, setColor] = useState("gray");
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div
          className="post__buttons"
          style={{ color: color }}
          onClick={() => {
            setColor("#2e3191");
          }}
        >
          <ThumbupIcon />
          <p>Like</p>
        </div>
        <div className="post__buttons">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__buttons">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
render(<Post />, document.getElementById("root"));
