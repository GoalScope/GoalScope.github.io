(function(){
  const KEY='gs-theme';
  function apply(t){
    const isDark = t==='dark';
    document.documentElement.classList.toggle('dark', isDark);
    try{ localStorage.setItem(KEY, t); }catch{}
    document.documentElement.setAttribute('data-theme', t);
    const btn=document.getElementById('gs-theme-btn');
    if(btn){
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.title= isDark ? 'Light mode' : 'Dark mode';
      const icon=btn.querySelector('.gs-theme-icon');
      if(icon) icon.textContent = isDark ? '☀' : '☾';
      const label=btn.querySelector('.gs-theme-label');
      if(label) label.textContent = isDark ? 'Light' : 'Dark';
    }
  }
  function init(){
    let saved=null; try{ saved=localStorage.getItem(KEY); }catch{}
    if(saved==='light'||saved==='dark'){ apply(saved); return; }
    // default to dark (site design) unless user prefers light explicitly
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    apply(prefersLight ? 'light' : 'dark');
  }
  window.gsToggleTheme=function(){
    const isDark=document.documentElement.classList.contains('dark');
    apply(isDark ? 'light' : 'dark');
  };
  // early apply before paint if possible
  init();
  // after DOM ready keep icon in sync (header may load late)
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', ()=>{ const k=localStorage.getItem(KEY); if(k) apply(k); });
  else setTimeout(()=>{ const k=localStorage.getItem(KEY); if(k) apply(k); },0);
})();
