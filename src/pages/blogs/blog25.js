import Topbar from "../topbar";
import { Helmet } from "react-helmet";
import Footer from "../../footer";
import '../../info/Info.css';
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Blog25 = () => {
  const { t } = useTranslation('common');
  return (
    <div style={{ textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <Helmet>
        <title>{t('The Illusion of Freedom')}</title>
        <meta property="og:title" content={t("The Illusion of Freedom")} />
        <meta name="description" content={t("We say we are free and that we have free will, but neither is entirely true. Explore how unexamined fears and inherited beliefs quietly shape our choices, our health, and what it really takes to become free.")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <Topbar />
      </header>
      <div className="container-blue">
        <div className='container'>
          <h1 style={{ textDecoration: 'underline', textAlign: 'center', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
            {t('The Illusion of Freedom')}
          </h1>
          <div className="blog-quote-card">
            <p className="blog-quote-card-text">{t('We say we are free. That we have free will.')}</p>
            <p className="blog-quote-card-sub">{t('Neither of these statements is true.')}</p>
          </div>
        </div>
        <div style={{ padding: '20px', fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" }}>
          <div className='pr'>
            <p>{t('We say we are free. That we have free will. Neither of these statements is true.')}</p>
            <p>{t('We cannot just do anything. At best, we are limited by what we see as possible. This in turn, is limited by many beliefs and ideas, many of which did not originate with us.')}</p>
            <p>{t('Some of these are expressed as addictions such as drugs, smoking, alcohol. Food, sex, shopping and gambling. Some of this can be from self-medication but most have deeper, more subtle sources.')}</p>
            <p>{t('They are based on the unexamined fears and expectations that we allow to control us, to enslave us. Over time, these become the basis for many of the physical problems we suffer. These include:')}</p>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>{t('Fear of judgement by others')}</li>
              <li>{t('Fear of missing out')}</li>
              <li>{t('Fear of being rejected, not being approved by others leading to people pleasing')}</li>
              <li>{t('Fear of not being loved')}</li>
              <li>{t('Fear of failure, of not being good enough')}</li>
              <li>{t('Fear of the future')}</li>
            </ul>
            <p>{t("These fears are based on our own expectations and on what we perceive as society's expectations about:")}</p>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>{t('Behavior')}</li>
              <li>{t('Gender roles')}</li>
              <li>{t('Job and work')}</li>
              <li>{t('Social roles')}</li>
              <li>{t('And more')}</li>
            </ul>
            <p>{t('Some of this is taught openly. Much more is taught unintentionally by parents, by society, by school, by the media. We are taught not to question these teachings, and not to look inside ourselves for answers.')}</p>
            <p>{t('We only become free, not when we reject these teachings wholesale, but when we examine each of them one by one and decide to accept or reject them. This is hard to do. It takes time and effort. Many of these teachings were learned subconsciously as children and can be difficult to identify. We often fear the pain such work might cause although it is rarely as much as we fear.')}</p>
            <p>{t('If we wish to achieve inner peace, unconditional love for ourselves and others and lasting happiness, we must each do this. The work involved is great, but the rewards are even greater.')}</p>
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
            href="https://oldwiseowladvisor.com/#contactus"
            target="_blank"
          >
            {t('Connect with Samuel')}
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog25;
