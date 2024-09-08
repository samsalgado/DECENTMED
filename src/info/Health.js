import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css'; // Import the updated CSS file

const HealthFacts = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Health Facts</h2> {/* Title for the entire section */}
      <Row>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Healthcare Realities</Card.Header>
            <Card.Body>
              <Card.Text>
                - Estimated $455 billion spent on healthcare yearly is lost each year to fraud and corruption.
              </Card.Text>
              <Card.Text>
                - 45% of global citizens believe the healthcare sector is corrupt or very corrupt.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Obesity Statistics</Card.Header>
            <Card.Body>
              <Card.Text>
                - 1/3 Adults in the United States are obese.
              </Card.Text>
              <Card.Text>
                - 32.5% of American adults are overweight; obesity is linked to at least 60 chronic diseases.
              </Card.Text>
              <Card.Text>
                - Obesity affects 1/6 children in the United States. Obesity costs Americans an estimated $147 billion a year.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">Water and Degenerative Disease</Card.Header>
            <Card.Body>
              <Card.Text>
                - Our current water supply is processed and does not hydrate because the molecules are too big for capillaries.
              </Card.Text>
              <Card.Text>
                - Blood is 83% water; we need access to charged water, or electrically/sunlight charged water.
              </Card.Text>
              <Card.Text>
                - The 3 leading causes of degenerative disease: oxidized stress, dehydration, and acidity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HealthFacts;
