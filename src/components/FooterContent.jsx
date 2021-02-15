import { React } from "react";
import { Container,Row,Col } from "react-bootstrap";

import "../styling/footer.css";

const FooterContent = () => {
  return (
    <div>
        <Container className="footerContent" fluid>
            <Row>
                <Col>
                <p className="footerText"> Created by <strong>Sandip</strong> || Powered by <strong>Coffee</strong></p>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default FooterContent;
