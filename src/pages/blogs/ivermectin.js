import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import fenben from '../../images copy/ivermectin1.jpeg';
import fenben2 from '../../images copy/chemistry.jpeg';
import fenben3 from '../../images copy/ivermectin2.jpeg';
import fenben4 from '../../images copy/ivermectin3.jpeg';
import fenben5 from '../../images copy/ivermectin4.jpeg';
import fenben6 from '../../images copy/ivermectin5.jpeg';
import fenben7 from '../../images copy/ivermectin6.jpeg';
import fenben8 from '../../images copy/ivermectin7.jpeg';
import fenben9 from '../../images copy/ivermectin8.jpeg';
import fenben10 from '../../images copy/ivermectin9.jpeg';
import fenben11 from '../../images copy/ivermectin10.jpeg';
import fenben12 from '../../images copy/ivermectin11.jpeg';
import fenben13 from '../../images copy/ivermectin12.jpeg';
import ivermectin14 from '../../images copy/ivermectin13.jpeg';
import ivermectin15 from '../../images copy/ivermectin15.jpeg';
import ivermectin16 from '../../images copy/ivermectin16.jpeg';
import ivermectin17 from '../../images copy/ivermectin17.jpeg';
import "../../App.css";
const Ivermectin = ({t}) => {
  return (
    <>
      <Helmet>
        <title>{t("Ivermectin for Cancer")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("Documenting the efficacy of Ivermectin for Cancer in humans. Take a journey into the world of cancer research, in the pursuit of a cure.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0' }}>{t("Ivermectin for Cancer in Humans")}
      </h1>
      <div className='container'>
<iframe width="100%" height="600px" src="https://www.youtube.com/embed/Mmig5oGD1iE?si=JREWcIR3WiKSUSRO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                <img className='gridimag' src={ivermectin14} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={ivermectin15} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={ivermectin16} alt="pic" />
            </p>
            <p>
                <img className='gridimag' src={ivermectin17} alt="pic" />
            </p>
           <p>
            <a href="https://go.drugbank.com/drugs/DB00602">Source 1</a>   
           </p>
           <p>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7505114/">Source 2</a>   
           </p>
           <p>
            <a href="https://www.cancer.gov/research/participate/clinical-trials-search/v?id=NCI-2022-02421#:~:text=Ivermectin%20may%20help%20block%20the,with%20triple%20negative%20breast%20cancer.">Source 3</a>   
           </p>
           <p>
           <a href="https://www.sciencedirect.com/science/article/pii/S1043661820315152">Source 4</a>
           </p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Ivermectin; // Default export


