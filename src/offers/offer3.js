import React from 'react'
import "../App.css"
import {Cookies, CookiesProvider} from 'react-cookie'
import CustomizedDialogs from './dialog'
import BTC from './BTCpayment'
import cbtc from '../pics/c.png'

const Offer3 = () => {
  return (
    <div className='box'>
      <CookiesProvider>
        <div>
          <img src={cbtc} className="go"  />
          <h1>C++ Tutorial</h1>
          </div>
        <CustomizedDialogs>
          <BTC />
        </CustomizedDialogs>
      </CookiesProvider>
    </div>
  )
}

export default Offer3
