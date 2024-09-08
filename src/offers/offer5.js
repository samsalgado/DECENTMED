import React from 'react'
import { CookiesProvider } from 'react-cookie'
import BTC from './BTCpayment'
import "../App.css"
import CustomizedDialogsPy from './pydes'
import pybtc from '../pics/pybtc.png';
const Offer5 = () => {
  return (
    <div className='box'>
        <img src={pybtc} className='go' />
        <h1>Python Tutorial</h1>
        <CookiesProvider>
        <CustomizedDialogsPy>
          <BTC />
        </CustomizedDialogsPy>
      </CookiesProvider>
    </div>
  )
}

export default Offer5
