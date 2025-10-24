import React from 'react'
import QR from '../images copy/QR.jpg';
import { useTranslation } from 'react-i18next'

const Pay = () => {
  const { t } = useTranslation('common');

  return (
    <div style={{
      maxWidth: '600px',
      marginTop: '90px',
height:'350px',
      textAlign: 'center',
      padding: '20px',
      lineHeight: '1.4'
    }}>
      <h3>{t('Prices are per individual plant.')}</h3>
      <h3>
        {t('BTC Address')}: bc1qysv9r9fh7lfqmkq5666as0lpkhk33nj4wpcqfj
        <img 
          src={QR} 
          alt="QR Code" 
          style={{ width: '250px', marginTop: '10px' }} 
        />
      </h3>
      <h3>
        {t('All Plant Information and Medical Rating is from')} <a href='https://pfaf.org/'>Pfaf.org.</a>
      </h3>
    </div>
  )
}

export default Pay;
