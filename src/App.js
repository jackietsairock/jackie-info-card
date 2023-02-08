import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Cards from "./Cards";
import Presonal from "./Personal";
import jackieInfo from "./jackie-info.json";

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" className="p-3 justify-content-center">
            <Presonal data={jackieInfo} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" className="p-3 justify-content-center">
            <Cards data={jackieInfo} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
