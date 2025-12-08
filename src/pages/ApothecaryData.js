import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Description from '../info/description';
import "../info/Info.css";
import '../App.css';
import { useTranslation } from 'react-i18next';

const ApothecaryData = ({ val }) => {
  const { t } = useTranslation('common');
  const { image, name, medrating, description, source } = val;

  const [show, setShow] = useState(false);

  // Show modal
  const handleShow = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setShow(true);
  };

  // Close modal (no event needed)
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="contain">
      <img 
        className='pic1' 
        src={image} 
        alt={name}
        style={{
          maxWidth: '50%',
          width: '100%',
          height: 'auto',
          margin: '0 1rem'
        }}
      />
      <h3>{name}</h3>
      <h3>
        {t('Rating')} :{" "}
        <span style={{ color: '#f5b50a', fontSize: '1.5rem' }}>
          {"★".repeat(medrating) + "☆".repeat(5 - medrating)}
        </span>
      </h3>
      <Button 
        className="custom-btn" 
        size="sm" 
        onClick={handleShow}
        style={{ margin: '10px 0' }}
      >
        <h3>{t('Description')}</h3>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}   // <-- Proper close
        backdrop="static"
        keyboard={false}
        size="xl"
        centered               // <-- Vertically centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{t('Name:')} {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="wpr">{t('Description:')} {description}</p>
          <p>
            {t('Source')}: <a href={source} target="_blank" rel="noopener noreferrer">{source}</a>
          </p>
        </Modal.Body>
      </Modal>

      <Description />
    </div>
  );
};

export default ApothecaryData;
