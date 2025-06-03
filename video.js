document.addEventListener('DOMContentLoaded', () => {
    const openVideo = document.getElementById('open-video1');
     const openVideo2 = document.getElementById('open-video2');
    const modal = document.getElementById('video-modal1');
    const modal2 = document.getElementById('video-modal2');
    const closeModal = document.querySelector('.close');
    const closeModal2 = document.querySelector('.close2');

    // Открытие модального окна
    openVideo.addEventListener('click', () => {
        modal.style.display = 'block';
    });

      openVideo2.addEventListener('click', () => {
        modal2.style.display = 'block';
    });


    // Закрытие модального окна по клику на крестик
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    closeModal2.addEventListener('click', () => {
        modal2.style.display = 'none';
    });

    // Закрытие модального окна по клику вне видео
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modal2.style.display = 'none';
        }
    });

    // Закрытие модального окна при прокрутке
    window.addEventListener('scroll', () => {
        modal.style.display = 'none';
        modal2.style.display = 'none';
    });
});
