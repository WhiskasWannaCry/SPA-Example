import React, { useState } from "react";
import './UserInfo.css'

const UserInfo = ({users,setUsers,loginedUser,setLoginedUser}) => {
  

  return (
    <div className="user_info_container">
      <div className="user_image_container">
        <img className="user_image" alt="" src={loginedUser.image}></img>
      </div>
      <div className="user_info">
        <span className="user_name_surname">{loginedUser.surname ? loginedUser.name + " "+loginedUser.surname:loginedUser.name}</span>
      </div>
    </div>
  )
}

export default UserInfo;