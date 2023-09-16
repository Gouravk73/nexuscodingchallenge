import React from 'react'
import {AiOutlineArrowRight,AiOutlineInstagram,AiOutlineTwitter,AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-zinc-800'>
      <div className='h-full  text-white flex lg:flex-row flex-col'  >
        
        
        <div className='lg:w-[40%]'>
          <div className='p-8'>
            <h1 className='py-4'>Subscribe to Aesop communications</h1>
            <div className="bg-white h-[1px] my-4 "></div>

            <div className='border my-2 flex justify-between px-2 items-center border-white '>
              <h1  className='py-2'>Email Address</h1>
              <AiOutlineArrowRight/>
            </div >
            <div className='flex justify-center items-start gap-1'>
            <input type="checkbox"   />
            <h1> Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <span className='underline'>privacy policy</span> .</h1>

            </div>

          </div>
            
            <div className=' flex-col lg:flex p-8 my-16 hidden'>
            <h1 className='py-4'>Sustainability</h1>

            <div className="bg-white h-[1px]"></div>

              <h1 className='py-4 text-[0.9rem]  '>
                All Aesop products are vegan, and we do not test our formulations or  ingredients on <br /> animals. We are Leaping Bunny approved and a  Certified B Corporation. Learn more<br />
              </h1>
            </div>
         </div>


        <div className='flex flex-wrap gap-16 px-2 sm:p-8 item-center   '>
            <div className='w-[40%] sm:w-[25%] ' >
                <h1 className='font-[500]'>Orders and support</h1>
                <div className="bg-white h-[1px] my-4 "></div>

                <h1 className=' py-1'> Contact us  </h1>
                <h1 className=' py-1'>  FAQs </h1>
                <h1 className=' py-1'> Shipping </h1> 
                <h1 className=' py-1'> Returns </h1> 
                <h1 className=' py-1'> Order history </h1>
                <h1 className=' py-1'> Terms and conditions </h1>
            </div>
            <div className='w-[40%] sm:w-[25%]   '>
                <h1 className='font-[500]'>Services  </h1>
                <div className="bg-white h-[1px] my-4 "></div>

                <h1 className=' py-1'>Live   assistance   </h1>    
                <h1 className=' py-1'>Corporate gifts </h1>    
                <h1 className=' py-1'>Facial  Appointments  </h1>    
                <h1 className=' py-1'>Click    and Collect  </h1>   
                <h1 className=' py-1'>Video   consultation  </h1>    
                
            </div>
            <div className='w-[40%] sm:w-[25%] '>
                <h1 className='font-[500]'>Location preferences  </h1>    
                <div className="bg-white h-[1px] my-4 "></div>

                <h1 className=' py-1'>Shipping  :</h1>    
                <h1 className=' py-1'>Hong   Kong SAR, China   </h1>    
                <h1 className=' py-1'>Language : </h1>
                <h1 className=' py-1'>English</h1>
                <h1 className=' py-1'>繁體中文  </h1>
            </div>
            <div className=' flex-col  sm:hidden  flex w-[40%]'>
            <h1 className='py-4'>Sustainability</h1>

            <div className="bg-white h-[1px]"></div>

              <h1 className='py-4 text-[0.9rem]  '>
                All Aesop products are vegan, and we do not test our formulations or  ingredients on <br /> animals. We are Leaping Bunny approved and a  Certified B Corporation. Learn more<br />
              </h1>
            </div>
            <div className='w-[40%] sm:w-[25%] '>
                <h1 className='font-[500]'>About</h1>
                <div className="bg-white h-[1px] my-4 "></div>

                <h1 className=' py-1'>Our story</h1> 
                <h1 className=' py-1'>Foundation</h1>
                <h1 className=' py-1'>Careers</h1>
                <h1 className=' py-1'>Privacy policy</h1> 
                <h1 className=' py-1'>Accessibility</h1>
                <h1 className=' py-1'>Cookie Policy</h1> 
                
            </div>
            <div className=' sm:w-[45%] hidden  '>
            <h1 className='font-[500]'>Social media</h1> 
            <div className="bg-white h-[1px] my-4 "></div>

                <h1 className=' py-1'>Instagram</h1> 
                <h1 className=' py-1'>Twitter</h1> 
                <h1 className=' py-1'>LinkedIn</h1> 
                <h1 className=' py-1'>WeChat</h1>
                <h1 className=' py-1'>Weibo</h1> 
            </div>
            
        </div>

        
    </div>
    <div className="bg-white h-[1px] my-4 "></div>

    <div className='flex justify-between items-center p-[0.8rem] text-white'>
          <h1 className='text-[1.1rem] text-white'>Aesop</h1>
          <div className='flex gap-2  md:hidden'>
            <AiOutlineInstagram size={35}/>
            <AiOutlineTwitter size={35}/>
            <AiFillLinkedin size={35}/>

          </div>

        </div>
    </div>
  )
}

export default Footer