const heart = document.querySelector('.heart');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    heart.style.left = `${mouseX}px`;
    heart.style.top = `${mouseY}px`;
});
