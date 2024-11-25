import '../App.css';
import Nutritionpage from '../info/nutritionpg';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Nutrition() {

    return(
        <div>
                    <Helmet>  {/* Add Helmet component */}
        <title>Dr Sebi Food List</title>  
        <meta name="description" content="Explore Dr. Sebi's nutritional food list to wellness. Discover obesity facts and how you can improve your nutrition. Learn more about Dr. Sebi's nutritional philosophy." />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Nutritionpage />
            <footer className='foot'>
                <Footer />
            </footer>
        </div>
    )
    }




