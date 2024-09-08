import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css'; // Import the updated CSS file

const Protocols = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Detoxification Protocols</Card.Header>
            <Card.Body>
              <Card.Text>
                - Dr. William Kelley: Nutrition detoxification for cancer patients
              </Card.Text>
              <Card.Text>
                - Dr Sebi: Detoxification protocol using Sea Moss and an alkaline "green" diet to cleanse the liver and colon.
              </Card.Text>
              <Card.Text>
                - Dr. Gerson: Detoxification protocol with raw juices and vegetables an <a href="https://gerson.org/coffee-enema-8-things-you-need-to-know/?gad_source=1&gclid=Cj0KCQjwrKu2BhDkARIsAD7GBou-t43MHZkA6SM-wjvUkmRmEzwQmXIXOxDcZGRzQpRiFIJbC_TWLgYaAgZtEALw_wcB">coffee enemas</a> (gold, green and white NOT roasted) in order to expel toxins accumulated from (dissolved tumor masses). The process is that the tumor is caught in the liver and released in the bile and exits through the kidney.The long dietary program of low-sodium and high potassium foods assisting with Tubercolosis, chronic diseases, asthma, arthritis, diabetes, heart conditions, and many cancers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Benefits of Preventive Wellness</Card.Header>
            <Card.Body>
              <Card.Text>
                - Make well-informed lifestyle choices
              </Card.Text>
              <Card.Text>
                - Detect early and better manage diseases
              </Card.Text>
              <Card.Text>
                - Avoid expensive treatments
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Benefits of Water Detox</Card.Header>
            <Card.Body>
              <Card.Text>
                - Aids in digestion
              </Card.Text>
              <Card.Text>
                - Improves circulation
              </Card.Text>
              <Card.Text>
                - Relieves constipation
              </Card.Text>
              <Card.Text>
                - Reduces inflammation
              </Card.Text>
              <Card.Text>
                - Reduces sugar cravings
              </Card.Text>
              <Card.Text>
                - Boosts energy levels
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Protocols;

