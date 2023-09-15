import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import img from '../assets/image/section1.jpg'
const SkinCare = () => {
  return (
    <div className='flex     justify-evenly'>
        <div className='space-y-4 px-20'>
            <h1 className='text-black font-[500] text-[1rem]'>Parsley Seed Skin Care</h1>
            <h1 className='text-black font-[400] text-[2rem]'>In warm or humid urban settings, <br /> skin is vulnerable to a range of <br /> environmental factors.</h1>
            <h1 className='text-black font-[400] text-[1rem]'>Pollution, air-conditioning and the stresses of city life can <br /> heighten skins susceptibility to free radical damage and <br /> dehydration. Anti-oxidant rich Parsley Seed formulations <br /> help to support skin against these effects.</h1>
             
            <div className= 'text-black flex border-2 py-4 px-4 w-[20rem] font-[500] justify-between items-center hover:border-none hover:text-orange-50 hover:bg-gray-900 transition duration-300 ease-in-out ' >
                Regimens for warm climates
                    <AiOutlineArrowRight/>
            </div>
        </div>
        <div className='flex  h-300px'>
            <img src={img} alt="Skin Care" className=' h-400px  ' />
        </div>
    </div>
  )
}

export default SkinCare