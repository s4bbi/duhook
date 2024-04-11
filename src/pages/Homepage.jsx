
import blog01 from "../assets/Images/recentlink-1.jpg";
import blog02 from "../assets/Images/recentlink-2.jpg";
import blog03 from "../assets/Images/recentlink-3.jpg";


const Homepage = () => {
  return (
    <div className="w-full h-[100%] bg-black py-4 flex flex-col gap-4 items-center ">
      <div className="bg-slate-800 w-[360px] h-80 rounded-md p-4">
        <div className="flex justify-between"> 
        <h1 className="py-1 text-white font-semibold text-lg">Recent Blogs</h1>
        <h1 className="text-sky-600 py-2 font-semibold cursor-pointer">See All</h1>
        </div>
        <div className="flex gap-2 pb-2">
        <img src={blog01} className="rounded-md"/>
        <div>
          <h1 className="text-white text-lg">Moira's fade reach much farther...</h1>
          <h1 className="text-gray-500">2 weeks ago</h1>
        </div>
        </div>
        
        <div className="flex gap-2 pb-2">
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
      <div className="bg-slate-800 w-[360px] h-72 rounded-md p-4">
        <h1 className="py-2 text-white font-semibold text-xl">Recent Blogs</h1>
       
      </div>


      <div className="bg-slate-800 w-[360px] h-72 rounded-md p-4">
        <h1 className="py-2 text-white font-semibold text-xl">Recent Blogs</h1>
        <img src=""/>
      </div>
      <div className="bg-slate-800 w-[360px] h-72 rounded-md p-4">
        <h1 className="py-2 text-white font-semibold text-xl">Recent Blogs</h1>
        <img src="" alt="" />
      </div>
    </div>
  )
}
export default Homepage