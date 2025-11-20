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
          <p>Welcome to Prescripto, your reliable companion for effortlessly managing your healthcare needs. We recognize how challenging it can be to schedule doctor visits and keep track of health records, and our mission is to simplify that process.</p>
          <p>At Prescripto, we are dedicated to innovation in healthcare technology. We continually enhance our platform, incorporating the latest tools and features to provide a smooth, user-friendly experience. Whether you are booking your first appointment or monitoring ongoing care, Prescripto is here to guide and support you at every step.</p>
         
          <b className='text-gray-800'>Our vision</b>
          
          <p>At Prescripto, we aim to make healthcare simple, accessible, and personalized. We empower users to manage appointments, records, and care efficiently through an easy-to-use platform.</p>
        </div>

      </div>

      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Quick and seamless appointment scheduling 
            designed to fit your busy life.</p>
        
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convience:</b>
          <p>Instant access to a network of trusted 
            healthcare professionals near you.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-violet-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Smart recommendations and reminders to 
            help you manage your health effortlessly.</p>
        </div>

      </div>


    </div>
  )
}


export default About
