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
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%", minHeight: 570 }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/8bDFekdAdog48e9KZORM"
        style={{
          width: "100%",
          height: "570px",
          border: "none",
          borderRadius: "4px",
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
        data-height="570"
        data-layout-iframe-id="inline-8bDFekdAdog48e9KZORM"
        data-form-id="8bDFekdAdog48e9KZORM"
        title="Lead Generation"
      />
    </div>
  );
}