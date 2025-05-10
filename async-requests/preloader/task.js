document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    
    function createCurrencyElement(charCode, value) {
      const item = document.createElement('div');
      item.className = 'item';
      
      const codeElement = document.createElement('div');
      codeElement.className = 'item__code';
      codeElement.textContent = charCode;
      
      const valueElement = document.createElement('div');
      valueElement.className = 'item__value';
      valueElement.textContent = value;
      
      const currencyElement = document.createElement('div');
      currencyElement.className = 'item__currency';
      currencyElement.textContent = 'руб.';
      
      item.appendChild(codeElement);
      item.appendChild(valueElement);
      item.appendChild(currencyElement);
      
      return item;
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const valutes = response.response.Valute;
        
        itemsContainer.innerHTML = '';
        
        for (const key in valutes) {
          if (valutes.hasOwnProperty(key)) {
            const valute = valutes[key];
            const currencyElement = createCurrencyElement(valute.CharCode, valute.Value);
            itemsContainer.appendChild(currencyElement);
          }
        }
        
        loader.classList.remove('loader_active');
      }
    };
    
    xhr.onerror = function() {
      loader.classList.remove('loader_active');
      itemsContainer.textContent = 'Ошибка загрузки данных';
    };
    
    xhr.send();
  });