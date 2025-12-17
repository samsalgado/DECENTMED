import '../App.css';
import Topbar from './topbar';
import InfoSummit from '../info/infos';
import { Helmet } from 'react-helmet';
//import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Footer from '../footer';
// import BookingForm from './BookingForm/BookingForm';

export function Summit() {
  const { t } = useTranslation('common');

  // I have removed the useState and useEffect for the popup here.

  return (
  <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

        <Helmet>
          <title>{t('DecentMed Summit')}</title>
          <meta
            name="description"
            content={t(
              "DecentMed Summit: a holistic medicine information portal that connects patients with providers. Explore how holistic medicine is right for you!"
            )}
          />
        </Helmet>

        <header>
          <Topbar t={t} />
        </header>
        {/* <BookingForm token={localStorage.getItem('token')} ></BookingForm> */}
        <InfoSummit t={t} />

        <br />

        <footer>
          <Footer />
        </footer>

        {/* I have removed the JSX for the popup from here. */}
    </div>
  );
}