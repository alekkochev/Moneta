const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.classList.toggle('is-active');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Затвори мени' : 'Отвори мени');
});

links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Отвори мени');
    });
});

document.addEventListener('click', (e) => {
    const nav = document.querySelector('.navbar__inner');
    if (!nav.contains(e.target) && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Отвори мени');
    }
});

AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

console.log('%c MONETA Macedonia 🦶 ', 'background: #EC1752; color: #fff; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Анатомски вложки - Подобар чекор, помал замор', 'color: #201F26; font-size: 14px;');
console.log('%c Вебсајт во развој 💪', 'color: #6B6B76; font-size: 12px;');