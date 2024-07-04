import React from 'react';
import img3 from '../../assets/Ellipse 5.svg'
import img1 from '../../assets/Ellipse 6.svg'
import img2 from '../../assets/Ellipse 7.svg'
import star from '../../assets/fi-sr-star.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../CssFile/styles.css';

import { Pagination } from 'swiper/modules';
const Review = () => {
    
    return (
        <div className='mt-40'>
            <button className=' btn bg-[#FFFFF5] rounded-full px-14'>Testimonial</button>
            <h1 className=' text-5xl font-font1 font-bold mt-4 mb-10'>What they say about us </h1>
            <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className=' space-y-1'>
                <h1 className=' text-3xl font-semibold font-font1'>Expertise and Compassion Combined</h1>
                <p className=' font-font1 text-xs'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                <div className='flex gap-2'>
                    <img className='w-12' src={img1} alt="" />
                    <span>
                        <h1 className=' font-semibold'>Sarah D,<span className='font-normal text-xs'>IT Professional</span></h1>
                        <span className='flex gap-1'>
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                        </span>
                    </span>
                </div>
                <div>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' space-y-1'>
                <h1 className=' text-3xl font-semibold font-font1'>Expertise and Compassion Combined</h1>
                <p className=' font-font1 text-xs'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                <div className='flex gap-2'>
                    <img className='w-12' src={img2} alt="" />
                    <span>
                        <h1 className=' font-semibold'>Michael R,<span className='font-normal text-xs'>Business Executive</span></h1>
                        <span className='flex gap-1'>
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                        </span>
                    </span>
                </div>
                <div>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' space-y-1'>
                <h1 className=' text-3xl font-semibold font-font1'>Expertise and Compassion Combined</h1>
                <p className=' font-font1 text-xs'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                <div className='flex gap-2'>
                    <img className='w-12' src={img3} alt="" />
                    <span>
                        <h1 className=' font-semibold'>David,<span className='font-normal text-xs'>Lawyer</span></h1>
                        <span className='flex gap-1'>
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                        </span>
                    </span>
                </div>
                <div>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' space-y-1'>
                <h1 className=' text-3xl font-semibold font-font1'>Expertise and Compassion Combined</h1>
                <p className=' font-font1 text-xs'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                <div className='flex gap-2'>
                    <img className='w-12' src={img3} alt="" />
                    <span>
                        <h1 className=' font-semibold'>David,<span className='font-normal text-xs'>Lawyer</span></h1>
                        <span className='flex gap-1'>
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                        </span>
                    </span>
                </div>
                <div>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' space-y-1'>
                <h1 className=' text-3xl font-semibold font-font1'>Expertise and Compassion Combined</h1>
                <p className=' font-font1 text-xs'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                <div className='flex gap-2'>
                    <img className='w-12' src={img3} alt="" />
                    <span>
                        <h1 className=' font-semibold'>David,<span className='font-normal text-xs'>Lawyer</span></h1>
                        <span className='flex gap-1'>
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                            <img className='w-[14px]' src={star} alt="" />
                        </span>
                    </span>
                </div>
                <div>

                </div>
            </div>
        </SwiperSlide>
       
        
      </Swiper>
            </div>
        </div>
    );
};

export default Review;