// Turns the h1-separated sections of #brief into tabs. Without JS, everything stays visible.
const brief = document.getElementById('brief');
if (brief) {
  const heads = [...brief.querySelectorAll(':scope > h1')];
  if (heads.length) {
    const tablist = document.createElement('div');
    tablist.className = 'tabs'; tablist.setAttribute('role', 'tablist');
    const panels = [];
    heads.forEach((h, i) => {
      const panel = document.createElement('div');
      panel.className = 'tab-panel'; panel.setAttribute('role', 'tabpanel'); panel.id = 'panel-' + h.id;
      let n = h.nextElementSibling;
      while (n && n.tagName !== 'H1') { const next = n.nextElementSibling; panel.appendChild(n); n = next; }
      h.after(panel);
      const tab = document.createElement('button');
      tab.className = 'tab'; tab.setAttribute('role', 'tab'); tab.textContent = h.textContent; tab.dataset.id = h.id;
      tab.setAttribute('aria-controls', panel.id);
      tab.addEventListener('click', () => show(h.id));
      tablist.appendChild(tab); panels.push({ id: h.id, tab, panel });
      h.hidden = true;
    });
    heads[0].before(tablist);
    function show(id, push = true) {
      panels.forEach(p => {
        const on = p.id === id;
        p.panel.hidden = !on; p.tab.setAttribute('aria-selected', on);
        p.tab.tabIndex = on ? 0 : -1;
      });
      if (push) history.replaceState(null, '', '#' + id);
    }
    tablist.addEventListener('keydown', e => {
      const i = panels.findIndex(p => p.tab === document.activeElement);
      if (i < 0 || !['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
      const j = (i + (e.key === 'ArrowRight' ? 1 : -1) + panels.length) % panels.length;
      panels[j].tab.focus(); show(panels[j].id);
    });
    const start = panels.find(p => '#' + p.id === location.hash) || panels[0];
    show(start.id, false);
  }
}
