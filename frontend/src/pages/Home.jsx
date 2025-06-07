import React, { use, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';

function Home() {
  const[pickup,setpickup]=useState('');
  const[destination,setdestination]=useState('');
  const[panelOpen,setpanelOpen]=useState(false)
  const[vehiclepanel,setvehiclepanel]=useState(false)
  const[confirmRidePanel,setconfirmRidePanel]=useState(false)
    const[VehicleFound,setVehicleFound]=useState(false)
    const[ waitingForDriver,setwaitingForDriver]=useState(false)


  const panelRef=useRef(null)
  const panelcloseRef=useRef(null)
  const vehiclepanelRef=useRef(null)
  const confirmRidePanelRef=useRef(null)
  const waitingForDriverRef=useRef(null)
    const VehicleFoundRef=useRef(null)


  const submitHandler=(e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%'
      })
      gsap.to(panelcloseRef.current,{
        opacity:1
      })

    }
    else{
        gsap.to(panelRef.current,{
        height:'0%'
      })
      gsap.to(panelcloseRef.current,{
        opacity:0
      })

    }

  },[panelOpen])


  useGSAP(function(){
    if(vehiclepanel){
      gsap.to(vehiclepanelRef.current,{
        transform:"translateY(0)"
      })}

    
      else{
        gsap.to(vehiclepanelRef.current,{
        transform:"translateY(100%)"
      })}

  },[vehiclepanel])


  useGSAP(function(){
    if(VehicleFound){
      gsap.to(VehicleFoundRef.current,{
        transform:"translateY(0)"
      })}

    
      else{
        gsap.to(VehicleFoundRef.current,{
        transform:"translateY(100%)"
      })}

  },[VehicleFound])


  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:"translateY(0)"
      })}

    
      else{
        gsap.to(confirmRidePanelRef.current,{
        transform:"translateY(100%)"
      })}

  },[confirmRidePanel])


   useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:"translateY(0)"
      })}

    
      else{
        gsap.to(waitingForDriverRef.current,{
        transform:"translateY(100%)"
      })}

  },[waitingForDriver])



  


  
 


  return (
    <div >
      <img className='w-20 absolute left-5 top-5 z-10' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' />

      {/* Background GIF */}
      <img
        className='absolute z-0 top-0 left-0 w-screen h-screen object-cover'
        src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
        alt='Background'
      />

      {/* Bottom Panel */}
      <div className='absolute flex flex-col justify-end h-screen top-0 w-full p-1.5 '>
        <div className='h-[30%] bg-white p-5 w-full  '>
          <h4 ref={panelcloseRef} onClick={()=>{
            setpanelOpen(false)
          }}  className='  right-4 opacity-0 top-3 text-2xl'>
            <i className='ri-arrow-down-wide-line'/> </h4>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <input
          onClick={()=>{
            setpanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setpickup(e.target.value)
          }}
            type="text"
            placeholder='Enter your pickup location'
            className='px-2 text-lg bg-[#eee] rounded-lg py-2 w-full mt-5 mb-4'
          />
          <input
          onClick={()=>{
            setpanelOpen(true)
          }}
           value={destination}
          onChange={(e)=>{
            setdestination(e.target.value)
          }}
            type="text"
            placeholder='Enter your destination'
            className='px-2 text-lg bg-[#eee] rounded-lg py-2 w-full mb-2'
          />
        </form>
        </div>
        <div ref={panelRef} className='h-[70%] bg-white '>
          <LocationPanel panelOpen={panelOpen} setpanelOpen={setpanelOpen} vehiclepanel={vehiclepanel} setvehiclepanel={setvehiclepanel}/>

        </div>
      </div>
      <div ref={vehiclepanelRef} className='fixed w-full z-5 translate-y-full bottom-0 px-3  py-6 pt-12 bg-white'>
        <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setvehiclepanel={setvehiclepanel} />
      </div>

       <div ref={confirmRidePanelRef} className='fixed w-full z-5 translate-y-full bottom-0 px-3 pt-12  py-6 bg-white'>
        <ConfirmRide setconfirmRidePanel={setconfirmRidePanel} setVehicleFound={setVehicleFound} setvehiclepanel={setvehiclepanel}/>
      </div>

      <div ref={VehicleFoundRef}  className='fixed w-full z-5 translate-y-full bottom-0 px-3 pt-12  py-6 bg-white'>
        <LookingForDriver setvehiclepanel={setvehiclepanel}/>
      </div>

      <div ref={waitingForDriverRef}  className='fixed w-full z-5 translate-y-full bottom-0 px-3 pt-12  py-6 bg-white'>
        <WaitForDriver setwaitingForDriver={setwaitingForDriver}/>
      </div>
    </div>
  );
}

export default Home;

