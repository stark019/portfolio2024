import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img src={project.image} alt={project.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={project.githubLink} className="inline-block w-1/3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2 mb-2">GitHub</a>
        <a href={project.liveDemoLink} className="inline-block w-1/3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2 mb-2">Demo</a>
      </div>
    </div>
  );
};

const ProjectList = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden m-10">
    <h2 className="text-3xl font-bold text-purple-900">Projects</h2>
      <div className="flex flex-wrap m-auto">
        {currentProjects.map((project, index) => (
          <div className='justify-center'>
          <ProjectCard key={index} project={project} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className="mx-2 px-4 py-2 bg-purple-500 text-white rounded-md">{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;