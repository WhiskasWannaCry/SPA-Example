import React, { useState } from "react";

const NewComment = ({loginedUser,post, posts, setPosts}) => {
  const [commentText, setCommentText] = useState("")
  const addNewCommentHandler = (e) => {
    let postsCopy = posts.slice()
    const buttonId = Number(e.target.id)
    const postId = postsCopy.findIndex(elem => elem.id === buttonId)
    if(postId!= -1 && commentText) {
      postsCopy[postId].comments.push({id: postsCopy[postId].comments.length||1, author: loginedUser, text: commentText,})
      setCommentText('')
      setPosts(postsCopy)
      console.log(posts)
    }
    
  }
  return (
    <div className="add_new_comment_container">
      <input 
      onChange={e => setCommentText(e.target.value)}
      value={commentText}
      className="comment_text_input" 
      placeholder="What do you want to say?"></input>
      <button id={post.id} onClick={e => addNewCommentHandler(e)} className="comment_add_btn">Add</button>
    </div>
  )
}

export default NewComment;