import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'
import { useContext } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { useCaptainContext } from '../context/CaptainContext'; // ✅ use the named context
function CaptainSignup() {

    const navigate = useNavigate(); // ⬅️ should be outside the submit handler

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[FirstName, setFirstName] = useState('');
    const[LastName, setLastName] = useState('');
    const[userData, setUserData] = useState({});
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');


    const { captain, setCaptain } = useCaptainContext();


    // const[captain, setCaptain] =useContext(CaptainDataContext); // ✅ use the named context

    const submitHandler =  async(e) => {
    e.preventDefault();
    const captainData={
        email: email,
        password: password,
        fullname: {
            firstname: FirstName,
            lastname: LastName
        },
        vehicle:{
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType
        }    ,
        status: 'active',
        
        }
    
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if(response.status===201){

        const data=response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
    } else {
        console.error('Registration failed:', response.data);
    }
    // Clear form fields after submission
    // ✅ Clear form fields after successful submission
    // ✅ Clear form fields after successful submission

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');

    }

    
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
        <h3 className='text-xl mb-2 mt-8'>Vehicle Details</h3>

        <div className='flex gap-2 mb-4'>
          <input type="text" required 
            placeholder='Vehicle Color' 
            className='bg-gray-200 w-full p-2 border border-gray-300 rounded'
            value={vehicleColor}
            onChange={(e)=> setVehicleColor(e.target.value)}
          />
          <input type="text" required 
            placeholder='Vehicle Plate Number'
            className='bg-gray-200 w-full p-2 border border-gray-300 rounded'
            value={vehiclePlate}
            onChange={(e)=> setVehiclePlate(e.target.value)}
          />
        </div>

        <div className='flex gap-2'>
          <select 
            className='bg-gray-200 w-full p-2 border border-gray-300 rounded'
            value={vehicleType}
            onChange={(e)=> setVehicleType(e.target.value)}
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
          
          <input type="number" required 
            placeholder='Vehicle Capacity'
            className='bg-gray-200 w-full p-2 border border-gray-300 rounded'
            value={vehicleCapacity}
            onChange={(e)=> setVehicleCapacity(e.target.value)}
          />
        </div>

        <button type="submit" className=' text-xl mb-2 mt-8 w-full bg-black text-white py-3 rounded mt-4'>Create Captain Account</button>

        <p className='text-centre mt-4'>already have a Account? <Link to='/captain-login'className='text-blue-400'>Login</Link></p>
        </form>
        </div>
        <div>
            
        <p className='text-[15px] text-bold mt-20 mb-4'>By procedding ,you consent to get calls,Whatsapp or SMS message,including by automated means,from Uber and its affiliates to the number provided.</p>
                 
                
           
        </div>
    </div>
  )
}

export default CaptainSignup

