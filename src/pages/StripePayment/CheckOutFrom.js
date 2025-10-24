// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import './CheckOutForm.css';

// const CheckOutForm = () => {
//   const { t } = useTranslation();
//   const location = useLocation();
//   const { tier, amount: tierAmount } = location.state || {}; // 🟢 Pricing থেকে আসা ডেটা
//   const [selectedTier, setSelectedTier] = useState(tier || '');
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState(tierAmount || '');
//   const [user, setUser] = useState({ name: '', email: '' });
//   const [amount, setAmount] = useState('');
//   const [message, setMessage] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [closed, setClosed] = useState(false);
//   const navigate = useNavigate();
//   console.log(clientSecret);


//   // ✅ Custom Axios instance with token header
//   const axiosSecure = axios.create({
//     baseURL: 'https://decentmed-server.vercel.app',
//   });
//   axiosSecure.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

//   // ✅ Fetch authenticated user from backend
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axiosSecure.get('/me');
//         setUser({ name: res.data.name, email: res.data.email });
//       } catch (err) {
//         console.error('Failed to fetch user:', err);
//       }
//     };
//     fetchUser();
//   }, [axiosSecure]);

//   // const handleAmountChange = (e) => {
//   //   const newValue = e.target.value;
//   //   if (/^\d*\.?\d*$/.test(newValue)) {
//   //     setAmount(newValue);
//   //   }
//   // };

//   const handleClickClosed = () => {
//     if (!closed) {
//       setClosed(true);
//       return navigate('/telehealth', { state: { from: location } });
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMessage(null);

//     if (!stripe || !elements) {
//       setMessage('Stripe is not loaded. Please try again later.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       setMessage('Please enter your card details.');
//       return;
//     }

//     const { error: cardValidationError } = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//       billing_details: {
//         name: user.name,
//         email: user.email,
//       },
//     });

//     if (cardValidationError) {
//       setMessage(`Card error: ${cardValidationError.message}`);
//       return;
//     }

//     const amountInUSD = parseFloat(amount);
//     if (isNaN(amountInUSD) || amountInUSD <= 0) {
//       setMessage('Please enter a valid amount greater than 0 USD.');
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       // ✅ ONLY FIX: Convert dollars to cents before sending to backend
//       const amountInCents = Math.round(amountInUSD * 100);

//       const res = await axiosSecure.post('/create-payment-intent', { price: amountInCents });
//       const fetchedClientSecret = res.data.clientSecret;

//       if (!fetchedClientSecret || !fetchedClientSecret.includes("_secret_")) {
//         throw new Error("Invalid payment secret.");
//       }

//       setClientSecret(fetchedClientSecret);

//       const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(fetchedClientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name: user.name,
//             email: user.email,
//           },
//         },
//       });

//       if (confirmError) {
//         throw new Error(confirmError.message);
//       }

//       if (paymentIntent.status === 'succeeded') {
//         setMessage('Payment successful!');

//         const payment = {
//           name: user.name,
//           email: user.email,
//           price: amountInUSD,
//           tier: selectedTier,
//           status: paymentIntent.status,
//           transaction: paymentIntent.id,
//           date: new Date(),
//         };

//         const savePayment = await axiosSecure.post('/payments', payment);
//         if (savePayment.data.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Your Payment Successful",
//             showConfirmButton: false,
//             timer: 1500,
//           }).then(() => {
//             window.location.href = "/";
//           });
//         }
//       }
//     } catch (err) {
//       setMessage(err.message || 'An unexpected error occurred.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className='containers'>
//       <h2 className="closes-icon" onClick={handleClickClosed}>
//         X
//       </h2>

//       <h4>{t('Join the Coalition')}</h4>

//       <form className='fields' onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={user.name}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//           required
//         />

