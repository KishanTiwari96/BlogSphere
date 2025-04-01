import { AppBar } from "../components/AppBar"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { MyBlogCard } from "../components/MyBlogs";
import { useMyBlogs } from "../hooks";

export const MyBlogs = () => {
    const { loading, blogs = [] } = useMyBlogs();

    
    if(loading){
        return <div>
            <AppBar></AppBar>
            <div>
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
                <div className=" w-md">
                {blogs.length === 0 ? (
                        <div className="text-center text-gray-500 mt-10 text-3xl font-bold">
                            <p>No blogs posted yet</p>
                        </div>
                    ) : (
                        blogs.map((blog) => (
                            <MyBlogCard
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
            
            
        </div>
}