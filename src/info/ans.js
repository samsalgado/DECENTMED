import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css';
// Import the updated CSS file
//When do I pay vs
//Who is The Merlin Group
//What is DECENTMED
//move button down
import { useTranslation } from 'react-i18next';
const ANS = () => {
  const {t} = useTranslation('common');
  return (
    <Container>
      <h3 className="text-center mb-4">{t("FAQ")}</h3> {/* Title for the entire section */}
      <Row>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Who is The Merlin Group World?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                {t("We are strategists that utlize new-aged technology to solve real-world problems.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("What is DECENTMED?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("We are a holistic medicine information portal that connects patients with providers.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("What is your core mission statement?")}</Card.Header>
            <Card.Body>
              <Card.Text>
               {t("3some")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Who is DECENTMED made for?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Providers looking for more patients")}
              </Card.Text>
              <Card.Text>
                {t("- Those who do not have health insurance")}
              </Card.Text>
              <Card.Text>
               {t("- Everyone, because Holistic medicine has a far better success rate than conventional")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Can holistic treatments help with my specific condition?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Our providers are qualified to help with a multiplicity of ailments like depression, burnout, diabetes, weight loss, and more")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Why healthcare?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                {t("We have witnessed the corruption of the healthcare system. After the pandemic, we noticed the catastrophic shift in the current system and want to provide a cheaper alternatives to healthcare globally.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ANS;