
import blog01 from "../assets/Images/recentlink-1.jpg";
import blog02 from "../assets/Images/recentlink-2.jpg";
import blog03 from "../assets/Images/recentlink-3.jpg";
import Photos from "../assets/Images/image.png";
import liveStream from "../assets/Images/live-stream.png"
import Activity from "../assets/Images/activity.png";
import Story01 from "../assets/Images/story-card5.jpg";
import Story02 from "../assets/Images/story-card.jpg";
import Story03 from "../assets/Images/story-card3.jpg";
import Story04 from "../assets/Images/story-card2.jpg";
import Story05 from "../assets/Images/story-card4.jpg";
import Profile01 from "../assets/Images/user3.jpg";
import Profile02 from "../assets/Images/user6.jpg";
import Profile03 from "../assets/Images/user7.jpg";
import Profile04 from "../assets/Images/user.jpg";
import Profile05 from "../assets/Images/user8.jpg";
import Suggested from "../assets/Images/speak-1.jpg";








const Homepage = () => {
  return (
    <div className="w-full h-[100%] bg-black py-4 flex flex-wrap gap-4 items-center text-white ">
      <div className="sm:grid sm:grid-cols-3">
      <div className="flex flex-wrap flex-col ">
      <div className="bg-slate-900 w-[360px] h-[340px] rounded-md p-4  mx-auto sm:w-[300px] sm:h-[430px] sm:mx-2">
        <div className="flex justify-between"> 
        <h1 className="py-1 text-white font-semibold text-lg">Recent Blogs</h1>
        <h1 className="text-sky-600 py-2 font-semibold cursor-pointer">See All</h1>
        </div>
        <div className="flex gap-2 pb-3">
        <img src={blog01} className="rounded-md"/>
        <div>
          <h1 className="text-white text-lg">Moira's fade reach much farther...</h1>
          <h1 className="text-gray-500">2 weeks ago</h1>
        </div>
        </div>
        
        <div className="flex gap-2 pb-3">
        <img src={blog02} className="rounded-md"/>
        <div>
          <h1 className="text-white text-lg">Moira's fade reach much farther...</h1>
          <h1 className="text-gray-500">2 weeks ago</h1>
        </div>
        </div>
        <div className="flex gap-2">
        <img src={blog03} className="rounded-md"/>
        <div>
          <h1 className="text-white text-lg">Moira's fade reach much farther...</h1>
          <h1 className="text-gray-500">2 weeks ago</h1>
        </div>
        </div>
        </div>
        <div className="bg-slate-900 w-[360px] h-64 rounded-md p-4 sm:w-[300px] sm:h-72 sm:mx-2 mx-auto my-4">
        <div className="flex gap-2">
          <h1 className=" text-white font-semibold text-sm">Chat Rooms</h1>
          <h1 className="text-gray-500 text-xs pt-1">Video chat with friends</h1>
          <h1 className="text-sm text-sky-600 ">Create Room</h1>
          
          </div>
          <div className="bg-black w-[325px] h-44 mt-7 rounded-md py-2 sm:w-[270px]">
            <img src={Profile01} className="rounded-full mx-auto w-16 pt-2"></img>
            <h1 className="text-center mt-2 font-medium">Arman's Room</h1>
            <div className="flex gap-2">
            <button className="btn w-20 h-7 rounded-md bg-sky-600 text-white text-lg  ml-28 mt-3 cursor-pointer hover:bg-sky-700">Join</button>
            </div>
            </div>
          
      </div>
      




      </div>
        <div className="flex flex-wrap flex-col">
        <div className="flex gap-2 m-2 sm:w-[400px] sm:h-[50px] sm:ml-4 mx-auto">
          <button className="btn rounded-sm w-24 sm:w-28 bg-slate-950 text-sky-600 h-9 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg">Home</button>
          <button className="btn rounded-sm w-24 sm:w-28 bg-slate-950 text-sky-600 h-9 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg">Recent</button>
          <button className="btn rounded-sm w-24 sm:w-28 bg-slate-950 text-sky-600 h-9 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg">Favourite</button>
          </div>
          <div className="bg-slate-900 w-[360px] h-60 rounded-md p-4 sm:w-[420px] sm:-ml-2 mx-auto mt-3">
        <h1 className="p-2 text-white font-semibold text-xl">Create New Post</h1>
        <input placeholder="Create a New Post" className="bg-gray-700 w-80 rounded-3xl text-center h-10 my-4 p-2"></input>
        <div className="flex gap-4 m-3 ">
          <div className="flex gap-1 ">
          <img src={Photos}></img>
          <h1>Photos/Video</h1>
          </div>
          <div className="flex gap-1 ">
          <img src={Activity}></img>
          <h1>Feeling/Activity</h1>
          </div>

        </div>
        <div className="flex gap-1 mx-3">
          <img src={liveStream}></img>
          <h1>Live Stream</h1>
          </div>

        </div>
        <div className="sm:w-[480px] sm:h-[150px] sm:-mx-6 sm:-mb-2 mx-6">
      <div className="flex justify-between mx-6"> 
        <h1 className="py-1 text-white font-semibold text-lg sm:text-2xl sm:py-6">Recent Stories</h1>
        <h1 className="text-sky-600 py-2 font-semibold cursor-pointer border-b-sky-600 sm:mx-9 sm:text-xl sm:py-6">See All</h1>
        </div>
        <div className="flex gap-2 flex-wrap p-3 mx-2">
          <img src={Story01} className="h-36 sm:h-44  w-16 rounded-lg "></img>
          
          <div>
          <img src={Story02} className="h-36 sm:h-44  w-20 rounded-lg "></img>
          
          </div>
          <img src={Story03} className="h-36 sm:h-44  w-20 rounded-lg"></img>
          

          <img src={Story04} className="h-36 sm:h-44  w-20 rounded-lg"></img>
          
 
          <img src={Story05} className="h-36 sm:h-44  w-20 rounded-lg mx-auto sm:-mx-0"></img>
          </div>

      </div>
      <div className="bg-slate-900 w-[360px] h-60 rounded-md p-4 sm:mt-36 sm:w-[425px] sm:-ml-3 mx-auto mb-4">
      
        <h1 className="py-1 text-white font-semibold text-lg sm:text-2xl ">Suggested Group</h1>
        </div>



  


        </div>
        <div className="flex flex-wrap">
        <div className="bg-slate-900 w-[360px] h-72 rounded-md p-4 sm:w-[233px] sm:ml-24 sm:mb-0 mx-auto">
      <div className="flex gap-2">
        <div className="">
          <h1 className="text-sky-600 font-semibold text-lg">Suggested</h1>
          <h1 className="text-sm cursor-pointer text-gray-500">Follow Similar People</h1>
        </div> 
        </div>
        <img src={Suggested} className="w-20 border-sky-600 border m-auto mt-7 rounded-xl"></img>
        <h1 className="text-lg font-semibold text-center">Amy Watson</h1>
        <h1 className="text-sky-600 text-center">Department of Sociology</h1>
        <button className="btn w-20 h-7 rounded-3xl bg-sky-600 text-white text-lg  ml-32 mt-3 cursor-pointer hover:bg-sky-700 font-semibold sm:ml-14 sm:w-24">Follow</button>
        </div>
      
        <div className="bg-slate-900 w-[360px] h-60 rounded-md p-4 px-2 sm:w-[236px] sm:h-72 sm:ml-24 sm:mb-4 mx-auto my-4">
        <div className="flex justify-between ">
        <div className="flex gap-4 ">
        <img src={Profile01} className="w-14 rounded-full sm:rounded-md sm:w-14 sm:border"></img>
        <div>
        <h1 className=" text-sky-600 font-semibold text-lg ">Andrew <span className=" font-normal text-gray-400">Post Audio</span></h1>
        <h1 className="text-gray-400 font-semibold cursor-pointer text-md">Published:-Sep,15 2020 </h1>
        </div>
        
        </div>
      
        </div>
        <h1 className="w-[342px] pt-4 text-gray-500 sm:w-[240px]">Nam eget dui. Etiam rhoncus. Maecenas tempus , tellus eget condimentum rhoncus, sem quam semper libero.</h1>
        <div className="w-[328px] bg-black h-10 m-2 border-gray-600 border-b-2 sm:w-[203px]">
        


        </div>


          
        
        </div>
        <div className="bg-slate-900 w-[360px] h-72 rounded-md p-4  sm:w-[236px] sm:h-72 sm:ml-24 sm:mb-2 mx-auto">
      <div className=""> 
        <h1 className="py-1 text-white font-bold text-xl">Suggested Group</h1>
        <div className="py-3">
        <img src={blog03} className="w-80 h-20"></img>
        <div className="bg-black w-[325px] h-28 p-4 rounded-md sm:w-52 sm:p-1">
          <h1 className="sm:pt-2 sm:px-3 text-lg">Social Research</h1>
          <p className="text-gray-500 sm:px-3">@biolabest</p>
          <button className="btn w-20 h-7 rounded-3xl border-sky-600 border text-white text-lg  cursor-pointer hover:bg-sky-700 font-bold  sm:w-40 sm:ml-6 sm:mt-2">Follow</button>


        </div>


        </div>
        </div>

          
        
        </div>




        </div>


      </div>
        



















     

     
</div>
  )
}
export default Homepage