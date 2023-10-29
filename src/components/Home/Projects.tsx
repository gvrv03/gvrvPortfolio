import React from 'react'

const Projects = () => {
    return (
        <section id="projects" className=' px-5   flex-col flex gap-10 py-20 w-full' >
            <div className="container m-auto flex   flex-col gap-10 bg-grey-50 " >
                <h2 className='text-2xl md:text-4xl font-bold pColor ' >Projects</h2>

                <div className='grid  grid-cols-1 md:grid-cols-3 gap-10  ' >

                    <div className=" border GlassCard h-full    rounded-md overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.licdn.com/dms/image/D562DAQFbCjk6YXaZHQ/profile-treasury-image-shrink_800_800/0/1697435125313?e=1699160400&v=beta&t=xAvnM_DbW0wXuew3hypDcnakXHdN3E6JhIRt1cOCWo8" alt="blog" />
                        <div className=' p-5 ' >
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Full Stack</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">DSY Consultancy</h1>
                            <p className="leading-relaxed mb-3 text-justify">This Web Application Helps to find Colleges with their diploma Aggregate, Branch, Category etcwaistcoat.</p>

                        </div>
                    </div>




                    <div className=" border GlassCard h-full    rounded-md overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.licdn.com/dms/image/D4D2DAQGiMeRWYFFsUQ/profile-treasury-image-shrink_800_800/0/1698293759507?e=1699160400&v=beta&t=vlexRg2tHhRECVpBIBc5Gl99RhiR46sFTc-cnoOqc7Y" alt="blog" />
                        <div className=' p-5 ' >
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Full Stack</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">GoDigi</h1>
                            <p className="leading-relaxed mb-3 text-justify">User can buy digital products like ebooks, projects and Etc and admin can add product</p>

                        </div>
                    </div>




                    <div className=" border GlassCard h-full    rounded-md overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.licdn.com/dms/image/D562DAQFBHmIBbgjo_Q/profile-treasury-image-shrink_800_800/0/1697434949614?e=1699160400&v=beta&t=HcsPFEpiujU3Dd_V7CXFjbsW-RnIDQfkYsZBrmBZOXM" alt="blog" />
                        <div className=' p-5 ' >
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Full Stack</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Campus Plant Lense</h1>
                            <p className="leading-relaxed mb-3 text-justify">This application is used for institute to manage thier Plant records like planted date, planted by and etc.</p>

                        </div>
                    </div>





                </div>
            </div>
        </section>
    )
}

export default Projects
