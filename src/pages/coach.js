import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import amber from "../images copy/amber.png";
import Footer from '../footer';
import Ramona from '../cards/IMG_0587.jpeg';
import Gorilla from '../cards/gorilla.webp';
import Anil from '../cards/anil.png';
import linkedin from "../images copy/linkedin.png";
import mail from "../images copy/mail.png";
import x from "../images copy/x.png";
import instagram from "../images copy/insta.png";
import facebook from "../images copy/facebook.png";
import youtube from "../images copy/youtube.png";
//import tiktok from "../images copy/tiktok.png";
import Lynn from "../cards/lynn.png";
import caroline from "../cards/caroline.png";
import Jessica from "../cards/jessica.jpg";
import Priscilla from '../cards/priscilla.jpg';
import jimp from '../cards/jimp.png';
import bethany from "../images copy/Screenshot 2026-09-17 at 9.53.11 AM.png";
import andrea from "../images copy/Andrea graphic.png";
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { handleMailClick } from '../utils/mailFallback';
export default function Coaching() {
  const { t } = useTranslation('common');
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showNourishedHearts, setShowNourishedHearts] = useState(false);
  const [showAnil, setShowAnil] = useState(false);
  const [showCaroline, setShowCaroline] = useState(false);
  const [showJohn, setShowJohn] = useState(false);
  const [showLynn, setShowLynn] = useState(false);
  const [showAmber, setShowAmber] = useState(false);
  const [showJim, setShowJim] = useState(false);
  const [showJessica, setShowJessica] = useState(false);
  const [showPriscilla, setShowPriscilla] = useState(false);
  const [showRamona, setShowRamona] = useState(false);
  const [regionPriority, setRegionPriority] = useState('global'); // 'uk', 'india', 'global'
function CalendlyEmbed({ url, height = 700 }) {
  const widgetRef = useRef(null);


  useEffect(() => {
    const existingScript = document.getElementById('calendly-widget-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const interval = setInterval(() => {
      if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: widgetRef.current,
        });
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [url]);

  return <div ref={widgetRef} style={{ minWidth: '320px', height }} />;
}

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setUserLocation('Detect location...');
        },
        () => {
          setUserLocation('Enter your location');
        }
      );
    } else {
      setUserLocation('Enter your location');
    }
  }, []);

