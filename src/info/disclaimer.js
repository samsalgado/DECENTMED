import React from 'react';
import QR from '../images copy/crypto.png';
import { useTranslation } from 'react-i18next';
import { WalletConnectModal } from "@walletconnect/modal";

const Pay = () => {
  const { t } = useTranslation('common');

  // WalletConnect modal instance
  const modal = new WalletConnectModal({
    projectId: "ddaecb8e5b502279cc567a6726699b68",
  });

  const BTC_ADDRESS = "bc1q2jm4xuhj2phtlf4rkszcyr3fxqftxv4tmlkk4s";
  const USDC_ADDRESS = "0x06A4931Ee96E3b7685f35005519C4670f88dB3dd";

  const payBTC = () => {
    console.log("Opening BTC modal...");
    modal.openModal({
      standaloneUri: `bitcoin:${BTC_ADDRESS}`,
    });
  };

  const payUSDC = () => {
    console.log("Opening USDC modal...");
    modal.openModal({
      standaloneUri: `ethereum:${USDC_ADDRESS}`,
    });
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        marginTop: '0px',
        height: '420px',
        textAlign: 'center',
        padding: '20px',
        lineHeight: '1.0'
      }}
    >
      <p>{t('BTC Address')}: {BTC_ADDRESS}</p>
      <p>{t('USDC Address')}: {USDC_ADDRESS}</p>

      <img
        src={QR}
        alt="QR Code"
        style={{ width: '250px', marginTop: '10px' }}
      />

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={payBTC}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            cursor: 'pointer'
          }}
        >
          Pay with BTC
        </button>

        <button
          onClick={payUSDC}
          style={{
            padding: '10px 20px',
            cursor: 'pointer'
          }}
        >
          Pay with USDC
        </button>
      </div>

      <h3 style={{ marginTop: '20px' }}>
        {t('All Plant Information and Medical Rating is from')}{' '}
        <a href='https://pfaf.org/'>Pfaf.org</a>
      </h3>
    </div>
  );
};

export default Pay;
