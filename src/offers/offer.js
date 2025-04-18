import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { useTranslation } from 'react-i18next'

import "../App.css"
import imge from '../images copy/imge.png'
import CustomizedDialogs from './dialog'
import AddtoCart from '../addtocart/addtocart'
const Offer = () => {
const { t } = useTranslation("common");
  return (
    <div className='box'>
      <CookiesProvider>
        
        <div>
          <img src={imge} className="pik1 bitc" alt=''  />
          <h2>{t('Pay with Bitcoin')}</h2>
          <h3>$250: Including Marketing, Security, Social Media, & Telehealth</h3>
          <p> BTC Address: bc1q4kkfy6apvfy5maf6c3f24utq925x64t622z20c </p>
          </div>
        <CustomizedDialogs>
          <AddtoCart />
        </CustomizedDialogs>
      </CookiesProvider>
    </div>
  )
}

export default Offer
