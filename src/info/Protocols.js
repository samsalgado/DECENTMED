import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css'; // Import the updated CSS file
import { useTranslation } from 'react-i18next';
const Protocols = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h3">{t('Detoxification Protocols')}</Card.Header>
            <Card.Body>
              <Card.Text>
                {t('- Dr. William Kelley: Nutrition detoxification for cancer patients')}
              </Card.Text>
              <Card.Text>
                {t(`- Dr Sebi: Detoxification protocol using Sea Moss and an alkaline 'green' diet to cleanse the liver and colon.`)}
              </Card.Text>
              <Card.Text>
                {t('- Dr. Gerson: Detoxification protocol with raw juices and vegetables an')}
                <a href="https://gerson.org/coffee-enema-8-things-you-need-to-know/?gad_source=1&gclid=Cj0KCQjwrKu2BhDkARIsAD7GBou-t43MHZkA6SM-wjvUkmRmEzwQmXIXOxDcZGRzQpRiFIJbC_TWLgYaAgZtEALw_wcB">
                  {t('coffee enemas')}
                </a> 
                {t('(gold, green and white NOT roasted) in order to expel toxins accumulated from (dissolved tumor masses). The process is that the tumor is caught in the liver and released in the bile and exits through the kidney.The long dietary program of low-sodium and high potassium foods assisting with Tubercolosis, chronic diseases, asthma, arthritis, diabetes, heart conditions, and many cancers.')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h3">{t('Benefits of Preventive Wellness')}</Card.Header>
            <Card.Body>
              <Card.Text>
                {t('- Make well-informed lifestyle choices')}
              </Card.Text>
              <Card.Text>
                {t('- Detect early and better manage diseases')}
              </Card.Text>
              <Card.Text>
                {t('- Avoid expensive treatments')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h3">{t('Benefits of Water Detox')}</Card.Header>
            <Card.Body>
              <Card.Text>
                {t('- Aids in digestion')}
              </Card.Text>
              <Card.Text>
                {t('- Improves circulation')}
              </Card.Text>
              <Card.Text>
                {t('- Relieves constipation')}
              </Card.Text>
              <Card.Text>
                {t('- Reduces inflammation')}
              </Card.Text>
              <Card.Text>
                {t('- Reduces sugar cravings')}
              </Card.Text>
              <Card.Text>
                {t('- Boosts energy levels')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Protocols;
