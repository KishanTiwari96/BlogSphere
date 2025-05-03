import { AppBar } from "../components/AppBar"
import { FullBlog } from "../components/FullBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"

export const Blog = () =>  {
    const { id } = useParams()
    const { loading, blog} = useBlog({
        id : id || ""
    })

    if(loading || !blog ) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <AppBar />
                <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                    {/* Header Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        {/* Title section */}
                        <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100 dark:border-gray-700">
                            <div className="h-9 sm:h-10 md:h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-6 animate-pulse"></div>
                            
                            <div className="mt-4 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-6">
                                {/* Author info */}
                                <div className="flex items-center animate-pulse">
                                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                    <div className="ml-3">
                                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-24"></div>
                                    </div>
                                </div>
                                
                                {/* Date */}
                                <div className="flex items-center animate-pulse">
                                    <div className="w-4 h-4 mr-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-28"></div>
                                </div>
                                
                                {/* Reading time */}
                                <div className="flex items-center animate-pulse">
                                    <div className="w-4 h-4 mr-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Content section */}
                        <div className="p-4 sm:p-6 md:p-8 animate-pulse">
                            <div className="space-y-4">
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                                
                                <div className="py-2"></div>
                                
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5"></div>
                                
                                <div className="py-2"></div>
                                
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Author card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 mt-6 sm:mt-8 animate-pulse">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-lg w-48 mb-4"></div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                            <div className="ml-3 space-y-2">
                                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-32"></div>
                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-40"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <FullBlog blog={blog} />
        </div>
    )
}