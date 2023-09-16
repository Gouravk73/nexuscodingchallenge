import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='h-full bg-zinc-800 text-white flex lg:flex-row flex-col'  >
        
        
        <div className='lg:w-[40%]'>
          <div className='p-8'>
            <h1 className='py-4'>Subscribe to Aesop communications</h1>
            <div className="bg-white h-[1px] my-4 "></div>

            <div className='border my-2 flex justify-between px-2 items-center border-white '>
              <h1  className='py-2'>Email Address</h1>
              <AiOutlineArrowRight/>
            </div>
            <h1> Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <span className='underline'>privacy policy</span> .</h1>


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
            <div className='w-[45%] sm:w-[25%]' >
                <h1 className='font-[500]'>Orders and support</h1>
                <div className="bg-white h-[1px] my-4 "></div>

                <h1 className=' '> Contact us  </h1>
                <h1>  FAQs </h1>
                <h1> Shipping </h1> 
                <h1> Returns </h1> 
                <h1> Order history </h1>
                <h1> Terms and conditions </h1>
            </div>
            <div className='w-[45%] sm:w-[25%]   '>
                <h1 className='font-[500]'>Services  </h1>
                <div className="bg-white h-[1px] my-4 "></div>

                <h1>Live   assistance   </h1>    
                <h1>Corporate gifts </h1>    
                <h1>Facial  Appointments  </h1>    
                <h1>Click    and Collect  </h1>   
                <h1>Video   consultation  </h1>    
                
            </div>
            <div className='w-[45%] sm:w-[25%] '>
                <h1 className='font-[500]'>Location preferences  </h1>    
                <div className="bg-white h-[1px] my-4 "></div>

                <h1>Shipping  :</h1>    
                <h1>Hong   Kong SAR, China   </h1>    
                <h1>Language : </h1>
                <h1>English</h1>
                <h1>繁體中文  </h1>
            </div>
            <div className=' flex-col  sm:hidden  flex w-[45%]'>
            <h1 className='py-4'>Sustainability</h1>

            <div className="bg-white h-[1px]"></div>

              <h1 className='py-4 text-[0.9rem]  '>
                All Aesop products are vegan, and we do not test our formulations or  ingredients on <br /> animals. We are Leaping Bunny approved and a  Certified B Corporation. Learn more<br />
              </h1>
            </div>
            <div className='w-[45%] sm:w-[25%] '>
                <h1 className='font-[500]'>About</h1>
                <div className="bg-white h-[1px] my-4 "></div>

                <h1>Our story</h1> 
                <h1>Foundation</h1>
                <h1>Careers</h1>
                <h1>Privacy policy</h1> 
                <h1>Accessibility</h1>
                <h1>Cookie Policy</h1> 
                
            </div>
            <div className=' sm:w-[45%] hidden  '>
            <h1 className='font-[500]'>Social media</h1> 
            <div className="bg-white h-[1px] my-4 "></div>

                <h1>Instagram</h1> 
                <h1>Twitter</h1> 
                <h1>LinkedIn</h1> 
                <h1>WeChat</h1>
                <h1>Weibo</h1> 
            </div>
            
        </div>
    </div>
  )
}

export default Footer