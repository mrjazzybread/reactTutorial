import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from "./header.js";
import Education from "./education.js";
import Employment from "./employment.js";
import LifePhilosophy from "./lifePhilosophy.js";
import Languages from "./languages.js";

class App extends Component {
  
  render(){
    return (
      <Container fluid>
        <Header/>
        <Row>
          <Col>
            <Employment />
          </Col>
          <Col>
            <LifePhilosophy />
            <Education />
            <Languages />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
