import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sajid Amin </span>
            and I'm from <span className="purple">New York</span>.
            <br />
            I’m currently pursuing a <span className="purple">Bachelor of Science in Computer Science</span> at <span className="purple">St. John’s University</span>.
            <br />
            I’m also joining <span className="purple">Protiviti</span> as a
            <span className="purple"> Technology Consultant</span>, where I’m excited to continue developing my skills and work with innovative technologies to deliver valuable solutions for clients.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me learning, creative, and connected:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Trading and Investing 📈
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places ✈️
            </li>
            <li className="about-activity">
              <ImPointRight /> Occasionally Touch Grass 
            </li>
            <li className="about-activity">
              <ImPointRight /> Giving Back Through Community & Student Organizations
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What matters isn't how you start, but how you finish."
          </p>
          <footer className="blockquote-footer">Sajid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
