import React , {useState, useRef} from 'react'
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import data from '../assets/data/FragranceData'

const Fragrance = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      const newScrollPosition = scrollPosition + scrollOffset;
      setScrollPosition(newScrollPosition);
      scrollContainerRef.current.scrollTo({ left: newScrollPosition });
    }
 
  };
  return (
    <div className='flex flex-col  justify-center pt-16 '>
      <div className='space-y-2  w-[100%] block md:hidden pb-16 pl-4'>
              <h1 className='  text-black font-[500] text-[1rem]'>Fragrance</h1>
              <h1 className=' text-black font-[400] text-[2rem]'>Our personal scents</h1>
              <h1 className=' text-black font-[400] text-[1rem]'>Unorthodox, evocative, and refined, Aesop fragrances are sensory<br /> bridges to memory and connection points to those around us.</h1>
              <div className='flex  justify-center items-center gap-1 cursor-pointer '>
              <h1 className=' text-black font-[400] text-[1rem]'>See all Fragrance</h1>
              <AiOutlineArrowRight/>
            </div>
                     
          </div>
    <div className='flex items-center md:pl-16 h-[90vh] justify-center'>
      
      <div>
        {
            scrollPosition>0?<div
                    className="bg-zinc-800 p-8 text-white cursor-pointer"
                    onClick={() => handleScroll(-300)}>
                    <MdArrowBackIosNew size={20} />
                    </div>:<></>}
      </div>
      <div
        className="flex"
        ref={scrollContainerRef}
        style={{overflowX: 'hidden', position: 'relative',scrollBehavior: 'smooth'}}>
          
          <div className='space-y-2  w-[100%] md:block hidden'>
              <h1 className='text-black font-[500] text-[1rem]'>Fragrance</h1>
              <h1 className='text-black font-[400] text-[2rem]'>Our personal scents</h1>
              <h1 className='text-black font-[400] text-[1rem]'>Unorthodox, evocative, and refined, Aesop fragrances are sensory<br /> bridges to memory and connection points to those around us.</h1>
              <div className='flex items-center gap-1 cursor-pointer '>
              <h1 className='text-black font-[400] text-[1rem]'>See all Fragrance</h1>
              <AiOutlineArrowRight/>
            </div>
                     
          </div>
          <div className="flex  ">
                {data.map((item, index) => (
                  <div
                    className="flex flex-col items-center flex-shrink-0"
                    key={index}
                  >
                    <img
                      src={item.img}
                      alt="Fragrance"
                      className=' h-auto max-h-[300px] sm:max-h-[420px]  w-full object-cover'                     />
                    <p className="text-[0.8rem] sm:text-[1.3rem] font-semibold">{item.name}</p>
                    <p className="text-[0.8rem] sm:text-[1.1rem] pt-2">{item.title}</p>
                  </div>
                ))}
            </div>
        </div>

      <div>
        {scrollPosition > 2400 ?  <></>
         :<div
            className="bg-zinc-800 p-8 text-white cursor-pointer"
            onClick={() => handleScroll(300)}
          >
            <MdOutlineArrowForwardIos size={20} />
          </div>
        }
      </div>




  </div>
  </div>

  )
}

export default Fragrance