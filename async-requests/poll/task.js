document.addEventListener('DOMContentLoaded', function() {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
    
    function createAnswerButtons(answers) {
      pollAnswers.innerHTML = '';
      
      answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answer;
        
        button.addEventListener('click', function() {
          alert('Спасибо, ваш голос засчитан!');
        });
        
        pollAnswers.appendChild(button);
      });
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        
        pollTitle.textContent = response.data.title;
        
        createAnswerButtons(response.data.answers);
      } else {
        pollTitle.textContent = 'Ошибка загрузки опроса';
      }
    };
    
    xhr.onerror = function() {
      pollTitle.textContent = 'Ошибка соединения';
    };
    
    xhr.send();
  });