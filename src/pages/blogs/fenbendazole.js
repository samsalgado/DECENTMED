import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import fenben from '../../images copy/Fenbendazole.png';
import fenben2 from '../../images copy/fenben2.png';
import fenben3 from '../../images copy/fenben3.png';
import fenben4 from '../../images copy/fenben4.png';
import fenben5 from '../../images copy/fenbenz5.png';
import fenben6 from '../../images copy/fenben6.png';
import fenben7 from '../../images copy/fenben7.png';
import fenben8 from '../../images copy/fenbenvb17.png';
import fenben9 from '../../images copy/fenben9.png';
import fenben10 from '../../images copy/fenchart1.png';
import fenben11 from '../../images copy/fenbenchart2.png';
import fenben12 from '../../images copy/fenben11.png';
import fenben13 from '../../images copy/fenben13.png';
import "../../App.css";
const Fen = ({t}) => {
  return (
    <>
      <Helmet>
        <title>{t("Fenbendazole for Humans")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("Documenting the efficacy of fenbendazole for humans. Take a journey into the world of cancer research, in the pursuit of a cure.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0' }}>{t("Fenbendazole for Humans with Cancer")}
      </h1>
      <div className='container'>
    <iframe width='100%' height='700px'
 src="https://www.youtube.com/embed/NWIDl_FOexQ?si=lNYCdwUMzlmqfGt6"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>

      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='container'>
          <p>
          <img className='gridimag' src={fenben} alt="logo" />
        </p>
        <p>
        <img className='gridimag' src={fenben2} alt="logo" />
           </p>
           <p>
           <img className='gridimag' src={fenben3} alt="logo" />
           </p>
           <p>
            <img className='gridimag' src={fenben4} alt="logo" />
           </p>
           <p>
            <img className='gridimag' src={fenben5} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={fenben6} alt="pic" />
           </p>
           <p>
            <img className='gridimag' src={fenben8} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={fenben7} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={fenben9} alt="pic" />
           </p>
           <p>
           <img className='gridimag' src={fenben10} alt="pic" />
           </p>
            <p>
                <img className='gridimag' src={fenben11} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={fenben12} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={fenben13} alt="pic" />
            </p>
           <p>
            <a href="https://ar.iiarjournals.org/content/44/9/3725#:~:text=Fenbendazole%20has%20been%20found%20to,primarily%20by%20disrupting%20energy%20metabolism.">Source 1</a>   
           </p>
           <p>
           <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9437363/">Source 2</a>
           </p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Fen; // Default export


