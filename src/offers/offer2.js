
import "../App.css"
import { CookiesProvider } from 'react-cookie'
// import CustomizedDialogs from './dialog'
import { useTranslation } from 'react-i18next'
import imge from '../images copy/paypal.jpg';
import { NavLink } from 'react-router-dom';
const Offer2 = () => {
  const { t } = useTranslation("common");

  // const [open, setOpen] = useState(false);
  return (
    <div className='box'>
      <CookiesProvider>
        <div>
          <img src={imge} className="pik1 bitc" alt='' />
          <h2>{t('Pay with Paypal')}</h2>
          <NavLink to="https://www.paypal.com/paypalme/DECENTMED">
          https://www.paypal.com/paypalme/DECENTMED
          </NavLink>
        </div>
      </CookiesProvider>
    </div>
  )
}

export default Offer2
