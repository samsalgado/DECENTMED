import React from "react";
import '../App.css';
import Treatment from "../pages/treatment";
import Departments from "../pages/departments";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Practices() {
    const { t } = useTranslation("common");
    return (
        <>
        <div className="container">
            <div className="container-blue">
                <h1 className="text-center mb-4">{t("Telehealth Practices")}</h1>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                        <NavLink to='/homeopract'>
                            <h3 className="card-title-fixed" >{t("Homeopathy")}</h3>
                            <img className="img-custom" src={Treatment.homeopath} alt={t("Homeopathy")} />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <NavLink to="/acupuncturists">
                        <h3 className="card-title-fixed" >{t("Acupuncture")}</h3>
                        <img className="img-custom" src={Treatment.acupuncture} alt={t("Acupuncture")} />
                    </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                        <h3 className="card-title-fixed" >{t("Chelation")}</h3>
                        <img className="img-custom" src={Treatment.chelation} alt={t("Chelation")} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <NavLink to="/coaching">
                        <h3 className="card-title-fixed" >{t("Wellness Coach")}</h3>
                        <img className="img-custom" src={Departments.prevent} alt={t("Health Coach")} />
                    </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                        <NavLink to="/chiropract">
                            <h3 className="card-title-fixed" >{t("Chiropractic")}</h3>
                            <img className="img-custom" src={Departments.chiro} alt={t("Chiropractic")} />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <NavLink to="/naturopathicproviders">
                        <h3 className="card-title-fixed" >{t("Naturopathy")}</h3>
                        <img className="img-custom" src={Departments.naturopathy} alt={t("Naturopathy")} />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                        <NavLink to='/hypnopract'>
                            <h3 className="card-title-fixed" >{t("Hypnotherapy")}</h3>
                            <img className="img-custom" src={Departments.hypnotherapy} alt={t("Hypnotherapy")} />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                        <NavLink to='/ayurvedicmedicine'>
                            <h3 className="card-title-fixed" >{t("Ayurveda")}</h3>
                            <img className="img-custom" src={Departments.ayurveda} alt={t("Ayurveda")} />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                        <NavLink to='/nutritionpract'>
                            <h3 className="card-title-fixed" >{t("Nutrition")}</h3>
                            <img className="img-custom" src={Departments.nutriton} alt={t("Nutrition")} />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <NavLink to='/stemcellproviders'>
                        <h3 className="card-title-fixed" >{t("Stem Cell Therapy")}</h3>
                        <img className="img-custom" src={Departments.stemcell} alt={t("Stem Cell")} />
                        </NavLink>
                    </div>
                    {//<div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    //<NavLink to='/holistichealers'>
                        //<h3 className="card-title-fixed" >{t("Holistic Healers, Mediums, and Various Therapists")}</h3>
                        //<img className="img-custom" src={Departments.HEALERS} alt={t("Stem Cell")} />
                        //</NavLink>
                   //</div>
                    }
                </div>
            </div>
        </div>
        </>

    );
}

export default Practices;
