import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import howToConvert from '../../images copy/how-to-convert.png';
import conversionSystem from '../../images copy/conversion-system.png';
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const imgStyle = { display: 'block', width: '100%', maxWidth: '900px', height: 'auto', margin: '20px auto', borderRadius: '8px' };

const Blog36 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t("Functional Medicine Marketing")}</title>
        <meta property="og:title" content={t("Functional Medicine Marketing")} />
        <meta name="description" content={t("How functional medicine practitioners can turn website visitors into booked patients: short videos, social proof, an embedded booking calendar, and keywords that bring the right people to you.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t("Functional Medicine Marketing")}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('Most people will never scroll to find your booking link.')}</p>
            <p className="blog-quote-card-sub">{t('So we put it right in front of them.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t("I talk to functional medicine practitioners every week, and I hear the same thing over and over: \"I'm great with patients. I just don't know how to get them in the door.\" You spent years learning to find the root cause of someone's fatigue, gut issues, or hormone imbalance. Nobody taught you how to get a stranger on the internet to trust you enough to book a call.")}</p>
            <p>{t("Here's the good news: you don't need to become a marketer. You need a simple system that does three things. Keep people on your page, prove that your work actually helps, and make booking with you the easiest next step.")}</p>
          </div>
          <img src={howToConvert} alt={t("How to Convert, three steps for functional medicine practitioners")} style={imgStyle} />
          <div className='pr'>
            <h2>{t("1. Keep them on the page")}</h2>
            <p>{t("Most functional medicine websites are a wall of text. People skim for a few seconds, feel overwhelmed, and leave. A short video changes that. When a patient sees your face and hears you explain what you do in plain language, you stop being a stranger. Putting a video on a landing page can raise that page's conversion rate by as much as 80%. Pair it with a couple of simple infographics that show how you work, and people stay long enough to actually understand you.")}</p>
            <h2>{t("2. Let your patients do the talking")}</h2>
            <p>{t("Your case studies and reviews are the most persuasive thing you own, and most practitioners keep them hidden. We turn them into social media content that builds your authority over time. Businesses that actively share positive Google reviews on social media have seen a 28% average increase in engagement with those posts. We also draft the sales messages that turn those conversations into booked meetings, so you are not stuck writing DMs at night.")}</p>
            <h2>{t("3. Help the right people find you")}</h2>
            <p>{t("A beautiful website nobody visits doesn't help anyone. We build a keyword set around what your patients are actually searching for, list you in the directories that matter, and use AEO (answer engine optimization) so you show up when people ask AI tools for help. Every bit of that traffic, on your website and off it, gets pointed toward one place: booking a meeting with you.")}</p>
          </div>
          <img src={conversionSystem} alt={t("Our Conversion System and 5 Action Steps for Increasing Conversion Rate")} style={imgStyle} />
          <div className='pr'>
            <h2>{t("What this looks like in practice")}</h2>
            <p>{t("This is the exact system we use with DecentMed providers. Every provider gets a video interview, and we clip the first 30 to 90 seconds for your website. We post your educational content and case studies across social media to validate your work, and every post links straight to your booking page instead of your homepage. A booking link in the comments gives people one less chance to click away without taking action.")}</p>
            <p>{t("Then we make your calendar an inline embed, so potential clients can book without ever leaving your site. We place your booking link or contact button at the top of the page, because people do not want to scroll to find it. A/B testing has shown that placing a call to action above the fold can increase conversions by 317%.")}</p>
            <p>{t("None of this is flashy. It's just removing the friction between someone who needs help and the practitioner who can give it. If you're a functional medicine provider and you're tired of guessing, I'd love to talk with you about what this could look like for your practice.")}</p>
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
            href="https://telehealth.decentmed.org/signup"
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

export default Blog36;
