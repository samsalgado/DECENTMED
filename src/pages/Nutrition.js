import '../App.css';
import Nutritionpage from '../info/nutritionpg';
import Topbar from './topbar';
import Footer from '../footer';
import NutritionVids from '../info/nutritionvids';
import { Helmet } from 'react-helmet'; // Import Helmet
import { useTranslation } from 'react-i18next';
export function Nutrition() {
    const { t } = useTranslation('common');
    return (
        <div>
{/* helmet */}
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
      <NutritionVids />
            <footer className='foot'>
                <Footer />
            </footer>
        </div>
    )
}




