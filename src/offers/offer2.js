
import "../App.css"
import { CookiesProvider } from 'react-cookie'
// import CustomizedDialogs from './dialog'
import { useTranslation } from 'react-i18next'
import imge from '../images copy/IMG_8423.jpeg';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import { Button } from '@mui/material'
const Offer2 = () => {
  const { t } = useTranslation("common");

  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const handleClickOpen = () => {
    if (user) {
      return navigate('/stripepay', { state: { from: location } })
    }


    else {
      Swal.fire({
        title: t('Please Login First'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: t('Login Now')
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }


  return (
    <div className='box'>

      <CookiesProvider>

        <div>
          <img src={imge} alt='' />
          <h2>{t('Pay with Paypal (Scan QR Code Above)')}</h2>
          <h3>$250: Including Marketing, Security, Social Media, & Telehealth</h3>
        </div>
        <Button onClick={handleClickOpen}>{t('add cart')}</Button>

      </CookiesProvider>
    </div>
  )
}

export default Offer2
