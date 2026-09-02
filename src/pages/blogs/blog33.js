import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog33 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('On Doing a Reading For You')}</title>
        <meta property="og:title" content={t("On Doing a Reading For You")} />
        <meta name="description" content={t("What actually goes into a tarot reading: card meaning, intuition, karma, psychology, and common sense. A look at pricing, why health issues take priority, and why the relationship between cards in a spread is almost entirely intuitive.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('On Doing a Reading For You')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('There is no right or wrong way to do a reading.')}</p>
            <p className="blog-quote-card-sub">{t('I never just state what will happen — I look at why it is happening.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p style={{ fontWeight: 'bold' }}>{t('75$ First ½ Hr, 60$ 2nd ½ Hr, 50$ each additional ½ hr. Via Zelle or Paypal.')}</p>
            <p>{t("The fees for my readings reflects my level of skill, study and experience (4000+). All readings are live with NO AI or chat. Recording is Recommended. If you do not feel you received your money's worth, pay me less but remember, just because you do not like what you heard does not make it less accurate. Fees are negotiable and barter is accepted.")}</p>
            <p>{t('There is no right or wrong way to do a reading. For me, for new clients, give me your name and date of birth only. No questions. I will tell you. I prefer to do only full readings. I will answer questions after the main reading is done, and on future visits we may skip directly to questions.')}</p>
            <p>{t("Important health issues take precedence over all else. This is not by my choice. Such issues make themselves known to me even before I lay out the cards, via feelings in my own body. These can be very specific or may need clarification via the aura, or by asking my pendulum a series of questions. Until they are addressed, I can't move on to the rest of the reading. I always recommend verification by a medical doctor.")}</p>
            <p>{t('I dislike mini readings or 3 card draws, especially for new clients. These do not allow enough time or scope for counseling and teaching. I do use a pendulum for yes/no questions, and for timing; most of these questions are suggested by the cards. I do not sugarcoat the info I get. I use the Rider-Waite Deck, Double Celtic Cross Spread (2 cards in each position) plus more if needed. Other cards or spreads are rarely used at present, but I am using The Spirit Animal Oracle. Some others, such as The Past Life Oracle, The Chakra Oracle, and The Mudras Deck, may be used in the future.')}</p>
            <p>{t('For me, readings are composed of a variety of parts.')}</p>
            <ol style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>{t('The actual meaning of the cards')}</li>
              <li>{t('Intuition – guiding which meanings I use. Can also include clairaudience and clairvoyance')}</li>
              <li>{t('Metaphysical principles such as Karma')}</li>
              <li>{t('Psychology')}</li>
              <li>{t('Common Sense (a surprisingly rare thing)')}</li>
            </ol>
            <p>{t('The boundaries between these parts are often unclear and the amount of each can vary greatly.')}</p>
            <p>{t('In any reading, I never just state what will happen. I always try to look at why it is happening, what lessons are being presented and how to avoid negative outcomes.')}</p>
            <p>{t('I usually use only one spread. I find using a variety of spreads to be confusing but this is just me.')}</p>
            <p>{t('The meaning of the different positions of the cards in a layout may be found in books or created. The relationship of one card to another in a particular location, for those cards in a reading, is almost entirely based on intuition.')}</p>
            <p style={{ fontSize: '0.85rem', marginTop: '30px' }}>{t('Please leave a review on my Google Business page at Old Wise Owl LLC, at Findmagicpeople.com, at Alignable.com/oldwiseowladvior or at my website oldwiseowladvisor.com.')}</p>
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

export default Blog33;
