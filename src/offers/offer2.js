
import "../App.css"
import { CookiesProvider } from 'react-cookie'
// import CustomizedDialogs from './dialog'
import { useTranslation } from 'react-i18next'
import imge from '../images copy/IMG_8423.jpeg';
const Offer2 = () => {
  const { t } = useTranslation("common");

  // const [open, setOpen] = useState(false);
  return (
    <div className='box'>
      <CookiesProvider>
        <div>
          <img src={imge} alt='' />
          <h2>{t('Pay with Paypal (Scan QR Code Above)')}</h2>
        </div>
      </CookiesProvider>
    </div>
  )
}

export default Offer2
