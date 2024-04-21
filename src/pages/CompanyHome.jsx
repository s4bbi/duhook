import React from 'react'
import BgImg from '../assets/Images/slider3.jpg'

const CompanyHome = () => {
  return (
    <div>
        <div className="absolute bg-slate-800 h-[185px] w-[430px] opacity-[0.7] text-white flex flex-col items-center justify-center">
            <h1 className='text-lg font-semibold '>Discover Your</h1>
            <h1 className="text-sky-600 underline text-lg font-semibold">Scientist</h1>
            <h1 className='text-lg font-semibold'>Knowledge</h1>
            <h1 className='text-md'>and stay connected with </h1>

            <button className="btn rounded-full w-24 sm:w-28 bg-sky-600 border-2 border-blue-500 text-white h-8 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg pb-2 mt-3 font-medium">Home</button>
        </div>
        <div>
           <img src={BgImg} alt="object-cover object-center h-[250px]"></img>
        </div>

        
    </div>
  )
}

export default CompanyHome