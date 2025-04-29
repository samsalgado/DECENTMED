import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css'; // Import the updated CSS file
import { useTranslation } from 'react-i18next';
const ANS = () => {
  const {t} = useTranslation('common');
  return (
    <Container>
      <h3 className="text-center mb-4">{t("FAQ")}</h3> {/* Title for the entire section */}
      <Row>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Who is The Merlin Group?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                {t("We are an education platform that showcases Holistic Medicine and helps providers grow their business using AI-driven marketing strategies, social media management and unique offerings that helps our clients WIN.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Is the platform a subscription service?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("As of 2024, the platform is not a subscription service. In the future, we might make the shift to a subscription service for providers. Everyday users will never have to pay a subscription to a subscription fee for this platform.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("What is your core mission statement?")}</Card.Header>
            <Card.Body>
              <Card.Text>
               {t("The Merlin Group is personally and professionally invested in the re-emergence of revolutionary therapies.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Who is DECENT MED made for?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Alternative Medicine providers")}
              </Card.Text>
              <Card.Text>
                {t("- Those who do not have health insurance")}
              </Card.Text>
              <Card.Text>
               {t("- People who have distrust in the current healthcare system")}
              </Card.Text>
              <Card.Text>
                 {t("- Bitcoin countries and general Bitcoin users")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("What are your goals?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Broadcast these revolutionary Holistic treatments to billions of people worldwide")}
              </Card.Text>
              <Card.Text>
                {t("- Aid in global Bitcoin adoption")}
              </Card.Text>
              <Card.Text>
                {t("- Decentralize healthcare for 'alternatives' to be widely accepted")}
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

