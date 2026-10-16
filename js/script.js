// ==========================================
// Menú Hamburguesa para móviles
// ==========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ==========================================
// Sistema de Modal (Lightbox) para el Portafolio
// ==========================================
const imageModal = document.getElementById("imageModal");
const imgExpanded = document.getElementById("imgExpanded");
const galleryItems = document.querySelectorAll('.gallery-item');
const closeImageModal = document.querySelector('.close-modal');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        imgExpanded.src = img.src;
        imageModal.classList.add('show'); 
        document.body.style.overflow = 'hidden';
    });
});

if (closeImageModal) {
    closeImageModal.addEventListener('click', () => {
        imageModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}

// ==========================================
// Sistema de Modal para Reserva (WhatsApp)
// ==========================================
const reservaModal = document.getElementById("reservaModal");
const btnsReserva = document.querySelectorAll('.btn-reserva');
const closeReserva = document.querySelector('.close-reserva');

btnsReserva.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        reservaModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});

if (closeReserva) {
    closeReserva.addEventListener('click', () => {
        reservaModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}

// ==========================================
// Cerrar modales al hacer clic en el fondo oscuro
// ==========================================
window.addEventListener('click', (e) => {
    if(e.target === imageModal) {
        imageModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    if (e.target === reservaModal) {
        reservaModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// ==========================================
// Animacdxdiones al hacer Scroll (Scroll Reveal)
// ==========================================
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealObserver.observe(reveal);
});