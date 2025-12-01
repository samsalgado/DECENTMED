import React, {useEffect, useCallback} from 'react';
import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import "../../App.css";
import hhoxsey from '../../images copy/IMG_6431.jpeg';
import fenben from '../../images copy/Fenbendazole.png';
import ReactPlayer from 'react-player';
import Collapsible from 'react-collapsible';
import essence from "../../images copy/essence.png";
import IVERMECTINCANCER from '../../images copy/IVERMECTINCANCER.jpeg';
import { useTranslation } from 'react-i18next';
import { nip19 } from 'nostr-tools';
import { getPublicKey, finalizeEvent, SimplePool } from 'nostr-tools';
const Blog6 = () => {
  const { t } = useTranslation('common');
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
               B vitamins convert food into energy and help to strengthen the immune system.
          Moreover, the vitamin B Complex is a mixture of various B vitamins.
         B6(Pyridoxin) is an essential nutrient for maintaining red blood cell health.
       The body does not naturally produce B6. Pasilla, Ancho pepper, sunflower seeds and Whey protein isolate are highest in B6.
            Vitamin B12 is the most common B vitamin; it converts carbohydrates and fats into energy for proteins.
          Vitamin B12 deficiency can result in multiple health conditions - cancer, anemia, fatigue, impaired neurological function, joint pain and more.
            Aside from injection, B12 can be in clams, oysters, mussels, crabs and sardines. Vitamin B17, or Laetrile, is the most controversial vitamin (component) B family.
            According to the book: (https://www.amazon.com/World-Without-Cancer-Story-Vitamin/dp/0912986506) "World Without Cancer: The Story of Vitamin B17" by G. Edward Griffin, 'Vitamin B17(Laetrile) can destroy cancer cells'. In this article, we will explore the components of Laetrile, the book's claim and why vitamin B17 or Laetrile is illegal in the United States.
         
            What are the natural alternatives to Rogaine? Dr. Sebi argued that people should not eat cooked oils, like Palm or soybeans. However, the oil is extracted from American Palm Oil or Batana oil is extracted from the nuts and forms a rich in antioxidants and vitamin E. According to pfaf.org: 'the oil from nuts is expected to stimulate hair loss and combat dandruff'. Does batana oil work? The Tawira tribe is known as 'people of beautiful hair', and attributes their hair success to batana oil. Dr. Sebi claimed, 'The enzymes in it sink into the hair and revive the dead hair follicles', pairing scalp application of batana oil and a vegetarian diet maximizes results (according to Dr. Sebi).
        
        It is important to note that Dr. Sugiura was not the only doctor who discovered Laetrile-cured mice. 'Dr. Lloyd Schloen published a 100% cure rate in Swiss albino mice'. Regarding credibility, Dr. Sugiura is a pioneer of cancer research and one of the most well-regarded doctors in history. According to biographies and reports, Dr. Sugiura had retired a decade before his findings on Laetrile. Two years before his death, Dr. Sugiura stated: 'There's something funny here. The small tumors stopped growing 40% of the time in the saline control group and only 27% of the time in the treated group', regarding a study with Laetrile. The results were: 'Laetrile was found to possess neither preventive, nor tumore-regressant, nor anti-metastatic, nor curative anti-cancer activity'. Dr. Sigiura 'stuck' to his claims about Laetrile.
          
          What is Laetrile?
           In 1952, Dr. Ernst T. Krebs Jr. found that diseases like cancer stem from deficiency,
         specifically a compound in the nitroloside family.
      Prevalent in fruits in the Prunus Rosacea family - bitter almond, apricot, blackthorn, cherry, nectarine, peach and plum'.
            Because these foods have similar properties of B-complex vitamins - he called it 'vitamin B17'
            Does the disease stem from a lack of nutrition? Imagine a world where consuming
          peach and apricot seeds' bolsters your nutrition to fight disease!
           If one believes the body has an immense regenerative potential to heal itself,
          then fighting disease begins with food.
            Dr. George M. Briggs (Professor of Nutrition at the University of California) noted:"
            The typical American diet is a national disaster … If I fed it to pigs or cows, without adding vitamins and other supplements,
            I could wipe out the livestock industry". Griffin and many other doctors theorize that 'disease stems from vitamin B deficiency,
            specifically vitamin B17. Cancer is on the rise in the US, and nutrition is falling. There are far more McDonald's and other fast
            food chains than farmer's markets and Whole Foods stores. The (https://www.verywellhealth.com/the-hunza-valley-the-original-shangri-la-2224049) Hunza people of Pakistan live longer despite living in an isolated
            {t("region without the vast resources of the US. What is the secret to their vitality?
            Apricots, consistent nitriloside foods, and a mainly plant-based diet.
            The average lifespan of an American is '78 years'. Conversely, Hunza people can live to 120 years!
            How does a tribe from a developing country outlive the greatest nation in the world?
  The Hunza tribe places a strong emphasis on vitamin A consumption and overall nutrition.
            The United States values taste over nutrition and do not see a benefit in mass consumption of nitrilosides.
            Author Vilhjalmur Stefanson stated in (https://www.amazon.com/Cancer-disease-civilization-anthropological-historical/dp/B0007DXZQG) "Cancer: Disease of Civilization? An Anthropological and Historical Study" 'traditional Eskimo diet is high in nitriloside from the stomach of caribou and reindeer meat from tundra and Arrowgrass (Triglochin Maritima)'")}. {t("Notably, when the Eskimos went to other regions and abandoned their traditional diet - cancer began to emerge. The pancreas plays a key role in digestion and blood sugar regulation. Notably, your chances of cancer increase with diabetes - obesity results in many diseases, including diabetes (type 2). Griffin and many other doctors determine that diet affects our health - what you eat determines your health.
        
      B17 contains 'two units of glucose, one of benzaldehyde and one of cyanide (beta-glucosidase),' according to Griffin and Krebs - 'the unlocking enzyme is safe for the body but kills cancer cells'. Although traditional medicine vehemently disagrees about the efficacy of vitamin B17, the medical industry does agree that cancer loves sugar. Orthodox medicine believes that the renowned researcher - Dr. Kanematsu Sugiura, was correct in his findings about chemotherapy. Chemotherapy is the standard cancer treatment. Furthermore, traditional medicine sees no benefit in Laetrile - claiming that it can poison you from cyanide. Conversely, B12 (used throughout the USA) contains cyanide. According to Griffin, 'B17 stimulates hemoglobin or red blood cells, destroys cancer cells, nourishes non-cancer cells and can help with sickle-cell anemia'. The major difference in schools of thought is how the body should respond to disease. Orthodox medicine tends to treat symptoms of the problem. Conversely, Natural medicine believes that the body is an interconnected system - where the root cause is addressed instead of the symptom. Nutrition and addressing deficiencies or pharmaceuticals addressing certain conditions, these opposed schools of medicine have shaped the current state of healthcare in the United States.
          
       The FDA banned Laetrile in 1980,three years after Dr. Suguira noted that it could kill cancer cells (72–77). The major reason B17 is illegal is from potential cyanide poisoning. Dr. Krebs claimed, 'Roasted seeds destroy the unlocking enzyme - 'beta-glucosidase, high in cyanide'.Griffin claims that the cyanide claim was due to 'discrediting vitamin B17'. It is important to note that cigarettes, alcohol, seed oils, Red 40 and other dyes are toxic and cause harm to the human body. McDonald's is located in every state and capital (except Montpelier) in the United States. Why does the FDA ban Laetrile for cyanide but does not ban vapes for being toxic to Americans? Humans are resistant to change - the doctor who proposed washing your hands before childbirth was fired. Medical institutions have a standard and do not want doctors to start straying from the norm. There is money in medicine - it is a billion-dollar industry. Most doctors and nurses do not know that the Flexner Report is the curriculum of modern medicine. Why is there no cure for cancer? In short, politics - lives are at stake, and institutions require 100% assurance that the treatment is safe and effective before being rolled out to the public.
        
  I recently spoke with a member of the medical community, who stated: 'Laetrile has not shown to be effective'. Emphasizing that 'everyone's body is different, and fighting disease begins with lowering cortisol levels (stress)'. People should be preventive, slowly shifting their nutrition and including vitamin B and other vitamins into their diet. However, he does acknowledge that disease can occur from a vitamin deficiency. Supplements and vitamins play a role in getting the body what it lacks.

  In summary, disease stems from a deficiency in vitamin B (A, D, E, K) - vitamin B consumption benefits the body. B17 (Laetrile) is a controversial component similar to vitamin B and primarily found in 'bitter almond, apricot, blackthorn, cherry, nectarine, peach and plum'; adding these fruits to your diet is no harm and could benefit your nutrition. Dr. Krebs claimed, 'Healthy adults should get a minimum of 50 milligrams of B17 daily'. Regarding cancer, Laetrile is not a treatment method in the global West - Europe, USA, and Canada. However, alternative cancer treatment in Mexico and other developing nations uses Laetrile. The body is an interconnected system. Furthermore, people should value nutrition -including vitamin B and complex B vitamins for disease prevention.
    `;
      const event = {
        kind: 1,
        created_at: Math.floor(Date.now() / 1000),
        tags: [
          ["t", "health"],
          ["t", "cancer"],
          ["t", "vitamin B17"]
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
        <title>{t("Vitamin B17")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t("Many medical professions state that diseases like cancer exist from a vitamin B and vitamin B17 deficiency. Explore the mysteries behind vitamin B17.")} />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className='container'>
        <h1 style={{ textDecoration: 'underline', textAlign: 'center', marginTop: '110px', fontFamily: 'sans-serif' }}>{t("Vitamin B: Vitamin B17 - The Mysterious Case of Cancer")}
        </h1>
        <div className='container'>
            <ReactPlayer
              url="https://www.dropbox.com/scl/fi/40iuefd3qdbo0h34vssq2/The-Curious-Case-of-Cancer-Vitamin-B17.mp4?rlkey=pejf34o2ndr5erb9ksde3qbkz&st=oibbui7r&dl=0" // Replace with your video URL
              width='100%'
              height='400px'
              controls={true}
            />
        </div>

      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className='pr'>
        
          <p>
            {t("B vitamins convert food into energy and help to strengthen the immune system.")}
            {t("Moreover, the vitamin B Complex is a mixture of various B vitamins.")}
            {t("B6(Pyridoxin) is an essential nutrient for maintaining red blood cell health.")}
            {t("The body does not naturally produce B6. Pasilla, Ancho pepper, sunflower seeds and Whey protein isolate are highest in B6.")}
            {t("Vitamin B12 is the most common B vitamin; it converts carbohydrates and fats into energy for proteins.")}
            {t("Vitamin B12 deficiency can result in multiple health conditions - cancer, anemia, fatigue, impaired neurological function, joint pain and more.")}
            {t("Aside from injection, B12 can be in clams, oysters, mussels, crabs and sardines. Vitamin B17, or Laetrile, is the most controversial vitamin (component) B family.")}
            {t("According to the book")} <span style={{ fontStyle: 'italic' }}><a href="https://www.amazon.com/World-Without-Cancer-Story-Vitamin/dp/0912986506">{t("World Without Cancer: The Story of Vitamin B17")}   </a></span> {t("by G. Edward Griffin, 'Vitamin B17(Laetrile) can destroy cancer cells'. In this article, we will explore the components of Laetrile, the book's claim and why vitamin B17 or Laetrile is illegal in the United States.")}
          </p>
          <p>
            {t(`What are the natural alternatives to Rogaine? Dr. Sebi argued that people should not eat cooked oils, like Palm or soybeans. However, the oil is extracted from American Palm Oil or Batana oil is extracted from the nuts and forms a rich in antioxidants and vitamin E. According to pfaf.org: 'the oil from nuts is expected to stimulate hair loss and combat dandruff'. Does batana oil work? The Tawira tribe is known as 'people of beautiful hair', and attributes their hair success to batana oil. Dr. Sebi claimed, 'The enzymes in it sink into the hair and revive the dead hair follicles', pairing scalp application of batana oil and a vegetarian diet maximizes results (according to Dr. Sebi)`)}
          </p>
          <p>
            {t("It is important to note that Dr. Sugiura was not the only doctor who discovered Laetrile-cured mice. 'Dr. Lloyd Schloen published a 100% cure rate in Swiss albino mice'. Regarding credibility, Dr. Sugiura is a pioneer of cancer research and one of the most well-regarded doctors in history. According to biographies and reports, Dr. Sugiura had retired a decade before his findings on Laetrile. Two years before his death, Dr. Sugiura stated: 'There's something funny here. The small tumors stopped growing 40% of the time in the saline control group and only 27% of the time in the treated group', regarding a study with Laetrile. The results were: 'Laetrile was found to possess neither preventive, nor tumore-regressant, nor anti-metastatic, nor curative anti-cancer activity'. Dr. Sigiura 'stuck' to his claims about Laetrile.")}
          </p>
          <p>
            {t("What is Laetrile?")}
            {t("'In 1952, Dr. Ernst T. Krebs Jr. found that diseases like cancer stem from deficiency,")}
            {t("specifically a compound in the nitroloside family.")}
            {t("Prevalent in fruits in the Prunus Rosacea family - bitter almond, apricot, blackthorn, cherry, nectarine, peach and plum'.")}
            {t("Because these foods have similar properties of B-complex vitamins - he called it 'vitamin B17'.")}
            {t("Does the disease stem from a lack of nutrition? Imagine a world where consuming")}
            {t("'peach and apricot seeds' bolsters your nutrition to fight disease!")}
            {t("If one believes the body has an immense regenerative potential to heal itself,")}
            {t("then fighting disease begins with food.")}
            {t("Dr. George M. Briggs (Professor of Nutrition at the University of California) noted:")}
            {t("'The typical American diet is a national disaster … If I fed it to pigs or cows, without adding vitamins and other supplements,")}
            {t("'I could wipe out the livestock industry'. Griffin and many other doctors theorize that 'disease stems from vitamin B deficiency,")}
            {t("specifically vitamin B17. Cancer is on the rise in the US, and nutrition is falling. There are far more McDonald's and other fast")}
            {t("food chains than farmer's markets and Whole Foods stores. The")} <a href="https://www.verywellhealth.com/the-hunza-valley-the-original-shangri-la-2224049">{t("Hunza people")}</a> {t("of Pakistan live longer despite living in an isolated")}
            {t("region without the vast resources of the US. What is the secret to their vitality?")}
            {t("Apricots, consistent nitriloside foods, and a mainly plant-based diet.")}
            {t("The average lifespan of an American is '78 years'. Conversely, Hunza people can live to 120 years!")}
            {t("How does a tribe from a developing country outlive the greatest nation in the world?")}
            {t("The Hunza tribe places a strong emphasis on vitamin A consumption and overall nutrition.")}
            {t("The United States values taste over nutrition and do not see a benefit in mass consumption of nitrilosides.")}
            {t("Author Vilhjalmur Stefanson")} (<span style={{ fontStyle: 'italic' }}><a href="https://www.amazon.com/Cancer-disease-civilization-anthropological-historical/dp/B0007DXZQG">{t("Cancer: Disease of Civilization? An Anthropological and Historical Study")} </a></span>)   {t("also found 'traditional Eskimo diet is high in nitriloside from the stomach of caribou and reindeer meat from tundra and Arrowgrass (Triglochin Maritima)'")}. {t("Notably, when the Eskimos went to other regions and abandoned their traditional diet - cancer began to emerge. The pancreas plays a key role in digestion and blood sugar regulation. Notably, your chances of cancer increase with diabetes - obesity results in many diseases, including diabetes (type 2). Griffin and many other doctors determine that diet affects our health - what you eat determines your health.")}
          </p>
          <p>
            {t("B17 contains 'two units of glucose, one of benzaldehyde and one of cyanide (beta-glucosidase),' according to Griffin and Krebs - 'the unlocking enzyme is safe for the body but kills cancer cells'. Although traditional medicine vehemently disagrees about the efficacy of vitamin B17, the medical industry does agree that cancer loves sugar. Orthodox medicine believes that the renowned researcher - Dr. Kanematsu Sugiura, was correct in his findings about chemotherapy. Chemotherapy is the standard cancer treatment. Furthermore, traditional medicine sees no benefit in Laetrile - claiming that it can poison you from cyanide. Conversely, B12 (used throughout the USA) contains cyanide. According to Griffin, 'B17 stimulates hemoglobin or red blood cells, destroys cancer cells, nourishes non-cancer cells and can help with sickle-cell anemia'. The major difference in schools of thought is how the body should respond to disease. Orthodox medicine tends to treat symptoms of the problem. Conversely, Natural medicine believes that the body is an interconnected system - where the root cause is addressed instead of the symptom. Nutrition and addressing deficiencies or pharmaceuticals addressing certain conditions, these opposed schools of medicine have shaped the current state of healthcare in the United States.")}
          </p>
          <p>
            {t(`The FDA banned Laetrile in 1980,three years after Dr. Suguira noted that it could kill cancer cells (72–77). The major reason B17 is illegal is from potential cyanide poisoning.Dr. Krebs claimed, 'Roasted seeds destroy the unlocking enzyme - 'beta-glucosidase, high in cyanide'.Griffin claims that the cyanide claim was due to 'discrediting vitamin B17'. It is important to note that cigarettes, alcohol, seed oils, Red 40 and other dyes are toxic and cause harm to the human body. McDonald's is located in every state and capital (except Montpelier) in the United States. Why does the FDA ban Laetrile for cyanide but does not ban vapes for being toxic to Americans? Humans are resistant to change - the doctor who proposed washing your hands before childbirth was fired. Medical institutions have a standard and do not want doctors to start straying from the norm. There is money in medicine - it is a billion-dollar industry. Most doctors and nurses do not know that the Flexner Report is the curriculum of modern medicine. Why is there no cure for cancer? In short, politics - lives are at stake, and institutions require 100% assurance that the treatment is safe and effective before being rolled out to the public.`)}
          </p>
          <p>
            {t("I recently spoke with a member of the medical community, who stated: 'Laetrile has not shown to be effective'. Emphasizing that 'everyone's body is different, and fighting disease begins with lowering cortisol levels (stress)'. People should be preventive, slowly shifting their nutrition and including vitamin B and other vitamins into their diet. However, he does acknowledge that disease can occur from a vitamin deficiency. Supplements and vitamins play a role in getting the body what it lacks.")}
          </p>
          <p>
            {t("In summary, disease stems from a deficiency in vitamin B (A, D, E, K) - vitamin B consumption benefits the body. B17 (Laetrile) is a controversial component similar to vitamin B and primarily found in 'bitter almond, apricot, blackthorn, cherry, nectarine, peach and plum'; adding these fruits to your diet is no harm and could benefit your nutrition. Dr. Krebs claimed, 'Healthy adults should get a minimum of 50 milligrams of B17 daily'. Regarding cancer, Laetrile is not a treatment method in the global West - Europe, USA, and Canada. However, alternative cancer treatment in Mexico and other developing nations uses Laetrile. The body is an interconnected system. Furthermore, people should value nutrition -including vitamin B and complex B vitamins for disease prevention.")}
          </p>
        </div>
        <div>
          <table className="collapsibles-table">
            <tbody>
              <Collapsible trigger={<th className="collapsible-trigger">{t('Cancer Cures')}</th>}>
                <a href="/fenbendazole"> <img src={fenben} alt='' /> </a>
                <a href="/ivermectin"> <img src={IVERMECTINCANCER} alt="img" /> </a>
                <a href="/hoxsey"> <img src={hhoxsey} alt='' /> </a>
                <a href="/funcmed"> <img src={essence} alt="img" /> </a>
              </Collapsible>
            </tbody>
          </table>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default Blog6;