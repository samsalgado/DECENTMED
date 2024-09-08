import React from "react";
import '../App.css';
import turmeric from '../images copy/tumeric.png';
import ginger from '../images copy/gin.png';
import aloevera from '../images copy/aloevera.png';
import broccoli from '../images copy/broc.png';
import gf from '../images copy/gf.png';
import lemon from '../images copy/lemon.png';
function Fruits() {
    return (
        <div className="container-bblue">
            <div className="row justify-content-center">
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Best Fruits, Spices and Vegetables for Detox</h2>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Turmeric</h4>
                    <img className='gridimage' src={turmeric} alt='' />
                    <p className="e">
                    Anti-inflammatory properties - rich in antioxidants, vitamins, and nutrients
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Ginger</h4>
                    <img className='gridimage' src={ginger} alt='' />
                    <p className="e">
                    Rich in antioxidants, cleanses the body and helps with digestion</p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Aloe Vera</h4>
                    <img className='gridimage' src={aloevera} alt='' />
                    <p className="e">
                    Soothes inflammation, cleanses the colon.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Broccoli</h4>
                    <img className='gridimage' src={broccoli} alt='' />
                    <p className="e">
                    High in fiber, rich in Vitamin A,C,K and antioxidants
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Grapefruit</h4>
                    <img className='gridimage' src={gf} alt='' />
                    <p className="e">
                    High in antioxidant Vitamin C, boosts immune system
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h4>Lemon</h4>
                    <img className='gridimage' src={lemon} alt='' />
                    <p className="e">
                    High in antioxidant Vitamin C. Cleanses liver, helps digestion and aids in weight management.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Fruits;
