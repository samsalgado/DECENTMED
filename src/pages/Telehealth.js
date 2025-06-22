import { Helmet } from 'react-helmet'; // Import Helmet
import '../App.css';
import Footer from '../footer';
import Practices from '../info/practices';
import Topbar from './topbar';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
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

            {/* <Practice /> */}
            <div className='video-container'>
                <iframe
                    height='315'
                    src="https://drive.google.com/file/d/1BbqYd5A6pyfC7YjvwzvOeYoQblqIe2yj/preview"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <Practices />
            <div style={{ textAlign: 'center' }}>
                <Button variant="primary" href="https://themerlingroupworld.com/signup/provider" target="_blank">
                    {t("Providers: Signup")}
                </Button>
            </div>
            <br></br>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
