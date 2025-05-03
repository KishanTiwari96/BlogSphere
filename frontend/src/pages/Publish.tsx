import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PencilSquareIcon, DocumentTextIcon, InformationCircleIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline"

export const Publish = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    
    const handlePublish = async () => {
        if (!title || !content) {
            alert("Please fill in both the title and content before publishing.");
            return;
        }
        
        try {
            setIsSubmitting(true);
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }  
            });
            navigate(`/blog/${response.data.id}`);
        } catch (error) {
            console.error("Failed to publish blog:", error);
            alert("Failed to publish. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <AppBar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                        <PencilSquareIcon className="h-8 w-8 mr-3 text-indigo-600 dark:text-indigo-400" />
                        Create Your Story
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">Share your thoughts, ideas, and experiences with the world</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="p-6">
                        <div className="mb-6">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <DocumentTextIcon className="h-5 w-5 inline mr-1 text-indigo-500 dark:text-indigo-400" />
                                Title
                            </label>
                            <input 
                                type="text" 
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter an engaging title..." 
                                className="w-full px-4 py-3 text-xl font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                                required 
                            />
                        </div>
                        
                        <div className="mb-8">
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <InformationCircleIcon className="h-5 w-5 inline mr-1 text-indigo-500 dark:text-indigo-400" />
                                Content
                            </label>
                            <TextEditor 
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
                            />
                        </div>
                        
                        <div className="flex justify-end">
                            <button 
                                onClick={handlePublish}
                                disabled={isSubmitting || !title || !content}
                                className={`relative flex items-center px-6 py-3 rounded-lg font-medium text-white shadow-lg
                                    ${(!title || !content) ? 
                                    'bg-gray-400 cursor-not-allowed' : 
                                    'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300'}
                                `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Publishing...
                                    </>
                                ) : (
                                    <>
                                        <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
                                        Publish
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
                    Share your unique perspective with the BlogSphere community
                </div>
            </div>
        </div>
    );
}

export function TextEditor({onChange, value}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void, value: string}) {
    return (
        <div className="rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden transition-all duration-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
            <textarea 
                onChange={onChange} 
                value={value} 
                id="editor" 
                rows={12} 
                className="w-full px-4 py-3 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none resize-y"
                placeholder="Tell your story..." 
            ></textarea>
            
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    {value.length} characters
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    {Math.ceil(value.length / 400)} min read
                </div>
            </div>
        </div>
    );
}   