import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../images copy/background.jpg';
function Marketing() {
const learnmore = () => {
        window.location.href = 'https://themerlingroupworld.com/digitalmarketing'
    }
        return (
        <>
            <div className="marketing-section">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div 
                            className="card text-center"
                            style={{ 
                                backgroundImage: `url(${backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: 'none',
                                height: '560px',
                                width:'1000px', // Set a height for the card
                                color: 'white', // Ensure text is readable against the background
                            }}
                        >
                            <div 
                                className="card-body" 
                            >
        
                                <p style={{ textAlign: 'right', color:'#FFFF00', marginLeft: '-0.5cm' }}>{'Content Creation'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '-0.5cm' }}>{'Video Editing'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '0.5cm' }}>{'Advertising'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.7cm' }}>{'Custom Storytelling'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{'Automation'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{'Data Reporting'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.77cm' }}>{'SEO (Local & National)'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{'Webinar Creation'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.77cm'  }}>{'Social Media Optimization'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{'Custom Page Creation'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.77cm' }}>{'Conversion Optimization'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginRight: '-0.6cm'}}>{'Branding & Consultation'}</p>
                                <p style={{ textAlign: 'right', color: '#FFFF00', marginLeft: '1cm' }}>{'Email Marketing'}</p>
                                <button onClick={learnmore} className="btn btn-primary">{'Learn More'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
);

export default Marketing;
