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
          <p className='lead'>Styled with react-bootstrap</p>
          <p className='lead'>To start the conversation use either of the following lines:</p>
          <ul>
            <li> I would like to buy an insurance </li>
            <li> I would like to purchase an insurance </li>
          </ul>
          <p className='lead'> <a href='https://github.com/ankitm123/qbot'>Github Repo</a> </p>
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
