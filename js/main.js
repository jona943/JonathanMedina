document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

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