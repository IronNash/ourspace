import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  }, []);
  //realtime db connection

  return (
    <div className="feed">
      <MessageSender />
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postId={id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default Feed;
