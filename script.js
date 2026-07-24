// ========================================
// AOS INIT
// ========================================
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// ========================================
// MOBILE MENU
// ========================================
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active');
    toggle.setAttribute('aria-expanded', open);
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar__inner') && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
    }
});

// ========================================
// GSAP INIT
// ========================================
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero__inner', {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.from('.hero__trust-item', {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.from('.hero__cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out'
    });

    gsap.from('.navbar__links a', {
        opacity: 0,
        y: -10,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.3
    });

    const imageCards = document.querySelectorAll('.categories__grid .card--image, .categories__grid .card--sport');

    imageCards.forEach((card) => {
        const image = card.querySelector('.card__image img');

        if (!image) return;

        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out'
        });

        ScrollTrigger.create({
            trigger: card,
            start: 'top 60%',
            end: 'bottom 40%',
            toggleClass: { targets: card, className: 'is-active' },
            scrub: false
        });
    });
}

// ========================================
// CONSOLE WELCOME
// ========================================
console.log('%c MONETA Macedonia 🦶 ', 'background:#EC1752;color:#fff;font-size:20px;font-weight:bold;padding:10px 20px;border-radius:8px;');
console.log('%c Анатомски вложки - Подобар чекор, помал замор', 'color:#201F26;font-size:14px;');
console.log('%c Вебсајт во развој 💪', 'color:#6B6B76;font-size:12px;');