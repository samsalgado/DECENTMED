import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import tier2 from '../cards/pp.png';
import tier3 from "../cards/2.png";
import '../info/Info.css';
import tier0 from "../cards/AdvertisingTier.png";

export function Pricing() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [loadingTier, setLoadingTier] = useState(null);

  const tiers = [
    {name: 'Tier 0',  price:500, img:tier0},
    { name: 'Tier 1', price: 1500, img: tier2 },
    { name: 'Tier 2', price: 2500, img: tier3 }
  ];

  const handlePayment = (tierName, price) => {
    if (loadingTier) return; // prevent double click
    setLoadingTier(tierName);

    const token = localStorage.getItem('token');

    setTimeout(() => {
      if (!token) {
        navigate('/signup/provider', {
          state: { tier: tierName, amount: price, fromPricing: true }
        });
      } else {
        navigate('/stripepay', { state: { tier: tierName, amount: price } });
      }
      setLoadingTier(null);
    }, 800); // short delay to show loading spinner
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #eef2f3ff, #e4f3f2cb)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 20px',
      }}
    >

      <h2 style={{ textAlign: 'center', color: '#00695C', marginBottom: '20px' }}>
        {t("Choose a Plan")}
      </h2>

      <div className='title-container'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'stretch',
            transition: 'all 0.4s ease-in-out',
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={tier.img}
                alt={tier.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  marginBottom: '15px',
                }}
              />
              <h3 style={{ color: '#00695C', fontSize: '1.2rem' }}>
                {tier.name} - ${tier.price}
              </h3>

              <button
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  border: 'none',
                  backgroundColor: loadingTier === tier.name ? '#b0b0b0' : '#00796B',
                  color: '#fff',
                  borderRadius: '8px',
                  cursor: loadingTier === tier.name ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onClick={() => handlePayment(tier.name, tier.price)}
                disabled={loadingTier === tier.name}
                onMouseEnter={(e) => {
                  if (loadingTier !== tier.name)
                    e.target.style.backgroundColor = '#004d40';
                }}
                onMouseLeave={(e) => {
                  if (loadingTier !== tier.name)
                    e.target.style.backgroundColor = '#00796B';
                }}
              >
                {loadingTier === tier.name ? (
                  <>
                    <span
                      className="spinner"
                      style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid #fff',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }}
                    ></span>
                    Processing...
                  </>
                ) : (
                  <>Select ${tier.price} Tier</>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Spinner Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Pricing;
