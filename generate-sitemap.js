const Sitemap = require('react-router-sitemap').default;
const routes = require('./src/Routes');   // <-- no destructuring

new Sitemap(routes)
  .build('https://www.decentmed.org')
  .save('./public/sitemap.xml');
