import React from 'react'

function LocationPanel(props) {

    const location=[
        "24B,near kapoors cafe near residency coding school vijayapur",
        "24B,near kapoors cafe near residency coding school vijayapur",
        "24B,near kapoors cafe near residency coding school vijayapur",
        "24B,near kapoors cafe near residency coding school vijayapur"
    ]
  return (
    <div>

        {location.map(function(elem,idx){
            return <div  key={idx} onClick={()=>{
                props.setvehiclepanel(true)
                props.setpanelOpen(false)
            }} className='flex border-2 p-3 order-white active:border-black items-center my-4 justify-start'>
            <h2 className='h-10 w-10 flex items-center justify-center bg-[#eee]'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='text-lg font-medium '>{elem}</h4>
        </div>

        })}


        
    </div>
  )
}

export default LocationPanel