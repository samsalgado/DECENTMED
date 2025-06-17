// import '../App.css';
// import Topbar from './topbar';
// import Info from '../info/info';
// import { Helmet } from 'react-helmet'; // Import Helmet
// import { useTranslation } from 'react-i18next';
// import Footer from '../footer';
// export function Home() {
//     const { t } = useTranslation('common');
//     return (
//         <>
//             <Helmet>
//                 <title>{t('Decent Med')}</title>
//                 <meta name="description" content={t("Decent Med: explore a holistic approach to healthcare! We focus on natural healing and wellness practices that address the mind, body, and spirit. Learn more about holistic medicine and its benefits.")} />
//             </Helmet>

//             <header>
//                 <Topbar t={t} />
//             </header>
//             <Info t={t} />
//             <br></br>
//             <footer>
// <Footer></Footer>

//             </footer>

//         </>
//     )
// }



import '../App.css';
import Topbar from './topbar';
import Info from '../info/info';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Footer from '../footer';
import React, { useEffect, useState } from 'react'; // ✅ Add React hooks

export function Home() {
  const { t } = useTranslation('common');

  // ✅ Popup control state
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('token'); // বা তোমার ইউজার চেক logic
    if (!user) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('Decent Med')}</title>
        <meta
          name="description"
          content={t(
            "Decent Med: explore a holistic approach to healthcare! We focus on natural healing and wellness practices that address the mind, body, and spirit. Learn more about holistic medicine and its benefits."
          )}
        />
      </Helmet>

      <header>
        <Topbar t={t} />
      </header>

      <Info t={t} />

      <br />

      <footer>
        <Footer />
      </footer>


      {/* ✅ Popup */}
{showPopup && (
  <div
    style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}
  >
    <div
      style={{
        background: '#fff',
        padding: '30px',
        borderRadius: '8px',
        textAlign: 'center',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <h2>Please Sign Up</h2>
      <p>Sign up to access all features!</p>
      <button
        onClick={() => (window.location.href = '/signup')}
        style={{
          margin: '10px',
          padding: '12px 30px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Go to Sign Up
      </button>
      <br />
      <button
        onClick={() => setShowPopup(false)}
        style={{
          margin: '10px',
          padding: '12px 30px',
          backgroundColor: '#6c757d',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </div>
  </div>
)}

    </>
  );
}
