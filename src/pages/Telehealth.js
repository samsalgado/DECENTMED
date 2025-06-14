import { Helmet } from 'react-helmet'; // Import Helmet
import '../App.css';
import Footer from '../footer';
import Info7 from '../info/info7';
import Practices from '../info/practices';
import Practice from './practices';
import Topbar from './topbar';
import { useTranslation } from 'react-i18next';

export function Telehealth() {
    const { t } = useTranslation("common");
    return (
        <>
            <Helmet>
                <title>{t('Telehealth Services')}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={t("Connect with healthcare providers virtually! Explore our Telehealth Directory to find a doctor offering online consultations. Learn more about the benefits of telehealth.")} />
            </Helmet>
            <header>
                <Topbar />
            </header>
            <div className='container'>
                <h1 className='title'>{t('Telehealth Directory')}</h1>
            </div>
            <iframe
  src="https://drive.google.com/file/d/1OmxzLGYcDnO1zC9hAhiExE1n7xoVMtDR/preview"
  width="100%"
  height="315px"
  allow="autoplay"
  allowFullScreen
  frameBorder="0"
  title='DecentMed'
></iframe>
            <Practices />
            <Practice />
            <div>
                <Info7 />
            </div>
            <br></br>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
