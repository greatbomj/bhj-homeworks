document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');
    
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
        });
    }
    
    checkVisibility();
    
    window.addEventListener('scroll', checkVisibility);
});