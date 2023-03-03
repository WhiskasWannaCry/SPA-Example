import React, { useState } from "react";
import './UserInfo.css'

const UserInfo = ({users,setUsers,authUser,setAuthUser}) => {
  

  return (
    <div className="user_info_container">
      <div className="user_image_container">
        <img className="user_image" alt="" src={authUser.image}></img>
      </div>
      <div className="user_info">
        <span className="user_name_surname">{authUser.surname ? authUser.name + " "+authUser.surname:authUser.name}</span>
      </div>
    </div>
  )
}

export default UserInfo;