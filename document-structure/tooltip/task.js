document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    
    document.querySelectorAll('.has-tooltip').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (tooltip.textContent === this.getAttribute('title') && tooltip.classList.contains('tooltip_active')) {
                tooltip.classList.remove('tooltip_active');
                return;
            }
            
            tooltip.textContent = this.getAttribute('title');
            
            const linkRect = this.getBoundingClientRect();
            tooltip.style.left = `${linkRect.left}px`;
            tooltip.style.top = `${linkRect.bottom}px`;
            
            document.querySelectorAll('.tooltip').forEach(t => t.classList.remove('tooltip_active'));
            tooltip.classList.add('tooltip_active');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('has-tooltip')) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});