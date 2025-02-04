import React from "react";
import '../App.css';
import Treatment from "../pages/treatment";
import { NavLink } from 'react-router-dom'; // Import NavLink

function BlueContainer() {
    return (
        <div className="container-blue">
            <h1 className="text-center mb-4">Departments</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Homeopathy</h3>
                    <NavLink to="/homeopathy" className="link">
                        <img className="img-custom" src={Treatment.homeopath} alt="Homeopathy" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Acupuncture</h3>
                    <NavLink to="/acu" className="link">
                        <img className="img-custom" src={Treatment.acupuncture} alt="Acupuncture" />
                    </NavLink>
                </div>
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Herbal Medicine</h3>
                    <NavLink to="/herbalmedicine" className="link">
                        <img className="img-custom" src={Treatment.herbalmedicine} alt="Herbal" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Health Coaches</h3>
                    <NavLink to="/prevent" className="link">
                        <img className="img-custom" src={Treatment.prevent} alt="Health Coaching" />
                    </NavLink>
                </div>
                
                 <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Hypnotherapy</h3>
                    <NavLink to="/hypnotherapy" className="link">
                        <img className="img-custom" src={Treatment.hypnotherapy} alt="Hypno" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Chelation</h3>
                    <NavLink to="/chelation" className="link">
                        <img className="img-custo" src={Treatment.chelation} alt="Chelation" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Chiropractic</h3>
                    <NavLink to="/chiropractic" className="link">
                        <img className="img-custom" src={Treatment.chiro} alt="Chiropractic" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Detox</h3>
                    <NavLink to="/detox" className="link">
                        <img className="img-custom" src={Treatment.detox} alt="Detox" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Ayurveda</h3>
                    <NavLink to="/ayurveda" className="link">
                        <img className="img-custom" src={Treatment.ayurveda} alt="Ayurveda" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Nutrition</h3>
                    <NavLink to="/nutrition" className="link">
                        <img className="img-custom" src={Treatment.nutriton} alt="Nutrition" />
                    </NavLink>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                    <h3>Stem Cell Therapy</h3>
                    <NavLink to="/stemcell" className="link">
                        <img className="img-custom-s" src={Treatment.stemcell} alt="Stem Cell Therapy" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default BlueContainer;
