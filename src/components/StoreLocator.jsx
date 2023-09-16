import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import img from '../assets/image/section1.jpg'
import Carsoul from './Carsoul'

const StoreLocator = () => {
  return (
    <div className='lg:flex space-y-4  mt-[-3rem] pl-0 lg:pl-0 sm:pl-16 w-full h-full items-center justify-between'>
        <div className='flex flex-col space-y-4 px-2 sm:px-20'>
            <h1 className='text-black font-[400] text-[2rem]'>Store Locator</h1>
            <h1 className='text-black font-[400] text-[1rem]'>Our consultants are available to host you in-store and <br /> provide tailored guidance on gift purchases.  <br />  </h1>
             
            <div className= 'text-black flex  py-4 px-4 w-[20rem] font-[500] justify-between border-[1px]  border-zinc-300 items-center  hover:text-orange-50 hover:bg-zinc-700 transition duration-300 ease-in-out ' >
                Find a nearby store
                <AiOutlineArrowRight/>
            </div>
        </div>
        <div className='md:w-[50%] border-4'>
            <Carsoul/>        </div>
    </div>
  )
}

export default StoreLocator