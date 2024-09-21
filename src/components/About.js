// src/components/About.js
import React from 'react';
import '../styles/About.css';  // Link to the CSS for About section

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="../../image/1000027695-removebg-preview.jpg" alt="Profile" className="profile-image"/>
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with a strong focus on building modern, 
            user-friendly web applications. I enjoy tackling new challenges and 
            continuously learning new technologies to enhance my skill set.
          </p>
          <p>
            With a background in both frontend and backend development, 
            I bring a unique combination of creativity and technical proficiency.
          </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </div>
    </section>
  );
}

export default About;
