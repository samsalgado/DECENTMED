import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css';
import { useTranslation } from 'react-i18next';

const AdditionalServices = () => {
  const { t } = useTranslation('common');

  const services = [
    t("- Custom-Built CRM for patient acquisition and retention"),
    t("- Video Marketing Services"),
    t("- Active Social Marketing Strategies for your website and social media"),
    t("- AI-Enhanced Marketing strategies and automation for your business"),
  ];

  const issue_2 = [
    t("- Boosting evidence-based claims by posting provider studies on our platform and a decentralized network"),
    t("- You can standardize documentation by posting studies from providers"),
    t("- Standardized data and information on our platform show to insurance companies that holistic medicine works"),
  ];

  const points = [
    t("- The studies are stored on a relay network that makes censorship more difficult and mark the beginning of long-term data"),
    t("- The information is showcased on our telehealth platform, backlinking to your content and enhancing your professional credibility"),
    t("- Using video marketing, you can establish your practice as an authority in the industry"),
  ];

  return (
    <Container fluid>
      <h2 className="text-center mb-4">{t("Pain Points & Our Solutions")}</h2>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card className="card mb-4">
            <Card.Header className="card-header" as="h5">
              {t("Patient Management & Acquisition")}
            </Card.Header>
            <Card.Body>
              {services.map((service, index) => (
                <Card.Text key={index}>{service}</Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card className="card mb-4">
            <Card.Header className="card-header" as="h5">
              {t("Insurance Reimbursement")}
            </Card.Header>
            <Card.Body>
              {issue_2.map((issue, index) => (
                <Card.Text key={index}>{issue}</Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card className="card mb-4">
            <Card.Header className="card-header" as="h5">
              {t("No Long-Term Data")}
            </Card.Header>
            <Card.Body>
              {points.map((point, index) => (
                <Card.Text key={index}>{point}</Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdditionalServices;
