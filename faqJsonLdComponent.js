FAQJsonLd.prototype.parseFromContent = function(selector) {
    const faqSection = document.querySelector(selector);
    if (!faqSection) return;

    const questions = faqSection.querySelectorAll('h3');
    questions.forEach(question => {
        const answer = question.nextElementSibling;
        if (answer && answer.tagName === 'P') {
            this.addQuestion(question.innerText, answer.innerHTML);
        }
    });
};
