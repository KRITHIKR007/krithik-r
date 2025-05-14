// Certificate Tab Filtering Functionality
document.addEventListener('DOMContentLoaded', function() {
    const certTabs = document.querySelectorAll('.cert-tab');
    const certCards = document.querySelectorAll('.certificate-card');
    
    // Function to filter certificates
    function filterCertificates(category) {
        certCards.forEach(card => {
            const cardCategory = card.dataset.category;
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex';
                // Reset animation to trigger it again
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = '';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Add click event to category tabs
    certTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            certTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Filter certificates based on selected category
            const category = this.dataset.category;
            filterCertificates(category);
        });
    });
    
    // Initialize with "All" selected
    document.querySelector('.cert-tab[data-category="all"]').click();
});

// Certificate Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const certCards = document.querySelectorAll('.certificate-card');
    
    certCards.forEach(card => {
        // Add subtle movement on hover
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate rotation based on mouse position
            const midX = rect.width / 2;
            const midY = rect.height / 2;
            
            // Limit rotation to a small amount (max 5 degrees)
            const rotateY = ((x - midX) / midX) * 2; 
            const rotateX = ((y - midY) / midY) * -2;
            
            // Apply the transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
});
