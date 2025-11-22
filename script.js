// Smooth scrolling for navigation links
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

// Animate demo pixel grid
function createPixelGrid() {
    const demoGrid = document.querySelector('.demo-grid');
    if (!demoGrid) return;
    
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
        '#FFEAA7', '#DFE6E9', '#74B9FF', '#A29BFE',
        '#FD79A8', '#FDCB6E', '#FF7675', '#6C5CE7'
    ];
    
    // Create 64 pixels (8x8 grid)
    for (let i = 0; i < 64; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        pixel.style.borderRadius = '2px';
        pixel.style.transition = 'all 0.3s ease';
        demoGrid.appendChild(pixel);
    }
    
    // Animate pixels
    setInterval(() => {
        const pixels = demoGrid.querySelectorAll('div');
        const randomPixel = pixels[Math.floor(Math.random() * pixels.length)];
        if (randomPixel) {
            randomPixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
    }, 500);
}

// Create showcase grid pattern
function createShowcaseGrid() {
    const showcaseGrid = document.querySelector('.showcase-grid');
    if (!showcaseGrid) return;
    
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
        '#FFEAA7', '#74B9FF', '#A29BFE', '#FD79A8'
    ];
    
    // Create a heart pattern in the grid
    const heartPattern = [
        [0,1,1,0,0,1,1,0],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,0]
    ];
    
    showcaseGrid.style.display = 'grid';
    showcaseGrid.style.gridTemplateColumns = 'repeat(8, 1fr)';
    showcaseGrid.style.gridTemplateRows = 'repeat(8, 1fr)';
    showcaseGrid.style.gap = '8px';
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const pixel = document.createElement('div');
            pixel.style.backgroundColor = heartPattern[i][j] ? '#FF6B6B' : '#F2F2F7';
            pixel.style.borderRadius = '4px';
            pixel.style.transition = 'all 0.3s ease';
            showcaseGrid.appendChild(pixel);
        }
    }
}

// Intersection Observer for fade-in animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards and other elements
    document.querySelectorAll('.feature-card, .support-card, .contact-card, .why-card, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add navbar shadow on scroll
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// Mobile menu toggle (if needed in future)
function setupMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    
    // Add hamburger menu for mobile if needed
    if (window.innerWidth <= 640) {
        // Mobile menu implementation can go here
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    createPixelGrid();
    createShowcaseGrid();
    setupScrollAnimations();
    setupNavbarScroll();
    setupMobileMenu();
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        setupMobileMenu();
    }, 250);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Cursor effect for feature cards (optional enhancement)
document.querySelectorAll('.feature-card, .support-card, .contact-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});
