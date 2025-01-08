// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initAnimation();
    init3DCube();
    initializeFormHandling();
});

// Animation Configuration
function initAnimation() {
    const animationContainer = document.getElementById('lottie-container');
    if (animationContainer) {
        const animationData = {
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/animations/developer.json'
        };
        return lottie.loadAnimation(animationData);
    }
}

// 3D Cube Animation with Auto-rotation and Cursor Interaction
function init3DCube() {
    const cube = document.querySelector('.cube');
    const wrapper = document.querySelector('.cube-wrapper');
    
    if (!cube || !wrapper) return;

    let autoRotateX = 0;
    let autoRotateY = 0;
    let autoRotateZ = 0;
    let isHovered = false;
    let cursorRotateX = 0;
    let cursorRotateY = 0;

    // Auto rotation animation
    function autoRotate() {
        if (!isHovered) {
            autoRotateX += 0.3;
            autoRotateY += 0.5;
            autoRotateZ += 0.2;
            
            cube.style.transform = `rotateX(${autoRotateX}deg) rotateY(${autoRotateY}deg) rotateZ(${autoRotateZ}deg)`;
            requestAnimationFrame(autoRotate);
        }
    }

    // Start auto rotation
    autoRotate();

    // Update cube rotation based on cursor position
    function updateRotation(e) {
        if (!isHovered) return;
        
        const rect = wrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        cursorRotateY = ((mouseX - centerX) / rect.width) * 45;
        cursorRotateX = ((mouseY - centerY) / rect.height) * 45;
        
        cube.style.transform = `rotateX(${cursorRotateX}deg) rotateY(${cursorRotateY}deg)`;
    }

    // Handle hover states
    wrapper.addEventListener('mouseenter', () => {
        isHovered = true;
        cube.style.transition = 'transform 0.3s ease';
    });

    wrapper.addEventListener('mouseleave', () => {
        isHovered = false;
        cube.style.transition = 'transform 0.3s ease';
        autoRotate(); // Resume auto rotation
    });

    wrapper.addEventListener('mousemove', updateRotation);
}

// Form Handling
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
} 