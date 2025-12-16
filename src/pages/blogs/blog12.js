import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import montreal from '../../images copy/montreal.png';
import "../../App.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Blog12 = () => {
const {t} = useTranslation('common')
    return (
            <div style={{textAlign: 'center', marginTop: '80px', 
    paddingTop: '2rem'}}>

        <Helmet>
            <title>{t("Montreal Acupuncture")}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={t("Acupuncture Montreal: Showcasing practioners throughout the Quebec province and Montreal area as a whole. Read this article to learn more about Acupuncture.")} />
        </Helmet>
        <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: 'sans-serif' }}>{t("Acupuncture Montreal")}
      </h1>
      <img className='gridimag' src={montreal} alt="logo" />

    </div>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
            <p>
                {t("Mass immigration in Canada has its advantages and disadvantages; assimilation led to Canadians adopting Traditional Chinese Medicine (TCM). Acupuncture Montreal adoption began with British Columbia adding acupuncture to the")} <a href="https://pubmed.ncbi.nlm.nih.gov/25555597/">{t('Canadian Medical Services Plan in 2008.')}</a>  {t("Ontario and British Columbia have the highest adoption of acupuncture among the ten provinces of Canada. Regulation in Canada is varied among the provinces. For instance")}, <a href="https://acupuncturecanada.org/acupuncture-101/regulation-and-education/#:~:text=Medical%20doctors%20and%20dentists%20may,but%20Quebec%20and%20British%20Columbia.">{t('chiropractors can use acupuncture everywhere but in British Columbia and Quebec.')}</a> {t("British Columbia has most regulations regarding the provinces.")}
                 {t("Acupuncture Edmonton, in Alberta, is a great place for holistic practitioners in Canada to include acupuncture in their practice.")}
            </p>
            <p>
            {t("Healthcare in Canada is a mess, adding holistic practices like acupuncture can help combat issues in the healthcare space. Although it is not as popular as other cities in Canada, Montreal has some great options for people seeking acupuncture treatment. For example, practioner")} <a href="https://acupuncture-clinic.ca/">{t('Xiao Lei Wang,')}</a> {t("who practices moxibustion and cupping ('fire suckers'). There are many practitioners and different ways to practice acupuncture. Indeed, practitioner")} <a href="https://japanese-acupuncture-montreal.com/services/toyohari-acupuncture/">{t('David Goldman')}</a>  {t("practices Toyohari Acupuncture or Meridan Therapy without insertion (millimeters above insertion points). The body has an immense regenerative potential to heal itself; herbalists believe that certain plants work in conjunction with the body to induce healing.")} <a href="https://www.acupuncturesinosante.com/home_fr.html">{t('Sino-Santé Clinic')}</a> {t("uses Chinese herbs in conjunction with acupuncture treatment.")}
            </p>
            <p>
            {t("Acupuncture in Montreal started with an acupuncture boom in Ontario. Canada has seen an influx of Chinese immigrants and culture. One benefit is the mass adoption of TCM and acupuncture throughout the region. Acupuncture helps with many ailments: fertility,")} <a href="https://www.monacupuncteur.ca/en?pgid=lxqtnlqe-c3dea2c1-e155-4057-b8c1-feb24da43a55">{t('bruxism,')},</a> {t("stress, pain relief and more. In a nation like Canada, acupuncture plays a pivotal role in fighting ailments that traditional medicine would not address.")}
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
        href="https://decentmed.org/acupuncture" 
        target="_blank"
      >
        {t("Try Acupuncture")}
      </Button>
        </div>
        <Footer />
        </div>
    )
};
export default Blog12;
