import { React } from "react";
import { Container, Col, Row } from "react-bootstrap";

import "../styling/landingview.css";
import Icon from "../assets/character.png";
import imagesplash from "../assets/imagesplash.png"

const LandingView = () => {
  return (
    <div className="fullContainer">
      <Container fluid>
        <Row>
          <Col sm={12}>
              <div className="characterDiv">
              <img className="character" src={Icon}></img>
              </div>
          </Col>
        </Row>
        <Row>
          <Col className="text">
              <h1>I'm a <strong>Student, Designer,</strong> & <strong>Developer</strong></h1>
          </Col>
        </Row>
        <Row>
          <Col className="text2">
              <p>and I <strong>Love</strong> to <strong>Create</strong></p>
          </Col>
        </Row>
        <Row>
          <Col className="imageSplash">
              <p className="imageSplashText"> My name is <strong>Sandip</strong>, but my friends call me <strong>Dip</strong></p>
              <p className="imageSplashText2"> 
              I'm currently attending the <strong>University of Calgary</strong> in my second year, B.Sc Software Engineering. 
              As far back as I can remember, I've had a passion for <strong>creation</strong>. When I was younger, I sat on my computer
                sketching my favourite characters for hours on end. As I got older my interests began to diversify, into 
                <strong> game creation</strong>, <strong>web design</strong> and <strong>graphic art</strong>. The journey along the way, in each and every project. Discovering 
                new techniques, skills, shortcuts and <i>messing up a whole lot</i>. I love the whole experience. I am <strong>confident</strong>, <strong>outgoing </strong>
                and naturally <strong>curious</strong>, which means any undertaking no matter the scale peaks my interest. To date, I've designed
                for <strong>multiple companies</strong>, collaborated with <strong>brilliant and talented minds</strong>, and <strong>learned</strong> something <strong>new</strong> each and everyday.
              </p>
              <img className="imageSplashSrc" src={imagesplash}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingView;
