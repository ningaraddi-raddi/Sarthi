import React from 'react'

function ConfirmRide(props) {
    return (
        <div>
            <h5 className='text-2xl p-1 w-[93%] top-0  text-center' onClick={() => {
                props.setvehiclepanel(false)
            }
            }><i className='ri-arrow-down-wide-line'></i></h5>
            <h3 className=' w-[90%] text-3xl mb-5 font-semibold'>Confirm your Ride</h3>

            <div className='flex gap-3 justify-between flex-col items-center'>
                <img className='h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png'></img>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-3  p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-2-fill' />
                        <div>
                            <h3 className='text-lg font-medium'>123,A</h3>
                            <p className='text-lg font-semibold'>Maya Nagari,vijayapura</p>               </div>
                    </div>
                    <div  className='flex items-center gap-3 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-2-fill' />
                        <div>
                            <h3 className='text-lg font-medium'>123,A</h3>
                            <p className='text-lg font-semibold'>Maya Nagari,vijayapura</p>               </div>
                    </div>
                    <div  className='flex items-center gap-3 p-3 '>
                        <i className='ri-currency-line' />
                        <div>
                            <h3 className='text-lg font-medium'>₹192.3</h3>
                            <p className='text-lg font-semibold'>Cash</p>               </div>
                    </div>

                </div>
                <button onClick={()=>{
                    props.setVehicleFound(true)
                    props.setvehiclepanel(false)
                }} className='w-full mt-5 text-white p-2 bg-green-600 rounded-lg font-semibold'>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide