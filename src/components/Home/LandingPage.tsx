import React from 'react'

const LandingPage = () => {
  return (
    <section id='home' className="text-gray-600 body-font  ">

      <div className="container mx-auto  items-center flex px-5 gap-10  py-10 md:flex-row flex-col">
        <div className=" hover:p-5 hover:shadow-none transition-all delay-100 ease-linear  lg:max-w-sm shadow-xl lg:w-full md:w-[30%]  BorderFancy  overflow-hidden w-[70%]">
          <img className="w-full h-full rounded-full BorderFancy" alt="hero" src="/author.jpg" />
        </div>

        <div className="lg:flex-grow md:w-[70%] lg:pr-24  justify-between  h-full gap-5 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900">Hello! <span className='pColor' >I am Gaurav Narnaware</span>
          </h1>
          <p className=" leading-relaxed  md:text-justify text-center ">Full stack Web Developer &#x2758; Passionate about design and development &#x2758; Always learning and growing &#x2758; Let&#10076;s connect!</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download CV</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact Us</button>
          </div>
          <div className="relative font-bold float flex   gap-5 justify-center items-center py-5 rounded-full">
            <div className=" w-10 rounded-full h-20 grid place-items-center border-2">
              <div className="w-1 bg-gray-300 h-10" />
            </div>
            <div>Swipe Up</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage

