import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function getUser() {
  let user = localStorage.getItem('user');

  if(user){
    user = JSON.parse(user);
  }else{
    user = null;
  }

  return user?.user;
}

const Home = () => {
  const [user,setUser] = useState(getUser());
  // console.log(user)

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <>
      {user?(
        <>
          <h4>Hello, {user.firstName} {user.lastName} </h4>
          <h5> {user.email} </h5>
          <button className='btn btn-secondary btn-md' onClick={handleLogout}>Logout</button>
        </>
      ):(
        <Link to="/login" className='btn btn-primary'> Login </Link>
      )}
      
    </>
  )
}

export default Home
