import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog} : {blog : Blog}) => {
    return <div>
        <AppBar></AppBar>
        <div className="grid grid-cols-12 pt-8 ">
            <div className="col-span-9 pl-5 md:pl-15">
                <div className="text-3xl md:text-5xl font-bold">
                    {blog.title}
                </div>
                <div className="font-thin pt-3">
                    {new Date(blog.createdAt).toLocaleDateString('en-GB')}
                </div>
                <div className="text-lg md:text-2xl font-normal pt-4 break-words whitespace-pre-line">
                    {blog.content}                    
                </div>
            </div>
            <div className="col-span-3 pl-2 md:pl-10">
                <div className="font-medium">
                    Author
                </div>
                <div className="flex pt-5">
                    <div>
                    <Avatar name = {blog.author.name ?? "Anonymous"}></Avatar>
                </div>
                <div className="font-bold pl-2">
                    {blog.author.name ?? "Anonymous"}
                </div>
                </div>
                
            </div>
        </div>
    </div> 
}