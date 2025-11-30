import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../footer';
import Info7 from '../../info/info7';
import Offer2 from '../../offers/offer2';
import Practice from '../practices';
import '../Styles/AuthForm.css';
import Topbar from '../topbar';

const SignUp = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '', code: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();

  const tierFromPricing = location.state?.tier || '';
  const amountFromPricing = location.state?.amount || '';
  const fromPricing = location.state?.fromPricing || false;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (user.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('https://decentmed-server.vercel.app/users', user);
      localStorage.setItem('token', res.data.token);

      Swal.fire({
        icon: 'success',
        title: 'Welcome to DecentMed!',
        confirmButtonColor: '#027360',
      }).then(() => {
        navigate(fromPricing ? '/stripepay' : '/', {
          state: { tier: tierFromPricing, amount: amountFromPricing }
        });
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  // Fixed Google Sign-In (no more errors!)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: '1055481939354-kahqsmu8kojqr57fkeftafted8umun54.apps.googleusercontent.com',
          callback: async (response) => {
            try {
              const res = await axios.post('https://decentmed-server.vercel.app/google-signup', {
                credential: response.credential
              });
              localStorage.setItem('token', res.data.token);
              Swal.fire({ icon: 'success', title: 'Welcome via Google!' }).then(() => {
                navigate(fromPricing ? '/stripepay' : '/');
              });
            } catch (err) {
              Swal.fire({ icon: 'error', title: 'Google login failed' });
            }
          }
        });

        window.google.accounts.id.renderButton(
          document.getElementById('googleSignUpDiv'),
          { theme: 'outline', size: 'large', width: '100%', text: 'continue_with' }
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [navigate, fromPricing]);

  return (
    <>
      <Topbar />

      {/* Full screen with safe top padding */}
      <div className="min-h-screen bg-gray-50 flex flex-col">

        {/* Form Card – Title never hidden */}
        <div className="flex-1 flex items-start justify-center px-4 pt-32 pb-10">
          <form
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative"
            onSubmit={handleSubmit}
            style={{ paddingTop: 'clamp(110px, 20vh, 170px)' }} // Magic line
          >

            {/* Close Button – always visible */}
            <button
              type="button"
              onClick={() => navigate('/')}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl text-gray-600 z-10"
              style={{ top: 'max(110px, env(safe-area-inset-top, 110px))' }}
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              {t("Provider Signup")}
            </h2>

            {error && <p className="text