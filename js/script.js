"use strict";
import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';
import classes from './modules/classes';
import calculator from './modules/calculator';

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