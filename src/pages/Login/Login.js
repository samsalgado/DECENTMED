
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from '../../footer';
import SocialLogin from '../SocialLogin/SocialLogin';
import Topbar from '../topbar';
import './Login.css'; // Import the custom CSS
import { AuthContext } from '../Providers/AuthProvider';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
const {t} = useTranslation('common')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        setError('');
        Swal.fire({
          title: t('Success!'),
          text: t('Do you want to continue'),
          icon: 'success',
          confirmButtonText: t('Welcome'),
        });
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error));
  };

  return (
    <>
      <Helmet>
        <title> {t('login')}</title>
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="login-title">{t('Login')}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-field">
              <label htmlFor="email">{t('Email')}</label>
              <input
                className="login-input"
                type="email"
                {...register('email', { required: 'Email is required' })} 
                placeholder={t("Enter your email")}

              />
              {errors.email && (
                <p className="login-error">{errors.email.message}</p>
              )}
            </div>
            <div className="login-field password-field">
              <label htmlFor="password">{t('Password')}</label>
              <input
                className="login-input"
                type={show ? 'text' : 'password'}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                  pattern: { value: /^(?=.*?[A-Z])(?=.*?[!@#$%^&*])/, message: "Password must contain at least one capital letter and one special character" }
                })}
                placeholder={t("Enter Password")}
              />
              <span className="password-toggle" onClick={() => setShow(!show)}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="login-error">{errors.password.message}</p>
              )}
              {error && <p className="login-error">{error?.message}</p>}
            </div>


            <input
              className="login-button"
              type="submit"
              value={t("Login")}
            />
          </form>
          <p className="login-footer">
            {t(`Don't have an account?`)}<Link to="/signin" className="login-link">{t('Sign Up')}</Link>
          </p>
        </div>
        <div className="divider">{t('Or')}</div>
        <SocialLogin />
      </div>
      <footer className='footer'>
        <Footer />
      </footer>

    </>
  );

};

export default Login;

