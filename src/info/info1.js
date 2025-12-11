import React, { useState, useEffect } from 'react';
import Channel from './channel';
import './Info.css';
import acuchart from '../images copy/acu=-chart.png';
import './acu.css'; 
import slide1 from "../images copy/1.png";
import slide2 from "../images copy/2.png";
import slide3 from "../images copy/3.png";
import slide4 from "../images copy/4.png";
import slide5 from "../images copy/5.png";
import slide6 from "../images copy/acu5.png";
import slide7 from "../images copy/acu6.png";
import slide8 from "../images copy/IMG_2773.jpeg";
import OCTT from "../images copy/OCTrv.png";
import oct from "../images copy/OCT.png";
import Collapsible from 'react-collapsible';
import erica from "../images copy/ericawellness.png";
import { useTranslation } from 'react-i18next';
import acutreatsIN from '../images copy/IMG_9305.jpeg';
import burnout from '../images copy/burnout.jpeg';
import Acuvids from '../info/acuvids';
import acuben from '../images copy/acuben.png';
import { Button, Modal } from 'react-bootstrap';
const Info1 = () => {
  const {t} = useTranslation('common');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
    const txt = `
    0:00 Tell me about acupuncture and introduce yourself.
0:02 All right. Well, my name is Nettie Crisio. I am a licensed acupuncturist and I've been
0:09 doing this for a number of years. I attended East West College of Natural Medicine in Sarasota.
0:15 I got my masters in Oriental Medicine there, got all of my boards explored a license.
0:22 And I just started my practice.
0:25 So why acupuncture and not to some other kind of practice?
0:29 Great question. That was a very long road. That wasn't something I decided really quickly.
0:36 I would have to say that in my early 20s, I originally set out as a for a career in veterinary
0:42 medicine and biology and that's what I thought I was going to do. My early college career was
0:49 interrupted by the loss of my brother, which meant that I took I took time off. So I got out of
0:56 school to really think about what I might want to be doing to reevaluate my priorities.
1:02 And over the course of the next 10 years, I lost another three people that were very close to me.
1:08 One, two, liver cirrhosis, which was due to being on too many prescription drugs for too long.
1:17 That was my grandmother. And that would be when I first started to really question, all right,
1:21 well, all of these medicines were meant to help her, but yet they ended up, you know, destroying
1:28 her liver and that's why she's passing early. So I really started to question, is there a better way?
1:35 And then a few years later, I lost a brother to veteran suicide. Again, he had gone to the VA
1:41 for help and was just kind of overlooked. So I started to question again, why is our system
1:47 like this? And then I lost my older sister's to breast cancer. She had been fighting for 14 years.
1:55 And in the end, the cancer is not all kill her. It was over exposure to radiation and chemotherapy
2:02 that had destroyed her organ's viability. They just couldn't function anymore. So again,
2:07 I had the question, why was her treatment what ended up taking her her life not for disease? So
2:16 I just thought there has to be a better way. And among some of my research, that's when I stumbled
2:21 on to EC Asian medicine and I decided to pursue it. I love that. And you're right, there has to be
2:29 a better way than the traditional system, which is killing people. You know, you brought up the VA.
2:36 When I was in Argentina, I met a lot of former soldiers who had mentioned that they
2:42 turned away from the VA because all the VA did was give them pills. And that's terrible.
2:48 So to transition, can you explain what acupuncture is and can you walk me through what a treatment
2:56 would look like? So acupuncture is well over 5,000 years old. It started in ancient China and
3:05 they've just learned through empirical evidence and lots of trial and error. What could work,
3:11 what doesn't work? And to be honest, mechanically, we still don't have the scientific terms
3:17 to describe how and why it works, but the empirical evidence is there. There are research studies
3:24 being done at all the time and new information is always being gained. So there's always
3:33 something new to learn. But in a typical treatment, you would go through a rather extensive interview,
3:40 unlike some traditional Western medicine, you would go through your entire history of your lifestyle,
3:48 your mental and emotional state, your diet. And it's about an hour long interview and then you
3:56 would proceed with your treatment, which could be about 30 to 45 minutes. So what about someone
4:02 like me who's afraid of needles? That is a common occurrence and I can't fly. I'm no fan of them,
4:11 either. But they are really fine. They are probably the size of a cat wister, if not smaller,
4:18 and you will barely feel a prick if anything. It might be like getting bit by mosquito or you
4:23 may feel nothing at all. So it's very gentle. Awesome. And so giving your client base, what are some
4:32 of the issues that you see most often? You see a lot of pain that come through. The biggest thing
4:39 that we see come into the clinic is usually people who are tired of just being on prescription
4:47 medicine and they're looking for an alternative or they've been to a number of Western medical doctors
4:53 for a given issue and they just keep saying nobody knows what's wrong with me or they can't give
5:00 me any answers. Can you help me? Those are the people that walk through the clinic the most.
5:06 But we're great for a number of things. We can treat anxiety, stress reduction,
5:12 insomnia, digestive issues, headaches, aches and pains and pretty much anything.
5:22 So something that's a little bit outside of the box that you said that you help with is corporate
5:27 burnout. So can you explain what corporate burnout is and how active puncture can help with it?
5:35 Yes. So corporate burnout is usually a state of overwhelm because we've been under sustained stress
5:42 for so long and basically our sympathetic or our fighter flight system has been turned on so
5:48 long that your cortisol levels are through the roof. There's usually high anxiety, high stress levels
5:56 that may also be some insomnia or just very elevated levels of irritation. It happens
6:04 to the best of us. We just don't get a break because it may be we have lots of deadlines or
6:11 an annoying co-worker or you know a number of reasons. So acupuncture can help by trying to
6:20 stimulate that parasympathetic nervous system which is linked to your resting digest. A lot of
6:27 our acupuncture treatments, some studies show that they believe it helps activate the vagus nerve
6:34 which is again strongly correlated to the resting digest nervous system. So we try to help you relax
6:41 and just kind of calm down and give your whole body a chance to just
6:47 to leave itself. Wow. And then how does it work when it comes to cortisol levels? Is that the same process?
6:56 Yes. So cortisol, as long as you're in a relaxed state, it would hopefully also help naturally lower
7:04 those cortisol levels. And cortisol is naturally elevated when your fighter flight is on.
7:12 You're in Florida, correct? So why did you pick Florida and wanted your practice to be in Florida
7:18 specifically? I was already here. I don't know that it was so much of a conscious choice. This
7:25 one that was more made for me. It's mostly because in the state of Florida I can do homeopathy,
7:33 I can do herbs, I can even do injections, but Florida gives us the greatest scope of that.
7:43 So can you expand on that a little bit? Like, why is it that Florida has such a larger scope
7:48 compared to other places in the United States? I would imagine because Florida in general has a
7:54 higher level of regulation on a lot of industries, not just acupuncture. I have a number of
8:01 friends that are in accounting or engineering, and they all say that when they've come to the
8:06 state of Florida, there's always been extra hoops or licensing industries here in Florida. So I
8:14 don't know that it's specific to acupuncture. But yes, the only other state that has as high
8:22 or as stringent of regulations as Florida would be California. So the age of a graphic in Florida,
8:30 and you're in Tampa, correct? Yes. So the age demographic in Florida tends to be people
8:36 that are a little bit older. The stereotype of Florida is that it's a place that your grandparents
8:43 go to retire. Given the scope of your work, is there a demographic that you particularly target?
8:50 Or do you go for everyone? And how have you seen that in your practice? Has it been more of the
8:56 baby boomer and the gen X generations? Or what's the demographic? Obviously that you can give.
9:02 I know with hippo laws, there isn't much that you can explain on that.
9:08 So I would say Florida is very mixed in terms of demographic. I think that the fact that it's just
9:16 a geriatric community is a little outdated. Especially major metropolises, we're going to be
9:24 definitely a younger crowd. I'd maybe more in the world areas. There are a lot of 55 and over
9:30 communities down here specifically. But I would say that we're pretty evenly mixed in terms of
9:36 who actually lives down here. But I would say I would treat anyone. It doesn't matter the age.
9:43 You can we typically do see more geriatrics come in toward more treatment, but we also see
9:51 people of younger demographics that are coming in for preventative medicine or pain. Which is great.
10:01 Definitely especially in Tampa, you have the Tampa Bay rays, you have the Tampa Bay bucks,
10:07 you have Tampa Bay lightning. So obviously that's a lot of pain. And then when it comes to corporate
10:12 burnout, you have that demographic of everything from millennials in Gen Z that are trying to get into
10:19 workforce or that are in the workforce, that definitely would use your services for corporate
10:26 burnout. Given what you do with corporate burnout, would you say that that's a niche that you are
10:31 in that you don't find that other acupuncturists are in this industry or in that specific niche?
10:39 No, I don't think that there are a lot of acupuncturists that are focusing on corporate burnout or anxiety.
10:46 It's not that we can't all treat it. I just don't think that there are a lot that are focusing on it.
10:52 People typically see us as treatment alternatives for pain, but that's kind of pigeonholing
10:59 acupuncturists a little bit. You're not really seeing us for all that we can actually do.
11:05 On a percent, I feel the same way when it comes to chiropractic. Right, when people look at
11:09 chiropractic, they just think back pain only, but it really is a smorgasborg of things that it can
11:16 help with. So just like transition to traditional medicine versus Chinese medicine. And obviously,
11:25 you would say that there is a use for both, but how do they differ?
11:31 So I would say that it's a little bit about comparing apples and oranges. They do
11:37 they both treat very well, but they do different things. I would say western medicine still has
11:43 a purpose, and it's very great at treating acute issues, issues that come up as emergencies,
11:50 like surgery or severe illness. That's where it shines, because that's where you want instant,
11:59 you know, fast treatment. Eastern East Asian medicine is going to be better at prevention,
12:05 because it is slower acting. So it's good for prevention or chronic issues,
12:12 and just long term use, because it's less cost it. I think it was Benjamin Franklin who said the
12:18 famous quote, an ounce of prevention is worth a pound of care. And I think in general, people don't
12:24 look at their health care as a form of prevention. They're always looking for the cure after the
12:32 fact, rather than trying to prevent the issue from occurring at all. So I think health care in
12:39 general should shift from after care to preventative care. And that's a very hard mentality
12:48 to work against. 100%. And that's the reason why we made the platform in the beginning,
12:55 was because we wanted to introduce preventative medicine and showcase to the world that alternative
13:02 medicine is not really what it is. It's actually preventative medicine that can help with
13:09 diet and lifestyle and prevent you from having to incur all of the costs that come with health care
13:16 and really put your health into your own hands. So I love how you answered that and really
13:22 broke down the difference, because a lot of times people look at what we're doing and they think,
13:26 oh, you just want to get rid of traditional medicine. No, we do not. We want to put the power back
13:31 into people's hands so that they can live longer and more sustaining lives, whether or not dependent
13:37 on traditional medicine. So, you know, how would you would you like to expand on that?
13:46 I think that there is space for traditional Western medicine and East Asian medicine to work
13:54 conjunctively, because they shine in different ways for different reasons. Again,
14:02 Western medicine is best for acute and emergency situations and East Asian medicine would be
14:07 better for chronic and preventative long-term issues. So there's definitely room for them to work
14:13 together. 100%. So I've seen on your website that you do homeopathy. So how does that work and
14:21 conjunction with the acupuncture work that you do? Well, acupuncture in and of itself is considered
14:29 a vibrational medicine, which is no different than homeopathy. But for me, it's all about patient
14:35 compliance. We had talked earlier before that when I had herbs or Western pharmaceuticals, especially
14:44 for my children, that they're not very keen on taking that simply because they taste that.
14:49 So for me, I have a much easier time getting my children to accept homeopathy. And if it's to
14:57 get them to be better, then I'm going to have to go look what they will take versus what I have to
15:02 fight them to take. And I completely understand because I myself am not always very compliant with
15:09 just even remembering to take my nutritious suitables because it just may escape my memory sometimes.
15:17 So, but homeopathy can be very effective. But unfortunately, it's drawback is that you do need to
15:24 take it and increase frequency because it is a much gentler medicine compared to herbs or Western
15:31 pharmaceuticals. So, by nature, the gentler, the medicine, usually the more frequency you need to
15:38 take it or perform it simply because that's what's necessary to get the compound effect.
15:47 I understand. I really like how you explain that. So just to close, what message do you have for
15:53 the city of Tampa and why they should utilize acupuncture? I would say that these
16:04 see an acupuncturist doesn't have to be me, any acupuncturist, but that, you know, we can only make
16:12 small corrections in our health 10 degrees at a time, turning the boat, and hopefully we'll be in
16:17 much better different places down the road in our journeys than if we continue down the path of
16:23 just traditional alopathic medicine, which can still be very caustic if taken in excess,
16:31 or without true understanding of what its side effects could be. I encourage
16:38 Campanios to do their research and explore all forms of
16:44 integrative and alternative medicine and find what works best for them. It may not be acupuncture,
16:50 it may not be herb, but it may be something else, whatever works best for that.
16:56 100% and where can people find you? Can you you want to mention your website and your office?
17:03 I am on Instagram at oceantrace and my website is also oceantrace.com and that's T-R-E-I-S for
17:12 trace. You're in Tampa, Florida needing acupuncture. Visit oceantrace medical. We provide expert
17:20 acupuncture treatments designed to relieve stress, reduce anxiety, and restore balance.
17:26 Our holistic approach goes beyond temporary relief, helping you achieve lasting calm,
17:32 better sleep, improve digestion, and overall well-being. Think of it as a reset button for your
17:38 mind and body so you can feel more grounded, energized, and at ease in your daily life.
17:45 Visit oceantreis.com for more.
    `
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;
  const isTablet = windowWidth <= 992 && windowWidth > 768;

  //const containerStyle = {
    //padding: isMobile ? '0 10px' : '0 15px'
  //};

  const titleStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '20px' : '30px',
    fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.8rem' : '2.5rem'
  };

  const mainWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: isMobile ? '15px 0' : '20px 0',
    padding: '0 10px'
  };

  const containerBbblueStyle = {
    display: 'flex',
    flexDirection: isMobile || isTablet ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? '20px' : '30px',
    maxWidth: '1200px',
    width: '100%',
    padding: isSmallMobile ? '15px 10px' : isMobile ? '20px 15px' : '25px 20px',
    background: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const contentWrapperStyle = {
    flex: '1',
    width: '100%',
    paddingRight: isMobile || isTablet ? '0' : '20px'
  };

  const paragraphStyle = {
    fontSize: isSmallMobile ? '13px' : isMobile ? '14px' : '16px',
    lineHeight: isSmallMobile ? '1.4' : isMobile ? '1.5' : '1.6',
    marginBottom: isSmallMobile ? '12px' : isMobile ? '15px' : '20px',
    textAlign: isMobile ? 'left' : 'justify',
    color: '#333'
  };

  const buttonStyle = {
    width: isMobile ? '100%' : 'auto',
    padding: isSmallMobile ? '10px 15px' : isMobile ? '12px 20px' : '12px 24px',
    fontSize: isSmallMobile ? '14px' : '16px',
    marginTop: isMobile ? '10px' : '0',
    transition: 'all 0.3s ease'
  };

  const iframeWrapperStyle = {
    flex: isMobile || isTablet ? 'none' : '0 0 400px',
    width: '100%',
    maxWidth: isMobile || isTablet ? '100%' : '400px'
  };

  const iframeStyle = {
    width: '100%',
    height: isSmallMobile ? '200px' : isMobile ? '250px' : isTablet ? '280px' : '315px',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div>
      <h1 className='title' style={titleStyle}>{t('Acupuncture')}</h1>
      
      <div style={mainWrapperStyle}>
        <div className="container-bbblue" style={containerBbblueStyle}>
          <div className='content-wrapper' style={contentWrapperStyle}>
            <p className='pr' style={paragraphStyle}>
              {t("Acupuncture is a traditional Chinese medicine (TCM) technique that involves inserting thin needles into specific points on the body. There are 12 primary meridians in the body, acupuncturists stimulate the meridians with the points to activate the body's natural healing processes.")}
            </p>
            
            <p className='pr' style={paragraphStyle}>
              {t("The process of acupuncture is a four-step process beginning with checking the pulse and other vitals. Then, insert the needles into acupuncture points or points where blood, lymph, and nerves can easily access connective tissue. Next, manipulate the needles, and sometimes moxibustion is applied. Moxibustion is a traditional Chinese medical technique that involves burning the herb mugwort to relieve cold or stagnant conditions by stimulating circulation. Finally, topical patches and herbal rub are applied to the post-need injection sites.")}
            </p>
            
            <p className='pr' style={paragraphStyle}>
              {t("An estimated 66% of people have some form of corporate burnout. According to the WHO, 'at least 70% of people have some form of trauma'. Acupuncture lowers cortisol levels, studies have shown that it stimulates the vagus nerve - helping with trauma, corporate burnout and more.")}
            </p>
            
            <Button 
              className="custom-btn"
              href="https://decentmed.org/acupuncturists" 
              target="_blank"
              style={buttonStyle}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {t("Explore Acupuncture")}
            </Button>
          </div>
          
          <div style={iframeWrapperStyle}>
            <iframe
              src="https://drive.google.com/file/d/1K8LQQCKq2hwwxP3dTbaj7OxmWxChpcwq/preview"
              title='Acupuncture'
              allow="autoplay"
              style={iframeStyle}
              allowFullScreen
            />
          </div>
        </div>
        
      </div>
      <br></br>
                  <Button className="custom-btn" onClick={() => window.location.href = 'https://oceantreis.com/'}>
                    {t("Acupuncture in Tampa")}
                  </Button>

                  <Button className="custom-btn" onClick={() => setShowModal(true)}>
                    {t("Transcript")}
                  </Button>
                  <Modal show={showModal} className="custom-modal" onHide={() => setShowModal(false)} size="lg" centered>
                <Modal.Header closeButton>
                  <Modal.Title>{t("Transcript")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{t(txt)}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    {t("Close")}
                  </Button>
                </Modal.Footer>
              </Modal>
      <div className='acupen'>
        <img className='gridimag' src={acuchart} alt='Ac' />
        <img className='gridimag' src={acutreatsIN} alt='Ac' />
        <a href="https://oceantreis.com/" target="_blank" rel="noopener noreferrer">
          <img className='gridimag' src={burnout} alt='oceantreis' />
        </a>      
      </div>
      
      <h1>{t("Top 10 Benefits of Acupuncture")}</h1>
      <img className='gridimag' src={acuben} alt='Ac' />
       <Collapsible trigger={<th className="collapsible-trigger">{t('Acupuncture Case Studies')}</th>}>
  <div className="row">
    <div className="col-12 col-md-8 mb-3">
      <a href="http://www.chineseacupunctureprinceton.com">
      <img src={slide1} alt="Acupuncture Study" style={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto'
       
      }} />
    </a>
    </div>
     <div className="col-12 col-md-8 mb-3">
      <a href="http://www.chineseacupunctureprinceton.com">
      <img src={slide2} alt="Acupuncture Study" style={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto'
       
      }} />
    </a>
    </div>
    <div className="col-12 col-md-8 mb-3">
      <a href="http://www.chineseacupunctureprinceton.com">
      <img src={slide3} alt="Acupuncture Study" style={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto'
       
      }} />
    </a>
    </div>
     <div className="col-12 col-md-8 mb-3">
      <a href="http://www.chineseacupunctureprinceton.com">
      <img src={slide4} alt="Acupuncture Study" style={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto'
       
      }} />
    </a>
    </div>
     <div className="col-12 col-md-8 mb-3">
      <a href="http://www.chineseacupunctureprinceton.com">
      <img src={slide5} alt="Acupuncture Study" style={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto'
       
      }} />
    </a>
    </div>
     <div className="col-12 col-md-8 mb-3">
      <a href="http://www.chineseacupunctureprinceton.com">
      <img src={slide6} alt="Acupuncture Study" style={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto'
       
      }} />
    </a>
    </div>
      <div className="col-12 col-md-8 mb-3">
      <a href="http://www.chineseacupunctureprinceton.com">
      <img src={slide7} alt="Acupuncture Study" style={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto'
       
      }} />
    </a>
    </div>
    <div className="col-12 col-md-8 mb-3">
      <a href="tel:+18333362326">
      <img src={slide8} alt="Acupuncture Tampa" style={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto',
        objectFit: 'contain'
      }} />
      </a>
    </div>
  </div>

  <style jsx>{`
    @media (max-width: 768px) {
      .row > div {
        text-align: center;
      }
      .row img {
        max-width: 350px !important;
      }
    }
  `}</style>
