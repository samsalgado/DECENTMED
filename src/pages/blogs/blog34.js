import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog34 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('COVID')}</title>
        <meta property="og:title" content={t("COVID")} />
        <meta name="description" content={t("A letter from Coronavirus: not a punishment, but a wake-up call — on wildfires and floods ignored, factories gone quiet, clear water in Venice, and what happens if we forget once it's over.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('COVID')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('The earth screamed, but you turned her off.')}</p>
            <p className="blog-quote-card-sub">{t('So, I was born. I was not born to punish you. I was born to awaken you.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('The earth whispered, but you did not hear. The earth spoke, but you did not listen. The earth screamed, but you turned her off. So, I was born. I was not born to punish you. I was born to awaken you.')}</p>
            <p>{t('The earth cried out for help. Massive flooding, but you did not listen. Burning fires, but you did not listen. Strong hurricanes, but you did not listen. Terrifying tornadoes, but you did not listen. You still do not listen to the earth when ocean animals are dying due to pollutants in the waters. Glaciers melting at an alarming rate. Severe drought.')}</p>
            <p>{t('You did not listen to how much negativity the earth is receiving. Non-stop wars, non-stop greed. You just kept going on with your life. No matter how much hate there was, no matter how many killings daily. It was more important to get that last iPhone than worrying about what the Earth was trying to tell you.')}</p>
            <p>{t("But now I am here, and I have made the world stop in its tracks. I've made you finally listen. I've made you take refuge. I've made you stop thinking about material things. Now, you're like the Earth. You are only worried about your survival. How does that feel? I give you fever as fire as burns on earth. I give you respiratory issues, as pollution filled the Earth's air, I give you weakness, as the Earth weakens every day, I took away your comfort, your outings, the things you would use to forget about the planet and its pain.")}</p>
            <p>{t("And I made the world stop. And now Earth has better air quality. Skies are blue because factories are not spewing pollution into the Earth's air. The water in Venice is clean because the gondola boats that pollute the water are not being used. You are having to take time to reflect on what is important in your life.")}</p>
            <p>{t('Again, I am not here to punish you. I am here to awaken you. When all this is over and I am gone, please, remember these moments. Listen to the earth. Listen to your soul. Stop polluting the earth, stop fighting amongst each other, stop caring about material things and start loving your neighbors. Start caring about the Earth and all its creatures. Start believing in a creator because next time I may come back even stronger.')}</p>
            <p style={{ fontStyle: 'italic', marginTop: '20px' }}>{t('Signed, Coronavirus')}</p>
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

export default Blog34;
