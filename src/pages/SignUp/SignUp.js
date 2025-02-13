import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../footer';
import { AuthContext } from '../Providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Topbar from '../topbar';
import './SignUp.css';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const [show, setShow] = useState(false);
  const { createUser, updatePhoto } = useContext(AuthContext);
  const navigate = useNavigate();
const [error, setError] = useState('');
const {t} = useTranslation('common')
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        updatePhoto(data.name).then((result) => {

          const saveUser = { name: data.name, email: data.email,role:"user"  };
          fetch(`https://decentmed-server.vercel.app/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(saveUser)
          })
            .then(res => res.json())
            .then(data => {
            });
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sign Up Successful',
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        })
          .catch(error => {
  setError(error)
          });
      })
      .catch(error => {
setError(error)
      });
  };

  return (
<>      <Helmet>
  <title> {t('signup')}</title>
</Helmet>

  <header>
    <Topbar />
  </header>
  <div className="register-container">
    <div className="register-form-container">
      <h2 className="register-title">{t('Create an account')}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">{t('Name')}</label>
          <input
            type="text"
            {...register("name", { required: t("Name is required") })}
            placeholder={t("Enter Name")}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('Email')}</label>
          <input

            type="email"
            {...register("email", { required: t("Email is required") })}
            placeholder={t("Enter your email")}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group password-field">
          <label htmlFor="password">{t('Password')}</label>
          <input
               type={show ? 'text' : 'password'}
            {...register("password", {
              required:t( "Password is required"),
              minLength: { value: 6, message: "Password must be at least 6 characters" },
              pattern: { value: /^(?=.*?[A-Z])(?=.*?[!@#$%^&*])/, message: "Password must contain at least one capital letter and one special character" }
            })}
            placeholder={t("Enter Password")}
          />
   <span className="password-toggle" onClick={() => setShow(!show)}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        <div className="form-group password-field">
          <label htmlFor="confirm">{t('Confirm Password')}</label>
          <input

               type={show ? 'text' : 'password'}
            {...register("confirm", {
              required: t("Confirm Password is required"),
              validate: value => value === password || t("Passwords do not match")
            })}
            placeholder={t("Confirm Password")}
          />
   <span className="password-toggle" onClick={() => setShow(!show)}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
          {errors.confirm && <p className="error-message">{errors.confirm.message}</p>}
        </div>
        <input type="submit" value={t("Sign Up")} className="submit-button" />
      </form>
 {error && (
                <p className="login-error">{error.message}</p>
              )}
      <p className="already-account">
        {t('Already have an account?')}   <Link to="/login">{t('Login')}</Link>
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

export default Register;