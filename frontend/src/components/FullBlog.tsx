import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline"

export const FullBlog = ({blog} : {blog : Blog}) => {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AppBar></AppBar>
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                {/* Title section */}
                <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100 dark:border-gray-700">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        {blog.title}
                    </h1>
                    
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:flex-wrap">
                        <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                            <Avatar name={blog.author.name ?? "Anonymous"} />
                            <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">
                                {blog.author.name ?? "Anonymous"}
                            </span>
                        </div>
                        
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2 sm:mb-0">
                            <CalendarIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">
                                {new Date(blog.createdAt).toLocaleDateString('en-GB', { 
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric' 
                                })}
                            </span>
                        </div>
                        
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm sm:ml-6">
                            <ClockIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span>{`${Math.ceil(blog.content.length/400)} min read`}</span>
                        </div>
                    </div>
                </div>
                
                {/* Content section */}
                <div className="p-4 sm:p-6 md:p-8">
                    <div className="prose prose-sm sm:prose md:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line break-words">
                        {blog.content}
                    </div>
                </div>
            </div>
            
            {/* Author info card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">About the Author</h3>
                <div className="flex items-center">
                    <Avatar name={blog.author.name ?? "Anonymous"} />
                    <div className="ml-3 sm:ml-4">
                        <div className="font-medium text-gray-900 dark:text-white">
                            {blog.author.name ?? "Anonymous"}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Author at BlogSphere
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
}