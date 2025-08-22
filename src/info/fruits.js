import React from "react";
import '../App.css';
import './Info.css';
import turmeric from '../images copy/tumeric.png';
import ginger from '../images copy/gin.png';
import aloevera from '../images copy/aloevera.png';
import broccoli from '../images copy/broc.png';
import gf from '../images copy/gf.png';
import lemon from '../images copy/lemon.png';
import { useTranslation } from 'react-i18next'
function Fruits() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Best Fruits, Spices and Vegetables for Detox Tea Detox")}</h2>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3 className='title'>{t("Turmeric")}</h3>
                    <img className='gridimage' src={turmeric} alt='' />
                    <p className="e">
                    {t("Anti-inflammatory properties - rich in antioxidants, vitamins, and nutrients")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3 className='title'>{t("Ginger")}</h3>
                    <img className='gridimage' src={ginger} alt='' />
                    <p className="e">
                     {t("Rich in antioxidants, cleanses the body and helps with digestion")}</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3 className='title'>{t("Aloe Vera")}</h3>
                    <img className='gridimage' src={aloevera} alt='' />
                    <p className="e">
                      {t("Soothes inflammation, cleanses the colon.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3 className='title'>{t("Broccoli")}</h3>
                    <img className='gridimage' src={broccoli} alt='' />
                    <p className="e">
                       {t("High in fiber, rich in Vitamin A,C,K and antioxidants")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3 className='title'>{t("Grapefruit")}</h3>
                    <img className='gridimage' src={gf} alt='' />
                    <p className="e">
                      {t("High in antioxidant Vitamin C, boosts immune system")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3 className='title'>{t("Lemon")}</h3>
                    <img className='gridimage' src={lemon} alt='' />
                    <p className="e">
                       {t("High in antioxidant Vitamin C. Cleanses liver, helps digestion and aids in weight management.")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Fruits;
