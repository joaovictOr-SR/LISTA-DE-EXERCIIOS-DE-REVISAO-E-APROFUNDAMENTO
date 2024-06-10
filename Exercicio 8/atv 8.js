// João Victor Santos Ruas

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    function autoSlide() {
        changeSlide(1);
    }

    setInterval(autoSlide, 5000);

    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
});