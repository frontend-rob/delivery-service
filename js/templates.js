function getHeaderTemplate() {
    return `
        <div class="header-inner">
            <a href="#">
                <div class="main-logo">
                    <img class="logo-icon" src="./assets/img/logo/app-logo.png" alt="App Image">
                    <span>BestellApp</span>
                </div>
            </a>
            <div class="menu-btns">
                <button class="btn btn-ghost btn-circle" aria-label="language-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z">
                        </path>
                    </svg>
                </button>
                <button class="btn btn-ghost btn-circle" aria-label="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    `;
}


function getHeroContentTemplate() {
    return `
        <div class="hero-section">
            <img class="hero-img" src="./assets/img/dishes/poke-bowl.webp" alt="Bowl Image">
            <div class="hero-content-wrapper">
                <div class="restaurant-logo">
                    <img src="./assets/img/logo/logo.png" alt="Restaurant Logo">
                </div>
                <div class="restaurant-header">
                    <div class="restaurant-name">
                        <h2>Bowls & Rolls</h2>
                        <div class="restaurant-cta">
                            <button class="btn btn-neutral btn-circle" aria-label="info-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                                    <path
                                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z">
                                    </path>
                                </svg>
                            </button>
                            <button class="btn btn-neutral btn-circle" aria-label="like-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                                    <path
                                        d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="restaurant-indicators text-sm">
                        <div class="restaurant-rating">
                            <svg class="rating-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                                <path
                                    d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z">
                                </path>
                            </svg>
                            <div class="rating-details text-sm">
                                <span class="rating"><strong>4,8</strong></span>
                                <span divss="rating-count">(123)</span>
                            </div>
                        </div>
                        <div id="order-details" class="order-conditions">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                                <path
                                    d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z">
                                </path>
                            </svg>
                            <span>21,00 €</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#none" viewBox="0 0 256 256">
                                <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                                <path
                                    d="M208,112a47.81,47.81,0,0,0-16.93,3.09L165.93,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H152a8,8,0,0,0-6.91,12l11.65,20H99.26L82.91,60A8,8,0,0,0,76,56H48a8,8,0,0,0,0,16H71.41L85.12,95.51,69.41,117.06a48.13,48.13,0,1,0,12.92,9.44l11.59-15.9L125.09,164A8,8,0,1,0,138.91,156l-30.32-52h57.48l11.19,19.17A48,48,0,1,0,208,112ZM80,160a32,32,0,1,1-20.21-29.74l-18.25,25a8,8,0,1,0,12.92,9.42l18.25-25A31.88,31.88,0,0,1,80,160Zm128,32a32,32,0,0,1-22.51-54.72L201.09,164A8,8,0,1,0,214.91,156L199.3,129.21A32,32,0,1,1,208,192Z">
                                </path>
                            </svg>
                            <span>2,00 €</span>
                        </div>
                        <div id="pickup-address" class="pickup-location hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                                <path
                                    d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z">
                                </path>
                            </svg>
                            <span>Gourmetgasse 12, 12345 Kulinarien</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function getNavigationTemplate() {
    return `
        <nav class="navigation-slider">
            <div id="nav-buttons" class="navigation-inner">
                <a href="#favorite-category-headline" class="btn btn-sm btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z">
                        </path>
                    </svg>
                    Beliebt
                </a>
                <a href="#salads-category-headline" class="btn btn-sm btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z">
                        </path>
                    </svg>
                    Salate
                </a>
                <a href="#soups-category-headline" class="btn btn-sm btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M224,112H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V216a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,120,8,8,0,0,0,224,112Zm-59.34,88a8,8,0,0,0-4.66,7.27V216H96v-8.71A8,8,0,0,0,91.34,200a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,200ZM81.77,55c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,88,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,88,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C70.37,74.81,73.38,65.43,81.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,128,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,128,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C110.37,74.81,113.38,65.43,121.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,168,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,168,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C150.37,74.81,153.38,65.43,161.77,55Z">
                        </path>
                    </svg>
                    Suppen
                </a>
                <a href="#bowls-category-headline" class="btn btn-sm btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z">
                        </path>
                    </svg>
                    Bowls
                </a>
                <a href="#sushi-category-headline" class="btn btn-sm btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M231.53,146.57,175.68,50.66l-.11-.19a56,56,0,0,0-95.14,0l-.11.19L24.47,146.57A56,56,0,0,0,72.09,232H183.91a56,56,0,0,0,47.62-85.43ZM160,216H96V168h64Zm58.86-20.55A39.49,39.49,0,0,1,183.91,216H176V168a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v48H72.09a40,40,0,0,1-34-61.09,2,2,0,0,0,.11-.2l55.85-95.9a40,40,0,0,1,67.84,0l55.85,95.9a2,2,0,0,0,.11.2A39.5,39.5,0,0,1,218.85,195.45Z">
                        </path>
                    </svg>
                    Sushi
                </a>
                <a href="#desserts-category-headline" class="btn btn-sm btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM77.71,144H97.07l40.61,71.06L128,232Zm57.08,0,21.75,38.06-9.65,16.88L115.5,144Zm31,21.94L153.21,144h25.08ZM200,128H56a8,8,0,0,1,0-16,8,8,0,0,0,8-8V96a64,64,0,0,1,128,0v8a8,8,0,0,0,8,8,8,8,0,0,1,0,16Z">
                        </path>
                    </svg>
                    Desserts
                </a>
            </div>
        </nav>
    `;
}


function getMainContentTemplate() {
    return `
        <section id="dishes" class="dishes-wrapper">
            ${getHeroContentTemplate()}
            ${getNavigationTemplate()}
            <div class="dishes-container">
                <div class="dishes-content">
                    <div class="favorite-wrapper">
                        <h2 id="favorite-category-headline"></h2>
                        <div id="favorite-dishes"></div>
                    </div>
                    <div class="salad-wrapper">
                        <div id="salad-img"></div>
                        <h2 id="salads-category-headline"></h2>
                        <div id="salad-dishes"></div>
                    </div>
                    <div class="soup-wrapper">
                        <div id="soup-img"></div>
                        <h2 id="soups-category-headline"></h2>
                        <div id="soup-dishes"></div>
                    </div>
                    <div class="bowl-wrapper">
                        <div id="bowl-img"></div>
                        <h2 id="bowls-category-headline"></h2>
                        <div id="bowl-dishes"></div>
                    </div>
                    <div class="sushi-wrapper">
                        <div id="sushi-img"></div>
                        <h2 id="sushi-category-headline"></h2>
                        <div id="sushi-dishes"></div>
                    </div>
                    <div class="dessert-wrapper">
                        <div id="dessert-img"></div>
                        <h2 id="desserts-category-headline"></h2>
                        <div id="dessert-dishes"></div>
                    </div>
                </div>
            </div>
        </section>
        <div id="divider" class="divider-vertical"></div>
        <aside id="basket" class="basket-wrapper">
            ${getBasketTemplate()}
        </aside>
    `;
}


function getDishesTemplate(dish, index) {
    return `
        <div class="dish-card-wrapper" data-index="${index}">
            <div class="dish-card-header">
                <h3>${dish.name}</h3>
                <button class="btn btn-outline btn-ghost btn-circle" aria-label="add-item-btn" onclick="addToBasket(event)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>
                    </svg>
                </button>
            </div>
            <p class="dish">${dish.description}</p>
            <h3>${formatNumber(dish.price)}</h3>
        </div>
    `;
}


function getBasketItemTemplate(dish) {
    return `
        <div class="basket-item">
            <div class="basket-item-header">
                <div class="basket-item-price">
                    <h4>${dish.quantity}</h4>
                    <h4>${dish.name}</h4>
                </div>
                <p>${formatNumber(dish.price * dish.quantity)}</p>
            </div>
            <div class="basket-item-controls">
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity('${dish.name}')" class="btn btn-neutral btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                        </svg>
                    </button>
                    <h4>${dish.quantity}</h4>
                    <button onclick="increaseQuantity('${dish.name}')" class="btn btn-neutral btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                        </svg>
                    </button>
                </div>
                <button onclick="deleteItemFromBasket('${dish.name}')" class="btn btn-error btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="divider-horizontal"></div>
        </div>
    `;
}


function getBasketTemplate() {
    return `
        <div class="basket-inner">
            <div class="basket-header">
            <div class="basket-handle">
                <h2 class="basket-headline">Warenkorb</h2>
                <button id="modal-close-button" class="btn btn-neutral btn-circle hidden" onclick="closeBasketModal()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                    </svg>
                </button>
            </div>
                <div class="delivery-toggle">
                    <div id="delivery-btn" class="btn btn-sm btn-ghost btn-block active" onclick="deliveryService()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                            <path
                                d="M208,112a47.81,47.81,0,0,0-16.93,3.09L165.93,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H152a8,8,0,0,0-6.91,12l11.65,20H99.26L82.91,60A8,8,0,0,0,76,56H48a8,8,0,0,0,0,16H71.41L85.12,95.51,69.41,117.06a48.13,48.13,0,1,0,12.92,9.44l11.59-15.9L125.09,164A8,8,0,1,0,138.91,156l-30.32-52h57.48l11.19,19.17A48,48,0,1,0,208,112ZM80,160a32,32,0,1,1-20.21-29.74l-18.25,25a8,8,0,1,0,12.92,9.42l18.25-25A31.88,31.88,0,0,1,80,160Zm128,32a32,32,0,0,1-22.51-54.72L201.09,164A8,8,0,1,0,214.91,156L199.3,129.21A32,32,0,1,1,208,192Z">
                            </path>
                        </svg>
                        Lieferung
                        <span class="text-sm">ca. 60 min</span>
                    </div>
                    <div id="pickup-btn" class="btn btn-sm btn-ghost btn-block" onclick="pickupService()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                            <path
                                d="M232,198.65V240a8,8,0,0,1-16,0V198.65A74.84,74.84,0,0,0,192,144v58.35a8,8,0,0,1-14.69,4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12,12,0,0,0-20.89,11.83l22.13,33.79a8,8,0,0,1-13.39,8.76l-22.26-34-.24-.38A28,28,0,0,1,176,176.4V64H160a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16v59.62A90.89,90.89,0,0,1,232,198.65ZM88,56a8,8,0,0,0-8-8H64A16,16,0,0,0,48,64V200a8,8,0,0,0,16,0V64H80A8,8,0,0,0,88,56Zm69.66,42.34a8,8,0,0,0-11.32,0L128,116.69V16a8,8,0,0,0-16,0V116.69L93.66,98.34a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,157.66,98.34Z">
                            </path>
                        </svg>
                        Abholung
                        <span class="text-sm">ca. 35 min</span>
                    </div>
                </div>
            </div>
            <div class="basket-main">
                <div id="empty-basket" class="empty-basket-status show">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z">
                        </path>
                    </svg>
                    <h3>Fülle deinen Warenkorb</h3>
                    <p class="text-sm">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
                </div>
                <div id="full-basket" class="full-basket-status hidden"></div>
                <div id="alert-delivery" class="text-xs alert hidden">
                    <div class="alert-delivery-value">
                        <p>Benötigter Betrag, um den Mindestbestellwert zu erreichen</p>
                        <p id="remainingAmount" class="alert-flex-item"></p>
                    </div>
                    <div class="alert-delivery-description">
                        <p>
                            Leider kannst du noch nicht bestellen. Bowls & Rolls liefert erst ab einem Mindestbestellwert von ${formatNumber(minimumOrderValue)} (exkl. Lieferkosten).
                        </p>
                    </div>
                </div>
            </div>
            <div class="basket-footer">
                <div id="basket-total" class="basket-total hidden"></div>
                <div id="checkout-container" class="order-button-container hidden">
                    <button id="order-button" class="btn btn-circle btn-block" onclick="processOrder()">
                        <h4>Bestellen</h4>
                    </button>
                </div>
            </div>
        </div>
    `;
}


function getBasketModalTemplate() {
    return `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Warenkorb</h2>
                <button class="btn btn-neutral btn-circle" onclick="closeBasketModal()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                        <path
                            d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z">
                        </path>
                    </svg>
                </button>
            </div>
            <div id="basket-content"></div>
        </div>
    `;
}


function getFooterTemplate() {
    return `
        <div class="footer-inner">
            <div class="footer-main">
                <a href="#" class="footer-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ff8000" viewBox="0 0 256 256">
                        <path
                            d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z">
                        </path>
                    </svg>
                    <span>BestellApp</span>
                </a>
                <figcaption>Gönn dir etwas gutes!</figcaption>
            </div>
            <figcaption class="made-with-section">
                <span>made with</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256">
                    <path
                        d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z">
                    </path>
                </svg>
                <span>R.G.</span>
            </figcaption>
        </div>
    `;
}
