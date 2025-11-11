import React from "react";
import '../App.css';
import esteem from '../images copy/img1.png';
import anxiety from '../images copy/img2.png';
import img3 from '../images copy/img3.png';
import img4 from '../images copy/img4.png';
import img5 from '../images copy/img5.png';
import { useTranslation } from "react-i18next";
import img6 from '../images copy/img6.png';
function Benefitts() {
    const { t } = useTranslation('common');
    return (
        <div className="container-blue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t("Benefits of Functional Doctor")}</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("In-depth look at the root cause of illness")}</h3>
                    <img className='gridimage' src={esteem} alt='' />
                    <p className="e">
                        {t("A thorough understanding of your lifestyle and habits is the cornerstone of better health.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Individualized approach to diagnostic testing")}</h3>
                    <img className='gridimage' src={anxiety} alt='' />
                    <p className="e">
                     {t("Understanding your body's unique needs starts here with our Diagnostic Lab Testing.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Individualized treatment plan")}</h3>
                    <img className='gridimage' src={img3} alt='' />
                    <p className="e">
                    {t("We’re committed to nurturing your journey toward holistic health at our Wellness Center.")}
                    </p>
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3> {t("Treatment based holistically on lifestyle changes and natural products")}</h3>
                    <img className='gridimage' src={img4} alt='' />
                    <p className="e">
                         {t("A thorough understanding of your lifestyle and habits is the cornerstone of better health.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Goal is healing and not suppressing symptoms")}</h3>
                    <img className='gridimage' src={img5} alt='' />
                    <p className="e">
                        {t("A thorough understanding of your lifestyle and habits is the cornerstone of better health.")}
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h3>{t("Overall goal is holistic wellness; not just treating disease")}</h3>
                    <img className='gridimage' src={img6} alt='' />
                    <p className="e">
                        {t("She is committed to improving the lives of individuals and communities by providing integrative health solutions.")}
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Benefitts;


