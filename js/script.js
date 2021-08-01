"use strict";
window.addEventListener('DOMContentLoaded', () => {
    // tabs

    const tabContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item');

    hideTabs();
    showTabs();

    tabsParent.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (tab == target) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });

    function hideTabs() {
        tabContent.forEach(tab => {
            tab.classList.remove('show', 'fade');
            tab.classList.add('hide');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabs(i = 0) {
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show', 'fade');

        tabs[i].classList.add('tabheader__item_active');
    }

    // timer

    const deadline = '2021-08-23';

    function calcTimeRemaining(deadline) {
        let timeRemaining = Date.parse(deadline) - Date.parse(new Date()),
            daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
            hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60) % 24),
            minutesRemaining = Math.floor(timeRemaining / (1000 * 60) % 60),
            secondsRemaining = Math.floor(timeRemaining / 1000 % 60);
        return {
            'totalTimeRemaining': timeRemaining,
            'daysRemaining': daysRemaining,
            'hoursRemaining': hoursRemaining,
            'minutesRemaining': minutesRemaining,
            'secondsRemaining': secondsRemaining
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    setClock();
    function setClock() {
        const daysRemaining = document.querySelector('#days'),
            hoursRemaining = document.querySelector('#hours'),
            minutesRemaining = document.querySelector('#minutes'),
            secondsRemaining = document.querySelector('#seconds'),
            timer = setInterval(setClock, 1000);

        daysRemaining.innerHTML = getZero(calcTimeRemaining(deadline).daysRemaining);
        hoursRemaining.innerHTML = getZero(calcTimeRemaining(deadline).hoursRemaining);
        minutesRemaining.innerHTML = getZero(calcTimeRemaining(deadline).minutesRemaining);
        secondsRemaining.innerHTML = getZero(calcTimeRemaining(deadline).secondsRemaining);

        if (calcTimeRemaining(deadline).totalTimeRemaining <= 0) {
            clearInterval(timer);
            daysRemaining.innerHTML = "00";
            hoursRemaining.innerHTML = "00";
            minutesRemaining.innerHTML = "00";
            secondsRemaining.innerHTML = "00";
        }
    }

    // modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modalClose = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');


    const timer = setTimeout(openModal, 2000);
    showModal();
    closeModal();

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function showModal() {
        modalTrigger.forEach(item => {
            item.addEventListener('click', () => {
                openModal();
                clearInterval(timer);
            });
        });
    }

    function closeModal() {
        modalClose.addEventListener('click', (e) => {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        });

        modal.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'visible';
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.keyCode === 27) {
                modal.style.display = 'none';
                document.body.style.overflow = 'visible';
            }
        });
    }

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            clearInterval(timer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // class

    class Card {
        constructor(bgImage, title, alt, description, price, ...classes) {
            this.bgImage = bgImage;
            this.title = title;
            this.alt = alt;
            this.description = description;
            this.price = price;
            this.classes = classes;
        }

        addCard() {
            const element = document.createElement('div'),
                cardMenuParent = document.querySelector('.menu__field'),
                cardMenu = cardMenuParent.querySelector('.container');
            element.innerHTML = `
                    <img src="${this.bgImage}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            cardMenu.append(element);

            this.classes.forEach(className => element.classList.add(className));
        }
    }

    new Card(
        'img/tabs/vegy.jpg',
        'Меню "Фитнес"',
        'vegy',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        20,
        'menu__item'
    ).addCard();
    new Card(
        'img/tabs/elite.jpg',
        'Меню “Премиум”',
        'elite',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        550,
        'menu__item'
    ).addCard();
    new Card(
        'img/tabs/post.jpg',
        'Меню "Постное"',
        'post',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        20,
        'menu__item'
    ).addCard();

    // Forms

    const forms = document.querySelectorAll('form'),
        message = {
            success: 'Спасибо, мы с вами скоро свяжемся!',
            failure: 'Что-то пошло не так...'
        };

    forms.forEach(form => postData(form));

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            const formData = new FormData(form);
            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    modal.style.display = 'block';
                    showThanksModal(message.success);
                    form.reset();
                    console.log(request.response);
                } else {
                    showThanksModal(message.failure);
                    form.reset();
                }
            });

        });
    }


    function showThanksModal(message) {
        const prevModal = document.querySelector('.modal__dialog'),
            thanksModal = document.createElement('div');

        prevModal.classList.add('hide');

        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
                <form action="#">
                    <div data-close="" class="modal__close">×</div>
                    <div class="modal__title">${message}</div>
                    <img src = "https://sun9-27.userapi.com/impg/ZqC_W62l_zUalZZyKe54NKLzr2MbyFgt7IZMPw/ifZxblymdR8.jpg?size=512x512&quality=96&sign=73f5528f4b431fe3051b3a80a35cae5e&type=album" style="height: 300px; width: 300px; margin: 0 auto; display: block;">
                </form>
            </div>
        `;
        modal.append(thanksModal);

        setTimeout(() => {
            prevModal.classList.remove('hide');
            thanksModal.remove();
        }, 4000);

    }

});