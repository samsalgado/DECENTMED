// import "../App.css";
// import '../info/Info.css';
// import { useTranslation } from 'react-i18next'
// import tier2 from '../images copy/tier 1.png';
// import tier3 from "../images copy/tier.png";
// import Collapsible from 'react-collapsible';
// import { useEffect, useState } from 'react';
// //import supabase from "./supabase";
// export function Pricing() {
//   const { t } = useTranslation('common');
//   const [selectedTier, setSelectedTier] = useState(null);
//   //const [tierDetails,setTierDetails] = useState([]);
//   const handleChange = async (e) => {
//     const value = e.target.value;
//     setSelectedTier(value);
//     //await getTiers(value);
//   }
//  /* const getTiers = async (tier) => {
//     try {
//       const {data, error} = await supabase
//       .from('Pricing_tiers')
//       .select('*')
//       .eq('tier', tier);
//       if (error) {
//         console.error('Error fetching tier data:', error);
//       } else {
//         setTierDetails(data); // Update the state with fetched data
//         console.log('Fetched Tier Details:', data); // Optional: Log the fetched data
//       }
//     } catch (err) {
//       console.error('Error while fetching tiers:', err);
//     }
//     }
//     */
//   useEffect(() => {
//     console.log("Tier:", selectedTier);
//     //console.log("Tier Details:", tierDetails);
//   }, [selectedTier]); 
//     return(
//        <div className="">
//  <div className="title-container">
//         <table className="collapsibles-table">
//             <tbody>
//               <tr>
//               <th className="collapsible-trigger">
//        <Collapsible trigger={t("Pricing Tiers")}>
//         <div className='collapsible-content'>
//        <input  style={{ width: '25px', height: '25px', marginRight: '10px', cursor: 'pointer' }}  type='radio' onClick={handleChange} name='Tier' value="Tier 2"></input>
//         <img src={tier2} alt="Tier2" /> 
//         <input  style={{ width: '25px', height: '25px', marginRight: '10px', cursor: 'pointer' }}  type='radio' onClick={handleChange} name='Tier' value="Tier 3"></input>
//         <img  src={tier3} alt="Tier3" />
//         <img alt="" />
//         </div>
//         </Collapsible>
//         </th>
//         </tr>
//         </tbody>
//           </table>
//       </div>
// </div>
//     )
//   };
// export default Pricing;





// import React, { useState, useEffect } from 'react';
// import Collapsible from 'react-collapsible';
// import { useTranslation } from 'react-i18next';
// import { FaChevronDown } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import tier2 from '../images copy/tier 1.png';
// import tier3 from "../images copy/tier.png";
// import '../info/Info.css';

// export function Pricing() {
//   const { t } = useTranslation('common');
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const tiers = [
//     { name: 'Tier:01', price: 500, img: tier2 },
//     { name: 'Premium Tier-02', price: 2000, img: tier3 },
//   ];

//   const handlePayment = (tierName, price) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       // Not logged in → go to signup page with tier info
//       navigate('/signup/provider', {
//         state: { tier: tierName, amount: price, fromPricing: true }
//       });
//     } else {
//       // Logged in → go directly to stripe
//       navigate('/stripepay', { state: { tier: tierName, amount: price } });
//     }
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className='title-container'>
//       <table className="collapsibles-table">
//         <tbody>
//           <Collapsible
//             trigger={
//               <th className="collapsible-trigger">
//                 {t("Pricing Tiers")} <FaChevronDown className="icon" />
//               </th>
//             }
//             open={isOpen}
//             onOpening={() => setIsOpen(true)}
//             onClosing={() => setIsOpen(false)}
//             transitionTime={300}
//           >
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '20px',
//                 justifyContent: 'center',
//                 alignItems: 'stretch',
//                 marginTop: '20px',
//                 transition: 'all 0.4s ease-in-out',
//               }}
//             >
//               {tiers.map((tier) => (
//                 <div
//                   key={tier.name}
//                   style={{
//                     backgroundColor: '#f8f9fa',
//                     borderRadius: '16px',
//                     boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
//                     padding: '20px',
//                     textAlign: 'center',
//                     cursor: 'pointer',
//                     transition: 'transform 0.3s ease',
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
//                   onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//                 >
//                   <img
//                     src={tier.img}
//                     alt={tier.name}
//                     style={{
//                       width: '100%',
//                       height: 'auto',
//                       borderRadius: '10px',
//                       marginBottom: '15px',
//                     }}
//                   />
//                   <h3 style={{ color: '#00695C', fontSize: '1.2rem' }}>
//                     {tier.name} - ${tier.price}
//                   </h3>
//                   <button
//                     style={{
//                       marginTop: '10px',
//                       padding: '10px 20px',
//                       border: 'none',
//                       backgroundColor: '#00796B',
//                       color: '#fff',
//                       borderRadius: '8px',
//                       cursor: 'pointer',
//                       fontSize: '1rem',
//                       transition: 'background-color 0.3s ease',
//                     }}
//                     onClick={() => handlePayment(tier.name, tier.price)}
//                     onMouseEnter={(e) => (e.target.style.backgroundColor = '#004d40')}
//                     onMouseLeave={(e) => (e.target.style.backgroundColor = '#00796B')}
//                   >
//                     Select ${tier.price} Tier
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </Collapsible>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Pricing;



import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import tier2 from '../images copy/TIER1.png';
import tier3 from "../images copy/TIER2 (3).png";
import '../info/Info.css';

export function Pricing() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const [loadingTier, setLoadingTier] = useState(null);

  const tiers = [
    { name: 'Tier 1', price: 500, img: tier2 },
    { name: 'Tier 2', price: 2000, img: tier3 },
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
