import React, { useState } from "react";
import NewComment from "./AddNewComment";
import NewPost from "./AddNewPost";
import Comments from "./Comments";
import UserInfo from "./UserInfo";

import thirdPostImage from '../images/post_image1.jpg'
import secondPostImage from '../images/post_image2.jpg'

const BodyContent = ({users,setUsers,loginedUser,setLoginedUser}) => {
  const [posts, setPosts] = useState([
    {
      id:'sv9cl7',
      date: new Date(),
      author: users[1],
      title: "Hello! I'm post #1",
      text: "This is text for post #1",
      image: null,
      likes: 228,
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
        },
        {
          id:2,
          author: users[2],
          text: "This is AMAZING!!!",
        },
      ],
    },
    {
      id:'oznrua',
      date: new Date(),
      author: users[2],
      title: "Hello! I'm finished my To-Do list(React.js)!",
      text: "It's was easy",
      image: secondPostImage,
      likes: 1337,
      comments: [
        {
          id:0,
          author: users[1],
          text: "Good job, bro!!",
        },
        {
          id:1,
          author: users[0],
          text: "I can't write a comment, but..",
        },
      ],
    },
    {
      id:'tbjjfl',
      date: new Date(),
      author: users[1],
      title: "This is my post with image",
      text: "We can upload image to post!",
      image: thirdPostImage,
      likes: 314,
      comments: [
        {
          id:0,
          author: users[1],
          text: "Here you can write a comment",
        },
        {
          id:1,
          author: users[2],
          text: "Nice! ;)",
        },
      ],
    },
  ])

  const likePostHandler = (e) => {
    const postsCopy = posts.slice()
    const likeBtnId = e.target.id;
    const postId = postsCopy.findIndex(elem => elem.id === likeBtnId)
    postsCopy[postId].likes+=1;
    setPosts(postsCopy)
  }

  return (
    <div className="body_content_container">
      <div className="user_info_and_header">
      <div className="header_like_code">{"< UserInfo >"}</div>
      <UserInfo
        users={users}
        setUsers={setUsers}
        loginedUser={loginedUser}
        setLoginedUser={setLoginedUser}
      ></UserInfo>
      <div className="header_like_code_closed">{"< /UserInfo >"}</div>
      </div>
      
      <div className="posts_container">
        {loginedUser.id != -1 && <NewPost loginedUser={loginedUser} posts={posts} setPosts={setPosts}></NewPost>}
        <div className="posts">
          {posts.map(post => {
            return (
              <div className="post" key={post.id}>
                <span className="post_user_image_name_and_date">
                  <span className="post_user_image_container">
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
                  <div className="post_image_container">
                    {post.image && <img className="post_image" src={post.image} alt=""></img>}
                  </div>
                  <div className="post_likes_container">
                    <span className="post_likes_count">{post.likes}</span>
                    <img
                    id={post.id}
                    onClick={e => likePostHandler(e)}
                    className="post_likes_icon" 
                    src="https://cdn4.iconfinder.com/data/icons/minimal-set-eight/32/minimal-65-512.png" 
                    alt=""></img>
                  </div>
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