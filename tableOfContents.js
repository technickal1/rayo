// tableOfContents.js

function TableOfContents(contentSelector, tocContainerSelector) {
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
