import React, { useState } from "react";

let postId = 3;

const NewPost = ({loginedUser,posts,setPosts}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  // const [postId, setPostId] = useState(3)
  
  let newPosts = [];

  const [files,setFiles] = useState([])
  const [drag, setDrag] = useState(false)
  let reader = new FileReader();
  let uploadImg;
    if(files[0]){
      reader.readAsDataURL(files[0])
    }
    reader.onloadend = () =>{
      uploadImg = reader.result
    }

  function dragStartHandler(e){
    e.preventDefault()
    setDrag(true)
  }
  function dragLeaveHandler(e){
    e.preventDefault()
    setDrag(false)
  }
  function onDropHandler(e){
    e.preventDefault()
    var loadedFiles = [...e.dataTransfer.files]
    setFiles([...loadedFiles])
    setDrag(false)
    console.log(files)
  }

  const addNewPost = () => {
    const randomIdF = function(length = 6) { return Math.random().toString(36).substring(2, length+2); };
      let randomId = randomIdF()
    if(title) {
      
      const newPost = {id:randomId, date: new Date(), author: loginedUser,title,text,likes:0,comments:[]}
      if(!uploadImg){
        uploadImg = "https://mizez.com/custom/mizez/img/general/no-image-available.png"
      }
      else {
        newPost.image = uploadImg;
      }
      postId++;
      newPosts = posts.slice();
      newPosts.push(newPost)
      setPosts(newPosts)
      setTitle("")
      setText("")
    }
    else {
      alert("Заполните поле заголовка")
    }
    setFiles([])
  }

  
  

  return (
    <div className="add_new_post_and_header">
      <div className="header_like_code">{"< AddNewPost >"}</div>
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
        {/* <input onDragStart={e => addFile(e)} className="add_post_image" name="file" type="file" id="file1" /> */}
        <div className="drop-area">
              {drag
                ?<div className='drop-active'
                  onDragStart={e => dragStartHandler(e)}
                  onDragLeave={e => dragLeaveHandler(e)}
                  onDragOver={e => dragStartHandler(e)}
                  onDrop={e => onDropHandler(e)}
                  >Отппустите изображение, чтобы загрузить</div>
                :<div
                  onDragStart={e => dragStartHandler(e)}
                  onDragLeave={e => dragLeaveHandler(e)}
                  onDragOver={e => dragStartHandler(e)}
                >Перетащите изображение, чтобы загрузить</div>}
        </div>
      <button 
        onClick={addNewPost}
        className="add_new_post_btn">Add</button>
    </div>
    <div className="header_like_code_closed">{"< /AddNewPost >"}</div>
    </div>
    
  )
}

export default NewPost;