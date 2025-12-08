import '../App.css';
import Nutritionpage from '../info/nutritionpg';
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect } from 'react';
import FuncVids from '../info/functionalvids';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
import FuncModal from '../info/funcmodal';
export function Nutrition() {
    const { t } = useTranslation('common');
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);    
    return (
<main className="page-content" style={{
            // Solution 2: Ensure no top margin/padding on main container
            marginTop: 0,
            paddingTop: 0
          }}>
         <div>
            <Helmet>  
                <title>{t('Dr Sebi Food List')}</title>
                <meta name="description" content="Explore Dr. Sebi's nutritional food list to wellness. Discover obesity facts and how you can improve your nutrition. Learn more about Dr. Sebi's nutritional philosophy." />
            </Helmet>
            <header>
                <Topbar />
            </header>
            <Nutritionpage />
        <br></br>
        <h1 className='center'>{t("Functional Nutrition")}</h1>
      <FuncVids />
      <FuncModal />
            <footer className='foot'>
                <Footer />
            </footer>
        </div>
        </main>
    )
}




