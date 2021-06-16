import React from "react";
import "./Wall.css";
import { Avatar } from "@material-ui/core";
import ThumbupIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";

function Wall({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="wall">
      <div className="wall__top">
        <Avatar src={profilePic} className="wall__avatar" />
        <div className="wall__topInfo">
          <h3>{username}</h3>
          <p>timestamp...</p>
        </div>
      </div>
      <div className="wall__bottom">
        <p>{message}</p>
      </div>
      <div className="wall__image">
        <img src={image} alt="" />
      </div>
      <div className="wall__options">
        <div className="wall__buttons">
          <ThumbupIcon />
          <p>Like</p>
        </div>
        <div className="wall__buttons">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="wall__buttons">
          <NearMeIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Wall;
