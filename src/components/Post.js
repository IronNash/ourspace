import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";
import ThumbupIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import db from "./firebase";
import firebase from "firebase";

function Post({ postId, profilePic, image, username, timestamp, message }) {
  const [{ user }, dispatch] = useStateValue();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [display, setDisplay] = useState("none");
  const [color, setColor] = useState("gray");
  const [thumb, setThumb] = useState("gray");
  const [isActive, setActive] = useState(false);
  const toggleLike = () => {
    setActive(!isActive);
  };
  
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  // function to create a new comment
  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      avatar: user.photoURL,
      username: user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  // function to create a new like
  const postLike = (event) => {
    setThumb("#2e3191");
    db.collection("posts").doc(postId).collection("likes").doc(user.uid).set({nome: user.displayName}
    );
  };

  // check if the like documents for this user exists, and changes the like button color
  var likeRef = db.collection("posts").doc(postId).collection("likes").doc(user.uid);
  likeRef.get().then((doc) => {
      if (doc.exists) {
          setThumb("#2e3191");
      } else {
          setThumb("gray");
      }
  }).catch((error) => {
    setThumb("gray");
  });

  // returns a rendered component
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
          style={{ color: thumb }}
          onClick={() => {
            postLike();
          }}
        >
          <ThumbupIcon />
          <p>Like</p>
        </div>
        <div
          className="post__buttons"
          style={{ color: color }}
          onClick={() => {
            setDisplay("flex");
            setColor("#2e3191");
          }}
        >
          <CommentIcon />
          <p>Comment</p>
        </div>
      </div>
      <div className="comment" style={{ display: display }}>
        <div className="comment__sender">
          <Avatar src={user.photoURL} />
          <form>
            <input
              className="comment__input"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Don't leave, a comment"
            />
            <button
              className="comment__button"
              disabled={!comment}
              onClick={postComment}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="comment__section">
          {comments.map((comment) => (
            <div className="comment__text">
              <Avatar className="comment__avatar" src={comment.avatar} />
              <p>
                <strong>{comment.username}</strong> {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
