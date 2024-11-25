import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_GATEWAY_PK);
const StripePayment = () => {
  return (
    <div style={{ margin: '30px' }}>
      <Elements stripe={stripePromise}>
        <CheckOutFrom></CheckOutFrom>
      </Elements>
    </div>
  );
};

export default StripePayment;
