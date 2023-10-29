
"use client"
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const componentPosition = 100;
            const threshold = 100; // Adjust this threshold as needed

            if (scrollPosition > componentPosition - threshold) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the scroll event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav
            className={` ${isSticky ? `fixed top-0 bg-white shadow-md  transition-all delay-75 ease-linear ` : ""
                } z-50  top-0 w-full   left-0    md:px-0 px-5`}
        >
            <div className=' container p-5 m-auto grid place-items-center' >
                <ul className=' hidden  md:flex  gap-10 text-gray-500 font-semibold' >
                    <li className='hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer ' >Home</li>
                    <li className='hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer ' >Skills</li>
                    <li className='hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer ' >Projects</li>
                    <li className='hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer ' >Experience</li>
                    <li className='hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer ' >Contact Us</li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar
