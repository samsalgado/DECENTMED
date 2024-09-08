import React from 'react'
import { CookiesProvider } from 'react-cookie'
import CustomizedDialogs from './dialog';
import Disclaimer from './disclaimer';

function Description() {
  return (
    <div>
    <CookiesProvider>
    <CustomizedDialogs>
      <Disclaimer />
    </CustomizedDialogs>
    </CookiesProvider>
    </div>
  )
}

export default Description;