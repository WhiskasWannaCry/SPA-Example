import React, { useState } from "react";
import './Header.css';
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register";

const Header = ({users,setUsers,loginedUser,setLoginedUser}) => {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const [inputEmail, setInputEmail] = useState("")
  const [inputPass, setInputPass] = useState("")

  const userLogInValidation = () => {
    if(!re.test(String(inputEmail).toLowerCase())) {
      alert("Entered e-mail is incorrect!")
    }
    if(!inputPass) {
      alert("Entered pass is incorrect!")
    }
  }

  const hideLogInModal = () => {
    document.getElementById('login_modal_background').style.display = "none";
  }

  return (
    <div className="header_container">
      <img className="logo_img" alt=""></img>
      <div className="log_and_reg_container">
        <Login
          users={users}
          setUsers={setUsers}
          loginedUser={loginedUser}
          setLoginedUser={setLoginedUser}></Login>
          <Register></Register>
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
      </div>
      
    </div>
  )
}

export default Header;