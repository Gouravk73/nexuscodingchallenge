import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Button = ({text}) => {
  return (
    <div className='flex border-2 py-4 px-4 w-[20rem] font-[500] justify-between items-center hover:border-none text-white hover:bg-gray-900 transition duration-300 ease-in-out ' >
        {text}
        <AiOutlineArrowRight/>
        </div>
  )
}

export default Button