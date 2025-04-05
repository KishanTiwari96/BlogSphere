import { useState } from "react"
import { Bars3Icon, HomeIcon, UserIcon, XMarkIcon , PowerIcon   } from '@heroicons/react/24/outline'; 
import { Link, useNavigate } from "react-router-dom";
import { LogoutPopUp } from "./LogoutPopUp";
import { DarkMode } from "./DarkMode";
import { } from "@heroicons/react/20/solid";

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
            {isOpen ?<XMarkIcon className="w-8 h-8 stroke-2 mt-1"></XMarkIcon> : <Bars3Icon className="mt-1 w-8 h-8 "></Bars3Icon>} 
        </button>
        <div className={`absolute top-18.5 left-0 h-full w-64 bg-white dark:bg-black 
         transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
            <div className="  p-4">
                <ul>
                    <div className="mt-1 text-2xl text-black dark:text-white font-medium ">
                        <div>
                            <Link className=" flex transition-transform duration-300 hover:-translate-y-1 hover:scale-105 " to={"/blogs"}>
                                <HomeIcon className="w-6 h-6 mt-1 mr-1"></HomeIcon>
                                <li>Home</li>
                            </Link>
                            <div className="mt-2">
                                <Link to={"/my-blogs"} className=" flex transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                                    <UserIcon className="w-6 h-6 mt-1 mr-1"></UserIcon>
                                    <li>My Blogs</li>
                                </Link>  
                            </div>
                            <div className="mt-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105r">
                                <DarkMode></DarkMode>
                            </div>
                        </div>
                        
                        <div className="mt-2">
                            <button className="flex transition-transform duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer " onClick={openPopUp}>
                                <PowerIcon className="w-6 h-6 mt-1 mr-1"></PowerIcon>
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