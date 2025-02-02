import React from "react";
import '../App.css';
import Treatment from "../pages/treatment";
import Departments from "../pages/departments";
import { NavLink } from 'react-router-dom';
function Practices() {
    return (
        <div className="container-blue">
            <h1 className="text-center mb-4">Telehealth Practices</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <NavLink to='/homeopract'>
                        <h3>Homeopathy</h3>
                        <img className="img-custom" src={Treatment.homeopath} alt="Homeopathy" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>Acupuncture</h3>
                    <img className="img-custom" src={Treatment.acupuncture} alt="Acupuncture" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>Chelation</h3>
                    <img className="img-custom" src={Treatment.chelation} alt="Chelation" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>Health Coach</h3>
                    <img className="img-custom" src={Departments.healthcoach} alt="Chelation" />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <NavLink to="/chiropract">
                        <h3>Chiropractic</h3>
                        <img className="img-custom" src={Departments.chiro} alt="Chiropractic" />
                    </NavLink>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>Naturopathy</h3>
                    <img className="img-custom" src={Departments.naturopathy} alt="Naturopath" />
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <NavLink to='/hypnopract'>
                        <h3>Hypnotherapy</h3>
                        <img className="img-custom" src={Departments.hypnotherapy} alt="Detox" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                <NavLink to='/ayurvedicmedicine'>
                    <h3>Ayurveda</h3>
                    <img className="img-custom" src={Departments.ayurveda} alt="Ayurveda" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>Nutrition</h3>

                    <img className="img-custom" src={Departments.nutriton} alt="Nutrition" />

                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-center mb-4">
                    <h3>Stem Cell</h3>

                    <img className="img-custom" src={Departments.stemcell} alt="Stem Cell Therapy" />

                </div>
            </div>
        </div>
    );
}

export default Practices;
