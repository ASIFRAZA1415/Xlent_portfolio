import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets';
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube, FaMapMarkerAlt,FaPhoneAlt, FaEnvelope } from "react-icons/fa";



const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      
      <div className='text-center '>
        <Image src={isDarkMode ? assets.logo : assets.logo} alt='' className= 'w-25 sm:w-20 md:w-23 lg:w-25 mx-auto mb-1 w-30 mx-auto mb-0.2 dark:invert '/>
        
        


         <section className="w-full py-12  dark:bg-gray-900 ">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          Contact Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-23 text-center sm:text-left">
          {/* Location */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <p className="text-gray-700 dark:text-gray-300 break-words whitespace-normal">
              Near Railway Crossing, Noniya Patti,
              <br />
              Padrauna, Kushinagar, UP
              <br />
              Pin: 274304
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <FaPhoneAlt className="text-green-500 text-2xl" />
            <a
              href="tel:+919876543210"
              className="text-gray-700 dark:text-gray-300 hover:underline"
            >
              +91 9120256550
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <a
              href="mailto:youremail@example.com"
              className="text-gray-700 dark:text-gray-300 hover:underline break-words"
            > isspokencentre@gmail.com
            </a>
          </div>
          

        </div>
        <div className="flex justify-center  ">
          <Image
           src={isDarkMode ? assets.lifetime : assets.lifetime}
           alt=""
           className="w-60 sm:w-50 md:w-55 lg:w-60 mb-1 dark:invert "
           />
           </div>
      </div>
    </section>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[8%] mt-12 py-6'>
        <p>© 2025  Md.Imamuddin. All rights reserved.</p>
        <p>Created by : Asif Hussain</p>
        
          <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0 text-2xl'>
  <li>
    <a href='https://www.instagram.com/isspokencentre?igsh=bmtsaHFmcXo0cXRy' target='_blank' rel="noopener noreferrer">
      <FaInstagram className='hover:text-pink-500 transition-colors duration-300' />
    </a>
  </li>
  <li>
    <a href='https://www.facebook.com/people/isspokencentre/61558746995466/?mibextid=ZbWKwL' target='_blank' rel="noopener noreferrer">
      <FaFacebook className='hover:text-blue-600 transition-colors duration-300' />
    </a>
  </li>
  <li>
    <a href='https://wa.me/+919120256550' target='_blank' rel="noopener noreferrer">
      <FaWhatsapp className='hover:text-green-500 transition-colors duration-300' />
    </a>
  </li>
  <li>
    <a href='https://www.youtube.com/@isspokenCentre' target='_blank' rel="noopener noreferrer">
      <FaYoutube className='hover:text-red-600 transition-colors duration-300' />
    </a>
  </li>
</ul>

      </div>
    </div>
  )
}

export default Footer