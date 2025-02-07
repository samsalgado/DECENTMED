import chirotreat from '../images copy/chirotreats.png';
import chiropractorstats from '../images copy/chiropractor-stats.png';
import React from "react";
import '../App.css';
import { useTransition } from 'react';

function Benefits() {
const {t} = useTransition('common')
    return (
        <div className="container-bBblue">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t('Benefits of Chiropractic Care')}</h2>
            <div className="imge-container">
                <img className='large-image' src={chirotreat} alt="Chiropractic Treatment" />
                <img className='large-image' src={chiropractorstats} alt="Chiropractor Statistics" />
            </div>
        </div>
    );
}

export default Benefits;
