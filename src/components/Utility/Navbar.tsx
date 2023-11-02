
"use client"
import React, { useEffect, useState } from 'react'
import { MainNav, Legal } from "../../JSONData/NavbarData"
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
            <div className=' container md:p-5  py-2 md:py-7  m-auto grid place-items-end' >

                <div className=' md:hidden  w-full' >
                    <button onClick={() => {
                        setsidebarState(true)
                    }} className='uil  text-3xl uil-align text-blue-700' />
                    <SideBar sidebarState={sidebarState} setsidebarState={setsidebarState} />
                </div>
                <div className=' hidden  md:flex  gap-10 text-gray-500 font-semibold' >
                    {MainNav.map((Data: { name: String, location: string, icon: String }, Index) => {
                        return (
                            <button onClick={() => {
                                router.push(Data?.location)
                            }} className={` cursor-pointer `} key={Index} >  <i className={` mr-2 ${Data?.icon}`} />  {Data?.name}</button>
                        )
                    })}
                </div>
            </div>
        </nav >
    )
}

export default Navbar




const SideBar = ({ sidebarState,
    setsidebarState }: { sidebarState: boolean, setsidebarState: (state: boolean) => void }) => {
    const router = useRouter()
    return (
        <div className={`  ${sidebarState ? "left-0" : "left-[-100%]"} fixed w-full top-0   bottom-0  z-[999]`} >
            <div onClick={() => {
                setsidebarState(false)
            }} className='bg-black opacity-60 w-full h-full absolute' />
            <div className={`${sidebarState ? "left-0" : "left-[-100%]"} absolute  transition-all delay-75 ease-linear  w-[60%] flex-col flex gap-5 bg-white p-5   top-0 bottom-0 `} >


                {MainNav.map((Data: { name: String, location: string, icon: String }, Index) => {
                    return (
                        <button
                            onClick={() => {
                                router.push(Data?.location)
                            }}
                            className=' w-full  text-left hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' key={Index}  >  <i className={`${Data.icon} mr-2 `} /> {Data.name}</button>
                    )
                })}
                <hr />
                {Legal.map((Data: { name: String, location: String, icon: String }, Index) => {
                    return (
                        <div className='hover:text-black hover:font-semibold transition-all delay-75 ease-linear cursor-pointer' key={Index} >  <i className={`${Data.icon} mr-2 `} /> {Data.name}</div>
                    )
                })}

            </div>
        </div>
    )
}

