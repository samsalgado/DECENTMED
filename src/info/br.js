import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import './acu.css';
import Benefits from "./brbenefits";
import './Info.css';
const BREATH = () => {
const {t} = useTranslation('common')
  const [showModal, setShowModal] = useState(false);
  const txt = `
  trait level one training we've been running the know for eight years and they really are problem themselves to be a kind of a very beautiful holistic way of looking at the yoga system and it's true authenticity I suppose and a birthing of teachers as best as we can the people who have an aspiration to teach the holistic system of yoga out which is looking at Astana but also looking the attitude behind Ozma and a way that we can bring this all of this into everyday living and it really is

kind of extraordin the the true aspects of yoga being a 24/7 practice and what about the people who don't want to be teacher it's an incredible course I think anyone who was able to invest the time in themselves and obviously the money to be able to do this kind of course just for themselves it's just incredible to seduction spend four weeks embarrassing yourself into true self awareness and self study and self education and I think I really wish that at some point in the world would be able to offer

every individual things going to coaches which is so powerful to to have four weeks of introspection and really to be from whatever better where you're putting at selfish or the aspiration really to breathe in to yourself and then contribute that back out to the world in a more harmonious harmonious way I am French I live in Thailand and I walk in pretty girl my name's Liz I'm a musician I'm informant my name's River I'm Australian and my last job was a bartender I started doing

yoga really like a year and a half ago and I just really got into the whole kind of lot to be there and I really enjoyed all the asanas and I just kind of wanted to develop my understanding more and I thought it'd be a good chance to do I want you to do a TTC because since I started yoga you guys brought so many things to me not only on a physical level but on spiritual and in terms of balance in my life and so it has put so much to me that I really want to transmit this kind of things to other

people so I started doing yoga the Christmas is gone and I just fell in love with it um two of my favorite teachers went to tribe so I thought that that would be a good place to stop who were there one of them is you I really liked the syllabus and that it was in Thailand and I liked what they had to say about themselves on their website like the structure and how they run the classes and stuff so I looked for a long time and I just tried because I think they are very unique in offering a training that is very

holistic that can teach posture and asinine in-depth technical are very very strong but at the same time they give a complete view of yoga a complete study of the yoga system and the spiritual aspects everything that she is a part of yoga you so I am on my seventh day some days I'm a bit tired some days I feel better but I I find that the teacher actually of course is the training in an amazing way because in general when I retired the next days I will be some some exercises some some practice which will

balance what happened in the previous day so I never Fleur I never feel exhausted I never feel to my limit because there is such a diversity in what is taught and and in let's say energizing exercises versus cooling exercises that I think it's very well-conceived and I feel good I'm on day seven and I feel really good actually way better than I expected to feel by the stage at the start and what it's done for me it's definitely brought out my voice I've become a lot more

confident made a lot of friends and a huge amount I'm on day eight a very very warm right now and I'm feeling really good it's it's a really great course because it really tests you you know physically mentally emotionally you know it's a lot to take in we're learning new things constantly so it's really really interesting yeah I think it's just it's exceeded what I thought I was going to do at this point so yeah every everyday you learn more and it's a nice it's a challenge so it's

good yes the training or doji after seven days has already met my expectation so I guess to be above my expectation when it finishes it has it's exceeded I'm surf if on date we already feel like this I'm kind of even more excited to see how I'm going to feel at the end of it met and exceeded even so I think I had quite a good view of yoga before I think it was really broadened my horizon especially in terms of energy and what is really behind behind the yoga postures that people

don't necessarily know a lot about so the energy systems of chakra and so many interesting things that I didn't know about so I will here deepen my knowledge and latch it and I have the feeling that this is the first step to learn so much more in the coming years it's definitely brought out my voice I've become a lot more confident made a lot of friends and this training has given me a massive amount of confidence that I didn't have before especially speaking in front of a class and meeting new people being in a

beautiful place just kind of yeah just you feel completely different it's completely different to where I am at home so yeah it's just a transformation I think absolutely I kind of already have who did you recommend it to my friend Brendon back home he came and saw me in Canada and he's actually where I was maybe like six months ago so he's kind of looking to do the same thing and just get like a broader knowledge of his own practice as well so yeah I would a hundred percent recommend it I think

it's it's going to be so you've got to be passionate about yoga to do it it's not a retreat and it's not something that you can just kind of mess around with you I think it's if you already love yoga and you love all the philosophy and all that kind stuff then this is the perfect thing for you because it will it will just complete you yes for sure I would recommend training I will recommend this training towards many people as I can you


  `
    return (
      <div className='container mobile-optimized'>
            <h1 className='title'>{t('Somatic Breathwork')}</h1>
            <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
      }}>
         <div className="container-bbblue" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div className='content-wrapper' style={{
          flex: '1'
        }}>
         
          <p className="pr"><h2>{t("What is Breathwork?")}</h2></p>
          <p className='pr'>{t("Breathwork is the practice of consciously using the breath to regulate your physical, emotional, and mental state. By shifting the rhythm, depth, and pattern of your breathing, you can calm the nervous system, release stored tension, increase clarity, and access deeper states of awareness. It’s a powerful tool for healing, transformation, and self-connection, helping you move out of survival mode and into presence, vitality, and emotional freedom. Breathwork can be gentle and grounding or deep and activating, depending on the intention and technique used. Seeking somatic breathwork near me? Click the button below to find great breathwork coaches.")}</p>
           <Button className="custom-btn" href="https://decentmed.org/breathwork" target="_blank">{t("Find Breathwork Coach")}</Button>  
          {/* <Button className="custom-btn" href="https://decentmed-server.vercel.app/breathwork" target="_blank">{t("Find Breathwork Coach")}</Button>  */}
        </div>
        <iframe
          className="centered-video"
          src="https://www.youtube.com/embed/w-V-r8gqD5Y?si=W6G1WvAEA-lNjp0Q"
          frameBorder="0"
          allowFullScreen
          title="Rumble video player"
          style={{
            maxWidth: '400px',
            width: '100%',
            height: 'auto'
          }}
        />
        </div>
      </div>
              <Button className="custom-btn" onClick={() => setShowModal(true)}>
            {t("Transcript")}
          </Button>
          <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
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

      <style jsx>{`
        @media (max-width: 768px) {
          .container-bbblue {
            flex-direction: column !important;
          }
          .content-wrapper {
            text-align: center !important;
          }
          .centered-video {
            max-width: 280px !important;
            margin-top: 20px !important;
            height: 200px !important;
          }
        }
      `}</style>
        <br></br>
        <Benefits />
        </div>
    )
}
export default BREATH;
