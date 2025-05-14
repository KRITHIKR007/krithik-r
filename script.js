// Import modules
import { optimizeAllImages } from './assets/js/webp-support.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen after a short delay
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1000);
    
    initThemeToggle();
    initAnimation();
    init3DCube();
    initializeFormHandling();
    initScrollReveal();
    initActiveNavLinkHighlighting();
    addImageErrorHandlers();
    initKeyboardNavigation();
    
    // Load project showcase functionality
    loadProjectShowcaseModule();
    
    // Load education module
    loadEducationModule();
    
    // Optimize images for WebP support
    optimizeAllImages();
});

// Load Project Showcase Module
function loadProjectShowcaseModule() {
    const script = document.createElement('script');
    script.src = 'assets/js/project-showcase.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    
    // Add the project showcase CSS if not already included
    if (!document.querySelector('link[href="assets/project-showcase.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'assets/project-showcase.css';
        document.head.appendChild(link);
    }
}

// Add error handlers for images to prevent broken images
function addImageErrorHandlers() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('onerror')) {
            img.onerror = function() {
                this.src = 'assets/images/placeholder.svg';
                this.alt = 'Image not found';
                this.style.objectFit = 'contain';
                this.style.background = '#1a1a1a';
            };
        }
    });
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon('light');
    } else if (savedTheme === 'high-contrast') {
        document.body.classList.add('high-contrast-theme');
        updateThemeIcon('high-contrast');
    } else if (!savedTheme && !prefersDarkScheme.matches) {
        document.body.classList.add('light-theme');
        updateThemeIcon('light');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            // Switch to high contrast
            document.body.classList.remove('light-theme');
            document.body.classList.add('high-contrast-theme');
            localStorage.setItem('theme', 'high-contrast');
            updateThemeIcon('high-contrast');
        } else if (document.body.classList.contains('high-contrast-theme')) {
            // Switch to dark
            document.body.classList.remove('high-contrast-theme');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        } else {
            // Switch to light
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        }
    });
    
    // Update theme icon based on current theme
    function updateThemeIcon(theme) {
        const moonIcon = themeToggle.querySelector('.fa-moon');
        const sunIcon = themeToggle.querySelector('.fa-sun');
        
        // Clear existing icons
        themeToggle.innerHTML = '';
        
        // Add appropriate icon
        if (theme === 'light') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else if (theme === 'high-contrast') {
            themeToggle.innerHTML = '<i class="fas fa-adjust"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
}

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
            
            // Get form fields
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
            
            // Simple validation
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                highlightInvalidField(nameInput, 'Please enter your name');
                isValid = false;
            } else {
                resetFieldHighlight(nameInput);
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                highlightInvalidField(emailInput, 'Please enter a valid email address');
                isValid = false;
            } else {
                resetFieldHighlight(emailInput);
            }
            
            if (!messageInput.value.trim()) {
                highlightInvalidField(messageInput, 'Please enter your message');
                isValid = false;
            } else {
                resetFieldHighlight(messageInput);
            }
            
            if (isValid) {
                // Show success message
                showFormMessage(contactForm, 'Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset();
            }
        });
    }
    
    // Add helper functions for form validation
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    
    function highlightInvalidField(field, message) {
        field.classList.add('invalid');
        
        // Create or update error message
        let errorMsg = field.nextElementSibling;
        if (!errorMsg || !errorMsg.classList.contains('error-message')) {
            errorMsg = document.createElement('div');
            errorMsg.classList.add('error-message');
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
        }
        errorMsg.textContent = message;
    }
    
    function resetFieldHighlight(field) {
        field.classList.remove('invalid');
        const errorMsg = field.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
        }
    }
    
    function showFormMessage(form, message, type) {
        // Remove any existing messages
        const existingMsg = form.querySelector('.form-message');
        if (existingMsg) existingMsg.remove();
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.classList.add('form-message', type);
        messageEl.textContent = message;
        
        // Insert before the form
        form.parentNode.insertBefore(messageEl, form);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageEl.classList.add('fade-out');
            setTimeout(() => messageEl.remove(), 500);
        }, 5000);
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
    sr.reveal('.project-filter', { origin: 'top', distance: '30px', delay: 300 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.skill-category', { interval: 150 });
    sr.reveal('.achievement-card', { interval: 150 });
    sr.reveal('.internship-card', { interval: 150 });
    sr.reveal('.education-card', { interval: 200 });
    sr.reveal('.contact-info, .contact-form', { interval: 200 });
}

// Project 3D Card Interactions
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
            const href = link.getAttribute('href');
            if (href && href.substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Keyboard Navigation Detection
function initKeyboardNavigation() {
    let usingKeyboard = false;
    
    // Add keyboard focus class to body when tab key is used
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            usingKeyboard = true;
            document.body.classList.add('keyboard-focus');
        }
    });
    
    // Remove keyboard focus class when mouse is used
    window.addEventListener('mousedown', function() {
        if (usingKeyboard) {
            usingKeyboard = false;
            document.body.classList.remove('keyboard-focus');
        }
    });
}

