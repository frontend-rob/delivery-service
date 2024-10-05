function initializeBasketElements() {
    return {
        basketContentRef: document.getElementById('basket'),
        emptyBasketStatus: document.getElementById('empty-basket'),
        fullBasketStatus: document.getElementById('full-basket'),
        totalContainer: document.getElementById('basket-total'),
        alertContainer: document.getElementById('alert-delivery'),
        orderButtonContainer: document.getElementById('checkout-container'),
        orderButton: document.getElementById('order-button'),
        basketbuttonMobile: document.getElementById('basket-btn-mobile'),
        windowWidth: window.innerWidth
    };
}


function showElement(element) {
    if (element) {
        element.classList.add('show');
        element.classList.remove('hidden');
    }
}


function hideElement(element) {
    if (element) {
        element.classList.add('hidden');
        element.classList.remove('show');
    }
}


function updateMobileButtonVisibility(basketbuttonMobile) {
    const windowWidth = window.innerWidth;
    if (basketbuttonMobile) {
        if (windowWidth < 1024) {
            showElement(basketbuttonMobile);
        } else {
            hideElement(basketbuttonMobile);
        }
    }
}


function refreshBasketView(
    itemCount,
    emptyBasketStatus,
    fullBasketStatus,
    totalContainer,
    alertContainer,
    orderButtonContainer,
    basketbuttonMobile,
    basketCloseModalBtn) {

    const handleBasketView = itemCount === 0
        ? handleEmptyBasketData
        : handleFullBasketData;

    handleBasketView(
        emptyBasketStatus,
        fullBasketStatus,
        totalContainer,
        alertContainer,
        orderButtonContainer,
        basketbuttonMobile,
        basketCloseModalBtn
    );
}


function renderBasketItems(fullBasketStatus) {
    fullBasketStatus.innerHTML = '';

    const basketItems = Object.values(basket);
    for (let i = 0; i < basketItems.length; i++) {
        const dish = basketItems[i];
        fullBasketStatus.innerHTML += getBasketItemTemplate(dish);
    }
}


function updateOrderButtonAndAlert(subTotal, minimumOrderValue, alertContainer, orderButton) {
    const remainingAmount = document.getElementById('remainingAmount');
    const isBelowMinimum = subTotal < minimumOrderValue;

    if (isBelowMinimum) {
        showElement(alertContainer);
        remainingAmount.textContent = `${formatNumber(minimumOrderValue - subTotal)}`;
        orderButton.classList.remove('btn-primary');
        orderButton.style.cursor = 'not-allowed';
    } else {
        hideElement(alertContainer);
        orderButton.classList.add('btn-primary');
        orderButton.style.cursor = 'pointer';
    }
}


function updateMobileButton(subTotal, itemCount) {
    const basketButtonAmount = document.getElementById('basket-total-amount');
    const basketItemCount = document.getElementById('basket-item-count');

    basketButtonAmount.innerHTML = `Warenkorb (${formatNumber(subTotal)})`;
    basketItemCount.textContent = itemCount;
}


function updateBasketSummary(totalContainer, subTotal, deliveryCosts, total) {
    totalContainer.innerHTML = `
        <div class="basket-sub-total">
            <p>Zwischensumme:</p>
            <p>${formatNumber(subTotal)}</p>
        </div>
        <div class="basket-delivery-cost">
            <p>Lieferkosten:</p>
            <p id="delivery-cost-display">${formatNumber(deliveryCosts)}</p>
        </div>
        <div class="basket-total-amount">
            <h4>Gesamt:</h4> 
            <h4>${formatNumber(total)}</h4>
        </div>
    `;
}


function updateBasketDataMobile() {
    const basketModal = document.getElementById('basketModal');
    const basketContentRef = document.getElementById('basket');

    if (basketModal) {
        basketModal.querySelector('.modal-content').innerHTML = `
            ${basketContentRef.innerHTML}
        `;
    }
}


function handleEmptyBasketData(
    emptyBasketStatus,
    fullBasketStatus,
    totalContainer,
    alertContainer,
    orderButtonContainer,
    basketbuttonMobile) {

    showElement(emptyBasketStatus);
    hideElement(fullBasketStatus);
    hideElement(totalContainer);
    hideElement(alertContainer);
    hideElement(orderButtonContainer);
    hideElement(basketbuttonMobile);
}


function handleFullBasketData(
    emptyBasketStatus,
    fullBasketStatus,
    totalContainer,
    alertContainer,
    orderButtonContainer,
    basketbuttonMobile) {

    hideElement(emptyBasketStatus);
    showElement(fullBasketStatus);
    showElement(totalContainer);
    showElement(alertContainer);
    showElement(orderButtonContainer);
    updateMobileButtonVisibility(basketbuttonMobile);
}