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
            <h1 className=' text-center font-font1 text-5xl w-[532px] mx-auto font-bold mt-10'>Comprehensive Care for Every Patient</h1>
           <div className=' grid grid-cols-5 gap-5 -mt-16'>
           <div className='w-[216px] bg-color3 p-3 rounded-2xl border h-[312px]'>
                <h1 className=' text-4xl font-font1 font-bold'>90%</h1>
                <p className=' font-font1'>Patient satisfaction rate, reflecting our commitment</p>
                <img src={chart} alt="" />
            </div>
            <div className='w-[216px] bg-color3 p-3 rounded-2xl border h-[190px] mt-[121px]'>
                <h1>500+</h1>
                <p>Board-certified doctors</p>
                <img src={contract} alt="" />
            </div>
            <div className='w-[216px] bg-color3 p-3 rounded-2xl border h-[162px] mt-[149px]'>
                <h1 className='flex items-center gap-5'>4.8 <img className=' w-5' src={star} alt="" /></h1>
                <p>Over 20,000 Patient</p>
                <img src={Ellipse} alt="" />
            </div>
            <div className='w-[216px] bg-color3 p-3 rounded-2xl border h-[190px] mt-[121px]'>
                <h1>$5000</h1>
                <p>Money spend
                for poor patient</p>
                <img src={coin} alt="" />
            </div>
            <div className='w-[216px] bg-color3 p-3 rounded-2xl border h-[312px] '>
                <h1>50+</h1>
                <p>Free lession video 
                for patient</p>
                <img src={camera} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Care;