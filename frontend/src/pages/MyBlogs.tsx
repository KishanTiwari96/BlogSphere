import { AppBar } from "../components/AppBar"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { MyBlogCard } from "../components/MyBlogs";
import { useMyBlogs } from "../hooks";

export const MyBlogs = () => {
    const { loading, blogs = [] } = useMyBlogs();

    if(loading){
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <AppBar></AppBar>
                <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">My Blogs</h1>
                        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">Manage your published content</p>
                    </div>
                    
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                    <BlogSkeleton></BlogSkeleton>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <AppBar></AppBar>
            <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
                <div className="mb-4 sm:mb-6 md:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">My Blogs</h1>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">Manage your published content</p>
                </div>
                
                {blogs.length === 0 ? (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 md:p-12 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">No blogs posted yet</h2>
                        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">Start writing and share your thoughts with the world!</p>
                        <a href="/publish" className="inline-block mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                            Create Your First Blog
                        </a>
                    </div>
                ) : (
                    <div className="space-y-4 sm:space-y-6">
                        {blogs.map((blog) => (
                            <MyBlogCard
                                key={blog.id}
                                id={blog.id}
                                authorName={blog.author.name || "Anonymous"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={new Date(blog.createdAt).toLocaleDateString('en-GB')}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}