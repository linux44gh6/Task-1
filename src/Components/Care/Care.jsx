import React from 'react';
import chart from '../../assets/pichart.svg'
import contract from '../../assets/contract.svg'
import coin from '../../assets/coin.svg'
import Ellipse from '../../assets/Ellipse 5.svg'
import camera from '../../assets/camera.svg'
import star from '../../assets/fi-sr-star.svg'
const Care = () => {
    return (
        <div className=''>
            <h1 className=' text-center font-font1 text-2xl md:text-text-5xl lg:text-5xl w-full md:w-[532px] lg:w-[532px] mx-auto font-bold mt-10'>Comprehensive Care for Every Patient</h1>
           <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-5 lg:gap-5 lg:-mt-16'>
           <div className=' w-full md:w-[216px] lg:w-[216px] bg-color3 p-3 rounded-2xl border h-[312px] space-y-4'>
                <h1 className=' text-4xl font-font1 font-bold'>90%</h1>
                <p className=' font-font1 text[20px] w-[156px]'>Patient satisfaction rate, reflecting our commitment</p>
                <img className=' translate-x-10 w-32' src={chart} alt="" />
            </div>
            <div className='w-full md:w-[216px] lg:w-[216px] bg-color3 p-3 rounded-2xl border h-[190px] mt-3 md:mt-[121px] lg:mt-[121px] space-y-2'>
                <h1 className=' text-4xl font-font1 font-bold'>500+</h1>
                <p className='font-font1 w-[115px]'>Board-certified doctors</p>
                <img className=' translate-x-24 -translate-y-3' src={contract} alt="" />
            </div>
            <div className='w-full md:w-[216px] lg:w-[216px] bg-[#FBFBFB] p-3 rounded-2xl border h-[162px] mt-3 md:mt-[149px] lg:mt-[149px] space-y-2'>
                <h1 className='flex items-center gap-5 text-5xl font-bold '>4.8 <img className=' w-10' src={star} alt="" /></h1>
                <p className='font-font1'>Over 20,000 Patient</p>
                <div className='flex'>
                <img src={Ellipse} alt="" />
                <img src={Ellipse} alt="" />
                <img src={Ellipse} alt="" />
                <img src={Ellipse} alt="" />
                </div>
            </div>
            <div className='w-full md:w-[216px] lg:w-[216px] bg-color3 p-3 rounded-2xl border h-[190px] mt-3 md:mt-[121px] lg:mt-[121px] space-y-2'>
                <h1 className=' text-4xl font-font1 font-bold'>$5000</h1>
                <p className=' font-font1 w-[115px]'>Money spend
                for poor patient</p>
                <img className=' translate-x-20 -translate-y-2' src={coin} alt="" />
            </div>
            <div className='w-full md:w-[216px] lg:w-[216px] bg-color3 p-3 rounded-2xl border h-[316px] space-y-2'>
                <h1 className=' text-4xl font-font1 font-bold'>50+</h1>
                <p className=' font-font1 w-[156px]'>Free lession video 
                for patient</p>
                <img className=' translate-x-10 translate-y-9' src={camera} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Care;