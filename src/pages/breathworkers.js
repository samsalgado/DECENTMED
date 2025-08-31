
// import React from 'react';
// import '../App.css';
// import { Helmet } from 'react-helmet'; // Import Helmet
// import Topbar from './topbar';
// import Footer from '../footer';
// //import ReactPlayer from 'react-player';
// import JenB from '../cards/scarlett.JPG';
// import { useTranslation } from 'react-i18next'

// export function Breathwork() {
//   const { t } = useTranslation('common');


//   return (
//     <div>
//       <main className="page-content">
//         <Helmet>
//           <title>{t("Somatic Breathwork")}</title>
//           <meta name="description" content={t("If you want one of the best emotional eating books...")} />
//         </Helmet>

//         <header>
//           <Topbar />
//         </header>

//         <div className="container">
//           <h1>{t("Somatic Breathwork & Breathwork Coaches")}</h1>

//           <div className="row">
//             <div className="col-md-6">
//               <h2>{t("Scarlett Dee")}</h2>
//               <figure>
//                 <img src={JenB} alt="Scarlett" />
//               </figure> <br />

//               <a
//                 href="mailto:info@tribe-yoga.com"
//                 className="custom-btn"                style={{
//                   display: "inline-block",
//                   padding: "10px 20px",
//                   background: "#6c63ff",
//                   color: "#fff",
//                   borderRadius: "8px",
//                   textDecoration: "none",
//                   marginTop: "10px",
//                 }}
//               >
//                 {t("Email Scarlett")}
//               </a>

//               <h3>{t("Scartlett Dee, Somatic Breathwork Coach:")}</h3>
//               <p>
//                 {t("Scarlett has over 30 years of experience in yoga, healing, and self-mastery. She guides transformational breathwork journeys that help release stored trauma, regulate the nervous system, and support deep emotional healing. Her sessions offer a powerful reset—reducing stress, calming anxiety, and rebuilding confidence from the inside out. Scarlett’s work is both grounding and expansive, helping clients overcome inner challenges and return to a state of clarity, presence, and aligned self-leadership.")}
//               </p>
//               <p>
//                 {t("Scarlett is a certified: 9D Breathwork Coach & Facilitator, Hypnotherapist, Holistic Therapist, Tantra & Yoga Teacher Trainer")}
//               </p>
//             </div>
//           </div>
//         </div>

//         <footer>
//           <Footer />
//         </footer>
//       </main>
//     </div>
//   );
// }


import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Footer from '../footer';
import { useEffect } from 'react';
//import ReactPlayer from 'react-player';
import JenB from '../cards/scarlett.JPG';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2'; // ✅ Import
import 'react-phone-input-2/lib/style.css'; // ✅ Styles for phone input

export function Breathwork({ providerEmail }) {
  const { t } = useTranslation('common');
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <main className="page-content">
        <Helmet>
          <title>{t("Somatic Breathwork")}</title>
          <meta name="description" content={t("If you want one of the best emotional eating books...")} />
        </Helmet>

        <header>
          <Topbar />
        </header>

        <div className="container">
          <h1>{t("Somatic Breathwork & Breathwork Coaches")}</h1>

          <div className="row">
            <div className="col-md-6">
              <h3>{t("Scarlett Dee")}</h3>
              <figure>
                <img src={JenB} alt="Scarlett" />
              </figure>
              <br />
              <figcaption className="scarle">{t("Contact Scarlett Dee")}</figcaption>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="contact-form">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <PhoneInput
                    country={'us'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      width: '100%',
                      height: '50px',       // <-- normal input height-er moto
                      fontSize: '16px',     // optional
                    }}
                    buttonStyle={{
                      height: '50px',       // flag button height match
                    }}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
              <p>{status}</p>

              <h5>{t("Scartlett Dee, Somatic Breathwork Coach:")}</h5>
              <p>
                {t(
                  "Scarlett has over 30 years of experience in yoga, healing, and self-mastery. She guides transformational breathwork journeys that help release stored trauma, regulate the nervous system, and support deep emotional healing. Her sessions offer a powerful reset—reducing stress, calming anxiety, and rebuilding confidence from the inside out. Scarlett’s work is both grounding and expansive, helping clients overcome inner challenges and return to a state of clarity, presence, and aligned self-leadership."
                )}
              </p>
              <p>
                {t(
                  "Scarlett is a certified: 9D Breathwork Coach & Facilitator, Hypnotherapist, Holistic Therapist, Tantra & Yoga Teacher Trainer"
                )}
              </p>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
