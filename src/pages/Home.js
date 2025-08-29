import '../App.css';
import Topbar from './topbar';
import Info from '../info/info';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Footer from '../footer';
import React from 'react'; // Removed useState and useEffect as they are no longer needed

export function Home() {
  const { t } = useTranslation('common');

  // I have removed the useState and useEffect for the popup here.

  return (
    <>
      <main className="page-content">
        <Helmet>
          <title>{t('DecentMed')}</title>
          <meta
            name="description"
            content={t(
              "DecentMed: a holistic medicine information portal that connects patients with providers. Explore how holistic medicine is right for you!"
            )}
          />
        </Helmet>

        <header>
          <Topbar t={t} />
        </header>

        <Info t={t} />

        <br />

        <footer>
          <Footer />
        </footer>

        {/* I have removed the JSX for the popup from here. */}
      </main>
    </>
  );
}