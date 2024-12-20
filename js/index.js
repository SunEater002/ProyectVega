document.querySelectorAll('.sec1 .flip-container').forEach(container => {
    container.addEventListener('click', () => {
        container.querySelector('.flipper').classList.toggle('flipped');
    });
});