import React from 'react'
import { CookiesProvider } from 'react-cookie'
import BTC from './BTCpayment'
import "../App.css"
import jsbtc from '../pics/jsbtcpayment.png';
import CustomizedDialogsJS from './jsdes'
const Offer2 = () => {
  return (
    <div className='box'>
      <img src={jsbtc} className="go" />
        <h1>React Tutorial</h1>
        <CookiesProvider>
        <CustomizedDialogsJS>
          <BTC />
        </CustomizedDialogsJS>
      </CookiesProvider>
    </div>
  )
}

export default Offer2
