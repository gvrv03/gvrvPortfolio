"use client"
import React, { useEffect, useState } from 'react'

const PreLoader = () => {
    const [loader, setloader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloader(false)
        }, 2000);
    }, [])

    return (
        <>

            {loader && <div className='fixed bg-white z-[9999] w-full h-screen grid place-items-center' >
                <div className="shapes"></div>
            </div>}

        </>

    )
}

export default PreLoader
