import '../App.css';
import Topbar from './topbar';
import Info from '../info/info';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Footer from '../footer';

export function Home() {
  const { t } = useTranslation('common');
  return (
<div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
     <Helmet>
        <title>{t('DecentMed')}</title>
        <meta
          name="description"
          content={t(
            "DecentMed: a holistic medicine information portal that connects patients with providers. Explore how holistic medicine is right for you!"
          )}
        />
      </Helmet>
      <Topbar t={t} />    
        <Info t={t} />
        <br />
        <footer>
          <Footer />
        </footer>
     </div>
  );
}
