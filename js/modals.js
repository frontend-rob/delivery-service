function closeBasketModal() {
    const basketModal = document.getElementById('basketModal');
    if (basketModal) {
        updateBasketDataMobile();
        basketModal.classList.remove('show');
        basketModal.classList.add('hidden');
    }
}


function showMinimumOrderAlert() {
    const warningModal = document.getElementById('warningModal');
    warningModal.classList.add('show');
    warningModal.classList.remove('hidden');
}


function closeMinimumOrderAlert() {
    const warningModal = document.getElementById('warningModal');
    warningModal.classList.add('hidden');
    warningModal.classList.remove('show');
}


function showSuccessOrderAlert(confirmationText) {
    const successModal = document.getElementById('successModal');
    const orderTimeParagraph = document.getElementById('order-time-confirmation');

    orderTimeParagraph.textContent = confirmationText;
    successModal.classList.remove('hidden');
    successModal.classList.add('show');
}


function closeSuccessOrderAlert() {
    const successModal = document.getElementById('successModal');
    successModal.classList.add('hidden');
    successModal.classList.remove('show');
}