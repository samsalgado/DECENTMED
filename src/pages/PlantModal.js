// Modal.js
import React from 'react';
import './Modal.css'; // Add styles for the modal

const PlantModal = ({ isOpen, onClose, plant }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{plant.name}</h2>
        <p>{plant.description}</p>
        <a href={plant.source} target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </div>
  );
};

export default PlantModal;
