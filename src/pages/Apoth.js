import '../App.css';
import Apothecary from './Apothecary';
import Topbar from './topbar';
import { Helmet } from'react-helmet';
import Footer from '../footer';
export function Apoth() {

    return(
        <>
             <Helmet>  
        <title>Apothecary</title>  
        <meta name="description" content="Discover the world of natural wellness at [Your Apothecary Name]! Explore our selection of herbal remedies, essential oils, and holistic products to support your health and well-being. Learn more about the benefits of natural healing approaches." />
      </Helmet>
            <header>
            <Topbar />
            <h1 className='center'>Live Drop Coming Soon!</h1>
            </header>
            <h1 className='center'>Apothecary</h1>
            <br></br>
           <Apothecary />
            
            <footer>
                <Footer />
            </footer>
        </>
    )
    }


