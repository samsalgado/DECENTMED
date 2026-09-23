import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './stem.css';

// Each entry answers one real, high-intent search phrase directly and
// concisely (Answer Engine Optimization favors short, self-contained
// answers an AI search tool can lift verbatim and cite back to this page).
// Mirrors the pattern established in HolisticHealthFAQ.js, scoped to the
// questions a holistic provider evaluating DecentMed would actually ask.
export const providerLandingFaqs = [
  {
    q: 'How can holistic health providers get more patients?',
    a: "Combine directory visibility, patient education, and social proof. DecentMed does this for you: it publishes your video content, written content, graphics, reviews, and case studies to a patient-facing directory - and to the decentralized Nostr network - so patients arrive already educated about your process before they even book.",
  },
  {
    q: 'What is DecentMed for providers?',
    a: "DecentMed is a holistic medicine information portal that connects patients with providers. It posts your video content, written content, graphics, reviews, and case studies on its platform and on Nostr, a decentralized platform, to combat censorship and validate the effectiveness of your work - sending fully educated patients directly to your calendar.",
  },
  {
    q: 'How much does it cost to join DecentMed as a provider?',
    a: "DecentMed offers three provider tiers: the Advertising Tier at $500, Tier 1 at $1,500, and Tier 2 at $4,000, which adds a white-labeled CRM, part-time VA support, and annual affiliate payouts.",
    linkText: 'Compare Provider Tiers',
    linkHref: '/choose-provider-tier',
  },
  {
    q: 'Why does DecentMed publish provider content on Nostr?',
    a: "Nostr is a decentralized, censorship-resistant protocol. DecentMed mirrors your videos, reviews, and case studies there so your reputation and patient testimonials can't be removed or deplatformed by a single company - giving you an independent, durable record of your work.",
  },
  {
    q: 'Does DecentMed help patients understand my process before they book?',
    a: "Yes. DecentMed publishes video content, case studies, and reviews that explain exactly what working with you looks like, so patients arrive at your booking page already educated and pre-qualified - which reduces no-shows and mismatched expectations.",
  },
  {
    q: 'How do I sign up as a provider on DecentMed?',
    a: "Select a subscription tier, then create your provider account - it takes a few minutes, and your profile becomes searchable to patients as soon as it's approved.",
    linkText: 'Sign Up as a Provider',
    linkHref: '/signup/provider',
  },
  {
    q: 'Can I talk to someone before signing up as a DecentMed provider?',
    a: "Yes - DecentMed offers a free onboarding call to walk through how the platform works and help you figure out which tier fits your practice.",
    linkText: 'Book Meeting',
    linkHref: 'https://cal.com/merlin-ayx5zg/30min?overlayCalendar=true',
    external: true,
  },
];

export const buildProviderFaqSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: providerLandingFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
});

const FaqItem = ({ item }) => {
  const { t } = useTranslation('common');
  return (
    <Collapsible trigger={<div className="collapsible-trigger" style={{ textAlign: 'left' }}><h3 style={{ margin: 0, fontSize: '1rem' }}>{t(item.q)}</h3></div>}>
      <div style={{ padding: '0.75rem 1.25rem', textAlign: 'left' }}>
        <p style={{ margin: item.linkHref ? '0 0 0.5rem' : 0 }}>{t(item.a)}</p>
        {item.linkHref && (
          item.external ? (
            <a href={item.linkHref} target="_blank" rel="noopener noreferrer">{t(item.linkText)} &rarr;</a>
          ) : (
            <Link to={item.linkHref}>{t(item.linkText)} &rarr;</Link>
          )
        )}
      </div>
    </Collapsible>
  );
};

const ProviderFaqSection = () => {
  const { t } = useTranslation('common');
  return (
    <div data-aos="slide-right" className="container-blue">
      <h1 className="logotitle">{t('Provider Questions, Answered')}</h1>
      {providerLandingFaqs.map((item) => (
        <FaqItem key={item.q} item={item} />
      ))}
    </div>
  );
};

export default ProviderFaqSection;
