// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const navContainer = document.querySelector('.nav-container');
    if (!navContainer) return;
    
    // Add mobile menu button if it doesn't exist
    if (!document.querySelector('.mobile-menu-toggle')) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-toggle';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        navContainer.appendChild(mobileMenuBtn);
        
        // Add mobile menu container
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.add('desktop-menu');
            
            // Clone nav links for mobile menu
            const mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = navLinks.innerHTML;
            navContainer.after(mobileMenu);
            
            // Toggle mobile menu on button click
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
                
                if (mobileMenuBtn.classList.contains('active')) {
                    mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
            
            // Close mobile menu when clicking a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }
    }
});
