import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import conversion from "../../images copy/conversion.png";
import Footer from "../../footer";
import "../../App.css";
import { useTranslation, Trans } from "react-i18next";
import { Button } from "react-bootstrap";

const Blog24 = () => {
  const { t } = useTranslation('common');
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
  return (
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>
        <title>{t('Conversion Rate Optimization Consultant')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta 
          name="description" 
          content=
            "Experience a conversion rate optimization consultant to scale your holistic health practice. Elevate your holistic marketing strategy with insights that help your wellness business - visit decentmed.org/signup/provider for more."        />
      </Helmet>
      <header>
        <Topbar />
      </header>

      <div className='container'>
        <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: 'sans-serif' }}>
          {t('Experience a Conversion Rate Optimization Consultant')}
        </h1>
          <img className='gridimag' src={conversion} alt="logo" />
     
         <Button onClick={learnmore} className="custom-btn">
        {t('Providers: Signup Here')}
        </Button> 
      </div>

      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className='pr'>

          {/* ⭐ ONE BLOCK — TRANSLATABLE ALL AT ONCE ⭐ */}
          <Trans i18nKey="blog24">
              <h2>{t("Conversion Optimization Consulting:")}</h2>
<p className="pr">-{t('Insert a video on Homepage')}</p>
<p className="pr">-{t('Link to your Booking Page or Add a Call Button from Social Media')}</p>
<p className="pr">-{t('Embed Booking Link at Top of Page')}</p>
<p className="pr">-{t('Create Social Media Series posting your Reviews')}</p>
<p className="pr">-{t('Embed High Volume and Low Difficulty Keywords to your website and Google Business Profile Description')}</p>
          </Trans>
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
          href="https://decentmed.org/signup/provider"
          target="_blank"
        >
          {t("Learn More")}
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Blog24;