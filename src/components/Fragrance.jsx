import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Fragrance = () => {
  return (
    <div className='  h-screen   lg:flex'>
         <div>
            <h1 className='text-white font-[400] text-[2rem] '>AESOP</h1>
          </div>
              <div className='space-y-2'>
              <h1 className='text-black font-[500] text-[1rem]'>Fragrance</h1>
              <h1 className='text-black font-[400] text-[2rem]'>Our personal scents</h1>
              <h1 className='text-black font-[400] text-[1rem]'>Unorthodox, evocative, and refined, Aesop fragrances are sensory<br /> bridges to memory and connection points to those around us.</h1>
              <div className='flex items-center gap-1 cursor-pointer '>
              <h1 className='text-black font-[400] text-[1rem]'>See all Fragrance</h1>
              <AiOutlineArrowRight/>
            </div>
                     
          </div>
    </div>
  )
}

export default Fragrance