import React from 'react'
import { CookiesProvider } from 'react-cookie'
import "../App.css"
import crypto from "../images copy/crypto.png";
const Offer = () => {
  return (
    <>
    <div className='box'>
      <CookiesProvider>
        <div>
          <img src={crypto} className="gridimag" alt=''  />
          <p>BTC Address: bc1q2jm4xuhj2phtlf4rkszcy r3fxqftxv4tmlkk4s</p>
          </div>
      </CookiesProvider>
    </div>
    </>
  )
}

export default Offer
