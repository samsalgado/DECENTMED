import React from 'react';
import "../App.css";
import './Info.css';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MeditationInfo = () => {
  const { t } = useTranslation("common");

  return (
    <div className='container'>
      <h1 className="title">{t('Meditation')}</h1>
      <iframe width="100%" height={500} src="https://www.youtube.com/embed/cQ-pEQZrVvw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <div style={{ marginTop: '20px', width: '100%' }}>
        <Button style={{ marginRight: '20px' }} variant="primary" href="https://sanjivana.com/" target="_blank">{t('Visit Serenity Meditations')}</Button>
        <Button variant="primary" href="mailto:serenitymeditation2021@gmail.com" target="_blank">{t('Contact')}</Button>
      </div>
      
      <br />
      <div className='pr'>
        <h3>{t('Benefits of Meditation')}</h3>
        <p>{t('In recent years, meditation has gained recognition not just as a relaxation technique, but as a powerful tool for healing the mind, body, and spirit. With roots in various spiritual traditions, modern research is uncovering the profound benefits of meditation on mental and physical health.')}</p>
        
        <h2>{t('Understanding Meditation')}</h2>
        <p>{t('Meditation encompasses a variety of practices designed to promote focused attention and heightened awareness. Techniques may include mindfulness, breath awareness, and visualization, among others. Regardless of the approach, the core aim remains the same: to cultivate a state of inner calm and clarity.')}</p>

        <h3>{t('Mental Health Benefits')}</h3>
        <p>{t('1. Reduction of Stress and Anxiety')}</p>
        <p>{t('Numerous studies have demonstrated that meditation can significantly lower stress levels. By promoting relaxation and reducing the production of stress hormones like cortisol, meditation helps individuals manage anxiety and improve their overall mood. Sleep meditation helps you sleep and overcome Insomnia.')}</p>

        <p>{t('2. Improvement in Emotional Well-being')}</p>
        <p>{t('Regular meditation practice has been linked to increased levels of positive emotions and greater emotional resilience. It allows individuals to process feelings more effectively and enhances self-awareness, leading to healthier emotional responses.')}</p>

        <p>{t('3. Enhanced Focus and Concentration')}</p>
        <p>{t('Meditation improves attention span and cognitive function. This heightened focus not only benefits daily tasks but also enhances productivity and creativity.')}</p>

        <p>{t('4. Support in Managing Depression')}</p>
        <p>{t('Mindfulness meditation, in particular, has been shown to alleviate symptoms of depression. By fostering an awareness of thoughts and feelings without judgment, individuals can break cycles of negative thinking.')}</p>

        <h3>{t('Physical Health Benefits')}</h3>
        <p>{t('1. Lower Blood Pressure')}</p>
        <p>{t('2. Pain Management')}</p>
        <p>{t('3. Improved Sleep Quality')}</p>

        <h3>{t('Getting Started with Meditation')}</h3>
        <p>{t('For those new to meditation, starting can feel daunting. However, it doesn’t require extensive time or complicated techniques. Here are some tips to begin:')}</p>

        <p>{t('1. Start Small')}</p>
        <p>{t('Begin with just a few minutes each day, gradually increasing the duration as you become more comfortable.')}</p>

        <p>{t('2. Find a Comfortable Space')}</p>
        <p>{t('Choose a quiet place where you can sit or lie down comfortably, free from distractions.')}</p>

        <p>{t('3. Focus on Your Breath')}</p>
        <p>{t('Pay attention to your breathing, noticing the sensation of air entering and leaving your body. This simple focus can help anchor your mind.')}</p>

        <p>{t('4. Be Kind to Yourself')}</p>
        <p>{t('Meditation is a practice, and it’s normal for the mind to wander. Gently bring your focus back to your breath or chosen focal point without self-judgment.')}</p>

        <p>{t('The healing power of meditation is profound, offering benefits that extend far beyond relaxation. By incorporating meditation into daily life, individuals can experience a transformative journey toward improved mental clarity, emotional stability, and physical well-being. As more people recognize its potential, meditation may well become a cornerstone of holistic health practices in our modern world.')}</p>
      </div>
    </div>
  );
}

export default MeditationInfo;
