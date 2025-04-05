import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )

    useEffect(()=> {
        if(isDarkMode){
            document.body.classList.add("dark-mode")
            localStorage.setItem("theme","dark")
        }else{
            document.body.classList.remove("dark-mode")
            localStorage.setItem("theme","light")
        }
    },[isDarkMode])
    return <div onClick={()=> setIsDarkMode(!isDarkMode)}>
        <button className="flex">
            <div className="w-8 h-8 ">
                {isDarkMode ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )}
            </div>
            <div className="cursor-pointer">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </div>
            
        </button>
    </div>
}