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

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

if (btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

var modalBrend = document.getElementById('myModalBrend');
var btnBrend = document.getElementById("myBtnBrend");
var spanBrend = document.getElementsByClassName("closeBrend")[0];

if (btnBrend) {
    btnBrend.onclick = function() {
        modalBrend.style.display = "block";
    }
}

if (spanBrend) {
    spanBrend.onclick = function() {
        modalBrend.style.display = "none";
    }
}

// Объединенный обработчик клика по окну
window.onclick = function(event) {
    if (event.target == modal || event.target == modalBrend) {
        if (modal) {
            modal.style.display = "none";
        }
        if (modalBrend) {
            modalBrend.style.display = "none";
        }
    }
}
document.getElementById('office-place').addEventListener('click', function() {
  // Можно добавить дополнительные действия здесь
  location.href = '#contact'; // Переход к якорю
});
