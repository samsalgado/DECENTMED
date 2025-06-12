
// import "../App.css"
// import { CookiesProvider } from 'react-cookie'
// // import CustomizedDialogs from './dialog'
// import { useTranslation } from 'react-i18next'
// import imge from '../images copy/IMG_8423.jpeg';
// import { NavLink } from "react-router-dom";
// const Offer2 = () => {
//   const { t } = useTranslation("common");

//   // const [open, setOpen] = useState(false);
//   return (
//     <div className='box'>
//       <CookiesProvider>
//         <div>
//           <img src={imge} alt='' />
//          <h2>{t('Pay with Paypal (Scan QR Code Above)')}</h2> 
//  <NavLink to="https://www.paypal.com/paypalme/DECENTMED">
//           https://www.paypal.com/paypalme/DECENTMED
//           </NavLink>
// </div>
//       </CookiesProvider>
//     </div>
//   )
// }

// export default Offer2




import "../App.css";
import { useTranslation } from 'react-i18next';
import imge from '../images copy/IMG_8423.jpeg';
import { useNavigate } from "react-router-dom";

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
    <div className='box'>
      <div>
        <img src={imge} alt='' />
        <h2>{t('Pay with Paypal (Scan QR Code Above)')}</h2>
        <a
          href="https://www.paypal.com/paypalme/DECENTMED"
          onClick={handlePaypalClick}
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          https://www.paypal.com/paypalme/DECENTMED
        </a>
      </div>
    </div>
  );
};

export default Offer2;

