import React, { useState } from "react";

let postId = 3;

const NewPost = ({authUser,posts,setPosts}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  // const [postId, setPostId] = useState(3)
  
  let newPosts = [];
  let img;

  const [files,setFiles] = useState([])
  const [drag, setDrag] = useState(false)
  const [drop, setDrop] = useState(false)
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
    setDrop(true)
    console.log(files)
  }

  const addNewPost = () => {
    const randomIdF = function(length = 6) { return Math.random().toString(36).substring(2, length+2); };
      let randomId = randomIdF()
    if(title) {
      
      const newPost = {id:randomId, date: new Date(), author: authUser,title,text,likes:0,comments:[]}
      if(img) {
        newPost.image = img;
      }
      else if(uploadImg) {
        newPost.image = uploadImg;
      }
      else if(img && uploadImg) {
        newPost.image = uploadImg;
      }
      else {
        newPost.image = null;
      }
      postId++;
      newPosts = posts.slice();
      newPosts.push(newPost)
      setPosts(newPosts)
      setTitle("")
      setText("")
      setDrop(false)
    }
    else {
      alert("Заполните поле заголовка")
    }
    setFiles([])
  }

  function downloadImage(e) {
    let file = e.target.files[0];
      if(file!=undefined){
      const reader= new FileReader();
      reader.onload=function(){
      img = this.result;
      };
      reader.readAsDataURL(file);
      }
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
                :<div className="loaded_container"
                  onDragStart={e => dragStartHandler(e)}
                  onDragLeave={e => dragLeaveHandler(e)}
                  onDragOver={e => dragStartHandler(e)}
                >{drop? files.map(file => <span className="loaded">{file.name}</span>): "Перетащите изображение, чтобы загрузить"}</div>}
        </div>
        <input type="file" onChange={e => downloadImage(e)}></input>
        <img alt="" id="testDataURL"></img>
      <button 
        onClick={addNewPost}
        className="add_new_post_btn">Add</button>
    </div>
    <div className="header_like_code_closed">{"< /AddNewPost >"}</div>
    </div>
    
  )
}

export default NewPost;