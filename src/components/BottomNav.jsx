import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuYoutube } from "react-icons/lu";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";


const BottomNav = () => {
  return (
    <div className='fixed bottom-0 z-50 h-16 w-full bg-black border-t border-slate-500 text-white'>
        <div className='flex justify-evenly'>
        
        <AiOutlineThunderbolt  className='w-8 h-14 text-sky-600 '/>
        <LuYoutube className='w-8 h-14 text-sky-600 '/>
        <IoBookSharp className='w-8 h-14 text-sky-600'/>
        <FaBloggerB className='w-8 h-14 text-sky-600'/>
        <MdGroups className='w-8 h-14 text-sky-600'/>
        <div className='py-3 hidden md:block'>
            <h1 className='text-md'>Followers :204</h1>
            <div className='flex gap-1 '>
            <IoStarSharp className='text-yellow-500 text-md'/>
            <IoStarSharp className='text-yellow-500 text-md'/>
            <IoStarSharp className='text-yellow-500 text-md'/>
            <IoStarSharp className='text-yellow-500 text-md'/>
            <IoStarSharp className='text-yellow-500 text-md'/>





            </div>
        </div>





       
        </div>
        </div>
  )
}

export default BottomNav