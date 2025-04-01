import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()
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
                        if (!title || !content) {
                            alert("Please fill in both the title and content before publishing.");
                            return;
                        }
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                            title,
                            content
                        },{
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`
                            }  
                        });
                        navigate(`/blog/${response.data.id}`)
                    }} type="submit" className=" inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                        Publish post
                    </button>
                </div>
                
            </div>
        </div>
    </div>
}

function TextEditor ({onChange} :{onChange : (e:ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <form>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
       <div className="flex items-center justify-center px-3 py-2 ">
            
       <div className="px-4 py-2 bg-white rounded-b-lg">
           <label className="sr-only">Publish post</label>
           <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-2xl px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0 " placeholder="Write an article..."  ></textarea>
       </div>
   </div>
   
   </div>
</form> 

}