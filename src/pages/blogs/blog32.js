import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog32 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Interpreting The Readings Of Others')}</title>
        <meta property="og:title" content={t("Interpreting The Readings Of Others")} />
        <meta name="description" content={t("Why interpreting someone else's tarot reading is so hard — different layouts, different card meanings, different intuition — and how to tell whether what you're sensing comes from spirit or just your own hopes and fears.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('Interpreting The Readings Of Others')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('You have to learn the cards')}</p>
            <p className="blog-quote-card-sub">{t('and you have to learn to trust your own intuition.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('I have seen many requests on Reddit and elsewhere for help in interpreting readings. When I first started doing readings, I would have one or sometimes more than one book open in front of me. I would look at the interpretation and a few words would stand out to me. This was my intuition telling me these words applied to this reading. The best book on doing a reading that I have seen is Tarot In Action by Sasha Fenton. This book is NOT about interpreting individual cards but on doing a reading.')}</p>
            <p>{t('The main problems in interpreting a reading for others are:')}</p>
            <ol style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>{t("I usually don't know what if any layout they are using, and what the locations of the cards mean. Even if the other person is not consciously aware of it, the location of the cards often does have meaning.")}</li>
              <li>{t('Meanings of cards can vary from person to person, from situation to situation.')}</li>
              <li>{t('My intuition and therefore my interpretation is not the same as yours.')}</li>
              <li>{t('I may not know the deck you are using.')}</li>
            </ol>
            <p>{t("Because of this, when I do look at another person's reading, I usually just try for an overall impression. In some cases, this is obvious to me and I don't understand what more the other person is seeking. (The answer is not just no but NO!)")}</p>
            <p>{t("In rare cases, I get more. One time, I was looking at a spread done by another as a demonstration and was able to see the querent's current field of work in exact detail. This surprised me.")}</p>
            <p>{t('You have to learn the cards and you have to learn to trust your own intuition.')}</p>
            <p>{t('Plus I almost never do readings for myself. It is too easy to pick up on your own hopes and fears rather than what spirit wants you to know. Best way to tell the difference is info from yourself creates a lot of emotion, from spirit is almost entirely without emotion.')}</p>
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

export default Blog32;
