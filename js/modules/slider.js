import {getZero} from './timer';

function slider({container, slide, prevArrow, nextArrow, totalCounter, currentCounter, wrapper, field}) {
    // slider

    const sliders = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        sliderCurrentCounter = document.querySelector(currentCounter),
        slidersTotal = document.querySelector(totalCounter),
        sliderPreviousArrow = document.querySelector(prevArrow),
        sliderNextArrow = document.querySelector(nextArrow),
        slidesWrapper = document.querySelector(wrapper),
        slideWidth = window.getComputedStyle(slidesWrapper).width,
        slideInner = document.querySelector(field);
    let slideIndex = 1,
        offer = 0;
    slideInner.style.display = 'flex';
    slideInner.style.width = 100 * sliders.length + '%';
    slideInner.style.transition = '0.6s all';
    sliders.forEach(slide => {
        slide.style.width = slideWidth;
    });
    slidesWrapper.style.overflow = 'hidden';
    slidersTotal.textContent = getZero(sliders.length);
    sliderCurrentCounter.textContent = getZero(slideIndex);

    slider.style.position = 'relative';
    const dotWrapper = document.createElement('div');
    slider.append(dotWrapper);
    dotWrapper.classList.add('carousel-indicators');
    for (let i = 0; i < sliders.length; i++) {
        const dot = document.createElement('div');
        dotWrapper.append(dot);
        dot.classList.add('dot');
    }

    const dots = document.querySelectorAll('.dot');
    dots[slideIndex - 1].style.backgroundColor = 'black';
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(dot => {
                dot.style.backgroundColor = '#fff';
                slideIndex = index + 1;
                sliderCurrentCounter.innerHTML = getZero(slideIndex);
            });
            offer = removeNumbers(slideWidth) * index;
            slideInner.style.transform = `translateX(-${offer}px)`;
            dot.style.backgroundColor = 'black';

        });
    });

    function removeNumbers(string) {
        return +string.replace(/\D/g, '');
    }

    sliderNextArrow.addEventListener('click', () => {
        dots[slideIndex - 1].style.backgroundColor = '#fff';
        if (offer == removeNumbers(slideWidth) * (sliders.length - 1)) {
            offer = 0;
        } else {
            offer += removeNumbers(slideWidth);
        }

        slideInner.style.transform = `translateX(-${offer}px)`;

        if (slideIndex == sliders.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        sliderCurrentCounter.innerHTML = getZero(slideIndex);
        dots[slideIndex - 1].style.backgroundColor = 'black';
    });

    sliderPreviousArrow.addEventListener('click', () => {
        dots[slideIndex - 1].style.backgroundColor = '#fff';
        if (offer == 0) {
            offer = removeNumbers(slideWidth) * (sliders.length - 1);
        } else {
            offer -= removeNumbers(slideWidth);
        }

        slideInner.style.transform = `translateX(-${offer}px)`;

        if (slideIndex == 1) {
            slideIndex = sliders.length;
        } else {
            slideIndex--;
        }
        sliderCurrentCounter.innerHTML = getZero(slideIndex);
        dots[slideIndex - 1].style.backgroundColor = 'black';
    });
}
export default slider;