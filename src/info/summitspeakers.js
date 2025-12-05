import React from "react";
import '../App.css';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import anil from "../images copy/hateu.png";
import linda from "../images copy/linda.jpeg";

function Speakers() {
    const { t } = useTranslation("common");
    return (
        <div className="container-blue">
            <h1 className="text-center mb-4" style={{ fontFamily: 'sans-serif' }}>{t('Speaker Lineup')}</h1>
            <div className="row justify-content-center">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                                           <a 
            href="https://www.healinggoddess.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
>
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Stacy Theodossin: Healing Goddess')}</h3></a>
                    <NavLink to="/acu" className="link">
<iframe src="https://www.youtube.com/embed/ZaEGTAKvhSs?si=m7WllEoMq8MKNh4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                       <a 
            href="https://decentmed.s3visibility.solutions/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
        >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Lori Graham: Nutrify Your Life')}</h3>
                    </a>
                    <div className="link">
                    <iframe src="https://www.youtube.com/embed/dvtBiqgSsoU?si=KGFKbLwZzhWNnyK_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <a 
            href="https://totalcarechiro.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Total Care Chiropractic')}</h3></a>
                    <div className="link">
<iframe src="https://www.youtube.com/embed/L5Fg8RBgC6o?si=g4ZTNSwkJVGYN69F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
            <a 
            href="https://amazinglifedesign.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Jim Pehkonen: Amazing Life Design')}</h3></a>
                    <div className="link">
<iframe src="https://www.youtube.com/embed/n3TTyHHPV8M?si=QBskcLDeYTLqX6ND" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
            <a 
            href="https://meridianpassagewellness.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Dr. Kristen Barnes: Meridian Passage Wellness')}</h3></a>
                    <div to="/hypnotherapy" className="link">
<iframe src="https://www.youtube.com/embed/6dMNWTx2wrc?si=doJq3KvO8Jfh11Ez" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                                <a 
            href="http://authenticlifejourney.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >

                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Ramona Crabtree-Falkner: Authentic Life Journey')}</h3></a>
                    <div className="link">
<iframe src="https://www.youtube.com/embed/hgHkSicJ6xc?si=6SsgL2WDYwH9Oi_5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
            <a 
            href="ninedoors.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Anil Narain')}</h3></a>
                    <div className="link">
                        <img className="img-custom" src={anil} alt={t('Anil Narain')} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
            <a 
            href="https://sourceapp.dynamitelifestyle.com/thesource" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease', 
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Priscilla Muite')}</h3></a>
                    <div className="link">
<iframe src="https://www.youtube.com/embed/ya7yJQAjhi8?si=Aptd9XVqFDx3oUwp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
            <a 
            href="https://sites.google.com/view/aplgo-products/product-details" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease', 
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Advertiser: Linda McBee (Happy DNA Candy)')}</h3></a>
                    <div className="link">
                        <img className="img-custom" src={linda} alt={t('Happy DNA Candy')} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                                <a 
            href="https://green-hypnotherapy.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease', 
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Sarah Green: Green Hypnotherapy')}</h3></a>
                    <div className="link">
<iframe src="https://www.youtube.com/embed/DBiJKxlwqs8?si=IxRWijRAmB-pDouw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
            <a 
            href="https://thriveresultscoaching.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Kristina Hess: Thrive Results Coaching')}</h3></a>
                    <div className="link">
<iframe src="https://www.youtube.com/embed/bz7bhIAwu5o?si=RZ7xOt4qUvTLXdxO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <a 
            href="https://thriveresultscoaching.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Dr. Nadia Taylor: Essence of Life')}</h3></a>
                    <div className="link">
                    <iframe title="Alternative Cancer Treatment" src="https://rumble.com/embed/v6zhjpy/?pub=4hu51y" frameborder="0" allowfullscreen></iframe>
                </div>
                </div>
                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                           <a 
            href="https://solveyouroutofcontroleating.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                color: '#1E90FF', // Cute blue color
                textDecoration: 'none', // Remove underline
                transition: 'color 0.3s ease', // Smooth color transition
            }}
            onMouseEnter={(e) => e.target.style.color = '#6495ED'} // Slightly lighter blue on hover
            onMouseLeave={(e) => e.target.style.color = '#1E90FF'} // Back to original blue
            >
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Advertiser: Solve Your Out-of-Control Eating')}</h3></a>
                    <div className="link">
                    <iframe src="https://www.youtube.com/embed/aXfU_SMr2fY?si=L9f2BtP7oQPLZsTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </div>
                </div>
            </div>
        </div>
    );
}

export default Speakers;
