document.addEventListener('DOMContentLoaded', () => {
    const openVideo = document.getElementById('open-video');
    const modal = document.getElementById('video-modal');
    const closeModal = document.querySelector('.close');

    // Открытие модального окна
    openVideo.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Закрытие модального окна по клику на крестик
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие модального окна по клику вне видео
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Закрытие модального окна при прокрутке
    window.addEventListener('scroll', () => {
        modal.style.display = 'none';
    });
});
