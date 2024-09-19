import React from 'react'
import { useTranslation } from 'react-i18next'
const Disclaimer = () => {
  const {t} = useTranslation();
  return (
    <div className='description'>
    <h3>
    {t('Prices are per individual plant.')}
    </h3>
    <h3>
    {t('BTC Address')}: 36Nqp5XegC8Zf5RFr8fk7YchGSt66pA6Pr
    </h3>
    <h3>{t('All Plant Information and Medical Rating is from')} <a href='https://pfaf.org/'> Pfaf.org.</a> </h3>
   
    </div>
  )
}

export default Disclaimer;