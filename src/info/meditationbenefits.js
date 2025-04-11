import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Info.css'; // Import the updated CSS file
import { useTranslation } from 'react-i18next'
const MedBenefits = () => {
  const { t } = useTranslation('common');
  return (
    <Container>
      <h2 className="text-center mb-4">{t("Benefits of Meditation")}</h2> {/* Title for the entire section */}
      <Row>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Mental Health Benefits")}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("1. Reduction of Stress and Anxiety: Numerous studies have demonstrated that meditation can significantly lower stress levels. By promoting relaxation and reducing the production of stress hormones like cortisol, meditation helps individuals manage anxiety and improve their overall mood. Sleep meditation helps you sleep and overcome Insomnia.")}
              </Card.Text>
              <Card.Text>
                 {t("2. Improvement in Emotional Well-being: Regular meditation practice has been linked to increased levels of positive emotions and greater emotional resilience. It allows individuals to process feelings more effectively and enhances self-awareness, leading to healthier emotional responses.")}
              </Card.Text>
              <Card.Text>
                 {t("3. Enhanced Focus and Concentration: Meditation improves attention span and cognitive function. This heightened focus not only benefits daily tasks but also enhances productivity and creativity.")}
              </Card.Text>
              <Card.Text>
                 {t("4. Support in Managing Depression: Mindfulness meditation, in particular, has been shown to alleviate symptoms of depression. By fostering an awareness of thoughts and feelings without judgment, individuals can break cycles of negative thinking.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t("Physical Health Benefits")}</Card.Header>
            <Card.Body>
              <Card.Text>
                {t("1. Lower Blood Pressure")}
              </Card.Text>
              <Card.Text>
                 {t("2. Pain Management")}
              </Card.Text>
              <Card.Text>
                 {t("3. Improved Sleep Quality")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card mb-4">
            <Card.Header className='card-header' as="h5">{t('Getting Started with Meditation')}</Card.Header>
            <Card.Body>
              <Card.Text>
                 {t("- Start Small. Begin with just a few minutes each day, gradually increasing the duration as you become more comfortable.")}
              </Card.Text>
              <Card.Text>
                 {t("-  Find a Comfortable Space. Choose a quiet place where you can sit or lie down comfortably, free from distractions.")}
              </Card.Text>
              <Card.Text>
                 {t("- Focus on Your Breath. Pay attention to your breathing, noticing the sensation of air entering and leaving your body. This simple focus can help anchor your mind.")}
              </Card.Text>
            <Card.Text>
                 {t("- Be Kind to Yourself. Meditation is a practice, and it’s normal for the mind to wander. Gently bring your focus back to your breath or chosen focal point without self-judgment.")}
              </Card.Text>
              <Card.Text>
                 {t("- The healing power of meditation is profound, offering benefits that extend far beyond relaxation. By incorporating meditation into daily life, individuals can experience a transformative journey toward improved mental clarity, emotional stability, and physical well-being. As more people recognize its potential, meditation may well become a cornerstone of holistic health practices in our modern world.")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MedBenefits;
