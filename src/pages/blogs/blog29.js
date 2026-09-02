import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog29 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('On Real, Lasting Healing')}</title>
        <meta property="og:title" content={t("On Real, Lasting Healing")} />
        <meta name="description" content={t("Treating symptoms without asking what caused them rarely leads to real healing. A look at why root causes — karmic and spiritual lessons, past trauma, misinformation, even past lives — matter more than the symptom itself, and why the real answers are always found within.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('On Real, Lasting Healing')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('What is the real root of the problem?')}</p>
            <p className="blog-quote-card-sub">{t('The answers are found within, not without.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('Almost all the time, the focus is on treating symptoms and stops there. People rarely look at causes. What created the need for detox? What created the need for a light wave patch? What created the need for an atunement? Addressing symptoms is helpful but it must not stop there. We must ask what is the real root of the problem?')}</p>
            <p>{t('The answer to this is found in two areas. The first is what karmic/spiritual lessons are we meant to learn from what is occurring. The second is what happened in the past to create this. It could be some past trauma. It could be from being taught misinformation or poor behavioral examples. It could be from a past life.')}</p>
            <p>{t('Once the symptom is relieved, then the real work on psychological and spiritual levels needs to start with the answers being found within, not without.')}</p>
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

export default Blog29;
