const faqs = document.querySelectorAll('.faq__content')

faqs.forEach((faq__content) => {
    faq__content.addEventListener('click', () => {
        faq__content.classList.toggle('active')
    });
});