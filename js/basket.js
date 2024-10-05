let basket = {};


let currentDeliveryCosts = 2.00;
let minimumOrderValue = 21.00;


function addToBasket(event) {
    const button = event.target;
    const dishCard = button.closest('.dish-card-wrapper');
    const index = dishCard.dataset.index;
    const dish = myDishes[parseInt(index, 10)];

    if (basket[dish.name]) {
        basket[dish.name].quantity += 1;
    } else {
        basket[dish.name] = {
            ...dish,
            quantity: 1
        };
    }
    saveBasketAndRefreshData();
}


function deleteItemFromBasket(itemName) {
    const basketItemCount = document.getElementById('basket-item-count');
    delete basket[itemName];
    basketItemCount.textContent = '0';
    saveBasketAndRefreshData();
}

function clearBasket() {
    basket = {};
    localStorage.removeItem('basket');
    updateBasketData();
}


function increaseQuantity(dishName) {
    updateQuantity(dishName, 1);
}


function decreaseQuantity(dishName) {
    updateQuantity(dishName, -1);
}


function updateQuantity(dishName, change) {
    const basketItemCount = document.getElementById('basket-item-count');
    const dish = basket[dishName];

    if (dish) {
        dish.quantity += change;

        if (dish.quantity <= 0) {
            delete basket[dishName];
            basketItemCount.textContent = '0';
        }
        saveBasketAndRefreshData();
    }
}


function calculateBasketSum() {
    const basketItems = Object.values(basket);
    let itemCount = 0;
    let subTotal = 0;

    for (const dish of basketItems) {
        itemCount += dish.quantity;
        subTotal += dish.price * dish.quantity;
    }

    const total = subTotal + currentDeliveryCosts;
    return { itemCount, subTotal, total };
}


function calculateItemCount(basket) {
    const basketItems = Object.values(basket || {});
    return basketItems.reduce((sum, dish) => sum + (dish.quantity || 0), 0);
}


function saveBasketAndRefreshData() {
    saveBasketToLocalStorage();
    updateBasketData();
    updateBasketDataMobile();
    handleResize();
}


function updateBasketData() {
    const elements = initializeBasketElements();
    const { itemCount, subTotal, total } = calculateBasketSum();

    refreshBasketView(itemCount, elements.emptyBasketStatus, elements.fullBasketStatus, elements.totalContainer, elements.alertContainer, elements.orderButtonContainer, elements.basketbuttonMobile);

    if (itemCount > 0) {
        renderBasketItems(elements.fullBasketStatus);
        updateBasketSummary(elements.totalContainer, subTotal, currentDeliveryCosts, total);
        updateOrderButtonAndAlert(subTotal, minimumOrderValue, elements.alertContainer, elements.orderButton);
        updateMobileButton(subTotal, itemCount);
    }
}