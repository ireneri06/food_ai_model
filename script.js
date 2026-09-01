/* ================================================
   FOOD AI RECOGNITION — JAVASCRIPT
   ================================================ */

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.textContent = isOpen ? '닫기' : '메뉴';
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.textContent = '메뉴';
  });
});

// Active nav on scroll
const sections    = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      allNavLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

// Scroll reveal
const revealEls = [
  ...document.querySelectorAll('.card'),
  ...document.querySelectorAll('.diff-block'),
  ...document.querySelectorAll('.class-item'),
  ...document.querySelectorAll('.screen-card'),
  ...document.querySelectorAll('.tl-item'),
  ...document.querySelectorAll('.comment-block'),
  ...document.querySelectorAll('.link-row'),
  document.getElementById('insight-box'),
  document.getElementById('about-card'),
  document.getElementById('comparison-table'),
  document.getElementById('param-table'),
].filter(Boolean);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 5) * 0.07}s`;
});

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObs.observe(el));
