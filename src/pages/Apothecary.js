import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

import '../App.css';
import Plants from "./Plants";

import ApothecaryData from "./ApothecaryData";

const Apothecary = () => {


  // Price: BTC
  // Medical Rating: 
  // Source:
  const [plant] = useState(
    [
      {
        id: 1,
        image: Plants.abiesbalsema,
        name: 'Abies balsamea',
        price: 0.00019,
        description: 'The resin obtained from the balsam fir has been used throughout the world and is a very effective antiseptic and healing agent. It is used as a healing and analgesic protective covering for burns, bruises, wounds and sores[213, 222, 226]. It is also used to treat sore nipples[213] and is said to be one of the best curatives for a sore throat[245]. The buds, resin, and/or sap are used in folk remedies for treating cancers, corns, and warts[269]. The resin is also antiscorbutic, diaphoretic, diuretic, stimulant and tonic[4, 171, 222]. It is used internally in propriety mixtures to treat coughs and diarrhoea, though taken in excess it is purgative[238]. A warm liquid of the gummy sap was drunk as a treatment for gonorrhoea[212]. A tea made from the leaves is antiscorbutic[4, 171]. It is used in the treatment of coughs, colds and fevers[222]. The leaves and young shoots are best harvested in the spring and dried for later use[238]. This plant was widely used medicinally by various North American Indian tribes[257]. The resin was used as an antiseptic healing agent applied externally to wounds, sores, bites etc., it was used as an inhalant to treat headaches and was also taken internally to treat colds, sore throats and various other complaints[257].',
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Abies+balsamea'
      },
      {
        id: 2,
        image: Plants.rhusglabra,
        name: 'Rhus Glabra',
        price: 0.000734,
        description: 'Smooth sumach was employed medicinally by various native North American Indian tribes who used it to treat a variety of complaints[257]. It is occasionally used in modern herbalism where it is valued for its astringent and antiseptic qualities. Some caution should be employed in the use of this species since it can possibly cause skin irritations. It is best only used under the supervision of a qualified practitioner. A tea made from the bark or root bark is alterative, antiseptic, astringent, galactogogue, haemostatic, rubefacient and tonic[4, 222, 238, 257]. It is used in the treatment of diarrhoea, fevers, general debility, sore mouths, rectal bleeding, uterine prolapse etc[222, 254]. It is used as a gargle to treat sore throats and applied externally to treat excessive vaginal discharge, burns and skin eruptions[254, 257]. The powdered bark can be applied as a poultice to old ulcers, it is a good antiseptic[4]. A tea made from the roots is appetizer, astringent, diuretic and emetic[222, 257]. An infusion is used in the treatment of colds, sore throats, painful urination, retention of urine and dysentery[257]. The root is harvested in the autumn and dried for later use[254]. An infusion of the green or dried branches has been used in the treatment of TB[257]. A decoction of the branches, with the seed heads, has been used to treat itchy scalps and as a bathing water for frost-bitten limbs[257]. The milky latex from the plant has been used as a salve on sores[257]. A tea made from the leaves was used in the treatment of asthma, diarrhoea and stomatitis[222]. A poultice of the leaves has been used to treat skin rashes[257]. The leaves have been chewed to treat sore gums and they have been rubbed on the lips to treat sore lips[257]. The berries are diuretic, emetic, emmenagogue, purgative and refrigerant[4, 257]. They are used in the treatment of late-onset diabetes, stranguary bowel complaints, febrile diseases, dysmenorrhoea etc[4, 254, 257]. They have been chewed as a remedy for bed-wetting[222, 257]. The blossoms have been chewed as a treatment for sore mouths[257]. A decoction of the blossoms has been used as a mouthwash for teething children[257]. An infusion of the blossoms has been used as an eye wash for sore eyes[257].',
        medrating: 3,
        source: ' https://pfaf.org/user/plant.aspx?LatinName=Rhus+glabra'
      },
      {
        id: 3,
        image: Plants.sweetacacia,
        name: 'Acacia farnesiana',
        price: 0.0002320248,
        description: 'The root is antispasmodic and tonic[4, 46, 61]. A tea made from the dried crushed petals of various peony species has been used as a cough remedy, and as a treatment for haemorrhoids and varicose veins[250].',
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Paeonia+mascula'
      },
      {
        id: 4,
        image: Plants.blackwood,
        name: 'Blackwood',
        description: 'The plant is Antirheumatic',
        price: 0.0001320248,
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Acacia+melanoxylon'
      },
      {
        id: 5,
        image: Plants.muskmilfoil,
        name: 'Musk Milfoil',
        description: 'The leaves and flowering stems are appetizer, diaphoretic, digestive, diuretic, stomachic and tonic[9, 46, 61]. An infusion is used in the treatment of liver and kidney disorders, as a tonic to the digestive system, exhaustion, nervous headaches etc[9]. The plant is harvested in the summer and can be dried for later use[9].',
        price: 0.000284320248,
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Achillea+erba-rotta+moschata'
      },
      {
        id: 6,
        image: Plants.californiayarrow,
        name: 'Achillea millefolium',
        description: 'Yarrow has a high reputation and is widely employed in herbal medicine, administered both internally and externally. It is used in the treatment of a very wide range of disorders but is particularly valuable for treating wounds, stopping the flow of blood, treating colds, fevers, kidney diseases, menstrual pain etc[218, 238, 254, 257]. The whole plant is used, both fresh and dried, and is best harvested when in flower[222]. Some caution should be exercised in the use of this herb since large or frequent doses taken over a long period may be potentially harmful[222], causing allergic rashes and making the skin more sensitive to sunlight[238]. The herb combines well with Sambucus nigra flowers (Elder) and Mentha x piperita vulgaris (Peppermint) for treating colds and influenza[268]. The herb is antiseptic, antispasmodic, mildly aromatic, astringent, carminative, cholagogue, diaphoretic, digestive, emmenagogue, odontalgic, stimulant, bitter tonic, vasodilator and vulnerary[4, 9, 14, 21, 54, 145, 165, 172, 238, 240, 254]. It also contains the anti-inflammatory agent azulene, though the content of this varies even between plants in the same habitat[238]. The herb is harvested in the summer when in flower and can be dried for later use[4]. The fresh leaf can be applied direct to an aching tooth in order to relieve the pain[268].',
        price: 0.0000014,
        medrating: 2,
        source: 'https://pfaf.org/user/plant.aspx?LatinName=Achillea+millefolium'
      },
      {
        id: 7,
        image: Plants.californianettle,
        name: 'Urtica dioica',
        description: 'Nettles have a long history of use in the home as a herbal remedy and nutritious addition to the diet[K]. A tea made from the leaves has traditionally been used as a cleansing tonic and blood purifier so the plant is often used in the treatment of hay fever, arthritis, anaemia etc[254]. The whole plant is antiasthmatic, antidandruff, astringent, depurative, diuretic, galactogogue, haemostatic, hypoglycaemic and a stimulating tonic[4, 9, 21, 36, 165, 238]. An infusion of the plant is very valuable in stemming internal bleeding[4], it is also used to treat anaemia, excessive menstruation, haemorrhoids, arthritis, rheumatism and skin complaints, especially eczema[238]. Externally, the plant is used to treat skin complaints, arthritic pain, gout, sciatica, neuralgia, haemorrhoids, hair problems etc[238]. The fresh leaves of nettles have been rubbed or beaten onto the skin in the treatment of rheumatism etc[257]. This practice, called urtification, causes intense irritation to the skin as it is stung by the nettles. It is believed that this treatment works in two ways. Firstly, it acts as a counter-irritant, bringing more blood to the area to help remove the toxins that cause rheumatism. Secondly, the formic acid from the nettles is believed to have a beneficial effect upon the rheumatic joints. For medicinal purposes, the plant is best harvested in May or June as it is coming into flower and dried for later use[4, 238]. This species merits further study for possible uses against kidney and urinary system ailments[222]. The juice of the nettle can be used as an antidote to stings from the leaves and an infusion of the fresh leaves is healing and soothing as a lotion for burns[4]. The root has been shown to have a beneficial effect upon enlarged prostate glands[254]. A homeopathic remedy is made from the leaves[4]. It is used in the treatment of rheumatic gout, nettle rash and chickenpox, externally is applied to bruises[4]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Urtica dioica Stinging Nettle for rheumatic ailments (internal use of leaf), irrigation therapy, for inflammatory disease of the lower urinary tract and prevention of kidney (gravel) formation, urination difficulty from benign prostatic hyperplasia (root) (see [302] for critics of commission E).',
        price: 0.00018111950024,
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Urtica+dioica'
      },
      {
        id: 8,
        image: Plants.acmella,
        name: 'Acmella oleracea',
        description: "The most common and widespread medicinal use is to treat toothache and throat and gum infections [299 ]. Worldwide the flower heads are used either fresh or dried and powdered, but the use of roots and leaves has been recommended as well [299 ]. The plant is further recommended as a cure for dysentery and rheumatism, and to enhance the immune system. It is used against blood parasites, especially against malaria, both prophylactic and curative [299 ]. The leaves are sialagogue [348 ]. The leaves and flower heads are analgesic, anthelmintic, antibacterial and antifungal [372 ]. Some of the medicinal compounds are destroyed by desiccation or freezing [372 ]. In-vitro studies have shown strong antibacterial activity against Escherichia, Klebsiella, Proteus, Pseudomonas, Salmonella and Staphylococcus. Also Candida albicans is inhibited [299 ].",
        price: 0.000211119500248,
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Acmella+oleracea'
      },
      {
        id: 9,
        image: Plants.sweetflag,
        name: 'Acorus calmus',
        description: 'Sweet flag has a very long history of medicinal use in many herbal traditions. It is widely employed in modern herbal medicine as an aromatic stimulant and mild tonic[4]. In Ayurveda it is highly valued as a rejuvenator for the brain and nervous system and as a remedy for digestive disorders[254]. However, some care should be taken in its use since some forms of the plant might be carcinogenic - see the notes above on toxicity for more information. The root is anodyne, aphrodisiac, aromatic, carminative, diaphoretic, emmenagogue, expectorant, febrifuge, hallucinogenic, hypotensive, sedative, stimulant, stomachic, mildly tonic and vermifuge[4, 7, 9, 21, 147, 165, 213, 240, 279]. It is used internally in the treatment of digestive complaints, bronchitis, sinusitis etc[238]. It is said to have wonderfully tonic powers of stimulating and normalizing the appetite. In small doses it reduces stomach acidity whilst larger doses increase stomach secretions[254] and it is, therefore, recommended in the treatment of anorexia nervosa[244]. However if the dose is too large it will cause nausea and vomiting[K]. Sweet flag is also used externally to treat skin eruptions, rheumatic pains and neuralgia[238]. An infusion of the root can bring about an abortion[213] whilst chewing the root alleviates toothache[213]. It is a folk remedy for arthritis, cancer, convulsions, diarrhoea, dyspepsia, epilepsy etc. Chewing the root is said to kill the taste for tobacco[218]. Roots 2 - 3 years old are used since older roots tend to become tough and hollow[4]. They are harvested in late autumn or early spring and are dried for later use[4]. The dry root loses 70% of its weight, but has an improved smell and taste[244]. It does, however, deteriorate if stored for too long[244]. Caution is advised on the use of this root, especially in the form of the distilled essential oil, since large doses can cause mild hallucinations[192]. See also the notes above on toxicity. A homeopathic remedy is made from the roots[9]. It is used in the treatment of flatulence, dyspepsia, anorexia and disorders of the gall bladder[9]. Bath oils containing calamus have caused redness of the skin (erythema) and dermatitis, particularly in hypersensitive individuals [301].',
        price: 0.0003320248,
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Acorus+calamus'
      },
      {
        id: 10,
        image: Plants.horsechesnut,
        name: 'Aesculus hippocastanum',
        description: "Horse chestnut is an astringent, anti-inflammatory herb that helps to tone the vein walls which, when slack or distended, may become varicose, haemorrhoidal or otherwise problematic[254]. The plant also reduces fluid retention by increasing the permeability of the capillaries and allowing the re-absorption of excess fluid back into the circulatory system[254]. This plant is potentially toxic if ingested and should not be used internally without professional supervision[254]. Alterative, analgesic, haemostatic and vulnerary[165, 218]. The bark is anti-inflammatory, astringent, diuretic, febrifuge, narcotic, tonic and vasoconstrictive[4, 7, 222]. It is harvested in the spring and dried for later use[4]. The plant is taken in small doses internally for the treatment of a wide range of venous diseases, including hardening of the arteries, varicose veins, phlebitis, leg ulcers, haemorrhoids and frostbite[238, 254]. It is also made into a lotion or gel for external application[254]. A tea made from the bark is used in the treatment of malaria and dysentery, externally in the treatment of lupus and skin ulcers[4, 222]. A tea made from the leaves is tonic and is used in the treatment of fevers and whooping cough[222, 240, 254]. The pericarp is peripherally vasoconstrictive[7]. The seeds are decongestant, expectorant and tonic[7, 21]. They have been used in the treatment of rheumatism, neuralgia and haemorrhoids[4]. They are said to be narcotic and that 10 grains of the nut are equal to 3 grains of opium[213]. An oil extracted from the seeds has been used externally as a treatment for rheumatism[254]. A compound of the powdered roots is analgesic and has been used to treat chest pains[257]. The buds are used in Bach flower remedies - the keywords for prescribing it are: Failure to learn by experience', 'Lack of observation in the lessons of life' and hence 'The need of repetition'[209]. The flowers are used in Bach flower remedies - the keywords for prescribing it are 'Persistent unwanted thoughts' and 'Mental arguments and conversations'[209]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Aesculus hippocastanum for chronic venous insufficiency in the legs (see [302] for critics of commission E).",
        price: 0.000351119500248,
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Aesculus+hippocastanum'
      },
      {
        id: 11,
        image: Plants.whitesnakeroot,
        name: 'Ageratina altissima',
        price: 0.000264320248,
        description: "The root is diaphoretic, diuretic, febrifuge, stimulant and tonic[257]. It has been used in the treatment of diarrhoea, gravel and urinary diseases[257]. It has also been used in herbal sweat baths to encourage sweating[257]. A decoction or infusion of the root has been taken to treat a fallen or inflamed womb[257]. The root has been chewed and held in the mouth as a treatment for toothache[257].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Ageratina+altissima'
      },
      {
        id: 12,
        image: Plants.giantelephantear,
        name: 'Alocasia macrorrhizo',
        price: 0.000184320248,
        description: "Giant taro is often used in traditional medicine in regions where the plant is cultivated as a food crop. All parts of the plant are used[283 , 311 ]. The sap of the stem is used to treat earache or boils in the ear[311 ]. Applied externally, it is used to treat cuts[311 ]. In New Guinea, headaches are treated with the sap and the leaves[311 ]. The leaves are said to be antimicrobial, antifungal, antioxidant, hepatoprotective, antidiarrheal, and antiprotozoal. The leaves and the rhizome are used in the treatment of impetigo, furunculosis, phlegmon and snake·bite in the form of a liquid extract for administration by mouth, and their residue is used for poulticing. They are also used in treating colic and vomiting, in a daily dose of 10 to 20g of dried rhizome in the form of a decoction[283 ]. The rhizome is used to make a plaster that is applied topically and is said to be effective against furunculosis[283 ]. Sexual insufficiency is treated by eating the leaves cooked in coconut milk[311 ]. The roots are used to treat swollen lymph glands[311 ]. The wood is used to treat stomach-ache and diarrhoea[311 ]. The leaves and rhizomes are collected throughout the year. The leaves are used fresh. The rhizomes are boiled hard to reduce itching compounds, then sun·dried or heat·dried[283 ].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Alocasia_macrorrhizos'

      },
      {
        id: 13,
        image: Plants.shortawnfoxtail,
        name: 'Alopecurus aequalis',
        price: 0.000012314,
        description: "The whole plant is antiphlogistic, depurative and diuretic[147]. It is used in the treatment of oedema, chickenpox and snakebites[147].",
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Alopecurus+aequalis'
      },
      {
        id: 14,
        image: Plants.commonmarshmallow,
        name: 'Althaea officinalis',
        price: 0.000294320248,
        description: "Marsh mallow is a very useful household medicinal herb. Its soothing demulcent properties make it very effective in treating inflammations and irritations of the mucous membranes such as the alimentary canal, the urinary and the respiratory organs[4, 254]. The root counters excess stomach acid, peptic ulceration and gastritis[254]. It is also applied externally to bruises, sprains, aching muscles, insect bites, skin inflammations, splinters etc[4, 238]. The whole plant, but especially the root, is antitussive, demulcent, diuretic, highly emollient, slightly laxative and odontalgic[4, 17, 21, 46, 165]. An infusion of the leaves is used to treat cystitis and frequent urination[254]. The leaves are harvested in August when the plant is just coming into flower and can be dried for later use[4]. The root can be used in an ointment for treating boils and abscesses[254]. The root is best harvested in the autumn, preferably from 2 year old plants, and is dried for later use[238]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Althaea officinalis Marsh Mallow for irritation of mouth and throat and associated dry cough/bronchitis (Root and leaf), mild stomach lining inflammation (root) (see [302] for critics of commission E).",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Althaea+officinalis'

      },
      {
        id: 15,
        image: Plants.bishopsweed,
        name: 'Ammi visnaga',
        price: 0.0007211119500248,
        description: "Visnaga is an effective muscle relaxant and has been used for centuries to alleviate the excruciating pain of kidney stones[254]. Modern research has confirmed the validity of this traditional use[254]. Visnagin contains khellin, from which particularly safe pharmaceutical drugs for the treatment of asthma have been made[254]. The seeds are diuretic and lithontripic[46]. They contain a fatty oil that includes the substance 'khellin'. This has been shown to be of benefit in the treatment of asthma[238]. Taken internally, the seeds have a strongly antispasmodic action on the smaller bronchial muscles[254], they also dilate the bronchial, urinary and blood vessels without affecting blood pressure[238]. The affect last for about 6 hours and the plant has practically no side effects[254]. The seeds are used in the treatment of asthma, angina, coronary arteriosclerosis and kidney stones[238]. By relaxing the muscles of the urethra, visnaga reduces the pain caused by trapped kidney stones and helps ease the stone down into the bladder[254]. The seeds are harvested in late summer before they have fully ripened and are dried for later use[254].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Ammi%20visnaga'

      },
      {
        id: 16,
        image: Plants.blackpoplar,
        name: 'Populus nigra',
        price: 0.000036500248,
        description: "The leaf buds are covered with a resinous sap that has a strong turpentine odour and a bitter taste[4, 213]. They also contain salicin, a glycoside that probably decomposes into salicylic acid (aspirin) in the body[213]. The buds are antiscorbutic, antiseptic, balsamic, diaphoretic, diuretic, expectorant, febrifuge, salve, stimulant, tonic and vulnerary[4, 9, 21, 165, 238]. They are taken internally in the treatment of bronchitis and upper respiratory tract infections, stomach and kidney disorders[4, 238]. They should not be prescribed to patients who are sensitive to aspirin[238]. Externally, the buds are used to treat colds, sinusitis, arthritis, rheumatism, muscular pain and dry skin conditions[238]. They can be put in hot water and used as an inhalant to relieve congested nasal passages[213]. The buds are harvested in the spring before they open and are dried for later use[238]. The stem bark is anodyne, anti-inflammatory, antiseptic, astringent, diuretic and tonic[14, 46, 61, 178, 218]. The bark contains salicylates, from which the proprietary medicine aspirin is derived[238]. It is used internally in the treatment of rheumatism, arthritis, gout, lower back pains, urinary complaints, digestive and liver disorders, debility, anorexia, also to reduce fevers and relieve the pain of menstrual cramps[14, 46, 61, 178, 213, 238]. Externally, the bark is used to treat chilblains, haemorrhoids, infected wounds and sprains[238]. The bark is harvested from side branches or coppiced trees and dried for later use[238].",
        medrating: 3,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Populus+nigra'
      },

      {
        id: 18,
        image: Plants.commonbugloss,
        name: 'Anchusa officinalis',
        price: 0.000081992119500248,
        description: "All parts of the plant are demulcent and expectorant[9]. They are used externally to treat cuts, bruises and phlebitis and internally to treat coughs and bronchial catarrh[9]. A homeopathic remedy is made from the plant[9]. It is used in the treatment of stomach and duodenal ulcers[9].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Anchusa+officinalis'
      },
      {
        id: 19,
        image: Plants.greenchireta,
        name: 'Andrographis paniculata',
        price: 0.00038119500248,
        description: "Green chireta has a long history of traditional medicinal use in India, various parts of South-East Asia, Central America and the Caribbean[ 310 ]. The roots and leaves are considered to be alterative, anthelmintic, bitter, febrifuge, stomachic and tonic[ 46 ]. There has been a large amount of research into the effects of this plant, several medically active compounds have been identified with a wide range of effective actions[ 310 ]. The aerial parts of the plant contain a large number of diterpenes, whilst the presence of flavones in the root has also been reported[ 310 ]. Extracts and purified diterpenes and flavonoids have been investigated for a multitude of pharmacological effects. Trials using the leaf extract have concluded that the powdered leaves have the capacity to significantly shorten the duration of common colds and that the leaves can be as effective as paracetamol in relieving the fever and sore throat of people with pharyngotonsilitis [ 310 ] The leaves have also been shown to have significant anti-inflammatory effect and also significantly inhibit oedema[ 310 ] An ethanol extract of the leaves stimulates both antigen-specific and nonspecific immune responses more than the purified leaf extracts. An ethanol extract has also shown significant antipyretic activity. A standardized leaf extract exhibits significant antipyretic properties and is an effective analgesic[ 310 ]. The crude water extract of the leaves, as well as the semi-purified n-butanol and aqueous fractions, have shown significant hypotensive activity[ 310 ]. In one trial, a 10% infusion of the herb applied intravenously at 1 ml/kg bodyweight reduced the blood pressure by 6-10 mm Hg in 10-20 seconds[ 310 ]. An extract of the leaves has also been shown to lower cholesterol levels, whilst antithrombotic effects were also observed. It is believed that these effects might be at least partially due to flavones present in the extract[ 310 ]. Administered intraperitoneally, the diterpenes andrographiside and neoandrographolide (found in the leaves) have a significant protective effect on the liver. An extract of the leaves has shown antidiarrhoeal activity[ 310 ]. The diterpenes andrographolide and neoandrographolide isolated from the alcoholic extract showed potent antisecretory activity against Escherichia coli enterotoxin induced secretions. Various compounds have shown significant anti-ulcer properties. It is suggested that this effect is due to the antisecretory activity and protective effect on the gastric mucosa[ 310 ]. Oral administration of 20 mg of the dry leaf powder for 60 days has an antifertility effect in males[ 310 ]. The alcoholic extract of the rhizomes exhibits good in vitro anthelmintic activity against Ascaris lumbricoides[ 310 ]. Neoandrographolide, isolated from the leaves, exhibits significant antimalarial activity[ 310 ] Dehydroandrographolide succinic acid monoester, derived from andrographolide, has been found to inhibit the human immunodeficiency virus (HIV) in vitro[ 310 ]. A leaf infusion administered intraperitoneally, has an LD50 at 71.1 mg/10 g body weight (acute toxicity). At a concentration of 1 mg/kg it lowers the body temperature at least 2?C[ 310 ]. The plant used to be considered an effective remedy against snake bites and it is still used locally for this[ 310 ]. It has also been reported as useful to treat insect bites and, in combination with Orthosiphon aristatus, as a remedy for diabetes[ 310 ]. An infusion or sap from the crushed leaves has been recommended for the treatment of fever, as a tonic, and for itching skin eruptions[ 310 ]. A decoction of the leaves or roots is used against stomach-ache, dysentery, typhus, cholera, influenza and bronchitis, as a vermifuge, and is considered a diuretic[ 310 ]. Pills or infusions are also recommended to treat female disorders, dyspepsia, hypertension, rheumatism, gonorrhoea, amenorrhoea, torpid liver and jaundice[ 310 ]. Another use is as a poultice on swollen legs or feet, vitiligo and piles[ 310 ]. Furthermore, Andrographis paniculata is considered to be anti-inflammatory and immunosuppressive, but reports on antibacterial activity are contradictory[ 310 ]. The leaves should be harvested when the inflorescence axis starts to grow, because the maximum accumulation of andrographolide is at that stage[ 310 ]. The roots are harvested when leaves start discolouring or wilting[ 310 ]. Yields of 1 - 1.5 kg fresh weight/plant are obtained from 7-month-old plants[ 310 ]. In general, the herb is used fresh and consumed within a few days after collection[ 310 ]. However, leaves and roots should be washed and dried in the sun or artificially before storage[ 310 ].",
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Andrographis+paniculata'
      },
      {
        id: 20,
        image: Plants.bigbluestem,
        name: 'Andropogon gerardii',
        price: 0.0001020248,
        description: "The plant is analgesic, carminative and diuretic[222]. A decoction of the roots is used in the treatment of stomach-aches and flatulence[222, 257]. A tea made from the leaves is used as a wash to relieve fevers and general debility[222, 257].",
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Andropogon+gerardii'

      },
      {
        id: 21,
        image: Plants.blacktupello,
        name: 'Nyssa sylvatica',
        price: 0.00011119500248,
        description: "The bark is emetic, ophthalmic and vermifuge[257]. An infusion has been used as a bath and also given to children with worms[257]. A strong decoction is used to cause vomiting when unable to retain food[257]. A strong ooze from the roots is used as eye drops[257].",
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Nyssa+sylvatica'

      },
      {
        id: 22,
        image: Plants.indianbarberry,
        name: 'Berberis aristata',
        price: 0.0002184320248,
        description: "The dried stem, root bark and wood are alterative, antiperiodic, deobstruent, diaphoretic, laxative, ophthalmic and tonic (bitter)[46, 61, 158, 194, 240]. An infusion is used in the treatment of malaria, eye complaints, skin diseases, menorrhagia, diarrhoea and jaundice[240, 243]. Berberine, universally present in rhizomes of Berberis species, has marked antibacterial effects. Since it is not appreciably absorbed by the body, it is used orally in the treatment of various enteric infections, especially bacterial dysentery[218]. It should not be used with Glycyrrhiza species (Liquorice) because this nullifies the effects of the berberine[218]. Berberine has also shown antitumour activity[218].",
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?LatinName=Berberis+aristata'

      },
      {
        id: 23,
        image: Plants.angelicaanomala,
        name: 'Angelica anomala',
        price: 0.0002987429,
        description: "The root is analgesic, antibacterial, antidote, carminative, depuritive, diaphoretic, poultice and is also used to treat women's complaints[147, 176, 178, 218]. The drug (an extract of the root?) lowers arterial pressure, increases diuresis and stimulates contraction of the smooth muscles, especially the uterus, but without causing abortion[218]. The plant is used in the treatment of colds and headaches, coryza, leucorrhoea, boils and abscesses[147]. Small quantities of angelicotoxin, one of the active ingredients in the root, have an excitatory effect on the respiratory centre, central nervous system and vasculomotor centre. It increases the rate of respiration, increases blood pressure, decreases the pulse, increases the secretion of saliva and induces vomiting[176]. In large doses it can cause convulsions and generalized paralysis[176].",
        medrating: 2,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Angelica+anomala'

      },
      {
        id: 24,
        image: Plants.chineseangelica,
        name: 'Angelica sinensis',
        price: 0.0004184320248,
        description: "Dang Gui is a well-known Chinese herb that has been used in the treatment of female ailments for thousands of years. Its reputation is perhaps second only to ginseng (Panax ginseng) and it is particularly noted for its 'blood tonic' effects on women[218]. The root has a sweet pungent aroma that is very distinctive and it is often used in cooking, which is the best way to take it as a blood tonic[254]. One report says that the root contains vitamin B12 and can be used in the treatment of pernicious anaemia[176]. The root is alterative, analgesic, anticholesterolemic, anti-inflammatory, antispasmodic, deobstruent, emmenagogue, emollient, hepatic, laxative, sedative and peripheral vasodilator[165, 176, 218]. It is commonly used in the treatment of a wide range of women's complaints where it regulates the menstrual cycle and relieves period pain[218, 238, 254] and also to ensure a healthy pregnancy and easy delivery[218]. However conflicting information suggests it should not be used during pregnancy [301] and should not be used if menstrual flow is heavy or during menstration [301]. It is an ideal tonic for women with heavy menstruation who risk becoming anaemic[254]. The water-soluble and non-volatile elements of the root increase the contraction of the uterus whilst the volatile elements can relax the muscle of the uterus[176]. Its use prevents the decrease of liver glycogen and protects the liver[176]. Used for menopausal symptoms (hot flushes) [301]. It has an antibacterial action, inhibiting the growth of various bacteria including Bacillus dysenteriae, Bacillus typhi, B. comma, B. cholerae and haemolytic streptococci[176]. The root is an ingredient of 'Four Things Soup', the most widely used woman's tonic in China[254]. The other species used are Rehmannia glutinosa, Ligusticum wallichii and Paeonia lactiflora[254]. The root is harvested in the autumn or winter and dried for later use[254, 283]. It has been used to treat pulmonary hypertension in combination with the allopathic medication nifedipine [301]. Other uses include: constipation (a laxative), trauma injuries, ulcers, rheumatism and malaria [301].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Angelica+sinensis'

      },
      {
        id: 25,
        image: Plants.thalecross,
        name: 'Arabidopsis thaliana',
        price: 0.0001920248,
        description: "The plant is used to cure sores in the mouth[240].",
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Arabidopsis+thaliana'
      },
      {
        id: 26,
        image: Plants.bearberry,
        name: 'Arctostaphylos uva-ursi',
        price: 0.0007211119500248,
        description: "Bearberry was commonly used by many native North American Indian tribes to treat a wide range of complaints and has also been used in conventional herbal medicine for hundreds of years, it is one of the best natural urinary antiseptics[254]. The leaves contain hydroquinones and are strongly antibacterial, especially against certain organisms associated with urinary infections[238]. The plant should be used with caution, however, because hydroquinones are also toxic[222]. The leaves are antiseptic, astringent, diuretic, lithontripic, hypnotic and tonic[7, 9, 21, 102, 165, 172, 192]. The dried leaves are used in the treatment of a variety of complaints[4]. These leaves should be harvested in early autumn, only green leaves being selected, and then dried in gentle heat[4]. A tea made from the dried leaves is much used for kidney and bladder complaints and inflammations of the urinary tract such as acute and chronic cystitis and urethritis, but it should be used with caution and preferably only under the supervision of a qualified practitioner[4, 21, 46, 172, 222, 254]. The tea is more effective if the urine is alkaline, thus it is best used in combination with a vegetable-based diet[254]. Externally, a poultice of the infused leaves with oil has been used as a salve to treat rashes, skin sores etc, and as a wash for a baby's head[257]. An infusion of the leaves has been used as an eyewash, a mouthwash for cankers and sore gums and as a poultice for back pains, rheumatism, burns etc[257]. The dried leaves have been used for smoking as an alternative to tobacco[238]. One report says that it is unclear whether this was for medicinal purposes or for the intoxicated state it could produce[192], whilst another says that the leaves were smoked to treat headaches and also as a narcotic[257]. The herb should not be prescribed to children, pregnant women or patients with kidney disease[238]. Another report says that some native North American Indian tribes used an infusion of the stems, combined with blueberry stems (Vaccinium spp) to prevent miscarriage without causing harm to the baby, and to speed a woman's recovery after the birth[257]. Other uses: fluid retention and bed wetting. Claimed to strengthen the heart muscle and urinary tract and to return the womb to its normal size after childbirth [301]. Treatment should be short (seven days) and used with an alkaline diet [301]. Not recommended for children under 12.",
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Arctostaphylos+uva-ursi'
      },
      {
        id: 27,
        image: Plants.thymesandword,
        name: 'Arenaria serpyllifolia',
        price: 0.00023426101992119500248,
        description: "The plant is antitussive, depurative, diuretic and febrifuge[[147, 218]. A decoction of the leaves is used in the treatment of dysentery[218]. It is also used in the treatment of bladder complaints, calculus troubles and acute and chronic cystitis[240].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Arenaria+serpyllifolia'
      },
      {
        id: 28,
        image: Plants.shatavari,
        name: 'Asparagus racemosus',
        price: 0.000371920248,
        description: "Shatavari (this is an Indian word meaning 'a woman who has a hundred husbands') is the most important herb in Ayurvedic medicine for dealing with problems connected women's fertility[238]. The rhizome is a soothing tonic that acts mainly on the circulatory, digestive, respiratory and female reproductive organs[238]. The root is alterative, antispasmodic, aphrodisiac, demulcent, diuretic, galactogogue and refrigerant[240, 243]. It is taken internally in the treatment of infertility, loss of libido, threatened miscarriage, menopausal problems, hyperacidity, stomach ulcers and bronchial infections[238]. Externally it is used to treat stiffness in the joints[238]. The root is used fresh in the treatment of dysentery. It is harvested in the autumn and dried for use in treating other complaints[238]. The whole plant is used in the treatment of diarrhoea, rheumatism, diabetes and brain complaints[243].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Asparagus+racemosus'
      },
      {
        id: 29,
        image: Plants.herbofgrace,
        name: 'Bacopa monnieri',
        price: 0.000172321920248,
        description: "Brahmi is a very important Ayurvedic herb, being particularly valued for its beneficial effect upon the nervous system. Its main active substances are steroidal saponins, including bacosides[ 254 ]. The whole plant is used - roots, stems and leaves[ 304 ]. It is cardiac, nervine tonic, sedative and vasoconstrictor[ 304 ]. The leaves and stalks are aperient and diuretic[ 304 ]. An alcohol extract of the whole plant has been shown to have anticancer activity against Walker carcinoma[ 304 ]. An alcohol extract of plant is a muscle relaxant and cardiovascular relaxant[ 348 ]. Research in India suggests that brahmi improves mental function, memory and concentration, and also reduces learning time[ 254 ]. The plant contains the alkaloid brahmine, which has been shown to raise blood pressure when administered in therapeutic dosage, but to be hypotensive when given in very strong dosage[ 348 ]. A tranquilizing saponin that resembles reserpine is also present[ 348 ]. The plant is used principally in the treatment of a range of nervous system disorders including neuralgia, hysteria, epilepsy, insanity, neurasthenia, aphonia and hoarseness[ 254 , 304 ]. The plant is also taken internally in a number of other conditions including indigestion, ulcers, wind, constipation, asthma, bronchitis and infertility[ 254 ]. A poultice made of the boiled plant is applied to the chests of children in the treatment of acute bronchitis and other coughs[ 304 ]. A juice made from the plant is applied as a wash on burns[ 272 ].",
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Bacopa+monnieri'

      },
      {
        id: 30,
        image: Plants.banksiaattenuata,
        name: 'banksia attenuata',
        price: 0.000123421261019921195002480,
        description: "An infusion of the flowers was used to relieve coughs and cold and as a refreshing drink.",
        medrating: 0,
        source: ' https://www.friendsofqueensparkbushland.org.au/banksia-attenuata/#:~:text=Banksia%20attenuataCommon%20name%3A%20Candle%20Banksia&text=Aboriginal%20name%3A%20Piara.,and%20as%20a%20refreshing%20drink.'
      },
      {
        id: 31,
        image: Plants.batflower,
        name: 'Batflower',
        price: 0.0000194320248,
        description: "Tacca chantrieri is rare, but sometimes available from online nurseries. A white variety (Tacca integrifolia) of this plant exists, but my sources tell me that White Bat Flower is not as easy to grow indoors.",
        medrating: 0,
        source: ' https://www.guide-to-houseplants.com/bat-flower.html'
      },
      {
        id: 32,
        image: Plants.orchid,
        name: 'Orchid',
        price: 0.0000194320248,
        description: "The root is carminative[ 480 ]. The flowers are laxative[ 480 ]. The bark, roots and flowers, when mixed with rice-water, are used in poultice form as a maturant[ 480 ].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Bauhinia+purpurea'
      },
      {
        id: 33,
        image: Plants.beggarsticks,
        name: 'Bidens pilosa',
        price: 0.0009832742,
        description: "The root is carminative[ 480 ]. The flowers are laxative[ 480 ]. The bark, roots and flowers, when mixed with rice-water, are used in poultice form as a maturant[ 480 ].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Bauhinia+purpurea'
      },
      {
        id: 34,
        image: Plants.potmarigold,
        name: 'Calendula Officinalis',
        price: 0.0001594320248,
        description: "Pot marigold is one of the best known and versatile herbs in Western herbal medicine and is also a popular domestic remedy[4, 254]. It is, above all, a remedy for skin problems and is applied externally to bites and stings, sprains, wounds, sore eyes, varicose veins etc[4, 254]. It is also a cleansing and detoxifying herb and is taken internally in treating fevers and chronic infections[4, 254]. Only the common deep-orange flowered variety is considered to be of medicinal value[4]. The whole plant, but especially the flowers and the leaves, is antiphlogistic, antiseptic, antispasmodic, aperient, astringent, cholagogue, diaphoretic, emmenagogue, skin, stimulant and vulnerary[4, 7, 9, 21, 46, 165, 201]. The leaves can be used fresh or dried, they are best harvested in the morning of a fine sunny day just after the dew has dried from them[4]. The flowers are also used fresh or dried, for drying they are harvested when fully open and need to be dried quickly in the shade[4]. A tea of the petals tones up the circulation and, taken regularly, can ease varicose veins[201]. An application of the crushed stems to corns and warts will soon render them easily removable[7]. The leaves, blossoms and buds are used to make a homeopathic remedy[232]. It is used internally in order to speed the healing of wounds[232]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Calendula officinalis for inflammation of the mouth and pharynx (throat), wounds and burns(see [302] for critics of commission E).",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Calendula+officinalis'

      },
      {
        id: 35,
        image: Plants.callunavulgaris,
        name: 'Calluna vulgaris',
        price: 0.000091094320248,
        description: "Heather has a long history of medicinal use in folk medicine. In particular it is a good urinary antiseptic and diuretic, disinfecting the urinary tract and mildly increasing urine production[254]. The flowering shoots are antiseptic, astringent, cholagogue, depurative, diaphoretic, diuretic, expectorant, mildly sedative and vasoconstrictor[7, 8, 9, 21, 165, 238]. The plant is often macerated and made into a liniment for treating rheumatism and arthritis, whilst a hot poultice is a traditional remedy for chilblains[7, 254]. An infusion of the flowering shoots is used in the treatment of coughs, colds, bladder and kidney disorders, cystitis etc[9, 238, 254]. A cleansing and detoxifying plant, it has been used in the treatment of rheumatism, arthritis and gout[254]. The flowering stems are harvested in the autumn and dried for later use[7]. The plant is used in Bach flower remedies - the keywords for prescribing it are 'Self-centredness' and 'Self-concern'[209]. A homeopathic remedy is made from the fresh branches[9]. It is used in the treatment of rheumatism, arthritis and insomnia[9].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Calluna+vulgaris'
      },
      {
        id: 36,
        image: Plants.caper,
        name: 'Capparis Spinosa',
        price: 0.000091094320248,
        description: "The root-bark is analgesic, anthelmintic, antihaemorrhoidal, aperient, deobstruent, depurative, diuretic, emmenagogue, expectorant, tonic and vasoconstrictive[7]. It is used internally in the treatment of gastrointestinal infections, diarrhoea, gout and rheumatism[238, 240]. Externally, it is used to treat skin conditions, capillary weakness and easy bruising[254]. The bark is harvested in the autumn and dried for later use[238]. The stem bark is bitter and diuretic[254]. If taken before meals it will increase the appetite[254]. The unopened flower buds are laxative[254]. They are used internally in the treatment of coughs, and externally to treat eye infections[238]. The buds are a rich source of compounds known as aldose-reductose inhibitors - it has been shown that these compounds are effective in preventing the formation of cataracts. The buds are harvested before the flowers open and can be pickled for later use - when prepared correctly they are said to ease stomach pain[254]. A decoction of the plant is used to treat vaginal thrush[7, 254]. The leaves are bruised and applied as a poultice in the treatment of gout[240].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Capparis+spinosa'
      },
      {
        id: 37,
        image: Plants.goldenchaintree,
        name: 'Cassia fistula',
        price: 0.00073594320248,
        description: "The ripe pods and seeds are widely used in both traditional and conventional medicine as a laxative. The root-bark, leaves and flowers also have laxative properties, but to a lesser extent[ 299 ]. In modern medicine, the fruit pulp is sometimes used as a mild laxative in paediatrics[ 299 ]. The fruit pulp and leaves are rich in anthraquinone derivatives (around 2%), and glycosides, which are responsible for the laxative properties[ 299 ]. The fruit pulp is rich in pectins and mucilage[ 299 ]. In-vitro and in-vivo tests have shown that the seed powder has amoebicidal and cysticidal properties against Entamoeba histolytica and that it could cure intestinal amoebiasis of humans. The aqueous fraction of the pods has produced a significant decrease in glycaemia[ 299 ]. Aqueous and methanolic bark extracts have shown significant anti-oxidant and anti-inflammatory activities[ 299 ]. An alcohol extract of the leaves has shown antibacterial activity in vivo against Staphylococcus aureus and Pseudomonas aeruginosa, plus accelerated wound healing[ 299 ]. A water extract of the leaves has shown antifungal activity against the human skin pathogens Trichophyton spp., Epidermatophyton floccosum and Microsporum ferruginum[ 299 ]. The pods are used as a remedy for malaria, blood poisoning, anthrax, diabetes and dysentery[ 299 ]. The pods contain a sweet, sticky pulp[ 307 ]. A decoction of this is taken as a cure for kidney stones, as a vermifuge and as a laxative[ 299 ]. The pulp is extracted from the pods by bruising them and then boiling them in water, after which the decoction is evaporated. It may be obtained from fresh pods by opening them at the sutures and removing the pulp with a spatula[ 459 ]. The pulp is apt to become sour if long exposed to the air, or mouldy if kept in a damp place[459. The bark or leaves are widely applied to skin problems[299. Broken bones and tropical ulcers are bandaged with bark scrapings and leaf sap[ 299 ]. The heartwood is traditionally applied as an anthelmintic[ 299 ]. A decoction of the roots is applied to purify wounds and ulcers[ 299 ]. In India the roots are used to treat fevers[ 299 ]. The concentration of sennoside in the leaves of Cassia fistula is highest soon after the onset of the rainy season, when new leaves have appeared and flowering started[ 299 ]. The sennoside content of the pods is highest at the mid-stage of fruit maturation, when the pods are pale brown[ 299 ].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Cassia+fistula'
      },
      {
        id: 38,
        image: Plants.trumpettree,
        name: 'Cecropia peltata',
        price: 0.0000943594320248,
        description: "The bark and leaves are anticoagulant, antiinflammatory, antitumor, astringent, cardiotonic, diuretic, hypotensive and vasodilator[ 348 ]. A decoction of the young leaves is used to treat liver ailments and dropsy[ 46 ]. A tea or decoction of the dried leaves or inner stem-bark is used to treat hypertension, Bright's disease, blennorrhagia, albuminuria, kidney infections, heart conditions and nervous diseases, and to promote good kidney function[ 348 ]. A tea prepared from the dried leaves is used as a treatment for back pain[ 348 ]. An infusion of the leaves is sometimes injected vaginally after childbirth[ 348 ]. A hot poultice of the young shoots is used as a dressing for ulcers, abscesses, wounds, cuts and bush sores[ 348 ]. The dried leaves are smoked to alleviate asthma[ 307 ]. The juice of the plant is used as a caustic to remove warts[ 46 ]. The sap is used to treat fresh cuts[ 348 ]. A decoction of the inner bark is used in the treatment of dysentery[ 348 ].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Cecropia+peltata'
      },
      {
        id: 39,
        image: Plants.cornflower,
        name: 'Centaurea cyanus',
        price: 0.0001119500248,
        description: "Cornflower has a long history of herbal use, though it is seldom employed nowadays. In France it is still used as a remedy for tired eyes, but opinions differ as to its efficacy[254, 268]. Traditionally it is said to work best on blue eyes, whilst Plantago major (great plantain) was used for brown eyes[268]. The dried flowers are antipruritic, antitussive, astringent, weakly diuretic, emmenagogue, ophthalmic, very mildly purgative, and tonic[4, 7, 9, 21, 201, 240]. An infusion can be used in the treatment of dropsy, constipation, or as a mouthwash for ulcers and bleeding gums[9, 238]. This infusion is also taken as a bitter tonic and stimulant, improving the digestion and possibly supporting the liver as well as improving resistance to infections[254]. A water distilled from the petals was formerly in repute as a remedy for weak eyes[4] and a soothing lotion for conjunctivitis[7, 240]. The seeds are used as a mild laxative for children[7, 254]. A decoction of the leaves is antirheumatic[7, 254]. Antifungal [303].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Centaurea+cyanus'
      },
      {
        id: 40,
        image: Plants.spadeleaf,
        name: 'Centella asiatica',
        price: 0.00023428423,
        description: "Gotu kola is an outstandingly important medicinal herb that is widely used in the Orient[238] and is becoming increasingly popular in the West[254]. Its Indian name is 'Brahmi' which means 'bringing knowledge of the Supreme Reality' and it has long been used there medicinally and as an aid to meditation[238]. It is a useful tonic and cleansing herb for skin problems and digestive disorders[254]. In India it is chiefly valued as a revitalizing herb that strengthens nervous function and memory[254]. The whole plant is alterative, cardio-depressant, hypotensive, weakly sedative and tonic[240]. It is a rejuvenating diuretic herb that clears toxins, reduces inflammations and fevers, improves healing and immunity, improves the memory and has a balancing effect on the nervous system[147, 152, 238, 240]. It has been suggested that regular use of the herb can rejuvenate the nervous system and it therefore deserves attention as a possible cure for a wide range of nervous disorders including multiple sclerosis[K]. Recent research has shown that gotu kola reduces scarring, improves circulatory problems in the lower limbs and speeds the healing process[238]. It is used internally in the treatment of wounds, chronic skin conditions (including leprosy), venereal diseases, malaria, varicose veins, ulcers, nervous disorders and senility[238, 240]. Caution should be observed since excess doses cause headaches and transient unconsciousness[238]. Externally, the herb is applied to wounds, haemorrhoids and rheumatic joints[238]. The plant can be harvested at any time of the year and is used fresh or dried[238]. Another report says that the dried herb quickly loses its medicinal properties and so is best used fresh[237].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Centella+asiatica'
      },
      {
        id: 41,
        image: Plants.fieldmouseear,
        name: 'Cerastium arvense',
        price: 0.0000943594320248,
        description: "The plant is astringent[257]. A decoction of the plant has been used in the treatment of injuries and miscarriage[257]. A decoction is said to stop uterine bleeding and prevents the child from passing through the uterus[257].",
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Cerastium+arvense'
      },
      {
        id: 42,
        image: Plants.stjohnsbread,
        name: 'Ceratonia Siliqua',
        price: 0.0000943594320248,
        description: "The pulp in the seedpods of carob is very nutritious and, due to its high sugar content, sweet-tasting and mildly laxative[254]. However, the pulp in the pods is also astringent and, used in a decoction, will treat diarrhoea and gently help to cleanse and also relieve irritation within the gut[240, 254]. Whilst these appear to be contradictory effects, carob is an example of how the body responds to herbal medicines in different ways, according to how the herb is prepared and according to the specific medical problem[254]. The seedpods are also used in the treatment of coughs[240]. A flour made from the ripe seedpods is demulcent and emollient[7]. It is used in the treatment of diarrhoea[7]. The seed husks are astringent and purgative[240]. The bark is strongly astringent[254]. A decoction is used in the treatment of diarrhoea[254].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Ceratonia+siliqua'
      },
      {
        id: 43,
        image: Plants.broom,
        name: 'Cytisus scoparius',
        price: 0.000171920248,
        description: "Broom is a bitter narcotic herb that depresses the respiration and regulates heart action[238]. It acts upon the electrical conductivity of the heart, slowing and regulating the transmission of the impulses[254]. The young herbaceous tips of flowering shoots are cardiotonic, cathartic, diuretic, emetic and vasoconstrictor[4, 13, 21, 46, 165]. The seeds can also be used[4]. The plant is used internally in the treatment of heart complaints, and is especially used in conjunction with Convallaria majalis[238]. The plant is also strongly diuretic, stimulating urine production and thus countering fluid retention[254]. Since broom causes the muscles of the uterus to contract, it has been used to prevent blood loss after childbirth[254]. Use this herb with caution since large doses are likely to upset the stomach[4, 21]. The composition of active ingredients in the plant is very changeable, this makes it rather unreliable medicinally and it is therefore rarely used[9]. This herb should not be prescribed to pregnant women or patients with high blood pressure[238]. Any treatment with this plant should only be carried out under expert supervision[9]. See also the notes above on toxicity. The young herbaceous tips of flowering shoots are harvested in spring, generally in May[4]. They can be used fresh or dried[4, 238]. They should not be stored for more than 12 months since the medicinally active ingredients break down[238].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Cytisus+scoparius'
      },
      {
        id: 44,
        image: Plants.oakleafdatura,
        name: 'Datura quercifolia',
        price: 0.0000943594320248,
        description: "The whole plant is narcotic[200]. It has been used in the past to deaden pain, treat insomnia etc, but any use of this plant should only be carried out under the supervision of a qualified practitioner since the difference between the medicinal dose and a toxic dose is very small.",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Datura+quercifolia'
      },
      {
        id: 45,
        image: Plants.chineseyam,
        name: 'Dioscorea batatas',
        price: 0.000521119500248,
        description: "The Chinese yam, called Shan Yao in Chinese herbalism, is a sweet soothing herb that stimulates the stomach and spleen and has a tonic effect on the lungs and kidneys[238]. The tuber contains allantoin, a cell-proliferant that speeds the healing process[238]. The root is an ingredient of 'The herb of eight ingredients', traditionally prescribed in Chinese herbalism to treat hyperthyroidism, nephritis and diabetes[254]. The tuber is anthelmintic, digestive and gently tonic[116, 147, 218, 254]. It is used internally in the treatment of tiredness, weight loss, poor appetite, poor digestion, chronic diarrhoea, asthma, dry coughs, frequent or uncontrollable urination, diabetes and emotional instability[238]. It is applied externally to ulcers, boils and abscesses[218, 238]. The tubers are harvested in the autumn and can be used raw or baked[238]. The leaf juice is used to treat snakebites and scorpion stings[218]. The roots of most, if not all, members of this genus, contains diosgenin[222, 240]. This is widely used in modern medicine in order to manufacture progesterone and other steroid drugs. These are used as contraceptives and in the treatment of various disorders of the genitary organs as well as in a host of other diseases such as asthma and arthritis[222].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Dioscorea+batatas'
      },
      {
        id: 46,
        image: Plants.Enterolobiumcyclocarpum,
        name: 'Enterolobium cyclocarpum',
        price: 0.0000943594320248,
        description: "A syrup obtained from the bark is used in the treatment of colds[46 ]. A gum obtained from the trunk is used as a remedy for affections of the chest[332 ].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Enterolobium+cyclocarpum'
      },
      {
        id: 47,
        image: Plants.yellowgentian,
        name: 'Yellow gentian',
        price: 0.000485900248,
        description: "Gentian root has a long history of use as a herbal bitter in the treatment of digestive disorders and is an ingredient of many proprietary medicines. It contains some of the most bitter compounds known and is used as a scientific basis for measuring bitterness[238]. It is especially useful in states of exhaustion from chronic disease and in all cases of debility, weakness of the digestive system and lack of appetite[4]. It is one of the best strengtheners of the human system, stimulating the liver, gall bladder and digestive system[238], and is an excellent tonic to combine with a purgative in order to prevent its debilitating effects[4]. The root is anthelmintic, anti-inflammatory, antiseptic, bitter tonic, cholagogue, emmenagogue, febrifuge, refrigerant and stomachic[4, 7, 9, 14, 21, 165]. It is taken internally in the treatment of liver complaints, indigestion, gastric infections and anorexia[238]. It should not be prescribed for patients with gastric or duodenal ulcers[238]. The root, which can be as thick as a person's arm and has few branches[239], is harvested in the autumn and dried for later use[4]. It is quite likely that the roots of plants that have not flowered are the richest in medicinal properties[4]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Gentiana lutea as a tonic (see [302] for critics of commission E).",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Gentiana%20lutea'
      },
      {
        id: 48,
        image: Plants.sweetteavine,
        name: 'Sweet Tea Vine',
        price: 0.00042943594320248,
        description: "The whole plant is a tonic herb that improves the circulation, stimulates liver function, strengthens the immune and nervous systems, and reduces blood sugar and cholesterol levels[238]. It also has sedative effects, relieving spasms and lowering the blood pressure[238]. It is used internally in the treatment of nervous tension and exhaustion, peptic ulcer, asthma, bronchitis, diabetes, cardiovascular disease and cancer[238]. It was rated among the ten most important tonic herbs at a conference on traditional medicines in Beijing in 1991[238].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Gynostemma+pentaphyllum'
      },
      {
        id: 49,
        image: Plants.pinktrumpettree,
        name: 'Handroanthus impetiginosus',
        price: 0.000265900248,
        description: "The wood and inner bark are a bitter, cooling, pungent herb that lowers fever and reduces inflammation[238 ]. The heartwood contains a naphthaquinone called lapachol - this has been shown to have antibiotic and antitumor effects[238 ]. Many native S. American peoples have prized pau d'arco as a cure-all, using it to treat a wide range of conditions including wounds, fevers, dysentery, intestinal inflammation and snake bites[254 ]. In modern herbalism the bark is used internally in the treatment of inflammatory diseases, chronic degenerative diseases, cancers, tumours, cysts, fungal infections (especially candidiasis), venereal diseases, rheumatic diseases, skin problems (especially eczema, herpes and scabies)[238 ]. It is also used, in combination with other herbs, to clear toxins, resolve congestion and strengthen the immune system[238 ]. The wood is harvested as required and dried for later use[238 ].",
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Handroanthus+impetiginosus'
      },
      {
        id: 50,
        image: Plants.seabuckthorn,
        name: 'Hippophae Rhamnoides',
        price: 0.000565900248,
        description: "The twigs and leaves contain 4 - 5% tannin[240]. They are astringent and vermifuge[7, 100]. The tender branches and leaves contain bio-active substances which are used to produce an oil that is quite distinct from the oil produced from the fruit. Yields of around 3% of oil are obtained[240]. This oil is used as an ointment for treating burns[214]. A high-quality medicinal oil is made from the fruit and used in the treatment of cardiac disorders, it is also said to be particularly effective when applied to the skin to heal burns, eczema and radiation injury, and is taken internally in the treatment of stomach and intestinal diseases[214]. The fruit is astringent and used as a tonic[9, 254]. The freshly-pressed juice is used in the treatment of colds, febrile conditions, exhaustion etc[9]. The fruit is a very rich source of vitamins and minerals, especially in vitamins A, C and E, flavanoids and other bio-active compounds. It is also a fairly good source of essential fatty acids, which is fairly unusual for a fruit. It is being investigated as a food that is capable of reducing the incidence of cancer and also as a means of halting or reversing the growth of cancers[214]. The juice is also a component of many vitamin-rich medicaments and cosmetic preparations such as face-creams and toothpastes[9]. A decoction of the fruit has been used as a wash to treat skin irritation and eruptions[254].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Hippophae+rhamnoides'
      },
      {
        id: 51,
        image: Plants.hop,
        name: 'Humulus lupulus',
        price: 0.000165900248,
        description: "Hops have a long and proven history of herbal use, where they are employed mainly for their soothing, sedative, tonic and calming effect on the body and the mind. Their strongly bitter flavour largely accounts for their ability to strengthen and stimulate the digestion, increasing gastric and other secretions[254]. The female fruiting body is anodyne, antiseptic, antispasmodic, diuretic, febrifuge, hypnotic, nervine, sedative, stomachic and tonic[4, 9, 21, 46, 165, 192, 218]. Hops are widely used as a folk remedy to treat a wide range of complaints, including boils, bruises, calculus, cancer, cramps, cough, cystitis, debility, delirium, diarrhoea, dyspepsia, fever, fits, hysteria, inflammation, insomnia, jaundice, nerves, neuralgia, rheumatism, and worms[269]. The hairs on the fruits contain lupulin, a sedative and hypnotic drug[213, 218]. When given to nursing mothers, lupulin increases the flow of milk - recent research has shown that it contains a related hormone that could account for this effect[7]. The decoction from the flower is said to remedy swellings and hardness of the uterus[269]. Hop flowers are much used as an infusion or can also be used to stuff pillows where the weight of the head will release the volatile oils[213]. The fruit is also applied externally as a poultice to ulcers, boils, painful swellings etc[4, 218], it is said to remedy painful tumours[269]. The female flowering heads are harvested in the autumn and can be used fresh or dried[238]. Alcoholic extracts of hops in various dosage forms have been used clinically in treating numerous forms of leprosy, pulmonary tuberculosis, and acute bacterial dysentery, with varying degrees of success in China. The female fruiting body contains humulone and lupulone, these are highly bacteriostatic against gram-positive and acid-fast bacteria[240]. A cataplasm of the leaf is said to remedy cold tumours[269]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Humulus lupulus for nervousness and insomnia (see [302] for critics of commission E).",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Humulus+lupulus'

      },
      {
        id: 52,
        image: Plants.rockycandytuft,
        name: 'Iberis amara',
        price: 0.000484320248,
        description: "Little used in modern herbalism, rocket candytuft is a bitter-tasting tonic, aiding digestion and relieving wind and bloating[254]. It is traditionally taken to treat gout, rheumatism and arthritis[254]. All parts of the plant are antirheumatic and antiscorbutic[61]. The seeds are considered very useful in the treatment of asthma, bronchitis and dropsy[4, 240]. The plant is gathered in the summer and can be dried for later use[254]. The seeds are harvested when fully ripe[254]. A common homeopathic remedy is made from the seeds[4].",
        medrating: 2,
        source: ' https://pfaf.org/User/Plant.aspx?LatinName=Iberis+amara'
      },
      {
        id: 53,
        image: Plants.Juniperuscommunis,
        name: 'Juniperus communis',
        price: 0.000284320248,
        description: "Traditionally the plant is being potentially used as antidiarrhoeal, anti-inflammatory, astringent, and antiseptic and in the treatment of various abdominal disorders. ",
        medrating: 0,
        source: ' https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4897106/'
      },
      {
        id: 54,
        image: Plants.Kalmiapolifolia,
        name: 'Kalmia polifolia',
        price: 0.0001119500248,
        description: "Swamp laurel is a very poisonous narcotic plant the leaves of which were at one time used by some native North American Indian tribes in order to commit suicide[4]. It is little, it at all, used in modern herbalism though the leaves are a good external treatment for many skin diseases and inflammation[4]. The leaves are astringent and sedative[4, 21, 61]. They are used externally to make a poultice or a wash in the treatment of many skin diseases, open sores, wounds that will not heal and inflammation[4, 257]. Used internally, the leaves have a splendid effect in the treatment of active haemorrhages, diarrhoea and flux[4, 21, 61]. They should be used with great caution however, and only under the supervision of a qualified practitioner. See the notes above on toxicity.",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Kalmia+polifolia'
      },
      {
        id: 55,
        image: Plants.truelaurel,
        name: 'True laurel',
        price: 0.00042842,
        description: "The bay tree has a long history of folk use in the treatment of many ailments, particularly as an aid to digestion and in the treatment of bronchitis and influenza[244]. It has also been used to treat various types of cancer[218]. The fruits and leaves are not usually administered internally, other than as a stimulant in veterinary practice, but were formerly employed in the treatment of hysteria, amenorrhoea, flatulent colic etc[4]. Another report says that the leaves are used mainly to treat upper respiratory tract disorders and to ease arthritic aches and pains[254]. It is settling to the stomach and has a tonic effect, stimulating the appetite and the secretion of digestive juices[254]. The leaves are antiseptic, aromatic, astringent, carminative, diaphoretic, digestive, diuretic, emetic in large doses, emmenagogue, narcotic, parasiticide, stimulant and stomachic[4, 7, 21, 210, 218]. The fruit is antiseptic, aromatic, digestive, narcotic and stimulant[218]. An infusion has been used to improve the appetite and as an emmenagogue[4]. The fruit has also been used in making carminative medicines and was used in the past to promote abortion[4]. A fixed oil from the fruit is used externally to treat sprains, bruises etc, and is sometimes used as ear drops to relieve pain[4]. The essential oil from the leaves has narcotic, antibacterial and fungicidal properties[218].",
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?latinname=laurus'
      },
      {
        id: 56,
        image: Plants.flax,
        name: 'Linum usitatissimum',
        price: 0.000324123193,
        description: "Linseed has a long history of medicinal use, its main effects being as a laxative and expectorant that soothes irritated tissues, controls coughing and relieves pain[238]. The seed, or the oil from the seed are normally used[238]. The seed is analgesic, demulcent, emollient, laxative, pectoral and resolvent[4, 9, 21, 46, 165, 218, 240]. The crushed seed makes a very useful poultice in the treatment of ulceration, abscesses and deep-seated inflammations[4, 244]. An infusion of the seed contains a good deal of mucilage and is a valuable domestic remedy for coughs, colds and inflammation of the urinary organs[4]. If the seed is bruised and then eaten straight away, it will swell considerably in the digestive tract and stimulate peristalsis[9] and so is used in the treatment of chronic constipation[238]. The oil in the seed contains 4% L-glutamic acid, which is used to treat mental deficiencies in adults[218]. It also has soothing and lubricating properties, and is used in medicines to soothe tonsillitis, sore throats, coughs, colds, constipation, gravel and stones[4, 244]. When mixed with an equal quantity of lime water it is used to treat burns and scalds[244]. The bark and the leaves are used in the treatment of gonorrhoea[240]. The flowers are cardiotonic and nervine[240]. The plant has a long history of folk use in the treatment of cancer[218]. It has been found to contain various anticancer agents[218]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Linum usitatissimum for constipation, inflammation of the skin (see [302] for critics of commission E).",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Linum+usitatissimum'
      },
      {
        id: 57,
        image: Plants.teatree,
        name: 'Melaleuca alternifolia',
        price: 0.000307200248,
        description: "Tea tree, and in particular its essential oil, is one of the most important natural antiseptics and it merits a place in every medicine chest[254]. It is useful for treating stings, burns, wounds and skin infections of all kinds[254]. An essential oil obtained from the leaves and twigs is strongly antiseptic, diaphoretic and expectorant[156, 157, 238]. It stimulates the immune system and is effective against a broad range of bacterial and fungal infections[238]. Internally, it is used in the treatment of chronic and some acute infections, notably cystitis, glandular fever and chronic fatigue syndrome[254]. It is used externally in the treatment of thrush, vaginal infections, acne, athlete's foot, verrucae, warts, insect bites, cold sores and nits[238]. It is applied neat to verrucae, warts and nits, but is diluted with a carrier oil such as almond for other uses[238]. The oil is non-irritant[238]. Another report says that high quality oils contain about 40% terpinen-4-ol, which is well tolerated by the skin and 5% cineol which is irritant. However, in poor quality oils the levels of cineol can exceed 10% and in some cases up to 65%[254]. The essential oil is used in aromatherapy. Its keyword is 'Antiseptic'[210].",
        medrating: 5,
        source: ' https://pfaf.org/USER/Plant.aspx?LatinName=Melaleuca+alternifolia'
      },
      {
        id: 58,
        image: Plants.yellowalfala,
        name: 'Medicago sativa',
        price: 0.000123421261019921195002480,
        description: "Alfalfa leaves, either fresh or dried, have traditionally been used as a nutritive tonic to stimulate the appetite and promote weight gain[222]. The plant has an oestrogenic action and could prove useful in treating problems related to menstruation and the menopause[254]. Some caution is advised in the use of this plant, however. It should not be prescribed to people with auto-immune diseases such as rheumatoid arthritis[238]. See also the notes above on toxicity. The plant is antiscorbutic, aperient, diuretic, oxytocic, haemostatic, nutritive, stimulant and tonic[55, 165, 218]. The expressed juice is emetic and is also anodyne in the treatment of gravel[218]. The plant is taken internally for debility in convalescence or anaemia, haemorrhage, menopausal complaints, pre-menstrual tension, fibroids etc[238]. A poultice of the heated leaves has been applied to the ear in the treatment of earache[257]. The leaves can be used fresh or dried[238]. The leaves are rich in vitamin K which is used medicinally to encourage the clotting of blood[213]. This is valuable in the treatment of jaundice[213]. The plant is grown commercially as a source of chlorophyll and carotene, both of which have proven health benefits[222]. The leaves also contain the anti-oxidant tricin[222]. The root is febrifuge and is also prescribed in cases of highly coloured urine[218]. Extracts of the plant are antibacterial[218]. Used for asthma, diabetes, gastrointestinal disorders (anti-ulcer) [301].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Medicago+sativa'
      },
      {
        id: 59,
        image: Plants.sensitiveplant,
        name: 'Mimosa pudica',
        price: 0.0002312312,
        description: "According to Ayurveda, the root is bitter, acrid, cooling, vulnerary, alexipharmic. It is used in treatment of biliousness, leprosy, dysentery, vaginal and uterine complaints, inflammations, burning sensation, fatigue, asthma, leucoderma, blood diseases etc[646 ]. According to the Unani system of medicine, the root is resolvent, alternative, useful in diseases arising from blood impurities and bile, bilious fevers, piles, jaundice, leprosy etc[646 ]. The root is used to control alcoholism[348 ]. The leaves are bitter, mildly sudorific, tonic[348 ]. A leaf tincture is given by teetotallers to drunkards to remedy drunkenness[348 ]. The seed is emetic[348 ]. The plant contains the alkaloid 'mimosine'[646 ]. Extracts of the plant have been shown in scientific trials to be a moderate diuretic; to depress duodenal contractions in a similar manner to atropine sulphone; to promote regeneration of the nerves; and reduce menorrhagia[413 ]. The roots contain tannin, ash, calcium oxalate crystals and mimosin[646 ]. Root extracts are reported to be a strong emetic[413 ].",
        medrating: 2,
        source: ' https://pfaf.org/User/Plant.aspx?LatinName=Mimosa+pudica'
      },
      {
        //Origin: Suriname, AMazon Rainforest
        id: 60,
        image: Plants.astro,
        name: 'Astrocaryum vulgare',
        price: 0.000342341,
        description: "A decoction of the root is used to treat furunculosis and syphilis[348 ]. The oil from the seed is laxative[348 ]. It is used to treat rheumatism, pain and earache. It is used in a preparation for treating furuncles and is also swabbed onto aching feet and rubbed on feverish people to assist perspiration[348 ]. The fruit can be utilized against the eye disease xerophthalmia (also called ophthalmoxerosis) of which the deficiency of vitamin A is the main reason[418 ]. The whole fruit is used to calm colicky babies[348 ]. The pulp of the fruit is used to treat coughs and as a breath freshener[348 ].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Astrocaryum+vulgare'
      },
      {
        id: 61,
        image: Plants.Monotropauniflora,
        name: 'Monotropa uniflora',
        price: 0.000031311412,
        description: "An infusion of the root is antispasmodic, hypnotic, nervine, sedative, tonic[21, 192, 222]. It is a good remedy for spasms, fainting spells and various nervous conditions[207]. It has been given to children who suffer from fits, epilepsy and convulsions[257]. The plant was used by some native North American Indian tribes to treat eye problems, the stem was bruised and the clear fluid of the stems applied to the eyes[213, 257]. The juice from the stems has also been used to treat nervous irritability, including fits and spasms[192]. It has been suggested in the past as a possible opium substitute[192]. An infusion of the leaves has been used to treat colds and fevers[257]. The crushed plant has been rubbed on bunions and warts in order to destroy them[257]. A poultice of the plant has been applied to sores that are difficult to heal[257]. The flowers have been chewed in order to bring relief from toothache[257]. Water extracts of the plant are bactericidal[222].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Monotropa+uniflora'
      },
      {
        id: 62,
        image: Plants.montanoa,
        name: 'Montanoa',
        price: 0.000031311412,
        description: "This shrub is common on the banks of plots and roads in the high and semi-arid regions of the center of the country. It is a medicinal plant with a long tradition in Mexico to 'accelerate partos '(the name nahuatl means' medicinal plant of women), but its use is of care.",
        medrating: 0,
        source: 'http://www.conabio.gob.mx/malezasdemexico/asteraceae/montanoa-tomentosa/fichas/ficha.htm#:~:text=Este%20arbusto%20es%20com%C3%BAn%20en,su%20uso%20es%20de%20cuidado'
      },
      {
        id: 63,
        image: Plants.waxmyrtle,
        name: 'Myrica communis',
        price: 0.0021119500248,
        description: "Wax myrtle is a popular herbal remedy in North America where it is employed to increase the circulation, stimulate perspiration and keep bacterial infections in check[254]. The plant should not be used during pregnancy[254]. The root bark is antibacterial, astringent, emetic (in large doses), sternutatory, stimulant and tonic[4, 21, 46, 165, 213, 254]. It is harvested in the autumn, thoroughly dried then powdered and kept in a dark place in an airtight container[4]. It is used internally in the treatment of diarrhoea, irritable bowel syndrome, jaundice, fevers, colds, influenza, catarrh, excessive menstruation, vaginal discharge etc[4, 238, 254]. Externally, it is applied to indolent ulcers, sore throats, spongy gums, sores, itching skin conditions, dandruff etc[4, 238, 254]. The wax is astringent and slightly narcotic[4]. It is regarded as a sure cure for dysentery and is also used to treat internal ulcers[4]. A tea made from the leaves is used in the treatment of fevers and externally as a wash for itchy skin[222].",
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?LatinName=Myrica+cerifera'
      },
      {
        id: 64,
        image: Plants.myrtle,
        name: 'Myrtus communis',
        price: 0.0002312324,
        description: "The leaves are aromatic, balsamic, haemostatic and tonic[7, 46]. Recent research has revealed a substance in the plant that has an antibiotic action[7]. The active ingredients in myrtle are rapidly absorbed and give a violet-like scent to the urine within 15 minutes[238]. The plant is taken internally in the treatment of urinary infections, digestive problems, vaginal discharge, bronchial congestion, sinusitis and dry coughs[238, 254]. In India it is considered to be useful in the treatment of cerebral affections, especially epilepsy[240]. Externally, it is used in the treatment of acne (the essential oil is normally used here), wounds, gum infections and haemorrhoids[238]. The leaves are picked as required and used fresh or dried[238]. An essential oil obtained from the plant is antiseptic[240]. It contains the substance myrtol - this is used as a remedy for gingivitis[7]. The oil is used as a local application in the treatment of rheumatism[240]. The fruit is carminative[240]. It is used in the treatment of dysentery, diarrhoea, haemorrhoids, internal ulceration and rheumatism[240].",
        medrating: 3,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Myrtus+communis'
      },
      {
        id: 65,
        image: Plants.rosebay,
        name: 'Rosebay',
        price: 0.000442634101992119500248,
        description: "The leaves and the flowers are cardiotonic, diaphoretic, diuretic, emetic, expectorant and sternutatory[7, 147, 218]. A decoction of the leaves has been applied externally in the treatment of scabies[7], and to reduce swellings[240]. This is a very poisonous plant, containing a powerful cardiac toxin[240], and should only be used with extreme caution[7, 147]. The root is powerfully resolvent. Because of its poisonous nature it is only used externally. It is beaten into a paste with water and applied to chancres and ulcers on the penis[240]. An oil prepared from the root bark is used in the treatment of leprosy and skin diseases of a scaly nature[240]. The whole plant is said to have anticancer properties[218].",
        medrating: 2,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Nerium+oleander'
      },
      {
        id: 66,
        image: Plants.nigellaicarica,
        name: 'Nigella icarica',
        price: 0.0002131413,
        description: " One of the main strength of the use of Nigella is that the seeds are rich in the omega-6 fatty acid linoleic acid and provide an extra-source of dietary phytochemicals, including the bioactive thymoquinone, and characteristics saponins, alkaloids, and flavonoids.",
        medrating: 0,
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8107825/'

      },
      {
        id: 67,
        image: Plants.beeorchid,
        name: 'Ophyrs apifera',
        price: 0.00011119500248,
        description: "Salep (see above for more details) is very nutritive and demulcent[4]. It has been used as a diet of special value for children and convalescents, being boiled with water, flavoured and prepared in the same way as arrowroot[4]. Rich in mucilage, it forms a soothing and demulcent jelly that is used in the treatment of irritations of the gastro-intestinal canal[4]. One part of salep to fifty parts of water is sufficient to make a jelly[4]. The tuber, from which salep is prepared, should be harvested as the plant dies down after flowering and setting seed[4].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Ophrys+apifera'
      },
      {
        id: 68,
        image: Plants.greatyellowwoodsorrel,
        name: 'Oxalis grandis',
        price: 0.000012342421,
        description: "Some Oxalis species have medicinal properties but no information could be found for this species. For example Oxalis acetosella: The fresh or dried leaves are anodyne, antiscorbutic, astringent, diuretic, emmenagogue, expectorant, febrifuge, irritant and stomachic[4, 7, 9, 21]. A decoction is used in the treatment of fevers, both to quench the thirst and allay the fever[4]. Externally, the leaves are crushed and applied locally to dispel boils and abscesses, they also have an astringent affect on wounds[7]. When used internally, some caution is advised due to the oxalic acid content of the leaves[4], the plant is contra-indicated for people suffering from gastritis or a calculus condition[7].",
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Oxalis+grandis'
      },
      {
        id: 69,
        image: Plants.paeoniamascula,
        name: 'Paeonia mascula',
        price: 0.0001119500248,
        description: "The root is antispasmodic and tonic[4, 46, 61]. A tea made from the dried crushed petals of various peony species has been used as a cough remedy, and as a treatment for haemorrhoids and varicose veins[250].",
        medrating: 1,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Paeonia+mascula'
      },
      {
        id: 70,
        image: Plants.maypops,
        name: 'Passiflora incarnata',
        price: 0.00022342481,
        description: "Maypops is a valuable sedative and tranquillising herb with a long history of use in North America[254]. It is frequently used in the treatment of insomnia, epilepsy, hysteria etc[254]. The leaves and stems are antispasmodic, astringent, diaphoretic, hypnotic, narcotic, sedative, vasodilator and are also used in the treatment of women's complaints[4, 7, 21, 46, 61, 165, 192, 207, 238]. The plant is harvested after some of the berries have matured and is then dried for later use[4]. It is used in the treatment of insomnia, nervous tension, irritability, neuralgia, irritable bowel syndrome, pre-menstrual tension and vaginal discharges[4, 21, 165, 192, 207]. An extract of the plant depresses the motor nerves of the spinal cord[213], it is also slightly sedative, slightly reduces blood pressure and increases respiratory rate[222]. The plant contains alkaloids and flavonoids that are an effective non-addictive sedative that does not cause drowsiness[238]. The plant is not recommended for use during pregnancy[238]. A poultice of the roots is applied to boils, cuts, earaches, inflammation etc[222]. The dried plant is exported from America to Europe for medicinal usage[207]. A homeopathic remedy is made from the plant[4]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Passiflora incarnata for nervousness & insomnia (see [302] for critics of commission E).",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Passiflora+incarnata'
      },
      {
        id: 71,
        image: Plants.Pinushalepensis,
        name: 'Pinus halepensis',
        price: 0.0000261500248,
        description: "The turpentine obtained from the resin of all pine trees is antiseptic, diuretic, rubefacient and vermifuge[4]. It is a valuable remedy used internally in the treatment of kidney and bladder complaints and is used both internally and as a rub and steam bath in the treatment of rheumatic affections[4]. It is also very beneficial to the respiratory system and so is useful in treating diseases of the mucous membranes and respiratory complaints such as coughs, colds, influenza and TB[4]. Externally it is a very beneficial treatment for a variety of skin complaints, wounds, sores, burns, boils etc and is used in the form of liniment plasters, poultices, herbal steam baths and inhalers[4].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Pinus+halepensis'
      },
      {
        id: 72,
        image: Plants.dogrose,
        name: 'Rosa canina',
        price: 0.000489500248,
        description: "The petals, hips and galls are astringent, carminative, diuretic, laxative, ophthalmic and tonic[7, 9, 14, 21, 165]. The hips are taken internally in the treatment of colds, influenza, minor infectious diseases, scurvy, diarrhoea and gastritis[238]. A syrup made from the hips is used as a pleasant flavouring in medicines and is added to cough mixtures[238]. A distilled water made from the plant is slightly astringent and is used as a lotion for delicate skins[7]. The seeds have been used as a vermifuge[7]. The plant is used in Bach flower remedies - the keywords for prescribing it are 'Resignation' and 'Apathy'[209]. The fruit of many members of this genus is a very rich source of vitamins and minerals, especially in vitamins A, C and E, flavanoids and other bio-active compounds. It is also a fairly good source of essential fatty acids, which is fairly unusual for a fruit. It is being investigated as a food that is capable of reducing the incidence of cancer and also as a means of halting or reversing the growth of cancers[214]. Ascorbic acid in Dog Rose shells (vitamin C, 0.2 to 2.4%).",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Rosa+canina'
      },
      {
        id: 73,
        image: Plants.mastictree,
        name: 'Pistacia lentiscus',
        price: 0.000012342421,
        description: "Mastic was at one time greatly used in herbal medicine, the resin obtained from the tree (see below for more details) being used[4]. It is little used in modern herbalism though it could be employed as an expectorant for bronchial troubles and coughs and as a treatment for diarrhoea[254]. The resin is analgesic, antitussive, carminative, diuretic, expectorant, odontalgic, sedative and stimulant[4, 46, 218]. It is mixed with other substances and used as a temporary filling for carious teeth[4, 7, 254]. Internally it is used in the treatment of diarrhoea in children[4, 7] and externally it is applied to boils, ulcers, ringworm and muscular stiffness[238, 254].",
        medrating: 3,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Pistacia+lentiscus'
      },
      {
        id: 74,
        image: Plants.plumeria,
        name: 'Plumeria',
        price: 0.0004652294,
        description: "Himatanthus sucuuba is a well respected and widely used medicinal plant in herbal medicine systems in the Amazon and South America; many of its traditional uses have been explained and verified by research. It is mainly used for treating pain and inflammation related to many conditions; cancerous tumours, and as a broad spectrum antimicrobial for various internal and external infections[318 ]. Although toxic in larger doses, toxicity studies indicate that the use of the plant at traditional dosages is non-toxic. There have been no toxic, abortive, or birth defects reported[318 ]. The plant contains several medically active compounds. An antitumor iridoid compound and two depsides showing inhibitory activity of monoamine oxidase B (MAO-B) have been isolated from the bark[318 ]. In addition, two iridoid chemicals called plumericin and isoplumericin have been found in the bark and the latex. These two chemicals have been reported with cytotoxic, anticancer, antifungal and antibacterial actions in laboratory research[318 ]. An extract of the bark has been shown to provide significant protection from ulcers and to reduce gastric hypersecretion through several novel mechanisms of actions[318 ]. The latex has shown significant anti-inflammatory and pain relieving actions. The latex can exert anti-inflammatory effects even in the acute phase of the inflammatory process. This action has been attributed to the cinnamate chemicals that are found in the latex and bark. The bark has been shown to be significantly cytotoxic to five different human cancer cell lines, which may help explain why the tree has been used against cancer and tumours for many years in South America. This anti-cancerous action is probably related to the iridoids and triterpenoids in the tree bark[318 ]. Research has shown that the bark has a greater antifungal effect than a control drug (nistatin) that was used - this action has been attributed to the triterpenic esters found in the bark[318 ]. The plants effectiveness in treating infected wounds, candida, tuberculosis, syphilis, and even mange might be explained by the documented antimicrobial actions of the bark and latex[318 ]. The plant's use in the treatment of asthma might be explained by the smooth-muscle relaxant actions documented in 2005 by Brazilian researchers working with a bark extract[318 ]. The bark and the latex are considered analgesic, antiinflammatory, antirheumatic, antitumor, antifungal, anthelmintic, aphrodisiac, astringent, blood purifier, emmenagogue, emollient, febrifuge, laxative, purgative, tonic, vermifuge and vulnerary[318 , 739 ]. A decoction of the bark is taken internally in the treatment of rheumatism, stomach aches and body aches and pain. Applied externally, the powdered tree bark is sprinkled directly onto stubborn wounds and sores. The latex is placed in warm water which is used to bathe the part of the body suffering from arthritis, pain and/or inflammation[318 ]. The latex is also put directly onto abscesses, sores, wounds, rashes and skin ulcers. It is rubbed on to bot-fly bites in order to suffocate and kill the larvae under the skin (in both animals and humans)[318 , 739 ]. Both bark and latex are also used in the treatment of lymphatic gland diseases and inflammation; female disorders such as endometriosis, uterine fibroid tumours, menstrual irregularities and pain, ovarian cysts and ovarian inflammation; cancerous tumours and skin cancers; digestion problems such as indigestion, stomach aches, bowel inflammation and gastric ulcers; coughs, fevers, headaches, asthma and other lung disorders[318 , 739 ].",
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=plumeria'
      },
      {
        id: 75,
        image: Plants.selfheal,
        name: 'Prunella vulgaris',
        price: 0.00026500248,
        description: "Self heal has a long history of folk use, especially in the treatment of wounds, ulcers, sores etc[7]. It was also taken internally as a tea in the treatment of fevers, diarrhoea, sore mouth, internal bleeding etc[4, 222]. In Korea it is used to treat oedema, nephritis, scrofula and goitre[279]. The whole plant is alterative, antibacterial, antipyretic, antiseptic, antispasmodic, astringent, carminative, diuretic, febrifuge, hypotensive, stomachic, styptic, tonic, vermifuge and vulnerary[4, 9, 13, 21, 176, 218]. It has an antibacterial action, inhibiting the growth of Pseudomonas, Bacillus typhi, E. coli, Mycobacterium tuberculi etc[176]. It can be used fresh or dried, for drying it is best harvested in mid-summer[4]. The plant is experimentally antibiotic and hypotensive[218, 222].",
        medrating: 3,
        source: ' https://pfaf.org/user/plant.aspx?LatinName=Prunella+vulgaris'

      },
      {
        id: 76,
        image: Plants.kudzuvine,
        name: 'Pueraria montana lobata',
        price: 0.00036500248,
        description: "The kudzu vine, known as Ge Gen in China, is commonly used in Chinese herbalism, where it is considered to be one of the 50 fundamental herbs[218]. Recent research has shown that compounds called 'daidzin' and 'daidzein', which are contained in the roots and the flowers, are a safe and effective method for treating alcohol abuse[238]. They work by suppressing the appetite for alcohol, whereas existing treatments interfere with the way the alcohol is metabolised and can cause a build-up of toxins[238]. The plant is often used in combination with Chrysanthemum x morifolium in treating alcohol abuse[254]. The flowers and the roots are antidote, antiemetic, antipyretic, antispasmodic, demulcent, diaphoretic, digestive, febrifuge, hypoglycaemic and hypotensive[174, 176, 218, 222, 238]. A concoction of the flowers and tubers is used to treat alcoholism, fever, colds, diarrhoea, dysentery, acute intestinal obstruction etc[174, 176, 218, 222]. It is useful in the treatment of angina pectoris and migraine[218]. The root is frequently used as a remedy for measles, often in combination with Cimicifuga foetida[254]. The root contains puerarin. This increases the blood flow to the coronary artery and protects against acute myocardial ischaemia caused by the injection of pituitrin[176]. The root can be harvested from the autumn to the spring and is used fresh or dried[238]. The flowers are harvested just before they are fully open and are dried for later use[238]. The stems are galactogogue and are also applied as a poultice to incipient boils, swellings, sore mouths etc[218, 222]. The seed is used in the treatment of hangover and dysentery[218, 222]. The leaves are styptic[218].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Pueraria+montana+lobata'
      },
      {
        id: 77,
        image: Plants.corkoak,
        name: 'Quercus suber',
        price: 0.0002500248,
        description: "Any galls produced on the tree are strongly astringent and can be used in the treatment of haemorrhages, chronic diarrhoea, dysentery etc[4].",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Quercus+suber'
      },
      {
        id: 78,
        image: Plants.Rheumpalmatumtanguticum,
        name: 'Rheum palmatum tanguticum',
        price: 0.00384273,
        description: "Rhubarb has a long and proven history of herbal usage, its main effect being a positive and balancing effect upon the whole digestive system. It is one of the most widely used herbs in Chinese medicine[238]. The root is anticholesterolemic, antiseptic, antispasmodic, antitumor, aperient, astringent, cholagogue, demulcent, diuretic, laxative, purgative, stomachic and tonic[4, 7, 9, 21, 91, 171, 176, 238]. The roots contain anthraquinones, which have a purgative effect, and also tannins and bitters, which have an opposite astringent effect[244]. When taken in small doses, it acts as an astringent tonic to the digestive system, whilst larger doses act as a mild laxative[232, 244]. The root is taken internally in the treatment of chronic constipation, diarrhoea, liver and gall bladder complaints, haemorrhoids, menstrual problems and skin eruptions due to an accumulation of toxins[238]. This remedy is not prescribed for pregnant or lactating women, nor for patients with intestinal obstruction[238]. Externally, the root is used in the treatment of burns[238]. The roots are harvested in October from plants that are at least six years old, they are then dried for later use[4]. A homeopathic remedy is prepared from the dried root[232]. This is used especially in the treatment of diarrhoea in teething children[232].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Rheum+palmatum+tanguticum'
      },
      {
        id: 79,
        image: Plants.westernwildrose,
        name: 'Rosa woodsii',
        price: 0.00011234587,
        description: "The seeds have been used as a poultice to produce a drawing effect for treating muscular pains[257]. An infusion of the leaves has been used as a spring tonic[257]. A poultice of the chewed leaves has been used to allay the pain of bee stings[257]. The leaves have been placed in the shoes as a protection from athletes foot[257]. The roots are blood tonic and diuretic[257]. A decoction of the roots has been used by adults and children in the treatment of diarrhoea and intestinal influenza[257]. A decoction of the root or inner bark has been used in the treatment of colds[257]. An infusion of the fruits has been used in the treatment of coughs[257]. Various parts of the plant have been used to make poultices to apply to burns, sores, cuts, swellings and wounds[257]. A decoction of the branches, combined with chokecherry (Prunus virginiana) and red willow (Salix bonplandiana), has been used in the treatment of various women's complaints, diarrhoea and vomiting[257]. The fruit of many members of this genus is a very rich source of vitamins and minerals, especially in vitamins A, C and E, flavanoids and other bio-active compounds. It is also a fairly good source of essential fatty acids, which is fairly unusual for a fruit. It is being investigated as a food that is capable of reducing the incidence of cancer and also as a means of halting or reversing the growth of cancers[214].",
        medrating: 2,
        source: ' https://pfaf.org/User/Plant.aspx?LatinName=Rosa+woodsii'
      },
      {
        id: 80,
        image: Plants.rosemary,
        name: 'Rosemarinus',
        price: 0.00074324245,
        description: "Rosemary is commonly grown in the herb garden as a domestic remedy, used especially as a tonic and pick-me-up when feeling depressed, mentally tired, nervous etc[238]. Research has shown that the plant is rich in volatile oils, flavanoids and phenolic acids, which are strongly antiseptic and anti-inflammatory[238]. Rosmarinic acid has potential in the treatment of toxic shock syndrome, whilst the flavonoid diosmin is reputedly more effective than rutin in reducing capillary fragility[238]. Rosmarol, an extract from the leaves, has shown remarkably high antioxidant activity[218]. The whole plant is antiseptic, antispasmodic, aromatic, astringent, cardiac, carminative, cholagogue, diaphoretic, emmenagogue, nervine, stimulant, stomachic and tonic[4, 21, 89, 165, 218]. An infusion of the flowering stems made in a closed container to prevent the steam from escaping is effective in treating headaches, colic, colds and nervous diseases[4]. A distilled water from the flowers is used as an eyewash[7]. The leaves can be harvested in the spring or summer and used fresh, they can also be dried for later use[7]. This remedy should not be prescribed for pregnant women since in excess it can cause an abortion[238]. An essential oil distilled from the stems and leaves is often used medicinally, that distilled from the flowering tops is superior but not often available[4]. The oil is applied externally as a rubefacient, added to liniments, rubbed into the temples to treat headaches and used internally as a stomachic and nervine[4]. The essential oil is used in aromatherapy. Its keyword is 'Stimulant'[210]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Rosmarinus officinalis Rosemary for rheumatism, dyspeptic complaints, loss of appetite, blood pressure problems (see [302] for critics of commission E).",
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Rosmarinus+officinalis'
      },
      {
        id: 81,
        image: Plants.curleddock,
        name: 'Rumex crispus',
        price: 0.00004348520834,
        description: "Curled dock has a long history of domestic herbal use. It is a gentle and safe laxative, less powerful than rhubarb in its action so it is particularly useful in the treatment of mild constipation[254]. The plant has valuable cleansing properties and is useful for treating a wide range of skin problems[254]. All parts of the plant can be used, though the root is most active medicinally. The root is alterative, antiscorbutic, astringent, cholagogue, depurative, laxative and mildly tonic[4, 21, 46, 94, 165]. It used to be sold as a tonic and laxative[212]. It can cause or relieve diarrhoea according to the dose, harvest time and relative concentrations of tannin(astringent) and anthraquinones (laxative) that are present[222]. It is used internally in the treatment of constipation, diarrhoea, piles, bleeding of the lungs, various blood complaints and also chronic skin diseases[4, 238, 257]. Externally, the root can be mashed and used as a poultice and salve, or dried and used as a dusting powder, on sores, ulcers, wounds and various other skin problems[257]. The root has been used with positive effect to restrain the inroads made by cancer, being used as an alterative and tonic[4]. The root is harvested in early spring and dried for later use[4]. Some caution is advised in its use since excess doses can cause gastric disturbance, nausea and dermatitis[222, 238]. The seed is used in the treatment of diarrhoea[4, 218]. A homeopathic remedy is made from the fresh root, harvested in the autumn before frost has touched the plant[232]. It is only used in the treatment of a specific type of cough[232].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Rumex+crispus'
      },
      {
        id: 82,
        image: Plants.magnoliavine,
        name: 'Schisandra chinensis',
        price: 0.000926101992119500248,
        description: "The following report is for S. chinensis. This species is used for similar purposes in southern China[238]. Wu Wei Zi is commonly used in Chinese herbalism, where it is considered to be one of the 50 fundamental herbs[218]. It is an excellent tonic and restorative, helping in stressful times and increasing zest for life[254]. It is considered to be a substitute for ginseng and is said to be a tonic for both the male and the female sex organs[238]. The fruit is antitussive, aphrodisiac, hepatic, astringent, cardiotonic, cholagogue, expectorant, hypotensive, lenitive, nervine, pectoral, sedative, stimulant and tonic[174, 176, 178, 218]. Low doses of the fruit are said to stimulate the central nervous system whilst large doses depress it[218]. The fruit also regulates the cardiovascular system[218]. It is taken internally in the treatment of dry coughs, asthma, night sweats, urinary disorders, involuntary ejaculation, chronic diarrhoea, palpitations, insomnia, poor memory, hyperacidity, hepatitis and diabetes[238]. Externally, it is used to treat irritating and allergic skin conditions[238]. The fruit is harvested after the first frosts and sun-dried for later use[238]. The fruit contains lignans[254]. These have a pronounced protective action on the liver. In one clinical trial there was a 76% success rate in treating patients with hepatitis, no side effects were noticed[254]. The seed is used in the treatment of cancer[218]. The plant is antirheumatic[218]. A mucilaginous decoction obtained from the branches is useful in the treatment of coughs, dysentery and gonorrhoea[218].",
        medrating: 5,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Schisandra+sphenanthera'
      },
      {
        id: 83,
        image: Plants.ringwormbush,
        name: 'Senna alata',
        price: 0.000126101992119500248,
        description: "Ringworm bush is widely used as a traditional medicine, particularly valued for its laxative effect and its effective treatment of several skin conditions, including ringworm and scabies. Research has tended to confirm the validity of these traditional treatments. A number of anthraquinone derivatives have been isolated from the leaves, such as aloe-emodin, chrysophanol, isochrysophanol and rhein, as well as the alkaloid tyramine and the common steroid beta-sitosterol[299 ]. Crude leaf extracts have shown antibacterial activity against a range of bacteria (such as Dermatophilus congolensis, which causes a serious skin condition in cattle), antifungal properties (such as against Pityriasis versicolor in humans), and also antitumour activity[299 ]. The bark contains tannins[299 ]. The petals contain anthraquinones, glycosides, steroids, tannins and volatile oil[299 ]. Extracts of the petals have bactericidal activity against gram-positive bacteria but not against gram-negative bacteria[299 ]. The plant is laxative, antibacterial, antitumor, anti-inflammatory, diuretic, analgesic, vulnerary, weakly antifungal, hypoglycaemic, and antispasmodic[311 ]. The leaves are laxative[348 ]. They are taken internally as a remedy for constipation and to purify the blood[311 ]. The leaves are decocted, with or without Tripogandra serrulata and Persea americana, as a treatment for biliousness and hypertension. The leaves are widely used in treating skin diseases[298 ]. They can be applied as a tincture; as a poultice; powdered, then mixed with oil as an ointment; or the sap can be spread over the affected area - they form an effective treatment for skin blemishes, scabies, ringworm and other fungal skin infections[302 , 310 , 311 ]. The bark is used to treat skin diseases, diarrhoea, worms, parasitic skin diseases, scabies and eczema[311 ]. The root is laxative. An infusion is used in the treatment of diarrhoea, tympanites, uterus problems and filaria worm expulsion[348 ]. The root is applied externally to treat sores and skin fungi[348 ]. The flowers are used as a laxative and vermifuge[348 ]. An infusion is used for remedying spleen conditions[348 ]. A decoction combined with Zingiber officinale, is used as a treatment for grippe and as an abortifacient[348 ]. They are decocted with coconut milk for use as a laxative[348 ]. The leaves, flowers and fruit are mixed in an infusion to treat stomach problems[348 ]. The seed is laxative and anthelmintic. It is cooked and used as a remedy for intestinal worms[348 ]. The leaf contains the purgative anthraquinone, and also shows some antimicrobial activity[348 ]. The stem contains chrysophanol, emodin, rhein and aloe emodin[348 ]. The leaf and fruit contain purgative anthracene derivatives of aloe emodin and rhein[348 ].",
        medrating: 4,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Senna+alata'
      },
      {
        id: 84,
        image: Plants.sarsaparilla,
        name: 'Rafflesia',
        price: 0.000465002873,
        description: "The roots are hypnotic, hypotensive and sedative[240 ]. They are used particularly in the treatment of hypertension, where they are said to cause a lowering of the blood pressure without dangerous side effects[46 ], and are considered a specific in the treatment of insanity[240 , 266 ]. They are also used in decoction to treat painful affections of the bowels and to increase uterine contractions when giving birth[240 , 310 ]. The juice of the leaves is used to remove opacities of the cornea of the eyes and also to treat wounds and itches[240 , 310 ]. The bark, leaves, and roots are used against snake and scorpion poisoning[266 ]. The roots yield up to 1.3% medically active alkaloids, as well as oleoresin and the sterol serposterol[240 ]. The alkaloid rauwolfine has been shown to decrease the heart rate[240 ]. Several alkaloids, including serpentine, neoajmaline and isoajmaline, produce a fall in blood pressure[240 ]. Serpentine also causes an increase in the tone of the small intestine and decrease in the peristaltic contractions of the intestine[240 ]. The alkaloid-free oleoresin extract from the roots produces sedative and hypnotic effects[240 ]. Reserpine, a highly active alkaloid, shows a very marked hypnotic effect and lowers blood pressure[240 ]. It is used in allopathic medicine[746 ].",
        medrating: 4,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Rauvolfia+serpentina'
      },
      {
        id: 85,
        image: Plants.reedmace,
        name: 'Typha latifolia',
        price: 0.000081992119500248,
        description: "The leaves are diuretic[218]. The leaves have been mixed with oil and used as a poultice on sores[257]. The pollen is astringent, diuretic, emmenagogue, haemostatic, refrigerant, sedative, suppurative and vulnerary[218]. The dried pollen is said to be anticoagulant, but when roasted with charcoal it becomes haemostatic[238]. It is used internally in the treatment of kidney stones, haemorrhage, painful menstruation, abnormal uterine bleeding, post-partum pains, abscesses and cancer of the lymphatic system[222, 238]. It should not be prescribed for pregnant women[238]. Externally, it is used in the treatment of tapeworms, diarrhoea and injuries[238]. A decoction of the stems has been used in the treatment of whooping cough[257]. The roots are diuretic, galactogogue, refrigerant and tonic[218]. The roots are pounded into a jelly-like consistency and applied as a poultice to wounds, cuts, boils, sores, carbuncles, inflammations, burns and scalds[222, 257]. The flowers are used in the treatment of a wide range of ailments including abdominal pain, amenorrhoea, cystitis, dysuria, metrorrhagia and vaginitis[218]. The young flower heads are eaten as a treatment for diarrhoea[222]. The seed down has been used as a dressing on burns and scalds[257].",
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?LatinName=Typha+latifolia         '
      },
      {
        id: 86,
        image: Plants.masticthyme,
        name: 'Thymus mastichina',
        price: 0.00001141992119500248,
        description: "The leaves, and especially the essential oil contained in them, are strongly antiseptic, deodorant and disinfectant[4, 200, 238]. The plant can be used fresh at any time of the year, or it can be harvested as it comes into flower and either be distilled for the oil or dried for later use[238].",
        medrating: 3,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Thymus+mastichina'
      },
      {
        id: 87,
        image: Plants.redclover,
        name: 'Trifolium pratense',
        price: 0.00001181992119500248,
        description: "Red clover is safe and effective herb with a long history of medicinal usage. It is commonly used to treat skin conditions, normally in combination with other purifying herbs such as Arctium lappa and Rumex crispus[254]. It is a folk remedy for cancer of the breast, a concentrated decoction being applied to the site of the tumour in order to encourage it to grow outwards and clear the body[254]. Flavonoids in the flowers and leaves are oestrogenic and may be of benefit in the treatment of menopausal complaints[254]. The flowering heads are alterative, antiscrofulous, antispasmodic, aperient, detergent, diuretic, expectorant, sedative and tonic[4, 21, 165, 218, 238]. It has also shown anticancer activity[172, 218], poultices of the herb have been used as local applications to cancerous growths[4]. Internally, the plant is used in the treatment of skin complaints (especially eczema and psoriasis), cancers of the breast, ovaries and lymphatic system, chronic degenerative diseases, gout, whooping cough and dry coughs[238]. The plant is normally harvested for use as it comes into flower[222, 238] and some reports say that only the flowers are used[4]. The toxic indolizidine alkaloid 'slaframine' is often found in diseased clover (even if the clover shows no external symptoms of disease). This alkaloid is being studied for its antidiabetic and anti-AIDS activity[222].",
        medrating: 3,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Trifolium+pratense'
      },
      {
        id: 88,
        image: Plants.tuliptree,
        name: 'Thespesia populneoides',
        price: 0.000211119500248,
        description: "This species is doubtfully distinct from Thespesia populnea, and so should have the same uses as detailed below:- Portia tree is often used in traditional medicine, where the bark, root, leaves, flowers and fruits are all used to treat a range of ailments. There has been some research into its properties, which tends to support these traditional uses. The heartwood contains several sesquiterpenoid quinones, including mansonone D and H, thespone and thespesone, which are known to induce contact dermatitis, to inhibit tumour formation and to have antifungal properties[299 ]. The heartwood and other plant parts contain gossypol[299 ]. The fruits and leaves contain compounds with antibacterial activity, whereas methanolic extracts of the flower buds have shown antifungal activity[299 ]. Ethanol extracts of the flower have shown antihepatotoxic activity[299 ]. Aqueous extracts of the fruit have shown wound-healing activity in rats after topical or oral administration[299 ]. The seed oil has anti-amoebic activity[299 ]. The heartwood is carminative. It is useful in treating pleurisy, cholera, colic and high fevers[299 , 303 , 310 ]. The fruit juice is used to treat herpes[303 ]. The crushed fruit is used in a treatment for urinary tract problems and abdominal swellings[311 ]. The cooked fruit, crushed in coconut oil, provides a salve, which, if applied to the hair, will kill lice[303 ]. An extract of the fruit is applied to swollen testicles[311 ]. A leaf tea is taken as a treatment for rheumatism and urinary retention[303 ]. A decoction of the leaves is used in treating coughs, influenza, headache and relapses in illnesses[311 ]. The leaf sap, and decoctions of most parts of the plant, are used externally to treat various skin diseases[303 ]. Juices from the pounded fruits, mixed with pounded leaves are used in a poultice to treat headaches and itches[303 ]. A decoction of the bark and fruit is mixed with oil and used to treat scabies. A decoction of the astringent bark is used to treat dysentery and haemorrhoids, and a maceration of it is drunk for colds[303 ]. A cold infusion of the bark is used in treating dysentery, diabetes, gonorrhoea, yellow urine, and thrush[311 ]. Indigestion, pelvic infection, dysmenorrhoea, infertility, secondary amenorrhoea, appetite loss, ulcers and worms are also treated with the bark[311 ]. The inner bark is used to treat constipation and typhoid[311 ]. The stem is employed in treating breast cancer[311 ]. Other extracts of the plant have significant antimalarial activity[303 ]. Leaf and bark decoctions are taken as a remedy for high blood pressure[303 ]. Seeds are purgative[303 ].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Thespesia+populneoides            '
      },
      {
        id: 89,
        image: Plants.soursop,
        name: 'Soursop',
        price: 0.00001371992119500248,
        description: "Sour sop is often used in traditional medicine. Research has shown that it is antimalarial, uterine stimulant, anticrustacean, antiparasitic, cytotoxic (acetogenins), cardiac depressant, antiamoebic, antibacterial, antifungal, hypertensive, spasmogenic, vasodilator, insecticide, smooth muscle relaxant[ 311 ]. The plant contains isoquinoline alkaloids including reticuline[ 348 ]. The seed contains galactomannan, sitosterol, stigmasterol and cholesterol[ 348 ]. The leaves are antispasmodic, calmative, narcotic[ 348 ]. The crushed leaves are used as a remedy for distension and dyspepsia, scabies and skin diseases, rheumatism, coughs and colds[ 303 ]. A decoction, often combined with Ludwigia erecta, is used to treat hypertension and heart conditions such as palpitations[ 348 ]. A decoction of the leaves, combined with the leaves of avocado (Persea americana) is drunk as an antihypertensive[ 348 ]. The leaves may also be used to make a decoction, which is taken orally with salt for digestive tract ailments and to relieve fatigue[ 303 ]. The pungent leaves are well-known for their sleep-inducing properties - they can be taken in an infusion, or simply placed under the pillow[ 307 ]. Applied externally, the crushed leaves are used to maturate boils and abscesses[ 303 ]. A massage of the leaves is good for remedying nervous shock[ 303 ]. The fruit is antiscorbutic, febrifuge, mildly antidysenteric and a good vermifuge[ 348 ]. It is used to treat bedwetting in children[ 348 ]. A decoction is used to remedy excess foot and hand perspiration[ 348 ]. The fruit is used to make a tonic that is used for treating fever, headache, hypertension, and heart problems[ 348 ]. A crushed leaf and seed decoction is taken orally for intestinal malaise[ 303 ]. The leaves and bark are cardiotonic and sedative[ 348 ]. A decoction is used for treating anxiety attacks[ 303 ]. The green bark is rubbed on wounds to stop bleeding[ 303 ]. Flower or flower bud tea is mixed with honey for colds, chest pain and nerve disorders[ 303 ]. The bark and young fruits, which contain tannin, are used to treat diarrhoea and dysentery[ 303 ]. The green bark is rubbed on wounds to stop bleeding[ 404 ]. The seed is an ingredient in a remedy for treating convulsions[ 348 ].",
        medrating: 3,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Annona+muricata'
      },
      {
        id: 90,
        image: Plants.valerian,
        name: 'Valeriana officinalis',
        price: 0.000061920248,
        description: "Valerian is a well-known and frequently used medicinal herb that has a long and proven history of efficacy. It is noted especially for its effect as a tranquilliser and nervine, particularly for those people suffering from nervous overstrain[4, 222]. Valerian has been shown to encourage sleep, improve sleep quality and reduce blood pressure[254]. It is also used internally in the treatment of painful menstruation, cramps, hypertension, irritable bowel syndrome etc[238, 254]. It should not be prescribed for patients with liver problems[238]. Externally, it is used to treat eczema, ulcers and minor injuries[238]. The root is antispasmodic, carminative, diuretic, hypnotic, powerfully nervine, sedative and stimulant[4, 7, 9, 14, 21, 46, 147, 165, 192, 218]. The active ingredients are called valepotriates, research has confirmed that these have a calming effect on agitated people, but are also a stimulant in cases of fatigue[222]. The roots of 2 year old plants are harvested in the autumn once the leaves have died down and are used fresh or dried[4, 9, 238]. The fresh root is about 3 times as effective as roots dried at 40° (the report does not specify if this is centigrade or fahrenheit), whilst temperatures above 82° destroy the active principle in the root[240]. Use with caution[21, 238], see the notes above on toxicity.",
        medrating: 3,
        source: ' https://pfaf.org/user/Plant.aspx?LatinName=Valeriana+officinalis'
      },
      {
        id: 91,
        image: Plants.verbascumikaricum,
        name: 'Verbascum ikaricum.png',
        price: 0.000071920248,
        description: "The native range of this species is E. Aegean Islands. It is a biennial and grows primarily in the subtropical biome.",
        medrating: 0,
        source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:811159-1'
      },
      {
        id: 92,
        image: Plants.greatmullein,
        name: 'Verbascum thapsus',
        price: 0.0001920248,
        description: "Great mullein is a commonly used domestic herbal remedy, valued for its efficacy in the treatment of pectoral complaints[4]. It acts by reducing the formation of mucus and stimulating the coughing up of phlegm, and is a specific treatment for tracheitis and bronchitis[254]. The leaves and the flowers are anodyne, anti-inflammatory, antiseptic, antispasmodic, astringent, demulcent, diuretic, emollient, expectorant and vulnerary[4, 7, 13, 21, 46, 53, 165, 222]. An infusion is taken internally in the treatment of a wide range of chest complaints and also to treat diarrhoea[4, 238]. The plant combines well with other expectorants such as coltsfoot (Tussilago farfara) and thyme (Thymus vulgaris)[254]. Externally, a poultice of the leaves is a good healer of wounds and is also applied to ulcers, tumours and piles[4, 222, 254]. Any preparation made from the leaves needs to be carefully strained in order to remove the small hairs which can be an irritant[7]. The plant is harvested when in flower and is dried for later use[238]. An infusion of the flowers in olive oil is used as earache drops, or as a local application in the treatment of piles and other mucous membrane inflammations[4, 222, 238]. This infusion is also strongly bactericidal[4]. A decoction of the roots is said to alleviate toothache and also relieve cramps and convulsions[4]. The juice of the plant and powder made from the dried roots is said to quickly remove rough warts when rubbed on them[4]. It is not thought to be so useful for smooth warts[4]. The seeds are slightly narcotic and also contain saponins[4]. A poultice made from the seeds and leaves is used to draw out splinters[4]. A decoction of the seeds is used to soothe chilblains and chapped skin[7]. A homeopathic remedy is made from the fresh leaves[4]. It is used in the treatment of long-standing headaches accompanied with oppression of the ear[4].",
        medrating: 3,
        source: '   https://pfaf.org/user/plant.aspx?LatinName=Verbascum+thapsus'
      },
      {
        id: 93,
        image: Plants.lesserperiwinkle,
        name: 'Typha latifolia',
        price: 0.0001920248,
        description: "The plant is sedative and tonic[21, 53, 165]. It contains the alkaloid 'vincamine', which is used by the pharmaceutical industry as a cerebral stimulant and vasodilator[238]. Since the discovery of vincamine in the leaves, the plant has been used herbally to treat arteriosclerosis and for dementia due to insufficient blood supply to the brain[254]. The leaves are bitter, detergent and stomachic[7]. Taken internally, they are used in the treatment of internal bleeding, heavy menstrual bleeding and nosebleeds[254]. When crushed and applied to wounds they have astringent and healing properties[7]. A mouthwash is used to treat gingivitis, sore throats and mouth ulcers[254]. The leaves are gathered in the spring and dried for later use[7]. The root is antispasmodic and hypotensive[7, 19]. It is used to lower the blood pressure[19]. The root is gathered in the autumn and dried for later use[7]. The fresh flowers are gently purgative, but lose their effect on drying[4]. A homeopathic remedy is made from the fresh leaves[4]. It is used in the treatment of haemorrhages[4].",
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Vinca+minor'
      },
      {
        id: 95,
        image: Plants.corydalis,
        name: 'Corydalis yanhusuo',
        price: 0.0003184320248,
        description: "Yan Hu Suo is an important Chinese remedy that has been used for hundreds of years to help 'invigorate the blood' and relieve almost any painful condition[254]. It is used especially to relieve menstrual cramps, chest and abdominal pains[254]. The plant contains powerful alkaloids that are responsible for this effect[254]. The root is analgesic, antiseptic, antispasmodic and sedative[176, 218]. It has traditionally been used to lower pain and strengthen the circulation[218]. It is used in the treatment of a wide range of ailments including lumbago, dysmenorrhoea, hernia, chest pains, insomnia and traumatic injuries[176, 218]. The root is harvested in late spring or early summer, once the top growth has died down, and is dried for later use[254]. Various extracts from the plant have shown antitussive, cardiotonic, hypotensive and anticancer activity[218].",
        medrating: 3,
        source: 'https://pfaf.org/USER/Plant.aspx?LatinName=Corydalis+yanhusuo'
      },
      {
        id: 96,
        image: Plants.bixaorellana,
        name: 'Bixa orellana',
        price: 0.0003184320248,
        description: "The medical properties of annatto are poorly understood, but it is a bitter, astringent, purgative herb that reputedly destroys intestinal worms, lowers fever, improves digestion and has expectorant effects[ 238 ]. A decoction of the leaves is used as a treatment for dysentery[ 348 ], and to reduce vomiting during pregnancy[ 739 ]. The leaves are applied to the head and to sprains to relieve aches[ 303 ]. A decoction is gargled as a cure for mouth and throat infections. The leaves may also be used in baths to relieve muscular aches, fevers, colic or to get rid of worms in children[ 303 , 348 ]. The fresh shoots are steeped in water, which is then used as a eyewash for inflamed eyes[ 739 ]. The leaves can be picked as required and used fresh or dried[ 238 ]. The sap from the leaf petiole is soaked in hot water with rum, then used to remove secretions from encrusted eyelids as a treatment for blepharitis[ 348 ]. Young shoots are applied locally as a poultice on abscesses[ 348 ]. The roots are digestive and diuretic[ 739 ]. A decoction is taken orally to control asthma[ 303 ]. An infusion of the root in water and rum is used to treat venereal diseases[ 303 ]. A tea made from the root is used to treat oliguria and jaundice[ 303 ]. The seeds are used as an aphrodisiac, emmenagogue, expectorant and vermifuge[ 303 , 348 , 739 ]. They are used to treat asthma and nasal cavity problems[ 348 ]. A macerated seed decoction is taken orally for the relief of fevers[ 303 ]. In a syrup, they are used in the treatment of pharyngitis and bronchitis[ 739 ]. The ground seeds are applied to burns in order to prevent blistering and scarring[ 238 ]. The seeds are harvested as the fruits split open, and can be dried for later use[ 238 ]. They can also be soaked in hot water - the resulting sediment is pressed into cakes for use in medicines and dyes[ 238 ]. The pulp surrounding the seed is made into an astringent drink used to treat cancer, dysentery and kidney infections[ 238 , 303 ]. The fruit pulp is used as a rub on the skin to prevent sores, probably from sunburn[ 348 ]. The dye obtained from the seed coat is used as an antidote for prussic acid poisoning caused by eating poorly treated Manihot esculenta[ 238 , 303 ]. Sap from the bark and crushed leaves is used as a treatment for skin rashes[ 348 ]. A decoction of the bark is used as a treatment for malaria; angina and asthma[ 348 ]. The leaves contain cyanidine and ellagic acid[ 348 ].",
        medrating: 3,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Bixa+orellana'
      },
      {
        id: 97,
        image: Plants.blighia,
        name: 'Blighia sapida',
        price: 0.00005184320248,
        description: "The plant (part not specified) is used to treat anaemia and itching[617 ]. In traditional medicine in Cote d?Ivoire, Blighia sapida is widely used for the treatment of yellow fever, epilepsy and oedema, and as a laxative and diuretic[299 ]. Sap from terminal buds is instilled in the eyes to treat ophthalmia and conjunctivitis[299 ]. The pulp of ground-up leafy twigs is rubbed on the forehead to treat migraine[299 ]. The ground-up leaves, combined with plant salts, are applied as a paste to treat yaws and ulcers[299 ]. The leaves are used in the treatment of fever and vertigo, and twigs to treat hepatitis, cirrhosis and amygdalitis[299 ]. Bark and leaf decoctions are administered to treat oedema, intercostal pain, dysentery and diarrhoea[299 ]. Decoctions of bark or fruit walls are applied to wounds[299 ]. Pounded bark is administered as an antidote to snake and scorpion bites[299 ]. The bark, ground-up with capsicum pepper (Capsicum annuum), is rubbed on the body as a stimulant[299 ]. The seeds are taken to treat stomach complaints, including nausea and vomiting[299 ]. Aqueous seed extracts are administered to expel parasites[299 ]. The fruit pulp is used to treat whitlow[299 ]. A water-soluble and heat-stable toxic compound, hypoglycin A, is present in the aril of unripe seeds, as well as in the seed and in the pinkish to reddish tissue at the base of the aril. The Jamaican vomiting sickness is associated with this compound and is characterized by vomiting, generalized weakness, altered consciousness and sometimes even death. Hypoglycaemia and depression of the central nervous system are common. The aril of fully ripe seeds after natural dehiscence of the fruit is nearly free of the toxic compound. The consumption of unripe seed arils has probably caused many cases of encephalopathy in children in Burkina Faso and other West African countries.",
        medrating: 2,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Blighia+sapida'
      },
      {
        id: 98,
        image: Plants.portulacao,
        name: 'Portulaca grandiflora',
        price: 0.0003184320248,
        description: "The entire plant is depurative[176]. It is used in the treatment of hepatitis, cirrhosis of the liver with ascites, swelling and pain in the pharynx[176]. The fresh juice of the leaves and stems is applied externally as a lotion to snake and insect bites, burns, scalds and eczema[176, 238].",
        medrating: 2,
        source: 'https://pfaf.org/USER/Plant.aspx?LatinName=Portulaca+grandiflora'
      },
      {
        id: 99,
        image: Plants.prunusspinosa,
        name: 'Prunus spinosa',
        price: 0.00004184320248,
        description: "The flowers, bark, leaves and fruits are aperient, astringent, depurative, diaphoretic, diuretic, febrifuge, laxative and stomachic[7, 9, 21]. An infusion of the flowers is used in the treatment of diarrhoea (especially for children), bladder and kidney disorders, stomach weakness et[9]. Although no specific mention has been seen for this species, all members of the genus contain amygdalin and prunasin, substances which break down in water to form hydrocyanic acid (cyanide or prussic acid). In small amounts this exceedingly poisonous compound stimulates respiration, improves digestion and gives a sense of well-being[238]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Prunus spinosa Sloe - Blackthorn for inflammation of mouth and pharynx (see [302] for critics of commission E).",
        medrating: 2,
        source: 'https://pfaf.org/user/Plant.aspx?LatinName=Prunus+spinosa'
      },
      {
        id: 100,
        image: Plants.heli,
        name: 'Helicostylis tomentosa',
        description: "The red, milky sap from the bark is drunk as an hallucinogen in order to contact the spirits[348 ]. The rasped bark, mixed with alcohol, is used as a remedy for stomach cramps and pain accompanying a high fever[348 ]. Extracts prepared from the inner bark have been pharmacologically evaluated and are reported to elicit central nervous system depressant effects; and certain of the effects are described as being similar to those expected with Cannabis sativa. Because of the close taxonomic relationship of this species to Cannabis, one might expect similar types of chemical constituents in both genera. Whether or not the effects are due to the presence of cannabinoids remains to be determined[630 ].",
        price: 0.0003184320248,
        medrating: 2,
        source: 'https://pfaf.org/USER/Plant.aspx?LatinName=Helicostylis+tomentosa'
      },
      {
        id: 101,
        image: Plants.rubus,
        description: "The roots are cathartic[257]. It contains anthocyanins ('ORAC off the charts'), 'add in ellagic acid and cancer cells commit suicide'. A decoction of the roots has been used in the treatment of gonorrhoea[257]. The root has been chewed in the treatment of coughs and toothache[257]. An infusion of the roots has been used as a wash for sore eyes[257]. The root has been used, combined with Hypericum spp, to treat the first stages of consumption[257]. An infusion of the astringent root bark is used in the treatment of diarrhoea and dysentery[213, 222]. The leaves are highly astringent[257]. A decoction is used in the treatment of bowel complaints[257]. A tea made from the leaves is used as a wash for old and foul sores, ulcers and boils[222, 257]. A decoction of the roots, stems and leaves has been used in the treatment of whooping cough[257].",
        price: 0.00432,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?latinname=Rubus+occidentalis"
      },

      {
        id: 103,
        image: Plants.thuja,
        name: 'Thuja orientalis',
        description: "This plant is commonly used in Chinese herbalism, where it is considered to be one of the 50 fundamental herbs[218]. Both the leaves and the seeds contain an essential oil consisting of borneol, bornyl acetate, thujone, camphor and sesquiterpenes[283]. The leaves also contain rhodoxanthin, amentoflavone, quercetin, myricetin, carotene, xanthophyll and ascorbic acid[283]. The leaves are antibacterial, antipyretic, antitussive, astringent, diuretic, emmenagogue, emollient, expectorant, febrifuge, haemostatic, refrigerant and stomachic[147, 176, 218, 238]. Their use is said to improve the growth of hair[147, 176, 238]. They are used internally in the treatment of coughs, haemorrhages, excessive menstruation, bronchitis, asthma, skin infections, mumps, bacterial dysentery, arthritic pain and premature baldness[238]. The leaves are harvested for use as required and can be used fresh or dried[238]. This remedy should not be prescribed to pregnant women[238]. The seed is aperient, lenitive and sedative[147, 176, 218]. It is used internally in the treatment of palpitations, insomnia, nervous disorders and constipation in the elderly[238]. The root bark is used in the treatment of burns and scalds[218]. The stems are used in the treatment of coughs, colds, dysentery, rheumatism and parasitic skin diseases[218].",
        price: 0.0015625,
        medrating: 3,
        source: 'https://pfaf.org/user/plant.aspx?LatinName=Thuja+orientalis'
      },
      {
        id: 104,
        image: Plants.burdock,
        name: 'Arctium lappa',
        description: "Burdock is one of the foremost detoxifying herbs in both Chinese and Western herbal medicine[254]. The dried root of one year old plants is the official herb, but the leaves and fruits can also be used[4]. It is used to treat conditions caused by an 'overload' of toxins, such as throat and other infections, boils, rashes and other skin problems[254]. The root is thought to be particularly good at helping to eliminate heavy metals from the body[254]. The plant is also part of a North American formula called essiac which is a popular treatment for cancer. Its effectiveness has never been reliably proven or disproven since controlled studies have not been carried out. The other herbs included in the formula are Rumex acetosella, Ulmus rubra and Rheum palmatum[254]. The plant is antibacterial, antifungal, carminative[9, 21, 147, 165, 176]. It has soothing, mucilaginous properties and is said to be one of the most certain cures for many types of skin diseases, burns, bruises etc[4, 244]. It is used in the treatment of herpes, eczema, acne, impetigo, ringworm, boils, bites etc[244]. The plant can be taken internally as an infusion, or used externally as a wash[244]. Use with caution[165]. The roots of one-year old plants are harvested in mid-summer and dried. They are alterative, aperient, blood purifier, cholagogue, depurative, diaphoretic, diuretic and stomachic[218, 222]. The seed is alterative, antiphlogistic, depurative, diaphoretic and diuretic[218]. Recent research has shown that seed extracts lower blood sugar levels[238]. The seed is harvested in the summer and dried for later use[254]. The crushed seed is poulticed onto bruises[222]. The leaves are poulticed onto burns, ulcers and sores[222].",
        price: 0.000043213,
        medrating: 5,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Arctium+lappa'
      },
      {
        id: 105,
        image: Plants.plumbago,
        name: "Plumbago Europaea",
        description: "The whole plant, but especially the root, is acrid, emetic, odontalgic, sialagogue and vesicant[4, 61, 100, 103]. Chewing the root produces copious salivation and is said to be of benefit in treating toothache[4].",
        price: 0.000034294,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Plumbago+europaea"
      },
      {
        id: 106,
        image: Plants.madigascarperiwinkle,
        name: 'Catharanthus roseus',
        description: "Madagascar periwinkle has long been used as a traditional medicine. Tests by pharmaceutical companies in the 1950's showed the presence of a number of medically active alkaloids, especially the compound vincristine, which has been shown to have activity against leukaemia[ 238 , 254 , 302 ]. The alkaloids, when isolated from the plant, are highly toxic but have also been shown to reduce the numbers of white blood cells, leading to applications which have revolutionized conventional cancer therapy[ 238 ]. The plant is cultivated as a source of these alkaloids, a number of which are extracted and used allopathically[ 299 ]. The isolated alkaloids are used to treat and other cancers[ 238 ]. The alkaloids vincristine and vinblastine are prescribed in anticancer therapy, particularly in cases of acute leukaemia (especially in children) and Hodgkin's lymphoma. They are usually part of a complex chemotherapy protocol[ 299 ]. Used in isolation, they have a number of side-effects, including alopecia, nausea and bone marrow depression[ 238 ]. The dried root is an industrial source of ajmalicine, which increases the blood flow in the brain and peripheral parts of the body. Preparations of ajmalicine are used to treat the psychological and behavioural problems of senility, sensory problems (dizziness, tinnitus), cranial traumas and their neurological complications[ 299 ]. The leaves and aerial parts of the plant have a wide range of traditional uses. Well known as an oral hypoglycaemic agent, the plant is also considered to be depurative, diaphoretic, diuretic, emetic, purgative and vermifuge. A decoction is taken to treat hypertension, asthma, menstrual irregularities, chronic constipation, diarrhoea, indigestion, dyspepsis, malaria, dengue fever, diabetes, cancer and skin diseases[ 238 , 299 , 348 ]. Extracts prepared from the leaves have been applied externally as antiseptic agents for the healing of wounds; to relieve the effects of wasp stings; against haemorrhage, skin rash and as a mouthwash to treat toothache[ 299 ]. The leaves are harvested when the plant is flowering, and can be dried for later use[ 238 ]. An infusion of the flowers is used to treat mild diabetes[ 348 ]. A decoction of the roots is taken to treat dysmenorrhoea[ 299 ].",
        price: 0.0000392123,
        medrating: 4,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Catharanthus+roseus'
      },
      {
        id: 107,
        image: Plants.crepe,
        name: "Crepe Myrtle",
        description: "The stem bark is febrifuge, stimulant and styptic[218, 240]. The bark, flowers and leaves are considered to be hydrogogue and a drastic purgative[240]. A paste of the flowers is applied externally to cuts and wounds[272]. The root is astringent, detoxicant and diuretic[147, 218]. A decoction of the flowers is used in the treatment of colds[218].",
        price: 0.000301,
        medrating: 2,
        source: 'https://pfaf.org/user/plant.aspx?latinname=Crepe+myrtle'
      },
      {
        id: 108,
        image: Plants.begonia,
        name: "Hardy Begonia",
        description: "The tuberous roots and fruits are anodyne, antiphlogistic and antispasmodic. Stimulates blood circulation[147]. A decoction is used in the treatment of traumatic pain, haematemesis, gonorrhoea, post-partum vaginal discharge, amenorrhoea and snakebites[147].",
        price: 0.0000942435,
        medrating: 2,
        source: 'https://pfaf.org/user/plant.aspx?latinname=begonia'
      },
      {
        id: 109,
        image: Plants.maple,
        name: "Acer saccharinum",
        description: "An infusion of the bark is used in the treatment of coughs, cramps and dysentery[257]. The infusion is also applied externally to old, stubborn running sores[257]. A compound infusion is used in the treatment of 'female complaints'[257]. The inner bark is boiled and used with water as a wash for sore eyes[257]. An infusion is used internally in the treatment of diarrhoea[257]. An infusion of the root bark has been used in the treatment of gonorrhoea[257].",
        price: 0.0000087657,
        medrating: 1,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Acer+saccharinum"
      },
      {
        id: 109,
        image: Plants.raintree,
        name: "Koelreuteria paniculata",
        description: "The flowers are ophthalmic[178, 218]. They are used in the treatment of conjunctivitis and epiphora[218].",
        price: 0.00005087657,
        medrating: 1,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Koelreuteria+paniculata"
      },
      {
        id: 109,
        image: Plants.africantuliptree,
        name: "African Tulip Tree",
        description: "Approximately 119 pure chemical substances isolated from higher plants are used in medicine throughout the world [2]. Spathodea campanulata P. Beauvais is one of the medicinally important perennial plants commonly used as folkloric medicine in Nigeria. The species Spathodea campanulata belong to the family Bignoniaceae and is native to Africa. It is often used in gardening in tropical and subtropical areas, including South America [3]. The flowers are used as diuretic and anti-inflammatory, while the leaves are against kidney diseases, urethra inflammations and as an antidote against animal poisons [4]. Several phytochemical studies were performed with different parts of Spathodea campanulata including stem barks, leaves, flowers and fruits. The leaves contain spathodol, caffeic acid, other phenolic acids and flavonoids, while fruits contain polyphenols, tannins, saponins and glycosides [5]. The plant leaves reported to have antiplasmodial, analgesic, anti-inflammatory and anti-larvicidal activity. The stem bark decoction of Spathodea campanulata have been displayed hypoglycemic, anticomplementary, antimalarial and anti-HIV activity [6].",
        price: 0.000003342,
        medrating: 0,
        source: "https://journals.innovareacademics.in/index.php/ijpps/article/view/24096/14506"
      },
      {
        id: 110,
        image: Plants.solidago,
        name: "Solidago canadensis",
        description: "Haemostatic, styptic[168, 172]. The root is applied as a poultice to burns[168, 172, 222]. An infusion of the dried powdered herb can be used as an antiseptic[168, 172]. The blossoms are analgesic, astringent and febrifuge[257]. They have been chewed and the juice slowly swallowed to treat sore throats[213, 222]. A tea made from the flowers is used in the treatment of diarrhoea, body pains, fevers and snakebites[222, 257]. The plant contains quercitin, a compound that is reportedly useful in the treatment of haemorrhagic nephritis[222]. This plant is said to have similar medicinal properties to S. virgaurea. These are:- Goldenrod is a safe and gentle remedy for a number of disorders. In particular, it is a valuable astringent remedy treating wounds and bleeding, whilst it is particularly useful in the treatment of urinary tract disorders, being used both for serious ailments such as nephritis and for more common problems such as cystitis[254]. The plant contains saponins that are antifungal and act specifically against the Candida fungus which is the cause of vaginal and oral thrush[238, 254]. It also contains rutin which is used to treat capillary fragility, and phenolic glycosides which are anti-inflammatory[238]. The leaves and flowering tops are anthelmintic, anti-inflammatory, antiseptic, aromatic, astringent, carminative, diaphoretic, mildly diuretic, febrifuge and stimulant[4, 7, 9, 21, 147, 165]. A good vulnerary herb, it has also proved of value when used internally in the treatment of urinary infections, chronic catarrh, skin diseases, influenza, whooping cough, bladder and kidney stones etc[4, 238]. Due to its mild action, goldenrod is used to treat gastro-enteritis in children[254]. It makes an excellent mouthwash in the treatment of thrush[7]. The plant is gathered in the summer and dried for later use[7]. The seed is anticoagulant, astringent and carminative[218]. A homeopathic remedy is made from the plant[9]. It is used in the treatment of kidney and bladder disorders, rheumatism and arthritis[9]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Solidago canadensis for infections of the urinary tract, and kidney and bladder stones (see [302] for critics of commission E).",
        price: 0.000090242,
        medrating: 2,
        source: 'https://pfaf.org/User/Plant.aspx?LatinName=Solidago+canadensis'
      },
      {
        id: 111,
        image: Plants.geraniumdissect,
        name: "Geranium dissect",
        description: "The whole plant, but especially the roots, is rich in tannin[4]. It is antiseptic, highly astringent, styptic and tonic[4]. An infusion of the whole plant, or of the roots alone, is used in the treatment of diarrhoea (especially for children and the elderly), dysentery, cholera, gastro-enteritis, internal bleeding, excessive menstruation etc[4]. Externally, it is used in the treatment of purulent wounds, haemorrhoids, thrush, vaginal discharges, inflammations of the mouth etc[238]. It is best to harvest the roots as the plant comes into flower since they are then at their most active medicinally[4]. The leaves should be harvested before the plant sets seed[4]. Both are dried for later use[238].",
        price: 0.00000017808,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Geranium+dissect"
      },
      {
        id: 112,
        image: Plants.trigonella,
        name: "Trigonella forum-graecum",
        description: "Fenugreek is much used in herbal medicine, especially in North Africa, the Middle East and India. It has a wide range of medicinal applications[254]. The seeds are very nourishing and are given to convalescents and to encourage weight gain, especially in anorexia nervosa[254]. The seeds should not be prescribed medicinally for pregnant women since they can induce uterine contractions[238, 254]. Research has shown that the seeds can inhibit cancer of the liver, lower blood cholesterol levels and also have an antidiabetic effect[254]. The seed and leaves are anticholesterolemic, anti-inflammatory, antitumor, carminative, demulcent, deobstruent, emollient, expectorant, febrifuge, galactogogue, hypoglycaemic, laxative, parasiticide, restorative and uterine tonic[4, 7, 21, 147, 165, 176, 238]. The seed yields a strong mucilage and is therefore useful in the treatment of inflammation and ulcers of the stomach and intestines[4, 254]. Taken internally, a decoction of the ground seeds serves to drain off the sweat ducts[7]. The seed is very nourishing and body-building and is one of the most efficacious tonics in cases of physical debility caused by anaemia or by infectious diseases, especially where a nervous factor is involved[7, 244]. It is also used in the treatment of late-onset diabetes, poor digestion (especially in convalescence), insufficient lactation, painful menstruation, labour pains etc[238, 244]. The seeds freshen bad breath and restore a dulled sense of taste[254]. Externally, the seeds can be ground into a powder and used as a poultice for abscesses, boils, ulcers, burns etc, or they can be used as a douche for excessive vaginal discharge[4, 244, 254]. The leaves are harvested in the growing season and can be used fresh or dried[238]. The seeds are harvested when fully ripe and dried for later use[238]. Compounds extracted from the plant have shown cardiotonic, hypoglycaemic, diuretic, antiphlogistic and hypotensive activity[218]. One of its constituent alkaloids, called 'trigonelline', has shown potential for use in cancer therapy. The seed contains the saponin diosgenin, an important substance in the synthesis of oral contraceptives and sex hormones[244], whilst saponins in the plant have been extracted for use in various other pharmaceutical products[238]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Trigonella foenum-graecum for loss of appetite, inflammation of the skin (see [302] for critics of commission E).",
        price: 0.000942042,
        medrating: 5,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Trigonella+foenum-graecum"
      },
      {
        id: 113,
        image: Plants.gymnemasylvestre,
        name: "Gymnema sylvestre",
        description: "Gurmar is an important, bitter-tasting Ayurvedic herb that is used especially to reduce blood sugar levels in diabetics[304 ]. Both roots and leaves can be used[304 ]. The plant contains a group of oleanane type triterpenoid saponins known as gymnemic acids, a complex mixture of at least 9 closely related acidic glycosides, which have taste-modifying activity; and gurmarin, which is a sweet taste-suppressing polypeptide. When the leaf is chewed, the ability to taste sweetness is lost temporarily[299 ]. Studies have demonstrated that the leaf powder may exert an antidiabetic effect via a number of pathways, including decreasing the uptake of glucose from the small intestine; improvements in glycogen synthesis, glycolysis, gluconeogenesis, and hepatic and muscle glucose uptake; as well as the reversal of haemoglobin and plasma protein glycosylation[299 ]. The plant is antidote, astringent, diuretic, emetic, hypoglycaemic, purgative, refrigerant, stomachic and tonic[304 ]. It is used particularly to reduce sugar levels in the blood and urine[304 ]. The leaves are used in the treatment of fevers and coughs[299 ]. The powdered leaf is considered to help curb cravings for sweets and to have lipid lowering effects, it is added to food additives as a weight loss remedy[299 ]. The powder also helps in preventing caries[299 ]. Applied externally the leaves are combined with castor oil and used as a poultice to treat swollen glands[304 ]. The roots are considered to be a useful antidote to snakebite - they are applied to the wound as a powder, made into a paste with water or given internally as a decoction[299 , 304 ]. The pounded and cooked roots are added to food and eaten as a treatment for epilepsy[299 ]. The pounded cooked root or root powder is applied externally to treat boils[299 ].",
        price: 0.000456000500100001,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Gymnema+sylvestre"
      },
      {
        id: 114,
        image: Plants.rosablanda,
        name: "Rosa blanda",
        description: "A decoction of the fruit has been used in the treatment of itching piles and any other itches[257]. The skin of the fruit has been used in the treatment of stomach problems and indigestion[257]. The dried powdered flowers have been used in the treatment of heartburn[257]. An infusion of the root has been used as a wash for inflamed eyes[257]. The infusion has also been used as an analgesic to treat headaches and lumbago[257]. The fruit of many members of this genus is a very rich source of vitamins and minerals, especially in vitamins A, C and E, flavanoids and other bio-active compounds. It is also a fairly good source of essential fatty acids, which is fairly unusual for a fruit. It is being investigated as a food that is capable of reducing the incidence of cancer and also as a means of halting or reversing the growth of cancers[214].",
        price: 0.00000257,
        medrating: 2,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Rosa+blanda"
      },
      {
        id: 115,
        image: Plants.aster,
        name: "White Panicle Aster",
        description: "An infusion of the plant, combined with another unnamed plant, has been used in the treatment of fevers[257]. A decoction of the plant has been used to dress wounds[257]. The dried and powdered plant has been used as a salve on abrasions[257]. Smoke from the crushed blossoms has been inhaled in the treatment of nosebleeds[257].",
        price: 0.00016787,
        medrating: 1,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Aster+lanceolatus"
      },
      {
        id: 116,
        image: Plants.dandelion,
        name: "Taraxacum officinale",
        description: "The dandelion is a commonly used herbal remedy. It is especially effective and valuable as a diuretic because it contains high levels of potassium salts and therefore can replace the potassium that is lost from the body when diuretics are used[238]. All parts of the plant, but especially the root, are slightly aperient, cholagogue, depurative, strongly diuretic, hepatic, laxative, stomachic and tonic[4, 7, 9, 21, 54, 165, 176, 222, 238]. The root is also experimentally cholagogue, hypoglycaemic and a weak antibiotic against yeast infections[222]. The dried root has a weaker action[222]. The roots can be used fresh or dried and should be harvested in the autumn when 2 years old[4]. The leaves are harvested in the spring when the plant is in flower and can be dried for later use[9]. A tea can be made from the leaves or, more commonly, from the roots[213]. The plant is used internally in the treatment of gall bladder and urinary disorders, gallstones, jaundice, cirrhosis, dyspepsia with constipation, oedema associated with high blood pressure and heart weakness, chronic joint and skin complaints, gout, eczema and acne[238]. The plant has an antibacterial action, inhibiting the growth of Staphylococcus aureus, Pneumococci, Meningococci, Bacillus dysenteriae, B. typhi, C. diphtheriae, Proteus etc[176]. The latex contained in the plant sap can be used to remove corns, warts and verrucae[7]. The latex has a specific action on inflammations of the gall bladder and is also believed to remove stones in the liver[7]. A tea made from the leaves is laxative[222]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Taraxacum officinale for dyspepsia, urnary tract infections, liver and gallbladder complaints, appetite loss (see [302] for critics of commission E).",
        price: 0.00035271,
        medrating: 3,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Taraxacum+officinale"
      },
      {
        id: 117,
        image: Plants.sunflower,
        name: "Helianthus annuus",
        description: "A tea made from the leaves is astringent, diuretic and expectorant, it is used in the treatment of high fevers[222]. The crushed leaves are used as a poultice on sores, swellings, snakebites and spider bites[222, 257]. The leaves are harvested as the plant comes into flower and are dried for later use[238]. A tea made from the flowers is used in the treatment of malaria and lung ailments[222, 257]. The flowering head and seeds are febrifuge, nutritive and stomachic[7]. The seed is also considered to be diuretic and expectorant[4, 218, 222]. It has been used with success in the treatment of many pulmonary complaints[4]. A decoction of the roots has been used as a warm wash on rheumatic aches and pains[257].",
        price: 0.0005023439,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Helianthus+annuus"
      },
      {
        id: 118,
        image: Plants.rhustyphina,
        name: "Rhus typhina",
        description: "Stag's horn sumach was often employed medicinally by several native North American Indian tribes who valued it especially for its astringent qualities[257]. It is little used in modern herbalism. Some caution is advised in the use of the leaves and stems of this plant, see the notes above on toxicity. The bark is antiseptic, astringent, galactogogue and tonic[222, 257]. An infusion is used in the treatment of diarrhoea, fevers, piles, general debility, uterine prolapse etc[213, 222]. An infusion is also said to greatly increase the milk flow of a nursing mother - small pieces of the wood were also eaten for this purpose[257]. The inner bark is said to be a valuable remedy for piles[257]. The roots are astringent, blood purifier, diuretic and emetic[222]. An infusion of the roots, combined with purple coneflower (Echinacea purpurea) has been used in the treatment of venereal disease[257]. A poultice of the roots has been used to treat boils[257]. The leaves are astringent. They have been used in the treatment of asthma, diarrhoea and stomatosis[222]. An infusion of the fruits has been used as a tonic to improve the appetite and as a treatment for diarrhoea[257]. The berries are astringent and blood purifier[257]. They were chewed as a remedy for bed-wetting[222, 257]. A tea made from the berries has been used to treat sore throats[213]. The flowers are astringent and stomachic. An infusion has been used to treat stomach pains[257]. The sap has been applied externally as a treatment of warts[226]. Some caution is advised here since the sap can cause a rash on many people[K].",
        price: 0.0000342451,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Rhus+typhina#google_vignette"
      },
      {
        id: 119,
        image: Plants.jewelweed,
        name: "Jewelweed",
        description: "Jewelweed was commonly used as a medicinal herb by a number of native North American Indian tribes[257], and has been widely used in domestic medicine. Its main value lies in its external application for wounds and a range of skin complaints. However, it is little used in modern herbalism and is considered to be dangerous and 'wholly questionable' when used internally[4]. The herb is antidote, cathartic, diuretic and emetic[4, 172, 207, 213]. An infusion has been used in the treatment of fevers, difficult urination, measles, stomach cramps, jaundice etc[257]. The juice of the leaves is used externally in the treatment of piles, fungal dermatitis, nettle stings, poison ivy rash, burns etc[4, 172, 207, 213, 257]. The sap is used to remove warts[207]. A poultice of the leaves is applied to bruises, burns, cuts etc[222].",
        price: 0.000526252,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Impatiens+capensis"
      },
      {
        id: 120,
        image: Plants.japaneseknotweed,
        name: "Japanese knotweed",
        description: "Possibly may have similar properties to other knotweeds where the root can be antiphlogistic, bechic, depurative, diuretic, emmenagogue, emollient, febrifuge, stomachic and vulnerary[46, 61, 147, 178, 218]. It is also used in the treatment of women's complaints[147]. A decoction is used in the treatment of burn injuries, boils and abscesses, poisonous snakebites, acute hepatitis, appendicitis, traumatic injuries and menstrual irregularities[147]. The leaves can be crushed and applied externally as a poultice to abscesses, cuts etc, whilst the dried roots can be ground into a powder and applied externally[147]. Extracts of the plant have shown antitumour activity[218].",
        price: 0.00005256219,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Reynoutria+japonica"
      },
      {
        id: 121,
        image: Plants.monarda,
        name: "Wild bergamot",
        description: "Wild bergamot was often employed medicinally by several native North American Indian tribes who used it to treat a variety of complaints, but especially those connected with the digestive system[257]. It is still sometimes used in modern herbalism. The leaves and flowering stems are carminative, diaphoretic, diuretic and stimulant[4, 222]. An infusion is used internally in the treatment of colds, catarrh, headaches, gastric disorders, aching kidneys, to reduce low fevers and soothe sore throats[213, 238, 257]. Externally, it is applied as a poultice to skin eruptions, cuts etc and as a wash for sore eyes[238, 257]. The leaves can be harvested before the plant flowers, or they can be harvested with the flowering stems. They can be used fresh or dried[238]. The plant contains the essential oil 'bergamot oil' which can be inhaled to treat bronchial complaints[213]. The leaves also contain 'thymol', an essential oil that can be used to expel gas from the digestive tract[213].",
        price: 0.0000034738,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Monarda+fistulosa"
      },
      {
        id: 122,
        image: Plants.quercusrobur,
        name: "English oak",
        description: "The oak tree has a long history of medicinal use. It is anti-inflammatory, antiseptic, astringent, decongestant, haemostatic and tonic[4, 7, 9, 13, 21, 165]. The bark is the part of the plant that is most commonly used[4], though other parts such as the galls, seeds and seed cups are also sometimes used[7]. A decoction of the bark is useful in the treatment of chronic diarrhoea, dysentery, intermittent fevers, haemorrhages etc[4]. Externally, it is used to bathe wounds, skin eruptions, sweaty feet, piles etc[9]. It is also used as a vaginal douche for genital inflammations and discharge, and also as a wash for throat and mouth infections[9]. The bark is harvested from branches 5 - 12 years old, and is dried for later use[9]. Any galls produced on the tree are strongly astringent and can be used in the treatment of haemorrhages, chronic diarrhoea, dysentery etc[4]. The plant is used in Bach flower remedies - the keywords for prescribing it are 'Despondency', 'Despair, but never ceasing effort'[209]. A homeopathic remedy is made from the bark. It is used in the treatment of disorders of the spleen and gall bladder[9]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Quercus robur Pedunculate Oak for coughs/bronchitis, diarrhoea, inflammation of mouth and pharynx, inflammation of the skin (see [302] for critics of commission E).",
        price: 0.00000324232,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Quercus+robur"
      },

      {
        id: 123,
        image: Plants.lobelia,
        name: "Lobelia siphilitica",
        description: "The root is cathartic, diaphoretic and emetic[4, 46, 103]. It is used in the treatment of dropsy, diarrhoea, stomach complaints, syphilis and dysentery[4, 257]. A poultice of the root has been applied to sores that are hard to heal[257]. The leaves are analgesic and febrifuge[257]. An infusion has been used in the treatment of colds and fevers[257]. A poultice of the crushed leaves has been applied to the head to relieve the pain of headaches[257]. At one time in N. America the root of this plant was believed to be effective in the treatment of VD[103, 222]. When used in Europe, however, it was found to be ineffective[213]. This might have been because the N. American Indians used the fresh root (which still contained the volatile oils) and also used it in conjunction with Podophyllum peltatum and Prunus virginiana, and then dusted the ulcers with the bark of Ceanothus americanus[213]. It was believed by some native North American Indian tribes that if the finely ground roots were secretly added to the food of an arguing couple then this would avert a divorce and they would love each other again[213]. A homeopathic remedy is made from the roots[4].",
        price: 0.000323,
        medrating: 2,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Lobelia+siphilitica"
      },
      {
        id: 124,
        image: Plants.Elderberry,
        name: "Elderberry",
        description: "Elder has a very long history of household use as a medicinal herb and is also much used by herbalists[4]. The plant has been called 'the medicine chest of country people'[4]. The flowers are the main part used in modern herbalism, though all parts of the plant have been used at times[238]. Stimulant[9, 53, 165]. The inner bark is collected from young trees in the autumn and is best sun-dried[4]. It is diuretic, a strong purgative and in large doses emetic[4, 7]. It is used in the treatment of constipation and arthritic conditions[238]. An emollient ointment is made from the green inner bark[4]. The leaves can be used both fresh or dry. For drying, they are harvested in periods of fine weather during June and July. The leaves are purgative, but are more nauseous than the bark[4]. They are also diaphoretic, diuretic, expectorant and haemostatic[4, 7]. The juice is said to be a good treatment for inflamed eyes[4]. An ointment made from the leaves is emollient and is used in the treatment of bruises, sprains, chilblains, wounds etc[4]. The fresh flowers are used in the distillation of 'Elder Flower Water'. The flowers can be preserved with salt to make them available for distillation later in the season[4]. The water is mildly astringent and a gentle stimulant. It is mainly used as a vehicle for eye and skin lotions[4]. The dried flowers are diaphoretic, diuretic, expectorant, galactogogue and pectoral[4, 7]. An infusion is very effective in the treatment of chest complaints and is also used to bathe inflamed eyes[4]. The infusion is also a very good spring tonic and blood cleanser[4]. Externally, the flowers are used in poultices to ease pain and abate inflammation[4]. Used as an ointment, it treats chilblains, burns, wounds, scalds etc[4]. The fruit is depurative, weakly diaphoretic and gently laxative[4, 7]. A tea made from the dried berries is said to be a good remedy for colic and diarrhoea[4]. The fruit is widely used for making wines, preserves etc., and these are said to retain the medicinal properties of the fruit[4]. The pith of young stems is used in treating burns and scalds[46, 61, 100]. The root is no longer used in herbal medicine but it formerly had a high reputation as an emetic and purgative that was very effective against dropsy[4]. A homeopathic remedy is made from the fresh inner bark of young branches[4]. It relieves asthmatic symptoms and spurious croup in children[4]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Sambucus nigra for cough and bronchitis, fevers and colds (see [302] for critics of commission E).",
        price: 0.000043231,
        medrating: 3,
        source: "https://pfaf.org/user/plant.aspx?latinname=Sambucus+nigra"

      },
      {
        id: 125,
        image: Plants.mint,
        name: "Virginia Mountain Mint",
        description: "A tea made from the leaves is alterative, diaphoretic and carminative[222, 257]. A poultice of the leaves is used in the treatment of headaches[222]. The tea is also used in the treatment of menstrual disorders, indigestion, colic, coughs, colds, chills and fevers[222, 238, 257].The flowering stems are cut as flowering begins and they can be used fresh or dried[238]. There is a suggestion that this plant can cause abortions, so it is best not used by pregnant women[257].",
        price: 0.00009323,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Pycnanthemum+virginianum"
      },
      {
        id: 126,
        image: Plants.lavandula,
        name: "Lavandula angustifolia",
        description: "Lavender is a commonly used household herb, though it is better known for its sweet-scented aroma than for its medicinal qualities[254]. However, it is an important relaxing herb, having a soothing and relaxing affect upon the nervous system[254]. The flowering spikes can be dried and used internally in a tincture, though the extracted essential oil is more commonly used. The essential oil is much more gentle in its action than most other essential oils and can be safely applied direct to the skin as an antiseptic to help heal wounds, burns etc[254]. An essential oil obtained from the flowers is antihalitosis, powerfully antiseptic, antispasmodic, aromatic, carminative, cholagogue, diuretic, nervine, sedative, stimulant, stomachic and tonic[4, 7, 9, 21, 165, 238]. It is not often used internally, though it is a useful carminative and nervine[4]. It is mainly used externally where it is an excellent restorative and tonic - when rubbed into the temples, for example, it can cure a nervous headache, and it is a delightful addition to the bath-water[4]. Its powerful antiseptic properties are able to kill many of the common bacteria such as typhoid, diphtheria, streptococcus and Pneumococcus, as well as being a powerful antidote to some snake venoms[244]. It is very useful in the treatment of burns, sunburn, scalds, bites, vaginal discharge, anal fissure etc, where it also soothes the affected part of the body and can prevent the formation of permanent scar tissue[4, 238]. The essential oil is used in aromatherapy. Its keyword is 'Immune system'[210]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Lavandula angustifolia for loss of appetite, nervousness and insomnia, circulatory disorders, dyspeptic complaints (see [302] for critics of commission E).",
        price: 0.000176543,
        medrating: 3,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Lavandula+angustifolia"
      },
      {
        id: 127,
        image: Plants.rosanutkana,
        name: "Rosa Nutkana",
        description: "An infusion of the roots and sprouts has been used as an eyewash for sore eyes[257]. A decoction of the roots has been used by women after giving birth and also in the treatment of sore throats[257]. A decoction of the bark has been taken to ease the labour pains of childbirth[257]. A poultice of the chewed leaves has been used to alleviate the pain of bee stings[257]. A decoction of the branches, combined with chokecherry (Prunus virginiana) and red willow (Salix bonplandiana), has been used in the treatment of various women's complaints, diarrhoea and vomiting[257]. The leaves have been placed in shoes as a protection from athletes foot[257]. The fruit of many members of this genus is a very rich source of vitamins and minerals, especially in vitamins A, C and E, flavanoids and other bio-active compounds. It is also a fairly good source of essential fatty acids, which is fairly unusual for a fruit. It is being investigated as a food that is capable of reducing the incidence of cancer and also as a means of halting or reversing the growth of cancers[214].",
        price: 0.00019231,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Rosa+nutkana"
      },
      {
        id: 128,
        image: Plants.pinus,
        name: "Pinus palustris",
        description: "The turpentine obtained from the resin of all pine trees is antiseptic, diuretic, rubefacient and vermifuge[4]. It is a valuable remedy used internally in the treatment of kidney and bladder complaints and is used both internally and as a rub and steam bath in the treatment of rheumatic affections[4]. It is also very beneficial to the respiratory system and so is useful in treating diseases of the mucous membranes and respiratory complaints such as coughs, colds, influenza and TB[4]. Externally it is a very beneficial treatment for a variety of skin complaints, wounds, sores, burns, boils etc and is used in the form of liniment plasters, poultices, herbal steam baths and inhalers[4]. The turpentine was formerly used in the treatment of colic, chronic diarrhoea, worms, to arrest bleeding from tooth sockets and as a rubefacient[222].",
        price: 0.00020323,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Pinus+palustris"
      },
      {
        id: 129,
        image: Plants.lythrum,
        name: "Lythrum salicaria",
        description: "Purple loosestrife is an astringent herb that is mainly employed as a treatment for diarrhoea and dysentery. It can be safely taken by people of all ages and has been used to help arrest diarrhoea in breast-feeding babies[254]. It can also be used to treat heavy periods and inter-menstrual bleeding[254]. Modern research has shown the whole plant to be antibiotic and to be particularly effective against the micro-organism that causes typhus[254]. The flowering plant is antibiotic, highly astringent, hypoglycaemic, styptic and vulnerary[4, 7, 9, 21, 152, 218, 238]. It is valued as an intestinal disinfectant, especially in cases of enteritis[7], an infusion is used internally in the treatment of diarrhoea, internal bleeding, excessive menstruation etc[9, 222, 238]. The flowering plant is harvested in the summer and can be used fresh or dried[9]. Externally, the plant is used as a cleansing and healing wash for wounds, sores, impetigo, eczema, excess vaginal discharge, vaginal itching etc[7, 222, 238, 254]. The powdered plant is used as a haemostatic in cases of severe nosebleeds[7]. The stems are regarded as gum stimulators and are given to children to chew in order to strengthen weak or bleeding gums[7].",
        price: 0.00021424,
        medrating: 3,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Lythrum+salicaria"
      },
      {
        id: 130,
        image: Plants.betulapendula,
        name: "Betula pendula",
        description: "Anti-inflammatory, cholagogue, diaphoretic[21, 165, 201]. The bark is diuretic and laxative[7]. An oil obtained from the inner bark is astringent and is used in the treatment of various skin afflictions, especially eczema and psoriasis[4, 238]. The bark is usually obtained from trees that have been felled for timber and can be distilled at any time of the year[238]. The inner bark is bitter and astringent, it is used in treating intermittent fevers[4]. The vernal sap is diuretic[4]. The buds are balsamic[7]. The young shoots and leaves secrete a resinous substance which has acid properties, when combined with alkalis it is a tonic laxative[4]. The leaves are anticholesterolemic and diuretic[7]. They also contain phytosides, which are effective germicides[7]. An infusion of the leaves is used in the treatment of gout, dropsy and rheumatism, and is recommended as a reliable solvent of kidney stones[4]. The young leaves and leaf buds are harvested in the spring and dried for later use[238]. A decoction of the leaves and bark is used for bathing skin eruptions[4]. Moxa is made from the yellow fungous excrescences of the wood, which sometimes swell out of the fissures[4]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Betula species for infections of the urinary tract, kidney and bladder stones, rheumatism (see [302] for critics of commission E).",
        price: 0.00022525,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Betula+pendula"
      },
      {
        id: 131,
        image: Plants.crataegusmonogyna,
        name: "Hawthorn",
        description: "Hawthorn is an extremely valuable medicinal herb. It is used mainly for treating disorders of the heart and circulation system, especially angina[254]. Western herbalists consider it a 'food for the heart', it increases the blood flow to the heart muscles and restores normal heart beat[254]. This effect is brought about by the presence of bioflavonoids in the fruit, these bioflavonoids are also strongly antioxidant, helping to prevent or reduce degeneration of the blood vessels[254]. The fruit is antispasmodic, cardiac, diuretic, sedative, tonic and vasodilator[4, 9, 21, 46, 165]. Both the fruits and flowers of hawthorns are well-known in herbal folk medicine as a heart tonic and modern research has borne out this use. The fruits and flowers have a hypotensive effect as well as acting as a direct and mild heart tonic[222]. They are especially indicated in the treatment of weak heart combined with high blood pressure[222], they are also used to treat a heart muscle weakened by age, for inflammation of the heart muscle, arteriosclerosis and for nervous heart problems[21]. Prolonged use is necessary for the treatment to be efficacious[222]. It is normally used either as a tea or a tincture[222]. Hawthorn is combined with ginkgo (Ginkgo biloba) to enhance poor memory, working by improving the blood supply to the brain[254]. The bark is astringent and has been used in the treatment of malaria and other fevers[7]. The roots are said to stimulate the arteries of the heart[218].",
        price: 0.00043626,
        medrating: 5,
        source: "https://pfaf.org/user/plant.aspx?latinname=Crataegus+monogyna"
      },
      {
        id: 132,
        image: Plants.Prunuslaurocerasus,
        name: "Prunus laurocerasus",
        description: "The fresh leaves are antispasmodic, narcotic and sedative[4, 7]. They are of value in the treatment of coughs, whooping cough, asthma, dyspepsia and indigestion[4, 238]. Externally, a cold infusion of the leaves is used as a wash for eye infections[238]. There are different opinions as to the best time to harvest the leaves, but they should only be used fresh because the active principles are destroyed if the leaves are dried[4]. Although no specific mention has been seen for this species, all members of the genus contain amygdalin and prunasin, substances which break down in water to form hydrocyanic acid (cyanide or prussic acid). In small amounts this exceedingly poisonous compound stimulates respiration, improves digestion and gives a sense of well-being[238].",
        price: 0.00018867,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Prunus+laurocerasus"
      },
      {
        id: 133,
        image: Plants.Centaureascabiosa,
        name: "Centaurea scabiosa",
        description: "The roots and seeds are diaphoretic, diuretic, tonic and vulnerary[4]. The plant once had a very high reputation as an ingredient of the Medieval 'salve', an ointment applied to heal wounds and treat skin infections[4, 254].",
        price: 0.0000920166,
        medrating: 2,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Centaurea+scabiosa"
      },
      {
        id: 134,
        image: Plants.Leucanthemumvulgaree,
        name: "Leucanthemum vulgare",
        description: "The whole plant, and especially the flowers[7], is antispasmodic, antitussive, diaphoretic, diuretic, emmenagogue, tonic and vulnerary[4, 7, 21]. It is harvested in May and June then dried for later use[4]. The plant has been employed successfully in the treatment of whooping cough, asthma and nervous excitability[4]. Externally it is used as a lotion on bruises, wounds, ulcers and some cutaneous diseases[4, 7]. A decoction of the dried flowers and stems has been used as a wash for chapped hands[257]. A distilled water made from the flowers is an effective eye lotion in the treatment of conjunctivitis[7].",
        price: 0.00012909,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Leucanthemum+vulgare"
      },
      {
        id: 135,
        image: Plants.Tanacetum,
        name: "Tansy",
        description: "Tansy is a commonly grown domestic remedy, useful in treating a wide range of complaints, though it is little used in modern herbalism[4, 254]. Its main value is as a vermifuge to expel intestinal worms and, to a lesser degree, to help stimulate menstrual bleeding[254]. Tansy should be used with caution, however, it is possibly unsafe for internal use, especially if you are pregnant[238]. The essential oil in the leaves is toxic and as little as ½oz can kill an adult[21, 222]. The leaves and flowering tops are anthelmintic, antispasmodic, bitter, carminative, emmenagogue, stimulant and tonic[4, 7, 9, 21, 46, 165]. An infusion of the leaves or whole plant is used to treat menstrual irregularities and as an anthelmintic, especially for children[4, 213]. It is also valuable in treating hysteria, kidney weaknesses, stomach problems, fevers and also as an emmenagogue[4]. In larger doses the plant can procure an abortion, though these doses can be poisonous[213]. Externally, tansy is used as a poultice on swellings and some eruptive skin diseases[4]. It is also used externally to kill lice, fleas and scabies, though even external use of the plant carries the risk of toxicity[254]. The plant is harvested as it is coming into flower and is dried for later use[4]. The seeds are used as an anthelmintic[207].",
        price: 0.0000920166,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Tanacetum+vulgare"
      },
      {
        id: 136,
        image: Plants.Berberisaquifolium,
        name: "Berberis aquifolium",
        description: "Oregon grape was often used by several native North American Indian tribes to treat loss of appetite and debility[254]. Its current herbal use is mainly in the treatment of gastritis and general digestive weakness, to stimulate the kidney and gallbladder function and to reduce catarrhal problems[254, 257]. The root and root bark is alterative, blood tonic, cholagogue, diuretic, laxative and tonic[4, 21, 165, 257]. It improves the digestion and absorption and is taken internally in the treatment of psoriasis, syphilis, haemorrhages, stomach complaints and impure blood conditions[4, 238]. Externally, it has been used as a gargle for sore throats and as a wash for blurry or bloodshot eyes[257]. The roots are harvested in late autumn or early spring and dried for later use[238]. The fruit is an excellent gentle and safe laxative[257]. Berberine, universally present in rhizomes of Mahonia species, has marked antibacterial effects[218] and is used as a bitter tonic[213]. Since it is not appreciably absorbed by the body, it is used orally in the treatment of various enteric infections, especially bacterial dysentery[218]. It should not be used with Glycyrrhiza species (Liquorice) because this nullifies the effects of the berberine[218]. Berberine has also shown antitumour activity[218]. The root and root bark are best harvested in the autumn[213].",
        price: 0.0005520166,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Berberis+aquifolium"
      },
      {
        id: 137,
        image: Plants.Melilotus,
        name: "Melilotus albus",
        description: "The whole herb, harvested when in flower, is aromatic, carminative and emollient[4]. It was at one time widely esteemed as a medicinal herb, though it has fallen from favour in recent times[4]. The dried leaves contain coumarin, this can be used as an anticlotting agent for the blood[207]. The dried flowering plant has been used in ointments for external ulcers[222].",
        price: 0.0001591,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Melilotus+albus"
      },
      {
        id: 138,
        image: Plants.RedClover,
        name: "Red Clover",
        description: "Red clover is safe and effective herb with a long history of medicinal usage. It is commonly used to treat skin conditions, normally in combination with other purifying herbs such as Arctium lappa and Rumex crispus[254]. It is a folk remedy for cancer of the breast, a concentrated decoction being applied to the site of the tumour in order to encourage it to grow outwards and clear the body[254]. Flavonoids in the flowers and leaves are oestrogenic and may be of benefit in the treatment of menopausal complaints[254]. The flowering heads are alterative, antiscrofulous, antispasmodic, aperient, detergent, diuretic, expectorant, sedative and tonic[4, 21, 165, 218, 238]. It has also shown anticancer activity[172, 218], poultices of the herb have been used as local applications to cancerous growths[4]. Internally, the plant is used in the treatment of skin complaints (especially eczema and psoriasis), cancers of the breast, ovaries and lymphatic system, chronic degenerative diseases, gout, whooping cough and dry coughs[238]. The plant is normally harvested for use as it comes into flower[222, 238] and some reports say that only the flowers are used[4]. The toxic indolizidine alkaloid 'slaframine' is often found in diseased clover (even if the clover shows no external symptoms of disease). This alkaloid is being studied for its antidiabetic and anti-AIDS activity[222].",
        price: 0.0001591,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Trifolium+pratense"
      },
      {
        id: 139,
        image: Plants.Rosarugosa,
        name: "Rosa rugosa",
        description: "The leaves are used in the treatment of fevers[218]. The flowers act on the spleen and liver, promoting blood circulation[147, 218]. They are used internally in the treatment of poor appetite and digestion, and menstrual complaints arising from constrained liver energy[238]. The root is used in the treatment of coughs[218]. The fruit of many members of this genus is a very rich source of vitamins and minerals, especially in vitamins A, C and E, flavanoids and other bio-active compounds. It is also a fairly good source of essential fatty acids, which is fairly unusual for a fruit. It is being investigated as a food that is capable of reducing the incidence of cancer and also as a means of halting or reversing the growth of cancers[214].",
        price: 0.0001591,
        medrating: 2,
        source: "https://pfaf.org/User/plant.aspx?LatinName=Rosa+rugosa"
      },
      {
        id: 140,
        image: Plants.Elaeagnusumbellata,
        name: "Elaeagnus umbellata",
        description: "The flowers are astringent, cardiac and stimulant[240]. The seeds are used as a stimulant in the treatment of coughs[240]. The expressed oil from the seeds is used in the treatment of pulmonary affections[240]. The fruit of many members of this genus is a very rich source of vitamins and minerals, especially in vitamins A, C and E, flavanoids and other bio-active compounds. It is also a fairly good source of essential fatty acids, which is fairly unusual for a fruit. It is being investigated as a food that is capable of reducing the incidence of cancer and also as a means of halting or reversing the growth of cancers[214].",
        price: 0.000347197,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Elaeagnus+umbellata"
      },
      {
        id: 141,
        image: Plants.Blacklocust,
        name: "Black Locust",
        description: "Febrifuge[13, 46]. The flowers are antispasmodic, aromatic, diuretic, emollient and laxative[218]. They are cooked and eaten for the treatment of eye ailments[218]. The flower is said to contain the antitumor compound benzoaldehyde[269]. The inner bark and the root bark are emetic, purgative and tonic[4, 7, 218, 257]. The root bark has been chewed to induce vomiting, or held in the mouth to allay toothache[222, 257], though it is rarely if ever prescribed as a therapeutic agent in Britain[4]. The fruit is narcotic[13]. This probably refers to the seedpod. The leaves are cholagogue and emetic[7]. The leaf juice inhibits viruses[218].",
        price: 0.0001591,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?latinname=Robinia+pseudoacacia"
      },
      {
        id: 142,
        image: Plants.Erigeron,
        name: "Erigeron canadensis",
        description: "In traditional North American herbal medicine, Canada fleabane was boiled to make steam for sweat lodges, taken as a snuff to stimulate sneezing during the course of a cold and burned to create a smoke that warded off insects[254]. Nowadays it is valued most for its astringency, being used in the treatment of gastro-intestinal problems such as diarrhoea and dysentery[254]. It is said to be a very effective treatment for bleeding haemorrhoids[254]. The whole plant is antirheumatic, astringent, balsamic, diuretic, emmenagogue, styptic, tonic and vermifuge[4, 7, 9, 21, 222]. It can be harvested at any time that it is in flower and is best used when fresh[4, 207, 238]. The dried herb should not be stored for more than a year[238]. The seeds can also be used[4]. An infusion of the plant has been used to treat diarrhoea and internal haemorrhages[213] or applied externally to treat gonorrhoea[213] and bleeding piles[7]. The leaves are experimentally hypoglycaemic[218]. The essential oil found in the leaves is used in the treatment of diarrhoea, dysentery and internal haemorrhages[4, 207, 218]. It is a uterine stimulant[213] and is also said to be valuable in the treatment of inflamed tonsils plus ulceration and inflammation of the throat[4]. A tea of the boiled roots is used to treat menstrual irregularities[213]. A homeopathic remedy is made from the plant[9]. It is used in the treatment of haemorrhoids and painful menstruation[9].",
        price: 0.0000347197,
        medrating: 3,
        source: "https://pfaf.org/user/plant.aspx?LatinName=Erigeron+canadensis"
      },
      {
        id: 143,
        image: Plants.Mugwort,
        name: "Mugwort",
        description: "Mugwort has a long history of use in herbal medicine especially in matters connected to the digestive system, menstrual complaints and the treatment of worms[238]. It is slightly toxic, however, and should never be used by pregnant women, especially in their first trimester, since it can cause a miscarriage[7, 238]. Large, prolonged dosage can damage the nervous system[268]. All parts of the plant are anthelmintic, antiseptic, antispasmodic, carminative, cholagogue, diaphoretic, digestive, emmenagogue, expectorant, nervine, purgative, stimulant, slightly tonic and used in the treatment of women's complaints[4, 7, 13, 21, 147, 165, 178, 201]. The leaves are also said to be appetizer, diuretic, haemostatic and stomachic[176, 218, 222]. They can be used internally or externally[218]. An infusion of the leaves and flowering tops is used in the treatment of nervous and spasmodic affections, sterility, functional bleeding of the uterus, dysmenorrhoea, asthma and diseases of the brain[176, 243]. The leaves have an antibacterial action, inhibiting the growth of Staphylococcus aureus, Bacillus typhi, B. dysenteriae, streptococci, E. coli, B. subtilis, Pseudomonas etc[176]. The leaves are harvested in August and can be dried for later use[4]. The stem is also said to be antirheumatic, antispasmodic, and stomachic[218]. The roots are tonic and antispasmodic[243]. They are said to be one of the best stomachics[4]. They are harvested in the autumn and dried for later use[4]. The leaves, placed inside the shoes, are said to be soothing for sore feet[238]. The compressed dried leaves and stems are used in moxibustion[176, 178, 218, 222, 238]. Another report says that the down from the leaves is used[4].",
        price: 0.0003036642430492751,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Artemisia+vulgaris"
      },
      {
        id: 144,
        image: Plants.bermudagrass,
        name: 'Cynodon dactylon (Bermudagrass)',
        description: "Bermudagrass is reported to be alterative, anabolic, antiseptic, aperient, astringent, cyanogenetic, demulcent, depurative, diuretic, emollient, sudorific, and vulnerary[269]. A decoction of the root is used as a diuretic in the treatment of dropsy and secondary syphilis[240]. An infusion of the root is used to stop bleeding from piles[240, 243]. The juice of the plant is astringent and is applied externally to fresh cuts and wounds[240]. When mixed with the powder of a clove (Syzygium aromaticum), it is used as an anthelmintic[272]. Internally, it is used in the treatment of chronic diarrhoea and dysentery[240, 243]. It is also useful in the treatment of catarrhal ophthalmia[240, 243]. The juice is also diuretic and is used in the treatment of dropsy and anasarca[240, 243]. The leaf juice has also been used in the treatment of hysteria, epilepsy and insanity[240, 243]. The plant is a folk remedy for anasarca, calculus, cancer, carbuncles, convulsions, cough, cramps, cystitis, diarrhoea, dropsy, dysentery, epilepsy, headache, haemorrhage, hypertension, hysteria, insanity, kidneys, laxative, measles, rubella, snakebite, sores, stones, tumours, uro-genital disorders, warts, and wounds[269].",
        price: 0.0003186633567578987,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Cynodon+dactylon"
      },
      {
        id: 145,
        image: Plants.crownflower,
        name: "Calotropis gigantea",
        description: "The milky sap (latex) coagulates when warm and is said to have similar cardiac properties to digitalis (from various Digitalis spp.)[ 307 ]. It is also considered to be antiseptic, emetic, purgative and vermifuge[ 299 ]. It is used in the treatment of a variety of other conditions including dysentery, leprosy, elephantiasis, epilepsy, asthma and many other complaints[ 307 ]. Mixed with salt, it is taken orally as an emetic for treating severe colds[ 348 ]. In Nepal, the latex is applied to sprains, body pains, boils and pimples[ 272 ]. The milky latex is used externally to stop bleeding, and for treating a wide range of conditions including leprosy, rheumatism, ringworm, boils, scabies, stings, burns, bruises, cuts, sores and wounds, [ 299 , 348 ]. It is applied to the gums and teeth to treat caries and toothaches[ 299 ]. The bark is used as a medicine for the treatment of neurodermatitis and syphilis[ 266 ]. The powdered bark is used to treat diarrhoea, dysentery, elephantiasis, and leprosy [ 272 , 299 ]. The stem bark is diaphoretic and expectorant, and is used for dysentery, spleen complaints, convulsions, lumbago, scabies, ringworm, pneumonia, and to induce labour. An infusion of the leaves is used to treat severe chest colds and heart conditions[ 348 ]. The leaf juice is used in the treatment of intermittent fever[ 272 ]. The smoke of dried, burned leaves is inhaled to calm asthma attacks[ 299 ]. The crushed leaves are warmed and used as a poultice on sores, burns, headaches and rheumatic pains[ 46 , 266 , 272 , 299 ]. The powdered flowers are valued for treating coughs, colds and asthma[ 272 , 299 ]. An infusion is taken to treat intestinal worms, rheumatism and epileptic attacks[ 299 ]. The juice of young buds is dropped into the ear in the treatment of earache[ 272 ]. The fruit pulp is considered abortive[ 299 ].",
        price: 0.0004321231,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Calotropis+gigantea"
      },
      {
        id: 146,
        image: Plants.Jointedflatsedge,
        name: "Cyperus articulatus",
        description: "Piripiri has a long history of use in herbal medicine systems in South America. It is particularly valued for its beneficial effect upon the digestive system and is commonly used to treat nausea, vomiting, stomach-aches, and intestinal gas[ 318 ]. The plant is anthelmintic, antibacterial, antiemetic, antifungal, carminative, contraceptive, digestive, febrifuge and sedative[ 318 ]. More recently, interest has grown about the plants possible use in treating conditions such as epilepsy and convulsions. Researchers in Africa have published several studies which suggest that the plant can mediate many of the brain chemical reactions which are required in epilepsy and report that the rhizome has anti-epileptic actions. In addition, other laboratory research reports that the plant has anti-convulsant actions, as well as sedative actions[ 318 ]. The fresh rhizomes are ground up to extract the juice, which is used as a nerve tonic in cases of stress and nervous and mental disorders (including epilepsy). It is also used to treat and prevent a wide range of digestive and gastrointestinal disorders; to treat fevers and flu; to facilitate child birth or to induce an abortion; as a contraceptive; and for throat cancer[ 318 ]. Externally, it is used to heal wounds and treat snake bite, whilst it is also put on the head as a hair tonic and to treat or prevent baldness[ 318 ]. A leaf infusion is employed for treating headaches; colds and flu; mouth sores and ulcers; and hypertension[ 318 ]. The whole plant is decocted to relieve nausea and vomiting caused from malaria[ 318 ].",
        price: 0.0007589319296963962,
        medrating: 4,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Cyperus+articulatus"
      },

      {
        id: 147,
        image: Plants.Thymeleaf,
        name: "Arenaria serpyllifolia",
        description: "The plant is antitussive, depurative, diuretic and febrifuge[[147, 218]. A decoction of the leaves is used in the treatment of dysentery[218]. It is also used in the treatment of bladder complaints, calculus troubles and acute and chronic cystitis[240].",
        price: 0.0000357565578952794,
        medrating: 2,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Arenaria+serpyllifolia"
      },
      {
        id: 148,
        image: Plants.Terminalia,
        name: "Terminalia catappa",
        description: "Various parts of the tree, such as the leaves and fruit, contain tannins and are astringent[303 , 459 ]. The leaves, crushed with Dacrydium elatum and rhizomes of Cyperus rotundus, are combined to treat dysentery[303 ]. The red leaves act as a vermifuge, while the sap of young leaves, cooked with oil from the kernel, is used to treat leprosy[303 ]. The juice of the leaves is ingested for coughs[311 ]. An infusion of the leaves is used to treat jaundice[311 ]. The leaves are used to treat indigestion[311 ]. The young leaves are used to cure headaches and colic[303 ]. Externally, the leaves may be rubbed on breasts to cure pain or, when heated, may be applied to numb parts of the body[303 ]. They may be used as a dressing for swollen rheumatic joints[303 ]. The leaves, applied to the head and sides, are refreshing and sudorific[582 ]. Leaves, bark and fruit are used to treat yaws[303 ]. The bark and root bark are useful for bilious fever, diarrhoea, thrush, and as a remedy for sores and abscesses[303 , 311 ]. The fluid from the bark is used to treat diabetes and as a tonic[311 ]. An infusion of the bark is used to treat stomach ache and also as an emetic for infants[311 ]. Externally, the bark is used to treat sores, pimples and fungal skin diseases[311 ]. The kernel of the fruit mixed with beeswax stops putrid exudation and bloody faeces. It is recommended as a mild laxative and a galactagogue for women, but too frequent use causes diarrhoea[303 ].",
        price: 0.00012947463609338055,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Terminalia+catappa"
      },
      {
        id: 149,
        image: Plants.justiciasecunda,
        name: "Justicia secunda",
        description: "Justicia secunda is Anti-Oxidant, Anti-Enzymatic, Anti-Viral, and Cytotoxic",
        price: 0.000213128420,
        medrating: 0,
        source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9952096/"
      },
      {
        id: 150,
        image: Plants.minnieroot,
        name: "Popping Pod",
        description: "In folk medicine[7] and Ayurvedic medicine[8] it is believed to be diuretic, anti-diabetic, antipyretic, analgesic, antihypertensive, and gastroprotective, and has been used for gonorrhea.[9]",
        price: 0.00014359520,
        medrating: "N/A",
        source: "https://www.inaturalist.org/taxa/291119-Ruellia-tuberosa"
      },
      {
        id: 151,
        image: Plants.foetida,
        name: "Mauritius Hemp",
        description: "The root has been used as blood purifying remedy[317 ]. An infusion with sweet oil is drunk as a treatment for syphilis[348 ]. The root is mixed with gin and used as a treatment for back pain[348 ]. The leaves are febrifuge[348 ]. They are used in a preparation with molasses or honey to treat children's obstinate colds[348 ].",
        price: 0.0000983529896,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Furcraea+foetida"
      },
      {
        id: 152,
        image: Plants.gomphrena,
        name: "Gomphrena",
        description: "Pfaffia root is a very important medicinal herb with a very long history of traditional use amongst the indigenous peoples of the Amazon region[318 ]. Regarded as a general cure-all, it was and is used as a tonic and rejuvenating herb to treat a wide range of illnesses and restore virility to the body[318 ]. In modern herbal medicine the root is considered to be an adaptogen and a tonic, able to increase the body's resistance to adverse influences by a wide range of physical, chemical, and biochemical factors and having a normalizing or restorative effect on the body as a whole[318 ]. It is taken to stimulate appetite and circulation; increase oestrogen production; balance blood sugar levels; enhance the immune system; strengthen the muscular system; enhance memory; and as a general restorative tonic after illness[318 ]. It is used to treat exhaustion and chronic fatigue; impotence; arthritis; anaemia; diabetes; cancer; high blood pressure; PMS, menopause, and hormonal disorders; and many types of stress[318 ]. The root contains 19 different amino acids, a large number of electrolytes, trace minerals, iron, magnesium, zinc, vitamins A, B1, B2, E, K , and pantothenic acid. Its high germanium content probably accounts for its properties as an oxygenator at the cellular level; its high iron content may account for its traditional use for anaemia. The root also contains novel phytochemicals including saponins, pfaffic acids, glycosides, and nortriterpenes[318 ]. Saponins are well known to have a wide spectrum of activities including lowering blood cholesterol; inhibiting cancer cell growth; and acting as antifungal and antibacterial agents[318 ]. They are also known as natural detergent and foaming agents[318 ]. Phytochemists report that saponins can act by binding with bile acids and cholesterol. It is thought that these chemicals 'clean' or purge these fatty compounds from the body (thus lowering blood cholesterol levels)[318 ]. The specific saponins found in the roots of suma include a group of novel phytochemicals named pfaffosides. These saponins have clinically demonstrated the ability to inhibit tumour cell melanomas and help to regulate blood sugar levels[318 ]. Pfaffia has demonstrated analgesic and anti-inflammatory activities in various studies[318 ].",
        price: 0.000783529896,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Gomphrena"
      },
      {
        id: 153,
        image: Plants.caju,
        name: "Caju",
        description: "The leaves are febrifuge[ 238 ]. They are used in west Africa in the treatment of malaria[ 254 ]. In India and Africa the leaves are used to treat toothache and gum problems[ 254 ]. The leaves can be harvested at any time and dried for later use[ 238 ]. The bark is astringent, rubefacient and vesicant[ 303 ]. Research has shown that it is also hypoglycaemic, having the ability to reduce blood sugar levels[ 238 ]. The bark is used in Ayurvedic medicine to detoxify snake bites[ 254 ]. The bark is harvested as required and used fresh or dried[ 238 ]. Leaf and bark infusions are used in the treatment of toothache and sore gums, whilst the bark and leaf extracts and fruit juice are taken internally to treat diarrhoea[ 238 ]. The fruit is anti-scorbutic, astringent and diuretic[ 238 , 303 ]. Cashew syrup is a good remedy for coughs and colds. Cashew apple juice is said to be effective for the treatment of syphilis, and is also used in the treatment of cholera and kidney troubles[ 303 ]. The fresh, acrid juice inside the shell is vesicant[ 324 ]. It has been used for removing warts[ 63 , 238 ] as well as for treating ringworm, leprosy and corns[ 238 ], and is applied to the soles of the feet to cure cracks in the skin[ 303 ]. It is toxic to many disease-causing organisms, such as Staphylococcus bacteria[ 238 ]. The sap, or bark extract[ 238 ], is considered to be contraceptive[ 307 ]. The gum is bactericidal, fungicidal and kills worms and protozoa[ 254 ]. It is applied externally in the treatment of leprosy, and for corns and fungal conditions[ 254 ]. An infusion of the root is an excellent purgative[ 303 ].",
        price: 0.00020707531228678734,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Anacardium+occidentale"
      },
      {
        id: 154,
        image: Plants.Spondiasmombin,
        name: "Spondias mombin",
        description: "Both the bark and flowers are used in folk medicine to make cure-all teas for digestive tract ailments, lower back pain, rheumatism, angina, sore throat, malarial fever, congestion, diarrhoea, urethritis, metrorrhagia, and as a contraceptive[303 ]. The bark is used in a remedy for gonorrhoea, to treat diarrhoea, coughs and colds, haemorrhages. stomach-aches and to alleviate fatigue[348 ].. Plant extracts exhibit antibacterial properties, and a decoction of the bark or root bark is considered antiseptic[303 ]. The roots are regarded as febrifuge[303 ]. An infusion is used to treat dysentery[348 ]. Leaf decoctions are used to treat diarrhoea, dysentery, colds, fevers and gonorrhoea[303 , 739 ]. The leaves are also used in an abortifacient preparation[348 ]. A decoction of the leaves and young stems is used as an eyewash in ophthalmia[348 , 739 ]. The flowers are cardiac and stomachic[739 ]. A decoction is used in the treatment of laryngitis, ophthalmia and children's diarrhoea[739 ]. The fruit is mildly laxative[348 ]. It is stewed and eaten to cure diarrhoea[348 ].",
        price: 0.0001911341797011994,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Spondias+mombin"
      },
      {
        id: 155,
        image: Plants.betel,
        name: "Betel Nut Palm",
        description: "Betel palm is an astringent, stimulant herb that relieves hunger, abdominal discomfort and weariness. It kills intestinal parasites and other pathogens, and also has diuretic and laxative effects[ 238 ]. It is used mainly in veterinary medicine to expel tapeworms[ 238 ]. The seed is used against anaemia, fits, leucoderma, leprosy, obesity and worms[ 303 ]. It is also used in the treatment of dysentery and malaria[ 238 ]. In combination with other ingredients, it is also a purgative and an ointment for nasal ulcers[ 303 ]. Kernels of green and mature fruits are chewed as an astringent and stimulant, often with the leaves or fruit of betel pepper (Piper betle) and slaked lime[ 303 , 320 ]. The rind is also used as a laxative in cases of constipation with flatulence and bloating, as well as a diuretic in treating oedema[ 238 ]. The fruits are harvested when fully ripe, and can be dried for later use[ 238 ]. The areca nut decoction as well as arecoline and its salts have been found to be effective on various parasitic helminth infections such as those caused by Taenia spp[ 303 ].",
        price: 0.00025952222,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Areca+catechu",
      },
      {
        id: 156,
        image: Plants.Euterpeoleracea,
        name: "Euterpe oleracea",
        description: "A cold water infusion of the wood in the stem is used as an external wash for a contraceptive[ 348 ]. The sap is styptic. It is used to treat haemorrhages, scorpion bites, and is used in the treatment of wounds and cuts[ 348 ]. A decoction of the leaves is used in the treatment of fevers[ 348 ]. An infusion of whole seedlings is used to treat shot wounds from hunting[ 348 ]. The central bud, or heart, is roasted and applied topically to soothe the pain of scorpion stings;[ 348 ]. The juice from the roasted bud should be drunk at the same time[ 348 ]. Overeating of the heart or pith causes diarrhoea[ 348 ]. The heart is dried, pulverised and then used in a plaster to cicatrize open cuts[ 348 ]. The liquid extracted from the warm heart is patted on an open wound[ 348 ]. The oil from the fruit is used in the treatment of diarrhoea[ 739 ]. A tea made from the roots is used to treat jaundice and to strengthen the blood[ 739 ]. A tea made from the seeds is used to treat fevers[ 739 ]. The fruit is used in a savoury, violet-coloured beverage that is drunk as a refreshant[ 348 ]. Phenols occur in the heart of palm[ 348 ].",
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Euterpe+oleracea"
      },
      {
        id: 157,
        image: Plants.Mauritiaflexuosa,
        name: "Mauritia flexuosa",
        description: "The oil from the seed is high in vitamin A and is frequently used to treat burns, because of its soothing qualities and its ability to promote the formation of scar tissue[314 ]. A pap prepared from the pith is used to treat dysentery and diarrhoea[348 ]. The fruit is made into a cheese-like paste that is sometimes eaten for remedying bowel problems, or to allay hunger when desperate[348 ]. The leaves are used in baths as an emollient[739 ]. The sap from young stems is considered tonic[739 ].",
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Mauritia+flexuosa"
      },
      {
        id: 158,
        image: Plants.Ageratumconyzoides,
        name: "Ageratum conyzoides",
        description: "The plant contains between 0.7 - 2.0% essential oil, plus alkaloids and saponins[283]. The whole plant is antiinflammatory and antiallergic[283]. The juice of the fresh plant, or an extract of the dried plant, is used in the treatment of allergic rhinitis and sinusitis[283]. The juice of the fresh plant is also useful in treating post-partum uterine haemorrhage[283]. The juice of the root is antilithic[240, 243]. A paste of the root, mixed with the bark of Schinus wallichii, is applied to set dislocated bones[272]. The leaves are styptic[240]. They are dried and applied as a powder to cuts, sores and the ruptures caused by leprosy[272], The powder absorbs the moisture of the disease and forms a layer that is removed after 1 - 2 days[272]. An effective cure for most cuts and sores, though it does not effect a complete cure for leprosy[272]. The leaves are also used externally in the treatment of ague[240, 243]. The juice of the plant is used to treat cuts, wounds and bruises[272]. A paste of the leaves is used as a poultice to remove thorns from the skin[272]. A paste made of the leaves mixed with equal amounts of Bidens pilosa, Drymaria cordata, Galinsoga parviflora and the rhizome of Zingiber officinale is used to treat snakebites[272]. The juice of the flowerheads is used externally to treat scabies, whilst a paste of them is used to treat rheumatism[272]. A tea made from the flowerheads mixed with Ocimum tenuifolium is used to treat coughs and colds[272].",
        price: 0.0002325581395348837,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Ageratum+conyzoides"
      },
      {
        id: 159,
        image: Plants.cannaindica,
        name: "Canna indica",
        description: "The plant is used in the treatment of women's complaints[218]. A decoction of the root with fermented rice is used in the treatment of gonorrhoea and amenorrhoea[218]. The plant is also considered to be demulcent, diaphoretic and diuretic[218].",
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/user/plant.aspx?latinname=Canna+indica"
      },
      {
        id: 160,
        image: Plants.calabash,
        name: "Calabash Tree",
        description: "The pulp (of the fruit?[ K ]) is astringent, emollient, expectorant and laxative[ 46 ]. It is used in domestic medicines[ 46 ]. The fruit is abortifacient, emetic, emmenagogue, purgative and vermifuge[ 348 ]. A syrup made from the pulp of the fruit is a popular remedy for colds[ 331 ]. The juice of the fruit is used to treat diarrhoea, pneumonia and intestinal irregularity. It is made into a strong tea and drunk to procure an abortion, to ease childbirth, and is used in a mix to relieve severe menstrual pains by eliminating blood clots[ 348 ]. A syrup made from the fruit is used to treat consumption[ 348 ]. The leaves are cholagogue, emetic (in larger doses), and purgative[ 348 ]. An infusion is sometimes administered for treating dysentery[ 331 ]. It is boiled with sugar, soft grease or Buckley's white rub to make a syrup that is used to treat colds[ 348 ]. Juice of young leaves is drunk to remedy colds and lung diseases[ 348 ]. The leaf is chewed to treat toothache[ 348 ] The leaves are used as a wash to cleanse dirty wounds[ 348 ]. The whole plant is used as a diuretic against hydropsy and diarrhoea[ 348 ]. The ripe fruit-pulp contains crescentic, tartaric, citric, tannic, chlorogenic and hydrocyanic acids, and may cause abortion in cattle[ 348 ]. The seed oil contains oleic acid[ 348 ]. The stem-bark and leaf show antimicrobial activity[ 348 ]",
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Iris"
      },
      {
        id: 161,
        image: Plants.patula,
        name: "French Marigold",
        description: "The whole herb is aromatic, digestive, diuretic and sedative[238]. It is used internally in the treatment of indigestion, colic, severe constipation[238], coughs and dysentery[218]. Externally, it is used to treat sore eyes and rheumatism[238]. The leaves are harvested as required for immediate use during the growing season, whilst the flowering plant can be dried and stored for later use[238].",
        price: 0.0001433107819444356,
        medrating: 2,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Tagetes+patula"
      },
      {
        id: 162,
        image: Plants.tageteserecta,
        name: "African Marigold",
        description: "The whole herb is anthelmintic, aromatic, digestive, diuretic, emmenagogue, sedative and stomachic[61, 238]. It is used internally in the treatment of indigestion, colic, severe constipation[238], coughs and dysentery[218]. Externally, it is used to treat sores, ulcers, eczema. sore eyes and rheumatism[218, 238, 257, 272]. The leaves are harvested as required for immediate use during the growing season, whilst the flowering plant can be dried and stored for later use[238]. A paste of the leavs is applied externally to treat boils, carbuncles and earaches[272]. The flowers are carminitive, diuretic and vermifuge[272]. A decoction is used to treat colds, and mumps[218]. It is applied externally to trea skin diseases, conjunctivitis and sore eyes[218, 272]. The root is laxative[272].",
        price: 0.0001433107819444356,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Tagetes+erecta"
      },
      {
        id: 163,
        image: Plants.trilobata,
        name: "Singapore daisy",
        description: "A strong decoction of the whole plant is used to treat severe chest colds[348 ]. It is combined with Lantana camara, as a tea or syrup, as a remedy for colds[348 ]. The leaves are included in a cough and cold remedy along with the boiled leaves of Commelina nudiflora or Hibiscus sabdariffa, and sometime also Citrus aurantiifolia[348 ]. The plant contains acetylenes and derivatives of kaurenic acid[348 ].",
        price: 0.00011433107819444356,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Sphagneticola+trilobata"
      },
      {
        id: 164,
        image: Plants.Ecliptaprostrata,
        name: "Eclipta prostrata",
        description: "The plant is used in the treatment of diarrhoea, constipation, and coughs[218]. It is used in domestic medicines[218]. It is also used in the treatment of gastrointestinal diseases[218]. The leaves are used to treat toothache[218]. The fruit is used to treat consumption[218]. The leaves are used as a wash to cleanse dirty wounds[218]. The whole plant is used as a diuretic against hydropsy and diarrhoea[218]. The seed oil contains crescentic acid[218]. The stem-bark and leaf show antimicrobial activity[218].",
        price: 0.0003331433107819444356,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Eclipta+prostrata"
      },
      {
        id: 165,
        image: Plants.castor,
        name: "Castor Oil",
        description: "The oil from the seed is a very well-known laxative that has been widely used for over 2,000 years[222]. It is considered to be fast, safe and gentle, prompting a bowel movement in 3 - 5 hours, and is recommended for both the very young and the aged[4, 254]. It is so effective that it is regularly used to clear the digestive tract in cases of poisoning[254]. It should not be used in cases of chronic constipation, where it might deal with the symptoms but does not treat the cause[4]. The flavour is somewhat unpleasant, however, and it can cause nausea in some people[4]. The oil has a remarkable antidandruff effect[7]. The oil is well-tolerated by the skin and so is sometimes used as a vehicle for medicinal and cosmetic preparations[254]. Castor oil congeals to a gel-mass when the alcoholic solution is distilled in the presence of sodium salts of higher fatty acids[240]. This gel is useful in the treatment of non-inflammatory skin diseases and is a good protective in cases of occupational eczema and dermatitis[240]. The seed is anthelmintic, cathartic, emollient, laxative, purgative[4, 7, 21]. It is rubbed on the temple to treat headache[218] and is also powdered and applied to abscesses and various skin infections[218]. The seed is used in Tibetan medicine, where it is considered to have an acrid, bitter and sweet taste with a heating potency[241]. It is used in the treatment of indigestion and as a purgative[241]. A decoction of the leaves and roots is antitussive, discutient and expectorant[218]. The leaves are used as a poultice to relieve headaches and treat boils[240].",
        price: 0.0002433107819444356,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Ricinus+communis"
      },
      {
        id: 166,
        image: Plants.Jatrophacurcas,
        name: "Barbados Nut",
        description: "Although widely used in traditional medicine, and to an extent in modern medicine, it should be noted that all parts of the plant are very poisonous and so extreme caution should be employed if utilising this plant for any internal use[K , 200 ]. Modern research has supported the traditional uses. For example, the latex has antibiotic properties against Candida albicans, Escherichia coli, Klebsiella pneumoniae, Staphylococcus aureus and Streptococcus pyogens[303 ]. It also has coagulating effects on blood plasma[303 ]. A methanol extract of the leaves afforded moderate protection for cultured human lymphoblastoid cells against the cytopathic effects of the human immunodeficiency virus[303 ]. The juice of the bark is used in the treatment of malarial fevers, and is also useful in reducing swellings caused by inflammation[272 ]. This juice is also applied externally to treat burns, scabies, eczema and ringworm[272 ]. The fresh bark is cut into small pieces and chewed or kept in the mouth for 1 - 2 hours in order to treat pyorrhoea[272 ]. A paste of the bark is applied to the gums to treat wounds and swellings of the gums[272 ]. The thin twigs are popularly used in Nepal as toothbrushes to treat toothache[272 ]. They are considered especially good for treating bleeding and swollen gums[272 ]. A leaf infusion is used as a diuretic, for bathing, to treat coughs, and as an enema in treating convulsions and fits[303 ]. The leaves are also used to treat jaundice, fevers, rheumatic pains, guinea worm sores and poor development of the foetus in pregnant women[303 ]. In Ghana the ashes from the burnt leaves are applied by rectal injection for treating haemorrhoids[303 ]. The juice of the leaves, or the latex, is applied directly to wounds and cuts as a styptic and astringent to clean teeth, gums, and to treat sores on the tongue and in the mouth[303 ]. It is also considered useful for treating decayed teeth[272 , 348 ]. The seeds resemble groundnuts in flavour, and 15 - 20 seeds will cause griping, purging and vomiting for 30 minutes. It is reported from Gabon that 1 - 2 roasted seeds are sufficient to act as a purgative; larger doses may be dangerous. The seeds have been substituted for castor oil and are sometimes called 'larger castor oil'. The seeds are also used in the treatment of syphilis[303 ]. The oil from the seeds, known as 'curcas'’ is a powerful purgative and emetic[46 , 272 ]. The oil is widely used for treating skin diseases such as herpes, itches, eczema and boils; and also to soothe pain such as that caused by rheumatism; it is an ingredient in the oily extract, known in Hausa as 'kufi', which is a rubefacient for rheumatism and for parasitic skin conditions. The oil is used to stimulate hair growth. It is used in the treatment of [272 ]. It is warmed and used to dress burns[272 ]. The cotyledons are used to treat constipation and as an appetizer[272 ]. The root bark is used to relieve the spasms of infantile tetanus and is used for sores, dysentery and jaundice[303 ]. The juice of the roots is applied to boils and pimples[272 ]. The juice of the flowers has numerous medicinal qualities[303 ].",
        price: 0.0001762962962962963,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Jatropha+curcas"
      },
      {
        id: 167,
        image: Plants.AsthmaWeed,
        name: "Asthma Weed",
        description: "Asthma weed has traditionally been used in Asia to treat bronchitic asthma and laryngeal spasm, though in modern herbalism it is more used in the treatment of intestinal amoebic dysentery[268]. It should not be used without expert guidance, however, since large doses cause gastro-intestinal irritation, nausea and vomiting[268]. The plant is anodyne, antipruritic, carminative, depurative, diuretic, febrifuge, galactogogue, purgative and vermifuge[218].The aerial parts of the plant are harvested when in flower during the summer and can be dried for later use[238]. The stem, taken internally, is famed as a treatment for asthma, bronchitis and various other lung complaints[218, 238, 240]. The herb relaxes the bronchioles but apparently depresses the heart and general respiration[218]. It is usually used in combination with other anti-asthma herbs such as Grindelia camporum and Lobelia inflata[254]. It is also used to treat intestinal amoebic dysentery[254]. The whole plant is decocted and used in the treatment of athlete's foot, dysentery, enteritis and skin conditions[218]. It has been used in the treatment of syphilis[4]. The sap is applied to warts in order to destroy them[238, 240]. The treatment needs to be repeated 2 - 3 times a day over a period of several weeks to be fully effective[K].",
        price: 0.0002183107819444356,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Euphorbia+hirta"
      },
      {
        id: 168,
        image: Plants.Loofah,
        name: "Loofah",
        description: "The loofah is an astringent, pain-killing herb that controls bleeding, promotes healing, improves circulation and milk flow[238. It acts mainly on the lungs, liver and stomach[238 ]. The fruits are used internally in the treatment of rheumatism, chest pains, backache, orchitis, haemorrhoids, internal bleeding and insufficient lactation[238 ]. Externally, it is applied to shingles and boils[238 ]. The dried fruits are used as abrasive sponges in skin care to remove dead skin and stimulate the peripheral circulation[238 ].",
        price: 0.00013793911724270316,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Luffa+aegyptiaca"
      },
      {
        id: 169,
        image: Plants.Lagenariasiceraria,
        name: "Bottle Gourd",
        description: "The pulp around the seed is emetic and purgative[46, 178, 272]. A poultice of the crushed leaves has been applied to the head to treat headaches[257]. The flowers are an antidote to poison[218]. The stem bark and the rind of the fruit are diuretic[218]. The fruit is antilithic, diuretic, emetic and refrigerant[178, 218]. The juice of the fruit is used in the treatment of stomach acidity, indigestion and ulcers[272]. The seed is vermifuge[218]. A poultice of the boiled seeds has been used in the treatment of boils[257]. Taken with Achyranthes spp the seed is used to treat aching teeth and gums, boils etc[218]. Extracts of the plant have shown antibiotic activity[218]. In many parts of China 3 grams per day of this species (the report does not say what part of the plant) has been used as a single treatment for diabetes mellitus[218].",
        price: 0.0001293069306930693,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Lagenaria+siceraria"
      },
      {
        id: 170,
        image: Plants.Kangkong,
        name: "Kangkong",
        description: "The young shoots are mildly laxative and are used by diabetic patients[272 ]. A decoction of the leaves is used to treat coughs[272 ]. The fried leaves are eaten to cool down a fever[310 ]. The crushed leaves are applied as a poultice on sores and boils[310 , 348 ]. A paste made from the buds is used to treat ringworm[272 , 299 ]. The roots are laxative, tonic and antidote[310 ]. They are used in the treatment of opium or arsenic poisoning, and also to counter the effects of drinking unhealthy water[310 ]. A decoction of the roots is used as a wash against haemorrhoids[310 , 348 ]. The plant has shown oral hypoglycaemic activity in tests with diabetic humans; it was shown that an aqueous leaf extract can be as effective as tolbutamide in reducing blood glucose levels[299 ].",
        price: 0.00027272727272727273,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Ipomoea+aquatica"
      },
      {
        id: 171,
        image: Plants.Mammeaamericana,
        name: "Mammee Apple",
        description: "Uses of mamey in folk medicine include treatment of scalp infections, diarrhoea, digestive and eye problems[303 ]. The powdered seeds are employed in the treatment of parasitic skin diseases[303 , 348 ]. An infusion of the ground seeds, minus the embryo which is considered convulsant, is employed as an anthelmintic for adults only[303 ]. The gummy latex from the bark has been used as an insecticide, to extract chiggers and insects from the skin, and to kill ticks and other parasites of dogs and other domestic animals[447 ]. An aromatic liqueur called Eau de Creole or Crème de Creole, is distilled from the flowers and said to act as a tonic or digestive[303 ]. An infusion of the fresh or dry leaves is given in cases of intermittent fever[303 ]. The plant contains coumarins, especially mammeine[348 ].",
        price: 0.00019148936170212766,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Mammea+americana"
      },
      {
        id: 172,
        image: Plants.RedSandalwood,
        name: "Red Sandalwood",
        description: "The plant is antibacterial and haemaglutinin[311 ]. A decoction of the leaves is used in the treatment of rheumatism and gout[46 , 307 ]. The bark is used to treat leprosy[311 ]. A decoction of the bark and leaves is used to treat dysentery, diarrhoea and tonsillitis[303 ]. The wood is used as a tonic[46 ]. The pulverized wood, mixed with water, is taken orally for treating migraines and headaches[303 ]. In vitro studies suggest Adenanthera pavonina leaf extract has antibacterial activity against the intestinal pathogen Campylobacter jejuni. Also, high doses of seed extract have an anti-inflammatory effect in studies in rats and mice.",
        price: 0.00016129032258064516,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Adenanthera+pavonina"
      },
      {
        id: 173,
        image: Plants.Copaiferaguyanensis,
        name: "Copaifera guyanensis",
        description: "Copaiba-balsam, an oily oleo-resin obtained from the trunk of the tree, has a very long history of use medicinally. It was widely used by the native peoples prior to the Europeans reaching S. America and these uses were soon taken up by the Europeans[ 317 ]. The resin is especially valued for its ability to counter mucous in the chest and genito-urinary system[ 254 ]. The resin is an aromatic, stimulant herb with a bitter, burning taste[ 238 ]. Both it and the bark are anodyne, antacid, antibacterial, antifungal, antiinflammatory, antimicrobial, astringent, cytostatic, demulcent, digestive, disinfectant, diuretic, expectorant, mildly laxative, vermifuge and vulnerary[ 318 ]. The resin obtained from the trunk contains a number of medically active constituents including 30 - 90% essential oils and unusual condensed tannins[ 238 ]. The essential oil contains alpha- and beta-caryophyllene, sesquiterpenes, resins and terpenic acids[ 254 ]. It improves the digestion, has diuretic and expectorant effects, and controls bacterial infections[ 238 ]. Much of the clinical research performed to date has verified the traditional uses of copaiba. It has, for instance, been shown to be highly effective as a topical wound healer and anti-inflammatory agent[ 318 ]. The anti-inflammatory effect is mainly due to the sesquiterpenes, particularly caryophyllene which has also demonstrated effective pain-relieving properties, antifungal properties against nail fungus and gastroprotective properties[ 318 ]. The resin as a whole (and, particularly, two of its diterpenes - copalic acid and kaurenic acid) has demonstrated significant antimicrobial activity against gram-positive bacteria. One of copaiba?s other chemicals, kaurenoic acid, has also demonstrated selective antibacterial activity against Gram-positive bacteria in other recent studies[318. Other constituents of the resin have demonstrated significant antitumor activity[ 318 ]. The resin is taken internally in the treatment of a range of respiratory problems such as tuberculosis, bronchitis and sinusitis; urinary tract and reproductive system conditions such as cystitis, kidney and bladder infections, vaginal discharge and gonorrhoea[ 238 , 254 ]. Stomach ulcers, tetanus, herpes, pleurisy and haemorrhages are just some of the other conditions treated with the resin[ 318 ]. Externally, it is used in the treatment of a range of skin problems including insect bites, eczema, chilblains, sores and psoriasis[ 238 , 254. It is also used to treat wounds and stop bleeding[ 318 ]. As an antiseptic gargle, it is used to treat sore throats and tonsillitis[ 318 ]. The resin should be used with care, see notes above on toxicity[ 238 ]. The resin is tapped at intervals from the tree and the holes filled in afterwards[ 238 ]. It is used in infusions or distilled for its essential oil[ 238 ].",
        price: 0.00032129032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Copaifera+guyanensis"
      },
      {
        id: 174,
        image: Plants.Dipteryxodorata,
        name: 'Dipteryx odorata',
        description: "The bark is astringent and febrifuge[ 348 ]. A decoction, combined with the crushed whole plant of Tonina fluviatilis, is used to prepare an infant fortifier[ 348 ]. The fragrant seeds are a rich source of coumarin. They are considered to be antiasthmatic, antispasmodic, cardiotonic and emmenagogue[ 739 ]. A decoction of the seed and sugar is used as a cold remedy[ 348 ]. The seed is mixed with rum to make a tincture that is rubbed on snakebite, contusions and rheumatism[ 348 ]. The seeds have been used in the past to treat whooping cough, but recent research has shown that the aromatic coumarins they contain can have detrimental effects upon the heart and liver, and may also cause cancer[ 238 ]. The oil from the seeds is used to alleviate stomach aches, to treat sores in the mouth, to fortify the scalp and improve hair growth[ 739 ]. It is said to be effective in controlling dysentery[ 348 ]. A cold water infusion of the leaves is used as an ear wash to treat earache[ 348 ]. The leaves are crushed to make a snuff powder[ 348 ]. The seed contains coumarin, which is used in perfume and for flavouring tobacco and whisky[ 348 ]. Bark contains isoflavones and umbelliferone[ 348 ]. The leaves contains salicylic, hydroxycoumaric, coumaric and ferulic acids[ 348 ].",
        price: 0.00014129032258064516,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Dipteryx+odorata"
      },
      {
        id: 175,
        image: Plants.Indigoferasuffruticosa,
        name: 'Indigofera suffruticosa',
        description: "The plant finds some use in domestic medicine in Guatemala. Indigo is often applied to the stings of bees and other insects to reduce pain and inflammation, although its efficacy is somewhat doubtful[331 ]. A decoction of the roots is taken against stomach-ache[310 ]. A tincture of the roots and seeds in rum is used as a vermifuge[310 ]. The leaves are resolutive and sudorific[348 ]. An infusion of bruised leaves is used as a treatment for fever[310 ]. Combined with the leaves of Indigofera tinctoria and the bark of Phellodendron chinense, it is used as a medicine against scrofula[310 ]. The fresh leaves are used in a warm bath to act as a calmative[348 ]. The plant juice is used as a treatment for diarrhoea[310 ].",
        price: 0.00012129032258064516,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Indigofera+suffruticosa"
      },
      {
        id: 176,
        image: Plants.IceCream,
        name: 'Ice Cream Bean',
        description: "A decoction of the crushed leaves is taken to relieve coughing[348 ]. A decoction of the leaves is applied to sores of the lips (perhaps herpes)[348 ].",
        price: 0.0001129032258064516,
        medrating: 2,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Inga+edulis"
      },
      {
        id: 177,
        image: Plants.Sesbaniagrandiflora,
        name: 'Sesbania grandiflora (Vegetable Hummingbird)',
        description: "The leaves are aperient and diuretic[272 ]. Crushed leaves are applied as a poultice to sprains and bruises of all kinds, swellings, rheumatism, itching etc[303 ]. A tea made from the leaves is believed to have antibiotic, anthelmintic, antitumor and contraceptive properties[303 ]. The bitter bark is considered as an astringent, febrifuge, tonic and an antipyretic, a remedy for gastric troubles, colic with diarrhoea and dysentery[46 , 272 , 303 ]. A bark decoction is taken orally to treat fever, diarrhoea, dysentery and diabetes[272 , 303 ]. The flowers are emollient and laxative[272 ]. Juice of the flowers, put in the eyes, is said to relieve dimness of vision[303 ]. Sinus congestion is reduced by taking a decoction of the flowers[303 ]. The root is a well-known medicine for malaria[303 ]. Root juices are used for poultices[303 ]. A paste of the root is applied externally in the treatment of rheumatism[272 ].",
        price: 0.0001029032258064516,
        medrating: 2,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Sesbania+grandiflora"
      },
      {
        id: 178,
        image: Plants.SweetBasil,
        name: 'Sweet Basil',
        description: "Sacred basil is a very important herb in the Ayurvedic tradition[254 ]. A pungently aromatic, warming, antiseptic herb; it induces perspiration; lowers fevers; relaxes spasms; eases pain; clears bacterial infections; strengthens the immune and nervous systems; reduces inflammations; and benefits the digestive system[238 , 254 , 272 , 348 ]. Research has shown that the herb has the ability to lower blood sugar levels[254 ]. The essential oils from the leaf have shown antibacterial and antifungal activity. They contain methylchaviol, eugenol and other volatile, commercial oils[238 ]. The plant is used internally in the treatment of feverish illnesses (especially in children), colds, influenza, sinusitis, headaches, rheumatism, arthritis, digestive disorders, including abdominal distension and cramps; low libido and negativity[238 ]. It has been found helpful in some types of diabetes[254 ]. The herb is used externally as an antiseptic to treat skin infections, spots etc[238 , 348 ]. The juice of the plants is used to treat insect bites and ringworm[254 ]. The juice is dropped into the ear to treat earaches[348 ]. The leaves can be harvested during the growing season and used fresh or dried for later use[238 ]. The seeds are used as a tonic[238 ].",
        price: 0.000729032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Ocimum+tenuiflorum"
      },
      {
        id: 179,
        image: Plants.Camphor,
        name: 'Camphor',
        description: "Camphor has a long history of herbal use in the Orient with a wide range of uses. It has occasionally been used internally in the treatment of hysteria, but in modern day herbalism it is mainly used as the essential oil and internal use is not advised[254]. The wood and leaves are analgesic, antispasmodic, odontalgic, rubefacient, stimulant. An infusion is used as an inhalant in the treatment of colds and diseases of the lungs[46, 57, 176, 178, 238]. The plant is more commonly used in the form of the essential oil which can be obtained by distillation of the chipped branches, trunk and wood of the tree, or from the leaves and twigs. Wood 24 - 40 years old is normally used[268]. The essential oil is anthelmintic, antirheumatic, antispasmodic, cardiotonic, carminative, diaphoretic, sedative and tonic[4, 218, 238, 240]. It is used externally in liniments for treating joint and muscle pains, balms for chilblains, chapped lips, cold sores, skin diseases etc and as an inhalant for bronchial congestion[238]. Some caution is advised, excessive use causes vomiting, palpitations, convulsions and death[238]. It is possible that the oil can be absorbed through the skin, causing systemic poisoning[238]. The essential oil is used in aromatherapy. Its keyword is 'Piercing'[210]. It is used in the treatment of digestive complaints and depression[238]. The German Commission E Monographs, a therapeutic guide to herbal medicine, approve Cinnamomum camphora for Arrhythmia, Cough/bronchitis, Hypotension, Nervous heart complaints, Rheumatism.",
        price: 0.0003029032258064516,
        medrating: 3,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Cinnamomum+camphora"
      },
      {
        id: 180,
        image: Plants.MuskMallow,
        name: 'Musk Mallow',
        description: "An emulsion made from the seed is antispasmodic and is especially effective in the digestive system[4, 238]. The seeds are also chewed as a nervine, stomachic and to sweeten the breath[4, 238]. They are also said to be aphrodisiac[4, 238]. The seeds are valued medicinally for their diuretic, demulcent and stomachic properties. They are also said to be stimulant, antiseptic, cooling, tonic, carminative and aphrodisiac. A paste of the bark is applied to cuts, wounds and sprains[272]. The essential oil is used in aromatherapy for the treatment of depression and anxiety[238]. It is also applied externally to treat cramp, poor circulation and aching joints[238].",
        price: 0.0002039032258064516,
        medrating: 3,
        source: "https://pfaf.org/User/Plant.aspx?LatinName=Abelmoschus+moschatus"
      },
      {
        id: 181,
        image: Plants.Aniroba,
        name: 'Andiroba',
        description: "The bark contains tannins and a bitter-tasting alkaloid, carapine. It is astringent, bitter and febrifuge[ 303 , 348 ]. It is used internally in the treatment of malaria, stomach aches, diarrhoea, dysentery and rheumatism[ 348 , 378 ]. The stem bark is used externally as a wash for treating a wide range of skin complaints including the spots of chicken pox and measles; eczema, ulcers, burns, wounds and sores[ 348 ]. The leaves are boiled in water and used as a wash on itchy skin, wounds and persistent ulcers[ 303 , 348 ]. A fruit rind decoction is taken orally for the treatment of fevers and intestinal worms[ 303 ]. A cream-coloured, intensely bitter oil of high acidity and very unpleasant smell, called 'carapa oil', is obtained from the seeds[ 378 ]. The oil is anti-inflammatory, demulcent and soothing[ 348 ]. A decoction is taken orally in the treatment of hepatitis and tetanus[ 303 ]. It is used to treat a range of pulmonary conditions including a hacking cough, bronchial tract discomforts and lung problems[ 348 ]. Applied externally, it is used as a skin lotion and softener, especially for children with thrush and dried, cracked skin; and to treat a range of skin conditions including eczema, ringworm, running sores, pain, swelling and itching. It is applied three times daily to treat painful piles[ 348 ]. It is rubbed on to a painful stomach and used to reduce pus-filled abscesses[ 348 ]. It is mixed with anatta paste (Bixa orellana) and applied it to the hair and skin in order to repel mosquitoes, sand fleas, ticks, lice and other biting insects[ 348 ]. A drop of the oil, combined with a drop of red lavender, is used to treat thrush in children[ 348 ]. The grated nut is mixed with hot water, and drunk as a treatment for malaria, diarrhoea and dysentery, and to reduce excessive menstrual flow[ 348 ] Applied externally, the grated nut is mixed with palm oil and used as an analgesic for muscular aches and pains; as an antifungal; as a treatment for dry skin, sores and eczema; for relieving itches caused by measles and chicken pox[ 348 ].",
        price: 0.0005019032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Carapa+guianensis"
      },
      {
        id: 182,
        image: Plants.Arrowroot,
        name: 'Arrowroot',
        description: "Arrowroot is a soothing demulcent and nutritive food that has traditionally been used in much the same ways as slippery elm (Ulmus rubra)[254 ]. Easily digested, it is of benefit to convalescents and those with weak digestions, helping to relieve acidity, indigestion and colic[254 ]. It is mildly laxative[254 ]. An infusion of the root has traditionally been used to treat urinary infections[254 ]. The root also been used as an antidote for poison[254 ]. The powdered root has been used as an ointment or poultice, especially combined with an antiseptic herb such as myrrh (Commiphora spp.)[254 ]. The powdered root has traditionally been made into a poultice for treating smallpox sores[254 ].",
        price: 0.00014009032258064516,
        medrating: 3,
        source: "https://pfaf.org/USER/Plant.aspx?LatinName=Maranta+arundinacea"
      },
      {
        id: 183,
        image: Plants.Breadfruit,
        name: 'Breadfruit',
        description: "Breadfruit has a very wide range of applications in traditional medicine with all parts of the plant being utilised in the treatment of a range of conditions[ 311 ]. Research has shown the presence of a number of active compounds in the plant:- The fruit contains artocarpine and the enzyme papayotine[ 348 ]. The leaf contains the phenols quercetin and camphorol, plus gamma-aminobutyric acid, which lowers the blood pressure[ 348 ]. The stem-bark and fruit contain cyclopropane sterols[ 348 ]. The toasted flowers are rubbed on the gums around aching teeth to ease pain[ 303 ]. An extract from the flowers is effective in treating ear oedema[ 303 ]. Latex is massaged into the skin to treat broken bones, bruises, sprains, abscesses etc, and is bandaged on the spine to relieve sciatica[ 303 , 348 ]. It is commonly used to treat puncture wounds in the eyes[ 311 ], skin ailments and fungal diseases such as thrush[ 303 , 311 ]. The latter is also treated with crushed leaves[ 303 ]. Diluted latex is taken internally to treat diarrhoea, stomach-ache and dysentery[ 303 ]. Latex and juice from the crushed leaves are both traditionally used to treat ear infections[ 303 ]. A filtrate of new, unfolded leaves is employed as a remedy for fish poisoning and as a muscle relaxant in cases of convulsive spasms[ 311 ]. The yellowing leaf is brewed into a tea and taken to reduce high blood pressure[ 303 , 348 ]. The tea is also thought to control diabetes[ 303 ]. Hypertension and diabetes medications are prepared from a mixture of the boiled leaves of this species combined with Persea americana, Carica papaya and Annona muricata[ 348 ]. The leaves are used in Taiwan to treat liver diseases and fevers[ 303 ]. The root is an astringent and is used as a purgative[ 303 ]. Pressed fluid of the root is used in the treatment of respiratory ailments which include difficult, painful breathing[ 311 ]. When macerated it is used as a poultice for skin ailments[ 303 ]. The bark is used to treat headache. Bark extracts exhibited strong cytotoxic activities against leukaemia cells in tissue culture, and extracts from roots and stem barks showed some antimicrobial activity against Gram-positive bacteria and may have potential in treating tumours[ 303 ]. Liquid squeezed from the bark or leaves is given to remedy chest pains and vomiting resulting from heart trouble[ 311 ]. Pressed liquid from the stem bark is employed in the treatment of pain in the bones and maternal postpartum infections[ 311 ]. The bark is also used to treat stomach aches and digestive tract problems[ 311 ]. Fluid pressed from young fruit is given to treat an illness which causes pain in the lungs and vomiting of blood[ 311 ].",
        price: 0.0005019032258064516,
        medrating: 4,
        source: "https://pfaf.org/user/Plant.aspx?LatinName=Artocarpus+altilis"
      },
      {
        id: 181,
        image: Plants.Melaleucaleucadendra,
        name: 'Melaleuca leucadendra',
        description: "An essential oil obtained from the leaves contains several terpenoids including 50 - 60% of the strongly antiseptic cineole, betapinene and alpha-terpineol[254 ]. It is aromatic and stimulant with a strong camphoraceous aroma. It is expectorant, relieves spasms, increases perspiration and expels internal parasites[238 ]. It is used internally in the treatment of bronchitis, tuberculosis, colds, sinusitis, gastric infections and roundworms[238 ]. Externally, it is used to treat rheumatism, gout, neuralgia, acne, nasal congestion, sinusitis, toothache, chilblains and skin diseases[238 ]. The leaves and twigs can be harvested at any time of the year and used fresh, dried or the essential oil can be extracted[254 ]. This herb, especially in the form of the essential oil, is subject to legal restrictions in some countries[238 ].",
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
