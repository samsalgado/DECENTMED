import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../footer';
import "../../info/Info.css";
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

  // From Pricing page?
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
      const res = await axios.post(
        'https://decentmed-server.vercel.app/users',
        user,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);

        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'Welcome to DecentMed!',
          confirmButtonColor: '#027360',
        }).then(() => {
          if (fromPricing && tierFromPricing && amountFromPricing) {
            navigate('/stripepay', { state: { tier: tierFromPricing, amount: amountFromPricing } });
          } else {
            navigate("/");
          }
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In
  useEffect(() => {
    const handleGoogleSignUp = async (response) => {
      try {
        const res = await axios.post(
          'https://decentmed-server.vercel.app/google-signup',
          { credential: response.credential }
        );

        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          Swal.fire({
            icon: 'success',
            title: 'Welcome via Google!',
            confirmButtonColor: '#027360',
          }).then(() => {
            if (fromPricing && tierFromPricing && amountFromPricing) {
              navigate('/stripepay', { state: { tier: tierFromPricing, amount: amountFromPricing } });
            } else {
              navigate('/');
            }
          });
        }
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Google login failed',
          text: err.response?.data?.message || 'Please try again',
        });
      }
    };

    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "1055481939354-kahqsmu8kojqr57fkeftafted8umun