import React from 'react'
import Navbar from './Navbar'
import HomeImage from '../assets/image/homeImage.avif'
import Button from '../utils/Button'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {BsHeart} from 'react-icons/bs'
import {HiMenuAlt4} from 'react-icons/hi'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <div className='w-[100%] bg-[#d9d8c0] flex items-center justify-center p-2'>
            <p>Trained Aesop consultations are available to provide bespoke skin care advise. <b className='underline' >Book a video consultation</b> </p>
         </div>
        <div className='  flex items-center  p-2 bg-zinc-800'>
             <p className='text-white hover:underline cursor-pointer'>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400</p>
        </div>
        <Navbar/>
        
        <div
            style={{backgroundImage:`url(${HomeImage})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}
            className='relative w-full h-[80vh]   flex   pl-[2.5rem] pt-[6rem]  gap-32'
            >   
                <div className='sm:block hidden'>
                    <h1 className='text-white font-[400] text-[2rem] '>AESOP</h1>
                </div>
                <div className='space-y-4 sm:block hidden'>
                    <h1 className='text-white font-[500] text-[1rem]'>Doorways to the undiscovered</h1>
                    <h1 className='text-white font-[400] text-[2rem]'>Othertopias: a collection of <br /> unorthodox fragrances</h1>
                    <h1 className='text-white font-[500] text-[1rem]'>Step inside six fragrant worlds that transcend our <br /> immediate perception—vivid and distinctive.</h1>
                    <div className='flex border-2 py-4 px-4 w-[20rem] font-[500] justify-between items-center hover:border-none text-white hover:bg-gray-900 transition duration-300 ease-in-out ' >
                        Discover the fragnces
                        <AiOutlineArrowRight/>
                    </div>
                </div>
                <nav className=' sm:hidden flex  justify-between w-[90vw] item-center absolute top-[2%]   font-[500] px-2'>
                    <div>
                    <h1 className='text-white font-[400] text-[2rem] '>AESOP</h1>

                    </div>
                    <div className='flex space-x-4 justify-center item-center pt-4 '>
                    <Link><BiSearch size={25}   className='text-white' /> </Link>
                
                <Link><BsHeart size={25}   className='text-white' /> </Link>
                <Link className='text-white'>Cart </Link>
                
                <Link><HiMenuAlt4 size={25}   className='text-white' /> </Link>

                    </div>

            </nav>
        </div>
    </div>
  )
}

export default Hero