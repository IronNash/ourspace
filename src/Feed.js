import React, { useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  //realtime db connection

  return (
    <div className="feed">
      <MessageSender />
      <Post
        profilePic="https://i.ytimg.com/vi/xxyJsDKTyHw/maxresdefault.jpg"
        message="mensagem pronta"
        timestamp="hora H"
        username="seu nome"
        image="https://i.ytimg.com/vi/xxyJsDKTyHw/maxresdefault.jpg"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
