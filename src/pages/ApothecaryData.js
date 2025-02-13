import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Description from '../info/description';
import '../App.css'
import { useTranslation } from 'react-i18next';
const ApothecaryData = ({ val }) => {
  const { t } = useTranslation('common')
  const { image, name, price, medrating, description } = val;

  //  Modal create
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.stopPropagation(); // Prevents event bubbling
    setShow(true);
  }

  const handleClose = (e) => {
    e.stopPropagation(); // Prevents event bubbling
    setShow(false);
  }

  return (
    <div className="contain" style={{}}>
      <img className='pic1' src={image} alt=""
        style={{
          maxWidth: '50%',
          width: "100%",
          height: 'auto',
          margin: '0 1rem'
        }}
      />
      <h3>{name}</h3>
      <h3>{price} BTC</h3>
      <h3>{t('Medical Rating')} : {medrating}</h3>
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
          <h3>{t('Description')}</h3>
        </Button>
        <Modal
          show={show}
          onClick={handleClose}
          backdrop={"static"}
          keyboard={false}
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>{t('Name:')} {name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="wpr"  >{t('Description:')} {description}</p>
          </Modal.Body>
        </Modal>
      </>
      <h3>
        <a href={val.source} target="_blank" rel="noopener noreferrer">{t('Source')}</a>
      </h3>
      <Description />
    </div>
  );
};

export default ApothecaryData;