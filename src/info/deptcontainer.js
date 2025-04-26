import React from "react";
import '../App.css';
import Treatment from "../pages/treatment";
import { NavLink } from 'react-router-dom'; // Import NavLink
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

function BlueContainer() {
    const { t } = useTranslation("common");

    return (
        <div className="container-blue">
            <h1 className="text-center mb-4" style={{ fontFamily: 'sans-serif' }}>{t('Departments')}</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Homeopathy')}</h3>
                    <NavLink to="/homeopathy" className="link">
                        <img className="img-custom" src={Treatment.homeopath} alt={t('Homeopathy')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Acupuncture')}</h3>
                    <NavLink to="/acu" className="link">
                        <img className="img-custom" src={Treatment.acupuncture} alt={t('Acupuncture')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Herbal Medicine')}</h3>
                    <NavLink to="/herbalmedicine" className="link">
                        <img className="img-custom" src={Treatment.herbalmedicine} alt={t('Herbal Medicine')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Health Coaches')}</h3>
                    <NavLink to="/prevent" className="link">
                        <img className="img-custom" src={Treatment.prevent} alt={t('Health Coaching')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Hypnotherapy')}</h3>
                    <NavLink to="/hypnotherapy" className="link">
                        <img className="img-custom" src={Treatment.hypnotherapy} alt={t('Hypnotherapy')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Chelation')}</h3>
                    <NavLink to="/chelation" className="link">
                        <img className="img-custom" src={Treatment.chelation} alt={t('Chelation')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Chiropractic')}</h3>
                    <NavLink to="/chiropractic" className="link">
                        <img className="img-custom" src={Treatment.chiro} alt={t('Chiropractic')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Detox')}</h3>
                    <NavLink to="/detox" className="link">
                        <img className="img-custom" src={Treatment.detox} alt={t('Detox')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Ayurveda')}</h3>
                    <NavLink to="/ayurveda" className="link">
                        <img className="img-custom" src={Treatment.ayurveda} alt={t('Ayurveda')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Nutrition')}</h3>
                    <NavLink to="/nutrition" className="link">
                        <img className="img-custom" src={Treatment.nutriton} alt={t('Nutrition')} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3 className="card-title-fixed" style={{ fontFamily: 'sans-serif' }}>{t('Stem Cell Therapy')}</h3>
                    <NavLink to="/stemcell" className="link">
                        <img className="img-custom" src={Treatment.stemcell} alt={t('Stem Cell Therapy')} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default BlueContainer;
