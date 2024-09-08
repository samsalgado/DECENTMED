import React from 'react'
import "../App.css"
import { CookiesProvider} from 'react-cookie'
import CustomizedDialogs from './dialog'
import BTC from './BTCpayment'
import imge from '../images copy/btvc.png';
const Offer = () => {
  return (
    <div className='box'>
      <CookiesProvider>
        <div>
          <img src={imge} className="pik1" alt=''  />
          <h1>Sign Up</h1>
          </div>
        <CustomizedDialogs>
          <BTC />
        </CustomizedDialogs>
      </CookiesProvider>
    </div>
  )
}

export default Offer
