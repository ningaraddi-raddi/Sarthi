


import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext'; // ✅ use the named context

function UserSignup() {
  const navigate = useNavigate(); // ⬅️ should be outside the submit handler

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  const { user, setUser } = useContext(UserDataContext); // ✅ correct hook usage

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: FirstName,
        lastname: LastName
      },
      email,
      password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 201) {
        setUser(response.data.user);
         localStorage.setItem('token', response.data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  




  return (
    <div className='p-7 flex flex-col justify-between'>
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>

        <img className='w-16 ml-2' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' alt='Uber Logo'/>

        <h3>What's your Name</h3>
        <div className='flex gap-2'>
          


          <input type="text" required placeholder='First Name' 
          value={FirstName}
        onChange={(e)=> setFirstName(e.target.value)}
          className=' bg-gray-200 sw-full p-2 border border-gray-300 rounded mt-2' />
         

        <input type="text" required 
        
        
        
        placeholder='Last Name' 
        
        className=' bg-gray-200 w-full p-2 border border-gray-300 rounded mt-2'
        value={LastName}
        onChange={(e)=> setLastName(e.target.value)} />
        
        

        </div>

        <h3 className='text-xl mb-2 mt-8'>What's your email?</h3>
        <input type="email" required 
        
        
        placeholder='Enter your email' className='bg-gray-200 w-full p-2 border border-gray-300 rounded mt-2' 
         value={email}
        onChange={(e)=> setEmail(e.target.value)}/>

       
       
        <h3 className='text-xl mb-2 mt-8'>Enter your password</h3>
        <input type="password" 
        
        
        required placeholder='Enter your password' className=' bg-gray-200 w-full p-2 border border-gray-300 rounded mt-2' 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}/>
        

        <button type="submit" className=' text-xl mb-2 mt-8 w-full bg-black text-white py-3 rounded mt-4'>Create account</button>

        <p className='text-centre mt-4'>Already have a account? <Link to='/login'className='text-blue-400'>Login</Link></p>
        </form>
        </div>
        <div>
            
        <p className='text-[15px] text-bold mt-20 mb-4'>By procedding ,you consent to get calls,Whatsapp or SMS message,including by automated means,from Uber and its affiliates to the number provided.</p>
                 
                
           
        </div>
    </div>
  )
}

export default UserSignup;

