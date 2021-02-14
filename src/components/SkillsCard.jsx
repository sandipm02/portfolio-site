import { React } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import design from '../assets/design.png'
import code from '../assets/code.png'

import "../styling/skillcard.css";

const SkillCard = () => {
  return (
    <div className="cardContainer">
      <Container fluid>
        <Row>
          <Col sm={6}>
            <Card>
              <Card.Body>
                <img className= "cardImage"src={code}></img>
                <p className="textHeader"> Developer</p>
                <p className="bodyHeader"> The <strong>skillset</strong> to turn <strong>concepts </strong> 
                into <strong>reality.</strong> Writing clean efficent code and
                keeping up to date with the latest technology in every project.</p>
                <p className="tools">Languages</p>
                <p className="toolsList">Javascript,HTML,CSS,C/C++, Java</p>
                <p className="tools">Frameworks/Tech</p>
                <p className="toolsList">React.js</p>
                <p className="toolsList">Node/Express.js</p>
                <p className="toolsList">GraphQL/PostgresQL</p>
                <p className="toolsList">Less.js</p>
                <p className="toolsList">Bootstrap</p>
                <p className="toolsList">Lots of Coffee</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Card.Body>
              <img className= "cardImage" src={design}></img>
              <p className="textHeader"> Designer </p>
              <p className="bodyHeader"> The <strong>tools</strong> needed to bring
                an <strong>Idea</strong> to <strong>life</strong>. Keeping up to date with the latest design trends and tools
                to ensure stylish and futureproof designs.</p>
                <p className="tools">Experience</p>
                <p className="toolsList">UI/UX Design, Logo Creation, Asset Design</p>
                <p className="tools">Software</p>
                <p className="toolsList">Adobe Photoshop</p>
                <p className="toolsList">Adobe Illustrator</p>
                <p className="toolsList">Adobe After Effects</p>
                <p className="toolsList">Adobe XD</p>
                <p className="toolsList">Figma</p>
                <p className="toolsList">Pen & Paper</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillCard;
