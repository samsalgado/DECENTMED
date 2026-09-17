// Plain mailto: links only do something if the visitor's browser/OS has a
// default mail app registered to handle that protocol. When nothing is
// registered, clicking silently does nothing - no error, no visible
// effect. This still attempts mailto: first (so it works instantly for
// anyone who does have a mail app configured, and right-click / long-press
// "copy email address" keeps working since the href stays a real mailto:
// link), then falls back to opening Gmail's web compose window if the tab
// never lost focus shortly after - the signal that no external app opened.
export function openMailWithFallback(email) {
  if (!email) return;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  window.location.href = `mailto:${email}`;
  setTimeout(() => {
    if (document.hasFocus()) {
      window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
    }
  }, 600);
}

export function handleMailClick(event, email) {
  event.preventDefault();
  openMailWithFallback(email);
}
