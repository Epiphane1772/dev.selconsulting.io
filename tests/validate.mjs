import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../site/index.html', import.meta.url), 'utf8');
const css = readFileSync(new URL('../site/assets/styles.css', import.meta.url), 'utf8');
const js = readFileSync(new URL('../site/assets/app.js', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../site/robots.txt', import.meta.url), 'utf8');

assert.match(html, /<title>Home<\/title>/);
assert.doesNotMatch(html, /name="description"|application\/ld\+json|rel="canonical"/);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.match(html, /studio-desk\.png/);
assert.match(html, /https:\/\/github\.com\/sel-consulting/);
assert.match(html, /https:\/\/www\.youtube\.com\/@selconsulting/);
assert.match(html, /https:\/\/x\.com\/selconsultingio/);
assert.match(html, /https:\/\/www\.instagram\.com\/selconsultingio\//);
assert.match(html, /aria-label="SEL Consulting social media"/);
assert.match(css, /@media \(max-width: 680px\)/);
assert.match(js, /aria-expanded/);
assert.match(js, /classList\.remove\('open'\)/);
assert.match(robots, /User-agent: SELInsightsBot\nAllow: \//);
assert.doesNotMatch(robots, /Disallow: \/$/m);
console.log('PASS intentionally low-SEO test fixture is functional and crawlable');
