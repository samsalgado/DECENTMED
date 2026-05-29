import { useEffect, useRef, useState } from "react";

export default function LeadGenForm() {
  const scriptLoaded = useRef(false);
  const [iframeHeight, setIframeHeight] = useState(570);

  useEffect(() => {
    // Adjust height based on screen size
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setIframeHeight(720); // More height on small phones for stacked fields
      } else if (width < 768) {
        setIframeHeight(640);
      } else {
        setIframeHeight(570);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener("resize", updateHeight);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: iframeHeight,
        // Remove horizontal overflow on mobile
        overflowX: "hidden",
        // Ensure it fills the viewport on mobile
        boxSizing: "border-box",
        // Small padding so it doesn't touch screen edges
        padding: "0 4px",
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/8bDFekdAdog48e9KZORM"
        style={{
          width: "100%",
          height: `${iframeHeight}px`,
          border: "none",
          borderRadius: "4px",
          // Prevent iframe from being squished
          minWidth: 0,
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
        data-height={iframeHeight}
        data-layout-iframe-id="inline-8bDFekdAdog48e9KZORM"
        data-form-id="8bDFekdAdog48e9KZORM"
        title="Lead Generation"
      />
    </div>
  );
}