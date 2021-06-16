import React from "react";
import "./Feed.css";
import Post from "./Post";
import Wall from "./Wall";

function Feed() {
  return (
    <div className="feed">
      <Post />
      <Wall
        profilePic="https://i.ytimg.com/vi/xxyJsDKTyHw/maxresdefault.jpg"
        message="vai da bom"
        timestamp="hora H"
        username="sua mãe"
        image="https://i.ytimg.com/vi/xxyJsDKTyHw/maxresdefault.jpg"
      />
      <Wall />
      <Wall />
    </div>
  );
}

export default Feed;
