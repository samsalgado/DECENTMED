import React from 'react'
//In the Collapsible for Departments. Initially, it will go to Education page. Later it will point to Telehealth pages for respective practice.
import "./Info.css";
import HealthFacts from './Health';
import BlueContainer from './deptcontainer';
import WellnessInro from './wellness';
import Values from './ourvalues';
const Info = () => {

  return (
    
    <div className='container'>
              <h1>Decent Med</h1>
            <WellnessInro />
            <BlueContainer />

      <div className="title-container">
      <h1 className="text-center mb-4">Our Values</h1>        
      </div>
      <Values />
    <br></br>
    <h3>Why Us?</h3>
    <div className='pr'>
        <h4>Monetization of Medicine</h4>
        <p>
        Why is there no cure for cancer? Why is obesity and prescription overdose only getting worse? Is profit worth life? Promoting wellness begins with education. The current system monetizes medicine, conversely, treatments deemed alternatives, are cheaper and heavily used in the healthiest nations in the world. The body has an immense regenerative potential to heal itself, but when fighting itself, it's hard for the body to heal itself. Prevention is the initial step, eating a diet high in fruits and vegetables provides the essential antioxidants and nutrients to prevent disease. Pairing a "green" diet with exercise goes a long way in preventing a trip to the doctor.
        </p>
        <p>
        A detox cleanses the body. A water detox is a way to flush out the body's toxins. A water detox ranges from 1-3 days and restores the cells into ketosis. Furthermore, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness.
         <a href='https://gerson.org/'> Cancer</a> treatments globally like the Gerson Therapy and <a href='https://drsebiscellfood.com/'>Dr. Sebi diet</a> use forms of Detoxification to cleanse the body from toxins that cause cancer. 
        </p>
        <p>
        Why are countries with smaller healthcare budgets than the U.S. have healthier people? 
 Because they strive for alternatives to pills, using elements of Traditional Chinese Medicine (TCM) like Acupuncture or Ayurveda. The healthiest people in the world utilize functional medicine for peak performance. Aaron Rodgers (NFL Quarterback) has gone on record highlighting the benefits of <a href='https://www.packersnews.com/story/sports/nfl/packers/2022/02/22/aaron-rodgers-cleanse-12-day-panchakarma-pat-mcafee-show-tuesday-february-22-2022/6895971001/'>Ayurveda(Panchakarma cleanse)</a>. Stars like Kobe Bryant, Peyton Manning, Ryan Tannehill, Desean Jackson, and Jamaal Charles (among others) have all used Stem Cell Therapy for ailments.
</p>
</div>
<br></br>
<HealthFacts />

</div>
    
  )
}

export default Info