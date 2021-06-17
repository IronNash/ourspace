import React, { useState } from "react";
import "./Feed.css";
import Post from "./MessageSender";
import Wall from "./Wall";
import db from "./firebase";

function Feed() {
  //realtime db connection

  return (
    <div className="feed">
      <Post />
      <Wall
        profilePic="https://i.ytimg.com/vi/xxyJsDKTyHw/maxresdefault.jpg"
        message="mensagem pronta"
        timestamp="hora H"
        username="seu nome"
        image="https://i.ytimg.com/vi/xxyJsDKTyHw/maxresdefault.jpg"
      />
      <Wall />
      <Wall />
    </div>
  );
}

export default Feed;
