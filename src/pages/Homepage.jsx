
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








const Homepage = () => {
  return (
    <div className="w-full h-[100%] bg-black py-4 flex flex-col gap-4 items-center text-white">
      <div className="bg-slate-900 w-[360px] h-[340px] rounded-md p-4 m-2">
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


        <div className="flex gap-2 m-2">
          <button className="btn rounded-sm w-24 bg-slate-950 text-sky-600 h-9 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg">Home</button>
          <button className="btn rounded-sm w-24 bg-slate-950 text-sky-600 h-9 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg">Recent</button>
          <button className="btn rounded-sm w-24 bg-slate-950 text-sky-600 h-9 cursor-pointer hover:rounded-md hover:bg-sky-600 hover:text-white text-lg">Favourite</button>


        </div>  




      <div className="bg-slate-900 w-[360px] h-60 rounded-md p-4">
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


      <div className="">
      <div className="flex justify-between mx-4"> 
        <h1 className="py-1 text-white font-semibold text-lg">Recent Stories</h1>
        <h1 className="text-sky-600 py-2 font-semibold cursor-pointer border-b-sky-600">See All</h1>
        </div>
        <div className="flex gap-2 flex-wrap p-3 mx-2">
          <img src={Story01} className="h-36 w-20 rounded-lg"></img>
          
          <div>
          <img src={Story02} className="h-36 w-20 rounded-lg"></img>
          
          </div>
          <img src={Story03} className="h-36 w-20 rounded-lg"></img>
          

          <img src={Story04} className="h-36 w-20 rounded-lg"></img>
          
 
          <img src={Story05} className="h-36 w-20 rounded-lg mx-auto "></img>
          






        </div>

      </div>




      <div className="bg-slate-800 w-[360px] h-72 rounded-md p-4">
        <h1 className="py-2 text-white font-semibold text-xl">Recent Blogs</h1>
        <img src="" alt="" />
      </div>
    </div>
  )
}
export default Homepage