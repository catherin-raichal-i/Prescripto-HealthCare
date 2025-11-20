import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>


            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* Left section */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>We provide compassionate, high-quality healthcare with experienced doctors and specialists. Our focus is on personalized care, advanced treatments, and the well-being of every patient.</p>
                </div>


                {/* Center section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>


                {/* Right section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Get Touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 98765 43210</li>
                        <li>prescripto@gmail.com</li>
                    </ul>
                </div>

            </div>

            {/* Copyright text */}

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024 &copy; Prescripto - All Right Reserved.</p>
            </div>
        </div>
    )
}


export default Footer

