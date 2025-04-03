import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TextEditor } from "../pages/Publish"

export const EditBlog = ({blogId}: {blogId: string }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${blogId}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }  
        }).then((response) => {
            setTitle(response.data.blog.title)
            setContent(response.data.blog.content)
        }).catch(() => {
            alert("Error while fetching blog post")
        })
    },[blogId])
    return <div> 
            <AppBar></AppBar>
        <div>
            <div className="flex flex-col justify-between">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 block mx-auto w-1/2 mt-4" placeholder="Title of your blog" required />
                <div className="mt-4 ">
                    <TextEditor onChange={(e) => {
                        setContent(e.target.value)
                    }} />
                </div>
                
                <div className="flex justify-center">
                    <button onClick={async ()=> {
                        try{
                            if (!title || !content) {
                                alert("Please fill in both the title and content before publishing.");
                                return;
                            }
                            await axios.put(`${BACKEND_URL}/api/v1/blog/update/${blogId}`,{
                                title,
                                content
                            },{
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                }  
                            });
                            alert("Blog updated successfully!");
                            navigate("/my-blogs", {replace:true})
                        }catch(e){
                            alert("Error while updating blog post")
                        }

                        }} type="submit" className=" inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                        Save and update
                    </button>
                </div>
                
            </div>
        </div>
    </div>
}