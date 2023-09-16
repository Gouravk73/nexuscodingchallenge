import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import vid from '../assets/image/DecodingFragnace.mp4'
import ReactPlayer from 'react-player';

const DecodingFragnance = () => {
  return (
    <div className='flex   w-full h-screen  py-32'>
        <div className='md:w-[60%]'>
        <ReactPlayer
          url={vid} 
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width='100%'
          height='auto'
        />
        </div>
        <div className='flex flex-col space-y-4 px-20'>
            <h1 className='text-black font-[500] text-[1rem]'>The Athenaeum</h1>
            <h1 className='text-black font-[400] text-[2rem]'>Decoding fragrance</h1>
            <h1 className='text-black font-[400] text-[1rem]'>The language of notes, sillage and aromatic profiles <br /> allows us to describe perfume. Discover our guide to <br /> selecting a signature fragrance.</h1>
             
            <div className= 'text-black flex  py-4 px-4 w-[20rem] font-[500] justify-between border-[1px]  border-zinc-300 items-center  hover:text-orange-50 hover:bg-zinc-700 transition duration-300 ease-in-out ' >
                 Read More
                    <AiOutlineArrowRight/>
            </div>
        </div>
        
    </div>
  )
}

export default DecodingFragnance