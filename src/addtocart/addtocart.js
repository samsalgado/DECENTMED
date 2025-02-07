import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import { AuthContext } from '../pages/Providers/AuthProvider';
import btclightAddress from '../pics/btclight.png';


const AddtoCart = () => {
  const { user } = useContext(AuthContext);
const { t } = useTranslation("common");
  const [name, setName] = useState('');
  const [practice, setPractice] = useState('');
  const [bitcoinAddress, setBitcoinAddress] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(name);
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

  // Validation function for Lightning Invoice
  const isValidLightningInvoice = (invoice) => {
    const lnInvoiceRegex = /^ln(bc|tb|bcrt)[0-9]{1,}[a-z0-9]+$/i;
    return lnInvoiceRegex.test(invoice);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
  // Validate Lightning Invoice
    if (!isValidLightningInvoice(bitcoinAddress)) {
      setError("Invalid Lightning Invoice. Please provide a valid Lightning Network Invoice.");
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
      <div className='btc-container'>

        {/* Close Button */}
        <button className="closes-icon" onClick={() => handleBack()}>
          &times;
        </button>
        <h4>{t('Join the Coalition')}</h4>
        <p style={{ 'word-wrap': ' break-word', fontSize: '20px' }} >
          {t('Bitcoin Address : lnbc1pn5mep0pp5n94kygg4apk7s306cytffaeakqla52ne6y85dhd3n9zfl2zxf8tqdp82pshjgr5dusyymrfde4jq4mpd3kx2apq24ek2uscqzpuxqr8pqsp556upw7px8js755wcumfa6qd74ntnr05rk73eq8x76mvf5ucpn46s9p4gqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqysgq0wpfq3f5kwlgtqmuzy0sdh6uv4krrhvknynah0e9z3ssppy8j9h9cdcpu2yv6nq24qt2jh2sl6n07axat2m7mkhw4gpmcr5evkemzfgp9cz9pd')}
        </p>
        <img src={btclightAddress} className="pik1" alt="" />
        <p>{t("Initial Payment of $100 [0.0017 BTC] (BTC Preferred). Let's change the healthcare industry forever!")}</p>
        {/* Consider adding a price display here */}


        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={t('Name')} value={user?.displayName} required onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder={t("Medical Practice")} required value={practice} onChange={(e) => setPractice(e.target.value)} />
          <input type="text" placeholder={t("Provide Your Bitcoin Address")} required value={bitcoinAddress} onChange={(e) => setBitcoinAddress(e.target.value)} />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type='submit'>{t('Send Bitcoin')}</button>
        </form>


      </div>

    </>
  );
};

export default AddtoCart;
