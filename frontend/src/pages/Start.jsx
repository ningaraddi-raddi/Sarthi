import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://img.freepik.com/premium-vector/traffic-light-white-vector_869741-956.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16 ml-8' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' alt='Uber Logo'/>
        <div className='bg-white py-5 px-4'>
          <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          
          <Link to="/login" className='flex items-center w-full bg-black text-white py-3 rounded mt-2 justify-center'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Start
// 