function openBasketOnSmallScreen() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
        const basketModal = document.getElementById('basketModal');
        if (basketModal) {
            updateBasketDataMobile();
            basketModal.classList.add('show');
            basketModal.classList.remove('hidden');
        }
    }
}


function toggleVisibility(element, isVisible) {
    if (element) {
        element.classList.toggle('show', isVisible);
        element.classList.toggle('hidden', !isVisible);
    }
}


function handleBasketVisibility() {
    const basket = document.getElementById('basket');
    const divider = document.getElementById('divider');
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1024) {
        toggleVisibility(basket, true);
        toggleVisibility(divider, true);
    } else {
        toggleVisibility(basket, false);
        toggleVisibility(divider, false);
    }
}


function handleBasketBtnMobileVisibility() {
    const basket = document.getElementById('basket');
    const basketBtnMobile = document.getElementById('basket-btn-mobile');
    const windowWidth = window.innerWidth;
    const itemCount = calculateItemCount(basket);

    if (windowWidth < 1024) {
        toggleVisibility(basketBtnMobile, itemCount > 0);
    } else {
        toggleVisibility(basketBtnMobile, false);
    }
}

function handleCloseModalButtonVisibility() {
    const closeModalBtn = document.getElementById('modal-close-button');
    const windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
        toggleVisibility(closeModalBtn, true);
    } else {
        toggleVisibility(closeModalBtn, false);
    }

}


function handleBasketModal() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
        closeBasketModal();
    }
}


function handleResize() {
    handleBasketVisibility();
    handleBasketModal();
    handleBasketBtnMobileVisibility();
    handleCloseModalButtonVisibility();
    updateBasketData();
}


window.addEventListener('resize', handleResize);