import React, {useEffect, useCallback} from 'react';
import spanish from '../../images copy/IMG_7054.jpeg';
import spanish2 from '../../images copy/IMG_7055.jpeg';
import spanish3 from '../../images copy/IMG_7056.jpeg';
import spanish4 from '../../images copy/IMG_7057.jpeg';
import spanish5 from '../../images copy/IMG_7058.jpeg';
import spanish6 from '../../images copy/IMG_7059.jpeg';
import spanish7 from '../../images copy/IMG_7060.jpeg';
import spanish8 from '../../images copy/IMG_7061.jpeg';
import spanish9 from '../../images copy/IMG_7062.jpeg';
import spanish10 from '../../images copy/IMG_7063.jpeg';
import spanish11 from '../../images copy/IMG_7064.jpeg';
import spanish12 from '../../images copy/IMG_7065.jpeg';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
import { nip19 } from 'nostr-tools';
import spanish13 from '../../images copy/IMG_7066.jpeg';
import spanish14 from '../../images copy/IMG_7067.jpeg';
import spanish15 from '../../images copy/IMG_7068.jpeg';
import spanish16 from '../../images copy/IMG_7069.jpeg';
import spanish17 from '../../images copy/IMG_7070.jpeg';
import "../../App.css";

const Ivermectinedutch = ({ t }) => {
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
      Casestudies over ivermectine:
        https://themerlingroupworld.com/static/media/IMG_7054.55adfd76c8d6b9dadad0.jpeg
        https://themerlingroupworld.com/static/media/IMG_7055.07ed9cef422ba4ec710f.jpeg
        https://themerlingroupworld.com/static/media/IMG_7056.f7996c9c529e1b63b49d.jpeg
        https://themerlingroupworld.com/static/media/IMG_7057.51bc51733329068be753.jpeg
        https://themerlingroupworld.com/static/media/IMG_7058.15bfb4ca31173cc742c2.jpeg
        https://themerlingroupworld.com/static/media/IMG_7059.b6576230a857123006fc.jpeg
        https://themerlingroupworld.com/static/media/IMG_7060.1a4b73a86a130e555eab.jpeg
        https://themerlingroupworld.com/static/media/IMG_7061.450fefd7718a2182c4b8.jpeg
        https://themerlingroupworld.com/static/media/IMG_7062.927f73ec0c3469723880.jpeg
        https://themerlingroupworld.com/static/media/IMG_7063.e53d9f9ba7c148e07fad.jpeg
        https://themerlingroupworld.com/static/media/IMG_7064.bf7292d65024226bb0a0.jpeg
        https://themerlingroupworld.com/static/media/IMG_7065.ad25c7eb8275fa4cb13b.jpeg
        https://themerlingroupworld.com/static/media/IMG_7066.f8d14e38f0a63932d551.jpeg
        https://themerlingroupworld.com/static/media/IMG_7067.d4b0da55ec8a97e0c5d0.jpeg
        https://themerlingroupworld.com/static/media/IMG_7068.911e22b441469f2b98fa.jpeg
        https://themerlingroupworld.com/static/media/IMG_7069.db12f269ce9e2ff3b111.jpeg
        https://themerlingroupworld.com/static/media/IMG_7070.6de57446d635642ada7d.jpeg
`;
        const event = {
          kind: 1,
          created_at: Math.floor(Date.now() / 1000),
          tags: [
            ["t", "health"],
            ["t", "dutch"],
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

export default Ivermectinedutch;