import React from 'react'
import Navbar from './Navbar'
import HomeImage from '../assets/image/homeImage.avif'
import Button from '../utils/Button'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <div
            style={{backgroundImage:`url(${HomeImage})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}
            className='w-full h-[80vh] object-cover flex   pl-[2.5rem] pt-[6rem]  gap-32'
            >   
                <div>
                    <h1 className='text-white font-[400] text-[2rem] '>AESOP</h1>
                </div>
                <div className='space-y-4'>
                    <h1 className='text-white font-[500] text-[1rem]'>Doorways to the undiscovered</h1>
                    <h1 className='text-white font-[400] text-[2rem]'>Othertopias: a collection of <br /> unorthodox fragrances</h1>
                    <h1 className='text-white font-[500] text-[1rem]'>Step inside six fragrant worlds that transcend our <br /> immediate perception—vivid and distinctive.</h1>
                    <div className='flex border-2 py-4 px-4 w-[20rem] font-[500] justify-between items-center hover:border-none text-white hover:bg-gray-900 transition duration-300 ease-in-out ' >
                        Discover the fragnces
                        <AiOutlineArrowRight/>
                    </div>
                </div>
                
        </div>
    </div>
  )
}

export default Hero