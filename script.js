// Profile Picture Handler
const profileImg = document.getElementById('profile-img');
if (profileImg) {
    profileImg.addEventListener('error', function() {
        // If image fails to load, show placeholder
        this.style.display = 'none';
    });
    
    profileImg.addEventListener('load', function() {
        // If image loads successfully, hide placeholder
        const placeholder = document.querySelector('.profile-placeholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }
    });
    
    // Check if image source is placeholder
    if (profileImg.src && profileImg.src.includes('via.placeholder.com')) {
        profileImg.style.display = 'none';
    }
}

// Typing Animation
const typingTexts = ['create amazing things', 'build web experiences', 'solve problems', 'code with passion'];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function typeText() {
    if (typingElement) {
        const currentText = typingTexts[currentTextIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && currentCharIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            typeSpeed = 500; // Pause before starting new text
        }

        setTimeout(typeText, typeSpeed);
    }
}

// Start typing animation when page loads
if (typingElement) {
    setTimeout(typeText, 1000);
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Photo items animation
const photoItems = document.querySelectorAll('.photo-item');

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name && email && subject && message) {
            // In a real application, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Smooth scrolling for anchor links
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

// Add animation on scroll
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .timeline-item, .contact-item, .photo-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active state to photo items for smooth transitions
if (photoItems.length > 0) {
    photoItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
}

