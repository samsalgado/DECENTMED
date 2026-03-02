
import "../App.css";
import { CookiesProvider } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import cash from "../images copy/cash.png";
import { Button } from '@mui/material';

const Offer2 = () => {
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOpen = () => {
    const token = localStorage.getItem('token'); // ✅ localStorage থেকে token নিলাম

    if (token) {
      // Token থাকলে payment page এ redirect
      return navigate('/stripepay', { state: { from: location } });
    } else {
      // Token না থাকলে alert দেখাবে + Login page এ redirect
      Swal.fire({
        title: 'Please Login First',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signin', { state: { from: location } });
        }
      });
    }
  };



  return (
     <div className="container">
 <div className='box'>
        <CookiesProvider>
          <div>
            <h2>{t('Provider Payout Program')}</h2>
            <p className="prr">{t("When you think about the word DecentMed as a provider, you might not understand the concept behind the name. Holistic Medicine has been heavily scrutinized and censored since the 1900s, yet the results have proven profound success. The goal of DecentMed is to decentralize medicine in order to address the biggest pain points in the industry. We post provider studies, educational content and testimonials on a decentralized network called Nostr to validate the effectiveness of your work, combat censorship and increase patient acquisition for providers.")}</p>
            <p className="prr">{t("An estimated 27 million Americans do not have health insurance. An estimated 55% of all holistic medicine businesses are cash-based and do not have insurance cove-rage. Our platform strives to lower the cost of holistic medicine by providing stake as annual payouts from our content library, apothecary and affiliate programs.")}</p>
          <p className="prr">{t("The global herbal medicine market is projected to reach $437 billion by 2032. Our Apothecary features herbs sourced from Suriname, Argentina, Canada, United States and more. All providers receive 5% in Apothecary, as the Apothecary grows - percentage of proceeds discounts provider services.")}</p>
                          <img className='gridimag' src={cash} alt='cash businesses' />
              <p className="prr">{t("A major painpoint of holistic medicine is lack of awareness of holistic medicine, and its many benefits for wellbeing. We will host both in-person and live summits globally to offer the experience of holistic health to the public and expedite awareness on a global scale. In order to maximize value for providers, we offer 15% of affiliate programs and 5% of our content library to providers.")}</p>  
             <h5>{t("DecentMed is Innovation!")}</h5>
<iframe class="rumble" title="signup" height="360"
              src="https://www.youtube.com/embed/v2QuSppZqHE?si=8FfPlDwXaqsQLBtp" frameborder="0" allowfullscreen></iframe>          </div>
          <Button className="custom-btn"
            style={{
            width: '30%',
            display: 'block',
            margin: '20px auto'
          }} variant="contained" onClick={handleClickOpen}>{t('add cart')}</Button>
        </CookiesProvider>
      </div>
</div>
  );
};

export default Offer2;

