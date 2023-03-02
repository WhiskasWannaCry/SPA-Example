import React from "react";

const Comments = ({post}) => {
  return (
    <div className="post_comments_container">
      <div className="post_comments_data">
        {post.comments.map(comment => {
          return (
            <div className="post_comment">
              <span className="comment_author_name_image_and_date">
                <span className="comment_authon_image_container"><img className="comment_authon_image" src={comment.author.image} alt=""></img></span>
                  <span className="comment_authon_name">{comment.author.surname ? comment.author.name + " " + comment.author.surname:comment.author.name}</span>
              </span>
              <div className="comment_text">{comment.text}</div>
            </div>)})}
      </div>
    </div>
  )
}

export default Comments;