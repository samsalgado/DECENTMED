import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog30 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Putting the Whole (inner person) in the forefront of Holistic Medicine')}</title>
        <meta property="og:title" content={t("Putting the Whole (inner person) in the forefront of Holistic Medicine")} />
        <meta name="description" content={t("Nutrition, detox, energy work, Reiki — all useful, but all work from the outside in. A case for putting inner work — shadow work, mindset, karmic lessons — at the forefront of holistic medicine, since root causes left unaddressed simply return.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('Putting the Whole (inner person) in the forefront of Holistic Medicine')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('What is going on in the world, mirrors what is going on within.')}</p>
            <p className="blog-quote-card-sub">{t('If we wish outer change, we must begin with inner change.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('Wholistic Medicine today can consist of many parts. Nutrition, Detoxing the body, Pure water, Lightwave patches, Aromatherapy, Massage, Reiki. The list goes on. They are all very useful. However, all of these work from the outside, in. They do not address the root causes behind the problems we are having. This is mental, emotional and Karmic, the inner person.')}</p>
            <p>{t('I am not talking about therapy for mental illness. This is still needed. I am talking about counseling for mental wellness. This can include shadow work, inner child work, mindset work and other areas. There also needs to be a large educational part of this on spiritual principles.')}</p>
            <p>{t('Our conscious mind may lead us to Holistic solutions but unless the subconscious mind is also addressed along with the Karmic lessons we must learn, these problems will not be solved. They will either come back in the same form, or in a different form. If the root causes are addressed, the outer problem may simply disappear, or it will become easy to treat since there is no longer any inner resistance.')}</p>
            <p>{t('I feel this needs to be at the forefront of medicine today. Many give lip service to these ideas but how many insist that this be addressed either during or prior to using other methods?')}</p>
            <p>{t('The connection between mental issues and physical illness is not well understood and often overlooked. Why? Because we have been taught to look without, not within. And because the connection is not obvious or highly visible.')}</p>
            <p>{t('This is equally true on a social and political level. What is going on in the world, mirrors what is going on within. If we wish outer change, we must begin with inner change.')}</p>
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

export default Blog30;
