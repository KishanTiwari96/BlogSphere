import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    title : string,
    content : string,
    id : string,
    author : {
        name : string
    },
    createdAt : string  
}

export const useBlog = ({ id }:{id : string}) => {
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>();

    useEffect(()=> {
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }        
    })
        .then(response => {
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])
    

    return {
        loading,
        blog
    } 
}

export const useBlogs = () => {
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(response => { 
                setBlogs(response.data.blog);
                setLoading(false);
            })
            
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    } , []);


    return {
        loading,
        blogs
    }
}

export const useMyBlogs = () => {
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/my-blogs`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(response => { 
                setBlogs(response.data.blogs);
                setLoading(false);
            })
            
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    } , []);


    return {
        loading,
        blogs
    }
}