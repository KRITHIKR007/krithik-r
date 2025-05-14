// Load Education Module
function loadEducationModule() {
    // Include education JS file
    const script = document.createElement('script');
    script.src = 'assets/js/education.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    
    // Initialize 3D card animations when script loads
    script.onload = function() {
        console.log('Education module loaded successfully');
        
        // Get all education 3D cards
        const educationCards = document.querySelectorAll('.education-3d-card');
        
        // Add click event listeners to each card
        educationCards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    };
}
