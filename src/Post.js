import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function Post() {
  const [input, setInput] = useState("");
  const [imageUrl, setiImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // reseting state after submit
    setInput("");
    setiImageUrl("");
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="post__input"
            placeholder="A small post for mankind"
          />
          <input
            value={imageUrl}
            onChange={(e) => setiImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="post__bottom">
        <div className="post__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live VIdeo</h3>
        </div>
        <div className="post__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="post__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Status</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
