import React from 'react';
import '../Css/project.css'; // Make sure your CSS path is correct

// Import project images
import OnlineDeliveryImg from '../Images/OnlineDeliveryApp.png';
import BirthdayPartyImg from '../Images/EventJoy.png';
import PortfolioImg from '../Images/portfolio.png';

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projectcontent">
        <p>
          I have worked on a variety of projects, ranging from responsive websites to interactive web applications. My projects showcase my skills in both front-end and back-end development, with a focus on clean code, performance, and user experience. I have experience building dynamic websites using React, HTML, CSS, and JavaScript, and I'm always eager to explore new technologies and frameworks. Below are some of the key projects I've worked on:
        </p>
      </div>

      <div className="projects-list">
        {/* Online Delivery App */}
        <div className="project">
          <img src={OnlineDeliveryImg} alt="Online Delivery App" className="project-image" />
          <div className="project-details">
            <h3>Online Delivery App</h3>
            <p>
              A web application with database integration that allows users to order goods or food easily and have them delivered to their door.
              <br />
              <span className="techstack">Techstack: React JS, Spring Boot (Java), MySQL</span>
            </p>
            <div className="buttons">
              <a href="https://github.com/roshanvjk/online-delivery/tree/main/frontend" target="_blank" rel="noopener noreferrer" className="button">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Birthday Party Event */}
        <div className="project">
          <img src={BirthdayPartyImg} alt="Birthday Party Event" className="project-image" />
          <div className="project-details">
            <h3>Birthday Party Event</h3>
            <p>
              A birthday party event app helps users plan and organize parties, and manage activities all in one place. It simplifies party planning for a seamless and fun celebration.
              <br />
              <span className="techstack">Techstack: React JS, Spring Boot (Java), PostgreSQL</span>
            </p>
            <div className="buttons">
              <a href="https://github.com/roshanvjk/EventJoy" target="_blank" rel="noopener noreferrer" className="button">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="project">
          <img src={PortfolioImg} alt="Portfolio" className="project-image" />
          <div className="project-details">
            <h3>Portfolio</h3>
            <p>
              A personal portfolio website showcasing my work, skills, and accomplishments. This website is designed to provide an overview of my career and the projects I have worked on.
              <br />
              <span className="techstack">Techstack: React JS, HTML, CSS</span>
            </p>
            <div className="buttons">
              <a href="https://github.com/roshanvjk/portfolio" target="_blank" rel="noopener noreferrer" className="button">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
