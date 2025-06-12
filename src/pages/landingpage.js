import React from 'react';
import '../info/page.css';
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import Footer from '../footer';
import businessplan from '../images copy/graph.png';
const FileUploadDownload = () => {
  const { t } = useTranslation('common');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🌿 Holistic Medicine Business Action Plan
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Proven Strategies to Grow Your Practice & Attract More Patients
          </p>
        </div>
        <div className='theecontainer'>
         <div className='video-container'>
          <iframe
            width="100%"
            height='450vh'
            src="https://www.youtube.com/embed/flm9gslugog?si=_vjx2hQxw7p_qn_s"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
    </div>
    <div className="text-center border-t pt-6">
          <p className="text-gray-600 mb-4">
            Want a personalized plan for your specific practice?
          </p>
          <Button variant="primary" href="https://themerlingroupworld.com/telehealth" target="_blank">
          Buy Now
        </Button>
        </div>
 <div>
        <table className="collapsible-wrapper">
            <tbody>
              <tr>
              <th className="collapsible-trigger">
       <Collapsible trigger={t("Pricing Tiers")}>
       <div className='container'>
      <iframe
            width="100%"
            height={315}
            src="https://www.youtube.com/embed/sp01eyKfRXo?si=BHrqC0krHruggX_q" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </div>
        <div className='collapsible-content'>
        <div className='container'>
      <iframe
            width="100%"
            height={315}
            src="https://www.youtube.com/embed/FUNvCaWryFg?si=dzQGc4lgOw369E_x" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </div>
        <div className='container'>
      <iframe
            width="100%"
            height={315}
            src="https://www.youtube.com/embed/SZxnqvve4I4?si=ojLMwYTO5fxhUkGp" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </div>
        </div>
        </Collapsible>
        </th>
        </tr>
        </tbody>
          </table>
      </div>
        <img src={businessplan} className="gridimag" alt="quote" />
      </div>
      <footer>
            <Footer />
        </footer>
    </div>
  );
};

export default FileUploadDownload;