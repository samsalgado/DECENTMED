import '../App.css';
import Pgchelation from '../info/chelation';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet

export function Chelation() {

    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>Heavy Metal Detox</title>  
        <meta name="description" content="Learn about heavy metal detoxification with chelation therapy. Explore the potential benefits and safety considerations. Find out if chelation is right for you. Learn more." />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Pgchelation />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }


