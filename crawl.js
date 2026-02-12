const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();

const routes = [
"/",
"/naturopathylane",
"/stemcell",
"/ayurveda",
"/ptsd",
"/nutrigenomics",
"/mindset",
"/funcmed",
"/trauma",
"/reviews",
"/breathwork",
"/coaching",
"/summit",
"/breathworkers",
"/acupuncture-for-migraines",
"/akpract",
"/holisticbusinessplan",
"/acupuncturists",
"/lynn",
"/applied-kinesiology",
"/breathworkers",
"/functionalmedicine",
"/naturopathy",
"/naturopathicproviders",
"/blog",
"/nutritionpract",
"/transformationalcoaching",
"/apoth",
"/can-back-pain-cause-constipation",
"/shop",
"/massagetherapy",
"/blog18",
"/bitcoin",
"/dry-needling-vs-acupuncture",
"/detox-cleanse",
"/herbalmedicine",
"/hypnopract",
"/homeopract",
"/chiropract",
"/emotionaleatingcoach",
"/meditation",
"/ayurvedicmedicine",
"/cellular-regeneration",
"/ramona",
"/tcnh",
"/acupuncture-cost",
"/cancer",
"/acupuncture",
"/what-is-bitcoin",
"/ivermectin",
"/fenbendazole",
"/hoxsey",
"/prevent",
"/hepatitis-B-specialists",
"/value-of-nutrition",
"/rose-oil",
"/cancer-prevention",
"/nutrition",
"/acupuncture-montreal",
"/hypnotherapy",
"/chiropractic",
"/detox",
"/benefits-of-chiropractic",
"/acupuncture-defined",
"/chelation",
"/digitalmarketing",
"/homeopathy",
"/telehealth",
"/about",
"/batana-oil",
"/signup",
"/signup/public",
"/signup/provider",
"/provider",
"/signin"
];

for (const route of routes) {
const url = `http://localhost:3000${route}`; // Change if your dev server runs elsewhere
console.log(`Rendering: ${url}`);
await page.goto(url, { waitUntil: 'networkidle0' });

const html = await page.content();
const filePath = path.join(__dirname, 'snapshots', route === '/' ? 'index.html' : `${route.replace(/\//g, '_')}.html`);

// Ensure directory exists
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, html);
}

await browser.close();
console.log('All snapshots saved!');
})();
