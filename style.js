const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popupBtn');
const closeBtn = document.querySelector('.close');

popupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
