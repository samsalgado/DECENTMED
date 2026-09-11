// react-snap (unmaintained since ~2020) bundles its own ancient Chromium
// that can't parse modern JS syntax (e.g. optional chaining `?.`) shipped
// by current dependencies, which crashes the prerender with a SyntaxError
// on every route. We install a normal, current `puppeteer` as a devDependency
// (which manages its own up-to-date Chrome download per-OS) and point
// react-snap's bundled puppeteer at that binary via PUPPETEER_EXECUTABLE_PATH
// instead. This resolves the path dynamically so it works unchanged on both
// local machines and the Netlify Linux build image.
import puppeteer from 'puppeteer';
import { spawnSync } from 'node:child_process';

const executablePath = await puppeteer.executablePath();

const result = spawnSync('npx', ['react-snap'], {
  stdio: 'inherit',
  env: { ...process.env, PUPPETEER_EXECUTABLE_PATH: executablePath },
});

process.exit(result.status ?? 1);
