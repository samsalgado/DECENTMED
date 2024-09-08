import '../App.css';
import Topbar from './topbar';
import Stem from '../info/stem';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
export function StemCell() {

    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>Stem Cell Therapy</title>  
        <meta name="description" content="Unlock the potential of stem cell therapy! Explore how stem cells can be used to treat various conditions and promote healing. Learn more about this innovative therapy." />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Stem />
            <br></br>
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }


