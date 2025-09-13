
import Image from 'next/image'
import { assets } from '@/assets/assets';
import { useEffect, useRef, useState } from "react";
import React from 'react';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
   
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();
  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  
   const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
  
      if(scrollY > 50){
        setIsScroll(true)

      }else{
        setIsScroll(false)

      }

    })
  },[])
  
  
  return (
    <>
    <div className='fixed right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
      <nav className={`w-full fixed-top-0 px-3 lg:px-8 xl:px-[8%] py-5
      flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20" : ""} `}>
        <a href='#top'>
            <Image src={assets.logo} alt='' className='w-25 sm:w-20 md:w-22 lg:w-25 xl:w-25 ml-0 sm:ml-[-10px] md:ml-[-20px] cursor-pointer mr-5 sm:mr-8 md:mr-11 dark:invert '/> 
        </a>
        <ul className={`hidden md:flex items-center gap-4 lg:gap-6 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}  `}>
            <li><a href='#home'>Home</a></li>
            <li><a className='font-Ovo' href='#about'>About </a></li>
            <li><a className='font-Ovo' href='#services'>Courses</a></li>
            <li><a className='font-Ovo' href='#work'>Trainees-Team</a></li>
            <li><a className='font-Ovo' href='#contact'>Contact me </a></li>
            
        </ul>
        <div className='flex  items-center gap-4'> 

          <button onClick={()=> setIsDarkMode(prev => !prev)}>

            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
          </button>
            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10  border
            py-2.5 border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>   Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}  alt='' className= 'w-3'/> </a>
            
            <button className='black md:hidden ml-3'onClick={openMenu}>
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'></Image>
            </button>
        </div>

        {/* ------------------mobile menu --------*/}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 
        top-0 botton-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>
          
            <li><a href='#home'>Home</a></li>
            <li><a className='font-Ovo'onClick={closeMenu} href='#about'>About me</a></li>
            <li><a className='font-Ovo'onClick={closeMenu} href='#services'>Services</a></li>
            <li><a className='font-Ovo'onClick={closeMenu} href='#work'>My Work</a></li>
            <li><a className='font-Ovo'onClick={closeMenu} href='#contact'>Contact me </a></li>
        
        </ul>
      </nav>
    </>
  )
}

export default Navbar
