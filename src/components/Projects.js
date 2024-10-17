import React from 'react';

function Projects() {
  const projects = [
    { title: "Banking App", description: "A simple banking portal with transfer and payment features.", link: "https://build-a-banking-portal-with-node-and-express.vercel.app/" },
    { title: "Globomantics(Node and Express project)", description: "Personal portfolio showcasing skills and projects." ,link: "https://globomantics-flame.vercel.app/"},
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          
          <div className="project-card" key={index}>
            <a
            href={project.link} 
            target="_blank"
              >
              <h3>{project.title}</h3>
              </a>
            <p>{project.description}</p>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Projects;
