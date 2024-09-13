import React from 'react'
import Link from '../../../node_modules/next/link'
import ProjectsData from "../../JSONData/ProjectsData"
const Client = () => {
    return (
        <section id="projects" className="px-5 flex-col flex gap-10 py-16 w-full">
            <div className="container m-auto flex flex-col gap-10 bg-grey-50">
                <h2 className="text-2xl md:text-4xl font-bold pColor">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {ProjectsData.map((project) => (
                        <div key={project.id} className="border GlassCard h-full rounded-md overflow-hidden">
                            <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="p-5">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                    {project.category}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-700 mb-3">{project.title}</h1>
                                <p className="leading-relaxed mb-3 text-justify">{project.description}</p>
                                <Link
                                    href={project.repoLink}
                                    className="text-white bg-gray-800 w-fit px-2 py-1 mt-2 rounded-md flex gap-2 items-center"
                                >
                                    <i className="uil uil-github" />
                                    <p className="text-xs font-semibold">View Repositories</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Client
