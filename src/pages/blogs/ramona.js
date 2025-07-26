import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import ramona from "../../images copy/ramona.jpeg";
import Footer from "../../footer";
import "../../App.css";
import { useTranslation } from "react-i18next";
const Ramona = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Helmet>
        <title>{t('Corporate Mindfulness')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover the key to mindfulness and transformation. Ramona Crabtree-Falkner has been in the holistic health space for over 20 years. This article explains her guide to corporate mindfulness." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
        <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0', fontFamily: 'sans-serif'}}>{t('Pain Pill for Back: Best Chiropractor Near Me')}
        </h1>
        <a href="https://authenticlifejourney.as.me/schedule/f3645bcd/appointment/59514298/calendar/any?appointmentTypeIds[]=59514298">
        <img className='gridimag' src={ramona} alt="logo" />
        </a>
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className='pr'>
          <p>
            {t(`Are you a high-performing woman who feels stuck? Do you have it all together and still feel disconnected? Corporate burnout is right around the corner, so let this be your warning sign. You do not have to feel stuck, you can feel connected again and do not have to do it alone. Transformative coach Ramona Crabtree-Falkner can help you reconnect with yourself.`)}</p>
          <p>
            {t("A review speaks volumes to the impact of coaching. Let's review some reviews from her previous clients. 'Ramona's intuitive guidance and transformative mindfulness techniques gave me the clarity I needed to align with my purpose and manifest the life I always wanted.' 'So much of my growth has come from Authentic Life Journey'. With over 23% (National Institute of Mental Health) of women dealing with anxiety, empowerment is the best path forward.")}
          </p>
          <iframe
          className="centered-video"
          src="https://www.youtube.com/embed/O9i9uQbgszw?si=USPBaFFfJciRX_ol"
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
          style={{
            maxWidth: '500px',
            width: '100%',
            height: 'auto'
          }}
        />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ramona; 
