import React from 'react'
import ShowProjects from "../../components/Utility/ShowProjects"
function Myprojects() {
  return (
    <section id="skills" className=' px-5    py-5  w-full' >
      <div className="container m-auto flex  md:flex-row flex-col gap-10 bg-grey-50 " >
        <ShowProjects start={0} end={99} />
      </div>
    </section>
  )
}

export default Myprojects
