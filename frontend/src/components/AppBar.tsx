import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { Sidebar } from "./Sidebar"

export const AppBar = () => {
    const name = localStorage.getItem("Person") || "Anonymous"
    return <div className="border-b flex justify-between px-4 py-3">
        <div className="flex">
            <div className="mt-0.5" style={{ zIndex: 9999 }}>
                <Sidebar></Sidebar>
            </div>
            
            <div className="ml-2 font-serif font-bold text-black mt-1 md:mt-0">
                <Link to={"/blogs"} className="text-3xl md:text-4xl cursor-pointer font-bold text-gray-800 hover:text-gray-600 ">
                    BlogSphere
                </Link>
            </div>
            
        </div>
        
        <div className="flex justify-center items-center">
            <Link to={"/publish"}>
                <button></button><button type="button" className="mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 me-2 mb-2">Add Post</button>
            </Link>
            <div>
                <Avatar name = {name}></Avatar>
            </div>
            
        </div>
    </div>
}