// Shared site header (name + bio + main nav) for sub-pages. Home page has the same markup inline.
(function () {
  const root = document.getElementById('site-header');
  if (!root) return;
  // Base path follows how deep the page is (the script src is relative to the page).
  const base = (document.currentScript.getAttribute('src') || '').replace(/site-header\.js.*$/, '') || '../';
  const path = location.pathname.replace(/index\.html$/, '');
  const items = [['', 'Home'], ['projects/', 'Projects'], ['posts/', 'Blog'], ['resume/', 'CV']];
  const links = items.map(([p, t]) => {
    const current = p ? path.includes('/' + p) : false;
    return `<a href="${base}${p}"${current ? ' aria-current="page"' : ''}>${t}</a>`;
  }).join('\n          ');
  root.outerHTML = `
      <section id="info">
        <div id="text"><a href="${base}" id="name">Raouf Ralph Halabi</a></div>
        <div id="bio">Lead Data Analyst for Penn State Men's Soccer<br>Biomechanics Research Assistant</div>
        <button id="theme-toggle" aria-label="theme switch">
            <span class="moon-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg></span>
            <span class="sun-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg></span>
          </button>
      </section>
      <section id="links">
        <div id="left">
          ${links}
        </div>
        ` + `<div id="right">
          <a href="https://github.com/roof37" aria-label="GitHub" target="_blank" rel="noreferrer noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/ralph-halabi-47a6a6318" aria-label="LinkedIn" target="_blank" rel="noreferrer noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://x.com/halabi_ralph" aria-label="Twitter / X" target="_blank" rel="noreferrer noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="https://medium.com/@raoufhalabi" aria-label="Medium" target="_blank" rel="noreferrer noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"></path></svg>
          </a>
          <a href="mailto:ralphhalabi1@gmail.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>` + `
      </section>`;
})();

// Blog posts: fit the text column beside each image to the image's height (re-runs on resize).
(function () {
  let rows = [];
  function fit() {
    const narrow = window.matchMedia('(max-width: 640px)').matches;
    rows.forEach(row => {
      const box = row.querySelector('.fig-text'), fig = row.querySelector('figure');
      const pool = [...box.children];
      let n = row.nextElementSibling;
      while (n && n.tagName === 'P') { pool.push(n); n = n.nextElementSibling; }
      // Start empty, then add paragraphs in order.
      pool.forEach(p => row.after(p));            // temporarily place after row (keeps order below)
      for (let i = pool.length - 1; i >= 0; i--) row.after(pool[i]);
      if (narrow) { pool.forEach(p => box.appendChild(p)); return; }
      const target = fig.getBoundingClientRect().height;
      let used = 0;
      pool.forEach((p, i) => {
        const before = box.getBoundingClientRect().height;
        box.appendChild(p);
        const after = box.getBoundingClientRect().height;
        if (i === 0) { used = 1; return; }
        // keep this paragraph only if it brings the text height closer to the image height
        if (used === i && before < target && Math.abs(after - target) < Math.abs(before - target)) { used++; }
        else row.after(p);
      });
      // paragraphs moved out must stay in original order after the row
      const out = pool.slice(used);
      for (let i = out.length - 1; i >= 0; i--) row.after(out[i]);
    });
  }
  const run = () => requestAnimationFrame(fit);
  function init() {
    rows = [...document.querySelectorAll('.fig-row')];
    if (!rows.length) return;
    window.addEventListener('load', run);
    let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(run, 120); });
    document.querySelectorAll('.fig-row img').forEach(i => i.complete || i.addEventListener('load', run));
    run();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

// Theme: start from the system light/dark setting; a manual toggle overrides it for this tab session.
// If the system setting changes while no manual choice exists, follow it live.
(function () {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const apply = () => {
    if (sessionStorage.getItem('theme')) return;
    document.body.classList.toggle('dark', mq.matches);
  };
  apply();
  (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(apply);
})();
