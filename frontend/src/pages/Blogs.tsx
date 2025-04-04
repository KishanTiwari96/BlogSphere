import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading,blogs} = useBlogs();
    
    if(loading){
        return <div >
            <AppBar></AppBar>
            <div >
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
                <BlogSkeleton></BlogSkeleton>
            </div>
            
        </div>
    }
    return <div>
        <AppBar></AppBar>
        <div className="flex justify-center">
            <div className="w-full max-w-md">
                {blogs.map( blog => <BlogCard 
                    id = {blog.id}  
                    authorName={blog.author.name || "Anonymous" } 
                    title={blog.title}
                    content={blog.content} 
                    publishedDate={new Date(blog.createdAt).toLocaleDateString('en-GB')}></BlogCard>
                )}
            </div>
        </div>
        
        
    </div>
}