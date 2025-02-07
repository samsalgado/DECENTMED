
import "../App.css"
import { CookiesProvider } from 'react-cookie'
// import CustomizedDialogs from './dialog'
import { useTranslation } from 'react-i18next'
import imge from '../images copy/stripe.jpg';
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
        title: 'Please Login First',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
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
          <img src={imge} className="pik1 stripe" alt='' />
          <h2>{t('Pay with Credit Card')}</h2>
        </div>
        <Button onClick={handleClickOpen}>{t('add cart')}</Button>

      </CookiesProvider>
    </div>
  )
}

export default Offer2
