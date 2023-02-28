import React, { useState } from "react";

const NewPost = ({posts,setPosts}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [postId, setPostId] = useState(3)
  let newPosts = [];

  const addNewPost = () => {
    if(title) {
      setPostId(postId+1);
      newPosts = posts.slice();
      // newPosts.push({id:postId,title,text,})
      // setPosts(newPosts)
      
      console.log(newPosts)
    }
    else {
      alert("Заполните поле заголовка")
    }
  }

  return (
    <div className="add_new_post_container">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="title_for_post"
        placeholder="Название поста"></input>
        <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="text_for_post"
        placeholder="Описание поста"></input>
      <button 
        onClick={addNewPost}
        className="add_new_post_btn">Add</button>
    </div>
  )
}

export default NewPost;