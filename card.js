window.addEventListener("load", event => {
    function productHeading() {
        const product = {
            value: 125,
            media: [
                { type: 'image', src: 'images/save.jpg' },
                { type: 'image', src: 'images/slider01.jpg' },
                { type: 'image', src: 'images/slider02.jpg' },
                { type: 'image', src: 'images/slider03.jpg' },
                { type: 'image', src: 'images/slider04.jpg' },
                { type: 'image', src: 'images/slider05.jpg' },
                { type: 'video', src: 'video/IMG_5520.MOV' },
                 { type: 'video', src: 'video/IMG_5518.MOV' },
            ]
        };

        const btnAdd = document.querySelector('.btn.add'),
            btnContainer = document.querySelector('.btnContainer'),
            wrapper = document.querySelector('.wrapper'),
            itemNumber = document.querySelector('.itemNumber'),
            shoppingQuantity = document.querySelector('.shoppingQuantity'),
            inputQuantity = document.querySelector('.inputQuantity'),
            plus = document.querySelector('.plus'),
            minus = document.querySelector('.minus'),
            arrowDrop = document.querySelector('.arrowDrop'),
            dropdown = document.querySelector('.dropdown'),
            nav = document.querySelector('nav'),
            error = document.querySelector('.error'),
            shoppingIcon = document.querySelector('.shoppingIcon'),
            shoppingMenu = document.querySelector('.shoppingMenu'),
            emptyCart = document.querySelector('.emptyCart');

        let priceFinal = document.querySelector('.priceFinal'),
            priceOriginal = document.querySelector('.priceOriginal'),
            discount = null,
            sizeNumber = document.querySelector('.sizeNumber'),
            dropItem = document.querySelectorAll('.dropItem'),
            maxQuantity = 5,
            newMaxQuantity = maxQuantity;

        btnAdd.addEventListener('click', addItem);
        plus.addEventListener("click", plusQuantity);
        minus.addEventListener("click", minusQuantity);
        arrowDrop.addEventListener("click", openDrop);
        shoppingIcon.addEventListener("click", openShoppingCart);
        emptyCart.addEventListener("click", cleanCart);
        dropItem.forEach(function (el) {
            el.addEventListener("click", getSize);
        });

        window.addEventListener("resize", resize);
        window.onscroll = function () {
            if (window.pageYOffset >= 60) {
                nav.classList.add("fixed");
            } else {
                nav.classList.remove("fixed");
            }
        };

        function resize() {
            if (window.innerHeight > wrapper.offsetHeight) {
                btnContainer.classList.remove('fixedBtn');
            } else {
                btnContainer.classList.add('fixedBtn');
            }
            parallax();
        }

        function parallax() {
            if (window.innerWidth > 800) {
                var scene = document.querySelectorAll('.scene');
                scene.forEach(pic => {
                    var parallax = new Parallax(pic);
                });
            }
        }

        function getDiscount() {
            priceOriginal.innerText = product.value + "€";
            discount = product.value - (product.value * (30 / 100));
            priceFinal.innerText = discount + "€";
        }

        function getPrice() {
            priceFinal.innerText = (discount * inputQuantity.value).toFixed(2) + "€";
            priceOriginal.innerText = (product.value * inputQuantity.value).toFixed(2) + "€";
            setTimeout(() => {
                priceFinal.classList.remove('anime');
            }, 400);
        }

        function plusQuantity() {
            if (inputQuantity.value < maxQuantity) {
                inputQuantity.value = parseInt(inputQuantity.value) + 1;
                priceFinal.classList.add('anime');
            }
            getPrice();
        }

        function minusQuantity() {
            if (inputQuantity.value > 1) {
                inputQuantity.value = parseInt(inputQuantity.value) - 1;
                priceFinal.classList.add('anime');
            }
            getPrice();
        }

        function addItem() {
            let cenas = parseInt(itemNumber.innerText) + parseInt(inputQuantity.value);
            if (cenas <= newMaxQuantity) {
                itemNumber.style.display = "";
                itemNumber.innerText = cenas; // Обновляем itemNumber
                itemNumber.classList.add("addItem");
                error.style.display = "none";
            } else {
                error.style.display = "flex";
            }
            setTimeout(() => {
                itemNumber.class
                itemNumber.classList.remove("addItem");
            }, 700);
        }

        function openDrop() {
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            } else {
                dropdown.classList.add('open');
            }
        }

        function getSize(e) {
            sizeNumber.innerText = e.currentTarget.innerText;
            openDrop();
        }

        function openShoppingCart() {
            if (itemNumber.innerText != "0") {
                if (shoppingMenu.classList.contains('openShopping')) {
                    shoppingMenu.classList.remove('openShopping');
                } else {
                    shoppingMenu.classList.add('openShopping');
                }
            }
        }

        function cleanCart() {
            shoppingMenu.classList.remove('openShopping');
            itemNumber.style.display = "none";
            itemNumber.classList.remove('addItem');
            itemNumber.innerText = "0";
        }

        product.media.forEach(function (el) {
            let template = '';
            let template2 = '';

            if (el.type === 'image') {
                template = `
                    <div class="swiper-slide">
                        <div class="scene" data-hover-only="false"> 
                            <img src="${el.src}" data-depth="0.5">
                            <img src="${el.src}" data-depth="1" class="shadow">
                        </div>
                    </div>`;

                template2 = `
                    <div class="swiper-slide">
                        <img src="${el.src}">
                    </div>`;
            } else if (el.type === 'video') {
                template = `
                    <div class="swiper-slide">
                        <video controls>
                            <source src="${el.src}" type="video/mp4">
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>`;
            }

            // Вставляем шаблоны в соответствующие контейнеры
            document.querySelector('.galleryMain .swiper-wrapper').insertAdjacentHTML('beforeend', template);
            document.querySelector('.galleryThumbs .swiper-wrapper').insertAdjacentHTML('beforeend', template2);
        });

        var galleryThumbs = new Swiper('.galleryThumbs', {
            spaceBetween: 0,
            slidesPerView: 'auto',
            loop: false,
            allowTouchMove: false,
            allowSlidePrev: false,
            allowSlideNext: false,
        });

        var galleryMain = new Swiper('.galleryMain', {
            spaceBetween: 300,
            speed: 500,
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            effect: "coverflow",
            coverflowEffect: {
                rotate: 50,
                slideShadows: false,
                depth: 200,
                stretch: 50,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });

        getDiscount();
        parallax();
        resize();
    }

    productHeading();
});
