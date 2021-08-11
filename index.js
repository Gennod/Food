"use strict";
import tabs from './js/modules/tabs';
import timer from './js/modules/timer';
import modal from './js/modules/modal';
import forms from './js/modules/forms';
import slider from './js/modules/slider';
import classes from './js/modules/classes';
import calculator from './js/modules/calculator';

window.addEventListener('DOMContentLoaded', () => {


    tabs('.tabcontent', '.tabheader__items', '.tabheader__item', 'tabheader__item_active');
    timer('2021-08-23');
    modal('[data-modal]', '.modal');
    forms('.modal');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    classes();
    calculator();

});