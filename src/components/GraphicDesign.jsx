import { React } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "../styling/graphicdesign.css";

import asset1 from "../assets/asset1.png";
import asset2 from "../assets/asset2.png";
import asset3 from "../assets/asset3.png";
import asset4 from "../assets/asset4.png";
import asset5 from "../assets/asset5.png";
import asset6 from "../assets/asset6.png";

const GraphicDesign = () => {
  return (
    <div className="graphicDesignBlock">
        <p className="titleText">
          Recent<strong> Graphic Design</strong> Work
        </p>
        <Container>
        <Row>
            <Col sm = {6} className="entireRow debug">
                <Image className="assetImage"src={asset1} Rounded></Image>
            </Col>
            <Col sm = {6} className="entireRow debug">
            <Image className="assetImage"src={asset2} Rounded></Image>
            </Col>
            </Row>
            <Row>
            <Col sm = {6} className="entireRow debug">
            <Image className="assetImage"src={asset3} Rounded></Image>
            </Col>
            <Col sm = {6} className="entireRow debug">
            <Image className="assetImage"src={asset6} Rounded></Image>
            </Col>
        </Row>
      </Container>

      <Container fluid className="graphicDesignSecond">
        <p className="titleText">
          Recent<strong> Devlopment </strong> Work
        </p>
        <Row className="imageBlock2">
          <a
            class="buttonStyling2"
            target="_blank"
            href="https://github.com/sandipm02"
          >
            ➤ Github
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default GraphicDesign;
