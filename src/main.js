import './style.css'

// Theme Toggle Logic
// Force Dark Mode
document.documentElement.classList.add('dark');
localStorage.theme = 'dark';

// Hamburger Menu Toggle Logic
const menuBtn = document.getElementById('menu-btn');
const fullMenu = document.getElementById('full-menu');
const menuItems = document.querySelectorAll('.menu-item');

function toggleMenu() {
    if (!menuBtn || !fullMenu) return;
    
    menuBtn.classList.toggle('hamburger-active');
    fullMenu.classList.toggle('show');
    fullMenu.classList.toggle('hidden');
    document.body.classList.toggle('menu-open');
}

if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}

// Close menu when clicking on a menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (fullMenu.classList.contains('show')) {
            toggleMenu();
        }
    });
});

// Project Modal Logic
const projectsData = {
    skyline: {
        title: "P-buddy (Parental Interactive Buddy for Understanding Detection Distress and Urgency Support)",
        description: "P-Buddy is a smart wearable bracelet designed to detect distress signals in children with special needs using motion and sound sensing technology, integrating ESP32, Raspberry Pi, and MPU6050 to provide real-time monitoring and emergency alerts for caregivers.",
        fullDescription: "P-buddy (Parental Interactive Buddy for Understanding Detection Distress and Urgency Support) Derived from concern about children with special needs and also the fact that technological advances can be utilized in many aspects, this encouraged us to create an innovative movement and sound detection bracelet which we hope will have a good impact in the future.I play the key role for developing the basic innovation equipped with sensors, such as ESP32, Raspberry Pi, and MPU6050 as the main components of the product.",
        image: "./miss tenager/I am Anvil SalsabilaYour MissTeenager Intellegence West Java 2023-2024sometimes life gave you a  (1).jpg",
        tech: ["React", "Tailwind", "Chart.js", "Firebase"],
        features: ["Real-time Analytics", "Data Visualization", "Inventory Tracking", "Custom Reports"],
        color: "primary"
    },
    nova: {
        title: "GenRe Guardians Cardgame",
        description: "An inovation card game I created to facilitate socialization activities as the West Java GenRe Ambassador regarding the preparation of teenagers in Indonesia.",
        fullDescription: "An inovation card game I created to facilitate socialization activities as the West Java GenRe Ambassador regarding the preparation of teenagers in Indonesia.",
        image: "./duta/Proud!!!..jpg",
        tech: ["Next.js", "OpenAI API", "Hugging Face", "Vercel"],
        features: ["AI Content Generation", "SEO Optimization", "Creative Workflow", "Multi-language Support"],
        color: "secondary"
    },
    zenith: {
        title: "INSPIRASA",
        description: "A humanitarian outreach program delivering interactive environmental education to children at an orphanage, involving 35 participants and organized by 18 International Relations students from President University. I served as Vice Project Manager, supporting coordination, team collaboration, and ensuring the smooth execution of the event.",
        fullDescription: "A humanitarian activity aimed at providing interactive learning to children in an orphanage about the importance of environmental awareness. This activity was attended by 35 children and organized by 18 International Relations students from President University.I was responsible as the Vice Project Manager, supporting the activity and ensuring the smooth running of the event as well as the teamwork among the members.",
        image: "./inti/[27-11-2025]📍Universitas Pertahanan RIMelalui Diskusi Panel dan Focus Group Discussion, kita me (1).jpg",
        tech: ["Figma", "Adobe XD", "Framer Motion", "Design Systems"],
        features: ["Intutive Navigation", "Biometric Login UI", "Financial Data Viz", "Accessibility Focused"],
        color: "primary"
    }
};

const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const projectCards = document.querySelectorAll('[data-project-id]');

