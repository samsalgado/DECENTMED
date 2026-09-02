import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog28 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Greetings all you wonderful, divine, unique glorious light workers!!!')}</title>
        <meta property="og:title" content={t("Greetings all you wonderful, divine, unique glorious light workers!!!")} />
        <meta name="description" content={t("Why do phrases like 'wonderful, divine, glorious light worker' feel hollow? A short reflection on ego-flattery, spiritual identity labels like starseed and lemurian, and why real realization has to come from within.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('Greetings all you wonderful, divine, unique glorious light workers!!!')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('The realization of such things must come from within')}</p>
            <p className="blog-quote-card-sub">{t('and never be dependent on what others say or think.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('This type of greeting makes me cringe. I only realized recently why this was so. The greeting is mostly true. But it seems to me it is superficial and panders to the egos of those addressed. The realization of such things must come from within and never be dependent on what others say or think.')}</p>
            <p>{t('This is also a problem for those who focus on ideas such as being a light worker, Star seed or lemurian. Unless these things have an impact on your current inner development, what use are they?')}</p>
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

export default Blog28;
