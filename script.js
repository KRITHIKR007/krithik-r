// Animation Configuration
const initAnimation = () => {
    const animationContainer = document.getElementById('lottie-container');
    const animationData = {
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/developer.json',
        rendererSettings: {
            progressiveLoad: false,
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return lottie.loadAnimation(animationData);
};

// Professional Data Configuration
const professionalData = {
    personal: {
        name: "Krithik R",
        title: "AI/ML Designer & Developer",
        roles: [
            "Senior Designer at The Turing Club",
            "Intern at Collective Artists"
        ],
        about: "I am a Senior Designer and Outreach Lead at The Turing Club, passionate about merging AI/ML with creative design solutions. My focus spans across AI/ML, UI/UX design, and system optimization."
    },
    experience: [
        {
            title: "Senior Designer & Outreach Lead",
            company: "The Turing Club",
            period: "June 2023 - Present",
            responsibilities: [
                "Led design efforts and outreach initiatives",
                "Empowered students through AI/ML workshops",
                "Organized collaborations and partnerships",
                "Managed design team and project deliverables",
                "Developed and implemented AI/ML solutions",
                "Conducted technical training sessions"
            ]
        },
        {
            title: "Intern",
            company: "Collective Artists, Big Bang Social Division",
            period: "November 2024 - Present",
            responsibilities: [
                "Digital campaign management",
                "Social media strategy development",
                "Brand development and outreach",
                "Content strategy and execution",
                "Analytics and performance tracking",
                "Collaborative project management"
            ]
        }
    ],
    education: {
        certifications: [
            {
                title: "AI and Machine Learning Specialization",
                issuer: "Coursera",
                year: "2023"
            },
            {
                title: "Data Science with Python",
                issuer: "DataCamp",
                year: "2023"
            },
            {
                title: "Web Development Bootcamp",
                issuer: "Udemy",
                year: "2023"
            },
            {
                title: "User Experience (UX) Design",
                issuer: "Google",
                year: "2024"
            },
            {
                title: "Cloud Computing Fundamentals",
                issuer: "AWS",
                year: "2023"
            }
        ],
        focus: [
            "Advanced Machine Learning",
            "Computer Vision",
            "Deep Learning",
            "Cloud Architecture",
            "UI/UX Design"
        ]
    },
    skills: {
        programming: {
            title: "Programming Languages",
            skills: [
                { 
                    name: "Python",
                    level: 95,
                    expertise: ["AI/ML", "Web Dev", "Data Analysis"],
                    projects: ["Code Crewsaders", "Real-Time Object Tracking"],
                    description: "Extensive knowledge in ML, AI, and web development"
                },
                { 
                    name: "Java",
                    level: 85,
                    expertise: ["Android", "Backend"],
                    projects: ["System Applications", "Android Apps"],
                    description: "Experience in Android and backend development"
                },
                // ... other programming languages
            ]
        },
        aiml: {
            title: "AI/ML & Data Science",
            categories: [
                {
                    name: "Machine Learning",
                    tools: [
                        { name: "TensorFlow", level: 90 },
                        { name: "PyTorch", level: 85 },
                        { name: "Scikit-learn", level: 88 },
                        { name: "Keras", level: 85 }
                    ]
                },
                {
                    name: "Computer Vision",
                    tools: [
                        { name: "OpenCV", level: 92 },
                        { name: "YOLO", level: 88 },
                        { name: "MediaPipe", level: 85 }
                    ]
                },
                {
                    name: "Data Analysis",
                    tools: [
                        { name: "Pandas", level: 90 },
                        { name: "NumPy", level: 88 },
                        { name: "Matplotlib", level: 85 },
                        { name: "Seaborn", level: 85 }
                    ]
                }
            ]
        },
        design: {
            title: "UI/UX Design",
            tools: [
                {
                    name: "Figma",
                    level: 90,
                    expertise: ["Interface Design", "Prototyping"],
                    projects: ["Web Interfaces", "Mobile Apps"]
                },
                {
                    name: "Zeplin",
                    level: 85,
                    expertise: ["Design Handoff", "Collaboration"],
                    projects: ["Team Projects", "Client Work"]
                }
                // ... other design tools
            ]
        },
        cloud: {
            title: "Cloud & DevOps",
            platforms: [
                {
                    name: "AWS",
                    level: 85,
                    services: ["EC2", "S3", "Lambda", "CloudFront"],
                    projects: ["Serverless Apps", "Cloud Storage"]
                },
                {
                    name: "Google Cloud",
                    level: 80,
                    services: ["Compute Engine", "Cloud Storage", "BigQuery"],
                    projects: ["Data Processing", "ML Deployment"]
                }
                // ... other cloud platforms
            ],
            tools: [
                {
                    name: "Docker",
                    level: 80,
                    expertise: ["Containerization", "Deployment"]
                },
                {
                    name: "Git",
                    level: 88,
                    expertise: ["Version Control", "Team Collaboration"]
                }
                // ... other DevOps tools
            ]
        }
    },
    contact: {
        email: "rkrithik795@gmail.com",
        linkedin: "https://www.linkedin.com/in/krithik-r124",
        github: "https://github.com/KRITHIKR007"
    }
};

// Project Showcase Implementation
class ProjectShowcase {
    constructor() {
        this.projects = [
            {
                title: 'Code Crewsaders',
                description: 'AI-Driven Educational Chatbot using Natural Language Processing',
                category: ['AI/ML', 'Python', 'Flask', 'NLP'],
                techStack: ['Python', 'TensorFlow', 'Flask', 'NLP'],
                year: '2024',
                image: 'assets/images/projects/code-crewsaders.jpg',
                link: '#',
                highlights: [
                    'Real-time chat processing',
                    'Educational content delivery',
                    'User interaction analysis'
                ]
            },
            {
                title: 'Real-Time Multi-Object Tracking',
                description: 'Advanced vehicle tracking system using YOLO and SORT algorithms',
                category: ['Computer Vision', 'Python', 'YOLO'],
                techStack: ['Python', 'OpenCV', 'YOLO', 'SORT'],
                year: '2023',
                image: 'assets/images/projects/object-tracking.jpg',
                link: '#',
                highlights: [
                    'Real-time object detection',
                    'Multi-vehicle tracking',
                    'Performance optimization'
                ]
            },
            {
                title: 'TenserCore',
                description: 'Stock Market Analysis Tool',
                category: ['Python', 'Technical Analysis', 'APIs'],
                techStack: ['Python', 'Technical Analysis', 'APIs'],
                year: '2023',
                image: 'assets/images/projects/tensercore.jpg',
                link: '#',
                highlights: [
                    'Stock market analysis',
                    'Technical analysis tools',
                    'API integration'
                ]
            },
            {
                title: 'Instagram Data Scraper',
                description: 'Data extraction and analysis tool',
                category: ['Python', 'Web Scraping', 'Data Analysis'],
                techStack: ['Python', 'Web Scraping', 'Data Analysis'],
                year: '2023',
                image: 'assets/images/projects/data-scraper.jpg',
                link: '#',
                highlights: [
                    'Data extraction',
                    'Web scraping',
                    'Data analysis'
                ]
            }
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.render();
        this.initProjectGallery();
        this.initMagneticEffect();
        this.initProjectNavigation();
    }

    initProjectGallery() {
        const galleryGrid = document.querySelector('.gallery-grid');
        if (galleryGrid) {
            galleryGrid.innerHTML = this.projects.map((project, index) => `
                <div class="gallery-item ${index === this.currentIndex ? 'active' : ''}" 
                     data-index="${index}">
                    <div class="gallery-item-content">
                        <div class="gallery-image-container">
                            <img src="${project.image}" alt="${project.title}">
                            <div class="gallery-overlay">
                                <div class="gallery-overlay-content">
                                    <span class="project-year">${project.year}</span>
                                    <h3>${project.title}</h3>
                                    <div class="gallery-tags">
                                        ${project.category.slice(0, 2).map(cat => 
                                            `<span class="gallery-tag">${cat}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            this.addGalleryInteractions();
        }
    }

    addGalleryInteractions() {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                this.currentIndex = parseInt(item.dataset.index);
                this.render();
                this.updateGalleryActive();
            });

            // Add hover effect
            item.addEventListener('mouseenter', this.handleGalleryHover);
            item.addEventListener('mouseleave', this.handleGalleryLeave);
        });
    }

    handleGalleryHover(e) {
        const overlay = e.currentTarget.querySelector('.gallery-overlay');
        overlay.style.opacity = '1';
        overlay.style.transform = 'translateY(0)';
    }

    handleGalleryLeave(e) {
        const overlay = e.currentTarget.querySelector('.gallery-overlay');
        overlay.style.opacity = '0';
        overlay.style.transform = 'translateY(10px)';
    }

    updateGalleryActive() {
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            item.classList.toggle('active', index === this.currentIndex);
        });
    }

    initProjectNavigation() {
        const projectContainer = document.querySelector('.project-container');
        if (projectContainer) {
            // Add navigation buttons
            const nav = document.createElement('div');
            nav.className = 'project-navigation';
            nav.innerHTML = `
                <button class="nav-prev">Previous</button>
                <button class="nav-next">Next</button>
            `;
            projectContainer.appendChild(nav);

            // Add event listeners
            nav.querySelector('.nav-prev').addEventListener('click', () => this.navigateProject(-1));
            nav.querySelector('.nav-next').addEventListener('click', () => this.navigateProject(1));
        }
    }

    navigateProject(direction) {
        this.currentIndex = (this.currentIndex + direction + this.projects.length) % this.projects.length;
        this.render();
        this.updateGalleryActive();
    }

    render() {
        const projectContainer = document.querySelector('.project-container');
        const project = this.projects[this.currentIndex];
        if (projectContainer) {
            projectContainer.innerHTML = this.getProjectTemplate(project);
            this.initMagneticEffect();
        }
    }

    getProjectTemplate(project) {
        return `
            <div class="project-hero">
                <div class="project-header">
                    <div class="project-meta">
                        <span class="project-year">${project.year}</span>
                        <h1 class="project-title">${project.title}</h1>
                    </div>
                    <div class="project-category-tags">
                        ${project.category.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-content">
                    <div class="project-image-container">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <div class="project-image-overlay"></div>
                    </div>
                    
                    <div class="project-details">
                        <div class="project-description">
                            <h3>Overview</h3>
                            <p>${project.description}</p>
                        </div>

                        <div class="project-tech-stack">
                            <h3>Technologies</h3>
                            <div class="tech-tags">
                                ${project.techStack.map(tech => `
                                    <span class="tech-tag">
                                        <span class="tech-icon"></span>
                                        ${tech}
                                    </span>
                                `).join('')}
                            </div>
                        </div>

                        <div class="project-highlights">
                            <h3>Key Features</h3>
                            <ul class="highlights-list">
                                ${project.highlights.map(highlight => `
                                    <li>
                                        <span class="highlight-bullet"></span>
                                        ${highlight}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <a href="${project.link}" class="project-link" target="_blank">
                            View Project <span class="arrow">→</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    initMagneticEffect() {
        const projectElements = document.querySelectorAll('.project-hero');
        projectElements.forEach(element => {
            element.addEventListener('mousemove', this.handleMouseMove.bind(this));
            element.addEventListener('mouseleave', this.handleMouseLeave);
        });
    }

    handleMouseMove(e) {
        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) * 0.3;
        const deltaY = (y - centerY) * 0.3;
        
        element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }

    handleMouseLeave(e) {
        e.currentTarget.style.transform = 'translate(0, 0)';
    }
}

