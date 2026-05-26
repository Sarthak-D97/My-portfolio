import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a product-driven Full-Stack Engineer who thrives on turning complex concepts into robust, production-ready applications. I build with a focus on clean architecture, performance, and security.
              <br />
              <br />
              I am highly proficient in core engineering languages like 
              <i>
                <b className="purple"> JavaScript/TypeScript, Go, and C++. </b>
              </i>
              <br />
              <br />
              With an academic and practical background in cybersecurity, I approach development with a unique <strong>security-first mindset</strong>. Whether I am architecting multi-tenant SaaS backends, setting up automated CI/CD pipelines, or optimizing frontend state, I ensure systems are both high-performing and deeply resilient.
              <br />
              <br />
              My favorite domain is the intersection of rapid product development and systems infrastructure. I routinely build applications utilizing modern ecosystems like <i><b className="purple">React, Next.js, NestJS, and MongoDB</b></i>, backed by containerization and cloud orchestration tools to maintain absolute operational agility.
              <br />
              <br />
              When I'm looking to sharpen my system-level thinking or step into a high-intensity flow state, I dive into 
              <a href="https://tryhackme.com/r/p/snowstormdevilis" target="_blank" rel="noopener noreferrer">
                <strong><i><b className="purple"> cybersecurity challenges</b></i></strong>
              </a> 
              where I am currently ranked in the global <strong>Top 2%</strong>. You can check out my security profile 
              <a href="https://tryhackme.com/r/p/snowstormdevilis" target="_blank" rel="noopener noreferrer">
                <strong><i><b className="purple"> here</b></i></strong>
              </a>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sarthak-D97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SarthakCha34602"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sarthakchauhan1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sarthak_gujjar_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;