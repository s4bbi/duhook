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
import avatar01 from "../assets/Images/avatar.jpg";
import avatar02 from "../assets/Images/avatar2.jpg";
import { BiSolidNetworkChart } from "react-icons/bi";
import parallel from "../assets/Images/parallel.jpg";
import tvIcon from "../assets/Images/tv-icon.png";
import blog from "../assets/Images/blog.jpg";
import post from "../assets/Images/postby1.jpg";
import { GoHeartFill } from "react-icons/go";
import { IoIosMailOpen } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import logo from "/duhookLogo.png"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdOutlineShortText } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { IoLogoReddit } from "react-icons/io5"
import { FaRegPaperPlane } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { AiFillWindows } from "react-icons/ai";
import { FaApple } from "react-icons/fa";





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
    
      <div className="absolute bg-slate-800 h-[320px] sm:h-[500px] w-full bg-opacity-[0.7] text-white flex flex-col items-center justify-center">
        <h1 className='text-lg font-semibold sm:text-5xl '>Discover Your</h1>
        <h1 className="text-sky-600 underline text-lg font-semibold sm:text-5xl sm:my-2">Scientist</h1>
        <h1 className='text-lg font-semibold sm:text-5xl sm:my-2'>Knowledge</h1>
        <h1 className='text-md sm:text-3xl'>and stay connected with {text}</h1>
        
        <button className="btn rounded-full w-32  bg-sky-600 border-2 border-blue-500 text-white h-8 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg pb-2 mt-2 font-medium sm:w-36 sm:h-11 sm:text-lg sm:my-4">Join Free</button>
      </div>
      <div className='h-80 sm:h-[500px]'>
        <img src={BgImg} className='h-80 object-cover sm:h-[500px]' alt=""></img>
      </div>
      <div className='flex flex-col sm:flex-row sm:justify-center'>
      <div className='pt-14 px-4 '> 
        <div className='bg-white h-[150px] w-[395px] rounded-lg p-5 sm:w-[290px] sm:h-[200px] md:w-[405px] md:h-[150px]'>
          <div className='flex'>
            <div className='h-12 bg-sky-600 w-24 m-2 p-2 rounded-md'>
            <IoMdCheckboxOutline className='h-8 w-6'/>
            </div>
            <div>
              <h1 className='text-lg font-medium text-black'>Learn from Industry Experts</h1>
              <h1 className='text-slate-500'>Share your reserach, collaborate with your peers and get the support you need to advance career</h1>
            </div>

          </div>

        </div>
        </div>

        <div className='pt-14 px-4'>
        <div className='bg-white h-[150px] w-[395px] rounded-lg p-5 sm:w-[290px] sm:h-[200px] md:w-[405px] md:h-[150px]'>
        <div className='flex'>
            <div className='h-12 bg-sky-600 w-24 m-2 p-2 rounded-md'>
            <FaRegCirclePlay className='h-8 w-6'/>
            </div>
            <div>
              <h1 className='text-lg font-medium text-black'>Find video Courses of any topic</h1>
              <h1 className='text-slate-500'>Share your reserach, collaborate with your peers and get the support you need to advance career</h1>
            </div>

          </div>

          
        </div>
        </div>

        <div className='pt-14 px-4'>
        <div className='bg-white h-[150px] w-[395px] rounded-lg p-5 sm:w-[290px] sm:h-[200px] md:w-[405px] md:h-[150px]'>
        <div className='flex'>
            <div className='h-12 bg-sky-600 w-24 m-2 p-2 rounded-md'>
            <FaRegClock className='h-8 w-6'/>
            </div>
            <div>
              <h1 className='text-lg font-medium text-black'>Go at your own pace</h1>
              <h1 className='text-slate-500'>Share your reserach, collaborate with your peers and get the support you need to advance career</h1>
            </div>

          </div>

          
        </div>
        </div>


      </div>
        <div className='flex flex-col items-center sm:flex-row sm:justify-evenly sm:p-5'>
          <div className='py-5'>
            <div className='h-12 w-12 bg-sky-600 rounded-full sm:w-16 sm:h-16 sm:py-2'>
            <IoTicketOutline className='h-8 w-7 mx-2 my-2 sm:w-14 sm:h-10'/>
            </div>
            <h1 className='mx-2 sm:text-3xl sm:font-bold sm:py-3'>599</h1>
            <h1 className='text-slate-400 font-medium -ml-3 sm:text-xl'>Researchers</h1>
          </div>

          <div className='py-5'>
            <div className='h-12 w-12 bg-sky-600 rounded-full sm:w-16 sm:h-16 sm:py-2'>
            <HiMiniUsers className='h-8 w-7 mx-2 my-2 sm:w-14 sm:h-10'/>
            </div>
            <h1 className='mx-2 sm:text-3xl sm:font-bold sm:py-3'>299</h1>
            <h1 className='text-slate-400 font-medium -ml-3 sm:text-xl'>Registered user</h1>
          </div>

          <div className='py-5'>
            <div className='h-12 w-12 bg-sky-600 rounded-full sm:w-16 sm:h-16 sm:py-2'>
            <GiAerialSignal className='h-8 w-7 mx-2 my-2 sm:w-14 sm:h-10'/>
            </div>
            <h1 className='mx-2 sm:text-3xl sm:font-bold sm:py-3'>600</h1>
            <h1 className='text-slate-400 font-medium -ml-3 sm:text-xl'>Active People</h1>
          </div>

          <div className='py-5'>
            <div className='h-12 w-12 bg-sky-600 rounded-full sm:w-16 sm:h-16 sm:py-2'>
            <LuMic2 className='h-8 w-7 mx-2 my-2 sm:w-14 sm:h-10'/>
            </div>
            <h1 className='mx-2 sm:text-3xl sm:font-bold sm:pt-3'>12</h1>
            <h1 className='text-slate-400 font-medium -ml-3 sm:text-xl'>Post Published</h1>
          </div>
          </div>
          <div className='sm:flex sm:justify-'>
          <div className='pt-4 px-4'>
        <HiLightBulb className='w-14 h-14 text-sky-600 sm:w-24 sm:h-24'/>
        <h1 className='text-2xl sm:text-5xl sm:py-5'>Measure Your Scientific impact</h1>
        <h1 className='text-gray-400 sm:text-2xl'>Get an depth stats on whole been reading your work and keep track of your citations</h1>
        </div>
        <div>

        </div>
        <div className='pt-6 px-4 border-4 border-dotted pb-6 my-5 mx-5 border-sky-600 rounded-md'>
          <img src={avatar01} className='rounded-md sm:w-[450px] '></img>
          </div>
          </div>
          <div className='sm:flex sm:justify-between'>
          <div className='pt-6 px-4 border-4 border-dotted pb-6 mt-5 mx-5 border-sky-600 rounded-md '>
          <img src={avatar02} className='rounded-md sm:w-[600px]'></img>
        </div>
        <div>
        <div className='mt-4'>
          <BiSolidNetworkChart className='w-16 h-10 text-sky-600 sm:w-24 sm:h-24'/>
        </div>
        <h1 className='sm:text-5xl m-4 '>Connect with Your scientific Community</h1>
       
        <div className='flex flex-row flex-wrap gap-2 m-4 sm:py-4'>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Engineering</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Mathematics</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Biology</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Computer Science</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Climate</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Medicine</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Physics</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Sociology</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Chemistry</button>
          <button className='btn rounded-3xl border-sky-600 border-2 w-fit h-10 text-md px-4'>Astrology</button>
        </div>


        </div>


          </div>
        <div className='flex flex-col absolute justify-center bg-gray-900 h-[320px] sm:h-[500px] bg-opacity-[0.3] w-full items-center sm:my-10'>
            <img src={tvIcon} className='h-fit mx-auto sm:h-[110px]'></img>
            <h1 className='text-lg font-semibold sm:text-4xl sm:font-medium'>ADVANCE YOUR RESEARCH</h1>
            <h1 className="underline text-lg font-semibold sm:font-medium sm:text-2xl">Join our community of scientist</h1>
            <button className="btn rounded-full w-32 sm:w-40 sm:mt-4 sm:h-12 bg-sky-600 border-2 border-blue-500 text-white h-8 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg pb-2 mt-2 font-medium">Join Free Now</button>
        </div>
        <div className='sm:h-[500px] h-80 sm:my-10 '>
          <img src={parallel} className='sm:h-[500px] h-80 object-cover' alt="" />
        </div>
        <h1 className='text-center text-xl my-4 sm:text-5xl'>Recent Events</h1>
        <h1 className='text-slate-400 text-center sm:text-lg'>Our Recent News about the events</h1>
        <div className='pt-6 px-4 border-2 pb-6 mt-5 mx-5 border-white rounded-md '>
          <img src={blog} className='rounded-md sm:w-[930px] mx-auto'></img>
          <div className='flex gap-2 p-2 text-slate-400 md:justify-center'>
            <img src={post} className='rounded-full h-10 w-10 border '></img>
            <h1 className='text-lg sm:text-xl'>Saden joe </h1>
            <GoHeartFill className='w-10 h-6 sm:w-10 sm:h-8'/>
            <h1 className='text-lg sm:text-xl'>1.3k</h1>
          </div>
          <div className='flex gap-2 p-2 text-slate-400 md:justify-center'>
            <div className='w-12 sm:w-16 sm:h-14 sm:pt-5 bg-sky-600 text-center text-white rounded-md border-b-2 border-dotted'>06 Aug</div>
            <h1 className='text-sky-600 mt-2'>Oddo is coming to Dubai in 2020</h1>
          </div>
          </div>
        <div className='pt-14 px-4'>
        <div className='bg-white  w-[395px] rounded-lg p-5 mb-7 sm:w-full h-fit sm:p-10'>
          <div className='flex p-2 rounded-md text-black justify-center items-center sm:justify-center'>
            <IoIosMailOpen className='h-10 w-12 sm:w-20 sm:h-20'/>
            <h1 className='text-lg font-medium text-sky-600 sm:font-bold sm:tetx-xl'>Our Newsletter</h1>
          </div>
          <div className='px-5 flex items-center gap-2 sm:justify-center'>
            <input placeholder='Email @' className='w-72 sm:w-96 h-10 rounded-2xl px-3 text-black bg-gray-100 border border-black '></input>
            <FaPaperPlane className='text-sky-600 w-7 h-7'/>
          </div>

          
        </div>
        </div>
        <div className='bg-slate-900 h-full w-full border-t border-slate-5  p-4 text-white sm:mt-14'>
        <div className="items-center sm:grid sm:grid-cols-4 sm:text-lg">
          <div>
          <img src={logo} alt="Logo" className="w-28 sm:w-20 "/>
            <h1 className='pt-3 text-gray-400'>Subscribe our newsletter for getting notificationa and alerts</h1>
            <div className='flex gap-3'>
              <div>
              <FaPhoneSquareAlt className='border rounded-full my-3 w-5 h-5'/>
              <IoIosMail className='w-6 h-7 my-2'/>
              </div>
              <div>
              <h1 className='my-2'>+1-235-099-34</h1>
              <h1>info@akedmic.com</h1>
              </div>
              </div>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>Company</h1>
              <MdOutlineShortText className='text-sky-600 w-24 h-24 -mt-8 -ml-4'/>
              <ol className='list-disc mx-4 -mt-5'>
                <li>About us</li>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ol>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>Company</h1>
              <MdOutlineShortText className='text-sky-600 w-24 h-24 -mt-8 -ml-4'/>
              <ol className='list-disc mx-4 -mt-5'>
                <li>Product</li>
                <li>Market</li>
                <li>Courses</li>
                <li>Services</li>
                <li>Enterprise</li>
                <li>Sitemap</li>
              </ol>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>Follow Us</h1>
              <MdOutlineShortText className='text-sky-600 w-24 h-24 -mt-8 -ml-4'/>
              <ol className='list-disc mx-4 -mt-5'>
                <li><span className='flex items-center gap-2'> <FaFacebookF /><span>Facebook</span> </span></li>
                <li><span className='flex items-center gap-2'> <CiTwitter /><span>Twitter</span> </span></li>
                <li><span className='flex items-center gap-2'> <FaInstagram /><span>Instagram</span> </span></li>
                <li><span className='flex items-center gap-2'> <FaGooglePlusG /><span>Google+</span> </span></li>
                <li><span className='flex items-center gap-2'> <SiWhatsapp /><span>Whatsapp</span> </span></li>
                <li><span className='flex items-center gap-2'> <IoLogoReddit /><span>Reddit</span> </span></li>
              </ol>
              </div>
              <div className='sm:flex sm:justify-center sm:flex-col sm:items-center'>
              <h1 className='text-2xl font-semibold my-2'>Newletter</h1>
              <MdOutlineShortText className='text-sky-600 w-24 h-24 -mt-10 -ml-4'/>
              <div className='px-5 flex items-center gap-2'>
            <input placeholder='Email address' className='w-full h-10 rounded-2xl px-3 text-black bg-gray-800'></input>
            <FaPaperPlane className='text-sky-600 w-7 h-7'/>
          </div>
          <h1 className='text-wrap'>it is a long estalished fact that a reader will be distracted by.</h1>
          <h1 className='my-2 text-lg font-semibold'>Download App</h1>
          <div className='flex gap-3 my-1'>
          <IoLogoAndroid className='text-green-600 w-8 h-6'/>
          <FaApple className='w-5 h-5 text-gray-400'/>
          <AiFillWindows className='w-5 h-5'/>
          </div>

          
          


          </div>




        </div>


        </div>
        </div>
  )
}

export default CompanyHome;
