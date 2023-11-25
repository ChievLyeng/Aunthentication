import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Link to="/login" className='btn btn-primary'>
        Login
      </Link>
    </>
  )
}

export default Home
