import React, { useState } from "react";
import './Header.css';
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register";

const Header = ({users,setUsers,authUser,setAuthUser}) => {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const [inputEmail, setInputEmail] = useState("")
  const [inputPass, setInputPass] = useState("")

  return (
    <div className="header_container">
      <div className="logo_img">{"< Some Logo / >"}</div>
      <div className="log_and_reg_container">
        <Login
          users={users}
          setUsers={setUsers}
          authUser={authUser}
          setAuthUser={setAuthUser}
          re={re}
          inputEmail={inputEmail}
          setInputEmail={setInputEmail}
          inputPass={inputPass}
          setInputPass={setInputPass}></Login>
          {authUser.id === -1? 
          <Register 
            re={re}
            inputEmail={inputEmail}
            setInputEmail={setInputEmail}
            inputPass={inputPass}
            setInputPass={setInputPass}
            users={users}
            setUsers={setUsers}
            setAuthUser={setAuthUser}
            ></Register> : null}
      </div>
      
    </div>
  )
}

export default Header;