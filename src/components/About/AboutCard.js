import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

// ✅ Importing the images
import networkPlusImg from "../../Assets/n+.png";
import securityPlusImg from "../../Assets/s+.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarthak Chauhan </span>
            from <span className="purple"> Roorkee, India</span>, currently based in <span className="purple">Bangalore</span>.
            <br />
            I am working as a <span className="purple">Frontend Engineer Intern at Physics Wallah</span>, crafting high-performance, scalable web architectures.
            <br />
            I hold a BCA (Hons.) in Cybersecurity from Lovely Professional University.
            <br />
            To bridge the gap between development and robust infrastructure, I have completed my CompTIA Network+ and CompTIA Security+ certifications.
            <br />
            {/* ✅ Images inserted here */}
            <img
              src={networkPlusImg}
              alt="CompTIA Network+"
              style={{ height: "170px", marginRight: "80px", marginLeft: "140px", marginTop: "25px", marginBottom: "25px" }}
            />
            <img
              src={securityPlusImg}
              alt="CompTIA Security+"
              style={{ height: "170px" }}
            />
            <br />
            <br />
            Apart from writing clean, performant code, here are a few things I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building full-stack SaaS products & experimenting with DevOps pipelines
            </li>
            <li className="about-activity">
              <ImPointRight /> Cracking CTF challenges and analyzing software vulnerabilities
            </li>
            <li className="about-activity">
              <ImPointRight /> Weight training, intense cardio sessions, and immersive gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that scale gracefully and fail securely!"{" "}
          </p>
          <footer className="blockquote-footer">Sarthak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;