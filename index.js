document.querySelectorAll('.sec1 .flip-container').forEach(container => {
    container.addEventListener('click', () => {
        container.querySelector('.flipper').classList.toggle('flipped');
    });
});


//questions
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        faqItem.classList.toggle('active');

        if (faqItem.classList.contains('active')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        } else {
            faqAnswer.style.maxHeight = '0';
        }
    });
});