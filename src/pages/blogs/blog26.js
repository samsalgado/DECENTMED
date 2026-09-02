import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog26 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('On Special Dates And Portals')}</title>
        <meta property="og:title" content={t("On Special Dates And Portals")} />
        <meta name="description" content={t("Are dates like 11/11 truly cosmic portals, or just human-made numbering systems? A skeptical look at special dates, calendars across cultures, and the real difference between man-made numerology and observable astrological movement.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('On Special Dates And Portals')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('I am very skeptical of all this')}</p>
            <p className="blog-quote-card-sub">{t('and have sensed no special energies at these times.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('Special Dates, like 11/11, Portals. I am very skeptical of all this and have sensed no special energies at these times.')}</p>
            <p>{t('My skepticism arises from the fact that these dates are man made and specific to a particular culture. Other cultures use different calendars and some use different numbering systems. The Chinese, the Jewish People, India (I think), and others use different calendars. The Mayans used 2, The Europeans changed from the Julian Calendar to the Gregorian. The Sumerians based their counting on Base 60. There are climate and location differences as well. Go far enough north or south and very little of this applies.')}</p>
            <p>{t('Even within Astrology, there are several systems – ayurvedic, several Chinese systems. Within traditional astrology, there are many ways to divide up the different houses. I am no expert in these matters but it does make me wonder.')}</p>
            <p>{t('Physical events or astrological events are different. These are not based on man-made days and times but on the actual movement that can be observed in the heavens. This comment also does not apply to numbers that appear to people by "accident" such as angel numbers but here, discernment needs to be used.')}</p>
            <p>{t('I was recently told that using these dates was agreed upon by various metaphysical leaders.')}</p>
            <p>{t('Feel free to disagree')}</p>
            <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginTop: '30px' }}>
              {t('This Post is Free, No Strings Attached but it does represent a lot of Hard Work, Study and Experience so a Donation via Zelle would be appreciated. A list of other posts written by me is available on request to Oldwiseowladvisor@gmail.com. For posts on Wicca or put up by me but not written by me no donation is requested.')}
            </p>
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

export default Blog26;
