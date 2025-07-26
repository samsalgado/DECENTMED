import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Topbar from './topbar';
import Footer from '../footer';
import jezy from '../images copy/IMG_0827.jpeg'; // ✅ Ensure this path is correct in your project
import "../App.css";
export default function MassPract() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isWashLocation, setIsWashLocation] = useState(false);

  const washTerms = [
    'washington', 'wa', 'seattle', 'port townsend', 'olympia'
  ];

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          // You could use reverse geocoding here to get the user's city
          console.log('Coordinates:', position.coords);
        },
        error => {
          console.warn('Geolocation error:', error);
        }
      );
    }
  }, []);

  const handleSearch = () => {
    const lowerCaseLocation = location.toLowerCase().trim();
    const match = washTerms.some(term => lowerCaseLocation.includes(term));
    setIsWashLocation(match);
    setShowResults(true);
  };

  return (
    <main className="page-content">
    <div>
      <Helmet>
        <title>{t('Find a Practitioner')} - DecentMed</title>
      </Helmet>
    <header>
      <Topbar />      
    </header>
      <h1 className="text-center mb-4">{t('Find a Practitioner')}</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }} className="text-center mb-8">
        {t('Enter your location to find holistic practitioners near you.')}
      </p>

      <div className="row justify-content-center mb-4">
  <div className="wide-search">
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder={t('Enter your city')}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
            <button className="btn btn-primary" onClick={handleSearch}>
              {t('Search')}
            </button>
          </div>
        </div>
      </div>

      {showResults && (
        <div className="row justify-content-center">
          {isWashLocation ? (
            <div className="col-md-6">
              <div className="card text-center">
                <img
                  src={jezy}
                  alt="Therapist JeZy"
                  className="card-img-top mx-auto"
                  style={{ maxWidth: '300px', height: 'auto' }}
                />
                <div className="card-body">
                  <h5 className="card-title">JeZy, LMT</h5>
                  <p className="card-text">
                    MA00008631
                  </p>
                  <p className="card-text">
                    {t("Licensed Massage Therapist/Certified Qigong Instructor/Facilitator to being your Best Awesome Self!")}                  </p>
                  <a href="tel:+12532260225" className="btn btn-primary">
                    {t("Contact")}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p>{t('We currently do not have providers listed in your area.')}</p>
              <p>
                {t('Want to be the first?')}{' '}
                <a href="mailto:themerlingroupworld@gmail.com">{t("themerlingroupworld@gmail.com")}</a>
              </p>
            </div>
          )}
        </div>
        
      )}
      <footer><Footer /></footer>
      </div>
      </main>
  )
}

