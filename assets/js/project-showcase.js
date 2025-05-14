// Project Showcase Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize project filters with improved animations
    initProjectFilters();
    
    // Initialize project cards with minimal hover effects
    initProjectCardEffects();
    
    // Initialize project modal functionality with smooth transitions
    initProjectModal();
    
    // Initialize ScrollReveal for project cards
    initProjectScrollReveal();
});

// Project Filter Functionality
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
    const emptyProjectsMessage = document.querySelector('.empty-projects');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Add a loading class to the grid
            document.querySelector('.projects-grid').classList.add('loading');
            
            // Count visible projects
            let visibleProjects = 0;
            
            // Filter projects with staggered animations
            projectCards.forEach((card, index) => {
                card.style.setProperty('--delay', index);
                
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                    visibleProjects++;
                    
                    // Reset animation to trigger it again
                    card.style.animation = 'none';
                    card.offsetHeight; // Force reflow
                    card.style.animation = 'fadeInUp 0.6s forwards';
                    card.style.animationDelay = `${index * 0.1}s`;
                } else {
                    if (card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'flex';
                        visibleProjects++;
                        
                        // Reset animation to trigger it again
                        card.style.animation = 'none';
                        card.offsetHeight; // Force reflow
                        card.style.animation = 'fadeInUp 0.6s forwards';
                        card.style.animationDelay = `${index * 0.1}s`;
                    } else {
                        // Fade out first, then hide
                        card.style.animation = 'none';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
            
            // Show empty message if no projects match
            if (visibleProjects === 0 && emptyProjectsMessage) {
                emptyProjectsMessage.classList.add('visible');
            } else if (emptyProjectsMessage) {
                emptyProjectsMessage.classList.remove('visible');
            }
            
            // Remove loading class
            setTimeout(() => {
                document.querySelector('.projects-grid').classList.remove('loading');
            }, 500);
        });
    });
}

// Project Card Hover Effects (minimal approach)
function initProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Set initial delay for staggered appearance
        const index = Array.from(projectCards).indexOf(card);
        card.style.setProperty('--delay', index);
        
        // Add subtle hover effects
        card.addEventListener('mouseenter', function() {
            // Animate the links with staggered delays
            const links = this.querySelectorAll('.project-link');
            links.forEach((link, i) => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
                link.style.transitionDelay = `${i * 0.1}s`;
            });
            
            // Subtle scale effect on image
            const image = this.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset link animations
            const links = this.querySelectorAll('.project-link');
            links.forEach((link) => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(10px)';
                link.style.transitionDelay = '0s';
            });
            
            // Reset image scale
            const image = this.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });
}

