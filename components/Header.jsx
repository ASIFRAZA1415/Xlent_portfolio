import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion" 


const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
    items-center jsutify-center gap-4 pt-12'>
      <motion.div 
      
       animate={{ boxShadow: [
    "0 0 0px rgba(168, 85, 247, 0.4)",
    "0 0 30px rgba(19, 138, 243, 0.8)",
    "0 0 0px rgba(201, 158, 242, 0.4)"
     ] }}
     transition={{ duration: 3, repeat: Infinity }}
     className="rounded-full p-[3px] bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400"
>
      <Image 
        src={assets.profile_img} 
        alt="profile" 
        className="rounded-full w-36 h-36 object-cover"
      />
    
      </motion.div>
       <motion.h3 
       initial={{y: -20,opacity: 0}}
       whileInView={{y: 0, opacity: 1}}
       transition={{duration: 0.6, delay: 0.3}} 
       className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Md.Imamuddin <Image src={assets.hand_icon} alt='' 
        className='w-8'/></motion.h3>

        <motion.h1 
        initial={{y: -30,opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Profession Educational Trainer
        </motion.h1>
        
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 '>
            <motion.a
            initial={{y: -30,opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
             href='#contact' 
            className='px-10 py-3 border border-white rounded-full bg-black text-white
            flex items-center gap-2  dark:bg-transparent'> 
            Contact me <Image src={assets.right_arrow_white} alt=''
            className='w-4'/></motion.a>

            <motion.a 
            initial={{y: -30,opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}

            href='/feestracture.pdf' download
            className=' px-10 py-3 border rounded-full border-gray-500 flex items-center
             gap-2 dark:bg-white  dark:text-black'> 
             Fee Stracture <Image src={assets.download_icon} alt='' 
            className='w-4 dark:text-white'/></motion.a>
        </div>
    </div>
  )
}

export default Header