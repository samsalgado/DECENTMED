import React from "react";
import '../App.css';
import d from '../images copy/d.png';
import gluta from '../images copy/gluta.png';
import a from '../images copy/a.jpg';
import VitaminE from '../images copy/vitaminE.png';
import coq10 from '../images copy/coq10.png';
import K from '../images copy/K.jpg';
import vitB from '../images copy/vitB.png';
import curcumin from '../images copy/curcumin.png';
import { useTranslation } from 'react-i18next';

function Vitamins() {
    const { t } = useTranslation("common");

    return (
        <div className="container-bblue">
            <div className="row justify-content-center">
                <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{t('Best Vitamins and Antioxidants')}</h2>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Vitamin D')}</h4>
                    <img className='gridimage' src={d} alt='' />
                    <p className="e">
                        {t('Humans do not naturally produce vitamin D. Vitamin D benefits include: calcium absorption, immune system support and cardiovascular health. Found primarily in fruits like orange, grapefruit, lemon, kiwi and broccoli.')}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Vitamin A')}</h4>
                    <img className='gridimage' src={a} alt='' />
                    <p className="e">
                        {t('Great for the immune system bone health, cancer prevention (apricot) and fighting acne and aging. Humans do not naturally produce vitamin A. Found primarily in fruits like apricots, nectarine, cantaloupe, passion fruit and sweet potato.')}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('CoQ10')}</h4>
                    <img className='eve' src={coq10} alt='' />
                    <p className="e">
                        {t('This antioxidant converts food into energy. It helps fight diabetes, fertility, cancer and headaches. It is highest in liver, strawberries and oranges and seeds like lentils.')}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Vitamin E')}</h4>
                    <img className='mimi' src={VitaminE} alt='' />
                    <p className="e">
                        {t('Great for immune health, this vitamin has antioxidant properties. Vitamin E is found in avocado, broccoli, olives, kiwi and seeds.')}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Vitamin K')}</h4>
                    <img className='gridimage' src={K} alt='' />
                    <p className="e">
                        {t('The body does not naturally produce vitamin K. Dandelion root is high in vitamin K, which helps with bone health and blood clotting. Some')}
                        <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5341965/'>
                            {t('studies')}
                        </a> 
                        {t(' indicate dandelion root is effective in colorectal cancer. Other great sources of vitamin K are greens like kale, blueberries, kiwi and avocado.')}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Curcumin')}</h4>
                    <img className='gridimage' src={curcumin} alt='' />
                    <p className="e">
                        {t('Known for its strong orange pigment, curcumin is an antioxidant and component of turmeric. Curcumin is one of the strongest anti-inflammatory and antioxidants. There are many benefits to consuming curcumin.')}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Vitamin B')}</h4>
                    <img className='gridimage' src={vitB} alt='' />
                    <p className="e">
                        {t('The body does not naturally produce vitamin B. Some doctors theorize that disease stems from a vitamin B deficiency. Vitamin B12, B6 and other complex vitamins convert food into energy and help to strengthen the immune system. Although indirectly associated, B17 (Laetrile), found in the nitriloside family (bitter almond, apricot seed), plays a pivotal role in cancer prevention.')}
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>{t('Glutathione')}</h4>
                    <img className='gridimage' src={gluta} alt='' />
                    <p className="e">
                        {t('This antioxidant aids the immune system, fighting free radicals and regeneration of vitamins E and C.')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Vitamins;
