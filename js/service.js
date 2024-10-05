let currentServiceType = 'delivery';

function getServiceConfig(serviceType) {
    const configs = {
        delivery: {
            activeBtnId: 'delivery-btn',
            inactiveBtnId: 'pickup-btn',
            showId: 'order-details',
            hideId: 'pickup-address',
            alertId: 'alert-delivery',
            deliveryCosts: 2.00,
            minOrderValue: 21.00
        },
        pickup: {
            activeBtnId: 'pickup-btn',
            inactiveBtnId: 'delivery-btn',
            showId: 'pickup-address',
            hideId: 'order-details',
            alertId: 'alert-delivery',
            deliveryCosts: 0,
            minOrderValue: 0
        }
    };
    return configs[serviceType] || configs.delivery;
}

function setButtonState(activeBtnId, inactiveBtnId) {
    document.getElementById(activeBtnId).classList.add('active');
    document.getElementById(inactiveBtnId).classList.remove('active');
}

function setVisibility(showId, hideId, alertId, showAlert) {
    document.getElementById(showId).classList.add('show');
    document.getElementById(showId).classList.remove('hidden');
    document.getElementById(hideId).classList.remove('show');
    document.getElementById(hideId).classList.add('hidden');
    const alert = document.getElementById(alertId);
    if (alert) {
        alert.classList.toggle('show', showAlert);
        alert.classList.toggle('hidden', !showAlert);
    }
}

function setCosts(deliveryCosts, minOrderValue) {
    currentDeliveryCosts = deliveryCosts;
    minimumOrderValue = minOrderValue;
}

function refreshBasketAndModal() {
    updateBasketData();
    updateBasketDataMobile();
}

function setService(serviceType) {
    currentServiceType = serviceType;
    const config = getServiceConfig(serviceType);
    setButtonState(config.activeBtnId, config.inactiveBtnId);
    setVisibility(config.showId, config.hideId, config.alertId, serviceType === 'delivery');
    setCosts(config.deliveryCosts, config.minOrderValue);
    refreshBasketAndModal();
    saveActiveServiceToLocalStorage(serviceType);
}

function deliveryService() {
    setService('delivery');
}

function pickupService() {
    setService('pickup');
}