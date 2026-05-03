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
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Rust </b>
              </i>
                  A cybersecurity expert, system admin, and network admin with a knack for solving challenges and ensuring systems run smoothly. I am very <strong>passionate about securing and optimizing IT infrastructure</strong>, whether it's protecting data or enhancing network performance.<br/><br/>
                   Usually, I find myself tackling complex problems and collaborating with talented individuals on impactful projects. But every now and then, I dive into <a href="https://tryhackme.com/r/p/snowstormdevilis" target="_blank" rel="noopener noreferrer"><strong><i><b className="purple">cybersecurity challenges</b></i></strong></a> to sharpen my skills and stay in the flow state. You can explore my activities on TryHackMe <a href="https://tryhackme.com/r/p/snowstormdevilis" target="_blank" rel="noopener noreferrer"><strong><i><b className="purple">here</b></i></strong></a>.<br/><br/>
                   <strong>Additionally,</strong> I have a strong foundation in data structures and algorithms (DSA) using C++, coupled with   proficiency in Linux systems. I possess working knowledge of modern web technologies such as React JS, MongoDB, and SQL, along with a basic understanding of Rust. My skill set enables me to approach problems with versatility and efficiency, making me adaptable to various technical domains.
              <br />
              <br />
              
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
                  href="https://github.com/Darkshadow-ssh"
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
