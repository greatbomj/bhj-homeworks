document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const progress = document.getElementById('progress');
    const fileNameSpan = document.querySelector('.input__wrapper-desc');
  
    fileInput.addEventListener('change', function() {
      if (this.files.length > 0) {
        fileNameSpan.textContent = this.files[0].name;
      } else {
        fileNameSpan.textContent = 'Имя файла...';
      }
    });
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      if (!fileInput.files.length) {
        alert('Пожалуйста, выберите файл');
        return;
      }
  
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
  
      xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
          const percentComplete = event.loaded / event.total;
          progress.value = percentComplete;
        }
      };
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          alert('Файл успешно загружен');
          progress.value = 0;
          form.reset();
          fileNameSpan.textContent = 'Имя файла...';
        } else {
          alert('Ошибка при загрузке файла');
          progress.value = 0;
        }
      };
  
      xhr.onerror = function() {
        alert('Ошибка соединения');
        progress.value = 0;
      };
  
      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
      xhr.send(formData);
    });
  });