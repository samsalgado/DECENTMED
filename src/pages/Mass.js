import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import jezy from '../images copy/IMG_0827.jpeg'; // ✅ Ensure this path is correct in your project

const MassPract = () => {
  const { t } = useTranslation();

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
    <div className="container my-5">
      <Helmet>
        <title>{t('Find a Practitioner')} - DecentMed</title>
      </Helmet>

      <h1 className="text-center mb-4">{t('Find a Practitioner')}</h1>
      <p className="text-center mb-4">
        {t('Enter your location to find holistic practitioners near you.')}
      </p>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
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
                  <h5 className="card-title">JeZy</h5>
                  <p className="card-text">
                    Enabling you to be your best awesome self!
                  </p>
                  <a href="tel:+12532260225" className="btn btn-primary">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p>{t('We currently do not have providers listed in your area.')}</p>
              <p>
                {t('Want to be the first?')}{' '}
                <a href="mailto:info@decentmed.com">info@decentmed.com</a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MassPract;
