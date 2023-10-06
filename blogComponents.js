// blogComponents.js

// Table of Contents Component
export function TableOfContents(contentSelector, tocContainerSelector) {
    this.contentElement = document.querySelector(contentSelector);
    this.tocContainer = document.querySelector(tocContainerSelector);
}

TableOfContents.prototype.generate = function() {
    const headings = this.contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocList = document.createElement('ul');

    headings.forEach((heading, index) => {
        const id = `toc-target-${index}`;
        heading.id = id;

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.innerText = heading.innerText;
        listItem.appendChild(link);

        tocList.appendChild(listItem);
    });

    this.tocContainer.appendChild(tocList);
}

// FAQ JSON-LD Component
export function FAQJsonLd() {
    this.faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };
}

FAQJsonLd.prototype.parseFromContent = function(faqSectionSelector) {
    const faqSection = document.querySelector(faqSectionSelector);
    const questions = faqSection.querySelectorAll('h3');
    questions.forEach(question => {
        const answer = question.nextElementSibling;
        this.faqData.mainEntity.push({
            "@type": "Question",
            "name": question.textContent,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer.innerHTML
            }
        });
    });
}

FAQJsonLd.prototype.embed = function() {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.innerHTML = JSON.stringify(this.faqData);
    document.head.appendChild(scriptElement);
}
