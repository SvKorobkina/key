var sliderSelector = '.swiper-container';
var swiper = new Swiper(sliderSelector, {
    init: true,
    loop: true,
    speed: 800,
    slidesPerView: 1, // По умолчанию 1 слайд
    spaceBetween: 10, // Расстояние между слайдами
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Когда ширина экрана >= 768px
        768: {
            slidesPerView: 2, // Показывать 3 слайда
            spaceBetween: 10, // Расстояние между слайдами
        },
    },
});


var modalAuth = document.getElementById("myModal");
var modalBrend = document.getElementById("myModalBrend");
var moneyModal = document.getElementById("moneyModal");


var btn = document.getElementById("myBtn");
var btnBrend = document.getElementById("myBtnBrend");
var moneyBtnBrend = document.getElementById("MoneyBtnBrend");

var span = document.getElementsByClassName("close__price1")[0];
var spanBrend = document.getElementsByClassName("closeBrend")[0];
var spanMoney = document.getElementsByClassName("close__price2")[0];
var buttons = document.querySelectorAll('.btn-primary.choise');




btn.onclick = function() {
    modalAuth.style.display = "block";
}

btnBrend.onclick = function() {
    modalBrend.style.display = "block";
}

moneyBtnBrend.onclick = function() {
    moneyModal.style.display = "block";
}

span.onclick = function() {
    modalAuth.style.display = "none";
}


spanBrend.onclick = function() {
    modalBrend.style.display = "none";
}

spanMoney.onclick = function() {
    moneyModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalAuth) {
        modalAuth.style.display = "none";
    }
    if (event.target == modalBrend) {
        modalBrend.style.display = "none";
    }
    if (event.target == moneyModal) {
        moneyModal.style.display = "none";
    }
}
/*
window.addEventListener('scroll', function() {
    if (modalAuth.style.display === "block" || modalBrend.style.display === "block") {
        modalAuth.style.display = "none";
        modalBrend.style.display = "none";
    }
});


if (spanBrend) {
    spanBrend.onclick = function() {
        modalBrend.style.display = "none";
    }
}
*/

document.getElementById('office-place').addEventListener('click', function() {

    location.href = '#contact'; // Переход к якорю
});

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Закрытие модальных окон
        if (modalAuth) {
            modalAuth.style.display = 'none'; // Или используйте метод закрытия, если он есть
        }
        if (modalBrend) {
            modalBrend.style.display = 'none'; // Или используйте метод закрытия, если он есть
        }
        if (moneyModal) {
            moneyModal.style.display = 'none'; // Или используйте метод закрытия, если он есть
        }

        // Перенаправление на якорь #contacts
        window.location.hash = 'contacts';
    });
});