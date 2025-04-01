import { useState } from "react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Correct imports for Heroicons v2
import { Link, useNavigate } from "react-router-dom";
import { LogoutPopUp } from "./LogoutPopUp";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLogoutOpen, setIsLogoutOpen] = useState(false)
    const navigate = useNavigate()

    function handleLogout(){
        localStorage.removeItem("token");
        console.log("Token removed")
        navigate("/signin",{replace:true})
    
        window.history.replaceState(null, "", "/signin");
    }

    const openPopUp = () => {
        setIsLogoutOpen(true);
    }
    const closePopUp = () => {
        setIsLogoutOpen(false);
    }
    const confirmLogout = () => {
        handleLogout();
        closePopUp()
    }

    return <div>
        <button onClick={()=>setIsOpen(!isOpen)} className="text-3xl cursor-pointer">
            {isOpen ?<XMarkIcon className="w-8 h-8 stroke-2 mt-1"></XMarkIcon> : <Bars3Icon className="mt-1 w-8 h-8 text-black"></Bars3Icon>} 
        </button>
        <div className={`fixed top-18.5 left-0 h-full w-64 bg-gray-100 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
            <div className="flex justify-between  p-4">
                <ul>
                    <div className="mt-1 text-2xl text-black font-medium ml-2">
                        <Link className="hover:text-blue-500 " to={"/blogs"}>
                            <li>Home</li>
                        </Link>
                        <div className="mt-2">
                            <Link to={"/my-blogs"} className="hover:text-blue-500 cursor-pointer">
                                <li>My Blogs</li>
                            </Link>  
                        </div>
                        <div className="mt-2">
                            <button className="hover:text-blue-500 cursor-pointer" onClick={openPopUp}>
                                <li>Logout</li>
                            </button>
                        </div> 
                        
                                             
                    </div>
                    
                </ul>
            
            </div>
            
            
        </div>
        <LogoutPopUp 
            isOpen = {isLogoutOpen}
            onCancel = {closePopUp}
            onConfirm = {confirmLogout}
        ></LogoutPopUp>
    </div>
}