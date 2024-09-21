import React from 'react';

function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "MongoDB", "ExpressJS", "Git", "GitHub","Redux","MySQL","Python"];

  return (
    <section id="skills" className="skills">
      <h2>Tech Stack Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
