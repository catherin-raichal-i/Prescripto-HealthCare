import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, error repellendus odit maxime fugit excepturi. Maiores ex consectetur quaerat velit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae labore recusandae fuga ab quisquam! Ad libero numquam hic reprehenderit asperiores?</p>

          <b className='text-gray-800'>Our vision</b>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, veritatis recusandae? Architecto, non incidunt ab adipisci beatae cupiditate magni ipsa.</p>
        </div>

      </div>

      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined Appointment Scheduling 
            That Fits Into Your Burry Lifestyle</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convience:</b>
          <p>Access To A Network Of Trusted 
            Healthcare Professionals in Your Area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored Recommendations And Reminders 
            To Help You Stay On Top Of Your Health.</p>
        </div>

      </div>


    </div>
  )
}

export default About