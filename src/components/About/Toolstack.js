import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <FaGithub fontSize={"28px"} color="#FFFFFF" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
