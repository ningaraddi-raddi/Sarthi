import React from 'react'


function VehiclePanel(props) {
  return (
    <div>
        
        <h5 className='text-2xl p-5 text-center' onClick={()=>{
          props.setvehiclepanel(false)
        }
        }><i className='ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-3xl font-semibold'>Choose a Vehicle</h3>
         <div onClick={()=>{
            props.setconfirmRidePanel(true)
         }} className='w-[90%] p-1 justify-content my-5 flex border-4 active:border-black rounded-xl items-center justify-between'>
          <img className='h-14' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png'></img>
          <div className='mx-4 flex-1'>
            <h4 className='text-2xl font-medium'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='text-1xl font-medium'>2 mins away</h5>
            <p className=' font-medium'>Affordable, compact rides</p>
          </div >
          <h2 className='text-semibold text-2xl'>193.3</h2>
        </div> 
         
        <div  onClick={()=>{
            props.setconfirmRidePanel(true)
         }} className='w-[90%] p-1  my-5 flex border-2 active:border-black rounded-xl items-cente justify-between'>
          <img className='h-14' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png'></img>
          <div className='w-1/2'>
            <h4 className='text-2xl font-medium'>Uber Moto <sapn><i className='ri-user-3-fill'></i>4</sapn></h4>
            <h5 className='text-1xl font-medium'>2 mins away</h5>
            <p className='font-medium'>Affordable, compact rides</p>
          </div>
          <h2 className='text-semibold text-2xl'>193.3</h2>
        </div>
        <div  onClick={()=>{
            props.setconfirmRidePanel(true)
         }} className='w-[90%] p-1  my-5 flex border-2 active:border-black rounded-xl items-cente justify-between'>
          <img className='h-14' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'></img>
          <div className='w-1/2'>
            <h4 className='text-2xl font-medium'>Uber auto <sapn><i className='ri-user-3-fill'></i>4</sapn></h4>
            
            <h5 className='text-1xl font-medium'>2 mins away</h5>
            <p className='font-medium'>Affordable, compact rides</p>
          </div>
          <h2 className='text-semibold text-2xl'>193.3</h2>
        </div>
      </div>
    
  )
}

export default VehiclePanel