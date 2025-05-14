// Modern interactive contact form functionality

document.addEventListener('DOMContentLoaded', () => {
    // Wait a moment for any other initialization to complete
    setTimeout(() => {
        initContactAnimations();
        initContactForm();
        initFloatingLabels();
        initMapInteraction();
    }, 100);
});

// Initialize reveal animations for contact section elements
function initContactAnimations() {
    // Add ScrollReveal animations
    ScrollReveal().reveal('.contact-method', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100,
        duration: 800,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        reset: false
    });

    ScrollReveal().reveal('.contact-form-container', {
        delay: 400,
        distance: '30px',
        origin: 'bottom',
        duration: 1000,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        reset: false
    });
    
    // Animate form elements when form is in view
    const formElements = document.querySelectorAll('.form-group, .submit-btn');
    ScrollReveal().reveal(formElements, {
        delay: 500,
        interval: 100,
        distance: '20px',
        origin: 'bottom',
        duration: 800,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        reset: false
    });
    
    // Add visible class to animate contact elements with CSS transitions
    const animatedElements = document.querySelectorAll('.contact-animate');
    if (animatedElements.length > 0) {
        setTimeout(() => {
            animatedElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 100);
            });
        }, 300);
    }
}

// Initialize interactive form with validation and feedback
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Check if elements exist to prevent errors
    if (!contactForm || !formStatus || !submitBtn) return;
    
    // Remove any existing event listeners to avoid duplication
    const newContactForm = contactForm.cloneNode(true);
    contactForm.parentNode.replaceChild(newContactForm, contactForm);
    
    // Re-assign the contactForm variable to the new form element
    const updatedContactForm = document.getElementById('contactForm');
    
    // Setup form submission with validation
    if (updatedContactForm) {
        // Add real-time validation for input fields
        const formInputs = updatedContactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            // Real-time validation as user types
            input.addEventListener('input', () => {
                validateField(input);
                
                // Check if all fields are valid to enable/disable submit button
                const allValid = Array.from(formInputs).every(field => field.validity.valid);
                submitBtn.classList.toggle('disabled', !allValid);
            });
            
            // Validation on blur (when user leaves input field)
            input.addEventListener('blur', () => {
                validateField(input);
            });
            
            // Special handling for textarea to show character count
            if (input.tagName === 'TEXTAREA') {
                const maxLength = 500; // Set your desired max length
                input.setAttribute('maxlength', maxLength);
                
                // Check if character counter already exists
                let characterCounter = input.parentNode.querySelector('.character-counter');
                if (!characterCounter) {
                    characterCounter = document.createElement('div');
                    characterCounter.className = 'character-counter';
                    characterCounter.textContent = `0/${maxLength}`;
                    input.parentNode.appendChild(characterCounter);
                }
                
                input.addEventListener('input', () => {
                    const currentLength = input.value.length;
                    characterCounter.textContent = `${currentLength}/${maxLength}`;
                    
                    // Change color when approaching limit
                    if (currentLength > maxLength * 0.8) {
                        characterCounter.classList.add('approaching-limit');
                    } else {
                        characterCounter.classList.remove('approaching-limit');
                    }
                });
            }
        });
        
        // Form submission handling
        updatedContactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate all fields one final time
            let isValid = true;
            formInputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                return false;
            }
              // Show loading state
            submitBtn.classList.add('loading');
            const btnText = submitBtn.querySelector('.btn-text');
            const originalBtnContent = submitBtn.innerHTML;
            btnText.textContent = 'Sending...';
            
            // Replace paper plane icon with spinner
            const icon = submitBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-paper-plane');
                icon.classList.add('fa-spinner');
            }
            
            // Simulate form submission (replace with your actual form submission)
            try {
                await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate server delay
                
                // Store form data in localStorage, similar to original script
                localStorage.setItem('contactFormData', JSON.stringify({
                    name: updatedContactForm.querySelector('#name').value,
                    email: updatedContactForm.querySelector('#email').value,
                    message: updatedContactForm.querySelector('#message').value,
                    timestamp: new Date().toISOString()
                }));
                
                // Show success message
                formStatus.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Your message has been sent successfully!</div>';
                formStatus.classList.add('success');
                formStatus.classList.add('show');
                
                // Reset form
                updatedContactForm.reset();
                
                // Reset floating labels
                document.querySelectorAll('.input-wrapper').forEach(wrapper => {
                    wrapper.classList.remove('has-content');
                });
                
                // Redirect to thank you page after a short delay
                setTimeout(() => {
                    window.location.href = 'thank-you.html';
                }, 1000);
                
            } catch (error) {
                // Show error message
                formStatus.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-circle"></i> There was a problem sending your message. Please try again.</div>';
                formStatus.classList.add('error');
                formStatus.classList.add('show');            } finally {
                // Reset button state
                submitBtn.classList.remove('loading');
                const icon = submitBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-spinner');
                    icon.classList.add('fa-paper-plane');
                }
                submitBtn.querySelector('.btn-text').textContent = 'Send Message';
                
                // Hide status message after some time (if not redirecting)
                setTimeout(() => {
                    formStatus.classList.remove('show');
                }, 5000);
            }
            
            return false;
        });
    }
}

