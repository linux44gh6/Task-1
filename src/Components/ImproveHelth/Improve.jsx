import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
const Improve = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-40 bg-[#FFFFF5] gap-6 px-14 py-10 
        rounded-[32px]'>
            
            <div className=' w-full md:w-[499px] lg:w-[499px] '>
            <button className=' btn bg-[#FFFFF5] rounded-full px-14'>Service</button>
            <h1 className=' text-5xl font-font1 font-bold mt-2'>Empowering Health, Enriching Lives</h1>
            <p className='font-font1 mt-4'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
            </p>
            <button className=' btn bg-[#FFC637] mt-10'>Learn more <FiArrowUpRight></FiArrowUpRight></button>
          </div>
            
            <div>
               <div>
               <img className='rounded-[30px]' src="https://i.ibb.co/hBjn36p/Rectangle-27-2.png" alt="" />
               </div>
               <div className='-translate-y-36 translate-x-6 w-[312px] bg-[#020043] bg-opacity-50 text-white p-5 rounded-2xl absolute'>
                <h1 className=' text-2xl font-font1 font-bold'>Advanced Technology</h1>
               <span className=' flex items-end gap-4'>
               <p className=' font-font1 w-[219px] text-xs'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision </p>
               <FiArrowUpRight className=' text-5xl bg-accent rounded-full'></FiArrowUpRight>
               </span>
               </div>
            </div>
            <div>
               <div>
               <img className='rounded-[30px]' src="https://i.ibb.co/ZHvDYQB/Rectangle-27-1.png" alt="" />
               </div>
               <div className='-translate-y-36 translate-x-6 w-[312px] bg-[#020043] bg-opacity-50 text-white p-5 rounded-2xl absolute'>
                <h1 className=' text-2xl font-font1 font-bold'>Online Doctor Meet</h1>
               <span className=' flex items-end gap-4'>
               <p className=' font-font1 w-[219px] text-xs'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision </p>
               <FiArrowUpRight className=' text-5xl bg-accent rounded-full'></FiArrowUpRight>
               </span>
               </div>
            </div>
            <div>
               <div>
               <img className='rounded-[30px]' src="https://i.ibb.co/QkM28RW/Rectangle-27.png" alt="" />
               </div>
               <div className='-translate-y-36 translate-x-6 w-[312px] bg-[#020043] bg-opacity-50 text-white p-5 rounded-2xl absolute'>
                <h1 className=' text-2xl font-font1 font-bold'>Consultancy your health</h1>
               <span className=' flex items-end gap-4'>
               <p className=' font-font1 w-[219px] text-xs'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision </p>
               <FiArrowUpRight className=' text-5xl bg-accent rounded-full'></FiArrowUpRight>
               </span>
               </div>
            </div>
            
        </div>
    );
};

export default Improve;