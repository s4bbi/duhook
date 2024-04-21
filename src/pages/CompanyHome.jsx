import React, { useState, useEffect } from 'react';
import BgImg from '../assets/Images/slider3.jpg';
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { GiAerialSignal } from "react-icons/gi";
import { LuMic2 } from "react-icons/lu";
import { HiLightBulb } from "react-icons/hi";
import {avatar01} from "../assets/Images/avatar.jpg";
import {avatar02} from "../assets/Images/avatar2.jpg";


const CompanyHome = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const texts = ['Mathematics', 'Science', 'Engineering', 'Computer', 'Climate'];
  const time = 5000;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(texts[index] + (showCursor ? "|" : ""));
      setShowCursor(!showCursor);
      index = (index + 1) % texts.length;
    }, time);
    
    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <div className='bg-black w-full h-[100%] text-white'>
      <div className="absolute bg-slate-800 h-[182px] w-[430px] opacity-[0.7] text-white flex flex-col items-center justify-center">
        <h1 className='text-lg font-semibold '>Discover Your</h1>
        <h1 className="text-sky-600 underline text-lg font-semibold">Scientist</h1>
        <h1 className='text-lg font-semibold'>Knowledge</h1>
        <h1 className='text-md'>and stay connected with {text}</h1>
        
        <button className="btn rounded-full w-32 sm:w-28 bg-sky-600 border-2 border-blue-500 text-white h-8 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg pb-2 mt-2 font-medium">Join Free</button>
      </div>
      <div>
        <img src={BgImg} alt="object-cover object-center h-[250px]"></img>
      </div>
      <div className='pt-14 px-4 '>
        <div className='bg-white h-[150px] w-[395px] rounded-lg p-5'>
          <div className='flex'>
            <div className='h-12 bg-sky-600 w-24 m-2 p-2 rounded-md'>
            <IoMdCheckboxOutline className='h-8 w-6'/>
            </div>
            <div>
              <h1 className='text-lg font-medium text-black'>Learn from Industry Experts</h1>
              <h1 className='text-slate-400'>Share your reserach, collaborate with your peers and get the support you need to advance career</h1>
            </div>

          </div>

        </div>
        </div>

        <div className='pt-14 px-4'>
        <div className='bg-white h-[150px] w-[395px] rounded-lg p-5'>
        <div className='flex'>
            <div className='h-12 bg-sky-600 w-24 m-2 p-2 rounded-md'>
            <FaRegCirclePlay className='h-8 w-6'/>
            </div>
            <div>
              <h1 className='text-lg font-medium text-black'>Find video Courses of any topic</h1>
              <h1 className='text-slate-400'>Share your reserach, collaborate with your peers and get the support you need to advance career</h1>
            </div>

          </div>

          
        </div>
        </div>

        <div className='pt-14 px-4'>
        <div className='bg-white h-[150px] w-[395px] rounded-lg p-5'>
        <div className='flex'>
            <div className='h-12 bg-sky-600 w-24 m-2 p-2 rounded-md'>
            <FaRegClock className='h-8 w-6'/>
            </div>
            <div>
              <h1 className='text-lg font-medium text-black'>Go at your own pace</h1>
              <h1 className='text-slate-400'>Share your reserach, collaborate with your peers and get the support you need to advance career</h1>
            </div>

          </div>

          
        </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='py-5'>
            <div className='h-12 w-12 bg-sky-600 rounded-full'>
            <IoTicketOutline className='h-8 w-7 mx-2 my-2'/>
            </div>
            <h1 className='mx-2'>599</h1>
            <h1 className='text-slate-400 font-medium -ml-3'>Researchers</h1>
          </div>

          <div className='py-5'>
            <div className='h-12 w-12 bg-sky-600 rounded-full'>
            <HiMiniUsers className='h-8 w-7 mx-2 my-2'/>
            </div>
            <h1 className='mx-2'>299</h1>
            <h1 className='text-slate-400 font-medium -ml-3'>Registered user</h1>
          </div>

          <div className='py-5'>
            <div className='h-12 w-12 bg-sky-600 rounded-full'>
            <GiAerialSignal className='h-8 w-7 mx-2 my-2'/>
            </div>
            <h1 className='mx-2'>600</h1>
            <h1 className='text-slate-400 font-medium -ml-3'>Active People</h1>
          </div>

          <div className='py-5'>
            <div className='h-12 w-12 bg-sky-600 rounded-full'>
            <LuMic2 className='h-8 w-7 mx-2 my-2'/>
            </div>
            <h1 className='mx-2'>12</h1>
            <h1 className='text-slate-400 font-medium -ml-3'>Post Published</h1>
          </div>
          </div>
        <div className='pt-4 px-4'>
        <HiLightBulb className='w-14 h-12 text-sky-600'/>
        <h1 className='text-2xl'>Measure Your Scientific impact</h1>
        <h1 className='text-gray-400'>Get an depth stats on whole been reading your work and keep track of your citations</h1>
        </div>
        <div className='pt-14 px-4'>
          <img src={avatar01} className='w-10'></img>
          </div>
        <div className='pt-14 px-4'>
          <img src={avatar02} className=''></img>
          </div>





    </div>
  )
}

export default CompanyHome;
