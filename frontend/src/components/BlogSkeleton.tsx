export const BlogSkeleton = () => {
    return (
        <div className="my-6 mx-auto max-w-3xl animate-pulse">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center mb-4">
                        {/* Avatar and author */}
                        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div className="ml-3">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-24 mb-2"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                        </div>
                        {/* Action buttons */}
                        <div className="ml-auto flex space-x-2">
                            <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        </div>
                    </div>
                    
                    {/* Title */}
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-3"></div>
                    
                    {/* Content */}
                    <div className="space-y-2 mb-4">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5"></div>
                    </div>
                    
                    {/* Footer */}
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-20 flex items-center"></div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-24"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}