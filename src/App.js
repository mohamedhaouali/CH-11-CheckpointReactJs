import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <header className="App-header">
        <h1>Formulaire Contact</h1>
        <Container fluid>
          <Form>
            <Row>
              <Col md>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Exemple@gmail.com" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group>
                  <Form.Label>Please specify your need *</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message *</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </header>

      <footer
        id="sticky-footer"
        class="flex-shrink-0 py-4 bg-dark text-white-50"
      >
        <div class="container text-center">
          <small>Copyright © 2021 Mohamed Haouali</small>
        </div>
      </footer>
    </div>
  );
}

export default App;

