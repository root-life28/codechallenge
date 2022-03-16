const productBox = document.getElementById('productBox');
const right = document.getElementById('right');
const left = document.getElementById('left');

right.addEventListener('click', () => {
    productBox.style.transform = 'rotateY(180deg)';
});

left.addEventListener('click', () => {
    productBox.style.transform = 'rotateY(180deg)';
});
