// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initAnimation();
    init3DCube();
    initializeFormHandling();
    initScrollReveal();
    initProjectCardInteractions();
    initActiveNavLinkHighlighting();
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

// ScrollReveal Initialization
function initScrollReveal() {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-out'
    });
    
    sr.reveal('.section-title', { origin: 'top' });
    sr.reveal('.section-subtitle', { delay: 300 });
    sr.reveal('.project-3d-card', { interval: 200 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.skill-category', { interval: 150 });
    sr.reveal('.achievement-card', { interval: 150 });
    sr.reveal('.internship-card', { interval: 150 });
    sr.reveal('.education-card', { interval: 200 });
    sr.reveal('.contact-info, .contact-form', { interval: 200 });
}

// Project 3D Card Interactions
function initProjectCardInteractions() {
    const projectCards = document.querySelectorAll('.project-3d-card');
    
    projectCards.forEach(card => {
        // Manual flip control for better user experience
        const cardInner = card.querySelector('.card-inner');
        const viewDetailsBtn = card.querySelector('.view-details');
        const flipBackBtn = card.querySelector('.flip-back');
        
        // Flip to back when "View Details" is clicked
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                cardInner.style.transform = 'rotateY(180deg)';
            });
        }
        
        // Flip back to front when "Back" button is clicked
        if (flipBackBtn) {
            flipBackBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                cardInner.style.transform = 'rotateY(0deg)';
            });
        }
        
        // Make card "breathe" slightly on hover for more dynamic feel
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-10px)';
            this.querySelector('.project-preview img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0)';
            // Only reset image scale if card is not flipped
            if (cardInner.style.transform !== 'rotateY(180deg)') {
                this.querySelector('.project-preview img').style.transform = 'scale(1)';
            }
        });
    });
}

// Active Navigation Link Highlighting
function initActiveNavLinkHighlighting() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}