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
            I am a <span className="purple">Founding Engineer at PW LeapX</span> and the <span className="purple">Founder of Lireons</span>, specializing in zero-to-one product development, multi-tenant architectures, and cloud automation.
            <br />
            I hold a BCA (Hons.) in Cybersecurity from Lovely Professional University.
            <br />
            To back my systems engineering with deep defensive capabilities, I have completed both my CompTIA Network+ and CompTIA Security+ certifications.
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
            Beyond day-to-day engineering strategy, here are a few things I am highly passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Architecting scalable SaaS platforms & designing automated DevOps pipelines
            </li>
            <li className="about-activity">
              <ImPointRight /> Analyzing software vulnerabilities and competing in global CTF challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Maintaining a disciplined fitness regime (weight training & cardio) and gaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build systems that scale effortlessly, fail securely, and solve real-world problems!"{" "}
          </p>
          <footer className="blockquote-footer">Sarthak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;