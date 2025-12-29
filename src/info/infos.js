import React, { useEffect} from 'react';
import './Info.css';
import Speakers from './summitspeakers';
import { useTranslation } from 'react-i18next';
import summit from "../images copy/decentmedsummit.png";
import SummitInfo from './infosummit';
import { Button } from 'react-bootstrap';
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
      <h1 className='title'>{t('DecentMed Summit')}</h1>

      <div className='theecontainer'>
        <div>
          <img className='gridimag' src={summit} alt='' />
<iframe width="560" height="315" src="https://www.youtube.com/embed/iNvwz2_FGSg?si=GPjYbA2nrKt6X4dl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div>
          
          </div>
          
        </div>
                <Button className="custom-btn" href="https://www.patreon.com/posts/decentmed-summit-145873819" target="_blank">{t("Buy Summit")}</Button>  {/* Added Bootstrap Button */}

      </div>
      <SummitInfo />
      <Speakers />
    </div>
  );
};

export default InfoSummit;
