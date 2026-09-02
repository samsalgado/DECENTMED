import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog35 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t("The Guru's Cat From Darshan magazine")}</title>
        <meta property="og:title" content={t("The Guru's Cat From Darshan magazine")} />
        <meta name="description" content={t("A short parable about how rituals outlive their reasons — a guru ties up his disruptive cat during talks, and centuries later, people are still tying up cats and writing about the sacred meaning of a habit that no longer means anything.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t("The Guru's Cat From Darshan magazine")}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('It continued for centuries, and learned people wrote about its divine meaning.')}</p>
            <p className="blog-quote-card-sub">{t('In fact, it had become meaningless.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('Whenever Guru gave a talk, his cat was a problem. He would come and disrupt the service. So, he decided that the cat would need to be tied up to a pillar next to the building during service. This went on for many years.')}</p>
            <p>{t('The guru died. The cat continued to be tied up. The cat died. The people got a new cat and continued to tie it up. Custom continued and became viewed as a sacred obligation. It continued for centuries, and learned people wrote about what it meant, its divine meaning. In fact, it had become meaningless.')}</p>
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

export default Blog35;
