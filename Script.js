
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

prev.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

next.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

