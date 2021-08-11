function calculator() {
    // Calculator

    const result = document.querySelector('.calculating__result span'),
        choose = document.querySelectorAll('#choose div'),
        calculatingMale = document.querySelectorAll('#gender div'),
        calculatingMedium = document.querySelectorAll('.calculating__choose_medium input'),
        femaleId = document.querySelector('#female'),
        rationId = document.querySelector('#small');

    let height, weight, age, male = 'female', activity = 1.375;

    if (localStorage.getItem('gender')) {
        male = localStorage.getItem('gender');
    }
    if (localStorage.getItem('ration')) {
        activity = localStorage.getItem('ration');
    }

    refreshCalc('.calculating__choose', 'calculating__choose-item_active');
    getTotal();
    getStaticInformation('.calculating__choose', 'calculating__choose-item_active');
    getDynamicInformation();

    function getDynamicInformation() {
        calculatingMedium.forEach(item => {
            item.addEventListener('input', event => {
                if (event.target.value.match(/\D/g)) {
                    event.target.style.border = '1px solid red';
                    event.target.style.boxShadow = '0px 0px 5px 0px rgba(255, 0, 0, 0.75)';
                } else {
                    event.target.style.border = 'none';
                    event.target.style.boxShadow = '0 4px 15px rgb(0 0 0 / 20%)';
                }
                switch (event.target.id) {
                    case "height":
                        height = event.target.value;
                        console.log(height);
                        break;
                    case "weight":
                        weight = event.target.value;
                        break;
                    case 'age':
                        age = event.target.value;
                        break;
                }


                getTotal();
            });
        });
    }

    function getStaticInformation(parentSelector, actClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);


        elements.forEach(element => {
            element.addEventListener('click', event => {

                if (event.target.getAttribute('data-ration')) {
                    activity = event.target.getAttribute('data-ration');
                    localStorage.setItem('ration', event.target.getAttribute('data-ration'));
                } else {
                    male = event.target.id;
                    localStorage.setItem('gender', event.target.id);
                }

                elements.forEach(() => {
                    if (event.target.getAttribute('data-ration')) {
                        choose.forEach(item => {
                            item.classList.remove(actClass);
                        });
                    } else {
                        calculatingMale.forEach(item => {
                            item.classList.remove(actClass);
                        });
                    }
                });

                event.target.classList.add(actClass);

                getTotal();
            });
        });
    }
    function getTotal() {
        if (!height || !weight || !age || !male || !activity) {
            result.textContent = '0';
            return;
        } else {
            if (male != "female") {
                result.textContent = `${Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity)}`;
            } else {
                result.textContent = `${Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity)}`;
            }
        }
    }

    function refreshCalc(parentSelector, actClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(element => {
            element.classList.remove(actClass);

            if (element.getAttribute('data-ration')) {

                if (element.getAttribute('data-ration') === localStorage.getItem('ration')) {
                    rationId.classList.remove(actClass);
                    element.classList.add(actClass);
                }
            } else {
                if (element.getAttribute('id') === localStorage.getItem('gender')) {
                    femaleId.classList.remove(actClass);
                    element.classList.add(actClass);
                } else {
                    femaleId.classList.add(actClass);
                }
            }

        });


    }
}

export default calculator;