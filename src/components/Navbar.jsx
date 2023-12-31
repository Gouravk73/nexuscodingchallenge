import React from 'react'
import {Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
const Navbar = () => {
  return (
    <div className=' justify-between px-10 pt-[16px] pb-[24px] bg-transparent   sm:flex hidden '>
        <div className=''>
            <nav className=' lg:flex hidden   items-center space-x-4 font-[500]'>
                <Link >Skin Care </Link>
                <Link>Body & Hand </Link>
                <Link>Hair </Link>
                <Link>Fragrance   </Link>
                <Link>Home   </Link>
                <Link>Kit&Travel   </Link>
                <Link>Gifts   </Link>
                <Link>Read  </Link>
                <Link>Stores </Link>
                <Link>Facial Appointments </Link>
                <Link><BiSearch size={25}   className='text-gray-500' /> </Link>

            </nav>
            <nav className='lg:hidden sm:flex hidden    items-center space-x-4 font-[500]'>
                <Link >Skin Care </Link>
                <Link>Read  </Link>
                <Link>Stores </Link>
                <Link><BiSearch size={25}   className='text-gray-500' /> </Link>

            </nav>
        </div>
        <div>
            <nav className='space-x-4 font-[500]'>
            <Link>Log In </Link>
            <Link>Cabin </Link>
            <Link>Cart </Link>

            </nav>
        
        </div>
    </div>
  )
}

export default Navbar