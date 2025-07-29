
import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Helmet } from 'react-helmet'; // Import Helmet
import Topbar from './topbar';
import Footer from '../footer';
//import ReactPlayer from 'react-player';
import JenB from '../cards/scarlett.JPG';
import { useTranslation } from 'react-i18next'

export function Breathwork() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post(
        'https://rest.gohighlevel.com/v1/contacts/',
        {
          firstName: formData.name,
          email: formData.email,
          phone: formData.phone
        },
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Ikg2VUtCRW8yemtZZ3JuMWlsb05OIiwidmVyc2lvbiI6MSwiaWF0IjoxNzUxMTU0Nzk4ODI3LCJzdWIiOiJvZHdablZ0V040UFl4eG9EQ1J0ciJ9.0HzNO1zHGhpJ9cxcwHU_p9Ch5uDNGLQnpQV8DaGloVQ',
            'Content-Type': 'application/json'
          }
        }
      );

      // 2️⃣ Backend API for Email (replace with your backend URL)
      await axios.post('https://decentmed-server.vercel.app/send-email', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });

      setStatus('Success! We will contact you shortly.');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error(error);
      setStatus('Failed to send. Try again.');
    }
  };

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
              </figure> <br />
              <figcaption className='scarle'>{t("Contact Scarlett Dee")}</figcaption>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="contact-form">
                <div>
                  <label>Name</label>
                  <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <label>Phone</label>
                  <input type="tel" name="phone" placeholder='Enter your phone number' value={formData.phone} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
              </form>
              <p>{status}</p>

              <h5>{t("Scartlett Dee, Somatic Breathwork Coach:")}</h5>
              <p>
                {t("Scarlett has over 30 years of experience in yoga, healing, and self-mastery. She guides transformational breathwork journeys that help release stored trauma, regulate the nervous system, and support deep emotional healing. Her sessions offer a powerful reset—reducing stress, calming anxiety, and rebuilding confidence from the inside out. Scarlett’s work is both grounding and expansive, helping clients overcome inner challenges and return to a state of clarity, presence, and aligned self-leadership.")}
              </p>
              <p>
                {t("Scarlett is a certified: 9D Breathwork Coach & Facilitator, Hypnotherapist, Holistic Therapist, Tantra & Yoga Teacher Trainer")}
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
