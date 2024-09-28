const leftArrow = document.querySelector('.about-us__arrow-left');
const rightArrow = document.querySelector('.about-us__arrow-right');
const sliderItems = document.querySelectorAll('.about-us__slider-item');
let currentIndex = 0;
const visibleItems = 3;

function updateSlider() {
    sliderItems.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + visibleItems) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateSlider();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < sliderItems.length - visibleItems) {
        currentIndex += 1;
        updateSlider();
    }
});

updateSlider();
