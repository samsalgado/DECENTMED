import React, {useEffect, useState, useCallback} from 'react';
import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import ReactPlayer from 'react-player';
import cancerimg from "../../images copy/cancerimg.png";
import "../../App.css";
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { nip19 } from 'nostr-tools';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
const Blog10 = () => {
  const { t } = useTranslation('common');
  const [showModal, setShowModal] = useState(false);  
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
        The Curious Case of Cancer: Everyday Fruit for Prevention
        Cancer Cases, Deaths in Men Predicted to Surge by 2050. Currently, cancer is responsible for 1 in 5 deaths in the world. There is no cure for cancer, and statisticians expect cancer deaths to rise. What if I told you that the cure to cancer is found in the foods we eat? The number one fast food chain in the world is McDonald’s. Canola oil was first created in the early 1970s as a natural oil. But in 1995, Monsanto created a genetically modified version of canola oil. By 2009, over 90 percent of the Canadian canola oil crop was genetically engineered. Dr. Sebi theorized that seed oils are carcinogenic once heated. Let’s explore the relationship between food, cancer, and fruits with powerful preventive properties.

Veganism is steadily criticized online. The Standard American Diet has convinced Americans that mass consumption of dairy and meat is paramount to health.African Americans are more prone to prostate cancer (and general cancer) than any other race.Ironically, African Americans consume more meat than other races. I am not a Nutritionist, but researchers, Nutritionists, and Herbalists universally agree that disease stems from deficiency. The disagreement stems from protein consumption and the best sources of protein. Furthermore, regardless of your perspective on veganism, star athletes Chris Paul (3rd oldest active NBA Player) and Serena Williams (23 Grand Slam Titles [2nd most]) indicate you can perform efficiently by being plant-based. Future Hall of Fame Quarterback Tom Brady is primarily plant-based, eating “80% plant-based, 20% animal-based”. Regarding dairy, “80% of African and Native Americans are lactose intolerant”, diets high in meat and dairy do not provide the necessary vitamins and nutrients that plants do. Moreover, all pharmaceuticals have a plant root.
How many times have you eaten an apricot seed? Dr. Ernst T. Krebs Jr. found that cancer stems from a deficiency in a compound in the nitriloside family. Specifically the Prunus Rosacea family: apricot seeds, blackthorn, bitter almonds, peaches, plums, cherries and nectarines. Apricot seeds have a high amount of nitrilosides. At the Sloan-Kettering Cancer Center, researcher Dr. Kanematsu Sugiura found five results: “Laetrile stopped metastasis (cancer spreading) in mice, It improved their general health, It inhibited the growth of small tumors, It provided relief from pain, It acted as cancer prevention”. Do apricot seeds have cyanide? Roasted apricot seeds have not shown a poisonous effect. Cases involving cyanide poisoning with apricot seeds are usually cloaked in mystery and multi-faceted. Compare two societies, one that consumes high amounts of apricot seeds and one that consumes none.

Described in World Without Cancer: The Story of Vitamin B17, “the Hunza tribe eat on average 30–50 apricot seeds in one sitting”, and can live on average “120 years”. Notably, B17 is banned in the United States. Americans live between 77–78 years on average. A vast difference, the “traditional Eskimo diet is high in nitriloside from the stomach of caribou and reindeer meat from tundra and Arrowgrass (Triglochin Maritima)”. Notably, author Vilhjalmur Stefanson (Cancer: Disease of Civilization? An Anthropological and Historical Study) found: “When the Eskimos went to other regions and abandoned their traditional diet — cancer began to emerge.” B17 is banned as a cancer treatment in the United States, Australia, Canada and Europe. Ironically, Australia, New Zealand, the United States and Canada lead the world in cancer deaths. Countries like India have lower cancer rates because of their approach to medicine and plant-based diets. Sudan has the lowest cancer rates in the world. Ironically, Sudan does not have a McDonald’s and consumes diets rich in spices. Dr. Ernst T. Krebs Jr. recommends people eat “a minimum of 50 milligrams of B17 daily”.

B17 contains 'two units of glucose, one of benzaldehyde and one of cyanide (beta-glucosidase),' according to Griffin and Krebs - 'the unlocking enzyme is safe for the body but kills cancer cells'. Although traditional medicine vehemently disagrees about the efficacy of vitamin B17, the medical industry does agree that cancer loves sugar. Orthodox medicine believes that the renowned researcher - Dr. Kanematsu Sugiura, was correct in his findings about chemotherapy. Chemotherapy is the standard cancer treatment. Furthermore, traditional medicine sees no benefit in Laetrile - claiming that it can poison you from cyanide. Conversely, B12 (used throughout the USA) contains cyanide. According to Griffin, 'B17 stimulates hemoglobin or red blood cells, destroys cancer cells, nourishes non-cancer cells and can help with sickle-cell anemia'. The major difference in schools of thought is how the body should respond to disease. Orthodox medicine tends to treat symptoms of the problem. Conversely, Natural medicine believes that the body is an interconnected system - where the root cause is addressed instead of the symptom. Nutrition and addressing deficiencies or pharmaceuticals addressing certain conditions, these opposed schools of medicine have shaped the current state of healthcare in the United States.

The FDA banned Laetrile in 1980,three years after Dr. Suguira noted that it could kill cancer cells (72–77). The major reason B17 is illegal is from potential cyanide poisoning.Dr. Krebs claimed, 'Roasted seeds destroy the unlocking enzyme - 'beta-glucosidase, high in cyanide'.Griffin claims that the cyanide claim was due to 'discrediting vitamin B17'. It is important to note that cigarettes, alcohol, seed oils, Red 40 and other dyes are toxic and cause harm to the human body. McDonald's is located in every state and capital (except Montpelier) in the United States. Why does the FDA ban Laetrile for cyanide but does not ban vapes for being toxic to Americans? Humans are resistant to change - the doctor who proposed washing your hands before childbirth was fired. Medical institutions have a standard and do not want doctors to start straying from the norm. There is money in medicine - it is a billion-dollar industry. Most doctors and nurses do not know that the Flexner Report is the curriculum of modern medicine. Why is there no cure for cancer? In short, politics - lives are at stake, and institutions require 100% assurance that the treatment is safe and effective before being rolled out to the public.

What if I live in the United States, Canada, Australia or Europe and cannot access B17? Ty Bollinger and his wife Charlene recently released a documentary about cancer. In the fascinating documentary, these two plants: black raspberry and figs, were depicted as great for cancer prevention. How did we overlook fruits in every major supermarket in the world? Black raspberry is native to E. North America; the South and Eastern North America have higher cancer rates. Black raspberries have high amounts of antioxidants and anthocyanins (‘ORAC off the charts’). The mixture of ellagic acid can kill cancer cells. The science is mixed, but if some doctors and researchers determine it has preventive potential — consume black raspberry. Next, figs contain fig latex, “this milky substance is a strong anti-cancer agent”.The study shows that fig latex has a strong anti-cancer effect on liver and brain cancers.” What about chemotherapy? Do you know anyone who has died of black raspberry or fig overdose? In the previous paragraph, we reviewed B17, there are no major publications or reports about overdose deaths involving apricot seeds.Chemotherapy causes death in more than 25% of cancer patientsone of many reports throughout the years. Another study found.We identified 931 deaths and 659 patients treated with chemotherapy. Forty-three patients died within 30 days of receiving chemotherapy. These 43 patients represent 6% of those given chemotherapy during that period and 4.6% of all deaths under our service.That study was done in New Zealand, one of the few countries with fewer cancer cases than the United States.

Notably, the cancer treatments of bothHarry Hoxsey and Max Gerson involving natural remedies, detoxification, and green diets are practiced in Mexico to this day. Additionally, B17 is available in Mexico for cancer patients and the general public. What are the results? According to recent data, Mexico’s death rate from cancer is 37 percent that of the United States. This rate, though, clashes with the perceptions of the Mexican public and of medical professionals, who see cancer far more frequently. This article notes that the statistics were skewed because of poor record-keeping. Cancer statistics have always left the public and researchers baffled. For instance in World Without Cancer: The Story of Vitamin B17 the results of B-17 vs. Control Group (Saline solution) were as follows: “The small tumors stopped growing 40% of the time in the saline control group and only 27% of the time in the treated group”. Not to mention, Ty Bollinger and G. Edward Griffin are deemed crocks and conspiracy theorists for publishing literature and shining light on cancer treatments.

In a world of misinformation, focus on the undeniable properties of what you are eating. The medicinal properties of apricot seeds, black raspberries and figs are undeniable. The controversy occurs when you deem a fruit or product as a treatment. None of those fruits are toxic or harmful, put down the hamburger and prioritize the plants. The body can heal itself, focus on eating plants that prevent disease before they occur.
    `;
      const event = {
        kind: 1,
        created_at: Math.floor(Date.now() / 1000),
        tags: [
          ["t", "health"],
          ["t", "cancer"],
          ["t", "nutrition"]
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

  return (
    <>
      <Helmet>
        <title>{t('The Curious Case of Cancer: Everyday Fruit for Prevention')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Many medical professions state that diseases like cancer exist from a vitamin B and vitamin B17 deficiency. Explore The Curious Case of Cancer: Everyday Fruit for Prevention." />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
        <h1 style={{ textDecoration: 'underline', textAlign: 'center',  fontFamily: 'sans-serif' }}>{t('The Curious Case of Cancer: Everyday Fruit for Prevention')}</h1>
        <img className='gridimag' src={cancerimg} alt="logo" />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className='pr'>
          <p>

            <a href="https://www.medscape.com/viewarticle/cancer-cases-deaths-men-predicted-surge-2050-2024a1000frl?form=fpf">{t(`Cancer Cases, Deaths in Men Predicted to Surge by 2050. Currently, cancer is responsible for 1 in 5 deaths in the world.`)}</a> {t(`There is no cure for cancer, and statisticians expect cancer deaths to rise. What if I told you that the cure to cancer is found in the foods we eat?`)} {t('The number one fast food chain in the world is McDonald’s.')} <a href="https://www.fuckcancer.org/canolaoilhealthrisks/">{t('Canola oil was first created in the early 1970s as a natural oil. But in 1995, Monsanto created a genetically modified version of canola oil. By 2009, over 90 percent of the Canadian canola oil crop was genetically engineered. Dr. Sebi theorized that seed oils are carcinogenic once heated.')}</a> {t('Let’s explore the relationship between food, cancer, and fruits with powerful preventive properties.')}
          </p>
          <p>
            {t('Veganism is steadily criticized online. The Standard American Diet has convinced Americans that mass consumption of dairy and meat is paramount to health.')}
            <a href="https://zerocancer.org/black-men#:~:text=Black%20and%20African%20American%20men,prostate%20cancer%20than%20white%20men.">
              {t('African Americans are more prone to prostate cancer (and general cancer) than any other race.')}
            </a>
            {t(`Ironically, African Americans consume more meat than other races. I am not a Nutritionist, but researchers, Nutritionists, and Herbalists universally agree that disease stems from deficiency. The disagreement stems from protein consumption and the best sources of protein. Furthermore, regardless of your perspective on veganism, star athletes Chris Paul (3rd oldest active NBA Player) and Serena Williams (23 Grand Slam Titles [2nd most]) indicate you can perform efficiently by being plant-based. Future Hall of Fame Quarterback Tom Brady is primarily plant-based, eating “80% plant-based, 20% animal-based”. Regarding dairy, “80% of African and Native Americans are lactose intolerant”, diets high in meat and dairy do not provide the necessary vitamins and nutrients that plants do. Moreover, all pharmaceuticals have a plant root.`)}
          </p>
    <br></br>
            <div className='video-container'>
              <ReactPlayer
                url="https://www.dropbox.com/scl/fi/40iuefd3qdbo0h34vssq2/The-Curious-Case-of-Cancer-Vitamin-B17.mp4?rlkey=pejf34o2ndr5erb9ksde3qbkz&st=oibbui7r&dl=0" // Replace with your video URL
                width='100%'
                height='400px'
                controls={true}
              />
                      <Button className="custom-btn" onClick={() => setShowModal(true)}>
                        {t("Transcript")}
                      </Button>
                      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered className="custom-modal">
                    <Modal.Header closeButton>
                      <Modal.Title>{t("Transcript")}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>{t("transcriptt")}</p>
                      <p>{t("transcriptt1")}</p>
                      <p>{t("transcript2")}</p>
                      <p>{t("transcript3")}</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {t("Close")}
                      </Button>
                    </Modal.Footer>
                  </Modal>

              <br></br>
          <p> {t(`How many times have you eaten an apricot seed? Dr. Ernst T. Krebs Jr. found that cancer stems from a deficiency in a compound in the nitriloside family. Specifically the Prunus Rosacea family: apricot seeds, blackthorn, bitter almonds, peaches, plums, cherries and nectarines. Apricot seeds have a high amount of nitrilosides. At the Sloan-Kettering Cancer Center, researcher Dr. Kanematsu Sugiura found five results: Laetrile stopped metastasis (cancer spreading) in mice, It improved their general health, It inhibited the growth of small tumors, It provided relief from pain, It acted as cancer prevention. Do apricot seeds have cyanide? Roasted apricot seeds have not shown a poisonous effect. Cases involving cyanide poisoning with apricot seeds are usually cloaked in mystery and multi-faceted. Compare two societies, one that consumes high amounts of apricot seeds and one that consumes none.`)} </p>
           
          <p>
            {t(`Described in World Without Cancer: The Story of Vitamin B17, “the Hunza tribe eat on average 30–50 apricot seeds in one sitting”, and can live on average “120 years”. Notably, B17 is banned in the United States. Americans live between 77–78 years on average. A vast difference, the “traditional Eskimo diet is high in nitriloside from the stomach of caribou and reindeer meat from tundra and Arrowgrass (Triglochin Maritima)”. Notably, author Vilhjalmur Stefanson (Cancer: Disease of Civilization? An Anthropological and Historical Study) found: “When the Eskimos went to other regions and abandoned their traditional diet — cancer began to emerge.” B17 is banned as a cancer treatment in the United States, Australia, Canada and Europe. Ironically, Australia, New Zealand, the United States and Canada lead the world in cancer deaths. Countries like India have lower cancer rates because of their approach to medicine and plant-based diets.`)} <a href="https://blog.dana-farber.org/insight/2022/01/which-countries-have-the-highest-and-lowest-cancer-rates/">{t('Sudan has the lowest cancer rates in the world.')}</a> {t(`Ironically, Sudan does not have a McDonald’s and consumes diets rich in spices. Dr. Ernst T. Krebs Jr. recommends people eat “a minimum of 50 milligrams of B17 daily”.`)}</p>
          <p>
            {t(`B17 contains 'two units of glucose, one of benzaldehyde and one of cyanide (beta-glucosidase),' according to Griffin and Krebs - 'the unlocking enzyme is safe for the body but kills cancer cells'. Although traditional medicine vehemently disagrees about the efficacy of vitamin B17, the medical industry does agree that cancer loves sugar. Orthodox medicine believes that the renowned researcher - Dr. Kanematsu Sugiura, was correct in his findings about chemotherapy. Chemotherapy is the standard cancer treatment. Furthermore, traditional medicine sees no benefit in Laetrile - claiming that it can poison you from cyanide. Conversely, B12 (used throughout the USA) contains cyanide. According to Griffin, 'B17 stimulates hemoglobin or red blood cells, destroys cancer cells, nourishes non-cancer cells and can help with sickle-cell anemia'. The major difference in schools of thought is how the body should respond to disease. Orthodox medicine tends to treat symptoms of the problem. Conversely, Natural medicine believes that the body is an interconnected system - where the root cause is addressed instead of the symptom. Nutrition and addressing deficiencies or pharmaceuticals addressing certain conditions, these opposed schools of medicine have shaped the current state of healthcare in the United States.`)}
          </p>
            </div>
          <p>{t(`The FDA banned Laetrile in 1980,three years after Dr. Suguira noted that it could kill cancer cells (72–77). The major reason B17 is illegal is from potential cyanide poisoning.Dr. Krebs claimed, 'Roasted seeds destroy the unlocking enzyme - 'beta-glucosidase, high in cyanide'.Griffin claims that the cyanide claim was due to 'discrediting vitamin B17'. It is important to note that cigarettes, alcohol, seed oils, Red 40 and other dyes are toxic and cause harm to the human body. McDonald's is located in every state and capital (except Montpelier) in the United States. Why does the FDA ban Laetrile for cyanide but does not ban vapes for being toxic to Americans? Humans are resistant to change - the doctor who proposed washing your hands before childbirth was fired. Medical institutions have a standard and do not want doctors to start straying from the norm. There is money in medicine - it is a billion-dollar industry. Most doctors and nurses do not know that the Flexner Report is the curriculum of modern medicine. Why is there no cure for cancer? In short, politics - lives are at stake, and institutions require 100% assurance that the treatment is safe and effective before being rolled out to the public.`)}</p>
          <p>
            {t(`What if I live in the United States, Canada, Australia or Europe and cannot access B17? Ty Bollinger and his wife Charlene recently released a documentary about cancer. In the fascinating documentary, these two plants: black raspberry and figs, were depicted as great for cancer prevention. How did we overlook fruits in every major supermarket in the world? Black raspberry is native to E. North America; the South and Eastern North America have higher cancer rates. Black raspberries have high amounts of antioxidants and anthocyanins (‘ORAC off the charts’). The mixture of ellagic acid can kill cancer cells. The science is mixed, but if some doctors and researchers determine it has preventive potential — consume black raspberry. Next, figs contain fig latex, “this milky substance is a strong anti-cancer agent”.`)}<a href="https://www.nutripanda.com/fighting-cancer-series-bless-figs#:~:text=The%20study%20shows%20that%2C%20in,on%20liver%20and%20brain%20cancers.">{t(`The study shows that fig latex has a strong anti-cancer effect on liver and brain cancers.”`)}</a> {t(`What about chemotherapy? Do you know anyone who has died of black raspberry or fig overdose? In the previous paragraph, we reviewed B17, there are no major publications or reports about overdose deaths involving apricot seeds.`)}<a href="https://pharmatimes.com/news/chemotherapy_causes_death_in_more_than_25_of_cancer_patients_986391/">{t(`Chemotherapy causes death in more than 25% of cancer patients`)}</a>{t(`one of many reports throughout the years. Another study found.`)}<a href="https://www.ejcancer.com/article/S0959-8049(16)32023-8/abstract#:~:text=Findings%3A%20We%20identified%20931%20deaths,all%20deaths%20under%20our%20service.">{t(`We identified 931 deaths and 659 patients treated with chemotherapy. Forty-three patients died within 30 days of receiving chemotherapy. These 43 patients represent 6% of those given chemotherapy during that period and 4.6% of all deaths under our service.`)}</a>{t(`That study was done in New Zealand, one of the few countries with fewer cancer cases than the United States.`)}

          </p>
          <p>
 {t('Notably, the cancer treatments of both')}<a href="https://thetruthaboutcancer.com/howard-hoxsey-natural-cancer-cures/">{t('Harry Hoxsey')} </a> {t('and')} <a href="https://gerson.org/"> {t('Max Gerson')} </a> {t('involving natural remedies, detoxification, and green diets are practiced in Mexico to this day. Additionally, B17 is available in Mexico for cancer patients and the general public. What are the results?')} <a href="https://www.thinkglobalhealth.org/article/data-deficiencies-cancer-care-mexico#:~:text=According%20to%20recent%20data%2C%20Mexico%27s,see%20cancer%20far%20more%20frequently."> {t(`According to recent data, Mexico’s death rate from cancer is 37 percent that of the United States. This rate, though, clashes with the perceptions of the Mexican public and of medical professionals, who see cancer far more frequently.`)} </a> {t('This article notes that the statistics were skewed because of poor record-keeping. Cancer statistics have always left the public and researchers baffled. For instance in World Without Cancer: The Story of Vitamin B17 the results of B-17 vs. Control Group (Saline solution) were as follows: “The small tumors stopped growing 40% of the time in the saline control group and only 27% of the time in the treated group”. Not to mention, Ty Bollinger and G. Edward Griffin are deemed crocks and conspiracy theorists for publishing literature and shining light on cancer treatments.')} 
</p>
          <p> {t('In a world of misinformation, focus on the undeniable properties of what you are eating. The medicinal properties of apricot seeds, black raspberries and figs are undeniable. The controversy occurs when you deem a fruit or product as a treatment. None of those fruits are toxic or harmful, put down the hamburger and prioritize the plants. The body can heal itself, focus on eating plants that prevent disease before they occur.')} </p>
      
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
        href="https://decentmed.org/cancer" 
        target="_blank"
      >
        {t("Explore Cancer Information")}
      </Button>
      </div>
      <Footer />
    </>
  );
};

export default Blog10; // Default export

