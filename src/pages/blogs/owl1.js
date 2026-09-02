import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { useTranslation } from "react-i18next";
import owl from "../../images copy/Screenshot 2026-08-29 at 6.34.56 PM.png";
import { Button } from "react-bootstrap";
const Owl1 = () => {
  const {t} = useTranslation('common')

  return (
       <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('Psychic Protection')}</title>
        <meta property="og:title" content={t("Psychic Protection")} />                
        <meta name="description" content={t("Psychic Protection")} />        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" 
        content={t("Psychic Protection: An Ounce Of Prevention By Samuel Abrams: Discover the ultimate guide to understanding psychic protection. The technique most commonly found in the literature is surrounding yourself with the white (or gold) light of divine protection.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
    <div className="container-blue">
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>{t('Psychic Protection: An Ounce Of Prevention By Samuel Abrams')}</h1>

      </div>
      <div className="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
          <a href="https://oldwiseowladvisor.com/#contactus"><img className='gridimag' src={owl} alt="Psychic Protection" /></a>
</div>
      <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
          <p>
    {t('I have talked to many empaths who struggle with problems such as being drained by others or being affected by the emotions/vibes of others. This especially applies to readers, energy healers, LMT’s Mental Health counselors and nurses who are often exposed to negative energies. Some suffer from this without even knowing what is going on. Others may take it home with them. Don’t we have enough going on in our heads not to have to deal with that of other people? I wonder if this may be a cause of burnout for many.')}
        </p>
   <p>
  {t('Some are aware of this and use Grounding and Cleansing techniques. These are effective, especially for the negativity you yourself produce. They do not keep you from being affected to begin with. Avoidance techniques, Wards and Shields can mostly stop this problem.')}
  </p>
   <p>
  {t('My own awareness of this started by at age 8 when I started to have dreams of the future that later came true. I think my empathic abilities were in use earlier, but I was not consciously aware of them. Later, I realized that I knew more about others than was usual and because of this, most small talk was of no interest. I did what many empaths do, I isolated myself. Later, I learned relaxation and then meditation techniques.')}
  </p>
  <p>
{t('As I grew older, I found these were not enough. Headaches became contagious, I would get them from other people who would lose them. No fun at all! This started a lifelong look into metaphysics and spiritual ideas. In 1973, I discovered and now practice Buddhism. In 1989, Wicca and I am a Wiccan High Priest. I have read over 400 books. The ones on psychic self-defense were only a little helpful. I developed Shielding techniques on my own using ideas about tuning and volume control from TV and Radio. I developed these techniques much more over time and use them myself. If your own vibes are strong enough, high enough and consistent enough, shields are not needed but few can do this.')}
</p>
<p>
{t('The technique most commonly found in the literature is surrounding yourself with the white (or gold) light of divine protection. This has many drawbacks:')}</p> 
<p>{t('1. It is based on fear')}</p>
<p>{t('2. It assumes you know how to call on or connect to divine protection.')}</p>
<p>{t('3. It makes you look like a deer in the headlights and attracts unwanted attention')}</p>
 <p>
  {t('My techniques rely on visualization and intent. They do not use crystals, herbs or anything outside of my mind. These things can help but what if I forget to wear them? What if I forget to recharge or come to take it for granted? My mind is always there. These techniques are the psychic equivalent of setting good psychological boundaries. They are not based on the fear of getting hurt or the need for protection but on a desire privacy, for not being intruded on without permission or control. This attitude is very important because fear and worry can attract what we do not want.')}
  </p>
  <p>
  {t('For shields, I use 2. One is to stop leakage. It consists of visualizing my aura as a blanket that can be spread wide to connect with others or wrapped tightly around me to protect me and prevent leakage. The other is based on my affinity for water. Still water reflects. I visualize a mirrored cylinder at the edge of my aura, open at the top to allow in higher energies, open at the bottom to allow grounding and getting in earth energies. Because it is open at the bottom, grounding and cleansing before shielding is helpful but not necessary. All else is reflected back to the source, good or bad, with no judgement in a completely passive way that uses little energy. This works in alignment with the law of Karma. Alternatively, you can just reflect the energy to the ground by the shape of the shield. I keep this shield up 24/7 unless I consciously drop it. This shield can be tuned to control how much is picked up, what kind and when but these are more advanced techniques that require more instruction.')}
  </p>
  <p>
  {t('I have created shields related to each of the elements and elemental combinations to suit different people and situations. I stopped using Wards around where I live because the shield I use was so easy to keep in place around me all the time and was so effective. This and much more are described in an 18 page paper I wrote that is available if you email me at oldwiseowladvisor@gmail.com. $10 If you need help applying these techniques or understanding the paper, contact me. I have several other posts and talks both long and short available including All About Karma, Demystifying the Tarot, and Everyone is Psychic. Email me at oldwiseowladvisor@gmail.com and I will send a list.')}  </p>
  <p>
  {t('On being drained, the solution is simple: Never use your own energy in what you do for others. Always try to tap into the highest source you can. These sources are infinite, can’t be exhausted and their energy may benefit the other person. This is what allows me to do over 10 readings a day with more energy at the end than when I started. These readings are also more accurate since they are less impacted by my ego or by the questioners hopes and fears.')}
  </p>
</div>
               <Button 
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '10px 20px',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          textAlign: 'center',
          textDecoration: 'none',
        }}
        className="custom-btn"
        href="https://oldwiseowladvisor.com/#contactus" 
        target="_blank"
      >
        {t("Connect with Samuel")}
      </Button>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Owl1; // Default export