// Project Carousel Functionality
class ProjectCarousel {
    constructor() {
        this.carousel = document.querySelector('.project-carousel');
        this.cards = Array.from(document.querySelectorAll('.project-card'));
        this.indicators = Array.from(document.querySelectorAll('.carousel-indicators .indicator'));
        this.prevBtn = document.querySelector('.nav-arrow.prev');
        this.nextBtn = document.querySelector('.nav-arrow.next');
        this.currentIndex = 0;
        this.totalCards = this.cards.length;
        
        this.init();
    }

    init() {
        if (!this.carousel) return;
        
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.navigate('prev'));
        this.nextBtn.addEventListener('click', () => this.navigate('next'));
        
        // Add indicator click events
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToCard(index));
        });

        // Add touch support
        let touchStartX = 0;
        let touchEndX = 0;

        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                this.navigate('next');
            } else if (touchEndX - touchStartX > 50) {
                this.navigate('prev');
            }
        });

        // Initial setup
        this.updateCards();
    }

    navigate(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.totalCards;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        }
        
        this.updateCards();
    }

    goToCard(index) {
        this.currentIndex = index;
        this.updateCards();
    }

    updateCards() {
        // Remove all classes first
        this.cards.forEach(card => {
            card.className = 'project-card';
        });

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });

        // Calculate indices for different positions
        const prevIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        const nextIndex = (this.currentIndex + 1) % this.totalCards;
        const prevOutIndex = (this.currentIndex - 2 + this.totalCards) % this.totalCards;
        const nextOutIndex = (this.currentIndex + 2) % this.totalCards;

        // Add appropriate classes
        this.cards[this.currentIndex].classList.add('active');
        this.cards[prevIndex].classList.add('prev');
        this.cards[nextIndex].classList.add('next');
        this.cards[prevOutIndex].classList.add('prev-out');
        this.cards[nextOutIndex].classList.add('next-out');

        // Add animation class
        this.carousel.classList.add('animating');
        setTimeout(() => {
            this.carousel.classList.remove('animating');
        }, 800);
    }
}

