import './Body.css'
import React from "react";
import UserBackground from './UserBackground';
import BodyContent from './BodyContent';

const Body = ({users,setUsers,loginedUser,setLoginedUser}) => {
  return (
    <div className='body_container'>
      {loginedUser.background && <UserBackground loginedUser={loginedUser}></UserBackground>}
      <BodyContent
        users={users}
        setUsers={setUsers}
        loginedUser={loginedUser}
        setLoginedUser={setLoginedUser}
      ></BodyContent>
    </div>
  )
}

export default Body;