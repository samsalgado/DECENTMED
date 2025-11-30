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
              Swal.fire({ icon: 'success', title: 'Welcome!' }).then(() => navigate(fromPricing ? '/stripepay' : '/'));
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
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, [navigate, fromPricing]);

  return (
    <>
      <Topbar />

      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col">

        <div className="flex-1 flex items-start justify-center px-5 pt-32 pb-12">
          <div className="w-full max-w-md">

            {/* Close Button */}
            <button
              onClick={() => navigate('/')}
              className="fixed top-24 right-6 z-50 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl text-gray-700 hover:bg-gray-100"
              style={{ top: 'max(110px, env(safe-area-inset-top, 110px))' }}
            >
              ×
            </button>

            {/* Card */}
            <div className="bg-white rounded-3xl shadow-2xl px-8 pt-16 pb-10">
              
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                {t("Provider Signup")}
              </h2>

              {error && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-center mb-6">
                  {error}
                </div>
              )}

              {/* Uniform Inputs */}
              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder={t("Name")}
                  value={user.name}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-5 text-lg rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder={t("Email")}
                  value={user.email}
                  onChange={handleChange}
                  required
 required
                  className="w-full h-14 px-5 text-lg rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition"
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={t("Password")}
                    value={user.password}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-5 pr-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
                  </button>
                </div>

                <input
                  type="text"
                  name="code"
                  placeholder={t("Affiliate Code (optional)")}
                  value={user.code}
                  onChange={handleChange}
                  className="w-full h-14 px-5 text-lg rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition"
                />
              </div>

              <button
                className="w-full mt-10 h-14 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-200 disabled:opacity-70"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : t("Sign Up")}
              </button>

              <p className="text-center mt-8 text-gray-600">
                {t("Already have an account?")}{' '}
                <Link to="/signin" className="text-teal-600 font-bold hover:underline">
                  {t("Sign In")}
                </Link>
              </p>

              <div className="mt-10">
                <div id="googleSignUpDiv" className="mx-auto"></div>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-white rounded-t-3xl -mt-8 pt-12">
          <Practice />
          <Offer2 />
          <Info7 />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SignUp;