// Field validation helper function
function validateField(field) {
    const errorElement = document.getElementById(`${field.id}Error`);
    if (!errorElement) return true; // Skip validation if error element doesn't exist
    
    let isValid = field.validity.valid;
    
    // Clear previous error
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    field.classList.remove('is-invalid');
    
    // Check for different validation errors
    if (field.validity.valueMissing) {
        errorElement.textContent = `${field.placeholder} is required`;
        isValid = false;
    } else if (field.validity.typeMismatch && field.type === 'email') {
        errorElement.textContent = 'Please enter a valid email address';
        isValid = false;
    } else if (field.validity.tooShort) {
        errorElement.textContent = `${field.placeholder} must be at least ${field.minLength} characters`;
        isValid = false;
    }
    
    // Add additional custom validation as needed
    if (field.id === 'message' && field.value.length < 10 && field.value.length > 0) {
        errorElement.textContent = 'Your message is too short. Please provide more details.';
        isValid = false;
    }
    
    // Display error message if invalid
    if (!isValid) {
        errorElement.style.display = 'block';
        field.classList.add('is-invalid');
    }
    
    return isValid;
}

// Initialize floating labels for inputs
function initFloatingLabels() {
    const inputWrappers = document.querySelectorAll('.input-wrapper');
    
    if (!inputWrappers || inputWrappers.length === 0) return;
    
    inputWrappers.forEach(wrapper => {
        const input = wrapper.querySelector('input, textarea');
        if (!input) return;
        
        // Check initial state
        if (input.value.trim() !== '') {
            wrapper.classList.add('has-content');
        }
        
        // Remove any existing event listeners to avoid duplicates
        const newInput = input.cloneNode(true);
        input.parentNode.replaceChild(newInput, input);
        
        // Get the replaced input
        const updatedInput = wrapper.querySelector('input, textarea');
        
        // Handle input events
        updatedInput.addEventListener('focus', () => {
            wrapper.classList.add('focused');
        });
        
        updatedInput.addEventListener('blur', () => {
            wrapper.classList.remove('focused');
            if (updatedInput.value.trim() !== '') {
                wrapper.classList.add('has-content');
            } else {
                wrapper.classList.remove('has-content');
            }
        });
        
        // Handle input changes
        updatedInput.addEventListener('input', () => {
            if (updatedInput.value.trim() !== '') {
                wrapper.classList.add('has-content');
            } else {
                wrapper.classList.remove('has-content');
            }
        });
    });
}

// Initialize interactive map
function initMapInteraction() {
    const mapContainer = document.getElementById('contactMap');
    
    if (mapContainer) {
        // Initialize the map (using leaflet.js as an example)
        if (typeof L !== 'undefined') {
            const map = L.map('contactMap').setView([13.0827, 80.2707], 13); // Chennai coordinates
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            // Add marker for location
            const marker = L.marker([13.0827, 80.2707]).addTo(map);
            marker.bindPopup("<b>Krithik R</b><br>Chennai, India").openPopup();
            
            // Add hover effect for marker
            marker.on('mouseover', function() {
                this.openPopup();
                this._icon.classList.add('marker-pulse');
            });
            
            marker.on('mouseout', function() {
                this._icon.classList.remove('marker-pulse');
            });
            
            // Handle map load complete
            map.on('load', () => {
                mapContainer.classList.add('map-loaded');
            });
        }
    }
}
