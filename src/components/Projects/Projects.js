import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import profile from "../../Assets/Projects/profile.png";
import newsapp from "../../Assets/Projects/newsapp.jpg";
import hotel from "../../Assets/Projects/hotel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="NewsApp"
              description="This is a sleek and intuitive web application built with React, designed to keep you up-to-date with the latest news headlines from around the world. Whether you're interested in global affairs, technology updates, or entertainment gossip, this app provides a seamless way to access current events at your fingertips."
              ghLink="https://github.com/Sarthak-D97/My-News-App-React"
              demoLink="https://newswallah2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="TNV(The Nereus Villa) Hotel Website"
              description="I have created an elegant, responsive website that showcases The Nereus Villa's unique offerings, including luxury accommodations, gourmet dining, and exceptional amenities."
              ghLink="https://github.com/Sarthak-D97/The_neures_villa_hotel"
              demoLink="https://sarthak-d97.github.io/The_neures_villa_hotel/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profile}
              isBlog={false}
              title="Profile Site"
              description="Personal profile website showcasing my portfolio, skills, and projects. The site includes detailed sections about my technical expertise, educational background, and professional experience. Features an interactive UI with smooth navigation, responsive design, and a dark mode toggle for better user experience.  Integrated contact form for easy communication, with backend support for email notifications."
              ghLink="https://github.com/Sarthak-D97/Sarthak_Profile"
              demoLink="https://sarthak-profile.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
} 

export default Projects;
