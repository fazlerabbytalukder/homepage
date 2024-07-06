document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.frt-footer-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            cards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});