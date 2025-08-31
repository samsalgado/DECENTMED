
import React from 'react';
import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect } from 'react';
//import ReactPlayer from 'react-player';
import JenB from '../cards/scarlett.JPG';
import { useTranslation } from 'react-i18next'

export function Breathwork() {
  const { t } = useTranslation('common');
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h2>{t("Scarlett Dee")}</h2>
              <figure>
                <img src={JenB} alt="Scarlett" />
              </figure> <br />

              <a
                href="mailto:info@tribe-yoga.com"
                className="custom-btn"                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  background: "#6c63ff",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                {t("Email Scarlett")}
              </a>

              <h3>{t("Scartlett Dee, Somatic Breathwork Coach:")}</h3>
              <p>
                {t("Scarlett has over 30 years of experience in yoga, healing, and self-mastery. She guides transformational breathwork journeys that help release stored trauma, regulate the nervous system, and support deep emotional healing. Her sessions offer a powerful reset—reducing stress, calming anxiety, and rebuilding confidence from the inside out. Scarlett’s work is both grounding and expansive, helping clients overcome inner challenges and return to a state of clarity, presence, and aligned self-leadership.")}
              </p>
              <p>
                {t("Scarlett is a certified: 9D Breathwork Coach & Facilitator, Hypnotherapist, Holistic Therapist, Tantra & Yoga Teacher Trainer")}
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
