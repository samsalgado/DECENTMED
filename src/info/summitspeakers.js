import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
import anil from "../images copy/hateu.png";
import linda from "../images copy/linda.jpeg";

// Reusable wrapper for videos/images
const MediaWrapper = ({ children }) => (
  <div style={{
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    overflow: 'hidden',
    marginTop: '10px',
  }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}>
      {children}
    </div>
  </div>
);

function Speakers() {
  const { t } = useTranslation("common");

  const speakers = [
    {
      name: "Stacy Theodossin: Healing Goddess",
      link: "https://www.healinggoddess.com/",
      media: <iframe src="https://www.youtube.com/embed/ZaEGTAKvhSs?si=m7WllEoMq8MKNh4s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Lori Graham: Nutrify Your Life",
      link: "https://decentmed.s3visibility.solutions/",
      media: <iframe src="https://www.youtube.com/embed/dvtBiqgSsoU?si=KGFKbLwZzhWNnyK_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Total Care Chiropractic",
      link: "https://totalcarechiro.com/",
      media: <iframe src="https://www.youtube.com/embed/L5Fg8RBgC6o?si=g4ZTNSwkJVGYN69F" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Jim Pehkonen: Amazing Life Design",
      link: "https://amazinglifedesign.com/",
      media: <iframe src="https://www.youtube.com/embed/n3TTyHHPV8M?si=QBskcLDeYTLqX6ND" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Dr. Kristen Barnes: Meridian Passage Wellness",
      link: "https://meridianpassagewellness.com/",
      media: <iframe src="https://www.youtube.com/embed/6dMNWTx2wrc?si=doJq3KvO8Jfh11Ez" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Ramona Crabtree-Falkner: Authentic Life Journey",
      link: "http://authenticlifejourney.com/",
      media: <iframe src="https://www.youtube.com/embed/hgHkSicJ6xc?si=6SsgL2WDYwH9Oi_5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Anil Narain",
      link: "ninedoors.in",
      media: <img className="img-custom" src={anil} alt={t('Anil Narain')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    },
    {
      name: "Priscilla Muite",
      link: "https://sourceapp.dynamitelifestyle.com/thesource",
      media: <iframe src="https://www.youtube.com/embed/ya7yJQAjhi8?si=Aptd9XVqFDx3oUwp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Advertiser: Linda McBee (Happy DNA Candy)",
      link: "https://sites.google.com/view/aplgo-products/product-details",
      media: <img className="img-custom" src={linda} alt={t('Happy DNA Candy')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    },
    {
      name: "Sarah Green: Green Hypnotherapy",
      link: "https://green-hypnotherapy.com",
      media: <iframe src="https://www.youtube.com/embed/DBiJKxlwqs8?si=IxRWijRAmB-pDouw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Kristina Hess: Thrive Results Coaching",
      link: "https://thriveresultscoaching.com/",
      media: <iframe src="https://www.youtube.com/embed/bz7bhIAwu5o?si=RZ7xOt4qUvTLXdxO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Dr. Nadia Taylor: Essence of Life",
      link: "https://thriveresultscoaching.com/",
      media: <iframe title="Alternative Cancer Treatment" src="https://rumble.com/embed/v6zhjpy/?pub=4hu51y" frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    },
    {
      name: "Advertiser: Solve Your Out-of-Control Eating",
      link: "https://solveyouroutofcontroleating.com/",
      media: <iframe src="https://www.youtube.com/embed/aXfU_SMr2fY?si=L9f2BtP7oQPLZsTY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
    }
  ];

  return (
    <div className="container-blue">
      <h1 className="text-center mb-4" style={{ fontFamily: 'sans-serif' }}>{t('Our Speakers')}</h1>
      <div className="row justify-content-center">
        {speakers.map((speaker, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
            <a
              href={speaker.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1E90FF', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.target.style.color = '#6495ED'}
              onMouseLeave={(e) => e.target.style.color = '#1E90FF'}
            >
              <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t(speaker.name)}</h3>
            </a>
            <MediaWrapper>
              {speaker.media}
            </MediaWrapper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;