const handleSearch = () => {
  if (!location.trim()) {
    setShowAnil(true);
    setShowJohn(true);
    setShowCaroline(true);
    setShowLynn(true);
    setShowNourishedHearts(true);
    setShowPriscilla(true);
    setShowJessica(true);
    setShowAmber(true);
    setShowJim(true);
    setShowRamona(true);
    setShowResults(true);
    setRegionPriority('global');
    return;
  }

  const capitalizedLocation = location.replace(/\b\w/g, (char) => char.toUpperCase());

const indiaTerms = [
    'india', 'mumbai', 'delhi', 'bangalore', 'kolkata', 'chennai', 'hyderabad',
    'pune', 'ahmedabad', 'surat', 'jaipur', 'lucknow', 'kanpur', 'nagpur',
    'pakistan', 'bangladesh', 'sri lanka', 'nepal', 'bhutan', 'maldives',
    'afghanistan', 'karachi', 'lahore', 'islamabad', 'dhaka', 'colombo', 'kathmandu'
  ].map(term => term.toLowerCase());
  const kcMoTerms = [
  'kansas city', 'kc', 'kansas city missouri', 'kansas city mo',
  'missouri', 'mo', 'st louis', 'springfield', 'columbia',
  'independence', 'lee\'s summit', 'st. joseph', 'blue springs',
  'overland park', 'olathe', 'lenexa', 'shawnee'
].map(term => term.toLowerCase());

 const canadaTerms = [
  'canada', 'ontario', 'toronto', 'ottawa', 'hamilton', 'kitchener', 'london', 'waterloo', 'niagara falls', 'windsor', 
  'mississauga', 'brampton', 'sudbury', 'thunder bay', 'kingston', 'guelph', 'barrie', 'markham', 'oakville', 
  'sarnia', 'sault ste. marie', 'cornwall', 'st. catharines', 'stratford', 'north bay', 'georgian bay', 'algonquin park',
  'manitoulin island', 'blue mountains', 'prince edward county', 'peterborough', 'cottage country', 'simcoe county',
  'halton region', 'durham region', 'peel region', 'york region', 'muskoka', 'parry sound', 'bruce peninsula', 
  'township of king', 'royal ontario museum', 'ontario science centre', 'ontario place', 'etobicoke'
].map(term => term.toLowerCase());

  const ukTerms = [
    'uk', 'united kingdom', 'england', 'scotland', 'wales', 'northern ireland',
    'london', 'manchester', 'birmingham', 'glasgow', 'liverpool', 'edinburgh',
    'bristol', 'leeds', 'sheffield', 'cardiff', 'belfast', 'britain', 'gb'
  ].map(term => term.toLowerCase());

  const kenyaTerms = [
    'kenya', 'nairobi', 'mombasa', 'kisumu', 'nakuru', 'eldoret',
    'africa', 'east africa', 'uganda', 'tanzania', 'rwanda', 'ethiopia'
  ].map(term => term.toLowerCase());
 const brazil = [
  // Major Cities
  "são paulo", "rio de janeiro", "brasília", "salvador", "fortaleza",
  "belo horizonte", "manaus", "curitiba", "recife", "porto alegre",
  "belém", "goiânia", "guarulhos", "campinas", "são luís",
  "são gonçalo", "maceió", "duque de caxias", "natal", "teresina",
  "campo grande", "nova iguaçu", "são bernardo do campo", "joão pessoa",
  "santo andré", "osasco", "jaboatão dos guararapes", "são josé dos campos",
  "ribeirão preto", "uberlândia", "sorocaba", "contagem", "aracaju",
  "feira de santana", "cuiabá", "joinville", "juiz de fora", "londrina",
  "aparecida de goiânia", "ananindeua", "porto velho", "serra", "niterói",
  "caxias do sul", "macapá", "campos dos goytacazes", "florianópolis",
  "vila velha", "são joão de meriti", "mauá", "betim", "carapicuíba",
  
  // States
  "acre", "alagoas", "amapá", "amazonas", "bahia", "ceará",
  "distrito federal", "espírito santo", "goiás", "maranhão",
  "mato grosso", "mato grosso do sul", "minas gerais", "pará",
  "paraíba", "paraná", "pernambuco", "piauí", "rio de janeiro",
  "rio grande do norte", "rio grande do sul", "rondônia", "roraima",
  "santa catarina", "são paulo", "sergipe", "tocantins",
  
  // Regions
  "norte", "nordeste", "centro-oeste", "sudeste", "sul",
  "amazônia", "pantanal", "cerrado", "caatinga", "mata atlântica",
  "pampa", "sertão",
  
  // Notable Areas/Territories
  "fernando de noronha", "ilha de marajó", "arquipélago de abrolhos",
  "ilhabela", "ilha grande", "ilha do mel"
].map(term => term.toLowerCase());
  const usaTerms = [
    'usa', 'united states', 'america', 'us', 'connecticut', 'ct', 'darien',
    'stamford', 'norwalk', 'westport', 'new york', 'ny', 'new jersey', 'nj',
    'tri-state', 'tristate', 'manhattan', 'brooklyn', 'queens', 'bronx'
  ].map(term => term.toLowerCase());

  const westCoast = [
    'nevada', 'utah', 'las vegas', 'reno', 'nv', 'sparks', 'golden valley', 'hidden valley', 'chester', 'westwood', 'janesville'
  ].map(term => term.toLowerCase());

  const floridaTerms = [
    'florida', 'fl', 'clermont', 'orlando', 'tampa', 'miami', 'jacksonville',
    'tallahassee', 'gainesville', 'ocala', 'lakeland', 'kissimmee'
  ].map(term => term.toLowerCase());

  const lowerCaseLocation = capitalizedLocation.toLowerCase();
  const isKCMo = kcMoTerms.some(term => lowerCaseLocation.includes(term));
  const isBrazil = brazil.some(term => lowerCaseLocation.includes(term));
  const isIndia = indiaTerms.some(term => lowerCaseLocation.includes(term));
  const isUK = ukTerms.some(term => lowerCaseLocation.includes(term));
  const isKenya = kenyaTerms.some(term => lowerCaseLocation.includes(term));
  const isUSA = usaTerms.some(term => lowerCaseLocation.includes(term));
  const isFlorida = floridaTerms.some(term => lowerCaseLocation.includes(term));
  const isNV = westCoast.some(term => lowerCaseLocation.includes(term));
  const isCanada = canadaTerms.some(term => lowerCaseLocation.includes(term));
  // Set region priority for ordering
  if (isNV) {
    setRegionPriority('nv'); // Nevada gets Jim first
  } else if (isUSA || isFlorida) {
    setRegionPriority('usa'); // USA gets Kristina first
  } else if (isUK) {
    setRegionPriority('uk');
  } else if (isKenya) {
    setRegionPriority('kenya')
  }
  else if (isIndia) {
    setRegionPriority('india');
  } else if (isCanada) {
     setRegionPriority('canada');
  }  else {
    setRegionPriority('global');
  }
  if (isKCMo) {
        setRegionPriority('kc');

  }
  setShowAnil(isIndia);
  setShowAmber(true);
  setShowNourishedHearts(isUSA);
  setShowJohn(true); // Always show John
  setShowPriscilla(true); // Always show Priscilla
  setShowRamona(isFlorida || isUSA);
  setShowJim(isNV || isUSA);
  setShowCaroline(isKCMo);
  setShowJessica(isUSA || isBrazil);
  setShowLynn(isCanada || isUSA); 
  setShowResults(true);
};
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
const learnmore = () => {
    window.location.href = 'https://www.happydnawellness.com/consult'
  }
  // Component rendering functions
    const renderCaroline = () => (
    showCaroline && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="caroline">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={caroline} alt="Caroline McQueen" className="provider-photo" />
            <h2 className="h4 mb-1">{t('CDM Health and Wellness')}</h2>
            <p className="text-muted mb-0">{t("Caroline McQueen Integrative Health Coach")}</p>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("Kansas City, KS United States")}
          </p>

          <div className="mb-2">
            <span className="badge bg-success text-white me-1">{t("USA")}</span>
            <span className="badge bg-light text-dark me-1">{t("Integrative Health and Wellness Coach")}</span>
            <span className="badge bg-light text-dark me-1">{t("Functional Nutrition")}</span>
            <span className="badge bg-light text-dark me-1">{t("Blood Sugar Regulation")}</span>
          </div>
          <div className="provider-video">
            <iframe src="https://www.youtube.com/embed/ac1DvrGlIDQ?si=SMd9SVsPBr17Btuc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <p className="card-text small provider-bio">
            {t("caroline_bio")}
          </p>

          <div className="provider-card-footer">
            <div className="provider-booking-embed">
              <CalendlyEmbed url="https://calendly.com/cedowey/30min" height={700} />
            </div>
          </div>
        </div>
      </div>
    )
  );
    const renderCarol = () => (
    showAmber && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="amber">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={amber} alt="Amber" className="provider-photo" />
            <h2 className="h4 mb-1">{t('Happy DNA Wellness')}</h2>
            <p className="text-muted mb-0">{t("Amber Caroll: ADHD Coach")}</p>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("United States")}
          </p>

          <div className="mb-2">
            <span className="badge bg-success text-white me-1">{t("USA")}</span>
            <span className="badge bg-light text-dark me-1">{t("Overcome")}</span>
            <span className="badge bg-light text-dark me-1">{t("ADHD")}</span>
            <span className="badge bg-light text-dark me-1">{t("Execute and Thrive")}</span>
          </div>

          <div className="provider-video">
            <iframe src="https://www.youtube.com/embed/n1aHgqpNZT0?si=FEssO856BEwz499F" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>

          <p className="card-text small provider-bio">
            {t("amber_bio")}
          </p>

          <div className="provider-card-footer">
            <Button onClick={learnmore} className="btn btn-outline-primary">
              {t('Book Meeting')}
            </Button>
            <div className="provider-social-icons">
              <a href="https://www.linkedin.com/in/amber-carroll-6ba809168/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                <img src={linkedin} alt={t("LinkedIn")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );


  const renderJim = () => (
    showJim && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="jim">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={jimp} alt="Amazing Life Design" className="provider-photo" />
            <h2 className="h4 mb-1">{t('Amazing Life Design')}</h2>
            <p className="text-muted mb-0">{t("Jim Pehkonen, Life Architect")}</p>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("Reno, NV 89508 United States")}
          </p>

          <div className="mb-2">
            <span className="badge bg-success text-white me-1">{t("Cognitive-Behavioral Therapy and Psychology")}</span>
            <span className="badge bg-light text-dark me-1">{t("Trauma Coaching for Men")}</span>
            <span className="badge bg-light text-dark me-1">{t("Unlock your True Potential")}</span>
            <span className="badge bg-light text-dark me-1">{t("Mindfulness")}</span>
          </div>

          <div className="provider-video">
            <iframe src="https://www.youtube.com/embed/n3TTyHHPV8M?si=jENiUZ_8GgTM9Dv-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>

          <p className="card-text small provider-bio">
            {t("jim_bio")}
          </p>

          <div className="provider-card-footer">
            <a href="mailto:jim@amazinglifedesign.com" onClick={(e) => handleMailClick(e, 'jim@amazinglifedesign.com')} className="btn btn-outline-primary">
              {t("Contact")}
            </a>
            <div className="provider-social-icons">
              <a href="https://www.facebook.com/AmazingLifeDesignPage/" target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
                <img src={facebook} alt={t("Facebook")} />
              </a>
              <a href="https://www.instagram.com/amazinglifedesign/" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                <img src={instagram} alt={t("Instagram")} />
              </a>
              <a href="https://www.linkedin.com/in/jimpehkonen/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                <img src={linkedin} alt={t("LinkedIn")} />
              </a>
              <a href="https://www.youtube.com/@amazinglifedesign9332" target="_blank" rel="noopener noreferrer" aria-label={t("YouTube")} title={t("YouTube")}>
                <img src={youtube} alt={t("YouTube")} />
              </a>
              <a href="https://x.com/lifearchitect" target="_blank" rel="noopener noreferrer" aria-label={t("X")} title={t("X")}>
                <img src={x} alt={t("X")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
  const renderLynn = () => (
    showLynn && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="lynn">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={Lynn} alt="Kristina" className="provider-photo" />
            <h2 className="h4 mb-1">{t('Lynn McIntosh')}</h2>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("Etobicoke, Ontario, Canada")}
          </p>

          <div className="mb-2">
            <span className="badge bg-success text-white me-1">{t("Ontario, Canada")}</span>
            <span className="badge bg-light text-dark me-1">{t("Heal from Narcissism")}</span>
            <span className="badge bg-light text-dark me-1">{t("Ceritifed Coaching and Hypnosis")}</span>
            <span className="badge bg-light text-dark me-1">{t("Personal Coaching Programs")}</span>
          </div>

          <p className="card-text small provider-bio">
            {t("lynn")}
          </p>

          <div className="provider-card-footer">
            <Button className="btn btn-outline-primary" href="https://www.reclaimingyourlifeandjoy.com/consultation-call-application" target="_blank">{t('Contact')}</Button>
          </div>
        </div>
      </div>
    )
  );
   const renderJessica = () => (
    showJessica && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="jessica">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={Jessica} alt="Jessica Javens" className="provider-photo" />
            <h2 className="h4 mb-1">{t('Glow Inside Out')}</h2>
            <p className="text-muted mb-0">{t("Jessica Javens Life Mastery Consultant & Wellness Coach")}</p>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("USA & Brazil")}
          </p>
          <div className="mb-2">
            <span className="badge bg-success text-white me-1">{t("Florida")}</span>
            <span className="badge bg-light text-dark me-1">{t("Life Master")}</span>
            <span className="badge bg-light text-dark me-1">{t("Helping people overcome challenges and unlock their true potential.")}</span>
            <span className="badge bg-light text-dark me-1">{t("Holistic well-being")}</span>
          </div>

          <p className="card-text small provider-bio">
            {t("jessica")}
          </p>

          <div className="provider-card-footer">
            <a href="https://jessicajavens.com/glow-inside-out.html" className="btn btn-outline-primary">
              {t("Contact")}
            </a>
          </div>
        </div>
      </div>
    )
  );
  const renderRamona = () => (
    showRamona && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="ramona">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={Ramona} alt="Ramona" className="provider-photo" />
            <h2 className="h4 mb-1">{t('Authentic Life Journey')}</h2>
            <p className="text-muted mb-0">{t("Ramona Crabtree-Falkner Transformational Empowerment Coach")}</p>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("Clermont, Florida, USA")}
          </p>

          <div className="mb-2">
            <span className="badge bg-success text-white me-1">{t("Florida")}</span>
            <span className="badge bg-light text-dark me-1">{t("Realign Purpose")}</span>
            <span className="badge bg-light text-dark me-1">{t("Corporate Burnout")}</span>
            <span className="badge bg-light text-dark me-1">{t("Mindfulness")}</span>
          </div>

          <div className="provider-video">
            <iframe
              src="https://www.youtube.com/embed/hgHkSicJ6xc?si=P4xxLg4CeQ_grt5g"
              allowFullScreen
              title="YouTube video player"
            />
          </div>

          <p className="card-text small provider-bio">
            {t("empowerment_statement")}
          </p>

          <div className="provider-card-footer">
            <a href="https://authenticlifejourney.as.me/schedule/f3645bcd/?categories[]=FREE%20Exploratory%20Call" className="btn btn-outline-primary">
              {t("Contact")}
            </a>
            <div className="provider-social-icons">
              <a href="mailto:info@ramonacrabtreefalkner.com" onClick={(e) => handleMailClick(e, 'info@ramonacrabtreefalkner.com')} aria-label={t("Email")} title={t("Email")}>
                <img src={mail} alt={t("Email")} />
              </a>
              <a href="https://www.linkedin.com/in/ramonacrabtreefalkner/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                <img src={linkedin} alt={t("LinkedIn")} />
              </a>
              <a href="https://www.instagram.com/ramonacrabtreefalkner/" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                <img src={instagram} alt={t("Instagram")} />
              </a>
              <a href="https://www.youtube.com/@authenticlifejourney" target="_blank" rel="noopener noreferrer" aria-label={t("YouTube")} title={t("YouTube")}>
                <img src={youtube} alt={t("YouTube")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const renderPriscilla = () => (
    showPriscilla && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="priscilla">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={Priscilla} alt="Priscilla Wmk" className="provider-photo" />
            <h2 className="h4 mb-1">{t('Priscilla Wmk')}</h2>
            <p className="text-muted mb-0">{t("Mindset Coach")}</p>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("Kenya")}
          </p>
          <p className="mb-2">
            <i className="fas fa-video text-success me-1"></i>
            {t("Global Telehealth Available")}
          </p>

          <div className="mb-2">
            <span className="badge bg-success text-white me-1">{t("Global Coaching")}</span>
            <span className="badge bg-light text-dark me-1">{t("Mindset Transformation")}</span>
            <span className="badge bg-light text-dark me-1">{t("Mental Blocks")}</span>
            <span className="badge bg-light text-dark me-1">{t("Success Alignment")}</span>
          </div>

          <div className="provider-video">
            <iframe
              src="https://drive.google.com/file/d/1Kmm58fe3qd53eouhOZgz05W75wc06GGl/preview"
              title='Priscilla Wmk'
              allow="autoplay"
              allowFullScreen
            />
          </div>

          <p className="card-text small provider-bio">
            {t("des")}
          </p>

          <div className="provider-card-footer">
            <a
              href="https://source.dynamitelifestyle.com/book-discovery-call-40/priscilla-wmk"
              className="btn btn-outline-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Free Discovery Call")}
            </a>
          </div>
        </div>
      </div>
    )
  );

  const renderJohn = () => (
    showJohn && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="john">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={Gorilla} alt="Gorilla and She Coaching" className="provider-photo" />
            <h2 className="h4 mb-1">{t('Gorilla and She Coaching')}</h2>
            <p className="text-muted mb-0">{t("John Craig - Metabolic Health Coach")}</p>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("United Kingdom")}
          </p>
          <p className="mb-2">
            <i className="fas fa-video text-success me-1"></i>
            {t("Telehealth Available")}
          </p>

          <div className="mb-2">
            <span className="badge bg-success text-white me-1">{t("Telehealth Available")}</span>
            <span className="badge bg-light text-dark me-1">{t("Metabolic Health")}</span>
            <span className="badge bg-light text-dark me-1">{t("Acceleration Coaching")}</span>
            <span className="badge bg-light text-dark me-1">{t("Health Transformation")}</span>
          </div>

          <div className="provider-video">
            <iframe
              src="https://drive.google.com/file/d/1Z0qVqBe8ukAEMHmKQtzqtWhWx1orq1ri/preview"
              title='John Craig'
              allow="autoplay"
              allowFullScreen
            />
          </div>

          <p className="card-text small provider-bio">
            {t("Specialized coaching for metabolic health and acceleration. Expert guidance for transformative health results and sustainable lifestyle changes. Lose 20–50 lbs+ of belly fat with sports nutritionist-led metabolism coaching that raises basal metabolic rate (BMR).")}
          </p>

          <div className="provider-card-footer">
            <div className="provider-booking-embed" style={{ minHeight: '600px' }}>
              <iframe
                title={t("Carepatron Online Booking")}
                aria-label={t("Book appointments online via Carepatron")}
                width="100%"
                height="100%"
                src="https://book.carepatron.com/John-Craig/John-?p=O3qUeu8jRmmaRzG7scOCTg&s=-XtLcg-i&e=i"
                style={{ border: 0, minHeight: '600px' }}
              />
            </div>
            <div className="provider-social-icons">
              <a href="https://www.instagram.com/john_craig_coach" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
                <img src={instagram} alt={t("Instagram")} />
              </a>
              <a href="https://www.linkedin.com/in/john-craig-msc-52869a2ba/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
                <img src={linkedin} alt={t("LinkedIn")} />
              </a>
              <a href="https://x.com/Gorillaandshe" target="_blank" rel="noopener noreferrer" aria-label={t("X")} title={t("X")}>
                <img src={x} alt={t("X")} />
              </a>
              <a href="https://www.youtube.com/channel/UCvA0ORv5GZDAUKnFV3v_yyg" target="_blank" rel="noopener noreferrer" aria-label={t("YouTube")} title={t("YouTube")}>
                <img src={youtube} alt={t("YouTube")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );

  const renderAnil = () => (
    showAnil && (
      <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="anil">
        <div className="card-body provider-card-body">
          <div className="provider-card-top">
            <img src={Anil} alt="Anil Narain Matai" className="provider-photo" />
            <h2 className="h4 mb-1">{t('Anil Narain Matai')}</h2>
            <p className="text-muted mb-0">{t("Spiritual Coach")}</p>
          </div>

          <p className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {t("India & South Asian Region")}
          </p>

          <div className="mb-2">
            <span className="badge bg-light text-dark me-1">{t("Spiritual Guidance")}</span>
            <span className="badge bg-light text-dark me-1">{t("Sufi Wisdom")}</span>
            <span className="badge bg-light text-dark me-1">{t("Soul Journey")}</span>
            <span className="badge bg-light text-dark me-1">{t("Consciousness")}</span>
          </div>

          <p className="card-text small provider-bio">
            {t("I'm Anil N Matai, a dedicated poet, philosopher, and spiritual guide on a mission to share the timeless wisdom of Sufi thought through my spiritually enriching poems. Deeply committed to exploring the intricacies of the human soul's journey, consciousness, and the pursuit of spiritual awakening.")}
          </p>

          <div className="provider-card-footer">
            <div className="provider-booking-embed" style={{ minHeight: '600px' }}>
              <iframe
                title={t("Schedule Appointment")}
                width="100%"
                height="100%"
                src="https://calendly.com/anil-narain-matai/1-2-1"
                style={{ border: 0, minHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );

  const renderBethany = () => (
    <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="bethany">
      <div className="card-body provider-card-body">
        <div className="provider-card-top">
          <img src={bethany} alt="Bethany Stone" className="provider-photo" />
          <h2 className="h4 mb-1">{t('Thriving by Nature')}</h2>
          <p className="text-muted mb-0">{t("Bethany Stone")}</p>
        </div>

        <div className="mb-2">
          <span className="badge bg-light text-dark me-1">{t("Business and Leadership")}</span>
          <span className="badge bg-light text-dark me-1">{t("Mindset")}</span>
          <span className="badge bg-light text-dark me-1">{t("Montessori")}</span>
          <span className="badge bg-light text-dark me-1">{t("Gain Clarity")}</span>
        </div>

        <div className="provider-video">
          <iframe
            src="https://www.linkedin.com/video/embed/live/urn:li:ugcPost:7412193684672184320"
            title="Bethany Stone Video"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <p className="card-text small provider-bio">
          {t("bethany_bio")}
        </p>

        <div className="provider-card-footer">
          <a href="https://thrivingbynature.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
            {t("View Profile")}
          </a>
          <div className="provider-social-icons">
            <a href="https://www.facebook.com/bethany.e.courtright" target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
              <img src={facebook} alt={t("Facebook")} />
            </a>
            <a href="https://www.instagram.com/thrivingbynaturecoaching/" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
              <img src={instagram} alt={t("Instagram")} />
            </a>
            <a href="https://www.linkedin.com/in/bethany-stone-mindset-coach/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
              <img src={linkedin} alt={t("LinkedIn")} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderShirley = () => (
    <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="shirley">
      <div className="card-body provider-card-body">
        <div className="provider-card-top">
          <h2 className="h4 mb-1">{t('Innergetics')}</h2>
          <p className="text-muted mb-0">{t("Shirley Billigmeier")}</p>
        </div>

        <p className="mb-2">
          <i className="fas fa-map-marker-alt text-primary me-2"></i>
          {t("Long Lake, Minnesota")}
        </p>

        <div className="mb-2">
          <span className="badge bg-light text-dark me-1">{t("Intuitive Eating")}</span>
          <span className="badge bg-light text-dark me-1">{t("Mindfulness")}</span>
          <span className="badge bg-light text-dark me-1">{t("Weight loss")}</span>
          <span className="badge bg-light text-dark me-1">{t("Inner Eating")}</span>
        </div>

        <div className="provider-video">
          <iframe
            src="https://www.youtube.com/embed/VW19EfgD43M?si=cLm23bgGu9M65ZEK"
            title="Shirley Billigmeier Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <p className="card-text small provider-bio">
          {t("shirley_bio")}
        </p>

        <div className="provider-card-footer">
          <a href="https://www.innergetics.com/30min-consultation" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
            {t("Schedule Consultation")}
          </a>
          <div className="provider-social-icons">
            <a href="https://www.linkedin.com/in/shirleybilligmeier/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
              <img src={linkedin} alt={t("LinkedIn")} />
            </a>
            <a href="https://www.instagram.com/innergeticsmethod/" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
              <img src={instagram} alt={t("Instagram")} />
            </a>
            <a href="https://www.tiktok.com/@innergetics" target="_blank" rel="noopener noreferrer" aria-label={t("TikTok")} title={t("TikTok")}>
              <svg viewBox="0 0 448 512" width="26" height="26" fill="#000000" aria-hidden="true">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAndrea = () => (
    <div className="card provider-card" style={{ border: '1px solid #dee2e6' }} key="andrea">
      <div className="card-body provider-card-body">
        <div className="provider-card-top">
          <img src={andrea} alt="Andrea Isaacs" className="provider-photo" />
          <h2 className="h4 mb-1">{t('Andrea Isaacs')}</h2>
          <p className="text-muted mb-0">{t("Life Mastery Institute")}</p>
        </div>

        <p className="mb-2">
          <i className="fas fa-map-marker-alt text-primary me-2"></i>
          {t("Eugene, Oregon (serving all of Oregon)")}
        </p>

        <div className="mb-2">
          <span className="badge bg-light text-dark me-1">{t("Mindset Coaching")}</span>
          <span className="badge bg-light text-dark me-1">{t("Somatic Focusing")}</span>
          <span className="badge bg-light text-dark me-1">{t("EQ")}</span>
          <span className="badge bg-light text-dark me-1">{t("Body Wisdom")}</span>
        </div>

        <div className="provider-video">
          <iframe
            src="https://www.youtube.com/embed/rIv7tb-lQr4?si=SAPr7S7y1N-AV5en"
            title="Andrea Isaacs Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <p className="card-text small provider-bio">
          {t("andrea_bio")}
        </p>

        <div className="provider-card-footer">
          <a href="https://calendly.com/andrea-eq/lets-talk?month=2026-09" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
            {t("Schedule Consultation")}
          </a>
          <div className="provider-social-icons">
            <a href="https://www.facebook.com/Andrea.Isaacs.EQ/" target="_blank" rel="noopener noreferrer" aria-label={t("Facebook")} title={t("Facebook")}>
              <img src={facebook} alt={t("Facebook")} />
            </a>
            <a href="https://www.linkedin.com/in/andreaisaacseq/" target="_blank" rel="noopener noreferrer" aria-label={t("LinkedIn")} title={t("LinkedIn")}>
              <img src={linkedin} alt={t("LinkedIn")} />
            </a>
            <a href="https://www.instagram.com/andreaisaacseq" target="_blank" rel="noopener noreferrer" aria-label={t("Instagram")} title={t("Instagram")}>
              <img src={instagram} alt={t("Instagram")} />
            </a>
            <a href="https://x.com/andreaEQ" target="_blank" rel="noopener noreferrer" aria-label={t("X")} title={t("X")}>
              <img src={x} alt={t("X")} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Function to render coaches in priority order
const renderCoachesInOrder = () => {
  const coaches = [];

  if (regionPriority === 'nv') {
    // Nevada: Jim first, then others
    coaches.push(renderJim());
    coaches.push(renderRamona());
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
  } else if (regionPriority === 'usa') {
    // USA (non-Nevada): Kristina first
    coaches.push(renderRamona());
    coaches.push(renderCarol());
    coaches.push(renderJim());
    coaches.push(renderJohn());
    coaches.push(renderCaroline());
    coaches.push(renderJessica());
    coaches.push(renderPriscilla());
    coaches.push(renderAnil());
  } else if (regionPriority === 'uk') {
    // UK region: John first, then others
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderAnil());
    coaches.push(renderRamona());
    coaches.push(renderJim());
  } else if (regionPriority === 'canada') {
    // UK region: John first, then others
    coaches.push(renderLynn());
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderAnil());
    coaches.push(renderRamona());
    coaches.push(renderJim());
  } else if (regionPriority === 'india') {
    // India region: Anil first, then others
    coaches.push(renderAnil());
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderRamona());
    coaches.push(renderJim());
  } else if (regionPriority === 'brazil') {
        coaches.push(renderJessica());
  } 
  else if (regionPriority === 'kc') {
    coaches.push(renderCaroline());
  }
  else {
    // Global/default order
    coaches.push(renderJohn());
    coaches.push(renderPriscilla());
    coaches.push(renderRamona());
    coaches.push(renderAnil());
    coaches.push(renderJim());
  }

  // These three coaches are always shown regardless of the searched location
  coaches.push(renderBethany());
  coaches.push(renderShirley());
  coaches.push(renderAndrea());

  return coaches.filter(Boolean); // Remove null/undefined entries
};
  return (
   <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>

        <Helmet>
          <title>{t("Find Health Coaches Near You - Location-Based Coaching Services")}</title>
        <meta property="og:title" content={t('Find Health Coaches Near You - Location-Based Coaching Services')} />
        <meta name="description" content={t("Find certified health coaches in your area. Enter your location to see available coaching professionals near you.")} />
        </Helmet>

        <header>
          <Topbar />
        </header>
          <div className="container-blue" style={{ backgroundColor: '#fff', border: 'none' }}>

        <div className="container">
          {/* Search Bar Section */}
          <div className="search-section" style={{
            background: '#fff',
            padding: '2rem 0', 
            marginBottom: '2rem',
            borderRadius: '8px'
          }}>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h1 className="text-center mb-4">{t("Find Health Coaches Near You")}</h1>
                
                <div className="search-bar-container" style={{
                  display: 'flex',
                  gap: '10px',
                  maxWidth: '800px',
                  margin: '0 auto',
                  padding: '0 1rem'
                }}>
                  <div style={{ flex: '1', position: 'relative' }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={userLocation}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={handleKeyPress}
                      style={{
                        height: '50px',
                        fontSize: '16px',
                        width:'200px',
                        paddingLeft: '40px',
                        border: '2px solid #dee2e6',
                        borderRadius: '6px'
                      }}
                    />
                    <i className="fas fa-map-marker-alt" style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#6c757d'
                    }}></i>
                  </div>
                  
                  <button
                    className="custom-btn"
                    onClick={handleSearch}
                    style={{
                      height: '50px',
                      padding: '0 2rem',
                      background: '#007bff',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: '500'
                    }}
                  >
                    <i className="fas fa-search me-2"></i>
                    {t("Search")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {showResults && (
            <div className="results-section">
              <h2 className="mb-4">{t("Health Coaches serving")} {location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()}</h2>
              
              {/* Render coaches in priority order */}
              <div className="provider-grid" style={{ alignItems: 'start' }}>
                {renderCoachesInOrder()}
              </div>

              {/* Show message if no location-specific coaches but still show global ones */}
              {!showAnil && !showLynn && !showRamona && !showNourishedHearts && (showJohn || showPriscilla) && (
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="alert alert-info">
                      <h4 className="alert-heading">
                        <i className="fas fa-globe me-2"></i>
                        {t("Global Coaching Services Available")}
                      </h4>
                      <p className="mb-0">
                        {t("While we may not have local coaches in your immediate area, our global coaching experts are available worldwide via telehealth consultations!")}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Default content when no search performed */}
          {!showResults && (
            <div className="default-content text-center" style={{ padding: '2rem 0' }}>
              <h2>{t("Professional Health Coaching")}</h2>
              <p className="lead text-muted">
                {t("Enter your location above to find qualified health coaches in your area")}
              </p>
              
              <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-user-friends fa-2x text-primary mb-2"></i>
                      <h3>{t("Certified Coaches")}</h3>
                      <p className="small text-muted">{t("Qualified and experienced health coaching professionals")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-globe fa-2x text-primary mb-2"></i>
                      <h3>{t("Global Reach")}</h3>
                      <p className="small text-muted">{t("Local and telehealth options available worldwide")}</p>
                    </div>
                    <div className="col-md-4 mb-3">
                      <i className="fas fa-heart fa-2x text-primary mb-2"></i>
                      <h3>{t("Transformational Results")}</h3>
                      <p className="small text-muted">{t("Personalized coaching for lasting health and wellness")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}