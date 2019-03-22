import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

const UIJumbo = ({ children }) => (
  <Jumbotron>
    <Container>
      <Row>
        <Col>
          <h4> Customized insurance plans for every body I suppose... </h4>
          <p>Styled with react-bootstrap</p>
        </Col>
        <Col>{children}</Col>
      </Row>
    </Container>
  </Jumbotron>
);

UIJumbo.propTypes = {
  children: PropTypes.node.isRequired
};

export default UIJumbo;
