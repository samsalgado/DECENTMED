import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7137.jpeg';
import spanish2 from '../../images copy/IMG_7138.jpeg';
import spanish3 from '../../images copy/IMG_7139.jpeg';
import spanish4 from '../../images copy/IMG_7140.jpeg';
import spanish5 from '../../images copy/IMG_7141.jpeg';
import spanish6 from '../../images copy/IMG_7142.jpeg';
import spanish7 from '../../images copy/IMG_7143.jpeg';
import spanish8 from '../../images copy/IMG_7144.jpeg';
import spanish9 from '../../images copy/IMG_7145.jpeg';
import spanish10 from '../../images copy/IMG_7146.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish11 from '../../images copy/IMG_7147.jpeg';
import spanish12 from '../../images copy/IMG_7148.jpeg';
import spanish13 from '../../images copy/IMG_7149.jpeg';
import "../../App.css";
const Fendutch= ({ t }) => {
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
        Casestudies over fenbendazol:
        https://themerlingroupworld.com/static/media/IMG_7137.b4dbbde1517a0405b34d.jpeg
        https://themerlingroupworld.com/static/media/IMG_7138.d7564556971b533dc317.jpeg
        https://themerlingroupworld.com/static/media/IMG_7139.16d38016bd965b3bb4be.jpeg
        https://themerlingroupworld.com/static/media/IMG_7140.df24e9dca80533c2df87.jpeg
        https://themerlingroupworld.com/static/media/IMG_7141.cd2144d5030626af9167.jpeg
        https://themerlingroupworld.com/static/media/IMG_7142.5ec17103211b1083a7f0.jpeg
        https://themerlingroupworld.com/static/media/IMG_7143.afb2c1e683cc98bd090e.jpeg
        https://themerlingroupworld.com/static/media/IMG_7144.79877da75458f022fd67.jpeg
        https://themerlingroupworld.com/static/media/IMG_7145.e55a54ffe14a24f5fbb4.jpeg
        https://themerlingroupworld.com/static/media/IMG_7146.90011b1ca468688594b6.jpeg
        https://themerlingroupworld.com/static/media/IMG_7147.73cec28ae37640a8369d.jpeg
        https://themerlingroupworld.com/static/media/IMG_7148.e389a8a82d8d0852f105.jpeg
        https://themerlingroupworld.com/static/media/IMG_7149.ab53542375524f6a4a04.jpeg
        

  `;
          const event = {
            kind: 1,
            created_at: Math.floor(Date.now() / 1000),
            tags: [
              ["t", "health"],
              ["t", "dutch"],
              ["t", "cancer"],
              ["t", "fenbendazole"]
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
    spanish9, spanish10, spanish11, spanish12, spanish13
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Fendutch;


  