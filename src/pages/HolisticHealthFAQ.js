import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import Topbar from './topbar';
import Footer from '../footer';
import PageWithTOC from '../Components/PageWithTOC';
import '../App.css';

// Each entry answers one real, high-intent search phrase directly and
// concisely (Answer Engine Optimization favors short, self-contained
// answers that can be lifted verbatim). `link` points to the DecentMed
// page most relevant to that question, for both users and internal
// link-based crawl discovery.
const patientFaqs = [
  {
    q: 'What is holistic medicine?',
    a: "Holistic medicine treats the whole person — body, mind, and spirit — rather than isolated symptoms. It combines conventional insight with natural, non-invasive approaches like nutrition, energy work, and mindset coaching to address the root causes behind a health concern, not just its symptoms.",
  },
  {
    q: 'How do I find a holistic doctor near me?',
    a: "DecentMed connects patients directly with vetted holistic providers offering telehealth appointments, so you're not limited to practitioners in your city. Search by modality and book a session from wherever you are.",
    linkText: 'Find a Practitioner',
    linkHref: 'https://telehealth.decentmed.org/signup',
    external: true,
  },
  {
    q: 'What is naturopathic medicine used for?',
    a: "Naturopathic medicine uses natural therapies — diet, herbal medicine, lifestyle changes — to support the body's own healing processes. It's commonly used for digestive issues, hormone imbalances, chronic fatigue, and as a complement to conventional treatment plans.",
    linkText: 'Explore Naturopathy',
    linkHref: '/naturopathy',
  },
  {
    q: 'Is acupuncture safe?',
    a: "Acupuncture is generally considered safe when performed by a licensed, trained practitioner using sterile, single-use needles. Most people experience only minor, temporary soreness at needle sites. Always confirm your practitioner's licensing before booking a session.",
    linkText: 'Learn About Acupuncture',
    linkHref: '/acupuncture',
  },
  {
    q: 'What conditions does acupuncture treat?',
    a: "Acupuncture is commonly used for chronic pain, migraines, stress and anxiety, fertility support, and recovery from injuries like carpal tunnel syndrome. Results vary by individual, and it's often used alongside conventional care rather than as a replacement.",
    linkText: 'Learn About Acupuncture',
    linkHref: '/acupuncture',
  },
  {
    q: 'What is the difference between naturopathy and homeopathy?',
    a: "Naturopathy is a broad approach combining nutrition, herbal medicine, and lifestyle changes to support overall wellness. Homeopathy is a specific system using highly diluted natural substances based on the principle that 'like cures like.' Naturopaths may incorporate homeopathic remedies as one tool among many.",
    linkText: 'Compare Naturopathy & Homeopathy',
    linkHref: '/naturopathy',
  },
  {
    q: 'What is functional medicine?',
    a: 'Functional medicine looks for the underlying cause of illness — genetics, environment, and lifestyle — rather than only treating symptoms. Practitioners often use detailed lab testing and personalized nutrition and lifestyle plans to address chronic conditions at their root.',
    linkText: 'Explore Functional Medicine',
    linkHref: '/functionalmedicine',
  },
  {
    q: 'How do I find a functional medicine doctor?',
    a: "You can book a telehealth consultation with a functional medicine practitioner through DecentMed's provider network, without needing a local referral. Sessions typically start with a detailed health history and lab review to identify root causes.",
    linkText: 'Book a Consultation',
    linkHref: 'https://telehealth.decentmed.org/signup',
    external: true,
  },
  {
    q: 'What is chiropractic care used for?',
    a: 'Chiropractic care focuses on diagnosing and treating musculoskeletal issues, especially spinal alignment, through manual adjustments. It is most often used for back and neck pain, headaches, and joint mobility issues.',
    linkText: 'Learn About Chiropractic Care',
    linkHref: '/chiropractic',
  },
  {
    q: 'Is chiropractic care safe?',
    a: 'Chiropractic adjustments performed by a licensed chiropractor are generally safe, with serious complications being rare. Mild soreness or stiffness after a session is common and usually resolves within a day or two.',
    linkText: 'Learn About Chiropractic Care',
    linkHref: '/chiropractic',
  },
  {
    q: 'What is Reiki or energy healing?',
    a: "Energy healing, including Reiki, is based on the idea that a practitioner can channel healing energy to reduce stress, ease tension, and support the body's natural balance. It's typically used as a complementary, non-invasive practice alongside other care.",
    linkText: 'Explore Energy Healing',
    linkHref: '/energyhealing',
  },
  {
    q: 'What is sound healing therapy?',
    a: 'Sound healing uses tones from instruments like singing bowls, tuning forks, or gongs to promote relaxation and reduce stress. Sessions are non-invasive and are often used for anxiety relief, meditation support, and general wellbeing.',
    linkText: 'Explore Sound Healing',
    linkHref: '/soundhealing',
  },
  {
    q: 'What are the benefits of breathwork?',
    a: 'Breathwork uses guided breathing patterns to reduce stress, improve focus, and support emotional release. Many people use it to manage anxiety, improve sleep, and build a stronger mind-body connection.',
    linkText: 'Explore Breathwork',
    linkHref: '/breathwork',
  },
  {
    q: 'What is applied kinesiology?',
    a: 'Applied kinesiology uses muscle-response testing to assess imbalances in the body and guide treatment decisions. Practitioners use it alongside other holistic methods to identify nutritional deficiencies, allergies, or structural issues.',
    linkText: 'Explore Applied Kinesiology',
    linkHref: '/applied-kinesiology',
  },
  {
    q: 'What is chelation therapy used for?',
    a: "Chelation therapy uses agents that bind to heavy metals in the body so they can be safely eliminated. It's used to address heavy metal exposure and, by some practitioners, as a supportive therapy for cardiovascular and detox-related concerns.",
    linkText: 'Learn About Chelation Therapy',
    linkHref: '/chelation',
  },
  {
    q: 'What is a detox cleanse?',
    a: "A detox cleanse is a short-term dietary protocol — often based on whole foods, juices, or supplements — designed to support the body's natural detoxification organs like the liver and kidneys. Programs vary widely in length and intensity.",
    linkText: 'Explore Detox Programs',
    linkHref: '/detox',
  },
  {
    q: 'What is Ayurvedic medicine?',
    a: "Ayurveda is a traditional system of medicine from India that uses diet, herbal remedies, and lifestyle practices tailored to a person's individual constitution, or 'dosha,' to maintain balance and prevent illness.",
    linkText: 'Explore Ayurvedic Medicine',
    linkHref: '/ayurvedicmedicine',
  },
  {
    q: 'How does hypnotherapy work?',
    a: 'Hypnotherapy guides you into a focused, relaxed state where the subconscious mind is more receptive to positive suggestion. A trained hypnotherapist uses this state to help address habits, fears, or thought patterns you want to change.',
    linkText: 'Learn About Hypnotherapy',
    linkHref: '/hypnotherapy',
  },
  {
    q: 'What can hypnotherapy help with?',
    a: "Hypnotherapy is commonly used to support smoking cessation, weight management, anxiety, sleep issues, and breaking unwanted habits. It's typically used as a complementary approach alongside other care, not a standalone medical treatment.",
    linkText: 'Learn About Hypnotherapy',
    linkHref: '/hypnotherapy',
  },
  {
    q: 'What is herbal medicine?',
    a: 'Herbal medicine uses plant-based remedies — teas, tinctures, capsules — to support the body’s natural functions. Practitioners select herbs based on your specific symptoms and health goals, often alongside dietary and lifestyle guidance.',
    linkText: 'Explore Herbal Medicine',
    linkHref: '/herbalmedicine',
  },
  {
    q: 'What is nutrigenomics?',
    a: "Nutrigenomics studies how your genes interact with the nutrients you eat. A nutrigenomics practitioner uses genetic testing to build a nutrition plan tailored to your body's specific needs, rather than a one-size-fits-all diet.",
    linkText: 'Explore Nutrigenomics',
    linkHref: '/nutrigenomics',
  },
  {
    q: 'What is a holistic health coach?',
    a: 'A holistic health coach helps you set and reach wellness goals by looking at your whole lifestyle — nutrition, stress, sleep, and mindset — rather than a single symptom. Coaching is typically ongoing and personalized, not a one-time consultation.',
    linkText: 'Explore Holistic Coaching',
    linkHref: '/transformationalcoaching',
  },
  {
    q: 'How do I find a telehealth naturopathic doctor?',
    a: "DecentMed's provider network includes naturopathic doctors available for telehealth visits, so you can book an appointment and consult from home.",
    linkText: 'Book a Naturopathic Consultation',
    linkHref: 'https://telehealth.decentmed.org/signup',
    external: true,
  },
  {
    q: 'Does insurance cover holistic medicine?',
    a: 'Coverage varies widely by insurer, state, and modality — some services like chiropractic and acupuncture are partially covered by certain plans, while others typically are not. DecentMed is built for patients paying out-of-pocket, often at a lower cost than traditional in-network specialist visits.',
  },
  {
    q: 'What is the difference between a holistic doctor and a regular doctor?',
    a: 'A conventional doctor typically focuses on diagnosing and treating specific symptoms or diseases, often with medication or procedures. A holistic doctor looks at your whole lifestyle — diet, stress, sleep, environment — to address underlying causes, often using natural, less invasive methods first.',
  },
  {
    q: 'Are holistic treatments evidence-based?',
    a: 'Evidence varies by modality — some, like acupuncture and certain nutrition interventions, have a growing body of clinical research, while others rely more on traditional use and practitioner experience. Always discuss your specific health situation with a qualified provider before starting a new treatment.',
  },
  {
    q: 'How do I choose the right holistic practitioner?',
    a: "Look for verified licensing or certification in their modality, read reviews from other patients, and confirm they're willing to work alongside any conventional care you're already receiving. DecentMed vets providers before listing them, making it easier to find a qualified match.",
    linkText: 'Find a Vetted Practitioner',
    linkHref: 'https://telehealth.decentmed.org/signup',
    external: true,
  },
  {
    q: 'What is stem cell therapy used for?',
    a: "Stem cell therapy is used to support tissue repair, most commonly for joint pain, injury recovery, and degenerative conditions. It's a specialized, evolving field — ask your provider about the specific type of therapy, its evidence base, and realistic expectations before starting.",
    linkText: 'Explore Stem Cell Therapy',
    linkHref: '/stemcell',
  },
  {
    q: 'What is mindset coaching?',
    a: 'Mindset coaching helps you identify and shift limiting beliefs, thought patterns, and habits that hold you back — in health, relationships, or career. It is a structured, goal-oriented practice, distinct from therapy for diagnosed mental illness.',
    linkText: 'Explore Mindset Coaching',
    linkHref: '/mindset',
  },
  {
    q: 'Can holistic medicine help with anxiety and stress?',
    a: 'Many holistic modalities — including breathwork, meditation, energy healing, and hypnotherapy — are commonly used to help manage everyday stress and anxiety symptoms. They are often used alongside, not instead of, care from a licensed mental health professional for diagnosed anxiety disorders.',
    linkText: 'Explore Meditation',
    linkHref: '/meditation',
  },
];

