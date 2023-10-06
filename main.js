// main.js

// Importing both components
import { TableOfContents } from './tableOfContents.js';
import { FAQJsonLd } from './faqJsonLdComponent.js';

// Initialize and generate the Table of Contents
const toc = new TableOfContents('.blog-content', '.toc-container');
toc.generate();

// Initialize and generate the FAQ JSON-LD
const faq = new FAQJsonLd();
faq.parseFromContent('.faq-section');
faq.embed();