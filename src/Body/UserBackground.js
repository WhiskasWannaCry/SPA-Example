import React from "react";



const UserBackground = ({loginedUser}) => {
  return (
    <div className="user_background_container">
      <img className="user_background" alt="" src={loginedUser.background}></img>
    </div>
  )
}

export default UserBackground;