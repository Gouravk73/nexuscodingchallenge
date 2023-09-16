import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import img from '../assets/image/section1.jpg'
const StoreLocator = () => {
  return (
    <div className='flex   w-full h-screen  py-32'>
        <div className='flex flex-col space-y-4 px-20'>
            <h1 className='text-black font-[400] text-[2rem]'>Store Locator</h1>
            <h1 className='text-black font-[400] text-[1rem]'>Our consultants are available to host you in-store and <br /> provide tailored guidance on gift purchases.  <br />  </h1>
             
            <div className= 'text-black flex  py-4 px-4 w-[20rem] font-[500] justify-between border-[1px]  border-zinc-300 items-center  hover:text-orange-50 hover:bg-zinc-700 transition duration-300 ease-in-out ' >
                Find a nearby store
                <AiOutlineArrowRight/>
            </div>
        </div>
        <div className='md:w-[60%]'>
            <img src={img} alt="Skin Care" className='  ' />
        </div>
    </div>
  )
}

export default StoreLocator