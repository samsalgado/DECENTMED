import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css'; // Import the updated CSS file
import { useTranslation } from 'react-i18next';

const AdditionalServices = () => {
  const { t } = useTranslation('common');
  const services = [
    "AI-driven Content Creation",
    "AI-Enhanced Holistic Consultation",
    "Web Design",
    "YouTube Growth Strategies",
    "AI Automation & Video Editing",
    "Video Content Creation",
    "Social Media Management",
    "Email Marketing",
    "Omnichannel Marketing Strategy",
    "Video Repurposing",
    "Community-driven SEO",
    "Multi-language SEO",
    "Amazon SEO",
    "Brand Storytelling"
  ];

  return (
    <Container fluid>
      <h2 className="text-center mb-4">{t("Additional Services")}</h2>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Additional Services")}</Card.Header>
            <Card.Body>
              {services.map((service, index) => (
                <Card.Text key={index}>{t(service)}</Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdditionalServices;