// Contact Form Validation (used directly in HTML)
function validateContactForm() {
    // If the new form validation is active, skip this function
    if (document.querySelector('.character-counter')) {
        // New contact.js validation is handling the form
        return false;
    }
    
    const form = document.getElementById('contactForm');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formStatus = document.getElementById('formStatus');
    
    // Reset previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formStatus.textContent = '';
    
    // Simple validation
    let isValid = true;
    
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name';
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }
    
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email address';
        emailInput.classList.add('error');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }
    
    if (!messageInput.value.trim()) {
        messageError.textContent = 'Please enter your message';
        messageInput.classList.add('error');
        isValid = false;
    } else {
        messageInput.classList.remove('error');
    }
    
    // If the form is valid, simulate a submission
    if (isValid) {
        // Add loading indicator
        const submitBtn = form.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const originalText = btnText.textContent;
        
        btnText.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate server processing
        setTimeout(() => {
            try {
                localStorage.setItem('contactFormData', JSON.stringify({
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value,
                    timestamp: new Date().toISOString()
                }));
                
                // Show success message (optional - we're redirecting anyway)
                formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                formStatus.classList.add('success');
                
                // Reset form fields
                form.reset();
                
                // Restore button text
                btnText.textContent = originalText;
                submitBtn.disabled = false;
                
                // Redirect to thank you page after a short delay
                setTimeout(() => {
                    window.location.href = 'thank-you.html';
                }, 1000);
                
            } catch (e) {
                console.error('Error storing form data:', e);
                formStatus.textContent = 'Something went wrong. Please try again.';
                formStatus.classList.add('error');
                
                // Restore button text
                btnText.textContent = originalText;
                submitBtn.disabled = false;
            }
        }, 1500); // Simulate network delay
        
        // Prevent form submission since we're handling it via JS
        return false;
    }
    
    return false; // Prevent form submission if there are errors
    return isValid;
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function highlightInvalidField(field, message) {
    field.classList.add('invalid');
    
    // Create or update error message
    let errorMsg = field.nextElementSibling;
    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
        errorMsg = document.createElement('div');
        errorMsg.classList.add('error-message');
        field.parentNode.insertBefore(errorMsg, field.nextSibling);
    }
    errorMsg.textContent = message;
}

function resetFieldHighlight(field) {
    field.classList.remove('invalid');
    const errorMsg = field.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.remove();
    }
}

// Contact Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive hover effect to contact methods
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        method.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Form input animation
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('input-focused');
            }
        });
    });
    
    // Animate social icons on hover
    const socialLinks = document.querySelectorAll('.social-links-grid a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)';
            this.style.backgroundColor = 'var(--accent-color)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1) rotate(0)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        });
    });
    
    // Contact form field validation with visual feedback
    const contactFormElements = document.querySelectorAll('#contactForm input, #contactForm textarea');
    contactFormElements.forEach(element => {
        element.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.add('has-content');
                this.classList.remove('error');
                
                // Clear any error message
                const errorElement = document.getElementById(this.id + 'Error');
                if (errorElement) {
                    errorElement.textContent = '';
                }
            } else {
                this.classList.remove('has-content');
            }
        });
    });
});