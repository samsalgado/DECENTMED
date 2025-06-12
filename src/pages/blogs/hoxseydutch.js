import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7203.jpeg';
import spanish2 from '../../images copy/IMG_7204.jpeg';
import spanish3 from '../../images copy/IMG_7205.jpeg';
import spanish4 from '../../images copy/IMG_7206.jpeg';
import spanish5 from '../../images copy/IMG_7207.jpeg';
import spanish6 from '../../images copy/IMG_7208.jpeg';
import spanish7 from '../../images copy/IMG_7209.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish8 from '../../images copy/IMG_7210.jpeg';
import spanish9 from '../../images copy/IMG_7211.jpeg';
import spanish10 from '../../images copy/IMG_7213.jpeg';
import spanish11 from '../../images copy/IMG_7214.jpeg';
import spanish12 from '../../images copy/IMG_7215.jpeg';
import spanish13 from '../../images copy/IMG_7216.jpeg';
import spanish14 from '../../images copy/IMG_7217.jpeg';
import spanish15 from '../../images copy/IMG_7220.jpeg';
import spanish16 from '../../images copy/IMG_7221.jpeg';
import "../../App.css";
const Hoxseydutch = ({ t }) => {
      const publishToNostr = useCallback(async () => {
          const nsec = process.env.REACT_APP_NSEC;
            if (!nsec) {
            console.error('Missing nsec key');
            return;
          }
      
          try {
            const { type, data: sk } = nip19.decode(nsec);
            if (type !== 'nsec') {
              console.error('Invalid nsec format');
              return;
            }
            const pubkey=getPublicKey(sk);
          const content = `  
Casestudy van Harry Hoxsey's kankerbehandeling en de voordelen ervan (Nederlands):  https://themerlingroupworld.com/static/media/IMG_7203.d4aa0b2132ac45dd6a9a.jpeg
  https://themerlingroupworld.com/static/media/IMG_7204.96e2c9b3d128857226d2.jpeg
  https://themerlingroupworld.com/static/media/IMG_7205.71b2b91bff05ba9595b0.jpeg
  https://themerlingroupworld.com/static/media/IMG_7206.05dd696283037d7b6a11.jpeg
  https://themerlingroupworld.com/static/media/IMG_7207.49811d11985cb1c261a6.jpeg
  https://themerlingroupworld.com/static/media/IMG_7208.ec5234835316b82609e8.jpeg
  https://themerlingroupworld.com/static/media/IMG_7209.6d77b7e01a3cb4d5b4e2.jpeg
  https://themerlingroupworld.com/static/media/IMG_7210.c5db31af7d5a60c69ef7.jpeg
  https://themerlingroupworld.com/static/media/IMG_7211.6b033b6c91bb70c15ec0.jpeg
  https://themerlingroupworld.com/static/media/IMG_7213.0e29671d096d26c976a5.jpeg
  https://themerlingroupworld.com/static/media/IMG_7214.d25b944770b07a151363.jpeg
  https://themerlingroupworld.com/static/media/IMG_7215.b8f4300b1c7548851d09.jpeg
  https://themerlingroupworld.com/static/media/IMG_7216.caa724f4a8cc00cbf1c9.jpeg
  https://themerlingroupworld.com/static/media/IMG_7217.3b90e85e69e6105e21e0.jpeg
  https://themerlingroupworld.com/static/media/IMG_7220.8e4d1e606c38b57bf9aa.jpeg
  https://themerlingroupworld.com/static/media/IMG_7221.43b2c3ed88710bb82d60.jpeg
    `;
            const event = {
              kind: 1,
              created_at: Math.floor(Date.now() / 1000),
              tags: [
                ["t", "health"],
                ["t", "dutch"],
                ["t", "cancer"]
              ],              
            content,
              pubkey,
            };
            const signedEvent = finalizeEvent(event, sk);
            const pool = new SimplePool();
            const relays = ['wss://relay.damus.io','wss://nos.lol'];
            await Promise.all(
              relays.map(async (relay) => {
                try {
                  let r = await pool.ensureRelay(relay);
                  await r.publish(signedEvent);
                  console.log(`Published to ${relay}`);
                } catch (err) {
                  console.error(`Failed to publish to ${relay}:`, err);
                }
              })
            );
      
            console.log('Published to Nostr!');
            pool.close(relays); // Clean up connections
          } catch (error) {
            console.error('Error publishing to Nostr:', error);
          }
        }, []);
        useEffect (() => {
          publishToNostr();
        }, [publishToNostr]);
  
  const images = [
    spanish, spanish2, spanish3, spanish4, spanish5, spanish6, spanish7, spanish8, 
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15, spanish16
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Hoxseydutch;


  