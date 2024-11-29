document.addEventListener('DOMContentLoaded', () => {
    console.log('Pagina a fost încărcată cu succes.');

    const emailLink = document.querySelector('header a');
    emailLink.addEventListener('click', (event) => {
        alert('Veți trimite un email către: ' + emailLink.textContent);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    console.log('Pagina a fost încărcată cu succes.');

    const emailLink = document.querySelector('header a');
    emailLink.addEventListener('click', (event) => {
        alert('Veți trimite un email către: ' + emailLink.textContent);
    });

    const monitorizareSection = document.querySelector('#monitorizare');
    const staticImages = document.querySelector('.resource-images');
    let slideIndex = 0;

    // Construiește slide-show-ul
    const images = Array.from(staticImages.querySelectorAll('img'));
    const slideContainer = document.createElement('div');
    slideContainer.className = 'slide-container';

    images.forEach((image, index) => {
        const slide = document.createElement('img');
        slide.src = image.src;
        if (index === 0) slide.classList.add('active');
        slideContainer.appendChild(slide);
    });

    // Adaugă slide-container în DOM
    monitorizareSection.appendChild(slideContainer);

    // Gestionează dublu click
    monitorizareSection.addEventListener('dblclick', () => {
        staticImages.style.display = 'none'; // Ascunde imaginile statice
        slideContainer.style.display = 'block'; // Afișează slide-show-ul

        // Funcția pentru slide-show
        const slides = slideContainer.querySelectorAll('img');
        setInterval(() => {
            slides[slideIndex].classList.remove('active');
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].classList.add('active');
        }, 3000); // 3 secunde între slide-uri
    });
});

