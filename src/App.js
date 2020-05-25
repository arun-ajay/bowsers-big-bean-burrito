import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

import Header from "./components/header/Header"

function App() {
  return (
    <Container fluid className = "mainPageContainer">
      <Row className = "mainPageNavBar">
        <Header></Header>
      </Row>
      <Switch>
        <Row className = "mainPageContent">
          <Route path = "/" exact/>
        </Row>
      </Switch>
    </Container>
  );
}

export default App;
