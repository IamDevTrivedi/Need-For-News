import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const categories = ['general', 'business', 'entertainment', 'technology', 'sports', 'health'];

    return (
        <nav className='bg-black text-gray-200 py-4 px-4 lg:px-16'>
            {/* Desktop and Tablet View */}
            <div className='hidden md:flex flex-col lg:flex-row gap-4 items-center justify-between'>
                <div className='text-3xl font-bold'>
                    <Link to='/'>Need For News</Link>
                </div>

                <div className='text-lg flex flex-wrap justify-center gap-2 md:gap-4'>
                    {categories.map(category => (
                        <Link
                            key={category}
                            to={`/${category}`}
                            className='hover:bg-slate-900 py-1 px-4 rounded-lg hover:text-gray-50 capitalize'
                        >
                            {category}
                        </Link>
                    ))}
                </div>

                <div className="relative w-full lg:w-auto mt-4 lg:mt-0">
                    <form className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-700 text-white outline-none focus:outline-none rounded-lg pl-10 pr-4 py-2 w-full"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            fill="currentColor"
                        >
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </form>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
                <div className='flex items-center justify-between'>
                    <div className='text-2xl font-bold'>
                        <Link to='/'>Need For News</Link>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="text-gray-200 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="mt-4 space-y-4">
                        <div className='text-lg flex flex-col gap-4'>
                            {categories.map(category => (
                                <Link
                                    key={category}
                                    to={`/${category}`}
                                    className='hover:bg-slate-900 py-1 px-4 rounded-lg hover:text-gray-50 capitalize'
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>

                        <div className="relative">
                            <form className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-gray-700 text-white outline-none focus:outline-none rounded-lg pl-10 pr-4 py-2 w-full"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    fill="currentColor"
                                >
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}