document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');
        
        value.addEventListener('click', function() {
            list.classList.toggle('dropdown__list_active');
        });
        
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault(); 
                
                const link = this.querySelector('.dropdown__link');
                value.textContent = link.textContent;
                
                list.classList.remove('dropdown__list_active');
            });
        });
    });
});