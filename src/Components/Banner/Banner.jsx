import React from 'react';
import '../../CssFile/Banner.css'
const Banner = () => {
    return (
        <div className='banner h-[90vh] rounded-2xl mt-7 px-1 md:px-10 lg:px-10 relative'>
             <div class="absolute inset-0 bg-gradient-to-r from-[#00C19D00] to-[#02004378] rounded-2xl opacity-75 "></div>
        </div>
    );
};

export default Banner;