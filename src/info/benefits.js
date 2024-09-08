import React from "react";
import '../App.css';
import esteem from '../images copy/esteem.webp';
import anxiety from '../images copy/anxiety.png';
import blocks from '../images copy/blocks.webp';
import ptsd from '../images copy/ptsd.png';
import fear from '../images copy/fear.png';
import stress from '../images copy/stress.jpg';
import insomnia from '../images copy/insomnia.png';
function Benefits() {
    return (
        <div className="container-bblue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Benefits of Hypnotherapy</h2>
            <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Increased Self Confidence</h4>
                    <img className='gridimage' src={esteem} alt='' />
                    <p className="e">
                        Studies show that close to 8/10 Americans have low self-esteem.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Decreased Anxiety</h4>
                    <img className='gridimage' src={anxiety} alt='' />
                    <p className="e">
                     The advent of smart phones and social media has increased anxiety among today's youth. Mix that with mass shootings and school shootings, anxiety levels are high in the United States.
                    </p>
                </div>

                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Releasing & Transforming Trauma Responses</h4>
                    <img className='gridimage' src={ptsd} alt='' />
                    <p className="e">
                    Transform your pain and mental anguish into healing and wholeness.
                    </p>
                </div>
               <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Dissolving & Transforming Subconscious Blocks</h4>
                    <img className='gridimage' src={blocks} alt='' />
                    <p className="e">
                        Dissolving subconscious blocks can lead to increased self-awareness and emotional well-being.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Stress Reduction</h4>
                    <img className='gridimage' src={stress} alt='' />
                    <p className="e">
                        High stress levels play a role in the development of diseases. It is not safe to have high cortisol levels in our sedentary lifestyles.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Overcoming Fears & Phobias</h4>
                    <img className='gridimage' src={fear} alt='' />
                    <p className="e">
                        Fears restrict us from new experiences, do not let yourself hold you back with fear.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Improving Sleep</h4>
                    <img className='gridimage' src={insomnia} alt='' />
                    <p className="e">
                        According to the CDC, estimated 10-30% of the world struggle with insomnia.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;


