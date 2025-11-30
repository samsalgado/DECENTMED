import React, { useEffect } from 'react';
import './Info.css';
import { Button } from 'react-bootstrap';
import Speakers from './summitspeakers';
import { useTranslation } from 'react-i18next';
import summit from "../images copy/decentmedsummit.png";

const InfoSummit = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="container px-4 py-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-900">
        {t('DecentMed Summit')}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        {/* Summit Image */}
        <div className="order-2 md:order-1">
          <img
            src={summit}
            alt="DecentMed Summit"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            loading="lazy"
          />
        </div>

        {/* CTA Button */}
        <div className="order-1 md:order-2 flex justify-center">
          <Button
            href="https://decentmed.org/signup/provider"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
          >
            {t("Providers: Signup")}
          </Button>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="my-16">
        <Speakers />
      </div>

      {/* Registration Form */}
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          {t("Register")}
        </h2>

        <div className="relative w-full" style={{ paddingBottom: "120%" /* Adjust for mobile height */ }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/hbb1megFlHaUKjxVNheq"
            title="Summit Registration Form"
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl border-0"
            style={{ borderRadius: "12px" }}
            id="inline-hbb1megFlHaUKjxVNheq"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-form-name="Summit Reg"
            data-height="749"
            data-form-id="hbb1megFlHaUKjxVNheq"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

      {/* Optional: Add some bottom padding for mobile */}
      <div className="h-20"></div>
    </div>
  );
};

export default InfoSummit;