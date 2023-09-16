import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import img from '../assets/image/FacialAppointments.avif'
const FacialAppointments = () => {
  return (
    <div className='lg:flex space-y-4 py-16 pl-0 lg:pl-0 sm:pl-16 w-full h-full items-center'>
        <div className='md:w-[60%]'>
            <img src={img} alt="Skin Care" className='  ' />
        </div>
        <div className='flex flex-col space-y-4 px-2 sm:px-20'>
            <h1 className='text-black font-[500] text-[1rem]'>Facial Appointments</h1>
            <h1 className='text-black font-[400] text-[2rem]'>Composure for the skin and <br /> senses</h1>
            <h1 className='text-black font-[400] text-[1rem]'>For a well-rounded skin care regimen, Aesop Facial <br /> Appointments offer a series of treatments tailored to <br /> balance, stimulate and intensely nourish the skin.</h1>
            
            <div className= 'text-black flex  py-4 px-4 w-[20rem] font-[500] justify-between border-[1px]  border-zinc-300 items-center  hover:text-orange-50 hover:bg-zinc-700 transition duration-300 ease-in-out ' >
                Learn More
                    <AiOutlineArrowRight/>
            </div>
        </div>
    
</div>
  )
}

export default FacialAppointments