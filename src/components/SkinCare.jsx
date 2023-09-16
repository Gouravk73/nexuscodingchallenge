import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import img from '../assets/image/section1.jpg'
const SkinCare = () => {
  return (
    <div className='flex   w-full h-screen items-center'>
        <div className='flex flex-col space-y-4 px-20'>
            <h1 className='text-black font-[500] text-[1rem]'>Parsley Seed Skin Care</h1>
            <h1 className='text-black font-[400] text-[2rem]'>In warm or humid urban settings, <br /> skin is vulnerable to a range of <br /> environmental factors.</h1>
            <h1 className='text-black font-[400] text-[1rem]'>Pollution, air-conditioning and the stresses of city life can <br /> heighten skins susceptibility to free radical damage and <br /> dehydration. Anti-oxidant rich Parsley Seed formulations <br /> help to support skin against these effects.</h1>
             
            <div className= 'text-black flex  py-4 px-4 w-[20rem] font-[500] justify-between border-[1px]  border-zinc-300 items-center  hover:text-orange-50 hover:bg-zinc-700 transition duration-300 ease-in-out ' >
                Regimens for warm climates
                    <AiOutlineArrowRight/>
            </div>
        </div>
        <div className='md:w-[60%]'>
            <img src={img} alt="Skin Care" className='  ' />
        </div>
    </div>
  )
}

export default SkinCare