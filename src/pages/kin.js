import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import amy from "../images copy/amy.jpeg";
import prices from "../images copy/prices.png";
import Footer from '../footer';
import sheila from "../images copy/sheila.jpeg";
import mail from "../images copy/mail.png";
import { handleMailClick } from '../utils/mailFallback';
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';
export default function AKPract() {
  const { t } = useTranslation('common');

  // Solution 1: Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
   <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

        <Helmet>
          <title>{t("Frequency Medicine")}</title>
        <meta property="og:title" content={t("Frequency Medicine")} />
        <meta name="description" content={t("Working with complex disorders via frequency medicine. The Center for Natural Health assists you holsitically, utilizing frequencies to communicate with the brain.")} />
        </Helmet>

        <header style={{
          position: 'relative',
          zIndex: 1000
        }}>
          <Topbar />
        </header>

        <div className="container-blue">
          <h1 style={{
            fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
            marginTop: 0
          }}>{t("Frequency Medicine")}</h1>

          <div className="provider-grid" style={{ alignItems: 'start' }}>
            <div className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
              <div className="card-body provider-card-body">
                <div className="provider-card-top">
                  <img src={amy} alt="The Center for Natural Health" className="provider-photo" />
                  <h2 className="h4 mb-1">{t('The Center for Natural Health')}</h2>
                  <p className="text-muted mb-0">{t("Dr. Amy Wicks")}</p>
                </div>

                <p className="mb-1">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  {t("St. Charles, Missouri")}
                </p>

                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1">{t("Bio-Chemistry")}</span>
                  <span className="badge bg-light text-dark me-1">{t("Supplements, Herbs & Homeopathy")}</span>
                  <span className="badge bg-light text-dark me-1">{t("Emotional Work")}</span>
                  <span className="badge bg-light text-dark me-1">{t("Emotional Blockage work for Anxiety")}</span>
                </div>

                <div className="provider-video">
                  <iframe
                    src="https://drive.google.com/file/d/1t4ouK9Afjmmc7PaIYsWM3ALrS0Phkbqf/preview"
                    title="Dr. Amy Wicks Video"
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>

                <p className="card-text small provider-bio">
                  {t("Dr. Wicks' passion is to help others that seem to have nowhere else to turn. She specializes in finding the right balance of herbs, supplements, homeopathy and to free up emotional blockages.")}
                </p>

                <div className="provider-card-footer">
                  <img
                    src={prices}
                    alt="The Center for Natural Health"
                    style={{
                      maxWidth: '500px',
                      maxHeight: '420px',
                      objectFit: 'contain',
                      width: '100%'
                    }}
                  />
                  <div className="provider-booking-embed" style={{ height: '600px' }}>
                    <iframe
                      title={t("Carepatron Online Booking")}
                      src="https://book.carepatron.com/The-Center-for-Natural-Health/Dr--Amy?p=Nha96RlJRf28UsTlNh4uKg&s=AmsO3T6p&e=i"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
              <div className="card-body provider-card-body">
                <div className="provider-card-top">
                  <img src={sheila} alt="Sheila Sembly-Crum" className="provider-photo" />
                  <h2 className="h4 mb-1">{t('Sheila Sembly-Crum')}</h2>
                  <p className="text-muted mb-0">{t("Wellness Educator & Financial Advisor")}</p>
                </div>

                <div className="provider-video">
                  <iframe
                    src="https://www.youtube.com/embed/cQqHL65mKos?si=ZhrH2dJMbStGBlqI"
                    title="Sheila Sembly-Crum Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <p className="card-text small provider-bio">
                  {t("sheila_bio")}
                </p>

                <div className="provider-card-footer">
                  <a
                    href="mailto:ssemblycrum@gmail.com"
                    onClick={(e) => handleMailClick(e, 'ssemblycrum@gmail.com')}
                    className="btn btn-outline-primary"
                  >
                    {t("Contact")}
                  </a>
                  <div className="provider-social-icons">
                    <a href="mailto:ssemblycrum@gmail.com" onClick={(e) => handleMailClick(e, 'ssemblycrum@gmail.com')} aria-label={t("Email")} title={t("Email")}>
                      <img src={mail} alt={t("Email")} />
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
  )
}
