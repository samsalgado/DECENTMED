import React from "react";
import '../App.css';
import { useTranslation } from 'react-i18next';
import businessplan from '../images copy/graph.png';
const AuditVids = () => {
    const { t } = useTranslation("common");
    return (
        <div className="contents">
            {/* The main title should be outside the map loop */}
            <h1 
                style={{
                    fontFamily: 'sans-serif',
                    width:"100%",
                    textAlign: 'center',
                    fontSize: '2rem',  // Default font size
                }}
            >
                {t("5 Action Steps to Increase Patient Acquisition")}
            </h1>
            <div className="plant-container">
            <img src={businessplan} className="gridimag" alt="quote" />
            </div>
            <h1 
                style={{
                    fontFamily: 'sans-serif',
                    width: "100%",
                    textAlign: 'center',
                    fontSize: '2rem',
                }}
            >
                {t("Buy Now")}
            </h1>
        </div>
    );
};

export default AuditVids;
