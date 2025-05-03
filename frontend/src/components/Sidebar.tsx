import { useState, useEffect } from "react";
import {
    HomeIcon,
    UserIcon,
    PowerIcon,
    PencilSquareIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogoutPopUp } from "./LogoutPopUp";
import { DarkMode } from "./DarkMode";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.getElementById("sidebar-container");
            const hamburger = document.getElementById("hamburger-menu");

            if (
                sidebar &&
                hamburger &&
                !sidebar.contains(event.target as Node) &&
                !hamburger.contains(event.target as Node) &&
                isOpen
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        console.log("Token removed");
        navigate("/signin", { replace: true });
        window.history.replaceState(null, "", "/signin");
    };

    const openPopUp = () => setIsLogoutOpen(true);
    const closePopUp = () => setIsLogoutOpen(false);
    const confirmLogout = () => {
        handleLogout();
        closePopUp();
    };

    const isActive = (path: string) =>
        location.pathname === path
            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
            : "";

    return (
        <div className="flex items-center">
            <button
                id="hamburger-menu"
                onClick={() => setIsOpen(!isOpen)}
                className="flex-col w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle menu"
            >
                <div className="relative w-6 h-2 transform transition-all duration-300">
                    <span
                        className={`absolute h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transform transition-all duration-300 ${
                            isOpen ? "rotate-45 translate-y-0" : "translate-y-[-8px]"
                        }`}
                    ></span>
                    <span
                        className={`absolute h-0.5 bg-gray-700 dark:bg-gray-300 transform transition-all duration-300 ${
                            isOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                        }`}
                    ></span>
                    <span
                        className={`absolute h-0.5 w-6 bg-gray-700 dark:bg-gray-300 transform transition-all duration-300 ${
                            isOpen ? "-rotate-45 translate-y-0" : "translate-y-[8px]"
                        }`}
                    ></span>
                </div>
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar-container"
                className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-serif">
                            BlogSphere
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <XMarkIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <div className="flex-1 p-4">
                        <nav className="mb-8">
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/blogs"
                                        className={`flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isActive(
                                            "/blogs"
                                        )}`}
                                    >
                                        <HomeIcon className="w-5 h-5 mr-3" />
                                        <span className="font-medium">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/my-blogs"
                                        className={`flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isActive(
                                            "/my-blogs"
                                        )}`}
                                    >
                                        <UserIcon className="w-5 h-5 mr-3" />
                                        <span className="font-medium">My Blogs</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/publish"
                                        className={`flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isActive(
                                            "/publish"
                                        )}`}
                                    >
                                        <PencilSquareIcon className="w-5 h-5 mr-3" />
                                        <span className="font-medium">Write Blog</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Dark Mode Toggle */}
                        <div className="p-3 mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <DarkMode />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={openPopUp}
                            className="flex items-center w-full p-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                            <PowerIcon className="w-5 h-5 mr-3" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Logout Modal */}
            <LogoutPopUp
                isOpen={isLogoutOpen}
                onCancel={closePopUp}
                onConfirm={confirmLogout}
            />
        </div>
    );
};
