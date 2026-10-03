const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    mobileNav.hidden = open;
  });
}

document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = filter === 'all' || card.dataset.type === filter ? '' : 'none';
    });
  });
});

document.getElementById('printCv')?.addEventListener('click', () => window.print());

document.getElementById('copyLink')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    const btn = document.getElementById('copyLink');
    const old = btn.innerHTML;
    btn.innerHTML = '<span>Portfolio</span><b>Link copied ✓</b>';
    setTimeout(() => btn.innerHTML = old, 1800);
  } catch {
    alert('Copy the current page URL from your browser address bar.');
  }
});
