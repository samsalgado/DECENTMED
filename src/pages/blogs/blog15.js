import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import chirotreat from '../../images copy/surinameonboard.jpeg';
import "../../App.css";
const Blog15 = ({t}) => {
  return (
    <>
      <Helmet>
        <title>Orange Pill</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover the next great Bitcoin nation. BitcoinSranan is working toward making Suriname Bitcoin-friendly, learn more about Orange Pill." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
      <h1 style={{ textDecoration: 'underline', textAlign: 'center', margin: '20px 0', fontFamily: 'sans-serif' }}>{t('Orange Pill: Onboarding Suriname onto Bitcoin')}
      </h1>
      <a href="https://btcpay0.voltageapp.io/apps/WYdgLYf994wmcnonsQdN1UrWZ6K/crowdfund">
      <figure>
          <img className='gridimag' src={chirotreat} alt="logo" />
          <figcaption>Contribute to their Project</figcaption>
          </figure>
          </a>
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <div className='pr'>
        <p>
        When the world thinks of South America - Colombia, Brazil and Argentina are common nations mentioned. Lionel Messi, the Venezuela situation, Pablo Escobar or the Amazon Rainforest are referenced regarding South America. Most people cannot find Suriname on a map, let alone explain its history. Suriname gained its independence on November 25, 1975, from the Netherlands. Companies like BitcoinSranan are working toward making  Now, Suriname is on the path to becoming the next El Salvador and onboarding the nation on Bitcoin.
        </p>
        <p>
        Suriname was a colony of the Netherlands and the last country to gain its independence in South America. Similarly to other South American nations, Suriname faces the challenge of corruption. Currently (10/2/24), Suriname's exchange rate is SRD30.81 to $1. Comparatively, Africa, Asia, Canada, South America, and Europe have currencies less than the US. Dollar. The IMF and World Bank decimated their economies by loans with interest that nations could not repay. "The government of Suriname does not care about its people," according to the locals. Poverty and low education plague the country. Furthermore, there is still hope among the people of Suriname. Why? Because Bitcoin brings this country hope.
        </p>
        <p>
        What is Bitcoin? Bitcoin is both a blockchain and a Cryptocurrency.
         Think of the Bitcoin ecosystem as a pyramid built upon layers.
          Layer 1 of Bitcoin is the blockchain that operates as a value store or a saving mechanism.
           Layer 2 is where economies thrive, Surinamese company - <a href="https://btcpay0.voltageapp.io/apps/WYdgLYf994wmcnonsQdN1UrWZ6K/crowdfund">Bitcoin Sranan</a> is onboarding companies onto Lightning Network.
            Lightning Network sends micropayments in the form of SATS. Think of SATS as "change" to a dollar.
             As the price of Bitcoin grows, people will not pay for everyday items in Bitcoin. 
             Bitcoin is digital gold. One of the problems with gold is that it cannot be broken down 
             into smaller amounts for purchase. SATS enables people to break down Bitcoin for everyday transactions. 
             Recently, the team onboarded a beauty salon and tailor on the Bitcoin Lightning Network. 
             Those shops are not expensive, especially with Bitcoin priced at over $60,000.
              As Bitcoin grows over the next few years, its price could eclipse over a million dollars,
               whereas buying cars will be priced in SATS. For context, one Bitcoin is a million SATS.
                So if Bitcoin is $60,353.00 (10/3/2024), one SAT is worth 6 cents.
                 Additionally, Bitcoin transactions can take between 45-60 minutes to process. 
                 It is not efficient for micro-payments to take that long to process. 
                 For payroll or other large transactions that take long to process in traditional finance,
                  a 45-60 minute processing time is great. Imagine waiting 15 minutes to buy a meal at a fast food restaurant.
                   Introducing <a href="https://www.blink.sv/">Blink Wallet,</a> a Lightning wallet for circular economies throughout the globe (Central America, South America, Europe).
                    Via Blink and BitcoinSranan, companies are joining the Lighting Network every day. 
        </p>
        <p>
        As first-world nations continue to deteriorate, third-world nations that cling to Bitcoin will slowly grow. Countries like Suriname are on track to be the next El Salvador. The growth of the Bitcoin ecosystem will raise its price. Bitcoin adoption brings tourism, global appeal, advertising and a circular economy - sustainable with or without governments.
        </p>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog15; 
