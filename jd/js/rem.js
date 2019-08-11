let documentElement = document.documentElement;

function callback() {
    let clientWidth = documentElement.clientWidth;
    clientWidth = clientWidth < 628 ? clientWidth : 320;
    documentElement.style.fontSize = clientWidth / 20 + 'px';
}

document.addEventListener('DOMContentLoaded', callback);
window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', callback);


