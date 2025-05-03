import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { MouseEvent, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { BookOpenIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface MyBlogCardInput {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string; 
}

export const MyBlogCard = ({authorName, title, content, publishedDate, id}:MyBlogCardInput) => {
    const [blogs, setBlogs] = useState<MyBlogCardInput[]>([]);

    const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        
        if (confirm("Are you sure you want to delete this blog?")) {
            deletePost();
        }
    };

    const deletePost = () => {
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

    return (
        <Link to={`/blog/${id}`}>
            <div className="my-6 mx-auto max-w-3xl">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <Avatar name={authorName} />
                            <div className="ml-3">
                                <div className="font-medium text-gray-900 dark:text-gray-100">{authorName}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                    <span className="inline-block">{publishedDate}</span>
                                </div>
                            </div>
                            <div className="ml-auto flex space-x-2">
                                <Link 
                                    to={`/editblog/${id}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-1 rounded-full text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900 transition-colors">
                                    <PencilIcon className="h-5 w-5" />
                                </Link>
                                <button 
                                    onClick={handleDelete}
                                    className="p-1 rounded-full text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900 transition-colors">
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                            {title}
                        </h2>
                        
                        <div className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {content.length > 150 ? `${content.slice(0, 150)}...` : content}
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <BookOpenIcon className="h-4 w-4 mr-1" />
                                <span>{Math.ceil(content.length / 400)} min read</span>
                            </div>
                            <div className="text-indigo-600 dark:text-indigo-400 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/50 px-4 py-1 rounded-full">
                                Read more
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}