import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import { AuthContext } from '../pages/Providers/AuthProvider';


const AddtoCart = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [practice, setPractice] = useState('');
  const [bitcoinAddress, setBitcoinAddress] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const amount = 100;
  const payment = {
    name: user?.displayName,
    email: user?.email,
    price: amount,
    practice: practice,
    bitcoinAddress: bitcoinAddress,
    status: 'pending',
    date: new Date()
  }
  // Bitcoin address validation function
  const isValidBitcoinAddress = (address) => {
    const legacyRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/; // Legacy P2PKH or P2SH
    const bech32Regex = /^(bc1)[a-z0-9]{25,87}$/; // Bech32
    return legacyRegex.test(address) || bech32Regex.test(address);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate Bitcoin address
    if (!isValidBitcoinAddress(bitcoinAddress)) {
      setError("Invalid bitcoin address.Please provide a valid address.");
      return;
    }

    setError(""); // Clear any previous error

    axios.post('http://localhost:5001/payments', payment)
      .then(data => {
        if (data?.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Payment Successful",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
          // Refresh the page after showing success
          window.location.href = "/telehealth"; // Replace "/another-route-path" with the desired route
        });

        }
      })

    // Clear input fields after successful payment
        setName("");
        setPractice("");
        setBitcoinAddress("")

      .catch((error) => {
  setError(error)
      })
  }

  const handleBack = () => {
    return navigate('/telehealth', { state: { from: location } })
  }

  return (
    <>
      <div style={{
        maxWidth: '60%',
        width: '100%',
        margin: ' auto',
        marginTop: '40px',
        padding: '20px',
        textAlign: 'center',
        border: '4px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}

      >

        {/* Close Button */}
        <button className="closes-icon" onClick={() => handleBack()}>
          &times;
        </button>
        <h4>{t('Join the Coalition')}</h4>
        <p style={{ 'word-wrap': ' break-word', fontSize: '20px' }} >
          {t('Bitcoin Address : bc1qysv9r9fh7lfqmkq5666as0lpkhk33nj4wpcqfj')}
        </p>
     <QRCodeSVG size={180} />
        <p>{t("Initial Payment of $100 [0.0017 BTC] (BTC Preferred). Let's change the healthcare industry forever!")}</p>
        {/* Consider adding a price display here */}


        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={t('Name')} value={user?.displayName} required onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder={t("Medical Practice")} required value={practice} onChange={(e) => setPractice(e.target.value)} />
          <input type="text" placeholder={t("Provide Your Bitcoin Address")} required value={bitcoinAddress} onChange={(e) => setBitcoinAddress(e.target.value)} />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type='submit'>Send Bitcoin</button>
        </form>


      </div>

    </>
  );
};

export default AddtoCart;
