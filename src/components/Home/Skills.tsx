import React from 'react'

const Skills = () => {
    return (
        <section id="skills" className=' px-5  md:py-20   py-16 bg-gray-100 w-full' >
            <div className="container m-auto flex  md:flex-row flex-col gap-10 bg-grey-50 " >


                <div className='flex-col flex gap-2 md:w-[100%]' >
                    <h2 className='text-2xl md:text-4xl font-bold pColor ' >Skills</h2>

                    <div className='text-justify mt-2 md:mt-5 text-gray-500 ' >
                        As a Third-year B.Tech student, I specialize in web development. My portfolio features diverse projects, showcasing my skills in creating modern, responsive, and interactive websites. I combine design and technology to deliver functional web solutions
                    </div>

                    <div className=' flex-col flex gap-5 mt-5 md:w-[100%]' >
                        <div className=' flex-col flex gap-2' >
                            <div className='flex justify-between font-semibold '>
                                <div>MERN Stack</div>
                                <div className='text-blue-800' >85%</div>
                            </div>
                            <div className='bg-gray-200  rounded-full  w-full' >
                                <div className='w-[85%] bg-blue-800    h-2 md:h-3 rounded-full ' />
                            </div>
                        </div>
                        <div className=' flex-col flex gap-2' >
                            <div className='flex justify-between font-semibold '>
                                <div>React Native</div>
                                <div className='text-blue-800' >50%</div>
                            </div>
                            <div className='bg-gray-200  rounded-full  w-full' >
                                <div className='w-[50%] bg-blue-800    h-2 md:h-3 rounded-full ' />
                            </div>
                        </div>
                        <div className=' flex-col flex gap-2' >
                            <div className='flex justify-between font-semibold '>
                                <div>Next js</div>
                                <div className='text-blue-800' >75%</div>
                            </div>
                            <div className='bg-gray-200  rounded-full  w-full' >
                                <div className='w-[75%] bg-blue-800    h-2 md:h-3 rounded-full ' />
                            </div>
                        </div>
                        <div className=' flex-col flex gap-2' >
                            <div className='flex justify-between font-semibold '>
                                <div>Git & Github</div>
                                <div className='text-blue-800' >90%</div>
                            </div>
                            <div className='bg-gray-200  rounded-full  w-full' >
                                <div className='w-[90%] bg-blue-800    h-2 md:h-3 rounded-full ' />
                            </div>
                        </div>





                    </div>
                </div>


            </div>
        </section>
    )
}

export default Skills
