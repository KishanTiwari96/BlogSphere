import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const Home = () => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    function Start() {
        const token = localStorage.getItem("token")
        if (token) {
            navigate("/blogs")
            return
        }
        else {
            navigate("/signup")
        }
    }

    return (
        <div className="min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
            <div className="absolute inset-0 z-[-2]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(51,65,85,0.15),transparent_70%)]"></div>
                <div className="absolute top-0 right-0 w-full md:w-[900px] h-[600px] bg-[conic-gradient(from_225deg_at_50%_50%,rgba(59,130,246,0.1)_0deg,rgba(125,211,252,0.1)_25deg,rgba(56,189,248,0.05)_270deg,rgba(14,165,233,0.1)_360deg)] blur-[80px] opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full md:w-[600px] h-[500px] bg-[conic-gradient(from_45deg_at_50%_50%,rgba(59,130,246,0.1)_0deg,rgba(125,211,252,0.1)_25deg,rgba(56,189,248,0.05)_270deg,rgba(14,165,233,0.1)_360deg)] blur-[80px] opacity-70"></div>

                <div className="hidden sm:block absolute top-20 left-[10%] w-12 h-12 rounded-full bg-blue-500/10 animate-float"></div>
                <div className="hidden sm:block absolute top-40 right-[15%] w-24 h-24 rounded-full bg-purple-500/10 animate-float-delayed"></div>
                <div className="hidden sm:block absolute bottom-40 left-[20%] w-16 h-16 rounded-full bg-amber-500/10 animate-float-slow"></div>
                <div className="hidden sm:block absolute top-[60%] right-[25%] w-20 h-20 rounded-full bg-emerald-500/10 animate-float-slower"></div>

                <div className="hidden sm:block absolute top-[20%] left-[30%] w-32 h-32 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 rounded-3xl rotate-12 animate-pulse-slow"></div>
                <div className="hidden sm:block absolute bottom-[15%] right-[35%] w-40 h-40 bg-gradient-to-tr from-amber-400/5 to-rose-500/5 rounded-full animate-pulse-slower"></div>
            </div>

            <nav className="backdrop-blur-sm border-b border-gray-400 flex justify-between px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-50">
                <div className="font-serif font-bold text-black">
                    <Link to={"/"} className="cursor-pointer text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 transition-all duration-300 relative group">
                    BlogSphere
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
            </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hidden md:block">Explore</Link>
                    <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hidden md:block">About</Link>
                    <button
                        onClick={Start}
                        className="relative overflow-hidden cursor-pointer text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <span className="relative z-10">Get Started</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                </div>
            </nav>

            <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-15 relative">
                <div className="hidden sm:block absolute top-28 left-0 w-24 h-24 border-l-2 border-t-2 border-gray-300/40 rounded-tl-xl -z-1"></div>
                <div className="hidden sm:block absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-gray-300/40 rounded-br-xl -z-1"></div>

                <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative`}>
                    <div className="absolute -top-10 left-4 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>

                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gray-800/5 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-700 mb-4 sm:mb-6 border border-gray-200/50">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        The platform for modern thinkers
                    </span>

                    <div className="relative">
                        <div className="hidden sm:block absolute -left-6 -top-6 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
                        <div className="hidden sm:block absolute right-20 top-40 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
                        <div className="hidden sm:block absolute -right-2 top-2 w-12 h-12 border-2 border-dashed border-blue-300/30 rounded-full animate-spin-slow"></div>

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-4">
                            <div className="md:col-span-4 relative z-10">
                                <div className="absolute right-0 -top-10 w-full md:w-1/2 h-full md:h-80 -z-10 opacity-20 md:opacity-50 pointer-events-none">
                                    <div className="relative w-full h-full">
                                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-lg transform rotate-6 animate-float"></div>
                                        <div className="absolute top-20 sm:top-24 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-lg transform -rotate-3 animate-float-delayed"></div>
                                        <div className="absolute top-5 sm:top-10 right-12 sm:right-20 w-28 sm:w-36 h-28 sm:h-36 rounded-2xl overflow-hidden shadow-xl transform rotate-3">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40"></div>
                                            <div className="p-4 relative">
                                                <div className="w-full h-3 bg-gray-200 rounded-full mb-2"></div>
                                                <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-6"></div>
                                                <div className="w-full h-16 sm:h-24 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg"></div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full shadow-lg animate-float-slow"></div>
                                    </div>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 max-w-4xl relative">
                                    Where Words Meet Innovation
                                    <div className="absolute -right-8 sm:-right-16 top-0 w-12 sm:w-16 h-12 sm:h-16 text-4xl sm:text-5xl opacity-20 rotate-12">✨</div>
                                </h1>

                                <p className="text-xl sm:text-2xl font-sans text-gray-700 mt-4 sm:mt-8 max-w-2xl leading-relaxed relative">
                                    Your Hub for Knowledge & Creativity in a world where ideas shape tomorrow.  
                                </p>

                                <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
                                    <button
                                        onClick={Start}
                                        className="relative overflow-hidden cursor-pointer group text-base sm:text-xl text-white font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 ease-out"></span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                        <span className="relative z-10 flex items-center">
                                            Start reading
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </button>

                                    <button className="text-base sm:text-xl text-gray-700 hover:text-gray-900 font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow transition-all duration-300 relative group">
                                        <span className="relative z-10 flex items-center">
                                            Learn more
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="hidden md:flex md:col-span-2 items-center justify-center">
                                <div className="relative w-full h-80">
                                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-lg transform rotate-6 animate-float"></div>
                                    <div className="absolute top-20 sm:top-24 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-lg transform -rotate-3 animate-float-delayed"></div>
                                    <div className="absolute top-5 sm:top-10 right-12 sm:right-20 w-28 sm:w-36 h-28 sm:h-36 rounded-2xl overflow-hidden shadow-xl transform rotate-3">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                                        <div className="p-4 relative">
                                            <div className="w-full h-3 bg-gray-200 rounded-full mb-2"></div>
                                            <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-6"></div>
                                            <div className="w-full h-16 sm:h-24 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg"></div>
                                            <div className="absolute bottom-3 right-3 w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full shadow-lg animate-float-slow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="p-6 sm:p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <div className="absolute -right-3 -top-3 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-7 w-6 sm:w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-blue-400 border-2 border-white"></div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3">Curated Content</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">Discover thought-provoking articles from diverse perspectives, handpicked by our editors.</p>
                        <a href="#" className="text-blue-600 flex items-center text-sm font-medium hover:text-blue-800 transition-colors">
                            Explore articles
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="p-6 sm:p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group">
                        <div className="absolute -right-3 -top-3 w-24 h-24 bg-green-50 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-7 w-6 sm:w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-green-400 border-2 border-white"></div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3">Express Yourself</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">Share your unique voice with our global community of readers and build a loyal following.</p>
                        <a href="#" className="text-green-600 flex items-center text-sm font-medium hover:text-green-800 transition-colors">
                            Start writing
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="p-6 sm:p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative group sm:col-span-2 md:col-span-1">
                        <div className="absolute -right-3 -top-3 w-24 h-24 bg-purple-50 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-7 w-6 sm:w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-purple-400 border-2 border-white"></div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3">Connect & Engage</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">Join discussions and build meaningful connections with like-minded readers and authors.</p>
                        <a href="#" className="text-purple-600 flex items-center text-sm font-medium hover:text-purple-800 transition-colors">
                            Join community
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={`mt-32 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied readers and writers who've made BlogSphere their digital home.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">S</div>
                                <div className="ml-4">
                                    <div className="font-bold">Sarah Johnson</div>
                                    <div className="text-gray-500 text-sm">Writer & Podcaster</div>
                                </div>
                                <div className="ml-auto text-amber-400 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"BlogSphere transformed my writing career. The community engagement and platform features have helped me grow my audience exponentially."</p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl">M</div>
                                <div className="ml-4">
                                    <div className="font-bold">Michael Chen</div>
                                    <div className="text-gray-500 text-sm">Tech Enthusiast</div>
                                </div>
                                <div className="ml-auto text-amber-400 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"As a reader, I'm always discovering fascinating new content. The curation is excellent, and the reading experience is smooth and enjoyable."</p>
                        </div>
                    </div>
                </div>
            </main>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 mt-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(0,0,0,0.2),transparent)]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
                        <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">Join our community of passionate writers and curious readers. Discover stories that matter, voices that inspire.</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={Start}
                                className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                            >
                                Get started now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>

                            <button className="px-8 py-4 border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors duration-300">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="bg-white border-t border-gray-200/50 pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Use Cases</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Testimonials</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Careers</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Press</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">News</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Blog</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Help Center</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Guides</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Events</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Terms</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Privacy</a></li>
                                <li><a  className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Cookies</a></li>
                                <li><a className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Licenses</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center">
                            <div className="font-serif font-bold text-2xl text-gray-900 mr-6">
                                <Link to={"/"} className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                                    BlogSphere
                                </Link>
                            </div>
                            <div className="text-gray-500 text-sm">© {new Date().getFullYear()} BlogSphere. All rights reserved.</div>
                        </div>
                        
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}    