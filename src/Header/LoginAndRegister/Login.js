import React from "react";
import "./LogAndReg.css"

const Login = ({users,setUsers,loginedUser,setLoginedUser}) => {

  const logOutHandler = () => {
    return window.confirm("Вы действительно хотите выйти?") ? setLoginedUser(users[0]) : null;
  }

  const logInHandler = () => {
    return document.getElementById('login_modal_background').style.display = "flex";
  }

  return (
    loginedUser.id === -1? <button onClick={logInHandler} className="login_btn">Log-In</button> : <button onClick={logOutHandler} className="login_btn">Log-Out</button>
  )
}

export default Login;