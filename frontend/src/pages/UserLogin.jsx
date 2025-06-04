import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userSignup from './UserSignup'

function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[userData, setUserData] = useState({});

    const submitHandler =  (e) => {
    e.preventDefault();
    setUserData({
        email: email,
        password: password
    })
    console.log(userData)
    setEmail('');
    setPassword('');


    }
  return (
    <div className='p-7 flex flex-col justify-between'>
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>

        <img className='w-16 ml-2' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' alt='Uber Logo'/>

        <h3 className='text-xl mb-2 mt-8'>What's your email?</h3>
        <input type="email" required 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        
        placeholder='Enter your email' className='w-full p-2 border border-gray-300 rounded mt-2' />
        <h3 className='text-xl mb-2 mt-8'>Enter your password</h3>
        <input type="password" 
         value={password}
        onChange={(e)=> setPassword(e.target.value)}
        
        required placeholder='Enter your password' className='w-full p-2 border border-gray-300 rounded mt-2' />

        <button type="submit" className=' text-xl mb-2 mt-8 w-full bg-black text-white py-1.5 rounded mt-4'>Login</button>

        <p className='text-centre mt-4'>new here? <Link to='/signup'className='text-blue-400'>Create Account</Link></p>
        </form>
        </div>
        <div>
            
                 <Link 
                 to='/captain-login'
                 
                 type="submit" className=' flex text-center justify-center 
                 bg-green-700 text-xl mb-2 mt-8 w-full bg-black text-white py-2 rounded mt-4'>Sign in as Captain</Link>
                
           
        </div>
    </div>
  )
}

export default UserLogin