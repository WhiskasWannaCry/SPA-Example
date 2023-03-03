import React, { useState } from "react";
import "./LogAndReg.css"

const Login = ({users,setUsers,authUser,setAuthUser,re,inputEmail,setInputEmail,inputPass,setInputPass}) => {

  const logOutHandler = () => {
    return window.confirm("Вы действительно хотите выйти?") ? setAuthUser(users[0]) : null;
  }

  const logInHandler = () => {
    return document.getElementById('login_modal_background').style.display = "flex";
  }

  

  const hideLogInModal = () => {
    document.getElementById('login_modal_background').style.display = "none";
  }

  const userLogInValidation = () => {
    let userIdx = users.findIndex(user => user.email === inputEmail && user.password === inputPass)
    if(!re.test(String(inputEmail).toLowerCase())) {
      return alert("Entered e-mail is incorrect!")
    }
    if(!inputPass) {
      return alert("Entered pass is incorrect!")
    }
    if(userIdx != -1) {
      hideLogInModal()
      return setAuthUser(users[userIdx])
    }
    else {
      alert("User is not defined")
    }
  }

  return (
    authUser.id === -1? 
    <div>
      <button onClick={logInHandler} className="login_btn">Log-In</button>
      <div className="login_modal_background" id="login_modal_background">
            <div className="login_modal_container">
              <span className="modal_exit" onClick={hideLogInModal}>x</span>
              <span className="modal_title"><b>Please, enter Your email and password</b></span>
              <div className="modal_inputs">
                <span className="modal_inputs_name">E-mail*:</span>
                <input 
                  value={inputEmail}
                  onChange={e => setInputEmail(e.target.value)}
                  className="modal_input_email" 
                  placeholder="Enter Your email"></input>
                <span className="modal_inputs_name">Password*:</span>
                <input 
                  onChange={e => setInputPass(e.target.value)}
                  value={inputPass}
                  className="modal_input_password"
                  placeholder="Enter Your password"></input>
              </div>
              <button onClick={userLogInValidation} className="modal_login_btn"><b>Log In</b></button>
            </div>
          </div>
    </div> : <button onClick={logOutHandler} className="login_btn">Log-Out</button>
  )
}

export default Login;