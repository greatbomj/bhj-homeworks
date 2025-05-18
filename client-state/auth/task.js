document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin__form');
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const storageKey = 'authorizedUser';

    const savedUser = localStorage.getItem(storageKey);
    if (savedUser) {
        showWelcome(JSON.parse(savedUser).user_id);
    }

    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(signinForm);
        
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem(storageKey, JSON.stringify(data));
                showWelcome(data.user_id);
                signinForm.reset();
            } else {
                alert('Неверный логин/пароль');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при авторизации');
        });
    });

    function showWelcome(userId) {
        userIdSpan.textContent = userId;
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
    }

});