function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalBody.innerHTML = `
        <div class="flex flex-col md:flex-row h-full">
            <div class="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
            </div>
            <div class="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div class="flex flex-wrap gap-2 mb-6">
                    ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6 dark:text-white">${data.title}</h2>
                <div class="space-y-6">
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${data.fullDescription}</p>
                    <div>
                        <h4 class="font-bold mb-3 dark:text-white">Main Features:</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                            ${data.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="mt-10 flex flex-wrap gap-4">
                    <a href="#" class="px-8 py-3 bg-${data.color} text-white rounded-full font-semibold hover:opacity-90 transition-transform hover:scale-105 shadow-lg">Live Demo</a>
                    <a href="#" class="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">View Code</a>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
    
    // Force reflow for animation
    void modal.offsetWidth;
    modal.classList.add('modal-show');
}

function closeModal() {
    modal.classList.remove('modal-show');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.classList.remove('modal-open');
    }, 300);
}

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.dataset.projectId);
    });
});

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Hero Mouse Parallax Logic
const heroParallax = document.getElementById('hero-parallax');
const layers = document.querySelectorAll('.parallax-layer');

if (heroParallax) {
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        layers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const xOffset = (window.innerWidth / 2 - e.clientX) * speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) * speed;
            
            layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// Gallery Logic
const galleryCards = document.querySelectorAll('.gallery-card');

galleryCards.forEach(card => {
    const images = JSON.parse(card.dataset.images);
    const imgElement = card.querySelector('.gallery-img');
    const dots = card.querySelectorAll('.dot');
    let currentIndex = 0;

    const prevBtn = card.querySelector('.gallery-prev');
    const nextBtn = card.querySelector('.gallery-next');

    // Initialize active dot
    dots[0].classList.add('active');

    function updateGallery(index) {
        currentIndex = index;
        
        // Animate image change
        imgElement.classList.add('fade-out');

        setTimeout(() => {
            imgElement.src = images[currentIndex];
            imgElement.onload = () => {
                imgElement.classList.remove('fade-out');
            };

            // Update dots
            dots.forEach((dot, idx) => {
                if (idx === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }, 300); // Match CSS transition
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const nextIndex = (currentIndex + 1) % images.length;
            updateGallery(nextIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery(prevIndex);
        });
    }

    // Still allow clicking the card to go to the next image
    card.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % images.length;
        updateGallery(nextIndex);
    });
});

// Contact Form Logic
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = submitBtn?.querySelector('.btn-text');

if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Extract form values
        const params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        const originalContent = btnText.innerHTML;
        btnText.innerHTML = `
            <span>Sending...</span>
            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        `;

        try {
            // Send email via EmailJS
            await emailjs.send('service_tah4rgb', 'template_vs5q1mp', params);

            // Show success state
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            btnText.innerHTML = `
                <span class="success-icon flex items-center gap-2">
                    Message Sent!
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </span>
            `;

            // Reset form after a delay
            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.classList.remove('success');
                btnText.innerHTML = originalContent;
            }, 3000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            // Revert button state on error
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            btnText.innerHTML = originalContent;
            alert('Failed to send message. Please try again later.');
        }
    });
}

import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic',
});

// Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Back to Top Logic
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced Love Button
const loveBtn = document.getElementById('loveBtn');
const emojis = ['❤️', '✨', '🚀', '💻', '🔥', '🌈'];

if (loveBtn) {
    loveBtn.addEventListener('click', (e) => {
        for (let i = 0; i < 8; i++) {
            createParticle(e.clientX, e.clientY);
        }
    });
}

function createParticle(x, y) {
    const particle = document.createElement('span');
    particle.className = 'emoji-burst';
    particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random direction and rotation
    const destX = (Math.random() - 0.5) * 300;
    const destY = (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 360;
    
    particle.style.setProperty('--x', `${destX}px`);
    particle.style.setProperty('--y', `${destY}px`);
    particle.style.setProperty('--r', `${rotation}deg`);
    
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.position = 'fixed';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Typing Animation Logic
if (document.getElementById('typed')) {
    new Typed('#typed', {
        strings: [
            'Ex Quality Control at PT Samcon',
            'Humanitarian and Climate Change Enthusiast',
            'GenRe Ambassador of West Java',
            'Most outstanding student President University 2025'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '|'
    });
}

