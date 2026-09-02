import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog27 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Defining Meditation: What it is, What it is Not')}</title>
        <meta property="og:title" content={t("Defining Meditation: What it is, What it is Not")} />
        <meta name="description" content={t("Guided meditations, visualizations, mindfulness, astral projection — are they really meditation? A closer look at the classic definitions of meditation from Hinduism and Buddhism, Shamatha and Vipassana, and why precise definitions matter.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('Defining Meditation: What it is, What it is Not')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('Meditation is a state of mind')}</p>
            <p className="blog-quote-card-sub">{t('that can be practiced at any time and in any position.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('These days many people are using the word meditation for many things that are not meditation by any classic definition that I have been taught. These things include guided meditation of various types, relaxation techniques, working with energy, visualizations, connecting with animal allies, Angels or Deities, astral projection, and mindfulness. I am sure there are more. Some say these are merely types of meditation. That may be, but the distinctions have become very blurred. To me, none of these are meditation, although they all use meditation as a foundation.')}</p>
            <p>{t('To the best of my knowledge, in Hinduism and Buddhism there are two types of meditation: Shamatha, or centering and grounding, and Vipassana, or insight meditation.')}</p>
            <p>{t("Shamatha is the best known. It involves counting your breath and that is all. There is no special breathing technique, you just breathe and count. The idea is that you stay focused on breathing and counting; any other thoughts, such as the pain in your knees or wondering if you left the stove on, are acknowledged and then let go so that you go back to counting. What this does is it teaches you to focus on only one thing. It also tends to teach you that the thoughts that are bothering you don't last, especially if you pay no attention to them. The strictest, most advanced form of this in Japan is called Shikantaza, which means just sitting. Here you do not even count the breath, you just sit with whatever you feel or see.")}</p>
            <p>{t('In Vipassana, or insight meditation, you choose a specific object, thought, or emotion to focus on. This is observed without judgment, without analysis. The only exception to this may be asking the question, "What is this?" over and over. The goals are focus, seeing things as they are without judgement, and realizing how ephemeral our thoughts are.')}</p>
            <p>{t('It is my belief that for both types of meditation, how you sit is not of huge importance. There are some advantages to the traditional positions. Among other things, assuming a meditation posture signals your mind and body that it is time to meditate. However, if you must be in these positions and no other to meditate, then they become limitations. To me, meditation is a state of mind that can be practiced at any time and in any position.')}</p>
            <p>{t('Wiccans have a name that covers several techniques. It is Pathworking. I am oathbound not to reveal more. I feel that having names other than meditation for these other practices is important to maintain what meditation is really about.')}</p>
            <p>{t('I may be mistaken in some of my understanding. I do not pretend to be a master of meditation. Please comment on this.')}</p>
            <p style={{ fontStyle: 'italic' }}>{t('PS, if you practice magic, it is very important to get in the habit of using precise definitions in both your thoughts and words.')}</p>
            <p style={{ fontSize: '0.85rem', marginTop: '30px' }}>{t('A list of other posts written by me is available on request to Oldwiseowladvisor@gmail.com.')}</p>
          </div>
          <Button
            style={{
              display: 'block',
              margin: '0 auto',
              padding: '10px 20px',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              textAlign: 'center',
              textDecoration: 'none',
            }}
            className="custom-btn"
            href="https://oldwiseowladvisor.com/#contactus"
            target="_blank"
          >
            {t('Connect with Samuel')}
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog27;
