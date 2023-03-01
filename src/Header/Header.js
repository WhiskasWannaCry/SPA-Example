import React, { useId, useState } from "react";
import './Header.css';
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register";

const Header = ({users,setUsers,loginedUser,setLoginedUser}) => {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const [inputEmail, setInputEmail] = useState("")
  const [inputPass, setInputPass] = useState("")

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
      return setLoginedUser(users[userIdx])
    }
    else {
      alert("User is not defined")
    }
  }

  return (
    <div className="header_container">
      <div className="logo_img">Some Logo</div>
      <div className="log_and_reg_container">
        <Login
          users={users}
          setUsers={setUsers}
          loginedUser={loginedUser}
          setLoginedUser={setLoginedUser}></Login>
          {loginedUser.id === -1? <Register></Register> : null}
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
                <span className="modal_warning">Incorrect E-mail</span>
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