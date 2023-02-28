import React, { useState } from "react";
import NewPost from "./AddNewPost";
import UserInfo from "./UserInfo";

const BodyContent = ({users,setUsers,loginedUser,setLoginedUser}) => {
  const [posts, setPosts] = useState([
    {
      id:0,
      title: "Hello! I'm post #1",
      text: "This is text for post #1",
    },
    {
      id:1,
      title: "Hello! I'm post #2",
      text: "This is text for post #2",
    },
    {
      id:2,
      title: "Hello! I'm post #3",
      text: "This is text for post #3",
    },
  ])
  return (
    <div className="body_content_container">
      <UserInfo
        users={users}
        setUsers={setUsers}
        loginedUser={loginedUser}
        setLoginedUser={setLoginedUser}
      ></UserInfo>
      <div className="posts_container">
        {loginedUser.id != -1 && <NewPost posts={posts} setPosts={setPosts}></NewPost>}
        <div className="posts">
          {posts.map(post => {
            return (
              <div className="post" key={post.id}>
                <h3 className="post_title">{post.title}</h3>
                <span className="post_text">{post.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BodyContent;