// Function to render professional data
function renderProfessionalData() {
    const personalSection = document.querySelector('.hero-content');
    if (personalSection) {
        personalSection.innerHTML = `
            <div class="hero-main">
                <h1 class="hero-title">${professionalData.personal.title}</h1>
                <div class="hero-roles">
                    ${professionalData.personal.roles.map(role => 
                        `<span class="role-tag">${role}</span>`
                    ).join('')}
                </div>
                <p class="hero-about">${professionalData.personal.about}</p>
            </div>
        `;
    }

    // Render experience section
    const experienceSection = document.querySelector('.timeline');
    if (experienceSection) {
        experienceSection.innerHTML = professionalData.experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <p class="timeline-date">${exp.period}</p>
                    <ul class="timeline-details">
                        ${exp.responsibilities.map(resp => `
                            <li>${resp}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    // Render education section
    const educationSection = document.querySelector('.education-grid');
    if (educationSection) {
        educationSection.innerHTML = `
            <div class="education-item">
                <h3>Certifications</h3>
                <ul class="certification-list">
                    ${professionalData.education.certifications.map(cert => `
                        <li>
                            <span class="cert-title">${cert.title}</span>
                            <span class="cert-issuer">${cert.issuer}</span>
                            <span class="cert-year">${cert.year}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="education-item">
                <h3>Current Focus</h3>
                <ul class="focus-list">
                    ${professionalData.education.focus.map(focus => `
                        <li>${focus}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
}

// Initialize all components with enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    const anim = initAnimation();
    new ProjectCarousel();
    new ProjectShowcase();

    // Enhanced ScrollReveal configuration
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true
    });

    // Reveal elements with custom configurations
    sr.reveal('.hero-content', { 
        delay: 200,
        origin: 'top'
    });
    sr.reveal('.tech-stack-item', { 
        interval: 200,
        scale: 0.9,
        origin: 'left'
    });
    sr.reveal('.project-hero', { delay: 200 });
    sr.reveal('.gallery-item', { interval: 100 });
    sr.reveal('.about-text', { delay: 200 });
    sr.reveal('.skill-category', { interval: 200 });
    sr.reveal('.timeline-item', { interval: 300 });
    sr.reveal('.education-item', { interval: 200 });
    sr.reveal('.contact-info, .contact-form', { interval: 200 });

    // Handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize tech stack visualization
    initializeTechStack();
    renderProfessionalData();
    initializeNavigation();
    renderSkills();
});

// Function to initialize tech stack visualization
function initializeTechStack() {
    Object.entries(professionalData.skills).forEach(([category, data]) => {
        const container = document.querySelector(`.${category}-stack`);
        if (container) {
            renderTechStackCategory(container, data);
        }
    });
}

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    // Update active link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Enhanced smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function to render tech stack with enhanced visualization
function renderTechStackCategory(container, data) {
    const template = `
        <div class="tech-category">
            <h3 class="tech-category-title">${data.title}</h3>
            <div class="tech-grid">
                ${renderTechItems(data)}
            </div>
        </div>
    `;
    container.innerHTML = template;
}

function renderTechItems(data) {
    if (data.categories) {
        return renderCategorizedTech(data.categories);
    } else if (data.tools) {
        return renderToolsList(data.tools);
    } else if (data.skills) {
        return renderSkillsList(data.skills);
    }
}

function renderCategorizedTech(categories) {
    return categories.map(category => `
        <div class="tech-subcategory">
            <h4>${category.name}</h4>
            <div class="tech-tools">
                ${category.tools.map(tool => `
                    <div class="tech-tool">
                        <span class="tool-name">${tool.name}</span>
                        <div class="tool-level">
                            <div class="level-bar" style="width: ${tool.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Add this to your existing CSS
const techStackStyles = `
    .tech-category {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        margin-bottom: 2rem;
    }

    .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .tech-subcategory {
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .tool-level {
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        overflow: hidden;
    }

    .level-bar {
        height: 100%;
        background: var(--accent-color);
        transition: width 1s ease-out;
    }
`;

// Add the styles to your document
document.head.insertAdjacentHTML('beforeend', `<style>${techStackStyles}</style>`); 

const skillsData = {
    programming: [
        { name: "Python", level: 95, tags: ["AI/ML", "Web Dev", "Data Analysis"] },
        { name: "Java", level: 85, tags: ["Android", "Backend"] },
        { name: "C++", level: 80, tags: ["Algorithms", "Systems"] },
        { name: "SQL", level: 85, tags: ["Database", "Query"] },
        { name: "JavaScript", level: 80, tags: ["Frontend", "Node.js"] }
    ],
    webDev: [
        { name: "HTML/CSS", level: 90, tags: ["Frontend"] },
        { name: "Flask", level: 85, tags: ["Backend", "Python"] },
        { name: "Django", level: 80, tags: ["Backend", "Python"] },
        { name: "Node.js", level: 75, tags: ["Backend", "JavaScript"] },
        { name: "React", level: 75, tags: ["Frontend", "UI"] }
    ],
    aiml: [
        { name: "TensorFlow", level: 90, tags: ["Deep Learning"] },
        { name: "PyTorch", level: 85, tags: ["Neural Networks"] },
        { name: "Scikit-learn", level: 88, tags: ["Machine Learning"] },
        { name: "OpenCV", level: 92, tags: ["Computer Vision"] },
        { name: "YOLO", level: 88, tags: ["Object Detection"] },
        { name: "Pandas", level: 90, tags: ["Data Analysis"] },
        { name: "NumPy", level: 88, tags: ["Numerical Computing"] }
    ],
    tools: [
        { name: "Git", level: 88, tags: ["Version Control"] },
        { name: "Docker", level: 80, tags: ["Containerization"] },
        { name: "AWS", level: 85, tags: ["Cloud"] },
        { name: "Figma", level: 90, tags: ["UI/UX"] },
        { name: "Linux", level: 85, tags: ["OS"] }
    ]
};

// Add this to your existing script
function renderSkills() {
    Object.keys(skillsData).forEach(category => {
        const container = document.querySelector(`.skill-category.${category} .skills-list`);
        if (container) {
            container.innerHTML = skillsData[category].map(skill => `
                <div class="skill-item" data-aos="fade-up">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                    <div class="skill-tags">
                        ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        }
    });
} 