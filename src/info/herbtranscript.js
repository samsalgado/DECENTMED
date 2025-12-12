import React, { useState } from "react";
import "../App.css";
import './Info.css';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'react-bootstrap';

const Transcript = () => {
    const { t } = useTranslation("common");
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div>
            <Button className="custom-btn" onClick={() => setShowModal(true)}>
                {t("Transcript")}
            </Button>

            <Modal 
                show={showModal} 
                onHide={() => setShowModal(false)} 
                size="lg" 
                centered 
                className="custom-modal"  /* Apply custom class here */
            >
                <Modal.Header closeButton>
                    <Modal.Title>{t("Transcript")}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{t("txt")}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {t("Close")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Transcript;
