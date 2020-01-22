// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comment, setComment] = useState(props.comments)
  console.log(`comment`,props)

  return (
    <div>
      {props.comments.map(p =>(
      <Comment
      comment={p}
      key={p.text}
      />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
