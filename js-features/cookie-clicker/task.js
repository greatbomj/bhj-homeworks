const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');

cookie.onclick = function() {
    let clicks = parseInt(clickCounter.textContent);
    clickCounter.textContent = clicks + 1;
    
    if (cookie.width === 200) {
        cookie.width = 180;
    } else {
        cookie.width = 200;
    }
};