// Project Modal Functionality
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const detailButtons = document.querySelectorAll('.view-details');
    
    // Define project details data
    const projectData = {
        'code-crewsaders': {
            title: 'Code Crewsaders Chatbot',
            image: 'assets/images/project-chatbot.jpg',
            badges: ['Featured Project', 'AI-powered', 'Education'],
            description: 'An intelligent conversational interface designed to assist coding learners with real-time problem-solving support and interactive tutorials. The chatbot delivers personalized guidance by analyzing user code, providing contextual corrections, and suggesting learning resources.',
            features: [
                { icon: 'code', text: 'Interactive code editor with syntax highlighting' },
                { icon: 'brain', text: 'Personalized learning path based on skill level' },
                { icon: 'comment-dots', text: 'Natural language conversations with context awareness' },
                { icon: 'history', text: 'Session history and progress tracking' }
            ],
            techStack: [
                { icon: 'react', text: 'React' },
                { icon: 'node-js', text: 'Node.js' },
                { icon: 'database', text: 'MongoDB' },
                { icon: 'robot', text: 'GPT-4 API' }
            ],
            gallery: [
                'assets/images/project-chatbot.jpg',
                'assets/images/project-chatbot-2.jpg',
                'assets/images/project-chatbot-3.jpg'
            ],
            actions: [
                { type: 'primary', icon: 'external-link-alt', text: 'Live Demo', url: 'https://codecrewsaders.dev' },
                { type: 'secondary', icon: 'github', text: 'View Code', url: 'https://github.com/KRITHIKR007/code-crewsaders' }
            ]
        },
        'lms-dashboard': {
            title: 'LMS Frontend Dashboard',
            image: 'assets/images/project-lms.jpg',
            badges: ['Web App', 'Dashboard'],
            description: 'A comprehensive Learning Management System featuring dual interfaces for students and teachers, with intuitive dashboards for course management, progress tracking, and interactive learning tools.',
            features: [
                { icon: 'chart-line', text: 'Real-time progress tracking and analytics' },
                { icon: 'comments', text: 'Integrated discussion forums and messaging' },
                { icon: 'calendar-alt', text: 'Assignment scheduling and deadline management' },
                { icon: 'mobile-alt', text: 'Responsive design for all devices' }
            ],
            techStack: [
                { icon: 'react', text: 'React' },
                { icon: 'js', text: 'TypeScript' },
                { icon: 'palette', text: 'Material UI' },
                { icon: 'chart-line', text: 'D3.js' }
            ],
            gallery: [
                'assets/images/project-lms.jpg',
                'assets/images/project-lms-2.jpg',
                'assets/images/project-lms-3.jpg'
            ],
            actions: [
                { type: 'primary', icon: 'external-link-alt', text: 'Live Demo', url: 'https://lms-frontend-demo.krithikr.com' },
                { type: 'secondary', icon: 'github', text: 'View Code', url: 'https://github.com/KRITHIKR007/lms-frontend' }
            ]
        },
        'event-platform': {
            title: 'Event Registration Platform',
            image: 'assets/images/project-event.jpg',
            badges: ['Web App', 'Payment Integration'],
            description: 'A full-stack event registration system built with Django and React, supporting multiple ticket tiers, secure payment processing, and automated attendee communications.',
            features: [
                { icon: 'ticket-alt', text: 'Dynamic ticket management with tier-based pricing' },
                { icon: 'qrcode', text: 'QR code-based check-in system' },
                { icon: 'credit-card', text: 'Secure payment processing with Stripe' },
                { icon: 'envelope', text: 'Automated email communication' }
            ],
            techStack: [
                { icon: 'python', text: 'Django' },
                { icon: 'react', text: 'React' },
                { icon: 'database', text: 'PostgreSQL' },
                { icon: 'stripe', text: 'Stripe API' }
            ],
            gallery: [
                'assets/images/project-event.jpg',
                'assets/images/project-event-2.jpg',
                'assets/images/project-event-3.jpg'
            ],
            actions: [
                { type: 'primary', icon: 'external-link-alt', text: 'Live Demo', url: 'https://eventrego-demo.krithikr.com' },
                { type: 'secondary', icon: 'github', text: 'View Code', url: 'https://github.com/KRITHIKR007/event-rego' }
            ]
        },
        'tensercore': {
            title: 'TenserCore – Stock Signal Tool',
            image: 'assets/images/project-tensercore.jpg',
            badges: ['AI/ML', 'Financial Tech'],
            description: 'An AI-powered stock market prediction tool built during the Degithon hackathon, combining technical analysis with sentiment analysis from social media and news sources.',
            features: [
                { icon: 'robot', text: 'Ensemble ML model combining multiple algorithms' },
                { icon: 'chart-bar', text: 'Interactive data visualizations' },
                { icon: 'newspaper', text: 'News and social media sentiment analysis' },
                { icon: 'bell', text: 'Real-time trade signal alerts' }
            ],
            techStack: [
                { icon: 'python', text: 'Python' },
                { icon: 'brain', text: 'TensorFlow' },
                { icon: 'vuejs', text: 'Vue.js' },
                { icon: 'chart-bar', text: 'D3.js' }
            ],
            gallery: [
                'assets/images/project-tensercore.jpg',
                'assets/images/project-tensercore-2.jpg',
                'assets/images/project-tensercore-3.jpg'
            ],
            actions: [
                { type: 'primary', icon: 'external-link-alt', text: 'Live Demo', url: 'https://tensercore-demo.krithikr.com' },
                { type: 'secondary', icon: 'github', text: 'View Code', url: 'https://github.com/KRITHIKR007/tensercore' }
            ]
        },
        'cs-engineers': {
            title: 'C&S Engineers Website',
            image: 'assets/images/project-cs-engineers.jpg',
            badges: ['Web Design', 'Client Project'],
            description: 'A modern, responsive website for C&S Engineers, featuring an interactive project portfolio, service listings, and a custom-built team member showcase.',
            features: [
                { icon: 'image', text: 'Interactive project portfolio with filtering' },
                { icon: 'map-marked-alt', text: 'Integrated project maps with location data' },
                { icon: 'users', text: 'Custom team member showcase' },
                { icon: 'tachometer-alt', text: '98/100 PageSpeed score optimization' }
            ],
            techStack: [
                { icon: 'wordpress', text: 'WordPress' },
                { icon: 'php', text: 'PHP' },
                { icon: 'js', text: 'JavaScript' },
                { icon: 'figma', text: 'Figma' }
            ],
            gallery: [
                'assets/images/project-cs-engineers.jpg',
                'assets/images/project-cs-engineers-2.jpg',
                'assets/images/project-cs-engineers-3.jpg'
            ],
            actions: [
                { type: 'primary', icon: 'external-link-alt', text: 'Visit Site', url: 'https://csengineers.com' },
                { type: 'secondary', icon: 'file-alt', text: 'Case Study', url: '#' }
            ]
        },
        'object-tracking': {
            title: 'Real-time Object Tracking',
            image: 'assets/images/project-tracking.jpg',
            badges: ['Computer Vision', 'AI/ML'],
            description: 'A sophisticated computer vision system that can detect, classify, and track multiple objects simultaneously in video feeds with high accuracy and minimal latency.',
            features: [
                { icon: 'car', text: 'Multi-class vehicle detection and classification' },
                { icon: 'tachometer-alt', text: '30+ FPS processing on standard hardware' },
                { icon: 'eye', text: 'Occlusion handling for continuous tracking' },
                { icon: 'microchip', text: 'Optimized for edge device deployment' }
            ],
            techStack: [
                { icon: 'python', text: 'Python' },
                { icon: 'brain', text: 'TensorFlow' },
                { icon: 'camera', text: 'OpenCV' },
                { icon: 'python', text: 'PyTorch' }
            ],
            gallery: [
                'assets/images/project-tracking.jpg',
                'assets/images/project-tracking-2.jpg',
                'assets/images/project-tracking-3.jpg'
            ],
            actions: [
                { type: 'primary', icon: 'github', text: 'View Code', url: 'https://github.com/KRITHIKR007/realtime-object-tracking' },
                { type: 'secondary', icon: 'play-circle', text: 'Demo Video', url: '#' }
            ]
        }
    };
    
    // Open modal with project details
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                // Set modal content
                document.getElementById('modalImage').src = project.image;
                document.getElementById('modalTitle').textContent = project.title;
                
                // Set badges
                const badgesContainer = document.getElementById('modalBadges');
                badgesContainer.innerHTML = '';
                project.badges.forEach(badge => {
                    const badgeEl = document.createElement('span');
                    badgeEl.className = 'modal-badge';
                    badgeEl.textContent = badge;
                    badgesContainer.appendChild(badgeEl);
                });
                
                // Set description
                document.getElementById('modalDescription').textContent = project.description;
                
                // Set features
                const featuresContainer = document.getElementById('modalFeatures');
                featuresContainer.innerHTML = '';
                project.features.forEach(feature => {
                    const featureEl = document.createElement('div');
                    featureEl.className = 'feature-item';
                    featureEl.innerHTML = `
                        <div class="feature-icon">
                            <i class="fas fa-${feature.icon}"></i>
                        </div>
                        <div class="feature-text">${feature.text}</div>
                    `;
                    featuresContainer.appendChild(featureEl);
                });
                
                // Set tech stack
                const techStackContainer = document.getElementById('modalTechStack');
                techStackContainer.innerHTML = '';
                project.techStack.forEach(tech => {
                    const techEl = document.createElement('div');
                    techEl.className = 'tech-item';
                    techEl.innerHTML = `
                        <div class="tech-icon">
                            <i class="fab fa-${tech.icon}"></i>
                        </div>
                        <div class="tech-name">${tech.text}</div>
                    `;
                    techStackContainer.appendChild(techEl);
                });
                
                // Set gallery
                const galleryContainer = document.getElementById('modalGallery');
                galleryContainer.innerHTML = '';
                project.gallery.forEach(image => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    galleryItem.innerHTML = `<img src="${image}" alt="${project.title}">`;
                    galleryContainer.appendChild(galleryItem);
                });
                
                // Set actions
                const actionsContainer = document.getElementById('modalActions');
                actionsContainer.innerHTML = '';
                project.actions.forEach(action => {
                    const actionEl = document.createElement('a');
                    actionEl.className = `modal-btn ${action.type}`;
                    actionEl.href = action.url;
                    actionEl.target = '_blank';
                    actionEl.innerHTML = `
                        <i class="fas fa-${action.icon}"></i>
                        ${action.text}
                    `;
                    actionsContainer.appendChild(actionEl);
                });
                
                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize ScrollReveal animations for project cards
function initProjectScrollReveal() {
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '30px',
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            reset: false
        });
        
        // Reveal project cards with staggered delay
        sr.reveal('.project-card', { 
            origin: 'bottom',
            interval: 100,
            delay: 200,
            beforeReveal: (el) => {
                el.style.opacity = '1';
            }
        });
        
        // Reveal filter buttons
        sr.reveal('.project-filter', { 
            origin: 'top',
            distance: '20px',
            duration: 600,
            delay: 100
        });
        
        // Reveal CTA section
        sr.reveal('.more-projects-cta', { 
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 300
        });
    }
}
