import {getData} from '../services/services';

function classes() {
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

    getData('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ img, title, altimg, descr, price }) => {
                new Card(img, title, altimg, descr, price, 'menu__item').addCard();
            });
        });
}

export default classes;