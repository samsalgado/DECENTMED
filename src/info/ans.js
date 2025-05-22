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
            <Card.Header className='card-header' as="h5">{t("What is DECENTMED?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("We are a video education platform showcasing holistic medicine via Telehealth, a global Apothecary and decentralized technology to publicize provider studies and help obtain funding for their work.")}
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
            <Card.Header className='card-header' as="h5">{t("Who is DECENTMED made for?")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Holistic providers")}
              </Card.Text>
              <Card.Text>
                {t("- Those who do not have health insurance")}
              </Card.Text>
              <Card.Text>
                {t("- Health insurance")}
              </Card.Text>
              <Card.Text>
               {t("- People who would like to try holistic medicine")}
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
              <Card.Text>
                {t("- It’s best to schedule an initial consultation, where the practitioner can assess your condition and determine whether their approach is a good fit or if a referral to another type of care is recommended.")}
              </Card.Text>
              <Card.Text>
                {t("- Holistic practitioners consider your whole health picture, including lifestyle, nutrition, emotional well-being, and environment, to create a personalized care plan that complements conventional treatments if needed.")}
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