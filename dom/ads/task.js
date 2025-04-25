document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = Array.from(cases).findIndex(c => c.classList.contains('rotator__case_active'));
        currentIndex = currentIndex === -1 ? 0 : currentIndex;
        
        function rotate() {
            cases[currentIndex].classList.remove('rotator__case_active');
            
            currentIndex = (currentIndex + 1) % cases.length;
            
            const nextCase = cases[currentIndex];
            const speed = nextCase.dataset.speed || 1000;
            const color = nextCase.dataset.color || 'black';
            
            nextCase.style.color = color;
            nextCase.classList.add('rotator__case_active');
            
            setTimeout(rotate, speed);
        }
        
        const initialSpeed = cases[currentIndex].dataset.speed || 1000;
        setTimeout(rotate, initialSpeed);
    });
});