import {postData} from '../services/services';

function forms(modalData) {
    // Forms


    const forms = document.querySelectorAll('form'),
        message = {
            success: 'Спасибо, мы с вами скоро свяжемся!',
            failure: 'Что-то пошло не так...'
        },
        modal = document.querySelector(modalData);

    forms.forEach(form => bindPostData(form));



    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form),
                json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    modal.style.display = 'block';
                    showThanksModal(message.success);
                    console.log(data);
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
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
                    <div style="margin: 50px auto; font-size: 20px; text-align: center;">СПАСИБО!</div>
                </form>
            </div>
        `;
        modal.append(thanksModal);

        setTimeout(() => {
            prevModal.classList.remove('hide');
            thanksModal.remove();
        }, 4000);

    }
}
export default forms;