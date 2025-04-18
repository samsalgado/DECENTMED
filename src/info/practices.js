import React from "react";
import '../App.css';
import Treatment from "../pages/treatment";
import Departments from "../pages/departments";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Practices() {
    const { t } = useTranslation("common");

    return (
        <div className="container-blue">
            <h1 className="text-center mb-4">{t("Telehealth Practices")}</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <NavLink to='/homeopract'>
                        <h3>{t("Homeopathy")}</h3>
                        <img className="img-custom" src={Treatment.homeopath} alt={t("Homeopathy")} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>{t("Acupuncture")}</h3>
                    <img className="img-custom" src={Treatment.acupuncture} alt={t("Acupuncture")} />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>{t("Chelation")}</h3>
                    <img className="img-custom" src={Treatment.chelation} alt={t("Chelation")} />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>{t("Health Coach")}</h3>
                    <img className="img-custom" src={Departments.healthcoach} alt={t("Health Coach")} />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <NavLink to="/chiropract">
                        <h3>{t("Chiropractic")}</h3>
                        <img className="img-custom" src={Departments.chiro} alt={t("Chiropractic")} />
                    </NavLink>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>{t("Naturopathy")}</h3>
                    <img className="img-custom" src={Departments.naturopathy} alt={t("Naturopathy")} />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <NavLink to='/hypnopract'>
                        <h3>{t("Hypnotherapy")}</h3>
                        <img className="img-custom" src={Departments.hypnotherapy} alt={t("Hypnotherapy")} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <NavLink to='/ayurvedicmedicine'>
                        <h3>{t("Ayurveda")}</h3>
                        <img className="img-custom" src={Departments.ayurveda} alt={t("Ayurveda")} />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                <NavLink to='/nutritionpract'>
                    <h3>{t("Nutrition")}</h3>
                    <img className="img-custom" src={Departments.nutriton} alt={t("Nutrition")} />
              </NavLink>                                                      
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>{t("Stem Cell Therapy")}</h3>
                    <img className="img-custom" src={Departments.stemcell} alt={t("Stem Cell")} />
                </div>
            </div>
        </div>
    );
}

export default Practices;
