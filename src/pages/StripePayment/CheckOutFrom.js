import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CheckOutForm.css';

const CheckOutForm = () => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [user, setUser] = useState({ name: '', email: '' });
  // const [practice, setPractice] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [closed, setClosed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(clientSecret);
  // ✅ Custom Axios instance with token header
  const axiosSecure = axios.create({
    baseURL: 'https://decentmed-server.vercel.app',
  });
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // ✅ Fetch authenticated user from backend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosSecure.get('/me');
        setUser({ name: res.data.name, email: res.data.email });
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    };
    fetchUser();
  }, [axiosSecure]);

  const handleAmountChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*\.?\d*$/.test(newValue)) {
      setAmount(newValue);
    }
  };

  const handleClickClosed = () => {
    if (!closed) {
      setClosed(true);
      return navigate('/telehealth', { state: { from: location } });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(null);

    if (!stripe || !elements) {
      setMessage('Stripe is not loaded. Please try again later.');
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setMessage('Please enter your card details.');
      return;
    }

    const { error: cardValidationError } = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: {
        name: user.name,
        email: user.email,
      },
    });

    if (cardValidationError) {
      setMessage(`Card error: ${cardValidationError.message}`);
      return;
    }

    const amountInUSD = parseFloat(amount);
    if (isNaN(amountInUSD) || amountInUSD <= 0) {
      setMessage('Please enter a valid amount greater than 0 USD.');
      return;
    }
    // if (amountInUSD < 100) {
    //   setMessage('The minimum amount for payment is 100 USD.');
    //   return;
    // }

    setIsProcessing(true);

    try {
      const res = await axiosSecure.post('/create-payment-intent', { price: amountInUSD });
      const fetchedClientSecret = res.data.clientSecret;

      if (!fetchedClientSecret || !fetchedClientSecret.includes("_secret_")) {
        throw new Error("Invalid payment secret.");
      }

      setClientSecret(fetchedClientSecret);

      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(fetchedClientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      if (paymentIntent.status === 'succeeded') {
        setMessage('Payment successful!');

        const payment = {
          name: user.name,
          email: user.email,
          // practice: practice,
          price: amountInUSD,
          status: paymentIntent.status,
          transaction: paymentIntent.id,
          date: new Date(),
        };

        const savePayment = await axiosSecure.post('/payments', payment);
        if (savePayment.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Payment Successful",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.href = "/";
          });
        }
      }
    } catch (err) {
      setMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className='containers'>
      <h2 className="closes-icon" onClick={handleClickClosed}>
        X
      </h2>

      <h4>{t('Join the Coalition')}</h4>
      {/* <p>{t("Initial Payment of $100. Let's change the healthcare industry forever!")}</p> */}

      <form className='fields' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />

        {/* <input
          type="text"
          placeholder="Medical Practice"
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
          required
        /> */}

        <input
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '12px',
            marginBottom: '15px',
            width: "100%",
            maxWidth: '40%',
            border: '1px solid #ccc',
            borderRadius: '6px',
          }}
          type="number"
          placeholder="Amount (USD)"
          value={amount}
          onChange={handleAmountChange}
          min="0.01"
          step="0.01"
          required
        />

        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: 'gray',
                  fontWeight: '500',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <button type="submit" disabled={!stripe || !amount || isProcessing}>
          {isProcessing ? 'Processing...' : `Pay $${amount}`}
        </button>

        <h4>{message}</h4>
      </form>
    </div>
  );
};

export default CheckOutForm;
