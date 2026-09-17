import "../info/Info.css";
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../App.css";
import servicess from "../images copy/Screenshot 2026-09-17 at 7.54.29 AM.png"
import angelaf from "../images copy/ANGELAF.jpeg";
import amy from "../images copy/essence.png";
import services from "../cards/Screenshot 2026-05-03 at 7.59.31 PM.png";
import am from "../cards/web-logo-scaled.png";
import kari from "../images copy/IMG_5454.JPG";
import brown from "../cards/drbrown.webp";
import prices from "../images copy/PRICESS.png";
import bailey from "../images copy/tsbailey.png";
import linkedin from "../images copy/linkedin.png";
import facebook from "../images copy/facebook.png";
import instagram from "../images copy/insta.png";
import youtube from "../images copy/youtube.png";
import Footer from '../footer';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Func() {
  const { t } = useTranslation('common');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once:true means animation runs only once
  }, []);

  // Define practitioners data
  const practitioners = [
    {
      id: 1,
      image: amy,
      title: t('Essence of Life Wellness Center'),
      name: t("Dr. Nadia Taylor"),
      location: t("Boyton Beach, FL"),
      badges: [t("Holistic doctor"), t("Holistic nutritionist"), t("Cutting-edge technology"), t("Personalized care and approach")],
      description: t("Dr. Nadia Taylor believes in holistic medicine because it helped to heal her from disease and maladies. She has recently opened up her own holistic healing center, Essence of Life, in Boynton Beach, Florida in September 2025 so that she can help others heal through some of the same modalities that helped her. Dr. Taylor is excited to be back in South Florida after years living elsewhere and is continually looking to make positive changes in the community. She has dedicated her life to a life of service for the betterment of others."),
      video: "https://rumble.com/embed/v6zhjpy/?pub=4hu51y",
      bookingUrl: "https://essenceoflife-wellness.practicebetter.io/#/609c398e2a832607ac9863a1/bookings",
      bookingImage: prices,
      facebook: "https://www.facebook.com/wellnessmommd",
      linkedin: "https://www.linkedin.com/in/dr-nadia-taylor-3675255/",
      instagram: "https://www.instagram.com/essenceoflifewellness_boynton",
    },
    {
      id: 2,
      image: brown,
      title: t('Hormone Health with Dr. Brown'),
      name: t("DR. JEFFREY L. BROWN, D.O"),
      location: t("Palm Beach Gardens, FL"),
      badges: [t("Functional Medicine"), t("Hormone Health"), t("Endometriosis"), t("Menopause")],
      description: t("I empower women with endometriosis, adenomyosis and other painful menstrual disorders, to break free from their cycle of pain, boost fertility potential, and help them live a vibrant, fulfilling life through holistic care. I also help women navigate perimenopause and menopause naturally by uncovering the root causes of hormone imbalances, fatigue, weight gain, sleep issues, hot flashes, and mood changes so they can regain their energy, balance their hormones, and feel vibrant again. I address women’s health issues by using a comprehensive, holistic approach to understand the root cause and help the body return to normal."),
      video: "https://www.youtube.com/embed/JG8vDZFswmA?si=31jeRikdQ5uPDLVB",
      bookingUrl: "https://hormonehealthwithdrbrown.com/contact-us",
      bookingLabel: t("Book"),
      facebook: "https://www.facebook.com/drjeffreylbrown",
      linkedin: "https://www.linkedin.com/in/jeffrey-l-brown-d-o-350347233",
      instagram: "https://www.instagram.com/jeffreybrown.do",
      youtube: "https://www.youtube.com/@DrJeffreyBrown-Hormonehealth",
    },
    {
      id: 3,
      image: angelaf,
      title: t('Robust Health Advocacy'),
      name: t("Angela Forest"),
      location: t("Bowie, Maryland, United States"),
      badges: [t("Women's Health"), t("Gut Health"), t("Personal Health Advocacy"), t("Personalized care and approach")],
      description: t("My qualifications come from more than 20 years of experience in knowledge management/curation, behavioral change, research on cutting-edge health innovations, along with extensive and continuous study into the most common chronic illnesses impacting people today. I've investigated the gaps in our healthcare system, specifically why many people don't heal and what kinds of practices, behavioral changes, healthcare support, and treatment modalities help people recover their health for good. My primary language is English with moderate abilities in reading, speaking and writing Spanish. Specialties and Client Focus: Gut health restoration, hormone balancing and trauma and stress release for women who are in the middle stage of their lives, juggling work and family priorities who have often put their health issues last, but who now see the need to get real, lasting solutions to their long-term health challenges. Clinical Training (Ongoing): Gut health, including treatments to eradicate Small Intestinal Bacterial Overgrowth [SIBO]; holistic hormonal balancing, nutritional support, functional medicine, Chinese medicine, somatic trauma release, breathwork, recovery from PTSD and Narcissist abuse."),
      video: "https://www.youtube.com/embed/je9JZSZcdUw?si=sC1PTTcJlocIhxaQ",
      bookingUrl: "https://calendly.com/forestangela9/new-meeting?month=2026-09",
      bookingImage: services,
      linkedin: "https://www.linkedin.com/in/angelaforest/",
    },
    {
      id: 4,
      image: am,
      title: t('Optimal Root Wellness'),
      name: t("Lorna Ching-Carter"),
      location: t("170 N Henderson Rd # 310, King of Prussia, PA 19406"),
      badges: [t("Functional Medicine"), t("Advanced Testing"), t("Systems-Based Approach"), t("Personalized care and approach")],
      description: t("After years in conventional healthcare, Lorna felt limited by short visits, symptom-based protocols, and systems that weren’t designed for true healing. She saw patients struggling with fatigue, gut issues, hormones, and chronic symptoms—and no one was putting the full picture together. Lorna created Optimal Root Wellness to change that. A practice where patients get time, answers, and support. A place where healing isn’t rushed—and where every step of your care is intentional. Lorna combines years of clinical experience with advanced training in functional and integrative medicine. Her approach includes: In-depth functional testing, Lifestyle and nutrition support, Root-cause analysis for chronic symptoms, Trauma-informed, relationship-centered care and Realistic plans that fit your life"),
      video: "https://www.youtube.com/embed/Q3N9OzN-3iE?si=vsr7w14uyoTe2gvF",
      bookingUrl: "https://intakeq.com/booking/iejguw?serviceId=f42e0268-683d-4bfd-b582-f34712263a49",
      bookingImage: servicess,
      linkedin: "https://www.linkedin.com/in/lorna-ching-carter-05a1913b0/",
    },
    {
      id: 5,
      image: kari,
      title: t('Kari Lockrem Wellness'),
      name: t("Kari Lockrem"),
      location: t("Lakeville, Minnesota, USA"),
      badges: [t("Functional Medicine"), t("Science-informed Approach"), t("Practical Nutrition"), t("Hair Loss Restoration")],
      description: t("As a Board-Certified Functional Health Coach, I help clients uncover the root causes of chronic health concerns rather than simply managing symptoms. Using a personalized, science-informed approach, I evaluate nutrition, lifestyle, stress, sleep, gut health, hormones, metabolism, and environmental factors to create practical, sustainable plans that support long-term wellness. My goal is to educate and empower each client so they can understand their health, make informed decisions, and build lasting habits that improve their quality of life."),
      video: "https://www.youtube.com/embed/lE5vVNDyx0I?si=dML_G_VCbcA2Vkem",
      bookingUrl: "https://my.practicebetter.io/#/5f7214892a9029071895cc89/bookings?s=69aad0c515332eadf8c1891f",
      bookingImage: bailey,
      instagram: "https://www.instagram.com/karilockremwellness/",
      facebook: "https://www.facebook.com/karilockremwellness/",
      linkedin: "https://www.linkedin.com/in/karilockremwellness",
    },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

      <Helmet>
        <title>{t("Functional Medicine Providers")}</title>
        <meta property="og:title" content={t("Functional Medicine Providers")} />
        <meta name="description" content={t("Meet functional medicine practitioners and wellness centers, including Essence of Life Wellness Center, Dr. Brown, Optimal Root Wellness, and Kari Lockrem Wellness, offering root-cause, personalized care.")} />
      </Helmet>
      <header style={{
        position: 'relative',
        zIndex: 1000
      }}>
        <Topbar />
      </header>

      <div className="container">
        <div data-aos="slide-right">
          <h1>{t("Functional Medicine")}</h1>
        </div>

        <div className="provider-grid" style={{ alignItems: 'start' }}>
          {practitioners.map((practitioner) => (
            <div key={practitioner.id} className="card provider-card" style={{ border: '1px solid #dee2e6' }}>
              <div className="card-body provider-card-body">
                <div className="provider-card-top">
                  <img src={practitioner.image} alt={practitioner.title} className="provider-photo" />
                  <h2 className="h4 mb-1">{practitioner.title}</h2>
                  <p className="text-muted mb-0">{practitioner.name}</p>
                </div>

                <p className="mb-1">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  {practitioner.location}
                </p>

                <div className="mb-2">
                  {practitioner.badges.map((badge, i) => (
                    <span className="badge bg-light text-dark me-1" key={i}>{badge}</span>
                  ))}
                </div>

                {practitioner.video && (
                  <div className="provider-video">
                    <iframe
                      src={practitioner.video}
                      title={`${practitioner.name} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                )}

                <p className="card-text small provider-bio">{practitioner.description}</p>

                <div className="provider-card-footer">
                  {practitioner.bookingImage ? (
                    <a href={practitioner.bookingUrl} target="_blank" rel="noopener noreferrer">
                      <figure>
                        <img
                          src={practitioner.bookingImage}
                          alt={practitioner.title}
                          style={{
                            maxWidth: '500px',
                            maxHeight: '420px',
                            objectFit: 'contain',
                            width: '100%',
                            cursor: 'pointer'
                          }}
                        />
                        <figcaption>{t("Buy")}</figcaption>
                      </figure>
                    </a>
                  ) : (
                    <a href={practitioner.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                      {practitioner.bookingLabel || t("View Profile")}
                    </a>
                  )}
                  <div className="provider-social-icons">
                    {practitioner.facebook && (
                      <a href={practitioner.facebook} target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
                        <img src={facebook} alt={t("Facebook")} />
                      </a>
                    )}
                    {practitioner.linkedin && (
                      <a href={practitioner.linkedin} target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                        <img src={linkedin} alt={t("LinkedIn")} />
                      </a>
                    )}
                    {practitioner.instagram && (
                      <a href={practitioner.instagram} target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                        <img src={instagram} alt={t("Instagram")} />
                      </a>
                    )}
                    {practitioner.youtube && (
                      <a href={practitioner.youtube} target="_blank" rel="noopener noreferrer" aria-label={t("YouTube")} title={t("YouTube")}>
                        <img src={youtube} alt={t("YouTube")} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
