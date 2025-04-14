function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            document.getElementById('dead').textContent = dead;
            
            if (dead === 10) {
                alert('Поздравляем! Вы победили!');
                resetGame();
            }
        } else {
            lost++;
            document.getElementById('lost').textContent = lost;
            
            if (lost === 5) {
                alert('Игра окончена! Вы проиграли!');
                resetGame();
            }
        }
    };
}

function resetGame() {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}