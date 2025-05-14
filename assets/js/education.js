// Education 3D Card Flip Animation
document.addEventListener('DOMContentLoaded', function() {
    // Get all education 3D cards
    const educationCards = document.querySelectorAll('.education-3d-card');
    
    // Add click event listeners to each card
    educationCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Implement circular stats animation when in view
    const educationStats = document.querySelector('.education-stats-container');
    if (educationStats) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate the circle paths when they come into view
                    const circles = document.querySelectorAll('.circle');
                    circles.forEach(circle => {
                        // The stroke-dasharray has already been set in CSS
                        // This will trigger the animation defined in CSS
                        circle.style.animation = 'none';
                        setTimeout(() => {
                            circle.style.animation = 'progress 1.5s ease-out forwards';
                        }, 10);
                    });
                    
                    // We only want to animate once
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(educationStats);
    }
    
    // Certificate cards hover effect
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create a subtle elevation effect for other cards
            certificateCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.transform = 'scale(0.98)';
                    otherCard.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset all cards
            certificateCards.forEach(otherCard => {
                otherCard.style.transform = '';
                otherCard.style.opacity = '';
            });
        });
    });
    
    // Add CSS variable for accent color RGB for opacity control
    const root = document.documentElement;
    const accentColor = getComputedStyle(root).getPropertyValue('--accent-color').trim();
    
    // Convert hex to RGB
    let rgb = hexToRgb(accentColor);
    if (rgb) {
        root.style.setProperty('--accent-color-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    }
    
    function hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
        
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
});
