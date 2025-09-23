import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect, useState } from 'react';
//import ReactPlayer from 'react-player';
import JenB from '../cards/scarlett.JPG';
import { useTranslation } from 'react-i18next';
//import PhoneInput from 'react-phone-input-2'; // ✅ Import
import axios from 'axios';

export function Breathwork({ providerEmail }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('');

  //const handleChange = (e) => {
    //setFormData({ ...formData, [e.target.name]: e.target.value });
 // };

  /*const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post("https://decentmed-server.vercel.app/send-email", {
        ...formData,
        providerEmail,
      });

      setStatus("Email sent successfully!");
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email");
    }
  };
console.log(setFormData);
  return (
    <div>
      <main className="page-content">
        <Helmet>
          <title>{t("Somatic Breathwork")}</title>
          <meta name="description" content={t("If you want one of the best emotional eating books...")} />
        </Helmet>

        <header>
          <Topbar />
        </header>

        <div className="container">
          <h1>{t("Somatic Breathwork & Breathwork Coaches")}</h1>

          <div className="row">
            <div className="col-md-6">
              <h3>{t("Scarlett Dee")}</h3>
              <figure>
                <img src={JenB} alt="Scarlett" />
              </figure>
              <br />

              {/* Contact Form */}
              <div>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  </style>
  <a 
    href="https://book.carepatron.com/Scarlett-Dee/Scarlett-?p=aJmLuXtkR3esU9i7t2nEJg&s=KIVRtyGw&i=05vqrMEX&e=b"
    rel="noopener"
    target="_blank"
    title="Book appointment"
    style={{
      WebkitTextSizeAdjust: '100%',
      WebkitFontSmoothing: 'antialiased',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      WebkitTapHighlightColor: 'transparent',
      outline: 0,
      border: 0,
      margin: 0,
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      WebkitAppearance: 'none',
      textDecoration: 'none',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02857em',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      color: '#fff',
      backgroundColor: '#027360',
      textTransform: 'none',
      boxSizing: 'border-box',
      borderRadius: '4px',
      boxShadow: 'none',
      minWidth: 0,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      height: '36px',
      padding: '6px 16px',
      fontSize: '14px',
      lineHeight: '26px'
    }}
  >
    {t("Book appointment")}
  </a>
</div>
              <h5>{t("Scarlett Dee, Somatic Breathwork Coach:")}</h5>
              <p>
                {t(
                  "Scarlett has over 30 years of experience in yoga, healing, and self-mastery. She guides transformational breathwork journeys that help release stored trauma, regulate the nervous system, and support deep emotional healing. Her sessions offer a powerful reset—reducing stress, calming anxiety, and rebuilding confidence from the inside out. Scarlett’s work is both grounding and expansive, helping clients overcome inner challenges and return to a state of clarity, presence, and aligned self-leadership."
                )}
              </p>
              <p>
                {t(
                  "Scarlett is a certified: 9D Breathwork Coach & Facilitator, Hypnotherapist, Holistic Therapist, Tantra & Yoga Teacher Trainer"
                )}
              </p>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
