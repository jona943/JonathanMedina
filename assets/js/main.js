document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (hamburgerMenu && navLinksContainer) {
        hamburgerMenu.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (importante para Single Page)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
            });
        });
    }

    // Scroll Suave y Actualización de Enlace Activo
    const sections = document.querySelectorAll('section, header');
    const progressBar = document.querySelector('.reading-progress-bar');

    window.addEventListener('scroll', () => {
        // Update active link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        // Update reading progress bar
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });

    // 5. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('section, .project-card, .pilar-item, .puesto_de_trabajo, .reveal-hidden');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        // Solo añadimos la clase si no la tiene ya desde el HTML
        if (!el.classList.contains('reveal-hidden')) {
            el.classList.add('reveal-hidden');
        }
        revealObserver.observe(el);
    });

    // 6. Project Card Glow Effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Lightbox Gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length > 0) {
        // 1. Create and inject the lightbox HTML
        const lightboxHTML = `
            <div class="lightbox-overlay">
                <div class="lightbox-content">
                    <button class="lightbox-close" aria-label="Cerrar">&times;</button>
                    <img src="" alt="" class="lightbox-image">
                    <p class="lightbox-caption"></p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);

        const lightboxOverlay = document.querySelector('.lightbox-overlay');
        const lightboxImage = document.querySelector('.lightbox-image');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const closeButton = document.querySelector('.lightbox-close');

        // 2. Add click event to each gallery item
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                const captionText = item.querySelector('.caption').textContent;

                lightboxImage.src = imgSrc;
                lightboxCaption.textContent = captionText;
                lightboxOverlay.classList.add('active');
            });
        });

        // 3. Function to close the lightbox
        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
        };

        // 4. Add click events to close the lightbox
        closeButton.addEventListener('click', closeLightbox);
        lightboxOverlay.addEventListener('click', (e) => {
            // Only close if the overlay itself (the background) is clicked
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });
    }
});