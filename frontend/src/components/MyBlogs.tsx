import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { MouseEvent, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface MyBlogCardInput {
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
    id : string; 
}
export const MyBlogCard = ({authorName, title, content, publishedDate, id}:MyBlogCardInput) => {
    const [blogs, setBlogs] = useState<MyBlogCardInput[]>([]);
    const [ShowCard, setShowCard] = useState(false);

    const handleOptionsClick = (event : MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation(); 
        setShowCard(!ShowCard);
      };

    const Delete = () => {
        const token = localStorage.getItem("token")
        if(token){
            axios.delete(`${BACKEND_URL}/api/v1/blog/delete/${id}`,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }).then (() => {
                setBlogs(blogs.filter(blog => blog.id !== id));
                window.location.reload();
            })
        }
    }  

    return <div>
        <div className="relative flex justify-center cursor-pointer">
            <div className="flex-col justify-center w-4/5 md:w-11/12 max-w-5xl">
            <div className="flex justify-between items-center ">
                <div className="flex pt-4">
                    <Avatar name={authorName}/>    
                    <div className="font-medium pl-2">{authorName} ,</div>
                    <div className="font-extralight pl-2">{publishedDate}</div>
                </div>
                <div className="relative">
                    <button onClick={handleOptionsClick} className="text-lg font-medium dark:text-white">...</button>
                </div>
            </div>
                {ShowCard && (
                    <div className="absolute right-0 w-24 text-black rounded-sm border bg-gray-100">
                        <Link to={`/editblog/${id}`} className="block w-full text-left p-2 hover:bg-gray-300">
                            Edit
                        </Link>
                        <button onClick={Delete} className="block w-full text-left p-2 hover:bg-gray-300">
                            Delete
                        </button>
                    </div>
                )}
            <Link to = {`/blog/${id}`}>
            <div className="font-bold pt-3">
                            {title}
                        </div>
                        <div className="font-extralight break-words pt-1">
                            {content.slice(0,100) + "..."}
                        </div>
                        <div className="pt-5 font-thin">
                            {`${Math.ceil(content.length/400)} min read`}
                        </div>
                        <div className="border border-gray-200  max-w-3xl">
                        </div>
            </Link>
            </div>
            
        </div>
    </div>
}