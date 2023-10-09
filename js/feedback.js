/* Submit request */

const formEl = document.querySelector("#feedback-form");
const emailModal = document.querySelector("#modal__email");
const successModal = document.querySelector("#success__modal");

formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    emailModal.classList.add("modal__active");
});

const closeButtons = document.querySelectorAll(".modal__close-btn");

closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
        emailModal.classList.remove("modal__active");
        successModal.classList.remove("modal__active");
    });
});

const modalEmailContainer = document.querySelector("#modal__email-container");

modalEmailContainer.addEventListener('submit', function (event) {
    event.preventDefault();

    const userEmailInput = document.querySelector("#user__email");

    if (userEmailInput.value) {
        emailModal.classList.remove("modal__active");
        successModal.classList.add("modal__active");
    }
    const inputContainer = document.querySelector("#email__input-container");
    inputContainer.classList.add("email__input-container-error");

});