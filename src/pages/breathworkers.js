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
              <form onSubmit={handleSubmit} className="contact-form">
              <div style={{ marginTop: "20px" }}>
                <iframe
                  src="https://www.cognitoforms.com/f/QLZd_Lg6oEmOhHz0oQSkVQ/1"
                  allow="payment"
                  style={{ border: 0, width: "100%" }}
                  height="600"
                  title="Cognito Form"
                  required
                ></iframe>
                <script src="https://www.cognitoforms.com/f/iframe.js"></script>
              </div>
              </form>
              <p>{status}</p>

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
