import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { Sidebar } from "./Sidebar"
import { PencilSquareIcon } from "@heroicons/react/24/outline"

export const AppBar = () => {
    const name = localStorage.getItem("Person") || "Anonymous"
    
    return (
        <header className="sticky top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                <div className="flex items-center">
                    <div className="z-50">
                        <Sidebar />
                    </div>
                    
                    <div className="ml-3 font-serif font-bold">
                        <Link 
                            to="/blogs" 
                            className="text-2xl md:text-3xl cursor-pointer font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            BlogSphere
                        </Link>
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <Link to="/publish">
                        <button 
                            type="button" 
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            <PencilSquareIcon className="h-4 w-4 mr-1" />
                            Write Blog
                        </button>
                    </Link>
                    <div className="cursor-pointer">
                        <Avatar name={name} />
                    </div>
                </div>
            </div>
        </header>
    )
}