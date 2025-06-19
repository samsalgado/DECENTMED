import "../App.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import imge from '../images copy/paypal.jpg';
const Offer2 = () => {
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  const handlePaypalClick = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (token) {
      // ✅ If logged in, go directly to PayPal
      window.location.href = "https://www.paypal.com/paypalme/DECENTMED";
    } else {
      // ✅ If not logged in, remember intent & redirect to signup
      localStorage.setItem("redirectAfterSignup", "paypal");
      navigate("/signup");
    }
  };

  return (
    <div className="container">
      <div className='box'>
        <div>
          <img src={imge} className="pik1 bitc" alt='' />
          <h2>{t('Pay with Paypal')}</h2>
          <a
            href="https://www.paypal.com/paypalme/DECENTMED"
            onClick={handlePaypalClick}
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            https://www.paypal.com/paypalme/DECENTMED
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offer2;
