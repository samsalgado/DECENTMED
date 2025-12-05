import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import bitcoin from "../../images copy/btc (1).png";
import "../../App.css";
import { useTransition } from "react";
const Bitcoin = () => {
const {t} = useTransition('common')
  return (
    <>
      <Helmet>
        <title>{t("What is Bitcoin")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("What is Bitcoin? Bitcoin is this simplified world, a way to transact and exchange person-to-person without a 'middleman.'")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', marginTop: '110px', fontFamily: 'sans-serif' }}>{t("What is Bitcoin?")}</h1>
          <img className='gridimag' src={bitcoin} alt="logo" />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
            <p>
            {t("Imagine a world where you can send money from your phone to pay your bills, accept security deposits, and transact with anyone as if they were right next to you. The world is less complicated than people think; dropping an apple determine gravity. As of today, systems are complex. There are multiple channels and entities in place overseeing the simplest of exchanges. Bitcoin is this simplified world, a way to transact and exchange person-to-person without a “middleman.”")}
            </p>
            <div className="container">
            <div className='video-container'>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/0nCQbNHj9io?si=S0L6VlWVdY7OXLaU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
           <p>
           {t("The concepts of digitized currency and transactions are not foreign and are primarily how the world already operates. According to the")}     <a href={'https://www.worldbank.org/en/news/press-release/2022/06/29/covid-19-drives-global-surge-in-use-of-digital-payments#:~:text=Two-thirds%20of%20adults%20worldwide,2017%20and%2042%25%20in%202011.'}>{t("World Bank")}</a>:
    {t("'2/3 of adults worldwide send or receive digital payments'. Banks have conducted fractional reserve banking since the 17th Century. Bitcoin implements the characteristics of digital currency, but you are your bank. Bitcoin is decentralized; there isn’t a need to put trust in a financial entity.")}
      </p>
      <p>
      {t("To keep things as simple as possible, Bitcoin does the best job of correcting the problems of the traditional financial system. Bitcoin is deflationary, meaning its value is set and does not lose its worth over time. Around the world, currencies are losing value at a rapid rate. Bitcoin does a great job at injecting financial equality into places most affected by hyperinflation - Africa, South America, Latin America, and parts of Asia.")}
        </p>
      <p>
      {t("Aside from its elements, freedom, and system correction, Bitcoin offers multiple profitability opportunities. One can start a business in Bitcoin, implement a Lightning payment channel and start a business without all of the necessary steps associated with setting up merchant payments. Developers can contribute to the Bitcoin repository and get sponsored as a contributor. Similarly to other cryptocurrencies, people can trade Bitcoin on exchanges. Finally, Bitcoin mining is a profitable opportunity that can generate massive returns and offer more security to the network.")}
        </p>
      <p>
      {t("Bitcoin is the future! It is the empowerment of people everywhere. Adoption of Bitcoin is inevitable; two islands(Prospera and Madeira) and two nations have officially adopted Bitcoin - El Salvador and the Central Republic of Africa. Bitcoin is a new world, one where people have autonomy and sovereignty.")}
        </p>
        </div>
        </div>
    </div>
      <Footer />
    </>
  );
};

export default Bitcoin; // Default export

