import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import acuu from "../../images copy/conversion.png";
import Footer from "../../footer";
import "../../App.css";
import { useTranslation, Trans } from "react-i18next";
import { Button } from "react-bootstrap";

const Blog23 = () => {
  const { t } = useTranslation('common');
  const learnmore = () => {
    window.location.href = 'https://decentmed.org/signup/provider'
  }
  return (
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>
        <title>{t('Holistic Health Marketing')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta 
          name="description" 
          content=
            "Holistic health marketing thrives when brands connect mind, body, and lifestyle in authentic ways. Elevate your holistic marketing strategy with insights that help your wellness business - visit decentmed.org/signup/provider for more."        />
      </Helmet>
      <header>
        <Topbar />
      </header>

      <div className='container'>
        <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: 'sans-serif' }}>
          {t('Holistic Health Marketing')}
        </h1>
          <img className='gridimag' src={acuu} alt="logo" />
     
         <Button onClick={learnmore} className="custom-btn">
        {t('Providers: Signup Here')}
        </Button> 
      </div>

      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className='pr'>

          {/* ⭐ ONE BLOCK — TRANSLATABLE ALL AT ONCE ⭐ */}
          <Trans i18nKey="blog23">

            <p className="pr">
              {t("One of the premiere painpoints for holistic providers is marketing and advertising. Navigating the landscape of growing your practice without paying an exorbinant amount of money to a marketing company. There are so many tools, should providers just disregard marketing and let AI handle everything? This article walks holistic providers through holistic marketing and how to grow your practice without paying too much in marketing spend.")}
            </p>

            <p className="pr">
              {t("The problem with traditional marketing companies is that they are not designed for conversion optimization consulting. At DecentMed, we structure both our website and your website for conversion optimization. Utilizing education to establish you as an authority in your field is the primary way that our platform grows visibility. Holistic marketing requires the pivotal next step, conversion optimization. We accomplish this by driving traffic to the booking page of the provider or embedding a call button for direct access to providers. The best way for provider's to establish authority is to post provider studies on the platform; this is the final way that DecentMed executes holistic marketing for providers.")}
              <br /><br />
              <h2>{t("Conversion Optimization Consulting:")}</h2>
            </p>            
<p className="pr">-{t('Post your educational content on the platform to increase visibility')}</p>
<p className="pr">-{t('Video Interviews to keep potential patients engaged on the website for a longer period of time')}</p>
<p className="pr">-{t('Direct traffic to your Booking Page, embed your calendar directly on page and make it easier for the potential patient to call you directly')}</p>
<p className="pr">-{t('Post your testimonials, reviews and case studies to validate the effectiveness of your method')}</p>
<h2>{t('Holistic Marketing Strategy')}</h2>
<p className="pr">
  {t('Every provider has different goals, we offer principles for any goal, and tailor our solutions to your goals. Keyword research is essential for social media, Google Business Profile or website traffic. We implement keywords for you that other providers are not using. Furthermore, if you are a provider that prefers word of mouth - our team handles outreach and attends Alignable meetings on your behalf to ensure that your business grows. Call +18137664900 or visit the link above to join DecentMed.')}
</p>
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

export default Blog23;