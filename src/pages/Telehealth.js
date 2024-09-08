import '../App.css';
import Topbar from './topbar';
import Footer from '../footer';
import Practices from '../info/practices';
import Info7 from '../info/info7';
import Practice from './practices';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Telehealth() {
    return (
        <>
                     <Helmet>  {/* Add Helmet component */}
        <title>Telehealth Services</title>  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Connect with healthcare providers virtually! Explore our Telehealth Directory to find a doctor offering online consultations. Learn more about the benefits of telehealth." />
      </Helmet>

        <header>
        <Topbar />
        </header>
        <div>
        <h1 className='title'>Telehealth Directory</h1>
        </div>
        <Practice />
        <div>
        <Practices />
        </div>
        <div>
        <Info7 />

        </div>
        <br></br>
        <footer>
            <Footer />
        </footer>
    </>
    )
}
