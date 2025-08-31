import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect } from 'react';
import PreventWellness from '../info/preventwellness';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Prevent() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <div>
        <main className="page-content">
             <Helmet>  {/* Add Helmet component */}
        <title>Cellular Regeneration</title>  
        <meta name="description" content="Cellular regneration, your health is interconnected to your external environment, energy source, and internal body functions. Explore how preventive wellness can help you in your health journey." />
      </Helmet>
            <header>
            <Topbar />
            </header>
            <PreventWellness />
            <footer>
                <Footer />
            </footer>
            </main>
        </div>
    )

}

