
"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from '../../../node_modules/next/navigation';
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [navState, setnavState] = useState(1)
    const [sidebarState, setsidebarState] = useState(false)
    const router = useRouter()
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
            className={` ${isSticky ? `fixed top-0  bg-white shadow-md  transition-all delay-75 ease-linear ` : ""
                } z-50  top-0 w-full   left-0    md:px-0 px-5`}
        >
            <div className=' container md:p-5  py-2  m-auto grid place-items-center' >

                <div className=' md:hidden  w-full' >
                    <button onClick={() => {
                        setsidebarState(true)
                    }} className='uil  text-3xl uil-align text-blue-700' />
                    <SideBar sidebarState={sidebarState} setsidebarState={setsidebarState} />
                </div>
                <div className=' hidden  md:flex  gap-10 text-gray-500 font-semibold' >
                    <button className={`${navState === 1 && "px-4 bg-blue-700  text-sm py-1 text-white"} hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer `} >Home</button>
                    <button className={` hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer `} > Skills</button>
                    <button className={` hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer `} > Projects </button>
                    <button className={` hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer `} >Experience</button>
                    <button className={` hover:px-4  transition-all delay-100 ease-linear hover:text-sm hover:py-1 rounded-full hover:bg-blue-700 hover:text-white  cursor-pointer `} >Contact Us</button>
                    </div>
            </div>
        </nav >
    )
}

export default Navbar




const SideBar = ({ sidebarState,
    setsidebarState }) => {
    const router = useRouter()

    return (
        <div className={`  ${sidebarState ? "left-0" : "left-[-100%]"} fixed w-full top-0   bottom-0  z-[999]`} >
            <div onClick={() => {
                setsidebarState(false)
            }} className='bg-black opacity-60 w-full h-full absolute' />
            <div className={`${sidebarState ? "left-0" : "left-[-100%]"} absolute  transition-all delay-75 ease-linear  w-[70%] flex-col flex gap-5 bg-white p-5   top-0 bottom-0 `} >
                <div className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' >Home</div>
                <div onClick={() => {
                    router.push("#projects")
                }} className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' >Skills</div>
                <div className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' >Projects</div>
                <div className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' >Experience</div>
                <div className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' >Contact Us</div>
                <hr />
                <div className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' >Privacy Policy</div>
                <div className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' >Disclaimer</div>
                <div className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' >Terms & Condition</div>

            </div>
        </div>
    )
}

