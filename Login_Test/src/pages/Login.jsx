import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { loginUser } from '../Store/UserSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {loading,error} = useSelector((state) => state.user);    

    console.log(loading,error)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        let userCredential = {
            email,password
        }
    dispatch(loginUser(userCredential)).then((result) => {
        console.log("payload :",result.payload)
        if(result.payload){
            setEmail('');
            setPassword('');
            navigate('/');
            console.log("success")
        }else{
            console.log("fail")
        }
    })
    }


  return (
    <form className="form-group custom-form" onSubmit={handleLogin}>
        <label >Email</label>
        <input 
            type="email" 
            required 
            className='form-control'
            value={email} onChange={(e) => setEmail(e.target.value)}
            />
        <br />
        <label>Password</label>
        <input 
        type="password" 
        required 
        className='form-control'
        value={password} onChange={(e) => setPassword(e.target.value)}
         />
        <br />

        <button className='btn btn-success btn-md' type='submit'>
            {loading? 'Loading...' : 'Login'}
        </button>
        <br /><br />
        <Link to="/" >
            <button className='btn btn-success' >
                BACK
            </button>
        </Link>

        {error && (
            <div className='alert alert-danger' role='alert'> {error} </div>
        )}
    </form>
  )
}

export default Login
