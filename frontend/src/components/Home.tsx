import { Link, useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    function Start(){
        const token = localStorage.getItem("token")
        if(token){
            navigate("/blogs")
            return
        }
        else{
            navigate("/signup")
        }
        
    }
    return <div className=" min-h-screen">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)75%,rgba(0,163,255,0)_100%)]"></div>
        <div className="border-b flex justify-between px-4 py-3  ">
            <div className="ml-2 font-serif font-bold text-black">
                <Link to={"/"} className=" cursor-pointer text-3xl md:text-4xl font-bold text-black hover:text-gray-600">
                    BlogSphere
                </Link>
            </div>
            <div className="flex items-center ">                
                <button onClick={Start} type="button" className="cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Started</button>
            </div>
            
       
        </div>
        <div className="text-6xl md:text-8xl font-serif font-bold leading-tight text-black ml-12 md:ml-15 mt-15 md:mt-4 max-w-4xl">
            Where Words Meet Innovation
        </div>
        <div className="text-2xl font-sans text-gray-700 ml-12 md:ml-15 mt-4">
            Your Hub for Knowledge & Creativity
        </div>
        <button onClick={Start} type="button" className="cursor-pointer text-xl text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full ml-12 md:ml-15 mt-12 md:mt-8 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start reading</button>
        <div className="border-t mt-18 flex justify-center px-3 py-3">
            <div className="ml-2 mr-2 text-gray-500">Help</div>
            <div className="ml-2 mr-2 text-gray-500">About</div>
            <div className="ml-2 mr-2 text-gray-500">Careers</div>
            <div className="ml-2 mr-2 text-gray-500">Contact Us</div>
            <div className="ml-2 mr-2 text-gray-500">Privacy</div>
        </div>
        
    </div>
}    