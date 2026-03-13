import React, { useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import tier2 from '../images copy/tier11.png';
import tier3 from "../images copy/bigtierr.png";
import '../info/Info.css';
import tier0 from "../images copy/ad.png";

export function Pricing() {
  const { t } = useTranslation('common');

  const tiers = [
    { name: 'Advertising Tier', price: 500, img: tier0 },
    { name: 'Tier 1', price: 1500, img: tier2 },
    { name: 'Tier 2', price: 2500, img: tier3 }
  ];

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
        {t("Select Tier to Join DecentMed")}
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
              onClick={() => window.location.href = "https://decentmed.org/choose-provider-tier"}
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
                {tier.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
