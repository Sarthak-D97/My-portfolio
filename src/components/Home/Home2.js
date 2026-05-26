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
              I am a product-focused Founding Engineer and SaaS Founder who thrives on taking complex platforms from inception to production scale. I bridge the gap between high-velocity product execution and rigorous system engineering.
              <br />
              <br />
              My core technical weapons include languages like 
              <i>
                <b className="purple"> JavaScript/TypeScript, Go, and C++. </b>
              </i>
              <br />
              <br />
              As a <style type="text/css"></style><strong>Founding Engineer at PW LeapX</strong> and the <strong>Founder of Lireons</strong> (a comprehensive multi-tenant School ERP SaaS), I spend my days dealing with heavy architectural responsibilities. This ranges from building robust full-stack platforms using <i><b className="purple">Next.js, NestJS, and MongoDB/PostgreSQL</b></i> to orchestrating infrastructure-as-code deployments via <i><b className="purple">Terraform and AWS</b></i>.
              <br />
              <br />
              With a formal background in cybersecurity, I treat security not as an afterthought, but as a core architectural tier. I ensure every line of code is resilient to vulnerabilities, and every CI/CD pipeline is hardened.
              <br />
              <br />
              When I need to step out of product development and into an intense, pure problem-solving flow state, I tackle advanced offensive and defensive scenarios on 
              <a href="https://tryhackme.com/r/p/snowstormdevilis" target="_blank" rel="noopener noreferrer">
                <strong><i><b className="purple"> cybersecurity challenges</b></i></strong>
              </a> 
              where I maintain a global rank in the <strong>Top 2%</strong>. You can view my progress 
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