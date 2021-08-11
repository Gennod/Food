

function modal(modalDataTrigger, modalData) {
    // modal

    const modalTrigger = document.querySelectorAll(modalDataTrigger),
        modalClose = document.querySelector('[data-close]'),
        modal = document.querySelector(modalData);


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
}

export default modal;

