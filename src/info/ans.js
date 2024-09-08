import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css'; // Import the updated CSS file

const ANS = () => {
  return (
    <Container>
      <h3 className="text-center mb-4">FAQ</h3> {/* Title for the entire section */}
      <Row>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Who is The Merlin Group?</Card.Header>
            <Card.Body>
              <Card.Text>
                We are Bitcoin consultants and developers integrating the world onto Bitcoin via large scale projects that change the world.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Is the platform a subscription service?</Card.Header>
            <Card.Body>
              <Card.Text>
                As of 2024, the platform is not a subscription service. In the future, we might make the shift to a subscription service for providers. Everyday users will never have to pay a subscription to a subscription fee for this platform.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">What is your core mission statement?</Card.Header>
            <Card.Body>
              <Card.Text>
              The Merlin Group is personally and professionally invested in the re-emergence of revolutionary therapies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Who is DECENT MED made for?</Card.Header>
            <Card.Body>
              <Card.Text>
                - Alternative Medicine providers
              </Card.Text>
              <Card.Text>
                - Those who do not have health insurance
              </Card.Text>
              <Card.Text>
                - People who have distrust in the current healthcare system
              </Card.Text>
              <Card.Text>
                - Bitcoin countries and general Bitcoin users
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">What are your goals?</Card.Header>
            <Card.Body>
              <Card.Text>
                - Showcasing revolutionary treatments to billions of people worldwide
              </Card.Text>
              <Card.Text>
                - Aid in global Bitcoin adoption
              </Card.Text>
              <Card.Text>
                - Decentralize healthcare for "alternatives" to be widely accepted
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Why healthcare?</Card.Header>
            <Card.Body>
              <Card.Text>
                We have both witnessed the corruption of the healthcare system. After the pandemic, we notice the catastrophic shift in the current system and want to provide a cheaper alternatives to healthcare globally.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ANS;

