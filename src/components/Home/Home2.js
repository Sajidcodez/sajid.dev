import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

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
              I’m a <b className="purple">Technology Consultant</b> who enjoys turning ideas into practical, scalable solutions. My experience spans <b className="purple">software engineering, data, AI, and cloud</b>, with a growing focus on building systems that solve real-world problems.
              <br />
              <br />
              I work primarily with <b className="purple">Python, JavaScript, TypeScript, and SQL</b>, and I enjoy developing across both frontend and backend environments. I’ve worked with technologies including <b className="purple">React.js, Next.js, Node.js, Express.js, and Flask</b> to build full-stack applications and data-driven solutions.
              <br />
              <br />
              I have interest in <b className="purple">Data Engineering</b>, particularly in working with platforms like <b className="purple">Microsoft Azure and AWS</b> to build reliable and scalable data pipelines.
              <br />
              <br />
              I’m always looking for opportunities to learn, experiment, build, and network. Whether I’m working on a professional project, exploring a new technology, or developing something of my own, I enjoy turning ideas into working systems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
