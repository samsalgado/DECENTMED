import { useEffect, useRef } from "react";

export default function LeadGenForm() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

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
    <div
      style={{
        width: "100%",
        maxWidth: "680px",
        margin: "0 auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        background: "#fff",
        minHeight: "713px",
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/8bDFekdAdog48e9KZORM"
        style={{
          width: "100%",
          height: "713px",
          border: "none",
          borderRadius: "12px",
          display: "block",
        }}
        id="inline-8bDFekdAdog48e9KZORM"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead Generation"
        data-height="713"
        data-layout-iframe-id="inline-8bDFekdAdog48e9KZORM"
        data-form-id="8bDFekdAdog48e9KZORM"
        title="Lead Generation"
      />
    </div>
  );
}