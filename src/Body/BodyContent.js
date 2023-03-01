import React, { useState } from "react";
import NewComment from "./AddNewComment";
import NewPost from "./AddNewPost";
import Comments from "./Comments";
import UserInfo from "./UserInfo";

const BodyContent = ({users,setUsers,loginedUser,setLoginedUser}) => {
  const [posts, setPosts] = useState([
    {
      id:0,
      date: new Date(),
      author: users[1],
      title: "Hello! I'm post #1",
      text: "This is text for post #1",
      comments: [
        {
          id:0,
          author: users[1],
          text: "Here you can write a comment",
        },
        {
          id:1,
          author: users[1],
          text: "What am I doing here?",
        }
      ],
    },
    {
      id:1,
      date: new Date(),
      author: users[1],
      title: "Hello! I'm post #2",
      text: "This is text for post #2",
      comments: [
        {
          id:0,
          author: users[1],
          text: "Here you can write a comment",
        },
        {
          id:1,
          author: users[1],
          text: "Here you can write a comment",
        },
        {
          id:2,
          author: users[1],
          text: "Here you can write a comment",
        },
        {
          id:3,
          author: users[1],
          text: "Here you can write a comment",
        },
      ],
    },
    {
      id:2,
      date: new Date(),
      author: users[1],
      title: "Hello! I'm post #3",
      text: "This is text for post #3",
      comments: [
        {
          id:0,
          author: users[1],
          text: "Here you can write a comment",
        },
      ],
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
        {loginedUser.id != -1 && <NewPost loginedUser={loginedUser} posts={posts} setPosts={setPosts}></NewPost>}
        <div className="posts">
          {posts.map(post => {
            return (
              <div className="post" key={post.id}>
                <span className="post_user_image_name_and_date">
                  <span className="post_user_image">
                    <img className="post_user_image" src={post.author.image} alt=""></img>
                  </span>
                  <span className="post_user_name">{post.author.name + " " + post.author.surname}</span>
                  <span className="post_date">{
                  `${post.date.getDate()<10? "0"+post.date.getDate(): post.date.getDate()}.
                  ${post.date.getMonth()<10? "0"+post.date.getMonth(): post.date.getMonth()}.
                  ${post.date.getFullYear()}`
                  }</span>
                </span>
                <div className="post_info">
                  <h3 className="post_title">{post.title}</h3>
                  <span className="post_text">{post.text}</span>
                  <div className="post_image"></div>
                  <Comments post={post}></Comments>
                  {loginedUser.id!=-1 && <NewComment loginedUser={loginedUser} post={post} posts={posts} setPosts={setPosts}></NewComment>}
                </div>
              </div>
            )
          }).sort((a, b) => a.id < b.id ? 1:-1)}
        </div>
      </div>
    </div>
  )
}

export default BodyContent;