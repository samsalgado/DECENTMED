import React from "react";
import './acu.css'; 
import './Info.css';
import { Button } from'react-bootstrap';
import Benefits from "./benefits";
import Modalities from "./modalities";
import { useTranslation } from "react-i18next";
import Collapsible from 'react-collapsible';
import Hypnostudies from "./hypnostudy";
const HYPNO = () => {
const {t} = useTranslation('common')

    return (
        <div className="container">
            <h1 className='title'>{t('Hypnotherapy')}</h1>
    <div className='video-container'>
  <iframe
    className="rumble"
    width="100%"
    height="400px"
    src="https://rumble.com/embed/v6c1np4/?pub=4hu51y"
    frameBorder="0"
    allowFullScreen
    title="Rumble video player"
  ></iframe>
</div>
      <Button variant="primary" href="https://www.green-hypnotherapy.com/" target="_blank">{t("Visit Green Hypnotherapy")}</Button>  {/* Added Bootstrap Button */}
        <br></br>
        <Benefits />
        <br></br> 
        <Modalities />
        <Collapsible trigger={<th className="collapsible-trigger">{t("Hypnotherapy Case Study")}</th>}>
        <Hypnostudies />
        </Collapsible>
        </div>
    )
}
export default HYPNO;
