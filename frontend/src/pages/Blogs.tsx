import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();
    
    if(loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <AppBar />
                <div className="container mx-auto px-4 py-6">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <AppBar />
            <div className="container mx-auto px-4 py-6">
                {blogs.length === 0 ? (
                    <div className="text-center py-12">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">No blogs found</h2>
                        <p className="text-gray-600 dark:text-gray-400">Be the first to create a blog post!</p>
                    </div>
                ) : (
                    blogs.map(blog => (
                        <BlogCard 
                            key={blog.id}
                            id={blog.id}  
                            authorName={blog.author.name || "Anonymous"} 
                            title={blog.title}
                            content={blog.content} 
                            publishedDate={new Date(blog.createdAt).toLocaleDateString('en-GB')}
                        />
                    ))
                )}
            </div>
        </div>
    );
}