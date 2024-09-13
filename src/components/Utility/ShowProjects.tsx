// Projects.tsx
import React from "react";
import Link from "next/link";
import ProjectsData from "../../JSONData/ProjectsData"; // Adjust the import path as needed


// Define the Props type
interface ProjectsProps {
  start: number;
  end: number;
}

// Step 3: Use the defined props and project type in the component
const Projects: React.FC<ProjectsProps> = ({ start, end }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
      {ProjectsData?.slice(start, end)?.map((project) => (
        <div
          key={project.id}
          className="border GlassCard h-full rounded-md overflow-hidden"
        >
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={project.image}
            alt={project.title}
          />
          <div className="p-5">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {project.category}
            </h2>
            <h1 className="title-font  text-base md:text-lg font-medium text-gray-700 mb-3">
              {project.title}
            </h1>
            <p className="leading-relaxed mb-3  md:text-base text-sm text-justify">
              {project.description}
            </p>
            <div className="w-full  flex flex-col gap-1 " >
              <Link
                href={project.repoLink}
                target="_blank"
                className="text-white bg-gray-800 w-full px-2 py-1 mt-2 rounded-md justify-center flex gap-2 items-center"
              >
                <i className="uil uil-github" />
                <p className="text-xs   font-semibold ">View Repositories</p>
              </Link>

              {project?.liveLink && <Link
                href={project.liveLink}
                target="_blank"
                className="text-white bg-red-500 w-full px-2 py-1 mt-2 rounded-md justify-center flex gap-2 items-center"
              >
                <i className="uil uil-eye" />
                <p className="text-xs   font-semibold ">View Live</p>
              </Link>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
