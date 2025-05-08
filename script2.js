function toggleTheme() {
    document.body.style.backgroundColor = "blue";
    document.body.style.transition = 'all 1s';
}

function len() {
    document.body.style.backgroundColor = "black";
    document.body.style.transition = 'all 1s';
}

const video = document.getElementById('video');

video.addEventListener('mouseenter', () => video.play());
video.addEventListener('mouseleave', () => video.pause());

