import React from 'react'

const Experience = () => {
    return (
        <section id="experience" className=' px-5   flex-col flex gap-10 py-10 w-full' >
            <div className="container m-auto flex   flex-col gap-10 bg-grey-50 " >
                <h2 className='text-2xl md:text-4xl font-bold pColor ' >Experience</h2>
                <div className=" flex flex-wrap  ">



                    <div className="flex relative pt-5 pb-10 mx-auto w-full">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-20 sm:mt-5 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-14 h-14 bg-white overflow-hidden rounded-full inline-flex items-center justify-center">
                                <img src="https://media.licdn.com/dms/image/C4D0BAQFQUt_CVh0peg/company-logo_200_200/0/1519932567650?e=2147483647&v=beta&t=M8fToCzqjWlLrq3RetlCcVeod549CPhvfAzWZ5wZwgU" width="100%" alt="itnetworkz" />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                                    Salesforce CRM & Prerequisites (ADMIN)</h2>
                                <p className="leading-relaxed text-gray-500 font-medium ">Here we learn about Salesforce CRM and How Cloud based application are Developed using Salesforce</p>
                                <p className='font-semibold' >Intern (1.5 Months) </p>
                           

                            </div>
                        </div>
                    </div>

                    <div className="flex relative pt-5 pb-10 mx-auto w-full">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-20 sm:mt-5 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-14 h-14 bg-white overflow-hidden rounded-full inline-flex items-center justify-center">
                                <img src="https://img.ebonow.com/Logo/eboLogobluebig.webp" alt="ebo" width="100%" />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">EBO solutions pvt. ltd</h2>
                                <p className="leading-relaxed text-gray-500 font-medium ">Help to develop an Party Decor Application using MERN Stack</p>
                                <p className='font-semibold' >Intern (2 Months) </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



        </section>
    )
}

export default Experience
