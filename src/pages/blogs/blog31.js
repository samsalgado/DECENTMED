import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import orlandoDirectoryText from "./orlandoDirectoryData";

const SECTION_HEADERS = new Set([
  "Downtown",
  "South",
  "Winter Park",
  "North & E – Casselberry, Altamonte Springs, Winter Springs, Oviedo",
  "Further NE",
  "N & W Apopka, Winter Garden, Ocoee",
  "SPECIAL",
  "ONLINE",
]);

const DirectoryBody = ({ text }) => {
  const lines = text.split("\n");
  return (
    <div style={{ textAlign: 'left', maxWidth: '760px', margin: '0 auto' }}>
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (SECTION_HEADERS.has(trimmed)) {
          return (
            <h3 key={i} style={{ color: '#00695c', marginTop: '28px', marginBottom: '10px' }}>
              {trimmed}
            </h3>
          );
        }
        if (trimmed === "") {
          return <div key={i} style={{ height: '10px' }} />;
        }
        return (
          <p key={i} style={{ margin: '4px 0', fontSize: '0.92rem', lineHeight: '1.5' }}>
            {line}
          </p>
        );
      })}
    </div>
  );
};

const Blog31 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Metaphysical Places to go in and around Orlando, by location')}</title>
        <meta property="og:title" content={t("Metaphysical Places to go in and around Orlando, by location")} />
        <meta name="description" content={t("A community-compiled directory of metaphysical, pagan, yoga, sound healing, and spiritual events and stores in and around Orlando, Florida — organized by neighborhood, from Downtown to Winter Park to Apopka.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('Metaphysical Places to go in and around Orlando, by location')}
          </h1>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
            {t('Addresses, prices, and contact details below are kept in their original form since this is a factual local directory rather than an article.')}
          </p>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <DirectoryBody text={t(orlandoDirectoryText)} />
          <Button
            style={{
              display: 'block',
              margin: '30px auto 0',
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

export default Blog31;
