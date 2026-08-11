import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartbot from "../../Assets/Projects/smartbot.png";
import noteBeats from "../../Assets/Projects/NoteBeats_pic.png";
import flappyBird from "../../Assets/Projects/Flappy_Bird.png";
import rebin from "../../Assets/Projects/Rebin.jpeg";
import co2Leaderboard from "../../Assets/Projects/Co2lb.png";
import weatherForecast from "../../Assets/Projects/Weather_forecast.png";
import Reveal from "../Reveal";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Reveal>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </Reveal>
        <Reveal>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartbot}
              isBlog={false}
              title="Smart Bot"
              description="A chatbot that helps users get quick answers and information through simple conversation."
              ghLink="https://github.com/Sajidcodez/SmartBot.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteBeats}
              isBlog={false}
              title="Note Beats"
              description="A creative app that turns study notes into lyrics and audio in a fun, interactive way."
              ghLink="https://github.com/Sajidcodez/NoteBeats.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappyBird}
              isBlog={false}
              title="Flappy Bird 2.0"
              description="A refreshed Flappy Bird remake with updated visuals and gameplay flow."
              ghLink="https://github.com/Sajidcodez/FlappyBird-2.0.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rebin}
              isBlog={false}
              title="Rebin"
              description="A project that helps make waste sorting and recycling easier to understand and manage."
              ghLink="https://github.com/Sajidcodez/Rebin.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={co2Leaderboard}
              isBlog={false}
              title="CO2 Leaderboard"
              description="A project that tracks and compares carbon emissions across different states and shows the data in a simple, easy-to-read way."
              ghLink="https://github.com/Sajidcodez/Co2-Leaderboard.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherForecast}
              isBlog={false}
              title="Weather Forecast"
              description="A modern weather app that lets users search for any city, view real-time forecasts, and explore detailed weather information in a clean, interactive interface."
              ghLink="https://github.com/Sajidcodez/Web102-Project-week7.git"
            />
          </Col>
          </Row>
        </Reveal>
      </Container>
    </Container>
  );
}

export default Projects;