const providerFaqs = [
  {
    q: 'How do I market my holistic health practice?',
    a: 'Effective marketing for a holistic practice combines a strong website, active social media, patient reviews, and being listed on trusted provider directories. DecentMed offers holistic providers a done-for-you marketing package, from SEO to patient acquisition, so you can focus on care instead of ads.',
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
  {
    q: 'What is the best way to get more patients as a holistic provider?',
    a: "The most reliable path combines visibility (SEO and a provider directory listing), trust (patient reviews and case studies), and accessibility (offering telehealth). DecentMed's platform is built to handle all three for holistic providers in one place.",
    linkText: 'Sign Up as a Provider',
    linkHref: '/signup/provider',
  },
  {
    q: 'How much does holistic health marketing cost?',
    a: 'Costs vary widely — a basic directory listing can be free or low-cost, while full-service SEO and paid ad campaigns typically run several hundred to a few thousand dollars per month. DecentMed offers tiered pricing so providers can start small and scale marketing spend as their practice grows.',
    linkText: 'Compare Provider Tiers',
    linkHref: '/choose-provider-tier',
  },
  {
    q: 'What is SEO for holistic health practitioners?',
    a: "SEO (search engine optimization) helps your practice show up when potential patients search for terms like 'acupuncturist near me' or 'naturopathic doctor.' It involves optimizing your website content, local listings, and backlinks so search engines rank you higher.",
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
  {
    q: 'How do I advertise my naturopathic practice online?',
    a: 'Combine a directory listing on a trusted holistic health platform, targeted social media content, and optionally paid search or social ads. DecentMed helps naturopathic providers get discovered through its patient-facing directory and marketing services.',
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
  {
    q: 'What is patient acquisition marketing for wellness businesses?',
    a: 'Patient acquisition marketing is the set of strategies — SEO, paid ads, referrals, directory listings — used to attract new patients to a wellness practice. For holistic providers, it often works best combined with education-based content that builds trust before a patient books.',
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
  {
    q: 'How do I get more clients as an acupuncturist?',
    a: 'List your practice on holistic-focused directories like DecentMed, collect and showcase patient reviews, and offer telehealth consultations to reach patients outside your immediate area. Educational content about what acupuncture treats also helps patients find you through search.',
    linkText: 'Sign Up as a Provider',
    linkHref: '/signup/provider',
  },
  {
    q: 'Do holistic providers need a website?',
    a: 'Yes — a website is typically the first thing a prospective patient checks after finding you through search or a directory. Even a simple site with your services, credentials, and a booking link significantly increases patient trust and conversion.',
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
  {
    q: 'How do I build an online presence as a holistic health coach?',
    a: 'Start with a clear website describing your coaching approach and results, list yourself on a provider directory, and post consistent educational content on social media. Being listed alongside other verified providers, as on DecentMed, also builds credibility with new clients.',
    linkText: 'Explore Holistic Coaching',
    linkHref: '/transformationalcoaching',
  },
  {
    q: 'What is a digital marketing agency for holistic practices?',
    a: 'A digital marketing agency for holistic practices specializes in SEO, content, and advertising strategies tailored to wellness businesses — understanding both patient search behavior and the regulatory considerations unique to health marketing. DecentMed offers this as part of its provider services.',
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
  {
    q: 'How do telehealth platforms help holistic providers find patients?',
    a: "Telehealth platforms remove geography as a barrier, letting providers see patients anywhere they're licensed to practice. This expands a provider's potential patient base far beyond their local area, without added overhead.",
    linkText: 'Sign Up as a Provider',
    linkHref: '/signup/provider',
  },
  {
    q: 'What is the best CRM for a holistic health practice?',
    a: "The right CRM should handle appointment booking, automated reminders, and patient communication in one place. DecentMed's provider tiers include a built-in CRM designed specifically for holistic practices, so providers don't need to piece together separate tools.",
    linkText: 'Compare Provider Tiers',
    linkHref: '/choose-provider-tier',
  },
  {
    q: 'How do I grow my Reiki or energy healing business?',
    a: 'Combine consistent educational content explaining what energy healing is and treats, patient testimonials, and a listing on a trusted holistic directory. Offering both in-person and remote sessions also widens your potential client base.',
    linkText: 'Explore Energy Healing',
    linkHref: '/energyhealing',
  },
  {
    q: 'What is content marketing for wellness practitioners?',
    a: "Content marketing means publishing helpful articles, videos, or social posts that answer the questions your ideal patients are already searching for. Over time, this builds trust and visibility, so patients find and choose you before they've even spoken with you.",
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
  {
    q: 'How do I get reviews for my holistic health practice?',
    a: 'Ask satisfied patients directly after a positive session, make leaving a review as easy as a single link, and follow up with a gentle reminder email. Displaying reviews prominently on your website and provider profile also encourages more patients to leave them.',
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
  {
    q: 'What is a provider directory and how does it help my practice?',
    a: 'A provider directory lists your practice alongside other credentialed practitioners so patients searching for a specific modality can find and book you directly. It builds trust through association with other vetted providers and improves your visibility in search results.',
    linkText: 'Sign Up as a Provider',
    linkHref: '/signup/provider',
  },
  {
    q: 'How does DecentMed help holistic providers find patients?',
    a: 'DecentMed lists holistic providers in a patient-facing directory, offers telehealth booking, and provides marketing services — from SEO to paid patient acquisition campaigns — so providers can grow their practice without managing multiple vendors.',
    linkText: 'Sign Up as a Provider',
    linkHref: '/signup/provider',
  },
  {
    q: 'What are affordable marketing options for small holistic practices?',
    a: "Start with a free or low-cost directory listing, active organic social media, and asking existing patients for referrals and reviews — all low-cost ways to build visibility before investing in paid advertising. DecentMed's entry-level provider tier is built for exactly this stage.",
    linkText: 'Compare Provider Tiers',
    linkHref: '/choose-provider-tier',
  },
  {
    q: 'How do I list my holistic practice on a provider directory?',
    a: 'You can sign up as a provider on DecentMed in a few minutes — create your profile, select your modality and tier, and your practice becomes searchable to patients looking for holistic care in your specialty.',
    linkText: 'Sign Up as a Provider',
    linkHref: '/signup/provider',
  },
  {
    q: 'What is the ROI of digital marketing for a holistic health business?',
    a: 'ROI depends on your current visibility, but even a modest investment in SEO and a directory listing typically pays for itself once it generates a handful of new patients, since holistic sessions are recurring rather than one-time purchases. Tracking new patient sources helps you measure it directly.',
    linkText: 'See Marketing Services',
    linkHref: '/digitalmarketing',
  },
];

const allFaqs = [...patientFaqs, ...providerFaqs];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

const FaqItem = ({ item }) => (
  <Collapsible trigger={<div className="collapsible-trigger" style={{ textAlign: 'left' }}><h3 style={{ margin: 0, fontSize: '1rem' }}>{item.q}</h3></div>}>
    <div style={{ padding: '0.75rem 1.25rem', textAlign: 'left' }}>
      <p style={{ margin: item.linkHref ? '0 0 0.5rem' : 0 }}>{item.a}</p>
      {item.linkHref && (
        item.external ? (
          <a href={item.linkHref} target="_blank" rel="noopener noreferrer">{item.linkText} &rarr;</a>
        ) : (
          <Link to={item.linkHref}>{item.linkText} &rarr;</Link>
        )
      )}
    </div>
  </Collapsible>
);

export default function HolisticHealthFAQ() {
  return (
    <div>
      <Helmet>
        <title>Holistic Health FAQ: Find Modalities & Grow Your Practice | DecentMed</title>
        <meta
          name="description"
          content="Answers to the most common questions about holistic medicine modalities — acupuncture, naturopathy, chiropractic, energy healing, and more — plus how holistic providers can market their practice and find patients."
        />
        <meta property="og:title" content="Holistic Health FAQ: Find Modalities & Grow Your Practice" />
        <meta
          property="og:description"
          content="Answers to the most common questions about holistic medicine modalities and how holistic providers can market their practice and find patients."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <header>
        <Topbar />
      </header>
      <PageWithTOC title="Holistic Health FAQ" containerId="faq-content">
        <div className="container-blue" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
          <p style={{ margin: 0, textAlign: 'center' }}>
            Straight answers to the questions patients and providers ask most about holistic medicine —
            what each modality is, how to find the right practitioner, and how holistic providers can
            market their practice and grow their patient base.
          </p>
        </div>

        <h2 id="for-patients">For Patients: Finding the Right Holistic Modality</h2>
        <div className="container-blue" style={{ marginBottom: '2rem' }}>
          {patientFaqs.map((item) => (
            <FaqItem key={item.q} item={item} />
          ))}
        </div>

        <h2 id="for-providers">For Providers: Holistic Health Marketing</h2>
        <div className="container-blue">
          {providerFaqs.map((item) => (
            <FaqItem key={item.q} item={item} />
          ))}
        </div>
      </PageWithTOC>
      <Footer />
    </div>
  );
}
