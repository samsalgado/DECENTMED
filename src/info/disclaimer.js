import React from 'react'
import '../App.css';
import QR from '../images copy/QR.jpeg';
import { useTranslation } from 'react-i18next'
const Disclaimer = () => {
  const {t} = useTranslation();
  return (
    <div className='description'>
    <h3>
    {t('Prices are per individual plant.')}
    </h3>
    <h3>
    {t('BTC Address')}:themerlingroupworld@blink.sv
    <img className='gridimag' src={QR} alt="logo" />
    </h3>
    <h3>{t('All Plant Information and Medical Rating is from')} <a href='https://pfaf.org/'> Pfaf.org.</a> </h3>
   
    </div>
  )
}

export default Disclaimer;