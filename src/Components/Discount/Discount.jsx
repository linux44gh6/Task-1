import React from 'react';
import '../../CssFile/Discount.css'
import light from '../../assets/light.png'
import { FiArrowUpRight } from 'react-icons/fi';
const Discount = () => {
    return (
        <div className='discount h-[100vh] relative rounded-[32px] mt-40'>
            <div class=" z-10 absolute inset-0 bg-gradient-to-r from-[#020043] to-[#50507d] rounded-[32px] opacity-75 "></div>
            <img className='absolute z-20 left-[50%] md:left-[80%] lg:left-[80%] top-16' src={light} alt="" />
            <div className='z-20 absolute top-28 left-16 space-y-6'>
                <h1 className=' text-white text-2xl md:text-5xl lg:text-7xl lg:w-[530px] font-font1 font-bold'>Get Your
                    First Appointment
                    at 50% Off!</h1>
                <div className=' flex flex-col md:flex-row lg:flex-row gap-4'>
                    <button className=' btn bg-accent'>Appointment <FiArrowUpRight></FiArrowUpRight> </button>
                    <button className='btn bg-opacity-0 text-white'>Appointment <FiArrowUpRight></FiArrowUpRight></button>
                </div>
            </div>
        </div>
    );
};

export default Discount;