import React, { useEffect, useState } from 'react';
import './Info.css';
import Speakers from './summitspeakers';
import { useTranslation } from 'react-i18next';
import summit from "../images copy/decentmedsummit.png";
import SummitInfo from './infosummit';
import { Button, Modal } from 'react-bootstrap';
import "../App.css";
const InfoSummit = () => {
  const { t } = useTranslation("common");
  const [showModal, setShowModal] = useState(false);

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

          <div>
          <Button
            onClick={() => setShowModal(true)}
            className="custom-btn"
            style={{ display: 'block', margin: '10px auto 0' }}
          >
            {t("Register")}
          </Button>

          {/* 🔥 Registration Modal */}
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            centered
            className="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>{t("Register for the Summit")}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/hbb1megFlHaUKjxVNheq"
                style={{
                  width: "100%",
                  height: "700px",
                  border: "none",
                  borderRadius: "3px"
                }}
                title="Summit Reg"
              />
            </Modal.Body>
          </Modal>
          </div>
        </div>
      </div>

      <SummitInfo />
      <Speakers />
    </div>
  );
};

export default InfoSummit;
