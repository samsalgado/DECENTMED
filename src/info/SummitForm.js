import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

// Encodes form fields the way Netlify's form-handling endpoint expects
// (application/x-www-form-urlencoded), matching the hidden static form
// declared in public/index.html so Netlify's build-time form detection
// picks this form up and can send an email notification for it.
function encodeForNetlify(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const fieldWrapStyle = { marginBottom: '14px' };
const labelStyle = { display: 'block', fontWeight: 'bold', marginBottom: '4px' };
const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '12px 20px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

export default function SummitForm() {
  const { t } = useTranslation('common');
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForNetlify({ 'form-name': 'summit-signup', ...values }),
      });
      setStatus('success');
      setValues({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Summit form submission failed:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="container-whitesmoke" style={{ maxWidth: '480px', margin: '0 auto' }}>
        <p style={{ fontWeight: 'bold', color: '#00695c' }}>
          {t("Thank you! We've received your submission and will be in touch.")}
        </p>
      </div>
    );
  }

  return (
    <form
      name="summit-signup"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'left' }}
    >
      {/* Required by Netlify so the POST is matched to the form definition */}
      <input type="hidden" name="form-name" value="summit-signup" />
      {/* Honeypot field: hidden from real users, catches spam bots */}
      <p hidden>
        <label>
          {t("Don't fill this out if you're human:")} <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <div style={fieldWrapStyle}>
        <label htmlFor="summit-name" style={labelStyle}>{t('Name')}</label>
        <input
          id="summit-name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div style={fieldWrapStyle}>
        <label htmlFor="summit-email" style={labelStyle}>{t('Email')}</label>
        <input
          id="summit-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div style={fieldWrapStyle}>
        <label htmlFor="summit-phone" style={labelStyle}>{t('Phone')}</label>
        <input
          id="summit-phone"
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div style={fieldWrapStyle}>
        <label htmlFor="summit-message" style={labelStyle}>{t('Message')}</label>
        <textarea
          id="summit-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <Button
        type="submit"
        className="custom-btn"
        disabled={status === 'submitting'}
        style={{ display: 'block', margin: '12px auto 0' }}
      >
        {status === 'submitting' ? t('Sending…') : t('Submit')}
      </Button>

      {status === 'error' && (
        <p style={{ color: '#b00020', marginTop: '10px' }}>
          {t('Something went wrong sending your submission. Please try again.')}
        </p>
      )}
    </form>
  );
}
