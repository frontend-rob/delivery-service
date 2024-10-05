function processOrder() {
    const { subTotal } = calculateBasketSum();
    const isPickupOrder = currentServiceType === 'pickup';

    if (isPickupOrder || subTotal >= minimumOrderValue) {
        finalizeOrderProcess();
    } else {
        showMinimumOrderAlert();
    }
}


function openOrderConfirmation() {
    const isPickupOrder = currentServiceType === 'pickup';
    let confirmationText;

    if (isPickupOrder) {
        confirmationText = 'Ihre Bestellung ist in ca. 35 Minuten abholbereit.';
    } else {
        confirmationText = 'Ihre Bestellung wird in ca. 60 Minuten geliefert.';
    }

    showSuccessOrderAlert(confirmationText);
}


function finalizeOrderProcess() {
    clearBasket();
    updateBasketData();
    updateBasketDataMobile();
    closeBasketModal();
    openOrderConfirmation();
}