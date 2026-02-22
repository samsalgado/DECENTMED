import React from 'react'
import QR from '../images copy/crypto.png';
import { useTranslation } from 'react-i18next'

const Pay = () => {
  const { t } = useTranslation('common');

  return (
    <div style={{
      maxWidth: '600px',
      marginTop: '0px',
      height:'370px',
      textAlign: 'center',
      padding: '20px',
      lineHeight: '1.0'
    }}>
      <p>
        {t('BTC Address')}: bc1q2jm4xuhj2phtlf4rkszcy r3fxqftxv4tmlkk4s
         </p>
               <p>
        {t('USDC Address')}: 0x06A4931Ee96E3b7685f35005519C4670f88dB3dd
         </p>

        <img 
          src={QR} 
          alt="QR Code" 
          style={{ width: '250px', marginTop: '10px' }} 
        />
 
      <h3>
        {t('All Plant Information and Medical Rating is from')} <a href='https://pfaf.org/'>Pfaf.org.</a>
      </h3>
    </div>
  )
}

export default Pay;
