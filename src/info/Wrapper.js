import React, { useEffect, useRef } from "react";

export default function Wrapper({ children }) {
  const wrapperRef = useRef(null);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector(".topbar");
    const wrapperEl = wrapperRef.current;

    if (!header || !wrapperEl) return;

    function applyHeaderHeight(heightPx) {
      document.documentElement.style.setProperty("--header-height", `${heightPx}px`);
      wrapperEl.style.paddingTop = `${heightPx}px`;
    }

    function measureAndApply() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = header.getBoundingClientRect();
        const headerHeight = Math.ceil(rect.height);
        applyHeaderHeight(headerHeight);
      });
    }

    function debouncedMeasure() {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(measureAndApply, 80);
    }

    // Initial measure
    measureAndApply();

    // Re-measure on resize/orientation
    window.addEventListener("resize", debouncedMeasure);
    window.addEventListener("orientationchange", debouncedMeasure);

    // Bootstrap collapse events
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar) {
      navbar.addEventListener("shown.bs.collapse", measureAndApply);
      navbar.addEventListener("hidden.bs.collapse", measureAndApply);
    }

    // Locale toggle
    const localeToggle = document.querySelector(".change-locale-toggle");
    if (localeToggle) {
      localeToggle.addEventListener("click", debouncedMeasure);
    }

    // MutationObserver
    const mo = new MutationObserver(debouncedMeasure);
    mo.observe(header, { attributes: true, childList: true, subtree: true });

    // Fonts/images load
    function onLoad() {
      setTimeout(measureAndApply, 50);
    }
    window.addEventListener("load", onLoad);

    // Cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      window.removeEventListener("resize", debouncedMeasure);
      window.removeEventListener("orientationchange", debouncedMeasure);
      window.removeEventListener("load", onLoad);

      if (navbar) {
        navbar.removeEventListener("shown.bs.collapse", measureAndApply);
        navbar.removeEventListener("hidden.bs.collapse", measureAndApply);
      }

      if (localeToggle) {
        localeToggle.removeEventListener("click", debouncedMeasure);
      }

      mo.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="page-wrapper">
      {children}
    </div>
  );
}
