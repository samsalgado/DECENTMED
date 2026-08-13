import React, { useEffect} from 'react';
import './Info.css';
import Speakers from './summitspeakers';
import { useTranslation } from 'react-i18next';
import summit from "../images copy/womenshealthsummitt.png";
import sumit from "../images copy/maxresdefault.jpg";
import tsnme from "../images copy/diabesity (2).png";
import sumit1 from "../images copy/ptsdsummit.png";
import SummitInfo from './infosummit';
import { Button } from 'react-bootstrap';
import LeadGenForm from './LeadGenForm';
import "../App.css";
const InfoSummit = () => {
  const { t } = useTranslation("common");
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <div className='container'>
      <div className="container-blue">
      <a href='https://telehealth.decentmed.org/signup'>
            <h1>{t('Watch Full Summits on More Active')}</h1>
            </a>
</div>
      <div className='theecontainer'>
          <div className="container-blue">
        <div>
          <img className='gridimag' src={tsnme} alt='' />
          <div>
            <h1>{t('Sign Up')}</h1>
            <LeadGenForm />
            <a href='https://telehealth.decentmed.org/signup'>
            <h1>{t('Watch Full Summits on More Active')}</h1>
            </a>
          </div>
            <h2>{t('Previous Summits')}</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iNvwz2_FGSg?si=GPjYbA2nrKt6X4dl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div>
          <a href='https://telehealth.decentmed.org/signup'>
          <img className='gridimag' src={sumit} alt='' />
          </a>
          </div>
            <div>
          <a href='https://telehealth.decentmed.org/signup'>
          <img className='gridimag' src={sumit1} alt='' />
          </a>
          </div>
        </div>
            <div>
          <a href='https://telehealth.decentmed.org/signup'>
            <img className='gridimag' src={summit} alt='' />
          </a>
          </div>
        <Button className="custom-btn" href="https://telehealth.decentmed.org/signup" target="_blank">{t("Buy Summit")}</Button>  {/* Added Bootstrap Button */}
      </div>
       <div className="container-blue">
      <SummitInfo />
        <h2>{t('Previous Speakers')}</h2>
      <Speakers />
      </div>
      </div>
    </div>
  );
};

export default InfoSummit;