</Collapsible>
      <Collapsible trigger={<th className="collapsible-trigger">{t('Acupuncture Tampa')}</th>}>
  <div className="row">
    <div className="col-12 col-md-6 mb-3">
      <a href="tel:+18333362326">
      <img src={oct} alt="Acupuncture Tampa" style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        objectFit: 'contain'
      }} />
    </a>
    </div>
    <div className="col-12 col-md-6 mb-3">
      <a href="tel:+18333362326">
      <img src={OCTT} alt="Acupuncture Tampa" style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        objectFit: 'contain'
      }} />
      </a>
    </div>
  </div>

  <style jsx>{`
    @media (max-width: 768px) {
      .row > div {
        text-align: center;
      }
      .row img {
        max-width: 350px !important;
      }
    }
  `}</style>
</Collapsible>
   <Collapsible trigger={<th className="collapsible-trigger">{t('Acupuncture Milwaukee')}</th>}>
  <div className="row">
    <div className="col-12 col-md-6 mb-3">
      <a href="tel:+14146512850">
      <img src={erica} alt="Acupuncture Milwaukee" style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        objectFit: 'contain'
      }} />
    </a>
    </div>
  </div>

  <style jsx>{`
    @media (max-width: 768px) {
      .row > div {
        text-align: center;
      }
      .row img {
        max-width: 350px !important;
      }
    }
  `}</style>
</Collapsible>
      <Acuvids />
      <Channel />
       
    </div>
  );
}

export default Info1;
