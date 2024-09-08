import React from 'react'
import { CookiesProvider } from 'react-cookie'
import CustomizedDialogs from '../info/dialog';
import Disclaimer from '../info/disclaimer';

function Des1() {
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

export default Des1;