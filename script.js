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

    gsap.from('.categories__grid .card', {
        scrollTrigger: {
            trigger: '.categories__grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out'
    });

    const imageCards = document.querySelectorAll('.categories__grid .card--image, .categories__grid .card--sport');

    imageCards.forEach((card) => {
        const image = card.querySelector('.card__image img');
        const icon = card.querySelector('.card__icon');

        if (!image || !icon) return;

        gsap.fromTo(image, {
            filter: 'blur(22px) brightness(0.55)',
            scale: 1
        }, {
            filter: 'blur(0px) brightness(0.85)',
            scale: 1.06,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 40%',
                scrub: 0.8,
                toggleActions: 'play none none reverse'
            }
        });

        gsap.fromTo(icon, {
            boxShadow: '0 0 0 rgba(236, 23, 82, 0)',
            scale: 1
        }, {
            boxShadow: '0 0 25px rgba(236, 23, 82, 0.55), 0 0 40px rgba(236, 23, 82, 0.25)',
            scale: 1.03,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'top 50%',
                scrub: 0.8,
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// ========================================
// CONSOLE WELCOME
// ========================================
console.log('%c MONETA Macedonia 🦶 ', 'background:#EC1752;color:#fff;font-size:20px;font-weight:bold;padding:10px 20px;border-radius:8px;');
console.log('%c Анатомски вложки - Подобар чекор, помал замор', 'color:#201F26;font-size:14px;');
console.log('%c Вебсајт во развој 💪', 'color:#6B6B76;font-size:12px;');