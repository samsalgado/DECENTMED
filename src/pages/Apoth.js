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
import { useTranslation } from 'react-i18next';

export function Apoth() {
  const { t } = useTranslation('common');

  return (
    <main className="page-content">
    <div className='wrapper'>
      <Helmet>
        <title>{t('Apothecary')}</title>
        <meta name="description" content={t('Discover the world of natural wellness at Your Apothecary Name! Explore our selection of herbal remedies, essential oils, and holistic products to support your health and well-being. Learn more about the benefits of natural healing approaches.')} />
      </Helmet>
      <header>
        <Topbar />
        <h1 className='center'>{t('Live Drop Coming Soon!')}</h1>

      </header>
      <main className='content'>
        <h1 className='center'>{t('Apothecary')}</h1>
        <br></br>
        <Apothecary />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
    </main>
  );
}
