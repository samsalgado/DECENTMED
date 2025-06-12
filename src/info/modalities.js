import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css'; // Import the updated CSS file
import { useTranslation } from 'react-i18next'
const Modalities = () => {
  const { t } = useTranslation('common');
  return (
    <Container>
      <h2 className="text-center mb-4">{t("Hypnotherapy Modalities")}</h2>
      <Row>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Parts Therapy")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Core Transformation to transform negative subconscious beliefs.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Regression Therapy")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Get to the root of long-term issues that often stem from childhood trauma(s) that occurred before age 7 and helps the client to transform their pain and mental anguish into healing and wholeness.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Past-Life Regression")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Access your past-life to discover spots that you are missing.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Modalities;

