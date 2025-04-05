import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface BlogCardInput {
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
    id : string; 
}
export const BlogCard = ({authorName, title, content, publishedDate, id}:BlogCardInput) => {
    return <Link to = {`/blog/${id}`}>
        <div className="flex justify-center cursor-pointer ">
            <div className="flex-col justify-center w-4/5 md:w-11/12 max-w-5xl">
                <div className="flex pt-4">
                    <Avatar name={authorName}/>    
                    <div className="font-medium pl-2">{authorName} ,</div>
                    <div className="font-extralight pl-2">{publishedDate}</div>
                </div>
                <div className="font-bold pt-3">
                    {title}
                </div>
                <div className="font-extralight break-words pt-1">
                    {content.slice(0,100) + "..."}
                </div>
                <div className="flex pt-5 font-thin">
                    <BookOpenIcon className="h-5 w-5 text-gray-500 mt-1 mr-1" />
                    {`${Math.ceil(content.length/400)} min read`}
                </div>
                <div className="border border-gray-200  max-w-3xl">
                </div>
            </div>
            
        </div>
    </Link>
}

export function Avatar ({name}: {name:string}) {
    const firstName = name.split(" ")[0]
    return <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{firstName[0].toUpperCase()}</span>
</div>
}   