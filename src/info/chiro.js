import React from 'react'
import "./chiro.css";
import Collapsible from 'react-collapsible';
import stats from '../images copy/stats.jpg';
import treats from '../images copy/IMG_8939.jpeg';
import chirotreat from '../images copy/chirotreats.png';
import chiropractorstats from '../images copy/chiropractor-stats.png';
import { useTranslation } from 'react-i18next';
const Chiro = () => {
const {t} = useTranslation('common')
  return (
    <div className='container'>
      <h1>{t("Chiropractic")}</h1>
      <iframe
        width="100%"
        height={315}
        src="https://www.youtube.com/embed/s0Mz_vWmpzA?si=tL46rq6MRqdy2uqU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div><img src={stats} className="FACTS" alt="logo" /></div>

      <div className='par'>
        <p>
          {t('The war on drugs has been a colossal failure. Since its inception, the drug war has decimated countries, incarcerated black men, and overdose deaths increases. Since 1999, drug overdoses have tripled in the last two decades. Furthermore, the figures are from 2020, a period plagued by a global pandemic. With Fentanyl on the rise in the 2020s, the numbers are only increasing. Alternative treatments like Chiropractic are non-invasive and align the body. An estimated 80% of the population will have significant back pain.')}
        </p>
        <p>
          {t('An estimated 65% of American adults seek care for neck or back pain in their lifetime. Extrapolating that figure, 36% of Americans do not know if surgery is effective for their pain. Chiropractic care is 40% (estimate) more effective for treating back pain. Chiropractors remove neurological interference and restore proper biomechanics to the spine. Moreover, chiropractic care supports the immune system, improves sleep, improves behavior, improves brain development, and benefits development in both adults and children.')}
        </p>
      </div>
      <div className="title-container">
        <table className="collapsibles-table">
          <tbody>
            <Collapsible trigger={<th className="collapsible-trigger">{t('Chiropractic Benefits')}</th>}>
              <tr className="image-contain">
                <img alt='' />
                <img className='image' src={treats} alt='' />
                <img className='image' src={chirotreat} alt='' />
                <img alt='' />
              </tr>

            </Collapsible>

          </tbody>
        </table>

      </div>

    </div>

  )
}

export default Chiro;