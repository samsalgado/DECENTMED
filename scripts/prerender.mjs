// react-snap (unmaintained since ~2020) bundles its own ancient Chromium
// that can't parse modern JS syntax (e.g. optional chaining `?.`) shipped
// by current dependencies, which crashes the prerender with a SyntaxError
// on every route. We install a normal, current `puppeteer` as a devDependency
// (which manages its own up-to-date Chrome download per-OS) and point
// react-snap's bundled puppeteer at that binary via PUPPETEER_EXECUTABLE_PATH
// instead. This resolves the path dynamically so it works unchanged on both
// local machines and the Netlify Linux build image.
//
// This step is a best-effort enhancement on top of an already-deployable
// CRA build (it only makes each route's static HTML carry its own
// title/description instead of the site-wide default) - it must never be
// the reason a deploy fails. On Netlify specifically, puppeteer's own
// postinstall Chrome download can silently not happen (cache restored from
// before puppeteer was added, network policy, etc.), which previously
// crashed the whole build. So: verify the resolved binary actually exists,
// try to fetch it on the spot if it doesn't, and if that still fails, skip
// prerendering entirely and let the plain CRA build (already sitting in
// build/) stand as the deploy output.
import fs from 'node:fs';
import puppeteer from 'puppeteer';
import { spawnSync } from 'node:child_process';

function chromeIsReady(executablePath) {
  return Boolean(executablePath) && fs.existsSync(executablePath);
}

let executablePath = await puppeteer.executablePath();

if (!chromeIsReady(executablePath)) {
  console.warn(`[prerender] No Chrome found at "${executablePath}" - attempting to install it now.`);
  const install = spawnSync('npx', ['puppeteer', 'browsers', 'install', 'chrome'], { stdio: 'inherit' });
  if (install.status === 0) {
    executablePath = await puppeteer.executablePath();
  }
}

if (!chromeIsReady(executablePath)) {
  console.warn(
    `[prerender] Still no usable Chrome executable (resolved path: "${executablePath}"). ` +
    'Skipping prerendering for this build - shipping the plain CRA build from build/ instead. ' +
    'Every page still gets its own title/description client-side via react-helmet; only the ' +
    'raw pre-JS HTML falls back to the site-wide default until this is fixed.'
  );
  process.exit(0);
}

const result = spawnSync('npx', ['react-snap'], {
  stdio: 'inherit',
  env: { ...process.env, PUPPETEER_EXECUTABLE_PATH: executablePath },
});

if (result.status !== 0) {
  console.warn(
    `[prerender] react-snap exited with code ${result.status} - shipping the plain CRA build ` +
    'from build/ instead of failing the deploy. Check the log above for what went wrong.'
  );
}

process.exit(0);
