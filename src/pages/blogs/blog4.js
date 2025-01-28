import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import cell from "../../images copy/cell.png";
import "../../App.css";
const Blog4 = () => {
  return (
    <>
      <Helmet>
        <title>Cellular Regeneration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Unlock your body's incredible healing power. The body has an immense regenerative potential to heal itself. Cellular regeneration wakes the body" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0' }}>Cellular Regeneration</h1>
          <img className='gridimag' src={cell} alt="logo" />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
          <p>
      Disease deteriorates people over time. For instance, Parkinson's reduced my grandmother to trembling, hunched over without uttering a word. 
      African Americans are 3x more likely to to die from asthma than whites. Medicine has used black bodies without consent. As distrust of Organized Medicine intensifies people need to understand Prevention.
        </p>
           <p>
           The body has an immense regenerative potential to heal itself. "Let thy food be medicine, and thy medicine be food", Hippocrates, this quote illustrates that fighting disease begins with food. Prevention starts with eating foods that boost the immune system. Consumption of antioxidants like Polyphenols or Beta Carotene assists the immune system in fighting disease before they arrive. Renowed healers, Dr. Sebi and Dr. Gerson found that a mixture of a plant-based diet and detoxification aids in fighting cancer. 
           </p>
           <h5>Cellular Regeneration</h5>
           <p>
           A detox cleanses the body. A water detox is a way to flush out the body's toxins. A water detox ranges from 1-3 days to restore the cells to ketosis. Furthermore, when detoxing, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness. 
         <a href='https://gerson.org/'> Cancer</a> treatments globally like the Gerson Therapy and <a href='https://drsebiscellfood.com/'>Dr. Sebi diet</a> use forms of Green Diets and Detoxification to cleanse the body from toxins that cause cancer. 
           </p>
           <p>
           All people have innate healing powers. Effective healing addresses all aspects of a person's life. Preventive wellness is a state of health characterized by a positive emotional state of mind. The smallest ailment can effect you internally and externally, ruining your mood for the day. 
           </p>
           <p>
           It starts with a diet rich in antioxidants and vitamins. Food is medicine, their is more benefit from the plant than the supplement. Second, utilize plants instead of pills 
            to work in conjunction with the body instead of being reliant on pills. An estimated 30 million Americans do not have access to health insurance. Preventive wellness, plants as medicine, and holistic care provide a distinct level of healthcare that keeps the body healthy instead of constantly sick.
           </p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog4; // Default export
