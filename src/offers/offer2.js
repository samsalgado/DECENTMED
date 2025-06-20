
import "../App.css";
import { CookiesProvider } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import imge from '../images copy/stripe.jpg';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
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
            <img src={imge} className="pik1 stripe" alt='' />
            <h2>{t('Pay with Credit Card')}</h2>
          </div>
          <Button style={{
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

