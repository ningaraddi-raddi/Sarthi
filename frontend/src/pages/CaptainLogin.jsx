import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userSignup from './UserSignup'

function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[captainData, setcaptainData] = useState({});

    const submitHandler =  (e) => {
    e.preventDefault();
    setcaptainData({
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

        <p className='text-centre mt-4'>jion a fleet <Link to='/captain-signup'className='text-blue-400'>Register in as Captain</Link></p>
        </form>
        </div>
        <div>
            
                 <Link 
                 to='/login'
                 
                 type="submit" className=' bg-orange-700 flex text-center justify-center 
                 bg-green-700 text-xl mb-2 mt-8 w-full bg-black text-white py-2 rounded mt-4'>Sign in as User</Link>
                
           
        </div>
    </div>
  )
}

export default UserLogin