import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar />
        <form>
          <input
            className="post__input"
            placeholder="A small post for mankind"
          />
          <input placeholder="image URL (Optional)" />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="post__bottom"></div>
    </div>
  );
}

export default Post;
