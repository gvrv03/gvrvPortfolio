"use client"
import React from 'react'
import { useRouter } from '../../../node_modules/next/navigation'
import ShowProjects from "../Utility/ShowProjects"

const Projects = () => {
    const router = useRouter()
    return (
        <section id="projects" className="px-5 flex-col flex gap-10 py-16 w-full">
            <div className="container m-auto flex flex-col gap-10 bg-grey-50">
                <h2 className="text-2xl md:text-4xl font-bold pColor">Projects</h2>
                <ShowProjects start={0} end={4} />

                <div className='grid place-items-center' >
                    <button onClick={() => {
                        router.push("/myprojects")
                    }} className='font-bold border border-gray-200 px-10 bg-white md:px-20  w-fit p-5 rounded-md' >View More</button>
                </div></div>
        </section>
    )
}

export default Projects
