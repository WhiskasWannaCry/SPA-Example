import './Body.css'
import React from "react";
import UserBackground from './UserBackground';
import BodyContent from './BodyContent';

const Body = ({users,setUsers,authUser,setAuthUser}) => {
  return (
    <div className='body_container'>
      {authUser.background && <UserBackground authUser={authUser}></UserBackground>}
      <BodyContent
        users={users}
        setUsers={setUsers}
        authUser={authUser}
        setAuthUser={setAuthUser}
      ></BodyContent>
    </div>
  )
}

export default Body;