//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";



// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log('PostPageprops', props)
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(p => (
        
<Post 
key={p.thumbnailUrl}
post={p}
/>
      ))}
    </div>
  );
};

export default PostsPage;