//         {/* Tier Name Field (read-only) */}
//         {selectedTier && (
//           <input
//             type="text"
//             value={selectedTier}
//             readOnly
//             style={{
//               background: '#f1f1f1',
//               marginBottom: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '6px',
//               padding: '10px',
//               width: '100%',
//               maxWidth: '40%',
//             }}
//           />
//         )}
//         {/*  Amount Field */}
//         <input
//           style={{
//             display: 'flex',
//             justifyContent: 'flex-start',
//             padding: '12px',
//             marginBottom: '15px',
//             width: "100%",
//             maxWidth: '40%',
//             border: '1px solid #ccc',
//             borderRadius: '6px',
//           }}
//           type="number"
//           placeholder="Amount (USD)"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           // min="0.01"
//           // step="0.01"
//           required
//         />

//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: '16px',
//                 color: '#424770',
//                 '::placeholder': {
//                   color: 'gray',
//                   fontWeight: '500',
//                 },
//               },
//               invalid: {
//                 color: '#9e2146',
//               },
//             },
//           }}
//         />

//         <button className="custom-btn" type="submit" disabled={!stripe || !amount || isProcessing}>
//           {isProcessing ? 'Processing...' : `Pay $${amount}`}
//         </button>

//         <h4>{message}</h4>
//       </form>
//     </div>
//   );
// };

// export default CheckOutForm;


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CheckOutForm.css';

const CheckOutForm = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Pricing page থেকে আসা data
  const { tier, amount: tierAmount } = location.state || {};

  const [selectedTier, setSelectedTier] = useState(tier || '');
  const [amount, setAmount] = useState(tierAmount || '');

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  console.log(clientSecret);
  const [user, setUser] = useState({ name: '', email: '' });
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // ✅ Axios setup
  const axiosSecure = axios.create({
    baseURL: 'https://decentmed-server.vercel.app', // change to your backend
  });
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  // ✅ Fetch authenticated user
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

  // ✅ Auto set tier and amount from Pricing page
  useEffect(() => {
    if (!tier || !tierAmount) {
      // যদি state না থাকে, back to pricing
      navigate('/pricing');
    } else {
      setSelectedTier(tier);
      setAmount(tierAmount);
    }
  }, [tier, tierAmount, navigate]);

  const handleClickClosed = () => {
    navigate('/telehealth');
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

    setIsProcessing(true);

    try {
      const amountInCents = Math.round(parseFloat(amount) * 100);

      const res = await axiosSecure.post('/create-payment-intent', { price: amountInCents });
      const fetchedClientSecret = res.data.clientSecret;

      if (!fetchedClientSecret || !fetchedClientSecret.includes("_secret_")) {
        throw new Error("Invalid payment secret.");
      }

      setClientSecret(fetchedClientSecret);

      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(fetchedClientSecret, {
        payment_method: {
          card,
          billing_details: { name: user.name, email: user.email },
        },
      });

      if (confirmError) throw new Error(confirmError.message);

      if (paymentIntent.status === 'succeeded') {
        const payment = {
          name: user.name,
          email: user.email,
          price: amount,
          tier: selectedTier,
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
          }).then(() => navigate('/'));
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
      <h2 className="closes-icon" onClick={handleClickClosed}>X</h2>
      <h4>{t('Join the Coalition')}</h4>

      <form className='fields' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
          style={{
            width: '100%',
            marginBottom: '15px',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '6px',
          }}
        />

        {/* Tier Name + Amount Row */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {/* Amount Field (Left) */}
          <input
            type="number"
            placeholder="Amount (USD)"
            value={amount}
            readOnly
            style={{
              flex: '1',
              padding: '12px',
              height: '50px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              minWidth: '150px',
            }}
            required
          />

          {/* Tier Name Field (Right) */}
          <input
            type="text"
            value={selectedTier}
            readOnly
            style={{
              flex: '1',
              background: '#f1f1f1',
              padding: '12px',
              height: '50px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              minWidth: '150px',
            }}
          />
        </div>

        <CardElement
          options={{
            style: {
              base: { fontSize: '16px', color: '#424770', '::placeholder': { color: 'gray', fontWeight: '500' } },
              invalid: { color: '#9e2146' },
            },
          }}
        />

        <button className="custom-btn" type="submit" disabled={!stripe || !amount || isProcessing}>
          {isProcessing ? 'Processing...' : `Pay $${amount}`}
        </button>

        {message && <h4>{message}</h4>}
      </form>
    </div>
  );
};

export default CheckOutForm;
