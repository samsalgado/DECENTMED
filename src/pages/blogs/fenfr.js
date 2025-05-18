import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7118.jpeg';
import spanish2 from '../../images copy/IMG_7119.jpeg';
import spanish3 from '../../images copy/IMG_7121.jpeg';
import spanish4 from '../../images copy/IMG_7120.jpeg';
import spanish5 from '../../images copy/IMG_7122.jpeg';
import spanish6 from '../../images copy/IMG_7123.jpeg';
import spanish7 from '../../images copy/IMG_7124.jpeg';
import spanish8 from '../../images copy/IMG_7125.jpeg';
import spanish9 from '../../images copy/IMG_7126.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish10 from '../../images copy/IMG_7127.jpeg';
import spanish11 from '../../images copy/IMG_7128.jpeg';
import spanish12 from '../../images copy/IMG_7129.jpeg';
import spanish13 from '../../images copy/IMG_7130.jpeg';
import "../../App.css";
const Fenfrance= ({ t }) => {
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
       Fenbendazole Case Studies:
       https://themerlingroupworld.com/static/media/IMG_7118.be96ae8144399f9c6ffd.jpeg
       https://themerlingroupworld.com/static/media/IMG_7119.2b8ad76e5ee4bed5d460.jpeg
       https://themerlingroupworld.com/static/media/IMG_7121.3cf431ea507a2ca9574a.jpeg
       https://themerlingroupworld.com/static/media/IMG_7120.d8df6a9c4e7f1cf002bc.jpeg
       https://themerlingroupworld.com/static/media/IMG_7122.05606abc67d7a964a7b3.jpeg
       https://themerlingroupworld.com/static/media/IMG_7123.6736d97e8aed80123842.jpeg
       https://themerlingroupworld.com/static/media/IMG_7124.edbfabcefb73e0a46a01.jpeg
       https://themerlingroupworld.com/static/media/IMG_7125.d6644962c2471c481b22.jpeg
       https://themerlingroupworld.com/static/media/IMG_7126.f81b076dd01a80735d66.jpeg
       https://themerlingroupworld.com/static/media/IMG_7127.77f1e0ef74633643c28a.jpeg
       https://themerlingroupworld.com/static/media/IMG_7129.9a953d99e033c96c2484.jpeg
       https://themerlingroupworld.com/static/media/IMG_7130.2a5e9284b646133d37f4.jpeg
  `;
          const event = {
            kind: 1,
            created_at: Math.floor(Date.now() / 1000),
            tags: [
              ["t", "health"],
              ["t", "french"],
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

export default Fenfrance;


  