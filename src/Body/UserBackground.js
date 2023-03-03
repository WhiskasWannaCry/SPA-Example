import React from "react";



const UserBackground = ({authUser}) => {
  return (
    <div className="user_background_container">
      <img className="user_background" alt="" src={authUser.background}></img>
    </div>
  )
}

export default UserBackground;