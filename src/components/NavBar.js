import React, { useState } from "react";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-[#004E98] text-[#C0C0C0] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold tracking-wide">NewsApp</span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#" className="hover:text-white transition duration-300">
                            Home
                        </a>
                        <a href="#" className="hover:text-white transition duration-300">
                            World
                        </a>
                        <a href="#" className="hover:text-white transition duration-300">
                            Sports
                        </a>
                        <a href="#" className="hover:text-white transition duration-300">
                            Entertainment
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="text-[#C0C0C0] hover:text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A6EA5] hover:text-white"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A6EA5] hover:text-white"
                            >
                                World
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A6EA5] hover:text-white"
                            >
                                Sports
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A6EA5] hover:text-white"
                            >
                                Entertainment
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
