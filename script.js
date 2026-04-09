/* ============================================================
   GitHub Copilot Learning Hub — Interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollReveal();
  initActiveNav();
  initCollapsibles();
  initProgressTracking();
  initShortcutFilter();
  initCopyButtons();
  initMobileMenu();
  initScrollProgress();
});

/* ---------- Theme Toggle ---------- */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });

  updateThemeIcon(document.documentElement.getAttribute('data-theme') || 'dark');
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.innerHTML = theme === 'light'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
}

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ---------- Active Navigation ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-20% 0px -75% 0px' });

  sections.forEach(section => observer.observe(section));
}

/* ---------- Collapsible Sections ---------- */
function initCollapsibles() {
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.collapsible');
      parent.classList.toggle('open');
    });
  });
}

/* ---------- Progress Tracking ---------- */
function initProgressTracking() {
  const checks = document.querySelectorAll('.section-check');
  const progressBar = document.getElementById('learning-progress');
  const saved = JSON.parse(localStorage.getItem('copilot-progress') || '{}');

  checks.forEach(check => {
    const id = check.dataset.section;
    if (saved[id]) check.checked = true;

    check.addEventListener('change', () => {
      const state = JSON.parse(localStorage.getItem('copilot-progress') || '{}');
      state[id] = check.checked;
      localStorage.setItem('copilot-progress', JSON.stringify(state));
      updateProgress();
    });
  });

  updateProgress();

  function updateProgress() {
    const total = checks.length;
    if (!total) return;
    const checked = document.querySelectorAll('.section-check:checked').length;
    const pct = Math.round((checked / total) * 100);
    if (progressBar) {
      progressBar.style.width = pct + '%';
      progressBar.title = `${checked}/${total} sections completed (${pct}%)`;
    }
  }
}

/* ---------- Keyboard Shortcut Filter ---------- */
function initShortcutFilter() {
  const input = document.getElementById('shortcut-search');
  if (!input) return;

  const table = document.getElementById('shortcut-table');
  const rows = table ? table.querySelectorAll('tbody tr') : [];

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(q) ? '' : 'none';
    });
  });

  // OS toggle
  document.querySelectorAll('.os-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.os-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const os = btn.dataset.os;
      table.querySelectorAll('.key-mac').forEach(el => el.style.display = os === 'mac' ? '' : 'none');
      table.querySelectorAll('.key-win').forEach(el => el.style.display = os === 'win' ? '' : 'none');
    });
  });
}

/* ---------- Copy Buttons ---------- */
function initCopyButtons() {
  document.querySelectorAll('.code-block').forEach(block => {
    const btn = block.querySelector('.copy-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
      const code = block.querySelector('code') || block;
      try {
        await navigator.clipboard.writeText(code.textContent.trim());
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      } catch {
        btn.textContent = 'Failed';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      }
    });
  });
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    const isOpen = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ---------- Scroll Progress Bar ---------- */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}
