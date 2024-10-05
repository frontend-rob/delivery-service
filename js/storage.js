function saveBasketToLocalStorage() {
    localStorage.setItem('basket', JSON.stringify(basket));
}


function loadBasketFromLocalStorage() {
    const savedBasket = localStorage.getItem('basket');
    basket = savedBasket ? JSON.parse(savedBasket) : {};
    updateBasketData();
}


function saveActiveServiceToLocalStorage(activeService) {
    localStorage.setItem('activeService', activeService);
}


function loadActiveServiceFromLocalStorage() {
    const defaultService = 'delivery';
    const savedService = localStorage.getItem('activeService') || defaultService;

    const serviceMap = {
        delivery: deliveryService,
        pickup: pickupService
    };

    (serviceMap[savedService] || serviceMap[defaultService])();
}