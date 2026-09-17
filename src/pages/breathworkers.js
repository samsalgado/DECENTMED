import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect } from 'react';
import JenB from '../cards/scarlett.JPG';
import instagram from "../images copy/insta.png";
import facebook from "../images copy/facebook.png";
import { useTranslation } from 'react-i18next';

export default function Breathwork({ providerEmail }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation('common');

  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t("Somatic Breathwork Coaches")}</title>
        <meta property="og:title" content={t("Somatic Breathwork Coaches")} />
        <meta name="description" content={t("Find certified somatic breathwork coaches offering guided sessions to reduce stress, release trauma, and reconnect breath with the nervous system. Explore practitioner profiles and book a session.")} />
      </Helmet>

      <header>
        <Topbar />
      </header>

      <div className="container">
        <h1>{t("Somatic Breathwork & Breathwork Coaches")}</h1>

        <div className="provider-grid" style={{ alignItems: 'start' }}>
          <div className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
            <div className="card-body provider-card-body">
              <div className="provider-card-top">
                <img src={JenB} alt="Scarlett Dee" className="provider-photo" />
                <h2 className="h4 mb-1">{t("Scarlett Dee")}</h2>
                <p className="text-muted mb-0">{t("Scarlett Dee, Somatic Breathwork Coach:")}</p>
              </div>

              <p className="card-text small provider-bio">
                {t("Scarlett has over 30 years of experience in yoga, healing, and self-mastery. She guides transformational breathwork journeys that help release stored trauma, regulate the nervous system, and support deep emotional healing. Her sessions offer a powerful reset—reducing stress, calming anxiety, and rebuilding confidence from the inside out. Scarlett’s work is both grounding and expansive, helping clients overcome inner challenges and return to a state of clarity, presence, and aligned self-leadership.")}
              </p>
              <p className="card-text small provider-bio">
                {t("Scarlett is a certified: 9D Breathwork Coach & Facilitator, Hypnotherapist, Holistic Therapist, Tantra & Yoga Teacher Trainer")}
              </p>

              <div className="provider-card-footer">
                <a
                  href="https://book.carepatron.com/Scarlett-Dee/Scarlett-?p=aJmLuXtkR3esU9i7t2nEJg&s=KIVRtyGw&e=b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  {t("Book Appointment")}
                </a>
                <div className="provider-social-icons">
                  <a href="https://www.instagram.com/scarlettdeeofficial/" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                    <img src={instagram} alt={t("Instagram")} />
                  </a>
                  <a href="https://www.facebook.com/scarlettdeeofficial/" target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
                    <img src={facebook} alt={t("Facebook")} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
