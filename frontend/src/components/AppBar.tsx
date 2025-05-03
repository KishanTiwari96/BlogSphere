import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { Sidebar } from "./Sidebar"
import { PencilSquareIcon } from "@heroicons/react/24/outline"

export const AppBar = () => {
    const name = localStorage.getItem("Person") || "Anonymous"
    
    return (
        <header className="sticky top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3">
                <div className="flex items-center">
                    <div className="z-50">
                        <Sidebar />
                    </div>
                    
                    <div className="ml-2 sm:ml-3 font-serif font-bold">
                        <Link 
                            to="/blogs" 
                            className="text-xl sm:text-2xl md:text-3xl cursor-pointer font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            BlogSphere
                        </Link>
                    </div>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Link to="/publish" className="transition-transform hover:scale-105 duration-200">
                        {/* Mobile version (icon only) */}
                        <button 
                            type="button" 
                            className="sm:hidden inline-flex items-center justify-center w-10 h-10 border border-transparent rounded-full shadow-sm text-white bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                            aria-label="Write Blog"
                        >
                            <PencilSquareIcon className="h-5 w-5" />
                        </button>
                        
                        {/* Medium screens (icon + "Write") */}
                        <button 
                            type="button" 
                            className="hidden sm:inline-flex md:hidden items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                        >
                            <PencilSquareIcon className="h-4 w-4 mr-1.5" />
                            Write
                        </button>
                        
                        {/* Large screens (icon + "Write Blog") */}
                        <button 
                            type="button" 
                            className="hidden md:inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                        >
                            <PencilSquareIcon className="h-4 w-4 mr-1.5" />
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