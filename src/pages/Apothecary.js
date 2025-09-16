import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

import '../App.css';
import Plants from "./Plants";

import ApothecaryData from "./ApothecaryData";
import { useTranslation } from 'react-i18next';

const Apothecary = () => {

const {t} = useTranslation('common')
  // Price: BTC
  // Medical Rating: 
  // Source:
  const [plant] = useState(
    [

  {
    id: 1,
    image: Plants.abiesbalsema,
    name: t('Abies balsamea'),
    price: 0.00019,
    description: t('The resin obtained from the balsam fir has been used throughout the world and is a very effective antiseptic and healing agent. It is used as a healing and analgesic protective covering for burns, bruises, wounds and sores[213, 222, 226]. It is also used to treat sore nipples[213] and is said to be one of the best curatives for a sore throat[245]. The buds, resin, and/or sap are used in folk remedies for treating cancers, corns, and warts[269]. The resin is also antiscorbutic, diaphoretic, diuretic, stimulant and tonic[4, 171, 222]. It is used internally in propriety mixtures to treat coughs and diarrhoea, though taken in excess it is purgative[238]. A warm liquid of the gummy sap was drunk as a treatment for gonorrhoea[212]. A tea made from the leaves is antiscorbutic[4, 171]. It is used in the treatment of coughs, colds and fevers[222]. The leaves and young shoots are best harvested in the spring and dried for later use[238]. This plant was widely used medicinally by various North American Indian tribes[257]. The resin was used as an antiseptic healing agent applied externally to wounds, sores, bites etc., it was used as an inhalant to treat headaches and was also taken internally to treat colds, sore throats and various other complaints[257].'),
    medrating: 5,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Abies+balsamea'
  },
  {
    id: 2,
    image: Plants.rhusglabra,
    name: t('Rhus Glabra'),
    price: 0.000734,
    description: t('Smooth sumach was employed medicinally by various native North American Indian tribes who used it to treat a variety of complaints[257]. It is occasionally used in modern herbalism where it is valued for its astringent and antiseptic qualities. Some caution should be employed in the use of this species since it can possibly cause skin irritations. It is best only used under the supervision of a qualified practitioner. A tea made from the bark or root bark is alterative, antiseptic, astringent, galactogogue, haemostatic, rubefacient and tonic[4, 222, 238, 257]. It is used in the treatment of diarrhoea, fevers, general debility, sore mouths, rectal bleeding, uterine prolapse etc[222, 254]. It is used as a gargle to treat sore throats and applied externally to treat excessive vaginal discharge, burns and skin eruptions[254, 257]. The powdered bark can be applied as a poultice to old ulcers, it is a good antiseptic[4]. A tea made from the roots is appetizer, astringent, diuretic and emetic[222, 257]. An infusion is used in the treatment of colds, sore throats, painful urination, retention of urine and dysentery[257]. The root is harvested in the autumn and dried for later use[254]. An infusion of the green or dried branches has been used in the treatment of TB[257]. A decoction of the branches, with the seed heads, has been used to treat itchy scalps and as a bathing water for frost-bitten limbs[257]. The milky latex from the plant has been used as a salve on sores[257]. A tea made from the leaves was used in the treatment of asthma, diarrhoea and stomatitis[222]. A poultice of the leaves has been used to treat skin rashes[257]. The leaves have been chewed to treat sore gums and they have been rubbed on the lips to treat sore lips[257]. The berries are diuretic, emetic, emmenagogue, purgative and refrigerant[4, 257]. They are used in the treatment of late-onset diabetes, stranguary bowel complaints, febrile diseases, dysmenorrhoea etc[4, 254, 257]. They have been chewed as a remedy for bed-wetting[222, 257]. The blossoms have been chewed as a treatment for sore mouths[257]. A decoction of the blossoms has been used as a mouthwash for teething children[257]. An infusion of the blossoms has been used as an eye wash for sore eyes[257].'),
    medrating: 3,
    source: 'https://pfaf.org/user/plant.aspx?LatinName=Rhus+glabra'
  },
  {
    id: 3,
    image: Plants.sweetacacia,
    name: t('Acacia farnesiana'),
    price: 0.0002320248,
    description: t('The root is antispasmodic and tonic[4, 46, 61]. A tea made from the dried crushed petals of various peony species has been used as a cough remedy, and as a treatment for haemorrhoids and varicose veins[250].'),
    medrating: 1,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Paeonia+mascula'
  },
  {
    id: 4,
    image: Plants.blackwood,
    name: t('Blackwood'),
    description: t('The plant is Antirheumatic'),
    price: 0.0001320248,
    medrating: 1,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Acacia+melanoxylon'
  },
  {
    id: 5,
    image: Plants.muskmilfoil,
    name: t('Musk Milfoil'),
    description: t('The leaves and flowering stems are appetizer, diaphoretic, digestive, diuretic, stomachic and tonic[9, 46, 61]. An infusion is used in the treatment of liver and kidney disorders, as a tonic to the digestive system, exhaustion, nervous headaches etc[9]. The plant is harvested in the summer and can be dried for later use[9].'),
    price: 0.000284320248,
    medrating: 4,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Achillea+erba-rotta+moschata'
  },
  {
    id: 6,
    image: Plants.californiayarrow,
    name: t('Achillea millefolium'),
    description: t('Yarrow has a high reputation and is widely employed in herbal medicine, administered both internally and externally. It is used in the treatment of a very wide range of disorders but is particularly valuable for treating wounds, stopping the flow of blood, treating colds, fevers, kidney diseases, menstrual pain etc[218, 238, 254, 257]. The whole plant is used, both fresh and dried, and is best harvested when in flower[222]. Some caution should be exercised in the use of this herb since large or frequent doses taken over a long period may be potentially harmful[222], causing allergic rashes and making the skin more sensitive to sunlight[238]. The herb combines well with Sambucus nigra flowers (Elder) and Mentha x piperita vulgaris (Peppermint) for treating colds and influenza[268]. The herb is antiseptic, antispasmodic, mildly aromatic, astringent, carminative, cholagogue, diaphoretic, digestive, emmenagogue, odontalgic, stimulant, bitter tonic, vasodilator and vulnerary[4, 9, 14, 21, 54, 145, 165, 172, 238, 240, 254]. It also contains the anti-inflammatory agent azulene, though the content of this varies even between plants in the same habitat[238]. The herb is harvested in the summer when in flower and can be dried for later use[4]. The fresh leaf can be applied direct to an aching tooth in order to relieve the pain[268].'),
    price: 0.0000014,
    medrating: 2,
    source: 'https://pfaf.org/user/plant.aspx?LatinName=Achillea+millefolium'
  },
  {
    id: 7,
    image: Plants.californianettle,
    name: t('Urtica dioica'),
    description: t('Nettles have a long history of use in the home as a herbal remedy and nutritious addition to the diet[K]. A tea made from the leaves has traditionally been used as a cleansing tonic and blood purifier so the plant is often used in the treatment of hay fever, arthritis, anaemia etc[254]. The whole plant is antiasthmatic, antidandruff, astringent, depurative, diuretic, galactogogue, haemostatic, hypoglycaemic and a stimulating tonic[4, 9, 21, 36, 165, 238]. An infusion of the plant is very valuable in stemming internal bleeding[4], it is also used to treat anaemia, excessive menstruation, haemorrhoids, arthritis, rheumatism and skin complaints, especially eczema[238]. Externally, the plant is used to treat skin complaints, arthritic pain, gout, sciatica, neuralgia, haemorrhoids, hair problems etc[238]. The fresh leaves of nettles have been rubbed or beaten onto the skin in the treatment of rheumatism etc[257]. This practice, called urtification, causes intense irritation to the skin as it is stung by the nettles. It is believed that this treatment works in two ways. Firstly, it acts as a counter-irritant, bringing more blood to the area to help remove the toxins that cause rheumatism. Secondly, the formic acid from the nettles is believed to have a beneficial effect upon the rheumatic joints. For medicinal purposes, the plant is best harvested in May or June as it is coming into flower and dried for later use[4, 238]. This species merits further study for possible uses against kidney and urinary system ailments[222]. The juice of the nettle can be used as an antidote to stings from the leaves and an infusion of the fresh leaves is healing and soothing as a lotion for burns[4]. The root has been shown to have a beneficial effect upon enlarged prostate glands[254]. A homeopathic remedy is made from the leaves[4]. It is used in the treatment of rheumatic gout, nettle rash and chickenpox, externally is applied to bruises[4]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Urtica dioica Stinging Nettle for rheumatic ailments (internal use of leaf), irrigation therapy, for inflammatory disease of the lower urinary tract and prevention of kidney (gravel) formation, urination difficulty from benign prostatic hyperplasia (root) (see [302] for critics of commission E).'),
    price: 0.00018111950024,
    medrating: 5,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Urtica+dioica'
  },
  {
    id: 8,
    image: Plants.acmella,
    name: t('Acmella oleracea'),
    description: t("The most common and widespread medicinal use is to treat toothache and throat and gum infections [299 ]. Worldwide the flower heads are used either fresh or dried and powdered, but the use of roots and leaves has been recommended as well [299 ]. The plant is further recommended as a cure for dysentery and rheumatism, and to enhance the immune system. It is used against blood parasites, especially against malaria, both prophylactic and curative [299 ]. The leaves are sialagogue [348 ]. The leaves and flower heads are analgesic, anthelmintic, antibacterial and antifungal [372 ]. Some of the medicinal compounds are destroyed by desiccation or freezing [372 ]. In-vitro studies have shown strong antibacterial activity against Escherichia, Klebsiella, Proteus, Pseudomonas, Salmonella and Staphylococcus. Also Candida albicans is inhibited [299 ]."),
    price: 0.000211119500248,
    medrating: 3,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Acmella+oleracea'
  },
  {
    id: 9,
    image: Plants.sweetflag,
    name: t('Acorus calmus'),
    description: t('Sweet flag has a very long history of medicinal use in many herbal traditions. It is widely employed in modern herbal medicine as an aromatic stimulant and mild tonic[4]. In Ayurveda it is highly valued as a rejuvenator for the brain and nervous system and as a remedy for digestive disorders[254]. However, some care should be taken in its use since some forms of the plant might be carcinogenic - see the notes above on toxicity for more information. The root is anodyne, aphrodisiac, aromatic, carminative, diaphoretic, emmenagogue, expectorant, febrifuge, hallucinogenic, hypotensive, sedative, stimulant, stomachic, mildly tonic and vermifuge[4, 7, 9, 21, 147, 165, 213, 240, 279]. It is used internally in the treatment of digestive complaints, bronchitis, sinusitis etc[238]. It is said to have wonderfully tonic powers of stimulating and normalizing the appetite. In small doses it reduces stomach acidity whilst larger doses increase stomach secretions[238]. The root is used to treat coughs, hoarseness, colic, indigestion, bloating, and painful menstruation[254, 257]. It is used in Ayurvedic medicine as a tonic for the brain and nervous system, and as a remedy for digestive disorders. The root is also used in the treatment of fevers and flu[254]. The plant is harvested in the summer and dried for later use[238]. The root is used to treat vomiting, indigestion, and flatulence[257]. It can also be used as a mild aphrodisiac and to treat nervous conditions such as depression and anxiety[238]. The root is occasionally used as a powder for treating foul-smelling wounds[238].'),
    price: 0.000254243,
    medrating: 3,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Acorus+calmus'
  },

{
  id: 10,
  image: Plants.horsechesnut,
  name: t('Aesculus hippocastanum'),
  description: t("Horse chestnut is an astringent, anti-inflammatory herb that helps to tone the vein walls which, when slack or distended, may become varicose, haemorrhoidal or otherwise problematic[254]. The plant also reduces fluid retention by increasing the permeability of the capillaries and allowing the re-absorption of excess fluid back into the circulatory system[254]. This plant is potentially toxic if ingested and should not be used internally without professional supervision[254]. Alterative, analgesic, haemostatic and vulnerary[165, 218]. The bark is anti-inflammatory, astringent, diuretic, febrifuge, narcotic, tonic and vasoconstrictive[4, 7, 222]. It is harvested in the spring and dried for later use[4]. The plant is taken in small doses internally for the treatment of a wide range of venous diseases, including hardening of the arteries, varicose veins, phlebitis, leg ulcers, haemorrhoids and frostbite[238, 254]. It is also made into a lotion or gel for external application[254]. A tea made from the bark is used in the treatment of malaria and dysentery, externally in the treatment of lupus and skin ulcers[4, 222]. A tea made from the leaves is tonic and is used in the treatment of fevers and whooping cough[222, 240, 254]. The pericarp is peripherally vasoconstrictive[7]. The seeds are decongestant, expectorant and tonic[7, 21]. They have been used in the treatment of rheumatism, neuralgia and haemorrhoids[4]. They are said to be narcotic and that 10 grains of the nut are equal to 3 grains of opium[213]. An oil extracted from the seeds has been used externally as a treatment for rheumatism[254]. A compound of the powdered roots is analgesic and has been used to treat chest pains[257]. The buds are used in Bach flower remedies - the keywords for prescribing it are: 'Failure to learn by experience', 'Lack of observation in the lessons of life' and hence 'The need of repetition'[209]. The flowers are used in Bach flower remedies - the keywords for prescribing it are 'Persistent unwanted thoughts' and 'Mental arguments and conversations'[209]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Aesculus hippocastanum for chronic venous insufficiency in the legs (see [302] for critics of commission E)."),
  price: 0.000351119500248,
  medrating: 4,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Aesculus+hippocastanum'
},
{
  id: 11,
  image: Plants.whitesnakeroot,
  name: t('Ageratina altissima'),
  price: 0.000264320248,
  description: t("The root is diaphoretic, diuretic, febrifuge, stimulant and tonic[257]. It has been used in the treatment of diarrhoea, gravel and urinary diseases[257]. It has also been used in herbal sweat baths to encourage sweating[257]. A decoction or infusion of the root has been taken to treat a fallen or inflamed womb[257]. The root has been chewed and held in the mouth as a treatment for toothache[257]."),
  medrating: 2,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Ageratina+altissima'
},
{
  id: 12,
  image: Plants.giantelephantear,
  name: t('Alocasia macrorrhizo'),
  price: 0.000184320248,
  description: t("Giant taro is often used in traditional medicine in regions where the plant is cultivated as a food crop. All parts of the plant are used[283, 311]. The sap of the stem is used to treat earache or boils in the ear[311]. Applied externally, it is used to treat cuts[311]. In New Guinea, headaches are treated with the sap and the leaves[311]. The leaves are said to be antimicrobial, antifungal, antioxidant, hepatoprotective, antidiarrheal, and antiprotozoal. The leaves and the rhizome are used in the treatment of impetigo, furunculosis, phlegmon and snake-bite in the form of a liquid extract for administration by mouth, and their residue is used for poulticing. They are also used in treating colic and vomiting, in a daily dose of 10 to 20g of dried rhizome in the form of a decoction[283]. The rhizome is used to make a plaster that is applied topically and is said to be effective against furunculosis[283]. Sexual insufficiency is treated by eating the leaves cooked in coconut milk[311]. The roots are used to treat swollen lymph glands[311]. The wood is used to treat stomach-ache and diarrhoea[311]. The leaves and rhizomes are collected throughout the year. The leaves are used fresh. The rhizomes are boiled hard to reduce itching compounds, then sun-dried or heat-dried[283]."),
  medrating: 2,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Alocasia_macrorrhizos'
},
{
  id: 13,
  image: Plants.shortawnfoxtail,
  name: t('Alopecurus aequalis'),
  price: 0.000012314,
  description: t("The whole plant is antiphlogistic, depurative and diuretic[147]. It is used in the treatment of urinary tract infection, calculi, prostatitis and gonorrhoea[147]."),
  medrating: 1,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Alopecurus+aequalis'
},
{
  id: 14,
  image: Plants.commonmarshmallow,
  name: t('Althaea officinalis'),
  price: 0.000294320248,
  description: t("Marshmallow has soothing, emollient, demulcent, demulcent, diuretic, mild expectorant and laxative properties[147, 154]. It is used in the treatment of cough, bronchitis, sore throat, digestive disorders, and urinary tract infections[147, 154]. A decoction of the root is used to treat inflammation of the lungs and the digestive tract, to relieve cough and to treat constipation[147]. It is also used as an herbal tea to soothe the stomach and to treat mild digestive complaints[154]. The root contains mucilage, which forms a soothing gel-like substance when mixed with water and is effective in treating conditions such as gastric ulcers, acid reflux, sore throat, and coughs[147]."),
  medrating: 5,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Althaea+officinalis'
},
{
  id: 15,
  image: Plants.bishopsweed,
  name: t('Ammi visnaga'),
  price: 0.0007211119500248,
  description: t("Visnaga is an effective muscle relaxant and has been used for centuries to alleviate the excruciating pain of kidney stones[254]. Modern research has confirmed the validity of this traditional use[254]. Visnagin contains khellin, from which particularly safe pharmaceutical drugs for the treatment of asthma have been made[254]. The seeds are diuretic and lithontripic[46]. They contain a fatty oil that includes the substance 'khellin'. This has been shown to be of benefit in the treatment of asthma[238]. Taken internally, the seeds have a strongly antispasmodic action on the smaller bronchial muscles, they also dilate the bronchial, urinary and blood vessels without affecting blood pressure[238]. The affect last for about 6 hours and the plant has practically no side effects[254]. The seeds are used in the treatment of asthma, angina, coronary arteriosclerosis and kidney stones[238]. By relaxing the muscles of the urethra, visnaga reduces the pain caused by trapped kidney stones and helps ease the stone down into the bladder[254]."),
  medrating: 5,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Ammi%20visnaga'
},
       {
  id: 16,
  image: Plants.blackpoplar,
  name: t('Populus nigra'),
  price: 0.000036500248,
  description: t("The leaf buds are covered with a resinous sap that has a strong turpentine odour and a bitter taste[4, 213]. They also contain salicin, a glycoside that probably decomposes into salicylic acid (aspirin) in the body[213]. The buds are antiscorbutic, antiseptic, balsamic, diaphoretic, diuretic, expectorant, febrifuge, salve, stimulant, tonic and vulnerary[4, 9, 21, 165, 238]. They are taken internally in the treatment of bronchitis and upper respiratory tract infections, stomach and kidney disorders[4, 238]. They should not be prescribed to patients who are sensitive to aspirin[238]. Externally, the buds are used to treat colds, sinusitis, arthritis, rheumatism, muscular pain and dry skin conditions[238]. They can be put in hot water and used as an inhalant to relieve congested nasal passages[213]. The buds are harvested in the spring before they open and are dried for later use[238]. The stem bark is anodyne, anti-inflammatory, antiseptic, astringent, diuretic and tonic[14, 46, 61, 178, 218]. The bark contains salicylates, from which the proprietary medicine aspirin is derived[238]. It is used internally in the treatment of rheumatism, arthritis, gout, lower back pains, urinary complaints, digestive and liver disorders, debility, anorexia, also to reduce fevers and relieve the pain of menstrual cramps[14, 46, 61, 178, 213, 238]. Externally, the bark is used to treat chilblains, haemorrhoids, infected wounds and sprains[238]. The bark is harvested from side branches or coppiced trees and dried for later use[238]."),
  medrating: 3,
  source: 'https://pfaf.org/User/Plant.aspx?LatinName=Populus+nigra'
},


      {
  id: 18,
  image: Plants.commonbugloss,
  name: t('Anchusa officinalis'),
  price: 0.000081992119500248,
  description: t("All parts of the plant are demulcent and expectorant[9]. They are used externally to treat cuts, bruises and phlebitis and internally to treat coughs and bronchial catarrh[9]. A homeopathic remedy is made from the plant[9]. It is used in the treatment of stomach and duodenal ulcers[9]."),
  medrating: 2,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Anchusa+officinalis'
},
{
  id: 19,
  image: Plants.greenchireta,
  name: t('Andrographis paniculata'),
  price: 0.00038119500248,
  description: t(`Green chireta has a long history of traditional medicinal use in India, various parts of South-East Asia, Central America and the Caribbean[310]. The roots and leaves are considered to be alterative, anthelmintic, bitter, febrifuge, stomachic and tonic[46]. There has been a large amount of research into the effects of this plant, several medically active compounds have been identified with a wide range of effective actions[310]. The aerial parts of the plant contain a large number of diterpenes, whilst the presence of flavones in the root has also been reported[310]. Extracts and purified diterpenes and flavonoids have been investigated for a multitude of pharmacological effects. Trials using the leaf extract have concluded that the powdered leaves have the capacity to significantly shorten the duration of common colds and that the leaves can be as effective as paracetamol in relieving the fever and sore throat of people with pharyngotonsilitis[310]. The leaves have also been shown to have significant anti-inflammatory effect and also significantly inhibit oedema[310]. An ethanol extract of the leaves stimulates both antigen-specific and nonspecific immune responses more than the purified leaf extracts. An ethanol extract has also shown significant antipyretic activity. A standardized leaf extract exhibits significant antipyretic properties and is an effective analgesic[310]. The crude water extract of the leaves, as well as the semi-purified n-butanol and aqueous fractions, have shown significant hypotensive activity[310]. In one trial, a 10% infusion of the herb applied intravenously at 1 ml/kg bodyweight reduced the blood pressure by 6-10 mm Hg in 10-20 seconds[310]. An extract of the leaves has also been shown to lower cholesterol levels, whilst antithrombotic effects were also observed. It is believed that these effects might be at least partially due to flavones present in the extract[310]. Administered intraperitoneally, the diterpenes andrographiside and neoandrographolide (found in the leaves) have a significant protective effect on the liver. An extract of the leaves has shown antidiarrhoeal activity[310]. The diterpenes andrographolide and neoandrographolide isolated from the alcoholic extract showed potent antisecretory activity against Escherichia coli enterotoxin induced secretions. Various compounds have shown significant anti-ulcer properties. It is suggested that this effect is due to the antisecretory activity and protective effect on the gastric mucosa[310]. Oral administration of 20 mg of the dry leaf powder for 60 days has an antifertility effect in males[310]. The alcoholic extract of the rhizomes exhibits good in vitro anthelmintic activity against Ascaris lumbricoides[310]. Neoandrographolide, isolated from the leaves, exhibits significant antimalarial activity[310]. Dehydroandrographolide succinic acid monoester, derived from andrographolide, has been found to inhibit the human immunodeficiency virus (HIV) in vitro[310]. A leaf infusion administered intraperitoneally has an LD50 at 71.1 mg/10 g body weight (acute toxicity). At a concentration of 1 mg/kg, it lowers the body temperature at least 2°C[310]. The plant used to be considered an effective remedy against snake bites and it is still used locally for this[310]. It has also been reported as useful to treat insect bites and, in combination with Orthosiphon aristatus, as a remedy for diabetes[310]. An infusion or sap from the crushed leaves has been recommended for the treatment of fever, as a tonic, and for itching skin eruptions[310]. A decoction of the leaves or roots is used against stomach-ache, dysentery, typhus, cholera, influenza and bronchitis, as a vermifuge, and is considered a diuretic[310]. Pills or infusions are also recommended to treat female disorders, dyspepsia, hypertension, rheumatism, gonorrhoea, amenorrhoea, torpid liver and jaundice[310]. Another use is as a poultice on swollen legs or feet, vitiligo and piles[310]. Furthermore, Andrographis paniculata is considered to be anti-inflammatory and immunosuppressive, but reports on antibacterial activity are contradictory[310]. The leaves should be harvested when the inflorescence axis starts to grow because the maximum accumulation of andrographolide is at that stage[310]. The roots are harvested when leaves start discolouring or wilting[310]. Yields of 1 - 1.5 kg fresh weight/plant are obtained from 7-month-old plants[310]. In general, the herb is used fresh and consumed within a few days after collection[310]. However, leaves and roots should be washed and dried in the sun or artificially before storage[310].`),
  medrating: 4,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Andrographis+paniculata'
},
{
  id: 20,
  image: Plants.bigbluestem,
  name: t('Andropogon gerardii'),
  price: 0.0001020248,
  description: t("The plant is analgesic, carminative and diuretic[222]. A decoction of the roots is used in the treatment of stomach-aches and flatulence[222, 257]. A tea made from the leaves is used as a wash to relieve fevers and general debility[222, 257]."),
  medrating: 1,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Andropogon+gerardii'
},
{
  id: 21,
  image: Plants.blacktupello,
  name: t('Nyssa sylvatica'),
  price: 0.00011119500248,
  description: t("The bark is emetic, ophthalmic and vermifuge[257]. An infusion has been used as a bath and also given to children with worms[257]. A strong decoction is used to cause vomiting when unable to retain food[257]. A strong ooze from the roots is used as eye drops[257]."),
  medrating: 1,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Nyssa+sylvatica'
},
{
  id: 22,
  image: Plants.indianbarberry,
  name: t('Berberis aristata'),
  price: 0.0002184320248,
  description: t("The dried stem, root bark and wood are alterative, antiperiodic, deobstruent, diaphoretic, laxative, ophthalmic and tonic (bitter)[46, 61, 158, 194, 240]. An infusion is used in the treatment of malaria, eye complaints, skin diseases, menorrhagia, diarrhoea and jaundice[240, 243]. Berberine, universally present in rhizomes of Berberis species, has marked antibacterial effects. Since it is not appreciably absorbed by the body, it is used orally in the treatment of various enteric infections, especially bacterial dysentery[218]. It should not be used with Glycyrrhiza species (Liquorice) because this nullifies the effects of the berberine[218]. Berberine has also shown antitumour activity[218]."),
  medrating: 3,
  source: 'https://pfaf.org/user/plant.aspx?LatinName=Berberis+aristata'
},
{
  id: 23,
  image: Plants.angelicaanomala,
  name: t('Angelica anomala'),
  price: 0.0002987429,
  description: t("The root is analgesic, antibacterial, antidote, carminative, depuritive, diaphoretic, poultice and is also used to treat women's complaints[147, 176, 178, 218]. The drug (an extract of the root?) lowers arterial pressure, increases diuresis and stimulates contraction of the smooth muscles, especially the uterus, but without causing abortion[218]. The plant is used in the treatment of colds and headaches, coryza, leucorrhoea, boils and abscesses[147]. Small quantities of angelicotoxin, one of the active ingredients in the root, have an excitatory effect on the respiratory centre, central nervous system and vasculomotor centre. It increases the rate of respiration, increases blood pressure, decreases the pulse, increases the secretion of saliva and induces vomiting[176]. In large doses it can cause convulsions and generalized paralysis[176]."),
  medrating: 2,
  source: 'https://pfaf.org/user/Plant.aspx?LatinName=Angelica+anomala'
},

  {
    id: 24,
    image: Plants.chineseangelica,
    name: t('Angelica sinensis'),
    price: 0.0004184320248,
    description: t('Dang Gui is a well-known Chinese herb that has been used in the treatment of female ailments for thousands of years. Its reputation is perhaps second only to ginseng (Panax ginseng) and it is particularly noted for its \'blood tonic\' effects on women[218]. The root has a sweet pungent aroma that is very distinctive and it is often used in cooking, which is the best way to take it as a blood tonic[254]. One report says that the root contains vitamin B12 and can be used in the treatment of pernicious anaemia[176]. The root is alterative, analgesic, anticholesterolemic, anti-inflammatory, antispasmodic, deobstruent, emmenagogue, emollient, hepatic, laxative, sedative and peripheral vasodilator[165, 176, 218]. It is commonly used in the treatment of a wide range of women\'s complaints where it regulates the menstrual cycle and relieves period pain[218, 238, 254] and also to ensure a healthy pregnancy and easy delivery[218]. However conflicting information suggests it should not be used during pregnancy [301] and should not be used if menstrual flow is heavy or during menstration [301]. It is an ideal tonic for women with heavy menstruation who risk becoming anaemic[254]. The water-soluble and non-volatile elements of the root increase the contraction of the uterus whilst the volatile elements can relax the muscle of the uterus[176]. Its use prevents the decrease of liver glycogen and protects the liver[176]. Used for menopausal symptoms (hot flushes) [301]. It has an antibacterial action, inhibiting the growth of various bacteria including Bacillus dysenteriae, Bacillus typhi, B. comma, B. cholerae and haemolytic streptococci[176]. The root is an ingredient of \'Four Things Soup\', the most widely used woman\'s tonic in China[254]. The other species used are Rehmannia glutinosa, Ligusticum wallichii and Paeonia lactiflora[254]. The root is harvested in the autumn or winter and dried for later use[254, 283]. It has been used to treat pulmonary hypertension in combination with the allopathic medication nifedipine [301]. Other uses include: constipation (a laxative), trauma injuries, ulcers, rheumatism and malaria [301].'),
    medrating: 5,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Angelica+sinensis'
  },
  {
    id: 25,
    image: Plants.thalecross,
    name: t('Arabidopsis thaliana'),
    price: 0.0001920248,
    description: t('The plant is used to cure sores in the mouth[240].'),
    medrating: 1,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Arabidopsis+thaliana'
  },
  {
    id: 26,
    image: Plants.bearberry,
    name: t('Arctostaphylos uva-ursi'),
    price: 0.0007211119500248,
    description: t('Bearberry was commonly used by many native North American Indian tribes to treat a wide range of complaints and has also been used in conventional herbal medicine for hundreds of years, it is one of the best natural urinary antiseptics[254]. The leaves contain hydroquinones and are strongly antibacterial, especially against certain organisms associated with urinary infections[238]. The plant should be used with caution, however, because hydroquinones are also toxic[222]. The leaves are antiseptic, astringent, diuretic, lithontripic, hypnotic and tonic[7, 9, 21, 102, 165, 172, 192]. The dried leaves are used in the treatment of a variety of complaints[4]. These leaves should be harvested in early autumn, only green leaves being selected, and then dried in gentle heat[4]. A tea made from the dried leaves is much used for kidney and bladder complaints and inflammations of the urinary tract such as acute and chronic cystitis and urethritis, but it should be used with caution and preferably only under the supervision of a qualified practitioner[4, 21, 46, 172, 222, 254]. The tea is more effective if the urine is alkaline, thus it is best used in combination with a vegetable-based diet[254]. Externally, a poultice of the infused leaves with oil has been used as a salve to treat rashes, skin sores etc, and as a wash for a baby\'s head[257]. An infusion of the leaves has been used as an eyewash, a mouthwash for cankers and sore gums and as a poultice for back pains, rheumatism, burns etc[257]. The dried leaves have been used for smoking as an alternative to tobacco[238]. One report says that it is unclear whether this was for medicinal purposes or for the intoxicated state it could produce[192], whilst another says that the leaves were smoked to treat headaches and also as a narcotic[257]. The herb should not be prescribed to children, pregnant women or patients with kidney disease[238]. Another report says that some native North American Indian tribes used an infusion of the stems, combined with blueberry stems (Vaccinium spp) to prevent miscarriage without causing harm to the baby, and to speed a woman\'s recovery after the birth[257]. Other uses: fluid retention and bed wetting. Claimed to strengthen the heart muscle and urinary tract and to return the womb to its normal size after childbirth [301]. Treatment should be short (seven days) and used with an alkaline diet [301]. Not recommended for children under 12.'),
    medrating: 4,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Arctostaphylos+uva-ursi'
  },
  {
    id: 27,
    image: Plants.thymesandword,
    name: t('Arenaria serpyllifolia'),
    price: 0.00023426101992119500248,
    description: t('The plant is antitussive, depurative, diuretic and febrifuge[[147, 218]. A decoction of the leaves is used in the treatment of dysentery[218]. It is also used in the treatment of bladder complaints, calculus troubles and acute and chronic cystitis[240].'),
    medrating: 2,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Arenaria+serpyllifolia'
  },
  {
    id: 28,
    image: Plants.shatavari,
    name: t('Asparagus racemosus'),
    price: 0.000371920248,
    description: t(`Shatavari (this is an Indian word meaning 'a woman who has a hundred husbands') is the most important herb in Ayurvedic medicine for dealing with problems connected women's fertility[238]. The rhizome is a soothing tonic that acts mainly on the circulatory, digestive, respiratory and female reproductive organs[238]. The root is alterative, antispasmodic, aphrodisiac, demulcent, diuretic, galactogogue and refrigerant[240, 243]. It is taken internally in the treatment of infertility, loss of libido, threatened miscarriage, menopausal problems, hyperacidity, stomach ulcers and bronchial infections[238]. Externally it is used to treat stiffness in the joints[238]. The root is used fresh in the treatment of dysentery. It is harvested in the autumn and dried for use in treating other complaints[238]. The whole plant is used in the treatment of diarrhoea, rheumatism, diabetes and brain complaints[243].`),
    medrating: 5,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Asparagus+racemosus'
  },
  {
    id: 29,
    image: Plants.herbofgrace,
    name: t('Bacopa monnieri'),
    price: 0.000172321920248,
    description: t('Brahmi is a very important Ayurvedic herb, being particularly valued for its beneficial effect upon the nervous system. Its main active substances are steroidal saponins, including bacosides[254]. The whole plant is used - roots, stems and leaves[304]. It is cardiac, nervine tonic, sedative and vasoconstrictor[304]. The leaves and stalks are aperient and diuretic[304]. An alcohol extract of the whole plant has been shown to have anticancer activity against Walker carcinoma[304]. An alcohol extract of plant is a muscle relaxant and cardiovascular relaxant[348]. Research in India suggests that brahmi improves mental function, memory and concentration, and also reduces learning time[254]. The plant contains the alkaloid brahmine, which has been shown to raise blood pressure when administered in therapeutic dosage, but to be hypotensive when given in very strong dosage[348]. A tranquilizing saponin that resembles reserpine is also present[348]. The plant is used principally in the treatment of a range of nervous system disorders including neuralgia, hysteria, epilepsy, insanity, neurasthenia, aphonia and hoarseness[254, 304]. The plant is also taken internally in a number of other conditions including indigestion, ulcers, wind, constipation, asthma, bronchitis and infertility[254]. A poultice made of the boiled plant is applied to the chests of children in the treatment of acute bronchitis and other coughs[304]. A juice made from the plant is applied as a wash on burns[272].'),
    medrating: 4,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Bacopa+monnieri'
  },
{
    id: 30,
    image: Plants.banksiaattenuata,
    name: t('banksia attenuata'),
    price: 0.000123421261019921195002480,
    description: t('An infusion of the flowers was used to relieve coughs and cold and as a refreshing drink.'),
    medrating: 0,
    source: 'https://www.friendsofqueensparkbushland.org.au/banksia-attenuata/#:~:text=Banksia%20attenuataCommon%20name%3A%20Candle%20Banksia&text=Aboriginal%20name%3A%20Piara.,and%20as%20a%20refreshing%20drink.'
},
{
    id: 32,
    image: Plants.orchid,
    name: t('Orchid'),
    price: 0.0000194320248,
    description: t('The root is carminative[ 480 ]. The flowers are laxative[ 480 ]. The bark, roots and flowers, when mixed with rice-water, are used in poultice form as a maturant[ 480 ].'),
    medrating: 2,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Bauhinia+purpurea'
},
{
    id: 33,
    image: Plants.beggarsticks,
    name: t('Bidens pilosa'),
    price: 0.0009832742,
    description: t('The root is carminative[ 480 ]. The flowers are laxative[ 480 ]. The bark, roots and flowers, when mixed with rice-water, are used in poultice form as a maturant[ 480 ].'),
    medrating: 2,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Bauhinia+purpurea'
},
{
    id: 34,
    image: Plants.potmarigold,
    name: t('Calendula Officinalis'),
    price: 0.0001594320248,
    description: t('Pot marigold is one of the best known and versatile herbs in Western herbal medicine and is also a popular domestic remedy[4, 254]. It is, above all, a remedy for skin problems and is applied externally to bites and stings, sprains, wounds, sore eyes, varicose veins etc[4, 254]. It is also a cleansing and detoxifying herb and is taken internally in treating fevers and chronic infections[4, 254]. Only the common deep-orange flowered variety is considered to be of medicinal value[4]. The whole plant, but especially the flowers and the leaves, is antiphlogistic, antiseptic, antispasmodic, aperient, astringent, cholagogue, diaphoretic, emmenagogue, skin, stimulant and vulnerary[4, 7, 9, 21, 46, 165, 201]. The leaves can be used fresh or dried, they are best harvested in the morning of a fine sunny day just after the dew has dried from them[4]. The flowers are also used fresh or dried, for drying they are harvested when fully open and need to be dried quickly in the shade[4]. A tea of the petals tones up the circulation and, taken regularly, can ease varicose veins[201]. An application of the crushed stems to corns and warts will soon render them easily removable[7]. The leaves, blossoms and buds are used to make a homeopathic remedy[232]. It is used internally in order to speed the healing of wounds[232]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Calendula officinalis for inflammation of the mouth and pharynx (throat), wounds and burns(see [302] for critics of commission E).'),
    medrating: 5,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Calendula+officinalis'
},
{
    id: 35,
    image: Plants.callunavulgaris,
    name: t('Calluna vulgaris'),
    price: 0.000091094320248,
    description: t('Heather has a long history of medicinal use in folk medicine. In particular it is a good urinary antiseptic and diuretic, disinfecting the urinary tract and mildly increasing urine production[254]. The flowering shoots are antiseptic, astringent, cholagogue, depurative, diaphoretic, diuretic, expectorant, mildly sedative and vasoconstrictor[7, 8, 9, 21, 165, 238]. The plant is often macerated and made into a liniment for treating rheumatism and arthritis, whilst a hot poultice is a traditional remedy for chilblains[7, 254]. An infusion of the flowering shoots is used in the treatment of coughs, colds, bladder and kidney disorders, cystitis etc[9, 238, 254]. A cleansing and detoxifying plant, it has been used in the treatment of rheumatism, arthritis and gout[254]. The flowering stems are harvested in the autumn and dried for later use[7]. The plant is used in Bach flower remedies - the keywords for prescribing it are "Self-centredness" and "Self-concern"[209]. A homeopathic remedy is made from the fresh branches[9]. It is used in the treatment of rheumatism, arthritis and insomnia[9].'),
    medrating: 2,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Calluna+vulgaris'
},
{
    id: 36,
    image: Plants.caper,
    name: t('Capparis Spinosa'),
    price: 0.000091094320248,
    description: t('The root-bark is analgesic, anthelmintic, antihaemorrhoidal, aperient, deobstruent, depurative, diuretic, emmenagogue, expectorant, tonic and vasoconstrictive[7]. It is used internally in the treatment of gastrointestinal infections, diarrhoea, gout and rheumatism[238, 240]. Externally, it is used to treat skin conditions, capillary weakness and easy bruising[254]. The bark is harvested in the autumn and dried for later use[238]. The stem bark is bitter and diuretic[254]. If taken before meals it will increase the appetite[254]. The unopened flower buds are laxative[254]. They are used internally in the treatment of coughs, and externally to treat eye infections[238]. The buds are a rich source of compounds known as aldose-reductose inhibitors - it has been shown that these compounds are effective in preventing the formation of cataracts. The buds are harvested before the flowers open and can be pickled for later use - when prepared correctly they are said to ease stomach pain[254]. A decoction of the plant is used to treat vaginal thrush[7, 254]. The leaves are bruised and applied as a poultice in the treatment of gout[240].'),
    medrating: 3,
    source: 'https://pfaf.org/user/Plant.aspx?LatinName=Capparis+spinosa'
},

      {
        id: 37,
        image: Plants.goldenchaintree,
        name: t('Cassia fistula'),
        price: 0.00073594320248,
        description: t('The ripe pods...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Cassia+fistula'
      },
      {
        id: 38,
        image: Plants.trumpettree,
        name: t('Cecropia peltata'),
        price: 0.0000943594320248,
        description: t('The bark...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Cecropia+peltata'
      },
      {
        id: 39,
        image: Plants.cornflower,
        name: t('Centaurea cyanus'),
        price: 0.0001119500248,
        description: t('CornFlower has...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Centaurea+cyanus'
      },
      {
        id: 40,
        image: Plants.spadeleaf,
        name: t('Centella asiatica'),
        price: 0.00023428423,
        description: t('Gotu kola...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Centella+asiatica'
      },
      {
        id: 41,
        image: Plants.fieldmouseear,
        name: t('Cerastium arvense'),
        price: 0.0000943594320248,
        description: t('The plant...'),
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Cerastium+arvense'
      },
      {
        id: 42,
        image: Plants.stjohnsbread,
        name: t('Ceratonia Siliqua'),
        price: 0.0000943594320248,
        description: t('The pulp...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Ceratonia+siliqua'
      },
      {
        id: 43,
        image: Plants.broom,
        name: t('Cytisus scoparius'),
        price: 0.000171920248,
        description: t('Broom is...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Cytisus+scoparius'
      },
      {
        id: 44,
        image: Plants.oakleafdatura,
        name: t('Datura quercifolia'),
        price: 0.0000943594320248,
        description: t('The whole...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Datura+quercifolia'
      },
      {
        id: 45,
        image: Plants.chineseyam,
        name: t('Dioscorea batatas'),
        price: 0.000521119500248,
        description: t('The chinese...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Dioscorea+batatas'
      },
      {
        id: 46,
        image: Plants.Enterolobiumcyclocarpum,
        name: t('Enterolobium cyclocarpum'),
        price: 0.0000943594320248,
        description: t('A syrup...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Enterolobium+cyclocarpum'
      },
      {
        id: 47,
        image: Plants.yellowgentian,
        name: t('Yellow gentian'),
        price: 0.000485900248,
        description: t('Gentain root...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Gentiana%20lutea'
      },
      {
        id: 48,
        image: Plants.sweetteavine,
        name: t('Sweet Tea Vine'),
        price: 0.00042943594320248,
        description: t('The Whole plant...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Gynostemma+pentaphyllum'
      },
      {
        id: 49,
        image: Plants.pinktrumpettree,
        name: t('Handroanthus impetiginosus'),
        price: 0.000265900248,
        description: t('The wood...'),
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Handroanthus+impetiginosus'
      },
      {
        id: 50,
        image: Plants.seabuckthorn,
        name: t('Hippophae Rhamnoides'),
        price: 0.000565900248,
        description: t('The twigs...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Hippophae+rhamnoides'
      },
      {
        id: 51,
        image: Plants.hop,
        name: t('Humulus lupulus'),
        price: 0.000165900248,
        description: t('Hops...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Humulus+lupulus'

      },
      {
        id: 52,
        image: Plants.rockycandytuft,
        name: t('Iberis amara'),
        price: 0.000484320248,
        description: t('Little used...'),
        medrating: 2,
        source: ' https://pfaf.org/User/Plant.aspx?LatinName=Iberis+amara'
      },
      {
        id: 54,
        image: Plants.Kalmiapolifolia,
        name: t('Kalmia polifolia'),
        price: 0.0001119500248,
        description: t('Swamp...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Kalmia+polifolia'
      },
      {
        id: 55,
        image: Plants.truelaurel,
        name: t('True laurel'),
        price: 0.00042842,
        description: t('The bay...'),
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?latinname=laurus'
      },
      {
        id: 56,
        image: Plants.flax,
        name: t('Linum usitatissimum'),
        price: 0.000324123193,
        description: t('Linseed...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Linum+usitatissimum'
      },
      {
        id: 57,
        image: Plants.teatree,
        name: t('Melaleuca alternifolia'),
        price: 0.000307200248,
        description: t('Tea tree...'),
        medrating: 5,
        source: ' https://pfaf.org/USER/Plant.aspx?LatinName=Melaleuca+alternifolia'
      },
      {
        id: 58,
        image: Plants.yellowalfala,
        name: t('Medicago sativa'),
        price: 0.000123421261019921195002480,
        description: t('Alfalfa leaves...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Medicago+sativa'
      },
      {
        id: 59,
        image: Plants.sensitiveplant,
        name: t('Mimosa pudica'),
        price: 0.0002312312,
        description: t('According to...'),
        medrating: 2,
        source: ' https://pfaf.org/User/Plant.aspx?LatinName=Mimosa+pudica'
      },
      {
        //Origin: Suriname, AMazon Rainforest
        id: 60,
        image: Plants.astro,
        name: t('Astrocaryum vulgare'),
        price: 0.000342341,
        description: t('A decoction...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Astrocaryum+vulgare'
      },
      {
        id: 61,
        image: Plants.Monotropauniflora,
        name: t('Monotropa uniflora'),
        price: 0.000031311412,
        description: t('An infusion...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Monotropa+uniflora'
      },
      {
        id: 62,
        image: Plants.montanoa,
        name: t('Montanoa'),
        price: 0.000031311412,
        description: t('This shrub...'),
        medrating: 0,
        source: 'http://www.conabio.gob.mx/malezasdemexico/asteraceae/montanoa-tomentosa/fichas/ficha.htm#:~:text=Este%20arbusto%20es%20com%C3%BAn%20en,su%20uso%20es%20de%20cuidado'
      },
      {
        id: 63,
        image: Plants.waxmyrtle,
        name: t('Myrica communis'),
        price: 0.0021119500248,
        description: t('Wax myrtle...'),
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?LatinName=Myrica+cerifera'
      },
      {
        id: 64,
        image: Plants.myrtle,
        name: t('Myrtus communis'),
        price: 0.0002312324,
        description: t('The leaves...'),
        medrating: 3,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Myrtus+communis'
      },
      {
        id: 65,
        image: Plants.rosebay,
        name: t('Rosebay'),
        price: 0.000442634101992119500248,
        description: t('The leaves and...'),
        medrating: 2,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Nerium+oleander'
      },
      {
        id: 66,
        image: Plants.nigellaicarica,
        name: t('Nigella icarica'),
        price: 0.0002131413,
        description: t('One of...'),
        medrating: 0,
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8107825/'

      },
      {
        id: 67,
        image: Plants.beeorchid,
        name: t('Ophyrs apifera'),
        price: 0.00011119500248,
        description: t('Salap...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Ophrys+apifera'
      },
      {
        id: 68,
        image: Plants.greatyellowwoodsorrel,
        name: t('Oxalis grandis'),
        price: 0.000012342421,
        description: t('Some oxalis...'),
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Oxalis+grandis'
      },
      {
        id: 69,
        image: Plants.paeoniamascula,
        name: t('Paeonia mascula'),
        price: 0.0001119500248,
        description: t('The root is...'),
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Paeonia+mascula'
      },
      {
        id: 70,
        image: Plants.maypops,
        name: t('Passiflora incarnata'),
        price: 0.00022342481,
        description: t('Maypops...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Passiflora+incarnata'
      },
      {
        id: 71,
        image: Plants.Pinushalepensis,
        name: t('Pinus halepensis'),
        price: 0.0000261500248,
        description: t('The turpentine...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Pinus+halepensis'
      },
      {
        id: 72,
        image: Plants.dogrose,
        name: t('Rosa canina'),
        price: 0.000489500248,
        description: t('The petals...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Rosa+canina'
      },
      {
        id: 73,
        image: Plants.mastictree,
        name: t('Pistacia lentiscus'),
        price: 0.000012342421,
        description: t('Mastic...'),
        medrating: 3,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Pistacia+lentiscus'
      },
      {
        id: 74,
        image: Plants.plumeria,
        name: t('Plumeria'),
        price: 0.0004652294,
        description: t('Himanthus...'),
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=plumeria'
      },
      {
        id: 75,
        image: Plants.selfheal,
        name: t('Prunella vulgaris'),
        price: 0.00026500248,
        description: t('Self heal...'),
        medrating: 3,
        source: ' https://pfaf.org/user/plant.aspx?LatinName=Prunella+vulgaris'

      },
      {
        id: 76,
        image: Plants.kudzuvine,
        name: t('Pueraria montana lobata'),
        price: 0.00036500248,
        description: t('The kudzu...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Pueraria+montana+lobata'
      },
      {
        id: 77,
        image: Plants.corkoak,
        name: t('Quercus suber'),
        price: 0.0002500248,
        description: t('Any galls...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Quercus+suber'
      },
      {
        id: 78,
        image: Plants.Rheumpalmatumtanguticum,
        name: t('Rheum palmatum tanguticum'),
        price: 0.00384273,
        description: t('Rhubarb...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Rheum+palmatum+tanguticum'
      },
      {
        id: 79,
        image: Plants.westernwildrose,
        name: t('Rosa woodsii'),
        price: 0.00011234587,
        description: t('The seeds...'),
        medrating: 2,
        source: ' https://pfaf.org/User/Plant.aspx?LatinName=Rosa+woodsii'
      },
      {
        id: 80,
        image: Plants.rosemary,
        name: t('Rosemarinus'),
        price: 0.00074324245,
        description: t('Rosemary is...'),
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Rosmarinus+officinalis'
      },
      {
        id: 81,
        image: Plants.curleddock,
        name: t('Rumex crispus'),
        price: 0.00004348520834,
        description: t('Curled...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Rumex+crispus'
      },
      {
        id: 82,
        image: Plants.magnoliavine,
        name: t('Schisandra chinensis'),
        price: 0.000926101992119500248,
        description: t('The following...'),
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Schisandra+sphenanthera'
      },
      {
        id: 83,
        image: Plants.ringwormbush,
        name: t('Senna alata'),
        price: 0.000126101992119500248,
        description: t('Ringwrom...'),
        medrating: 4,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Senna+alata'
      },
      {
        id: 84,
        image: Plants.sarsaparilla,
        name: t('Rafflesia'),
        price: 0.000465002873,
        description: t('The roots are...'),
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Rauvolfia+serpentina'
      },
      {
        id: 85,
        image: Plants.reedmace,
        name: t('Typha latifolia'),
        price: 0.000081992119500248,
        description: t('The leaves are diu...'),
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?LatinName=Typha+latifolia         '
      },
      {
        id: 86,
        image: Plants.masticthyme,
        name: t('Thymus mastichina'),
        price: 0.00001141992119500248,
        description: t('The leaves especially...'),
        medrating: 3,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Thymus+mastichina'
      },
      {
        id: 87,
        image: Plants.redclover,
        name: t('Trifolium pratense'),
        price: 0.00001181992119500248,
        description: t('Red clover...'),
        medrating: 3,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Trifolium+pratense'
      },
      {
        id: 88,
        image: Plants.tuliptree,
        name: t('Thespesia populneoides'),
        price: 0.000211119500248,
        description: t('This species...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Thespesia+populneoides            '
      },
      {
        id: 89,
        image: Plants.soursop,
        name: t('Soursop'),
        price: 0.00001371992119500248,
        description: t('Sour sop...'),
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Annona+muricata'
      },
      {
        id: 90,
        image: Plants.valerian,
        name: t('Valeriana officinalis'),
        price: 0.000061920248,
        description: t('Valerian...'),
        medrating: 3,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Valeriana+officinalis'
      },
      {
        id: 92,
        image: Plants.greatmullein,
        name: t('Verbascum thapsus'),
        price: 0.0001920248,
        description: t('Great mullein...'),
        medrating: 3,
        source: '   https://pfaf.org/user/plant.aspx?LatinName=Verbascum+thapsus'
      },
      {
        id: 93,
        image: Plants.lesserperiwinkle,
        name: t('Typha latifolia'),
        price: 0.0001920248,
        description: t('The plant is sedative...'),
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Vinca+minor'
      },
      {
        id: 95,
        image: Plants.corydalis,
        name: t('Corydalis yanhusuo'),
        price: 0.0003184320248,
        description: t('yan hu...'),
        medrating: 3,
        source: 'https://pfaf.org/USER/Plant.aspx?LatinName=Corydalis+yanhusuo'
      },
      {
        id: 96,
        image: Plants.bixaorellana,
        name: t('Bixa orellana'),
        price: 0.0003184320248,
        description: t('The medical...'),
        medrating: 3,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Bixa+orellana'
      },
      {
        id: 97,
        image: Plants.blighia,
        name: t('Blighia sapida'),
        price: 0.00005184320248,
        description: t('The plant part...'),
        medrating: 2,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Blighia+sapida'
      },
      {
        id: 98,
        image: Plants.portulacao,
        name: t('Portulaca grandiflora'),
        price: 0.0003184320248,
        description: t('The entire plant...'),
        medrating: 2,
        source: 'https://pfaf.org/USER/Plant.aspx?LatinName=Portulaca+grandiflora'
      },
      {
        id: 99,
        image: Plants.prunusspinosa,
        name: t('Prunus spinosa'),
        price: 0.00004184320248,
        description: t('The flowers...'),
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Prunus+spinosa'
      },
      {
        id: 100,
        image: Plants.heli,
        name: t('Helicostylis tomentosa'),
        description: t('The red milky...'),
        price: 0.0003184320248,
        medrating: 2,
        source: 'https://pfaf.org/USER/Plant.aspx?LatinName=Helicostylis+tomentosa'
      },
      {
        id: 101,
        image: Plants.rubus,
        name: t("Rubus occidentalis"),
        description: t('The roots are cathartic...'),
        price: 0.00432,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?latinname=Rubus+occidentalis"
      },

      {
        id: 103,
        image: Plants.thuja,
        name: t('Thuja orientalis'),
        description: t('this plant is c...'),
        price: 0.0015625,
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?LatinName=Thuja+orientalis'
      },
      {
        id: 104,
        image: Plants.burdock,
        name: t('Arctium lappa'),
        description: t('Burdock...'),
        price: 0.000043213,
        medrating: 5,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Arctium+lappa'
      },
      {
        id: 105,
        image: Plants.plumbago,
        name: t("Plumbago Europaea"),
        description: t('The whole plants...'),
        price: 0.000034294,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Plumbago+europaea"
      },
      {
        id: 106,
        image: Plants.madigascarperiwinkle,
        name: t('Catharanthus roseus'),
        description: t('Madgascar...'),
        price: 0.0000392123,
        medrating: 4,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Catharanthus+roseus'
      },
      {
        id: 107,
        image: Plants.crepe,
        name: t("Crepe Myrtle"),
        description: t('The stem...'),
        price: 0.000301,
        medrating: 2,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Crepe+myrtle'
      },
      {
        id: 108,
        image: Plants.begonia,
        name: t("Hardy Begonia"),
        description: t('The tuberous...'),
        price: 0.0000942435,
        medrating: 2,
        source: 'https://pfaf.org/user/plant.aspx?latinname=begonia'
      },
      {
        id: 109,
        image: Plants.maple,
        name: t("Acer saccharinum"),
        description: t('An infusion of...'),
        price: 0.0000087657,
        medrating: 1,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Acer+saccharinum"
      },
      {
        id: 109,
        image: Plants.raintree,
        name: t("Koelreuteria paniculata"),
        description: t('The flowers are...'),
        price: 0.00005087657,
        medrating: 1,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Koelreuteria+paniculata"
      },
      {
        id: 109,
        image: Plants.africantuliptree,
        name: t("African Tulip Tree"),
        description: t('Approcimately...'),
        price: 0.000003342,
        medrating: 0,
        source: "https://journals.innovareacademics.in/index.php/ijpps/article/view/24096/14506"
      },
      {
        id: 110,
        image: Plants.solidago,
        name: t("Solidago canadensis"),
        description: t('Haemostatic...'),
        price: 0.000090242,
        medrating: 2,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Solidago+canadensis'
      },
      {
        id: 111,
        image: Plants.geraniumdissect,
        name: t("Geranium dissect"),
        description: t('The whole plant...'),
        price: 0.00000017808,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Geranium+dissect"
      },
      {
        id: 112,
        image: Plants.trigonella,
        name: t("Trigonella forum-graecum"),
        description: t('Fenugreek...'),
        price: 0.000942042,
        medrating: 5,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Trigonella+foenum-graecum"
      },
      {
        id: 113,
        image: Plants.gymnemasylvestre,
        name: t("Gymnema sylvestre"),
        description: t('Gurmar...'),
        price: 0.000456000500100001,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Gymnema+sylvestre"
      },
      {
        id: 114,
        image: Plants.rosablanda,
        name: t("Rosa blanda"),
        description: t('A decoction of...'),
        price: 0.00000257,
        medrating: 2,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Rosa+blanda"
      },
      {
        id: 115,
        image: Plants.aster,
        name: t("White Panicle Aster"),
        description: t('An infusion plant'),
        price: 0.00016787,
        medrating: 1,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Aster+lanceolatus"
      },
      {
        id: 116,
        image: Plants.dandelion,
        name: t("Taraxacum officinale"),
        description: t('The dandelion...'),
        price: 0.00035271,
        medrating: 3,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Taraxacum+officinale"
      },
      {
        id: 117,
        image: Plants.sunflower,
        name: t("Helianthus annuus"),
        description: t('A tea...'),
        price: 0.0005023439,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Helianthus+annuus"
      },
      {
        id: 118,
        image: Plants.rhustyphina,
        name: t("Rhus typhina"),
        description: t('Stag horn...'),
        price: 0.0000342451,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Rhus+typhina#google_vignette"
      },
      {
        id: 119,
        image: Plants.jewelweed,
        name: t("Jewelweed"),
        description: t('Jewelweed was...'),
        price: 0.000526252,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Impatiens+capensis"
      },
      {
        id: 120,
        image: Plants.japaneseknotweed,
        name: t("Japanese knotweed"),
        description: t('Possibly...'),
        price: 0.00005256219,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Reynoutria+japonica"
      },
      {
        id: 121,
        image: Plants.monarda,
        name: t("Wild bergamot"),
        description: t('Wild bergamot...'),
        price: 0.0000034738,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Monarda+fistulosa"
      },
      {
        id: 122,
        image: Plants.quercusrobur,
        name: t("English oak"),
        description: t('The oak...'),
        price: 0.00000324232,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Quercus+robur"
      },

      {
        id: 123,
        image: Plants.lobelia,
        name: t("Lobelia siphilitica"),
        description: t('The root is ca...'),
        price: 0.000323,
        medrating: 2,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Lobelia+siphilitica"
      },
      {
        id: 124,
        image: Plants.Elderberry,
        name: t("Elderberry"),
        description: t('Elder has a...'),
        price: 0.000043231,
        medrating: 3,
        source: "https://pfaf.org/user/plant.aspx?latinname=Sambucus+nigra"

      },
      {
        id: 125,
        image: Plants.mint,
        name: t("Virginia Mountain Mint"),
        description: t('A tea made...'),
        price: 0.00009323,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Pycnanthemum+virginianum"
      },
      {
        id: 126,
        image: Plants.lavandula,
        name: t("Lavandula angustifolia"),
        description: t('Lavender...'),
        price: 0.000176543,
        medrating: 3,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Lavandula+angustifolia"
      },
      {
        id: 127,
        image: Plants.rosanutkana,
        name: t("Rosa Nutkana"),
        description: t('An infusion root a...'),
        price: 0.00019231,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Rosa+nutkana"
      },
      {
        id: 128,
        image: Plants.pinus,
        name: t("Pinus palustris"),
        description: t('The turpentine obtained...'),
        price: 0.00020323,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Pinus+palustris"
      },
      {
        id: 129,
        image: Plants.lythrum,
        name: t("Lythrum salicaria"),
        description: t('Purple loosestrife...'),
        price: 0.00021424,
        medrating: 3,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Lythrum+salicaria"
      },
      {
        id: 130,
        image: Plants.betulapendula,
        name: t("Betula pendula"),
        description: t('Anti-inflammatory...'),
        price: 0.00022525,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Betula+pendula"
      },
      {
        id: 131,
        image: Plants.crataegusmonogyna,
        name: t("Hawthorn"),
        description: t('Hawthorn...'),
        price: 0.00043626,
        medrating: 5,
        source: "https://pfaf.org/user/plant.aspx?latinname=Crataegus+monogyna"
      },
      {
        id: 132,
        image: Plants.Prunuslaurocerasus,
        name: t("Prunus laurocerasus"),
        description: t('The fresh...'),
        price: 0.00018867,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Prunus+laurocerasus"
      },
      {
        id: 133,
        image: Plants.Centaureascabiosa,
        name: t("Centaurea scabiosa"),
        description: t('The roots and...'),
        price: 0.0000920166,
        medrating: 2,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Centaurea+scabiosa"
      },
      {
        id: 134,
        image: Plants.Leucanthemumvulgaree,
        name: t("Leucanthemum vulgare"),
        description: t('The whole d...'),
        price: 0.00012909,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Leucanthemum+vulgare"
      },
      {
        id: 135,
        image: Plants.Tanacetum,
        name: t("Tansy"),
        description: t('Tansy is...'),
        price: 0.0000920166,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Tanacetum+vulgare"
      },
      {
        id: 136,
        image: Plants.Berberisaquifolium,
        name: t("Berberis aquifolium"),
        description: t('Oregon grape...'),
        price: 0.0005520166,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Berberis+aquifolium"
      },
      {
        id: 137,
        image: Plants.Melilotus,
        name: t("Melilotus albus"),
        description: t('The whole herb...'),
        price: 0.0001591,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Melilotus+albus"
      },
      {
        id: 138,
        image: Plants.RedClover,
        name: t("Red Clover"),
        description: t('Red safe...'),
        price: 0.0001591,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Trifolium+pratense"
      },
      {
        id: 139,
        image: Plants.Rosarugosa,
        name: t("Rosa rugosa"),
        description: t('The leaves used...'),
        price: 0.0001591,
        medrating: 2,
        source: "https://pfaf.org/User/plant.aspx?LatinName=Rosa+rugosa"
      },
      {
        id: 140,
        image: Plants.Elaeagnusumbellata,
        name: t("Elaeagnus umbellata"),
        description: t('The flowers are astringent...'),
        price: 0.000347197,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Elaeagnus+umbellata"
      },
      {
        id: 141,
        image: Plants.Blacklocust,
        name: t("Black Locust"),
        description: t('Febrifuge...'),
        price: 0.0001591,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?latinname=Robinia+pseudoacacia"
      },
      {
        id: 142,
        image: Plants.Erigeron,
        name: t("Erigeron canadensis"),
        description: t('In traditional...'),
        price: 0.0000347197,
        medrating: 3,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Erigeron+canadensis"
      },
      {
        id: 143,
        image: Plants.Mugwort,
        name: t("Mugwort"),
        description: t('Mugwort has...'),
        price: 0.0003036642430492751,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Artemisia+vulgaris"
      },
      {
        id: 144,
        image: Plants.bermudagrass,
        name: t('Cynodon dactylon (Bermudagrass)'),
        description: t('Bermudagrass....'),
        price: 0.0003186633567578987,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Cynodon+dactylon"
      },
      {
        id: 145,
        image: Plants.crownflower,
        name: t("Calotropis gigantea"),
        description: t('The milky...'),
        price: 0.0004321231,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Calotropis+gigantea"
      },
      {
        id: 146,
        image: Plants.Jointedflatsedge,
        name: t("Cyperus articulatus"),
        description: t('Pirpiri...'),
        price: 0.0007589319296963962,
        medrating: 4,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Cyperus+articulatus"
      },

      {
        id: 147,
        image: Plants.Thymeleaf,
        name: t("Arenaria serpyllifolia"),
        description: t('The plant is antitussive...'),
        price: 0.0000357565578952794,
        medrating: 2,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Arenaria+serpyllifolia"
      },
      {
        id: 148,
        image: Plants.Terminalia,
        name: t("Terminalia catappa"),
        description: t('various parts...'),
        price: 0.00012947463609338055,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Terminalia+catappa"
      },
      {
        id: 151,
        image: Plants.foetida,
        name: t("Mauritius Hemp"),
        description: t('The root has been...'),
        price: 0.0000983529896,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Furcraea+foetida"
      },
      {
        id: 152,
        image: Plants.gomphrena,
        name: t("Gomphrena"),
        description: t('Pfaffia root...'),
        price: 0.000783529896,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Gomphrena"
      },
      {
        id: 153,
        image: Plants.caju,
        name: t("Caju"),
        description: t('The leaves are febrifuge...'),
        price: 0.00020707531228678734,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Anacardium+occidentale"
      },
      {
        id: 154,
        image: Plants.Spondiasmombin,
        name: t("Spondias mombin"),
        description: t('Both the bark...'),
        price: 0.0001911341797011994,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Spondias+mombin"
      },
      {
        id: 155,
        image: Plants.betel,
        name: t("Betel Nut Palm"),
        description: t('Betel palm...'),
        price: 0.00025952222,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Areca+catechu",
      },
      {
        id: 156,
        image: Plants.Euterpeoleracea,
        name: t("Euterpe oleracea"),
        description: t('A cold water...'),
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Euterpe+oleracea"
      },
      {
        id: 157,
        image: Plants.Mauritiaflexuosa,
        name: t("Mauritia flexuosa"),
        description: t('The oil from...'),
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Mauritia+flexuosa"
      },
      {
        id: 158,
        image: Plants.Ageratumconyzoides,
        name: t("Ageratum conyzoides"),
        description: t('The plant contains bet...'),
        price: 0.0002325581395348837,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Ageratum+conyzoides"
      },
      {
        id: 159,
        image: Plants.cannaindica,
        name: t("Canna indica"),
        description: t("The plant is used in the treatment of women's complaints[218]. A decoction of the root with fermented rice is used in the treatment of gonorrhoea and amenorrhoea[218]. The plant is also considered to be demulcent, diaphoretic and diuretic[218]."),
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?latinname=Canna+indica"
      },
      {
        id: 160,
        image: Plants.calabash,
        name: t("Calabash Tree"),
        description: t('The pulp of...'),
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Iris"
      },
      {
        id: 161,
        image: Plants.patula,
        name: t("French Marigold"),
        description: t('The whole herb aromatic...'),
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Tagetes+patula"
      },
      {
        id: 162,
        image: Plants.tageteserecta,
        name: t("African Marigold"),
        description: t('The whole anthelmintic...'),
        price: 0.0001433107819444356,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Tagetes+erecta"
      },
      {
        id: 163,
        image: Plants.trilobata,
        name: t("Singapore daisy"),
        description: t('A strong decoction...'),
        price: 0.00011433107819444356,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Sphagneticola+trilobata"
      },
      {
        id: 164,
        image: Plants.Ecliptaprostrata,
        name: t("Eclipta prostrata"),
        description: t('The plant treatment...'),
        price: 0.0003331433107819444356,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Eclipta+prostrata"
      },
      {
        id: 165,
        image: Plants.castor,
        name: t("Castor Oil"),
        description: t('The oil the seed...'),
        price: 0.0002433107819444356,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Ricinus+communis"
      },
      {
        id: 166,
        image: Plants.Jatrophacurcas,
        name: t("Barbados Nut"),
        description: t('Although widely...'),
        price: 0.0001762962962962963,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Jatropha+curcas"
      },
      {
        id: 167,
        image: Plants.AsthmaWeed,
        name: t("Asthma Weed"),
        description: t('Asthma weed...'),
        price: 0.0002183107819444356,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Euphorbia+hirta"
      },
      {
        id: 168,
        image: Plants.Loofah,
        name: t("Loofah"),
        description: t('The loofah...'),
        price: 0.00013793911724270316,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Luffa+aegyptiaca"
      },
      {
        id: 169,
        image: Plants.Lagenariasiceraria,
        name: t("Bottle Gourd"),
        description: t('The pulp around...'),
        price: 0.0001293069306930693,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Lagenaria+siceraria"
      },
      {
        id: 170,
        image: Plants.Kangkong,
        name: t("Kangkong"),
        description: t('The young shoots...'),
        price: 0.00027272727272727273,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Ipomoea+aquatica"
      },
      {
        id: 171,
        image: Plants.Mammeaamericana,
        name: t("Mammee Apple"),
        description: t('Uses of money...'),
        price: 0.00019148936170212766,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Mammea+americana"
      },
      {
        id: 172,
        image: Plants.RedSandalwood,
        name: t("Red Sandalwood"),
        description: t('The plant is antibacterial...'),
        price: 0.00016129032258064516,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Adenanthera+pavonina"
      },
      {
        id: 173,
        image: Plants.Copaiferaguyanensis,
        name: t("Copaifera guyanensis"),
        description: t('Copaiba-balsam...'),
        price: 0.00032129032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Copaifera+guyanensis"
      },
      {
        id: 174,
        image: Plants.Dipteryxodorata,
        name: t('Dipteryx odorata'),
        description: t('The bark is...'),
        price: 0.00014129032258064516,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Dipteryx+odorata"
      },
      {
        id: 175,
        image: Plants.Indigoferasuffruticosa,
        name: t('Indigofera suffruticosa'),
        description: t('The plant finds...'),
        price: 0.00012129032258064516,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Indigofera+suffruticosa"
      },
      {
        id: 176,
        image: Plants.IceCream,
        name: t('Ice Cream Bean'),
        description: t('A decoction crushed...'),
        price: 0.0001129032258064516,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Inga+edulis"
      },
      {
        id: 177,
        image: Plants.Sesbaniagrandiflora,
        name: t('Sesbania grandiflora (Vegetable Hummingbird)'),
        description: t('The leaves are aperient...'),
        price: 0.0001029032258064516,
        medrating: 2,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Sesbania+grandiflora"
      },
      {
        id: 178,
        image: Plants.SweetBasil,
        name: t('Sweet Basil'),
        description: t('Sacred basil...'),
        price: 0.000729032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Ocimum+tenuiflorum"
      },
      {
        id: 179,
        image: Plants.Camphor,
        name: t('Camphor'),
        description: t('Camphor has...'),
        price: 0.0003029032258064516,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Cinnamomum+camphora"
      },
      {
        id: 180,
        image: Plants.MuskMallow,
        name: t('Musk Mallow'),
        description: t('An emulsion...'),
        price: 0.0002039032258064516,
        medrating: 3,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Abelmoschus+moschatus"
      },
      {
        id: 181,
        image: Plants.Aniroba,
        name: t('Andiroba'),
        description: t('The bark tannins...'),
        price: 0.0005019032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Carapa+guianensis"
      },
      {
        id: 182,
        image: Plants.Arrowroot,
        name: t('Arrowroot'),
        description: t('Arrowroot is...'),
        price: 0.00014009032258064516,
        medrating: 3,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Maranta+arundinacea"
      },
      {
        id: 183,
        image: Plants.Breadfruit,
        name: t('Breadfruit'),
        description: t('Breadfruit has...'),
        price: 0.0005019032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Artocarpus+altilis"
      },
      {
        id: 181,
        image: Plants.Melaleucaleucadendra,
        name: t('Melaleuca leucadendra'),
        description: t('An essential oil...'),
        price: 0.0005019032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Melaleuca+leucadendra"
      },

    ]
  );


  return (

    <div className='contents'>
      <div   className='plant-containers'>
      
          {plant.map((val) => (
            <ApothecaryData val={val} key={val.id}>
            </ApothecaryData>))
          }
      </div>
    </div>
  );
};

export default Apothecary;
