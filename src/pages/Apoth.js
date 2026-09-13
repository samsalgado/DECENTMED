// import '../App.css';
// import Apothecary from './Apothecary';
// import Topbar from './topbar';
// import { Helmet } from 'react-helmet';
// import Footer from '../footer';
// import { useTranslation } from 'react-i18next';
// export function Apoth() {
// const {t} = useTranslation('common')
//   return (
//     <div className='wrapper'>
//       <Helmet>
//         <title>{t('Apothecary')}</title>
//         <meta name="description" content="Discover the world of natural wellness at [Your Apothecary Name]! Explore our selection of herbal remedies, essential oils, and holistic products to support your health and well-being. Learn more about the benefits of natural healing approaches." />
//       </Helmet>
//       <header>
//         <Topbar />
//         <h1 className='center'>{t('Live Drop Coming Soon!')}</h1>
//       </header>
//       <main className='content'>
//         <h1 className='center'>{t('Apothecary')}</h1>
//         <br></br>
//         <Apothecary />
//       </main>

//       <footer className='footer'>
//         <Footer />
//       </footer>
//     </div>
//   )
// }

import '../App.css';
import Apothecary from './Apothecary';
import Topbar from './topbar';
import { Helmet } from 'react-helmet';
import Footer from '../footer';
import { Button } from 'react-bootstrap';
import herbPriceList from '../images copy/herbpricelist.png';
import { useTranslation } from 'react-i18next';

export default function  Apoth() {
  const { t } = useTranslation('common');
  const learnmore = () => {
    
    window.location.href = 'mailto:themerlingroupworld@gmail.com'
  }
  return (
    <div className='wrapper'>
      <Helmet>
        <title>{t('Herbal Medicine Near Me')}</title>
                <meta property="og:title" content={t('Herbal Medicine Near Me')} />
        <meta name="description" content={t('Discover the world of natural wellness at Your Apothecary Name! Explore our selection of herbal remedies, essential oils, and holistic products to support your health and well-being. Learn more about the benefits of natural healing approaches.')} />
      </Helmet>
      <header>
        <Topbar />
      </header>
<div className="container-blue" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h1 className='center'>{t('Encyclopedia of Herbal Medicine')}</h1>
        <img
          src={herbPriceList}
          alt={t('Herbal Price List')}
          style={{ maxWidth: '500px', width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <br></br>
        <Button className="custom-btn" onClick={learnmore}>
          {t('Herbal Shops: Email Us')}
        </Button>
        </div>
        <br></br>
        <div className="container-blue">

        <h1 className='center'>{t('Herbal Medicine Near Me')}</h1>
        </div>
        <br></br>
        <div className="container-blue">
        <Apothecary />
        </div>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}
