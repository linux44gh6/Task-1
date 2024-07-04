import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
const Solution = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-between mt-10 md:mt-40 lg:mt-40'>
          <div className=' w-full md:w-[499px] lg:w-[499px] '>
            <button className=' btn bg-[#FFFFF5] rounded-full px-14'>Who we are</button>
            <h1 className=' text-5xl font-font1 font-bold mt-2'>We Help To Get Soultions</h1>
            <p className='font-font1 mt-4'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
            </p>
            <button className=' btn bg-[#FFC637] mt-10'>Learn more <FiArrowUpRight></FiArrowUpRight></button>
          </div>
          <div>
           <div className=' relative'>
           <img className=' w-[518px] h-[315px]' src="https://i.ibb.co/Dk8kDHx/Rectangle-24.png" alt="" />
           </div>
            <div className=' w-full md:w-[380px] lg:w-[380px] bg-[#343268] text-white  px-4 py-10 rounded-2xl md:absolute lg:absolute md:-translate-y-28 lg:-translate-y-28 md:-translate-x-32 lg:-translate-x-32'>
                <h1 className=' font-font1 text-4xl'>Our mission is simple</h1>
                <p className='font-font1 w-[374px]'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
          </div>
        </div>
    );
};

export default Solution;