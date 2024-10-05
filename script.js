const categoryImages = {
    'Beliebt': '',
    'Salate': './assets/img/dishes/salad.webp',
    'Suppen': './assets/img/dishes/soup.webp',
    'Bowls': './assets/img/dishes/poke-bowl.webp',
    'Sushi': './assets/img/dishes/sushi.webp',
    'Desserts': './assets/img/dishes/dessert.webp'
};


function getCategories() {
    return {
        'Beliebt': { containerId: 'favorite-dishes', headlineId: 'favorite-category-headline', imgId: '' },
        'Salate': { containerId: 'salad-dishes', headlineId: 'salads-category-headline', imgId: 'salad-img' },
        'Suppen': { containerId: 'soup-dishes', headlineId: 'soups-category-headline', imgId: 'soup-img' },
        'Bowls': { containerId: 'bowl-dishes', headlineId: 'bowls-category-headline', imgId: 'bowl-img' },
        'Sushi': { containerId: 'sushi-dishes', headlineId: 'sushi-category-headline', imgId: 'sushi-img' },
        'Desserts': { containerId: 'dessert-dishes', headlineId: 'desserts-category-headline', imgId: 'dessert-img' }
    };
}


function renderDishCards() {
    const categories = getCategories();
    const categoryNames = Object.keys(categories);

    resetCategories(categories, categoryNames);
    displayDishes(myDishes, categories);
}


function resetCategories(categories, categoryNames) {
    for (let categoryIndex = 0; categoryIndex < categoryNames.length; categoryIndex++) {
        const categoryName = categoryNames[categoryIndex];
        const categoryInfo = categories[categoryName];

        updateBackgroundImage(categoryInfo.imgId, categoryName);
        document.getElementById(categoryInfo.containerId).innerHTML = "";
        document.getElementById(categoryInfo.headlineId).textContent = categoryName;
    }
}


function displayDishes(dishes, categories) {
    for (let dishIndex = 0; dishIndex < dishes.length; dishIndex++) {
        const dish = dishes[dishIndex];
        const categoryInfo = categories[dish.category];

        if (categoryInfo) {
            const container = document.getElementById(categoryInfo.containerId);
            container.innerHTML += getDishesTemplate(dish, dishIndex);
        }
    }
}


function updateBackgroundImage(imgId, categoryName) {
    const imgElement = document.getElementById(imgId);
    if (imgElement) {
        imgElement.style.backgroundImage = categoryImages[categoryName]
            ? `url('${categoryImages[categoryName]}')`
            : 'none';
    }
}


function renderContent() {
    const components = getComponents();
    loadTemplates(components);
    observeScrollPosition();
    loadBasketFromLocalStorage();
    renderDishCards();
    handleResize();
    updateBasketDataMobile();
    loadActiveServiceFromLocalStorage();
}


function getComponents() {
    return {
        header: document.getElementById('header-content'),
        mainContainer: document.getElementById('dish-content'),
        dishes: document.getElementById('dishes'),
        basket: document.getElementById('basket'),
        footer: document.getElementById('footer-content'),
        basketModal: document.getElementById('basketModal'),
    };
}


function loadTemplates({ header, mainContainer, footer }) {
    header.innerHTML = getHeaderTemplate();
    mainContainer.innerHTML = getMainContentTemplate();
    footer.innerHTML = getFooterTemplate();
    basketModal.innerHTML = getBasketModalTemplate();
}