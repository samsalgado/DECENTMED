import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7071.jpeg';
import spanish2 from '../../images copy/IMG_7072.jpeg';
import spanish3 from '../../images copy/IMG_7073.jpeg';
import spanish4 from '../../images copy/IMG_7074.jpeg';
import spanish5 from '../../images copy/IMG_7075.jpeg';
import spanish6 from '../../images copy/IMG_7076.jpeg';
import spanish7 from '../../images copy/IMG_7077.jpeg';
import spanish8 from '../../images copy/IMG_7078.jpeg';
import spanish9 from '../../images copy/IMG_7079.jpeg';
import spanish10 from '../../images copy/IMG_7080.jpeg';
import spanish11 from '../../images copy/IMG_7081.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish12 from '../../images copy/IMG_7082.jpeg';
import spanish13 from '../../images copy/IMG_7083.jpeg';
import spanish14 from '../../images copy/IMG_7084.jpeg';
import spanish15 from '../../images copy/IMG_7085.jpeg';
import spanish16 from '../../images copy/IMG_7086.jpeg';
import spanish17 from '../../images copy/IMG_7087.jpeg';
import "../../App.css";
const Ivermectinhindi = ({ t }) => {
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
        आइवरमेक्टिन केस स्टडीज:
        https://themerlingroupworld.com/static/media/IMG_7071.fff268476f0c19305209.jpeg
        https://themerlingroupworld.com/static/media/IMG_7072.1447985d65441dc1fe58.jpeg
        https://themerlingroupworld.com/static/media/IMG_7073.7c05bf929c812a73125d.jpeg
        https://themerlingroupworld.com/static/media/IMG_7074.a825d73978ab36501cd6.jpeg
        https://themerlingroupworld.com/static/media/IMG_7075.4460fcfc224d535d06d3.jpeg
        https://themerlingroupworld.com/static/media/IMG_7076.28e2d1d4d6c218221533.jpeg
        https://themerlingroupworld.com/static/media/IMG_7077.e5e66af102da96af242e.jpeg
        https://themerlingroupworld.com/static/media/IMG_7078.ec7cf66d4473f44625ce.jpeg
        https://themerlingroupworld.com/static/media/IMG_7079.87887befb3e260fd08e9.jpeg
        https://themerlingroupworld.com/static/media/IMG_7080.2499026ffc20f0d84874.jpeg
        https://themerlingroupworld.com/static/media/IMG_7081.8db51c8d36a02d48e37d.jpeg
        https://themerlingroupworld.com/static/media/IMG_7082.32281ec1dfb55ed5641e.jpeg
        https://themerlingroupworld.com/static/media/IMG_7083.ba8011098512937526dd.jpeg
        https://themerlingroupworld.com/static/media/IMG_7084.7ea3d11b66524f4e717a.jpeg
        https://themerlingroupworld.com/static/media/IMG_7085.050978a2b4fc4c556314.jpeg
        https://themerlingroupworld.com/static/media/IMG_7086.361d73645ea0408ad178.jpeg
        https://themerlingroupworld.com/static/media/IMG_7087.1dd100cd2a4cbf074938.jpeg
  `;
          const event = {
            kind: 1,
            created_at: Math.floor(Date.now() / 1000),
            tags: [
              ["t", "health"],
              ["t", "hindi"],
              ["t", "cancer"],
              ["t", "ivermectine"]
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
    spanish9, spanish10, spanish11, spanish12, spanish13, spanish14, spanish15, 
    spanish16, spanish17
  ];

  return (
    <div className="container">
      {images.map((image, index) => (
        <img key={index} className="gridimag" src={image} alt="pic" />
      ))}
    </div>
  );
};

export default Ivermectinhindi;